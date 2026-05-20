# CampusConnect - Smart College Companion App
## Complete Full-Stack Web Project

![Status](https://img.shields.io/badge/Status-In%20Development-blue)
![Phases](https://img.shields.io/badge/Phases-4%2F4-green)
![License](https://img.shields.io/badge/License-MIT-orange)

---

## 📋 Project Overview

**CampusConnect** is a comprehensive full-stack student platform that helps college students manage their academic life. Students can track attendance, manage assignments, view timetables, share notes, check events, and access study tools.

### Key Features
✅ **Attendance Tracking** - Monitor class attendance in real-time  
✅ **Assignment Management** - Manage due dates and submission status  
✅ **Timetable View** - Check class schedule and exam dates  
✅ **Notes Sharing** - Upload and share lecture notes  
✅ **Event Management** - Stay updated with college events  
✅ **Study Tools** - Access resources and create study groups  
✅ **Dark Mode** - Easy on the eyes with dark theme support  
✅ **Responsive Design** - Works perfectly on all devices  

---

## 🛠️ Tech Stack

### Frontend
- **Phase 1 (Beginner)**: HTML5, CSS3, Vanilla JavaScript
- **Phase 2 (Intermediate)**: HTML + CSS + JavaScript (Enhanced)
- **Phase 3 (Advanced)**: React.js, React Router, Context API

### Backend
- **Phase 4 (Advanced)**: Node.js, Express.js, MongoDB, Mongoose, JWT

---

## 📁 Project Structure

```
CampusConnect/
│
├── phase-1-html-css/          # Static HTML + CSS Pages
│   ├── index.html             # Home page
│   ├── login.html             # Login page
│   ├── dashboard.html         # Dashboard
│   ├── attendance.html        # Attendance tracker
│   ├── notes.html             # Notes sharing
│   ├── events.html            # Events listing
│   ├── contact.html           # Contact page
│   │
│   ├── css/
│   │   └── style.css          # All styles (Responsive)
│   │
│   ├── js/
│   │   └── (empty - Phase 1)
│   │
│   └── images/                # Image assets
│
├── phase-2-javascript/        # HTML + CSS + JavaScript
│   ├── (Same HTML files)
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js             # Main app logic
│   │   ├── todos.js           # To-do list manager
│   │   ├── attendance.js      # Attendance calculator
│   │   └── utils.js           # Utility functions
│   │
│   └── images/
│
├── frontend/                  # React.js Application
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── assets/            # Images, fonts
│   │   ├── styles/            # CSS modules
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   # Node.js + Express
│   ├── config/
│   │   └── database.js
│   ├── controllers/           # Business logic
│   ├── middleware/            # Custom middleware
│   ├── models/                # MongoDB schemas
│   ├── routes/                # API endpoints
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── docs/                      # Documentation
│   ├── API.md
│   ├── SETUP.md
│   └── DEPLOYMENT.md
│
└── README.md                  # This file

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+) and npm
- MongoDB (for backend)
- Git
- VS Code or any code editor

---

## 📚 PHASE 1: HTML + CSS (Static Pages)

### Overview
Create responsive frontend pages using only HTML5 and CSS3.

### What You'll Learn
- HTML5 semantic structure
- CSS3 Flexbox and Grid
- Media Queries for responsive design
- CSS Variables for maintainability
- Smooth animations and transitions

### How to Run
1. Open `phase-1-html-css/index.html` in your browser
   - Or use Live Server extension in VS Code
   
2. Navigate through pages:
   - **Home** - Landing page with features
   - **Dashboard** - Main dashboard with sidebar
   - **Login** - Login form (static)
   - **Attendance** - Attendance tracker
   - **Notes** - Notes sharing platform
   - **Events** - Events listing
   - **Contact** - Contact form

### Key Files
- `phase-1-html-css/css/style.css` - All styles (1000+ lines)
- `phase-1-html-css/*.html` - 7 HTML pages

### Features
✓ Fully responsive design  
✓ Mobile-friendly navigation  
✓ Feature cards with hover effects  
✓ Sidebar dashboard layout  
✓ Attendance table  
✓ Event cards  
✓ Contact form  
✓ Modern color scheme  

---

## 🔥 PHASE 2: JavaScript (Interactive Features)

### Overview
Add interactivity to Phase 1 using Vanilla JavaScript.

### What You'll Learn
- DOM manipulation
- Event handling
- LocalStorage for data persistence
- Class-based JavaScript
- Module patterns
- Form validation
- Search functionality

### Key Managers
1. **CampusConnectApp** - Main app controller
2. **ToDoList** - Task management
3. **AttendanceCalculator** - Calculate attendance percentage
4. **NotesManager** - Manage notes
5. **EventsManager** - Track interested events
6. **SearchManager** - Search functionality
7. **NotificationManager** - Show notifications

### How to Run
1. Open `phase-2-javascript/index.html` in your browser
2. All functionality works with LocalStorage (no server needed)

### JavaScript Features
✅ Dark mode toggle  
✅ Attendance calculator  
✅ To-do list with CRUD operations  
✅ Dynamic event cards  
✅ Search functionality  
✅ Notes preview  
✅ Form validation  
✅ LocalStorage support  
✅ Mobile menu toggle  

### Key Files
- `phase-2-javascript/js/app.js` - Main application (500+ lines)

---

## ⚛️ PHASE 3: React.js (Component-Based Frontend)

### Overview
Convert the frontend into a modern React application.

### What You'll Learn
- React functional components
- React Hooks (useState, useEffect, useContext)
- React Router for navigation
- Context API for state management
- Component composition
- Conditional rendering
- List rendering

### Installation
```bash
cd frontend
npm install
npm run dev
```

### Project Structure
```
frontend/src/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── DashboardCard.jsx
│   ├── AttendanceCard.jsx
│   ├── EventCard.jsx
│   ├── NotesCard.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Attendance.jsx
│   ├── Notes.jsx
│   ├── Events.jsx
│   └── Contact.jsx
│
├── context/
│   └── AppContext.jsx
│
├── styles/
│   └── App.css
│
├── App.jsx
└── main.jsx
```

### Features
✓ Reusable components  
✓ State management with Context API  
✓ Client-side routing  
✓ Dynamic data binding  
✓ Form handling  
✓ Search and filters  

---

## 🔧 PHASE 4: Node.js + Express + MongoDB (Backend)

### Overview
Build a complete REST API with authentication and database.

### What You'll Learn
- Express.js server setup
- RESTful API design
- MongoDB schema design with Mongoose
- JWT authentication
- Middleware creation
- Error handling
- API documentation

### Installation
```bash
cd backend
npm install
```

### Environment Setup
Create `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/campusconnect
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Start Server
```bash
npm start
```

### API Endpoints

#### Authentication
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - User login
GET    /api/auth/profile       - Get user profile
POST   /api/auth/logout        - User logout
```

#### Attendance
```
GET    /api/attendance         - Get all attendance records
POST   /api/attendance         - Mark attendance
PUT    /api/attendance/:id     - Update attendance
DELETE /api/attendance/:id     - Delete attendance
```

#### Notes
```
GET    /api/notes              - Get all notes
POST   /api/notes              - Create new note
PUT    /api/notes/:id          - Update note
DELETE /api/notes/:id          - Delete note
GET    /api/notes/search       - Search notes
```

#### Events
```
GET    /api/events             - Get all events
POST   /api/events             - Create event
PUT    /api/events/:id         - Update event
DELETE /api/events/:id         - Delete event
POST   /api/events/:id/register - Register for event
```

#### Assignments
```
GET    /api/assignments        - Get assignments
POST   /api/assignments        - Create assignment
PUT    /api/assignments/:id    - Update assignment
DELETE /api/assignments/:id    - Delete assignment
```

### Database Collections
- **users** - User information
- **attendance** - Attendance records
- **notes** - Shared notes
- **events** - College events
- **assignments** - Assignment information

### Project Structure
```
backend/
├── config/
│   └── database.js
│
├── controllers/
│   ├── authController.js
│   ├── attendanceController.js
│   ├── notesController.js
│   ├── eventsController.js
│   └── assignmentsController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
│
├── models/
│   ├── User.js
│   ├── Attendance.js
│   ├── Notes.js
│   ├── Events.js
│   └── Assignment.js
│
├── routes/
│   ├── auth.js
│   ├── attendance.js
│   ├── notes.js
│   ├── events.js
│   └── assignments.js
│
├── server.js
├── package.json
└── .env.example
```

---

## 🔗 Connecting Frontend to Backend

### Phase 3 React to Phase 4 API
Update the API base URL in React:

```javascript
// src/config/api.js
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

### Example API Call
```javascript
// Fetch attendance data
import axios from 'axios';

const getAttendance = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/attendance`);
    return response.data;
  } catch (error) {
    console.error('Error fetching attendance:', error);
  }
};
```

---

## 🎨 UI/UX Design

### Color Palette
- **Primary Dark**: `#001F3F` (Dark Blue)
- **Primary Blue**: `#0099FF` (Cyan)
- **White**: `#FFFFFF`
- **Light Gray**: `#F5F5F5`
- **Dark Gray**: `#333333`

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana
- **Font Sizes**: 0.9rem to 3.5rem
- **Line Height**: 1.6

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

---

## 📦 Dependencies

### Phase 1-2: No dependencies (Pure HTML, CSS, JavaScript)

### Phase 3: React
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "axios": "^1.0.0"
}
```

### Phase 4: Node.js
```json
{
  "express": "^4.18.0",
  "mongoose": "^7.0.0",
  "jsonwebtoken": "^9.0.0",
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.0.0",
  "cors": "^2.8.5"
}
```

---

## 📖 Learning Path

### Beginner (Phase 1-2)
1. Understand HTML structure
2. Learn CSS Flexbox and Grid
3. Make pages responsive
4. Add JavaScript interactivity
5. Use LocalStorage for data

**Time**: 1-2 weeks

### Intermediate (Phase 3)
1. Learn React basics
2. Create reusable components
3. Manage state with Hooks
4. Use Context API
5. Implement routing

**Time**: 2-3 weeks

### Advanced (Phase 4)
1. Set up Express server
2. Create MongoDB schemas
3. Build REST API
4. Add JWT authentication
5. Handle errors and validation

**Time**: 2-3 weeks

**Total**: 5-8 weeks for complete learning

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👨‍💻 Author

**CampusConnect Development Team**

For questions or feedback, please email: support@campusconnect.com

---

## 🌟 Show Your Support

If this project helps you learn full-stack development, please give it a ⭐ star!

---

## 🐛 Troubleshooting

### Phase 1-2: Pages not loading
- Check that file paths are correct
- Ensure you're using a modern browser
- Try using Live Server extension

### Phase 3: React not starting
```bash
cd frontend
npm install
npm run dev
```

### Phase 4: MongoDB connection error
- Ensure MongoDB is running
- Check connection string in .env
- Verify MongoDB is installed

---

## 📚 Additional Resources

### HTML & CSS
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)

### JavaScript
- [JavaScript.info](https://javascript.info)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

### React
- [Official React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)

### Node.js & Express
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual)

---

## 🎯 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Email notifications
- [ ] Spam detection
- [ ] Social features (following, likes)
- [ ] Advanced analytics
- [ ] AI-powered recommendations
- [ ] Integration with college systems
- [ ] Payment gateway
- [ ] Video conferencing
- [ ] Offline support

---

**Last Updated**: May 2024  
**Version**: 1.0.0  
**Status**: Development In Progress ✓

---

Happy Coding! 🚀
