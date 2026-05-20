// src/pages/ChangePassword.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePassword, getCurrentUser, logoutUser } from '../services/authService';
import '../styles/Auth.css';

/**
 * Change Password Page Component
 * Shown after first login or when user voluntarily changes password
 */
function ChangePassword() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [forceChange, setForceChange] = useState(false);

  // Check if user is logged in and needs to change password
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Check if this is a forced password change (first login)
    if (!user.passwordChanged) {
      setForceChange(true);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validate all fields
    if (!formData.oldPassword || !formData.newPassword || !formData.confirmPassword) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('New password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('New password and confirm password do not match');
      setLoading(false);
      return;
    }

    if (formData.oldPassword === formData.newPassword) {
      setError('New password cannot be the same as old password');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const result = changePassword(
        user.id,
        formData.oldPassword,
        formData.newPassword
      );

      if (result.success) {
        setSuccess(result.message);
        setFormData({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });

        setTimeout(() => {
          if (forceChange) {
            // Redirect to dashboard after forced password change
            navigate('/dashboard');
          } else {
            // Redirect to dashboard after voluntary change
            navigate('/dashboard');
          }
        }, 1500);
      } else {
        setError(result.message);
      }

      setLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🔐 Change Password</h1>
          <p>{forceChange ? 'First Login - Update Your Password' : 'Update Your Password'}</p>
        </div>

        {forceChange && (
          <div className="info-box" style={{ backgroundColor: '#FFF3CD', borderColor: '#FFC107' }}>
            <p>
              <strong>⚠️ Required Action:</strong> You must change your password
              before accessing the dashboard. Your default password is your College
              ID.
            </p>
          </div>
        )}

        {/* Error Alert */}
        {error && <div className="alert alert-error">{error}</div>}

        {/* Success Alert */}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Current Password */}
          <div className="form-group">
            <label htmlFor="oldPassword">Current Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword.old ? 'text' : 'password'}
                id="oldPassword"
                name="oldPassword"
                placeholder="Enter your current password"
                value={formData.oldPassword}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => toggleShowPassword('old')}
                disabled={loading}
                title={showPassword.old ? 'Hide' : 'Show'}
              >
                {showPassword.old ? '🙈' : '👁️'}
              </button>
            </div>
            <small className="help-text">
              {forceChange ? `Your College ID: ${user.collegeID}` : ''}
            </small>
          </div>

          {/* New Password */}
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword.new ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password (min 6 characters)"
                value={formData.newPassword}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => toggleShowPassword('new')}
                disabled={loading}
                title={showPassword.new ? 'Hide' : 'Show'}
              >
                {showPassword.new ? '🙈' : '👁️'}
              </button>
            </div>
            <small className="help-text">
              Minimum 6 characters required
            </small>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword.confirm ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => toggleShowPassword('confirm')}
                disabled={loading}
                title={showPassword.confirm ? 'Hide' : 'Show'}
              >
                {showPassword.confirm ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        {/* Logout Button (if not forced change) */}
        {!forceChange && (
          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-block"
            style={{ marginTop: '1rem' }}
          >
            Cancel & Logout
          </button>
        )}

        {/* Password Requirements */}
        <div className="demo-info">
          <details>
            <summary>Password Requirements</summary>
            <div className="demo-credentials">
              <p>✓ Minimum 6 characters</p>
              <p>✓ Cannot be same as old password</p>
              <p>✓ Must contain letters and numbers (recommended)</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
