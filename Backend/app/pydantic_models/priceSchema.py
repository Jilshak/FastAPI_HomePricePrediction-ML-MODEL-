from pydantic import BaseModel

class PricePredictionInput(BaseModel):
    location: str
    sqft: float
    bath: int
    balcony: int
    bhk: int