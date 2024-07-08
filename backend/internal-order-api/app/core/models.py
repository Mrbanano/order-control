from pydantic import BaseModel, Field, validator
from typing import List, Optional
from datetime import datetime

class Item(BaseModel):
    name: str
    quantity: int
    price_per_unit: Optional[float] = None
    total: Optional[float] = None
    img: Optional[str] = None

class RoundItem(BaseModel):
    name: str
    quantity: int
    img: Optional[str] = None


class Round(BaseModel):
    created: datetime
    items: List[RoundItem]

class Order(BaseModel):
    id: int
    created: datetime
    paid: bool
    subtotal: float
    total: float
    taxes: float
    discounts: float
    items: List[Item]
    rounds: List[Round]

    @validator('items', 'rounds', pre=True, each_item=True)
    def check_img_presence(cls, value):
        return {**value, "img": value.get("img", "")}


class StockItem(BaseModel):
    name: str
    price: float
    quantity: int
    img: str

class Stock(BaseModel):
    last_updated: datetime
    beers: List[StockItem]
    
