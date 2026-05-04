from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Any

from app.api import deps
from app.db.session import get_db
from app.models.user import User
from app.models.chat import ChatMessage
from app.services.ai_service import ai_service
from app.services.document_service import document_service

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/query")
async def query_knowledge_base(
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    RAG endpoint: Search documents and generate response.
    """
    # 1. Get query embedding
    query_embedding = ai_service.get_embeddings([request.message])[0]
    
    # 2. Search relevant chunks
    chunks = document_service.search_chunks(db, current_user, query_embedding, limit=5)
    
    if not chunks:
        # Save empty response
        db_log = ChatMessage(user_id=current_user.id, query=request.message, answer="No relevant information found.")
        db.add(db_log)
        db.commit()
        return {"answer": "I couldn't find any relevant information in your documents."}
    
    # 3. Assemble context
    context = "\n\n".join([f"Source: {c.document.filename}\nContent: {c.content}" for c in chunks])
    
    # 4. Generate response with LLM
    system_prompt = f"""You are an AI Knowledge Assistant. Use the provided context to answer the user's question. 
If the answer is not in the context, say you don't know based on the documents. 
Always cite the source filename in your answer.

Context:
{context}
"""
    
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": request.message}
    ]
    
    async def generate():
        response = ai_service.get_completion(messages)
        full_response = ""
        for chunk in response:
            if chunk.text:
                full_response += chunk.text
                yield chunk.text
        
        # Save to DB after stream finishes
        db_log = ChatMessage(user_id=current_user.id, query=request.message, answer=full_response)
        db.add(db_log)
        db.commit()

    return StreamingResponse(generate(), media_type="text/plain")

@router.get("/history")
def get_chat_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Get chat history for current user.
    """
    return db.query(ChatMessage).filter(ChatMessage.user_id == current_user.id).order_by(ChatMessage.created_at.desc()).all()

@router.post("/general")
async def general_chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    General chat endpoint: No RAG, just LLM.
    """
    messages = [
        {"role": "system", "content": "You are a helpful AI Assistant. Answer the user's questions clearly and concisely."},
        {"role": "user", "content": request.message}
    ]
    
    async def generate():
        response = ai_service.get_completion(messages)
        full_response = ""
        for chunk in response:
            if chunk.text:
                full_response += chunk.text
                yield chunk.text
        
        # Save to DB after stream finishes
        db_log = ChatMessage(user_id=current_user.id, query=request.message, answer=full_response)
        db.add(db_log)
        db.commit()

    return StreamingResponse(generate(), media_type="text/plain")
