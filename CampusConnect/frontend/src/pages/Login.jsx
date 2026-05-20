// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginStudent } from '../services/authService';
import { useApp } from '../App';
import '../styles/Auth.css';

/**
 * Login Page Component - College ID based authentication
 */
function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useApp();
  const [formData, setFormData] = useState({
    identifier: '', // College ID or Email
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simple validation
    if (!formData.identifier.trim() || !formData.password.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      const result = loginStudent(
        formData.identifier,
        formData.password,
        formData.rememberMe
      );

      if (result.success) {
        setSuccess(result.message);
        handleLogin({ ...result.student, name: result.student.fullName });

        // If password not changed, redirect to change password
        if (result.requiresPasswordChange) {
          setTimeout(() => {
            navigate('/change-password');
          }, 1000);
        } else {
          setTimeout(() => {
            navigate('/dashboard');
          }, 1000);
        }
      } else {
        setError(result.message);
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🎓 CampusConnect</h1>
          <p>College Login System</p>
        </div>

        {/* Error Alert */}
        {error && <div className="alert alert-error">{error}</div>}

        {/* Success Alert */}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {/* College ID or Email Field */}
          <div className="form-group">
            <label htmlFor="identifier">College ID or Email</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              placeholder="e.g., 24CP001 or 24cp001@student.college.edu"
              value={formData.identifier}
              onChange={handleChange}
              className="form-input"
              disabled={loading}
            />
            <small className="help-text">
              Enter your College ID (e.g., 24CP001) or College Email
            </small>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <small className="help-text">
              Default password is your College ID
            </small>
          </div>

          {/* Remember Me */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="link">
              Sign Up here
            </Link>
          </p>
        </div>

        {/* Demo Credentials */}
        <div className="demo-info">
          <details>
            <summary>Demo Credentials (for testing)</summary>
            <div className="demo-credentials">
              <div className="credential">
                <strong>Student 1:</strong>
                <p>ID: 24CP001 | Password: 24CP001</p>
              </div>
              <div className="credential">
                <strong>Student 2:</strong>
                <p>ID: 24CP036 | Password: 24CP036</p>
              </div>
              <div className="credential">
                <strong>Student 3:</strong>
                <p>ID: 24CP120 | Password: 24CP120</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Login;
