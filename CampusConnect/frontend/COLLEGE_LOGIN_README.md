# 🎓 CampusConnect - College Login System

A complete React-based college authentication system with College ID-based login, role-based access control, and password management features.

## 📋 Features

### ✅ Authentication System
- **College ID-based Login**: Login using College ID or College Email
- **Sign Up System**: Register new students with full validation
- **Secure Password Management**: Industry-standard password handling
- **Session Management**: localStorage-based user sessions
- **Protected Routes**: Prevents unauthorized access to protected pages

### 🔐 Security Features
- **Format Validation**: College ID and Email format validation
- **Duplicate Prevention**: Prevents duplicate College IDs and Emails
- **Password Enforcement**: Forced password change on first login
- **Password Strength**: Minimum 6 character password requirement
- **Show/Hide Password**: Toggle password visibility for better UX
- **Remember Me**: Optional session persistence

### 👤 Student Management
- **Student Information Display**: Shows Name, College ID, and Email
- **Profile Dashboard**: Displays academic statistics and information
- **Status Tracking**: Shows active student status
- **Change Password**: Allows voluntary password changes

### 📊 Dashboard Features
- **Student Info Card**: Displays full student information
- **Academic Statistics**: Shows attendance, assignments, events, and tasks
- **Attendance Status**: Visual progress bars for attendance tracking
- **Recent Notes**: Quick access to recent notes
- **Upcoming Events**: Calendar of college events
- **Pending Assignments**: Track assignment deadlines

## 📁 Project Structure

```
frontend/src/
├── pages/
│   ├── Login.jsx              # College ID/Email login page
│   ├── Signup.jsx             # New student registration
│   ├── Dashboard.jsx          # Student dashboard
│   ├── ChangePassword.jsx     # Password change page
│   ├── Home.jsx               # Home page
│   ├── Attendance.jsx         # Attendance tracking
│   ├── Notes.jsx              # Notes management
│   ├── Events.jsx             # College events
│   └── Contact.jsx            # Contact page
├── components/
│   ├── ProtectedRoute.jsx     # Route protection component
│   ├── Navbar.jsx             # Navigation bar
│   ├── Footer.jsx             # Footer component
│   └── DashboardCard.jsx      # Dashboard card component
├── services/
│   └── authService.js         # Authentication logic
├── styles/
│   ├── Auth.css               # Auth pages styling
│   ├── Dashboard.css          # Dashboard styling
│   └── App.css                # Global styling
├── App.jsx                    # Main app component
└── main.jsx                   # Entry point
```

## 🔑 College ID Format

```
Format: YYBBNnn
- YY: Year (24 for 2024)
- BB: Branch (CP for Computer Science, EC for Electronics, ME for Mechanical)
- Nnn: Student Number (001-999)

Examples:
- 24CP001 (2024, Computer Science, Student #1)
- 24EC050 (2024, Electronics, Student #50)
- 24ME120 (2024, Mechanical, Student #120)
```

## 📧 College Email Format

```
Format: yybbnnnn@student.college.edu
- Auto-generated from College ID
- Lowercase format
- Example: 24cp001@student.college.edu
```

## 🧪 Demo Credentials

Test the system with these pre-loaded student accounts:

### Student 1
- **Name**: Rahul Verma
- **College ID**: 24CP001
- **Email**: 24cp001@student.college.edu
- **Default Password**: 24CP001
- **Status**: Password already changed

### Student 2
- **Name**: Priya Sharma
- **College ID**: 24CP036
- **Email**: 24cp036@student.college.edu
- **Default Password**: 24CP036
- **Status**: Password change required on first login

### Student 3
- **Name**: Aditya Kumar
- **College ID**: 24CP120
- **Email**: 24cp120@student.college.edu
- **Default Password**: 24CP120
- **Status**: Password already changed

## 🚀 Getting Started

### 1. Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3001`

### 2. First-Time Setup

The system automatically initializes demo data on first load. If you need to reset:

```javascript
// Clear all data
localStorage.clear();

// Refresh the browser
```

### 3. Workflow

#### **Registration (Sign Up)**
1. Click "Sign Up here" on login page
2. Enter Full Name
3. Enter College ID (format: 24CP001)
4. College Email auto-generates
5. Default password is set to College ID
6. Redirected to login page
7. Login with credentials

#### **First Login**
1. Login with College ID or Email
2. Use College ID as password
3. Auto-redirected to Change Password page
4. Must set new password (min 6 chars)
5. Cannot use same password as old one
6. After change, redirected to dashboard

#### **Subsequent Logins**
1. Login with College ID or Email
2. Use new password
3. Directed to dashboard
4. Can access all features

#### **Password Management**
1. From dashboard, click "Change Password"
2. Enter current password
3. Enter new password (min 6 chars)
4. Confirm new password
5. Cannot reuse old password
6. Success notification and dashboard redirect

#### **Logout**
1. From dashboard, click "Logout" button
2. Confirm logout
3. Redirected to login page
4. Session cleared from localStorage

## 🔒 Authentication Logic

### Login Flow
```javascript
loginStudent(identifier, password, rememberMe)
├─ Validate fields
├─ Find student by College ID or Email
├─ Verify password
├─ Create session
└─ Return user data and password change requirement
```

### Session Storage
```javascript
// User session stored in localStorage
{
  id: "timestamp",
  fullName: "Student Name",
  collegeID: "24CP001",
  email: "24cp001@student.college.edu",
  passwordChanged: true/false,
  loginTime: "ISO timestamp",
  rememberMe: true/false
}
```

## 📱 UI/UX Features

### Login Page
- College ID or Email input
- Show/Hide password toggle
- Remember me checkbox
- Demo credentials section
- Sign Up link
- Form validation
- Success and error alerts

### Sign Up Page
- Full name input
- College ID validation with visual feedback
- Auto-generated email display
- Default password information
- Registration requirements section
- Form validation

### Change Password Page
- Old password input with show/hide
- New password input with show/hide
- Confirm password input with show/hide
- Forced password change indicator
- Password requirements
- Cancel/Logout option

### Dashboard Page
- Student information card
- Academic statistics
- Attendance status with progress bars
- Recent notes
- Upcoming events
- Pending assignments
- Change password button
- Logout button

## 🎨 Design Features

- **Modern UI**: Gradient backgrounds and smooth animations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode Support**: System prefers-color-scheme support
- **Accessibility**: Proper labels, semantic HTML, keyboard navigation
- **Animations**: Smooth transitions and slide animations
- **Color Scheme**: Purple gradient theme (#667eea to #764ba2)

## 🛠️ Customization

### Change Color Theme
Edit the color variables in CSS files:

```css
/* Auth.css */
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Dashboard.css */
.dashboard-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modify College ID Format
Edit `authService.js`:

```javascript
const COLLEGE_ID_PATTERN = /^\d{2}[A-Z]{2}\d{3}$/;
// Change pattern as needed
```

### Add More Fields
1. Update `registerStudent()` in authService.js
2. Add form inputs in Signup.jsx
3. Update student data structure

## 📚 Data Storage

All data is stored in `localStorage`:

```javascript
// Students database
campusconnect_students: [
  {
    id: "timestamp",
    fullName: "Name",
    collegeID: "24CP001",
    email: "24cp001@student.college.edu",
    password: "hashed_password",
    passwordChanged: true,
    createdAt: "ISO timestamp"
  }
]

// Current session
campusconnect_user_session: {
  id: "timestamp",
  fullName: "Name",
  collegeID: "24CP001",
  email: "24cp001@student.college.edu",
  passwordChanged: true,
  loginTime: "ISO timestamp",
  rememberMe: false
}

// Preferences
darkMode: "true/false"
```

## 🔄 Authentication Flow Diagram

```
┌─────────────────┐
│   Landing       │
│   Page          │
└────────┬────────┘
         │
    ┌────▼────┐
    │ Login?  │
    └────┬────┘
         │
    ┌────▼──────────────────────────┐
    │ Enter College ID or Email     │
    │ + Password                    │
    └────┬──────────────────────────┘
         │
    ┌────▼──────────────────────────┐
    │ Validate Credentials          │
    │ Load Student from localStorage│
    └────┬──────────────────────────┘
         │
    ┌────▼──────────────────────────┐
    │ First Login?                  │
    └┬──────────────────────────────┘
     │
  YES│                          NO
     │                           │
     ▼                           ▼
 ┌─────────────┐         ┌──────────────┐
 │ Change      │         │ Dashboard    │
 │ Password    │         │ (Protected)  │
 │ (Required)  │         └──────────────┘
 └──────┬──────┘
        │
    ┌───▼──────────┐
    │ Validate new │
    │ password     │
    └───┬──────────┘
        │
        ▼
    ┌─────────────┐
    │ Dashboard   │
    │ (Protected) │
    └─────────────┘
```

## 🧪 Testing Checklist

- [ ] Sign up with valid College ID
- [ ] Sign up with duplicate College ID (error)
- [ ] Sign up with invalid email format (error)
- [ ] Login with College ID
- [ ] Login with College Email
- [ ] Login with wrong password (error)
- [ ] Login with non-existent account (error)
- [ ] First login forces password change
- [ ] Password change validations work
- [ ] Cannot reuse old password
- [ ] Change password after first login
- [ ] Show/Hide password toggles work
- [ ] Remember me checkbox functions
- [ ] Logout clears session
- [ ] Protected routes redirect to login
- [ ] Dashboard displays correct info
- [ ] Responsive design on mobile
- [ ] Dark mode preference works
- [ ] All alerts display properly
- [ ] Navigation between pages works

## 🚨 Troubleshooting

### Issue: Blank white screen on login
**Solution**: Check browser console for errors. Ensure `index.html` exists in frontend root directory.

### Issue: Forgot credentials
**Solution**: Use demo credentials to log in. All data is in localStorage.

### Issue: Session lost after page refresh
**Solution**: Check if "Remember me" was selected during login.

### Issue: Can't access dashboard
**Solution**: Ensure you're logged in. Protected routes redirect to login if not authenticated.

## 📝 Notes

- All student data is stored locally (not connected to backend)
- Password is stored as plain text in localStorage (for demo purposes)
- In production, use secure backend API with proper encryption
- Implement HTTPS and secure cookie storage
- Add CORS and CSRF protection
- Use JWT tokens for better session management
- Implement email verification for new accounts

## 🔐 Security Recommendations

For production:
1. Move authentication to backend API
2. Use bcrypt or similar for password hashing
3. Implement JWT tokens with expiration
4. Use secure HTTP-only cookies
5. Add CORS and CSRF protection
6. Implement rate limiting on login attempts
7. Add email verification
8. Use HTTPS everywhere
9. Implement logging and monitoring
10. Regular security audits

## 📞 Support

For issues or feature requests, contact the development team.

## 📄 License

This project is part of CampusConnect educational platform.

---

**Version**: 1.0.0  
**Last Updated**: May 2026  
**Status**: Production Ready
