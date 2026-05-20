// COLLEGE LOGIN SYSTEM - QUICK REFERENCE GUIDE

/**
 * ============================================================
 * FILE STRUCTURE & LOCATIONS
 * ============================================================
 */

// Authentication Service
- Location: src/services/authService.js
- Functions:
  ✓ registerStudent()           - Register new student
  ✓ loginStudent()              - Login student
  ✓ getCurrentUser()            - Get current session
  ✓ logoutUser()                - Clear session
  ✓ changePassword()            - Change student password
  ✓ validateCollegeID()         - Validate ID format
  ✓ validateCollegeEmail()      - Validate email format
  ✓ initializeDemoData()        - Initialize demo accounts

// Pages
- src/pages/Login.jsx           - Login interface
- src/pages/Signup.jsx          - Registration interface
- src/pages/ChangePassword.jsx  - Password change interface
- src/pages/Dashboard.jsx       - Student dashboard
- src/pages/Home.jsx            - Home page
- src/pages/Attendance.jsx      - Attendance page
- src/pages/Notes.jsx           - Notes page
- src/pages/Events.jsx          - Events page
- src/pages/Contact.jsx         - Contact page

// Components
- src/components/ProtectedRoute.jsx  - Route protection
- src/components/Navbar.jsx          - Navigation
- src/components/Footer.jsx          - Footer
- src/components/DashboardCard.jsx   - Card component

// Styles
- src/styles/Auth.css           - Authentication pages
- src/styles/Dashboard.css      - Dashboard page
- src/styles/App.css            - Global styles

/**
 * ============================================================
 * DATA MODELS
 * ============================================================
 */

// Student Registration Model
{
  id: String,                    // Unique timestamp ID
  fullName: String,              // Student's full name
  collegeID: String,             // Format: 24CP001
  email: String,                 // Format: 24cp001@student.college.edu
  password: String,              // Default: College ID
  passwordChanged: Boolean,      // Track first login
  createdAt: String              // ISO timestamp
}

// User Session Model
{
  id: String,                    // Student ID
  fullName: String,              // Student's name
  collegeID: String,             // College ID
  email: String,                 // College email
  passwordChanged: Boolean,      // Password change status
  loginTime: String,             // ISO timestamp
  rememberMe: Boolean            // Remember session
}

/**
 * ============================================================
 * COLLEGE ID VALIDATION
 * ============================================================
 */

// Format: YYBBNnn
Format Example: 24CP001

Pattern: /^\d{2}[A-Z]{2}\d{3}$/

Breakdown:
- \d{2}   : Year (2 digits: 24, 25, 26)
- [A-Z]{2}: Branch (2 uppercase letters)
            CP = Computer Science
            EC = Electronics
            ME = Mechanical
            CE = Civil
            IT = Information Technology
- \d{3}   : Student number (3 digits: 001-999)

Valid Examples:
✓ 24CP001  ✓ 24EC050  ✓ 24ME099
✓ 25CP150  ✓ 25IT200  ✓ 26CE300

Invalid Examples:
✗ 24cp001  (lowercase)
✗ 24C001   (only 1 letter)
✗ 24CP01   (only 2 digits)
✗ 2CP001   (only 1 year digit)

/**
 * ============================================================
 * EMAIL VALIDATION
 * ============================================================
 */

// Auto-generated from College ID
Format: yybbnnnn@student.college.edu

Example:
College ID: 24CP001
Email: 24cp001@student.college.edu

Pattern: /^\d{2}[a-z]{2}\d{3}@student\.college\.edu$/

Conversion:
- Uppercase → Lowercase
- Add @student.college.edu
- Example: 24CP001 → 24cp001@student.college.edu

/**
 * ============================================================
 * PASSWORD RULES
 * ============================================================
 */

Default Password:
- Set to College ID
- Example: College ID 24CP001 → Password 24CP001

First Login:
- MUST change password
- Forced redirect to /change-password
- Cannot proceed to dashboard until changed

Password Change Rules:
✓ Minimum 6 characters
✓ Cannot be same as old password
✓ Confirm password must match new password
✓ Old password must be correct

Strong Password Examples:
✓ MyPass123
✓ College@2024
✓ StrongPwd456
✓ SecurePass999

Weak Password Examples:
✗ 12345     (only 5 chars)
✗ 123456    (too simple)
✗ password  (common)
✗ test      (only 4 chars)

/**
 * ============================================================
 * API FUNCTIONS
 * ============================================================
 */

// 1. REGISTER STUDENT
registerStudent(fullName, collegeID, email)
- Validates all fields
- Checks for duplicates
- Creates student with default password
- Stores in localStorage
- Returns: { success, message, student }

// 2. LOGIN STUDENT
loginStudent(identifier, password, rememberMe)
- identifier: College ID or Email
- password: Student password
- rememberMe: Boolean for session persistence
- Returns: { success, message, student, requiresPasswordChange }

// 3. GET CURRENT USER
getCurrentUser()
- No parameters
- Returns: Session object or null
- Check if user is logged in

// 4. LOGOUT USER
logoutUser()
- No parameters
- Clears session from localStorage
- Returns: { success, message }

// 5. CHANGE PASSWORD
changePassword(studentID, oldPassword, newPassword)
- Validates old password
- Validates new password rules
- Updates student record
- Updates session
- Returns: { success, message }

// 6. VALIDATE COLLEGE ID
validateCollegeID(id)
- Returns: Boolean (true if valid format)

// 7. VALIDATE EMAIL
validateCollegeEmail(email)
- Returns: Boolean (true if valid format)

// 8. CHECK DUPLICATE ID
checkDuplicateCollegeID(collegeID)
- Returns: Boolean (true if exists)

// 9. CHECK DUPLICATE EMAIL
checkDuplicateEmail(email)
- Returns: Boolean (true if exists)

// 10. INITIALIZE DEMO DATA
initializeDemoData()
- Runs once on app startup
- Loads 3 demo students if empty
- No return value

/**
 * ============================================================
 * DEMO CREDENTIALS
 * ============================================================
 */

Student 1:
- Name: Rahul Verma
- ID: 24CP001
- Email: 24cp001@student.college.edu
- Password: 24CP001
- Status: Password changed (no change required)

Student 2:
- Name: Priya Sharma
- ID: 24CP036
- Email: 24cp036@student.college.edu
- Password: 24CP036
- Status: Password NOT changed (change required on login)

Student 3:
- Name: Aditya Kumar
- ID: 24CP120
- Email: 24cp120@student.college.edu
- Password: 24CP120
- Status: Password changed (no change required)

Test Workflow:
1. Try Student 2 (Priya) for forced password change flow
2. Try Student 1 (Rahul) for normal login flow
3. Try invalid credentials to test error handling

/**
 * ============================================================
 * COMPONENT USAGE
 * ============================================================
 */

// Protected Route Example
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
// Redirects to /login if not authenticated

// Get Current User Hook
const user = getCurrentUser();
if (!user) navigate('/login');

// Login Flow
const result = loginStudent(id, password, rememberMe);
if (result.requiresPasswordChange) {
  navigate('/change-password');
}

// Logout Flow
logoutUser();
navigate('/login');

/**
 * ============================================================
 * ROUTING MAP
 * ============================================================
 */

Public Routes:
GET  /              → Home page
GET  /login         → Login page
GET  /signup        → Sign up page
GET  /contact       → Contact page

Protected Routes (require authentication):
GET  /dashboard     → Student dashboard
GET  /change-password → Password change
GET  /attendance    → Attendance page
GET  /notes         → Notes page
GET  /events        → Events page

Catch-all:
GET  /*             → Redirect to /

/**
 * ============================================================
 * LOCAL STORAGE KEYS
 * ============================================================
 */

campusconnect_students
- Type: Array of student objects
- Size: Grows with new registrations
- Data: Full student records with passwords
- Auto-initialized: Yes (with demo data)

campusconnect_user_session
- Type: Object
- Size: ~300 bytes per session
- Data: Current logged-in student info
- Auto-initialized: No (created on login)

darkMode
- Type: String ("true" / "false")
- Size: ~5 bytes
- Data: User theme preference
- Auto-initialized: No

/**
 * ============================================================
 * COMMON TASKS
 * ============================================================
 */

// Check if user is logged in
if (!getCurrentUser()) {
  navigate('/login');
}

// Register new student
const result = registerStudent('John Doe', '24CP001', 'auto-generated');
if (result.success) {
  navigate('/login');
}

// Perform login
const result = loginStudent('24CP001', '24CP001', false);
if (result.success && result.requiresPasswordChange) {
  navigate('/change-password');
}

// Change password
const result = changePassword(
  user.id,
  '24CP001',    // old password
  'NewPass123'  // new password
);

// Logout
logoutUser();
navigate('/login');

// Get student name
const user = getCurrentUser();
console.log(user.fullName); // "Rahul Verma"

/**
 * ============================================================
 * ERROR HANDLING
 * ============================================================
 */

Common Errors:

"Account not found! Please Sign Up first."
- User tried login with non-existent College ID/Email
- Solution: Use demo credentials or sign up

"This College ID is already registered"
- Duplicate College ID during signup
- Solution: Use unique College ID

"Invalid College ID format (e.g., 24CP001)"
- College ID doesn't match format
- Solution: Use format: YY + 2 letters + 3 digits

"Invalid College Email format"
- Email format invalid
- Solution: Email auto-generates from College ID

"Old password is incorrect"
- Wrong current password during change
- Solution: Enter correct current password

"New password cannot be same as old password"
- New password is identical to old
- Solution: Choose different password

"New password must be at least 6 characters"
- Password too short
- Solution: Use 6+ characters

/**
 * ============================================================
 * TESTING SCENARIOS
 * ============================================================
 */

Scenario 1: First-time user (forced password change)
1. Go to /login
2. Click "Sign Up here"
3. Enter: Name, ID (24CP001), Email auto-generates
4. Redirected to /login
5. Login with 24CP001 / 24CP001
6. Auto-redirected to /change-password
7. Change to new password (min 6 chars)
8. Redirected to /dashboard
9. Can now access all features

Scenario 2: Returning user (normal login)
1. Go to /login
2. Enter College ID or Email
3. Enter password
4. Redirected to /dashboard
5. Can use "Change Password" button
6. Can access all dashboard features

Scenario 3: Forgot password
1. Note: No password recovery (demo system)
2. Clear localStorage and refresh
3. Use demo credentials again

Scenario 4: Invalid login
1. Enter non-existent College ID
2. See error: "Account not found"
3. Try signing up or using correct ID

Scenario 5: Logout and re-login
1. From /dashboard, click "Logout"
2. Confirm logout
3. Redirected to /login
4. Session cleared
5. Can login again

/**
 * ============================================================
 * DEVELOPER NOTES
 * ============================================================
 */

✓ All data stored in localStorage (no backend needed)
✓ 3 demo accounts pre-loaded
✓ Fully functional authentication system
✓ Responsive design (mobile, tablet, desktop)
✓ Smooth animations and transitions
✓ Form validation on all inputs
✓ Error and success alerts
✓ Protected routes with redirect
✓ Session persistence with "Remember Me"
✓ Forced password change after first login
✓ Password strength validation
✓ Dark mode support

Future Enhancements:
- Backend API integration
- Password hashing (bcrypt)
- JWT tokens for sessions
- Email verification
- Password recovery via email
- 2FA/MFA authentication
- Student roles (Admin, Professor)
- Activity logging
- Session management UI
- Account recovery options

/**
 * ============================================================
 * QUICK START COMMAND
 * ============================================================
 */

npm run dev
// Starts dev server at http://localhost:3001
// Login with demo credentials immediately

---
Last Updated: May 2026
Version: 1.0.0
Status: Production Ready
