import fitz  # PyMuPDF
from langchain_text_splitters import RecursiveCharacterTextSplitter
from sqlalchemy.orm import Session
from fastapi import UploadFile
import io
from typing import List

from app.models.document import Document, DocumentChunk
from app.models.user import User
from app.services.ai_service import ai_service

class DocumentService:
    def __init__(self):
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len,
        )

    async def process_document(self, db: Session, file: UploadFile, user: User) -> Document:
        # 1. Save document metadata
        contents = await file.read()
        db_document = Document(
            filename=file.filename,
            content_type=file.content_type,
            size=len(contents),
            user_id=user.id
        )
        db.add(db_document)
        db.commit()
        db.refresh(db_document)

        # 2. Extract text (assuming PDF for now)
        text = ""
        if file.content_type == "application/pdf":
            doc = fitz.open(stream=contents, filetype="pdf")
            for page in doc:
                text += page.get_text()
        else:
            text = contents.decode("utf-8")

        # 3. Create chunks
        chunks = self.text_splitter.split_text(text)
        
        # 4. Generate embeddings for chunks
        # Process in batches if there are many chunks (OpenAI limit is usually high but good practice)
        embeddings = ai_service.get_embeddings(chunks)
        
        for i, (chunk_content, embedding) in enumerate(zip(chunks, embeddings)):
            db_chunk = DocumentChunk(
                document_id=db_document.id,
                content=chunk_content,
                chunk_index=i,
                embedding=embedding
            )
            db.add(db_chunk)
        
        db.commit()
        return db_document

    def search_chunks(self, db: Session, user: User, query_embedding: List[float], limit: int = 5) -> List[DocumentChunk]:
        """
        Perform similarity search using pgvector.
        """
        return db.query(DocumentChunk).join(Document).filter(
            Document.user_id == user.id
        ).order_by(
            DocumentChunk.embedding.cosine_distance(query_embedding)
        ).limit(limit).all()

document_service = DocumentService()
