from pydantic import BaseModel
from typing import List

class ItemSchema(BaseModel):
    name: str
    quantity: int

class RoundSchema(BaseModel):
    created: str
    items: List[ItemSchema]

class OrderSchema(BaseModel):
    id: int
    created: str
    paid: bool
    subtotal: float
    taxes: float
    discounts: float
    items: List[ItemSchema]
    rounds: List[RoundSchema]
