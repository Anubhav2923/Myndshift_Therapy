# Mental Health Check-in Application

A comprehensive MERN stack application for daily mental health check-ins with Clerk authentication.

## Features

- 🔐 Secure authentication with Clerk
- 📱 Responsive design for all devices
- 📊 Daily mood and stress tracking
- 📈 Visual analytics and trends
- 🌙 Sleep pattern monitoring
- 🙏 Gratitude journaling
- 📅 Historical check-in data

## Tech Stack

### Frontend (Client)
- React 18 with JavaScript
- Vite for fast development
- Tailwind CSS for styling
- Clerk for authentication
- Lucide React for icons
- Chart.js for data visualization
- Date-fns for date handling

### Backend (Server)
- Node.js with Express
- MongoDB with Mongoose
- Clerk SDK for authentication
- CORS for cross-origin requests
- Helmet for security headers
- Morgan for logging
- Express rate limiting

## Project Structure

```
mental-health-checkin-mern/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── libs/         # Custom librarys
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   └── config/        # Config functions
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Clerk account for authentication

### Environment Variables

#### Client (.env)
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000/api
```

#### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mental-health-checkin
CLERK_SECRET_KEY=your_clerk_secret_key
NODE_ENV=development
```

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd mental-health-checkup
```

2. Install dependencies for both client and server
```bash
    cd./ client/ npm install
    cd./server/ npm install
```

3. Set up environment variables
- Create `.env` files in both `client` and `server` directories
- Add the required environment variables as shown above

4. Start the development servers
```bash
npm run dev
```

This will start both the client (http://localhost:5173) and server (http://localhost:5000) concurrently.

### Production Deployment

1. Build the client
```bash
npm run build
```

2. Start the production server
```bash
npm run dev
```
## Security Features

- Clerk authentication and authorization
- Input validation and sanitization
- CORS configuration
- MongoDB injection protection
