from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/")
def home():
    return {
        "message": "AI First CRM Backend Running 🚀"
    }


@router.get("/health")
def health():
    return {
        "status": "Healthy"
    }