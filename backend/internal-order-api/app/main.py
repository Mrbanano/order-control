from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.adapters.api import order_router


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(order_router.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Orders API"}
