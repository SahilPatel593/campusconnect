// src/pages/Dashboard.jsx
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../services/authService';
import '../styles/Dashboard.css';

/**
 * Dashboard Page Component - Displays student information and academic data
 */
function Dashboard() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  // Redirect if not logged in
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      logoutUser();
      navigate('/login');
    }
  };

  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1>📊 Dashboard</h1>
          <p>Welcome back, {user.fullName}!</p>
        </div>
        <div className="header-actions">
          <Link to="/change-password" className="btn btn-secondary">
            🔐 Change Password
          </Link>
          <button onClick={handleLogout} className="btn btn-danger">
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Student Information Card */}
      <div className="info-section">
        <h2>👤 Student Information</h2>
        <div className="info-card">
          <div className="info-row">
            <label>Full Name:</label>
            <span className="info-value">{user.fullName}</span>
          </div>
          <div className="info-row">
            <label>College ID:</label>
            <span className="info-value">
              <code>{user.collegeID}</code>
            </span>
          </div>
          <div className="info-row">
            <label>College Email:</label>
            <span className="info-value">
              <code>{user.email}</code>
            </span>
          </div>
          <div className="info-row">
            <label>Status:</label>
            <span className="info-value">
              <span className="status-badge status-active">Active</span>
            </span>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <h2>📈 Academic Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <h3>92%</h3>
            <p>Overall Attendance</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <h3>8/12</h3>
            <p>Assignments Submitted</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎉</div>
            <h3>5</h3>
            <p>Upcoming Events</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <h3>3</h3>
            <p>Pending Tasks</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Attendance Card */}
        <div className="dashboard-card">
          <h3>✓ Attendance Status</h3>
          <div className="card-content">
            <div className="stat-item">
              <span className="label">Overall Attendance:</span>
              <span className="value">92%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '92%' }}></div>
            </div>
            <div className="stat-item">
              <span className="label">This Month:</span>
              <span className="value">94%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '94%' }}></div>
            </div>
            <div className="stat-item">
              <span className="label">Last Week:</span>
              <span className="value">95%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '95%' }}></div>
            </div>
          </div>
        </div>

        {/* Recent Notes Card */}
        <div className="dashboard-card">
          <h3>📝 Recent Notes</h3>
          <div className="card-content">
            <ul className="note-list">
              <li>📄 Data Structures - Lecture 5</li>
              <li>📄 Web Development Basics</li>
              <li>📄 Database Design Principles</li>
              <li>📄 Advanced JavaScript Concepts</li>
            </ul>
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="dashboard-card">
          <h3>🎉 Upcoming Events</h3>
          <div className="card-content">
            <ul className="event-list">
              <li>
                <span className="event-date">May 25</span>
                <span className="event-name">🎯 Tech Fest 2024</span>
              </li>
              <li>
                <span className="event-date">June 2</span>
                <span className="event-name">🏆 Coding Competition</span>
              </li>
              <li>
                <span className="event-date">June 8</span>
                <span className="event-name">🎬 Movie Night</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Assignments Card */}
        <div className="dashboard-card">
          <h3>📋 Pending Assignments</h3>
          <div className="card-content">
            <ul className="assignment-list">
              <li>⏰ Math Assignment - Due May 25</li>
              <li>⏰ Project Report - Due May 28</li>
              <li>⏰ Essay - Due June 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
