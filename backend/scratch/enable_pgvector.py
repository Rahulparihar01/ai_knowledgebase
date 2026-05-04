from sqlalchemy import create_engine, text
from app.core.config import settings

def enable_vector_extension():
    engine = create_engine(settings.DATABASE_URL)
    with engine.connect() as conn:
        print("Enabling vector extension...")
        conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector;"))
        conn.commit()
        print("Extension enabled successfully.")

if __name__ == "__main__":
    enable_vector_extension()
