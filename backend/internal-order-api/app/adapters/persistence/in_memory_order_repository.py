from typing import List
from datetime import datetime
from app.core.models import Order, Stock
from app.adapters.persistence.data.orders_data import orders_data
from app.adapters.persistence.data.stock_data import stock_data

def get_order_by_id(order_id: int) -> Order:
    for order in orders_data:
        if order.id == order_id:
            return order
    return None

def get_orders(skip= 0 , take=5) -> List[Order]:
    return orders_data[skip:skip+take]

def get_stock() -> Stock:
    return stock_data