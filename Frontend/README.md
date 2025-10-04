# Home Price Prediction ML Model

This project is a machine learning-based web application that predicts home prices in Bangalore based on various features such as location, area, number of bedrooms, bathrooms, and balconies.

## Table of Contents
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
  - [Starting the Backend Server](#starting-the-backend-server)
  - [Starting the Frontend Server](#starting-the-frontend-server)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Machine Learning Model](#machine-learning-model)

## Architecture

```mermaid
graph TB
    A[Frontend - React/Vite] --> B[FastAPI Backend]
    B --> C[(SQLite Database)]
    B --> D[ML Model - Scikit-learn]
    
    subgraph Frontend
        A
    end
    
    subgraph Backend
        B
        D
    end
    
    subgraph Data
        C
    end
    
    B --> E{API Endpoints}
    E --> F[/predict]
```

The application follows a client-server architecture:
1. **Frontend**: Built with React and Vite, provides a user interface for inputting home features
2. **Backend**: FastAPI server that handles API requests and serves the machine learning model
3. **Database**: SQLite database for storing user data
4. **ML Model**: Pre-trained Scikit-learn model for price prediction

## Tech Stack

### Backend
- [FastAPI](https://fastapi.tiangolo.com/) - Modern, fast (high-performance) web framework for building APIs
- [Scikit-learn](https://scikit-learn.org/) - Machine learning library for the prediction model
- [Joblib](https://joblib.readthedocs.io/) - Library for saving/loading ML models
- [SQLAlchemy](https://www.sqlalchemy.org/) - SQL toolkit and ORM for database operations
- [SQLite](https://www.sqlite.org/) - Lightweight database

### Frontend
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
- [Axios](https://axios-http.com/) - Promise based HTTP client
- [SweetAlert2](https://sweetalert2.github.io/) - Beautiful, responsive, customizable popup boxes

## Project Structure

```
.
├── Backend/
│   ├── app/
│   │   ├── machine_models/          # Pre-trained ML model and data columns
│   │   ├── models/                  # Database models
│   │   ├── pydantic_models/         # Data validation models
│   │   ├── routers/                 # API route definitions
│   │   └── main.py                  # FastAPI application entry point
│   └── requirements.txt             # Python dependencies
└── Frontend/
    ├── src/
    │   ├── App.jsx                  # Main React component
    │   ├── index.css                # Global CSS styles
    │   └── main.jsx                 # React application entry point
    ├── index.html                   # Main HTML file
    └── package.json                 # Node.js dependencies
```

## Setup and Installation

### Backend Setup

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
   pip install fastapi uvicorn scikit-learn joblib sqlalchemy
   ```
   Or if you have a requirements.txt file:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend Setup

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install the required Node.js packages:
   ```bash
   npm install
   ```

## Running the Application

### Starting the Backend Server

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Run the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```
   
   The backend server will start on `http://127.0.0.1:8000`

### Starting the Frontend Server

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   
   The frontend server will start on `http://localhost:5173`

## API Endpoints

- `POST /price/predict/` - Predict home price based on input features
  - Request body:
    ```json
    {
      "location": "string",
      "sqft": "number",
      "bath": "integer",
      "balcony": "integer",
      "bhk": "integer"
    }
    ```
  - Response:
    ```json
    {
      "predicted_price": "number"
    }
    ```

## Usage

1. Start both the backend and frontend servers as described above
2. Open your browser and navigate to `http://localhost:5173`
3. Fill in the required details:
   - Select a location from the dropdown
   - Enter the area in square feet
   - Enter the number of bathrooms
   - Enter the number of balconies
   - Enter the number of bedrooms (BHK)
4. Click the "Search" button to get the predicted price

## Machine Learning Model

The project uses a pre-trained Scikit-learn model saved as a pickle file (`banglore_home_prices.pickle`). The model was trained on Bangalore home price data and uses features like location, area, number of bathrooms, balconies, and BHK to predict prices.

The model expects input data in a specific format with one-hot encoded location features, which is handled in the backend API.