# CampusConnect - Quick Reference Guide

## 🚀 30-Second Quick Start

### Phase 1 (HTML + CSS)
```bash
cd phase-1-html-css
# Double-click index.html or use VS Code Live Server
```

### Phase 2 (JavaScript)
```bash
cd phase-2-javascript
# Open index.html in browser
# Everything works with JavaScript enabled
```

### Phase 3 (React)
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:3000
```

### Phase 4 (Backend)
```bash
cd backend
npm install
mongod  # In another terminal
npm run dev
# Open http://localhost:5000/api/health
```

---

## 📋 File Locations

### HTML Pages (Phase 1-2)
```
phase-1-html-css/
├── index.html          (Home)
├── login.html          (Login)
├── dashboard.html      (Dashboard)
├── attendance.html     (Attendance)
├── notes.html          (Notes)
├── events.html         (Events)
└── contact.html        (Contact)
```

### React Components (Phase 3)
```
frontend/src/
├── App.jsx             (Main app)
├── components/         (Navbar, Footer, Cards)
└── pages/              (Home, Dashboard, etc)
```

### Backend Files (Phase 4)
```
backend/
├── server.js           (Express server)
├── models/             (User, Attendance, Notes, Events, Assignment)
├── controllers/        (Auth controller)
├── middleware/         (Auth, Error handling)
└── routes/             (Auth routes)
```

---

## 🔐 Authentication

### Backend Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@college.edu","password":"password123"}'
```

### Response
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": "...", "name": "...", "email": "..." }
}
```

---

## 🗄️ Database Collections

| Collection | Fields | Purpose |
|-----------|--------|---------|
| Users | name, email, password, department, role | User accounts |
| Attendance | student, subject, date, status | Track attendance |
| Notes | title, subject, author, likes | Share notes |
| Events | title, date, location, category | College events |
| Assignments | title, dueDate, subject, submissions | Assignments |

---

## 📊 API Endpoints

```
Auth:
POST   /api/auth/register       - Register
POST   /api/auth/login          - Login
GET    /api/auth/profile        - Get profile
PUT    /api/auth/profile        - Update profile
PUT    /api/auth/change-password - Change password
POST   /api/auth/logout         - Logout

Attendance: (To be implemented)
GET    /api/attendance
POST   /api/attendance
PUT    /api/attendance/:id
DELETE /api/attendance/:id

Notes: (To be implemented)
GET    /api/notes
POST   /api/notes
GET    /api/notes/:id
PUT    /api/notes/:id
DELETE /api/notes/:id

Events: (To be implemented)
GET    /api/events
POST   /api/events
POST   /api/events/:id/register
POST   /api/events/:id/interested

Assignments: (To be implemented)
GET    /api/assignments
POST   /api/assignments
POST   /api/assignments/:id/submit
PUT    /api/assignments/:id/grade
```

---

## 🎨 Color Palette

```
Primary Dark:    #001F3F  (Dark Blue)
Primary Blue:    #0099FF  (Cyan)
White:          #FFFFFF
Light Gray:     #F5F5F5
Dark Gray:      #333333
Success:        #28a745  (Green)
Error:          #dc3545  (Red)
Warning:        #ffc107  (Yellow)
```

---

## 📦 Dependencies

### Frontend
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.14.0",
  "axios": "^1.4.0"
}
```

### Backend
```json
{
  "express": "^4.18.2",
  "mongoose": "^7.3.0",
  "jsonwebtoken": "^9.0.0",
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5"
}
```

---

## 🧩 React Hooks Used

```javascript
// State management
useState()           - Local component state
useContext()         - App-wide state

// Routing
useNavigate()        - Programmatic navigation
useParams()          - Get URL parameters
```

---

## 🔌 Connecting Frontend to Backend

### In React Component:
```javascript
import axios from 'axios'

const login = async (email, password) => {
  const res = await axios.post('http://localhost:5000/api/auth/login', {
    email,
    password
  })
  const { token } = res.data
  localStorage.setItem('token', token)
}
```

### With Token:
```javascript
const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`
}
const res = await axios.get('http://localhost:5000/api/auth/profile', { headers })
```

---

## 📱 Mobile Responsive Breakpoints

```css
/* Desktop */
1024px and above

/* Tablet */
768px - 1023px

/* Mobile */
Below 768px
```

---

## 🧪 Test Data

### Test User
```
Email: user@college.edu
Password: password123
```

### Test Credentials
```javascript
{
  "name": "John Doe",
  "email": "john@college.edu",
  "password": "pass123",
  "rollNumber": "2021001",
  "department": "CSE"
}
```

---

## 💾 Environment Variables

### Backend .env
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/campusconnect
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

---

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| "Port 5000 in use" | `lsof -ti:5000 \| xargs kill -9` |
| "MongoDB connection error" | Ensure `mongod` is running |
| "Module not found" | Run `npm install` |
| "React not starting" | Clear node_modules and reinstall |
| "CORS error" | Check FRONTEND_URL in backend .env |

---

## 📚 File Size Reference

| Component | Size | Lines |
|-----------|------|-------|
| style.css | ~50KB | 1000+ |
| app.js | ~20KB | 500+ |
| authController.js | ~10KB | 200+ |
| All HTML pages | ~100KB | 2000+ |

---

## 🔑 Key Concepts

### Authentication Flow
1. User enters email/password
2. Backend validates credentials
3. Backend generates JWT token
4. Frontend stores token in localStorage
5. Frontend includes token in subsequent requests

### State Management (React)
- AppContext holds: isDarkMode, user, showNotification
- useApp() hook provides context access
- useState() for component-level state

### Error Handling
- Global error handler in Express
- Try-catch with asyncHandler
- Validation middleware
- Custom error class (ApiError)

---

## 📞 Debug Commands

### React
```javascript
// Browser Console
app                      // Check app state
localStorage             // View localStorage
Object.keys(window)      // Check window globals
```

### Backend
```bash
# Check MongoDB
mongo
db.users.find()

# Check running processes
lsof -i :5000

# Check npm packages
npm list
```

---

## 🎯 Roadmap for Enhancement

### Immediate (Week 1)
- [ ] Implement attendance endpoints
- [ ] Implement notes endpoints
- [ ] Add file upload support

### Short-term (Week 2-3)
- [ ] Email verification
- [ ] Password reset
- [ ] User profile pages
- [ ] Search and filter

### Medium-term (Month 1)
- [ ] Real-time notifications
- [ ] Study groups chat
- [ ] Grade management
- [ ] Video lectures

### Long-term (Month 2+)
- [ ] Mobile app (React Native)
- [ ] AI recommendations
- [ ] Advanced analytics
- [ ] Social features

---

## 📄 Documentation Files

- **README.md** - Main project documentation
- **SETUP.md** - Installation and setup guide
- **PROJECT_COMPLETE.md** - Project completion summary
- **docs/API.md** - REST API documentation
- **QUICK_REFERENCE.md** - This file

---

## 🎓 Learning Resources

- **React**: https://react.dev
- **Express**: https://expressjs.com
- **MongoDB**: https://docs.mongodb.com
- **JavaScript**: https://javascript.info
- **MDN**: https://developer.mozilla.org

---

## ✨ Tips & Tricks

### Development Speed
- Use VS Code extensions (ES7, Thunder Client)
- Keep browsers dev tools open
- Use Postman for API testing
- Enable hot module replacement

### Code Quality
- Use ESLint for code style
- Comment complex logic
- Keep functions small and focused
- Use meaningful variable names

### Debugging
- Use Chrome DevTools
- Add console.log statements
- Use debugger breakpoints
- Check network tab for API issues

---

## 🚀 Deployment Checklist

- [ ] Build React: `npm run build`
- [ ] Test backend API
- [ ] Update environment variables
- [ ] Enable HTTPS
- [ ] Set up database backups
- [ ] Configure CORS for production
- [ ] Add monitoring and logging
- [ ] Test on multiple browsers

---

## 📞 Support Commands

```bash
# Get Node version
node --version

# Get npm version
npm --version

# Check installed packages
npm list

# Update packages
npm update

# Clear npm cache
npm cache clean --force

# Check ports in use
netstat -ano | findstr :5000
```

---

## 💡 Pro Tips

1. **Always use .env files** - Never hardcode secrets
2. **Test endpoints with Postman** - Before frontend integration
3. **Use git** - Track changes and revert if needed
4. **Comment your code** - Future you will thank current you
5. **Read error messages carefully** - They usually tell you what's wrong
6. **Use meaningful variable names** - Make code self-documenting
7. **Keep functions small** - Easier to debug and test
8. **Version your API** - Use /api/v1/, /api/v2/, etc

---

## 🎯 Quick Navigation

- **Need to edit HTML?** → Go to `phase-1-html-css/` or `frontend/src/pages/`
- **Need to add JavaScript?** → Go to `phase-2-javascript/js/app.js`
- **Need to create React component?** → Go to `frontend/src/components/`
- **Need to add API endpoint?** → Go to `backend/routes/` and `backend/controllers/`
- **Need to change database schema?** → Go to `backend/models/`
- **Need to update styles?** → Go to CSS files

---

**Created**: May 2024  
**Last Updated**: May 2024  
**Version**: 1.0.0

---

Happy Coding! 🚀
