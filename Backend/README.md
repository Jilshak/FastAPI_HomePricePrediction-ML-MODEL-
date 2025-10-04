# Home Price Prediction Backend

This is the backend component of the Home Price Prediction ML Model project, built with FastAPI.

## API Documentation

Once the server is running, you can access the automatic interactive API documentation:

- **Swagger UI**: `http://127.0.0.1:8000/docs`
- **ReDoc**: `http://127.0.0.1:8000/redoc`

## Setup Instructions

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Server

To start the development server:
```bash
uvicorn app.main:app --reload
```

The server will start on `http://127.0.0.1:8000`.

## Project Structure

```
app/
├── machine_models/          # Pre-trained ML model and data columns
├── models/                  # Database models
├── pydantic_models/         # Data validation models
├── routers/                 # API route definitions
└── main.py                  # FastAPI application entry point
```

## API Endpoints

- `POST /price/predict/` - Predict home price based on input features

## Database

The application uses SQLite as its database, with SQLAlchemy as the ORM. The database file (`users.db`) is automatically created when the application runs for the first time.