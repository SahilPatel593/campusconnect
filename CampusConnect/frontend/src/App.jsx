import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// =======================
// Pages
// =======================

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Notes from './pages/Notes';
import Events from './pages/Events';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import ChangePassword from './pages/ChangePassword';

// =======================
// Components
// =======================

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// =======================
// Services
// =======================

import { initializeDemoData, logoutUser } from './services/authService';

// =======================
// Context API
// =======================

export const AppContext = createContext();

/**
 * Main App Component
 */
function App() {
  // =======================
  // Initialization
  // =======================

  useEffect(() => {
    // Initialize demo data if not already done
    initializeDemoData();
  }, []);

  // =======================
  // States
  // =======================

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [user, setUser] = useState(null);

  const [notifications, setNotifications] = useState([]);

  // =======================
  // Load Local Storage Data
  // =======================

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');

    const savedUser = localStorage.getItem('user') || localStorage.getItem('campusconnect_user_session');

    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
    }

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      localStorage.setItem('user', JSON.stringify(parsedUser));
    }
  }, []);

  // =======================
  // Toggle Dark Mode
  // =======================

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;

    setIsDarkMode(newMode);

    localStorage.setItem('darkMode', newMode);
  };

  // =======================
  // Show Notifications
  // =======================

  const showNotification = (message, type = 'info') => {
    const id = Date.now();

    const newNotification = {
      id,
      message,
      type,
    };

    setNotifications((prev) => [...prev, newNotification]);

    // Remove after 3 sec
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    }, 3000);
  };

  // =======================
  // Handle Login
  // =======================

  const handleLogin = (userData) => {
    setUser(userData);

    localStorage.setItem('user', JSON.stringify(userData));

    showNotification(`Welcome ${userData.fullName || userData.name}!`, 'success');
  };

  // =======================
  // Handle Logout
  // =======================

  const handleLogout = () => {
    setUser(null);

    localStorage.removeItem('user');
    logoutUser();

    showNotification('Logged out successfully!', 'info');
  };

  // =======================
  // App Theme Style
  // =======================

  const appStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#f5f5f5' : '#000000',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  // =======================
  // JSX
  // =======================

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        user,
        handleLogin,
        handleLogout,
        showNotification,
      }}
    >
      <Router>
        <div style={appStyle}>
          {/* =======================
              Navbar
          ======================= */}
          <Navbar />

          {/* =======================
              Notifications
          ======================= */}
          <div
            style={{
              position: 'fixed',
              top: '80px',
              right: '20px',
              zIndex: 999,
            }}
          >
            {notifications.map((notification) => (
              <div
                key={notification.id}
                style={{
                  backgroundColor:
                    notification.type === 'success'
                      ? '#4CAF50'
                      : notification.type === 'error'
                      ? '#FF6B6B'
                      : '#2196F3',
                  color: '#fff',
                  padding: '12px 20px',
                  marginBottom: '10px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  minWidth: '220px',
                }}
              >
                {notification.message}
              </div>
            ))}
          </div>

          {/* =======================
              Routes
          ======================= */}

          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/change-password"
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/attendance"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />

            <Route
              path="/notes"
              element={
                <ProtectedRoute>
                  <Notes />
                </ProtectedRoute>
              }
            />

            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />

            {/* Catch-all - Redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* =======================
              Footer
          ======================= */}
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

/**
 * Custom Hook
 */
export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'useApp must be used within AppContext Provider'
    );
  }

  return context;
};

export default App;