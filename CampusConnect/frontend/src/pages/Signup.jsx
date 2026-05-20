// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  registerStudent,
  validateCollegeID,
  validateCollegeEmail,
  generateCollegeEmail,
} from '../services/authService';
import '../styles/Auth.css';

/**
 * Sign Up Page Component - College Student Registration
 */
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    collegeID: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const upperValue = name === 'collegeID' ? value.toUpperCase() : value;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: upperValue,
      };

      // Auto-generate email when College ID is changed
      if (name === 'collegeID') {
        const trimmed = upperValue.trim();
        if (trimmed === '') {
          updated.email = '';
        } else if (validateCollegeID(trimmed)) {
          updated.email = generateCollegeEmail(trimmed);
        } else {
          updated.email = '';
        }
      }
      return updated;
    });

    setError('');

    // Dynamic suggestions based on College ID input
    if (name === 'collegeID') {
      const trimmed = upperValue.trim();
      if (trimmed === '') {
        setSuggestions({});
      } else if (validateCollegeID(trimmed)) {
        setSuggestions({
          collegeID: 'Valid College ID format ✓',
          email: 'Email auto-generated ✓',
        });
      } else {
        setSuggestions({
          collegeID: 'Invalid format (use: 24CP001)',
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const trimmedName = formData.fullName.trim();
    const trimmedCollegeID = formData.collegeID.trim().toUpperCase();
    const trimmedEmail = formData.email.trim().toLowerCase();

    // Validate all fields
    if (!trimmedName) {
      setError('Full name is required');
      setLoading(false);
      return;
    }

    if (!trimmedCollegeID) {
      setError('College ID is required');
      setLoading(false);
      return;
    }

    if (!validateCollegeID(trimmedCollegeID)) {
      setError('Invalid College ID format. Use format like: 24CP001');
      setLoading(false);
      return;
    }

    if (!trimmedEmail) {
      setError('College Email is required');
      setLoading(false);
      return;
    }

    if (!validateCollegeEmail(trimmedEmail)) {
      setError('Invalid College Email format');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const result = registerStudent(
        trimmedName,
        trimmedCollegeID,
        trimmedEmail
      );

      if (result.success) {
        setSuccess('Registration successful! Please login.');
        setFormData({ fullName: '', collegeID: '', email: '' });
        setSuggestions({});

        setTimeout(() => {
          navigate('/login');
        }, 1500);
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
          <p>Student Registration</p>
        </div>

        {/* Error Alert */}
        {error && <div className="alert alert-error">{error}</div>}

        {/* Success Alert */}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
              disabled={loading}
            />
            <small className="help-text">
              Your full name as it appears in college records
            </small>
          </div>

          {/* College ID Field */}
          <div className="form-group">
            <label htmlFor="collegeID">College ID</label>
            <input
              type="text"
              id="collegeID"
              name="collegeID"
              placeholder="e.g., 24CP001"
              value={formData.collegeID}
              onChange={handleChange}
              className="form-input"
              disabled={loading}
              maxLength="7"
            />
            {suggestions.collegeID && (
              <small
                className="help-text"
                style={{
                  color: suggestions.collegeID.includes('Valid')
                    ? '#4CAF50'
                    : '#FF9800',
                }}
              >
                {suggestions.collegeID}
              </small>
            )}
            <small className="help-text">
              Format: YearBranchNumber (e.g., 24CP001)
            </small>
          </div>

          {/* College Email Field (Auto-generated) */}
          <div className="form-group">
            <label htmlFor="email">College Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Auto-generated from College ID"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              disabled={loading}
              readOnly
            />
            {suggestions.email && (
              <small className="help-text" style={{ color: '#4CAF50' }}>
                {suggestions.email}
              </small>
            )}
            <small className="help-text">
              Format: {formData.collegeID ? `${formData.collegeID.toLowerCase()}@student.college.edu` : 'Will auto-generate'}
            </small>
          </div>

          {/* Default Password Info */}
          <div className="info-box">
            <p>
              <strong>Default Password:</strong> Your College ID
              {formData.collegeID && ` (${formData.collegeID})`}
            </p>
            <p>
              <strong>After Registration:</strong> You'll be required to change
              your password on first login.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Sign Up'}
          </button>
        </form>

        {/* Login Link */}
        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="link">
              Login here
            </Link>
          </p>
        </div>

        {/* Registration Info */}
        <div className="demo-info">
          <details>
            <summary>Registration Requirements</summary>
            <div className="demo-credentials">
              <p>
                <strong>College ID Format:</strong> YearBranchNumber (e.g.,
                24CP001)
              </p>
              <p>
                <strong>Year:</strong> Last 2 digits (24 = 2024)
              </p>
              <p>
                <strong>Branch:</strong> 2 letters (CP = Computer Science)
              </p>
              <p>
                <strong>Number:</strong> 3 digits (001-999)
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Signup;
