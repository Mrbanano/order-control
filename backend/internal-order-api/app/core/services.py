from typing import Dict,List
from app.core.models import Order, Stock, Item

def calculate_orders(stock: Stock, orders: List[Order], tax_percentage: int = 15, discount_percentage: int = 0) -> List[Order]:
    for order in orders:
        order_subtotal = calculate_order_subtotal(order, stock)
        order_with_taxes = calculate_taxes(order_subtotal, tax_percentage)
        order_with_discounts = calculate_order_discounts(order_with_taxes, discount_percentage)
        order_total = calculate_order_total(order_with_discounts)
        order = order_total
    return orders

def calculate_order_total(order: Order) -> Order:
    subtotal = order.subtotal
    discount = order.discounts
    taxes = order.taxes
    total = subtotal - discount + taxes
    order.total = total
    return order

def calculate_order_discounts(order: Order, discountPercentage = 0) -> Order:
    if discountPercentage == 0:
        return order
    
    discounts = (order.subtotal * discountPercentage) / 100
    order.discounts = discounts
    return order

def calculate_taxes(order, taxPercentage=15) -> Order:
    taxes = (order.subtotal * taxPercentage) / 100
    order.taxes = taxes
    return order

def accumulate_item_quantities(order: Order) -> Dict[str, Dict[str, int]]:
    item_totals: Dict[str, Dict[str, int]] = {}

    for round in order.rounds:
        for item in round.items:
            if item.name not in item_totals:
                item_totals[item.name] = {"quantity": 0}
            item_totals[item.name]["quantity"] += item.quantity

    return item_totals

def calculate_general_items(item_totals: Dict[str, Dict[str, int]], stock: Stock) -> tuple[float, List[Item]]:
    subtotal = 0
    general_items = []

    for item_name, data in item_totals.items():
        for stock_item in stock.beers:
            if stock_item.name == item_name:
                price_per_unit = stock_item.price
                total = data["quantity"] * price_per_unit
                subtotal += total
                general_items.append(Item(name=item_name, quantity=data["quantity"], img=stock_item.img, price_per_unit=price_per_unit, total=total))
                break

    return subtotal, general_items

def update_round_items(order: Order, stock: Stock) -> None:
    for round in order.rounds:
        for item in round.items:
            for stock_item in stock.beers:
                if item.name == stock_item.name:
                    item.img = stock_item.img
                    break


def calculate_order_subtotal(order: Order, stock: Stock) -> Order:
    item_totals = accumulate_item_quantities(order)
    subtotal, general_items = calculate_general_items(item_totals, stock)

    order.subtotal = subtotal
    order.items = general_items

    update_round_items(order, stock)

    return order
