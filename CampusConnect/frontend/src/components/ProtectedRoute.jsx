// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

/**
 * Protected Route Component - restricts access to authenticated users
 */
function ProtectedRoute({ children }) {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
