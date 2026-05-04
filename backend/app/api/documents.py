from typing import List, Any
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session

from app.api import deps
from app.db.session import get_db
from app.models.user import User
from app.models.document import Document
from app.services.document_service import document_service

router = APIRouter()

@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Upload and process a document.
    """
    if not file.filename.endswith(('.pdf', '.txt')):
        raise HTTPException(status_code=400, detail="Only PDF and TXT files are supported.")
    
    document = await document_service.process_document(db, file, current_user)
    return {
        "id": document.id,
        "filename": document.filename,
        "message": "Document uploaded and chunked successfully."
    }

@router.get("/")
def list_documents(
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    List all documents for the current user.
    """
    return db.query(Document).filter(Document.user_id == current_user.id).all()
