from fastapi import APIRouter, HTTPException
from app.core.models import Order
from app.adapters.persistence.in_memory_order_repository import get_order_by_id, get_stock, get_orders 
from app.core.services import calculate_order_subtotal, calculate_order_total, calculate_taxes,calculate_order_discounts,calculate_orders

router = APIRouter()


@router.get("/orders", response_model=list[Order])
def read_orders(skip: int = 0, take: int = 5, tax_percentage: int = 15, discount_percentage: int = 0):
    orders = get_orders(skip, take)
    if not orders:
        raise HTTPException(status_code=404, detail="No orders found")
    
    stock = get_stock()
    orders = calculate_orders(stock, orders, tax_percentage, discount_percentage)
    
    return orders


@router.get("/orders/{order_id}", response_model=Order)
def read_order(order_id: int, tax_percentage: int = 15, discount_percentage: int = 0):
    order = get_order_by_id(order_id)
    if order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    
    stock = get_stock()

    order_subtotal = calculate_order_subtotal(order, stock)
    order_with_taxes = calculate_taxes(order_subtotal, tax_percentage)
    order_with_discounts = calculate_order_discounts(order_with_taxes, discount_percentage)
    order_total = calculate_order_total(order_with_discounts)
    
    return order_total