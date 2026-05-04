from google import genai
from typing import List
from app.core.config import settings

class AIService:
    def __init__(self):
        self.client = genai.Client(api_key=settings.GOOGLE_API_KEY)
        self.embedding_model = settings.EMBEDDING_MODEL
        self.llm_model = settings.LLM_MODEL

    def get_embeddings(self, texts: List[str]) -> List[List[float]]:
        # google-genai SDK handles batch embeddings
        result = self.client.models.embed_content(
            model=self.embedding_model,
            contents=texts,
            config={'task_type': 'RETRIEVAL_DOCUMENT'}
        )
        return [embedding.values for embedding in result.embeddings]

    def get_completion(self, messages: List[dict], stream: bool = True):
        # Convert standard message format to google-genai format
        # The new SDK uses a more simplified interaction
        
        system_instruction = ""
        contents = []
        
        for msg in messages:
            if msg['role'] == 'system':
                system_instruction = msg['content']
            else:
                contents.append({
                    'role': 'user' if msg['role'] == 'user' else 'model',
                    'parts': [{'text': msg['content']}]
                })
        
        # In google-genai, system_instruction is passed at generation time or model config
        # Here we use the simplified generate_content
        return self.client.models.generate_content_stream(
            model=self.llm_model,
            contents=contents,
            config={
                'system_instruction': system_instruction
            }
        )

ai_service = AIService()
