# AINA - Asisten Masisir

A live landing page for AINA, an AI-powered digital assistant and ecosystem for Indonesian students in Egypt (Masisir). Positioned as a LIVE, growing system — not a proposal or ChatGPT clone. Stack: React frontend (port 5000) + FastAPI backend (port 8000).

## Architecture

- **Frontend**: React 19 + CRACO (Create React App + Configuration Override)
  - Tailwind CSS for styling
  - shadcn/ui component library (Radix UI primitives)
  - React Router DOM for navigation
  - Runs on port 5000 (dev server with all hosts allowed for Replit proxy)
  
- **Backend**: FastAPI (Python)
  - MongoDB (motor async driver) for data persistence
  - Uvicorn ASGI server
  - Runs on port 8000 (localhost only)
  
- **Database**: MongoDB running locally at `mongodb://localhost:27017`, database `aina_db`

## Project Structure

```
/
├── frontend/           # React app
│   ├── src/
│   │   ├── components/ # Page sections (Hero, Features, Roadmap, etc.)
│   │   ├── pages/      # HomePage.jsx
│   │   └── lib/        # Utility functions
│   ├── .env            # PORT=5000, HOST=0.0.0.0, REACT_APP_BACKEND_URL
│   └── craco.config.js # Webpack/devServer config (allowedHosts: "all")
├── backend/
│   ├── server.py       # FastAPI app with MongoDB integration
│   ├── requirements.txt
│   └── .env            # MONGO_URL, DB_NAME, CORS_ORIGINS
├── start_backend.sh    # Starts MongoDB + uvicorn
└── tests/              # Python backend tests
```

## Development Workflows

- **Start application**: `cd frontend && ./node_modules/.bin/craco start` (port 5000, webview)
- **Backend API**: `bash start_backend.sh` (starts MongoDB + uvicorn on port 8000)

## Key Notes

- Frontend uses `npm install --legacy-peer-deps` due to peer dependency conflicts with `react-day-picker` and `date-fns`
- MongoDB is installed as a system dependency and started via `start_backend.sh`
- The frontend `.env` has `HOST=0.0.0.0` and `allowedHosts: "all"` in craco config for Replit proxy
- Backend CORS is set to `*` for development
