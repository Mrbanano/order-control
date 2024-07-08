from datetime import datetime, timedelta
from app.core.models import Order


base_date = datetime.strptime("2024-07-07 14:00:00", "%Y-%m-%d %H:%M:%S")

orders_data = [
    Order(
        id=1,
        created=base_date + timedelta(hours=0),
        paid=False,
        subtotal=0,
        total=0,
        taxes=0,
        discounts=0,
        items=[],
        rounds=[
            {
                "created": base_date + timedelta(hours=0, minutes=0),
                "items": [
                    {"name": "Corona", "quantity": 2},
                    {"name": "Club Colombia", "quantity": 1}
                ]
            },
            {
                "created": base_date + timedelta(hours=0, minutes=15),
                "items": [
                    {"name": "Club Colombia", "quantity": 1},
                    {"name": "Quilmes", "quantity": 2}
                ]
            },
            {
                "created": base_date + timedelta(hours=0, minutes=30),
                "items": [
                    {"name": "Quilmes", "quantity": 3}
                ]
            }
        ]
    ),
    Order(
        id=2,
        created=base_date + timedelta(hours=30),
        paid=True,
        subtotal=0,
        total=0,
        taxes=0,
        discounts=0,
        items=[],
        rounds=[
            {
                "created": base_date + timedelta(hours=30, minutes=0),
                "items": [
                    {"name": "Corona", "quantity": 1},
                    {"name": "Quilmes", "quantity": 1}
                ]
            },
            {
                "created": base_date + timedelta(hours=30, minutes=15),
                "items": [
                    {"name": "Club Colombia", "quantity": 2}
                ]
            }
        ]
    ),
    Order(
        id=3,
        created=base_date + timedelta(hours=60),
        paid=False,
        subtotal=0,
        total=0,
        taxes=0,
        discounts=0,
        items=[],
        rounds=[
            {
                "created": base_date + timedelta(hours=60, minutes=0),
                "items": [
                    {"name": "Corona", "quantity": 3},
                    {"name": "Quilmes", "quantity": 1}
                ]
            }
        ]
    )
]