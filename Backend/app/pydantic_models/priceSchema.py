from pydantic import BaseModel

class PricePredictionInput(BaseModel):
    area_type: str
    sqft: float
    bath: int
    balcony: int
    bhk: int