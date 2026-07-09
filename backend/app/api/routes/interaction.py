from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import or_

from app.db.database import get_db
from app.models.interaction import Interaction
from app.schemas.interaction import (
    InteractionCreate,
    InteractionResponse,
)

router = APIRouter(
    prefix="/interaction",
    tags=["Interaction"]
)



@router.post("/" ,  response_model=InteractionResponse)
def create_interaction(
    data: InteractionCreate,
    db: Session = Depends(get_db)
):
    interaction = Interaction(**data.model_dump())
    interaction.status = "draft"

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return interaction


@router.get("/", response_model=list[InteractionResponse])
def get_all(
    db: Session = Depends(get_db)
):

    return db.query(Interaction).all()




@router.get("/{interaction_id}", response_model=InteractionResponse)
def get_one(
    interaction_id: int,
    db: Session = Depends(get_db)
):

    interaction = db.query(Interaction).filter(
        Interaction.id == interaction_id
    ).first()

    if not interaction:
        raise HTTPException(404, "Interaction not found")

    return interaction




@router.put("/{interaction_id}" ,  response_model=InteractionResponse)
def update_interaction(
    interaction_id: int,
    data: InteractionCreate,
    db: Session =Depends(get_db)
):
    interaction = db.query(Interaction).filter(
        Interaction.id == interaction_id
    ).first()

    if not interaction:
        raise HTTPException(404, "Interaction not found")

    for key, value in data.model_dump().items():
        setattr(interaction, key, value)

    db.commit()
    db.refresh(interaction)

    return interaction



@router.delete("/{interaction_id}")
def delete_interaction(
    interaction_id: int,
    db: Session = Depends(get_db)
):

    interaction = db.query(Interaction).filter(
        Interaction.id == interaction_id
    ).first()

    if not interaction:
        raise HTTPException(404, "Interaction not found")

    db.delete(interaction)

    db.commit()

    return {
        "message": "Deleted successfully"
    }


@router.patch("/{interaction_id}/complete")
def complete_interaction(
    interaction_id:int,
    db:Session=Depends(get_db)
):
    interaction = db.query(Interaction).filter(
        Interaction.id == interaction_id
    ).first()

    if not interaction:
        raise HTTPException(404, "Interaction not found")

    interaction.status = "completed"

    db.commit()
    db.refresh(interaction)

    return interaction




@router.get("/search")
def search_interaction(
    hcp_name: str,
    db: Session = Depends(get_db)
):
    return (
        db.query(Interaction)
        .filter(
            Interaction.hcp_name.ilike(f"%{hcp_name}%")
        )
        .order_by(Interaction.id.desc())
        .all()
    )