import joblib
import json
from fastapi import APIRouter
from pydantic_models.priceSchema import PricePredictionInput

model = joblib.load('machine_models/banglore_home_prices.pickle')

with open('machine_models/columns.json', 'r') as file:
    data_columns = json.load(file)
    
price = APIRouter(
    prefix='/price',
    tags=['price']
)



@price.post("/predict/")
def predict_price(input_data: PricePredictionInput):
    if input_data.area_type in data_columns["data_columns"]:
        loc_index = data_columns["data_columns"].index(input_data.area_type)
    
        # x = [0.0] --> this initialized the x with the no.of colums as much as the data_colums otherwise it won't know what to expect and it might cause some issues and the field might not be filled as expected
        x = [0.0] * len(data_columns["data_columns"]) 
        x[0] = input_data.sqft
        x[1] = input_data.bath
        x[2] = input_data.balcony
        x[3] = input_data.bhk
    
        if loc_index >= 0:
            x[loc_index] = 1
        
        predicted_price = model.predict([x])[0]
        return {"predicted_price": predicted_price}
    else:
        return {"error": "Invalid area_type"}
    
