from sqlalchemy import Column, Integer, String, Boolean, ARRAY
from ..models import database
from ..pydantic_models import imageSchema


class ImageModel(imageSchema.ImageBase):
    id: int
    class Config:
        from_attributes = True

# tha database schema
class Image(database.Base):
    __tablename__ = "image"

    id = Column(Integer, primary_key=True, index=True)
    image = Column(String, index=True)