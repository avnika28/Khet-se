import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Khet Se Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

if url and key and "your-project" not in url:
    supabase: Client = create_client(url, key)
else:
    # Dummy mock for now until proper config
    supabase = None

class Order(BaseModel):
    user_id: str
    items_json: str
    status: str
    total_amount: float
    delivery_address: Optional[str] = None
    farmer_name: Optional[str] = None

class Payment(BaseModel):
    order_id: int
    upi_ref: str
    status: str

@app.get("/api/products")
def get_products():
    if not supabase:
        raise HTTPException(status_code=501, detail="Supabase not configured")
    res = supabase.table("products").select("*").execute()
    return res.data

@app.post("/api/orders")
def create_order(order: Order):
    if not supabase:
        raise HTTPException(status_code=501, detail="Supabase not configured")
    res = supabase.table("orders").insert(order.dict()).execute()
    return res.data[0]

@app.get("/api/orders/{user_id}")
def get_orders(user_id: str):
    if not supabase:
        raise HTTPException(status_code=501, detail="Supabase not configured")
    res = supabase.table("orders").select("*").eq("user_id", user_id).execute()
    return res.data

@app.patch("/api/orders/{order_id}/status")
def update_order_status(order_id: int, status: dict):
    if not supabase:
        raise HTTPException(status_code=501, detail="Supabase not configured")
    res = supabase.table("orders").update({"status": status.get("status")}).eq("id", order_id).execute()
    return res.data[0]

@app.post("/api/payments")
def create_payment(payment: Payment):
    if not supabase:
        raise HTTPException(status_code=501, detail="Supabase not configured")
    res = supabase.table("payments").insert(payment.dict()).execute()
    return res.data[0]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5000, reload=True)
