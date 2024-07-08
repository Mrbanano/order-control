from datetime import datetime
from app.core.models import Stock

stock_data = Stock(
    last_updated=datetime.strptime("2024-07-07 12:00:00", "%Y-%m-%d %H:%M:%S"),
    beers=[
        {"name": "Corona", "price": 115, "quantity": 2, "img": "https://i.postimg.cc/SNZZ1Dbw/corona-min.jpg"},
        {"name": "Quilmes", "price": 120, "quantity": 0, "img": "https://i.postimg.cc/c1hT6XCr/quilmes-min.jpg"},
        {"name": "Club Colombia", "price": 110, "quantity": 3, "img": "https://i.postimg.cc/sXRKGL5Z/club-colombia-min.jpg"}
    ]
)