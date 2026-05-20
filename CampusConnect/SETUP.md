# CampusConnect - Complete Setup Guide

## 📋 Prerequisites

Before you start, ensure you have the following installed:

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
4. **Git** - [Download](https://git-scm.com/)
5. **VS Code or any code editor**

---

## 🚀 Phase 1: HTML + CSS (Static Pages)

### Setup Instructions

1. **Navigate to Phase 1 folder**
   ```bash
   cd phase-1-html-css
   ```

2. **Open in browser**
   - Option A: Double-click `index.html` to open in default browser
   - Option B: Use VS Code Live Server
     - Install Live Server extension (by Ritwick Dey)
     - Right-click `index.html` → Open with Live Server

3. **Access the app**
   - Open browser and go to `http://localhost:5500` (or your Live Server port)

### Pages Available
- ✅ `index.html` - Home page
- ✅ `login.html` - Login page
- ✅ `dashboard.html` - Dashboard with sidebar
- ✅ `attendance.html` - Attendance tracker
- ✅ `notes.html` - Notes sharing
- ✅ `events.html` - Events listing
- ✅ `contact.html` - Contact form

### Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Variables)
- Vanilla JavaScript (minimal)

### Features
- ✓ Fully responsive design
- ✓ Mobile-friendly navigation
- ✓ Modern UI with animations
- ✓ Dark mode support (Phase 2)
- ✓ Form validation (Phase 2)

---

## 🔥 Phase 2: JavaScript (Interactive Features)

### Setup Instructions

1. **Navigate to Phase 2 folder**
   ```bash
   cd phase-2-javascript
   ```

2. **Open in browser (same as Phase 1)**
   - Use Live Server or double-click `index.html`

3. **Available JavaScript Features**
   - Dark mode toggle
   - To-do list management
   - Attendance calculator
   - Search functionality
   - LocalStorage support
   - Form validation

### JavaScript Files
- `js/app.js` - Main application (500+ lines with multiple classes)

### Classes Available
```javascript
// Initialize in browser console
app                    // Main app controller
todoList              // To-do list manager
attendanceCalc        // Attendance calculator
notesManager          // Notes manager
eventsManager         // Events manager
```

### Example Usage
```javascript
// Add a new todo
todoList.addTodo('Study for exam')

// Calculate attendance
attendanceCalc.calculatePercentage(18, 20)  // Returns 90

// Toggle dark mode
app.toggleDarkMode()

// Add a note
notesManager.addNote('Title', 'Subject', 'Description')
```

### Data Persistence
- All data is stored in browser's LocalStorage
- Data persists across sessions
- View stored data in Developer Console → Application → LocalStorage

---

## ⚛️ Phase 3: React.js (Component-Based Frontend)

### Prerequisites
- Node.js and npm installed
- Understanding of React basics (recommended)

### Installation & Setup

1. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the app**
   - Open browser and go to `http://localhost:3000`

### Project Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── DashboardCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Attendance.jsx
│   │   ├── Notes.jsx
│   │   ├── Events.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── index.html
```

### Available Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### React Features
- ✅ Functional components with Hooks
- ✅ React Router for navigation
- ✅ Context API for state management
- ✅ Dark mode toggle
- ✅ Responsive design
- ✅ Form handling

### Key Components
- **Navbar** - Navigation with dark mode toggle
- **Footer** - Footer with links
- **DashboardCard** - Reusable card component
- **Pages** - Home, Dashboard, Login, etc.

### Routing
```
/                - Home page
/dashboard       - Dashboard
/attendance      - Attendance tracker
/notes           - Notes sharing
/events          - Events listing
/login           - Login page
/contact         - Contact form
```

### Dark Mode
- Click sun/moon icon in navbar to toggle dark mode
- Preference is saved in localStorage
- Persists across sessions

---

## 🔧 Phase 4: Node.js + Express + MongoDB (Backend)

### Prerequisites
- Node.js and npm
- MongoDB installed and running
- Port 5000 should be available

### Installation & Setup

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file**
   ```bash
   # Copy .env.example to .env
   cp .env.example .env
   ```

4. **Configure .env**
   ```
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/campusconnect
   JWT_SECRET=your_super_secret_key_here
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:3000
   ```

5. **Start MongoDB**
   ```bash
   # On Windows
   mongod
   
   # On Mac
   brew services start mongodb-community
   
   # On Linux
   sudo service mongod start
   ```

6. **Start the server**
   ```bash
   # Development with auto-reload
   npm run dev
   
   # Production
   npm start
   ```

7. **Test the server**
   - Open browser and go to `http://localhost:5000/api/health`
   - You should see: `{"status":"OK","message":"CampusConnect Backend is running"}`

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| MONGODB_URI | MongoDB connection | mongodb://localhost:27017/campusconnect |
| JWT_SECRET | JWT signing key | your_secret_key |
| JWT_EXPIRE | Token expiration | 7d |
| FRONTEND_URL | Frontend address | http://localhost:3000 |

### Database Setup

**Create MongoDB database:**
```bash
# Connect to MongoDB
mongo

# Create database
use campusconnect

# Collections will be created automatically when you create records
```

### API Endpoints

#### Authentication
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - User login
GET    /api/auth/profile       - Get user profile (requires auth)
PUT    /api/auth/profile       - Update profile
PUT    /api/auth/change-password - Change password
POST   /api/auth/logout        - User logout
```

### Database Models

1. **User** - Student/Faculty/Admin information
2. **Attendance** - Class attendance records
3. **Notes** - Shared lecture notes
4. **Events** - College events
5. **Assignment** - Course assignments

### Middleware

1. **Authentication** (`authMiddleware.js`)
   - JWT verification
   - Role-based access control

2. **Error Handling** (`errorHandler.js`)
   - Centralized error handling
   - Validation error handling

### Controllers

1. **Auth Controller** (`authController.js`)
   - User registration
   - User login
   - Profile management
   - Password change

---

## 🔗 Connecting Frontend to Backend

### React to Express Connection

1. **In frontend, update API URL** (`src/config/api.js` - create if needed)
   ```javascript
   export const API_BASE_URL = 'http://localhost:5000/api'
   ```

2. **Install axios** (if not already installed)
   ```bash
   cd frontend
   npm install axios
   ```

3. **Make API calls**
   ```javascript
   import axios from 'axios'
   import { API_BASE_URL } from './config/api'

   const login = async (email, password) => {
     try {
       const response = await axios.post(`${API_BASE_URL}/auth/login`, {
         email,
         password
       })
       return response.data
     } catch (error) {
       console.error('Login failed:', error)
     }
   }
   ```

### CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (default React dev server)
- Other URLs configured in `.env`

Update if needed in `server.js`:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))
```

---

## 📚 Running All Phases Together

### Terminal 1: MongoDB
```bash
mongod
```

### Terminal 2: Backend
```bash
cd backend
npm run dev
```

### Terminal 3: Frontend
```bash
cd frontend
npm run dev
```

### Terminal 4: Phase 1/2 (optional)
```bash
# For Phase 1-2, use Live Server in VS Code
```

---

## 🧪 Testing the API

### Using Postman or cURL

1. **Register User**
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "name": "John Doe",
       "email": "john@college.edu",
       "password": "password123",
       "department": "CSE",
       "rollNumber": "2021001"
     }'
   ```

2. **Login User**
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "john@college.edu",
       "password": "password123"
     }'
   ```

3. **Get User Profile** (requires token)
   ```bash
   curl -X GET http://localhost:5000/api/auth/profile \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
   ```

---

## 🔧 Troubleshooting

### Phase 1-2: Pages not loading
- ✅ Check file paths in HTML
- ✅ Use relative paths for CSS/JS files
- ✅ Check browser console for errors
- ✅ Try a different browser

### Phase 3: React not starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Phase 4: MongoDB connection error
- ✅ Check MongoDB is running: `mongod`
- ✅ Verify connection string in `.env`
- ✅ Check port 27017 is available
- ✅ Check MongoDB logs

### Port already in use
```bash
# Kill process on port 5000 (Linux/Mac)
lsof -ti:5000 | xargs kill -9

# On Windows, use Task Manager or:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## 📦 Installing Additional Packages

### Frontend
```bash
cd frontend
npm install package-name
```

### Backend
```bash
cd backend
npm install package-name
```

---

## 🚀 Deployment

### Phase 1-2
- Upload files to any web hosting
- Or use GitHub Pages for static files

### Phase 3 (React)
```bash
npm run build
# Deploy 'dist' folder
```

### Phase 4 (Backend)
- Deploy to Heroku, AWS, or DigitalOcean
- Update MongoDB Atlas URI in production

---

## 📞 Support

For issues or questions:
- Check troubleshooting section above
- Review console errors
- Check official documentation:
  - React: https://react.dev
  - Express: https://expressjs.com
  - MongoDB: https://docs.mongodb.com

---

## ✨ Next Steps

1. **Explore Phase 1** - Understand HTML/CSS structure
2. **Add interactivity with Phase 2** - Learn JavaScript
3. **Convert to React** - Experience component-based development
4. **Build Backend** - Create RESTful API
5. **Connect them** - Integrate frontend with backend
6. **Deploy** - Ship to production!

---

**Happy Coding! 🎓**
