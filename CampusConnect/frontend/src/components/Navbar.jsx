// src/components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../App'

/**
 * Navigation Bar Component
 * Contains logo, nav links, and dark mode toggle
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode, user, handleLogout } = useApp()

  const navStyle = {
    backgroundColor: '#001F3F',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap'
  }

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    alignItems: 'center',
  }

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ ...navLinkStyle, fontSize: '1.5rem', fontWeight: 'bold', color: '#0099FF' }}>
        🎓 CampusConnect
      </Link>

      <ul style={navLinksStyle}>
        <li>
          <Link to="/" style={navLinkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
        </li>
        <li>
          <Link to="/attendance" style={navLinkStyle}>Attendance</Link>
        </li>
        <li>
          <Link to="/notes" style={navLinkStyle}>Notes</Link>
        </li>
        <li>
          <Link to="/events" style={navLinkStyle}>Events</Link>
        </li>
        <li>
          <button 
            onClick={toggleDarkMode}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            title="Toggle Dark Mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </li>
        {user ? (
          <>
            <li style={{ color: '#0099FF' }}>👤 {user.name}</li>
            <li>
              <button 
                onClick={handleLogout}
                style={{
                  backgroundColor: '#0099FF',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" style={{
              backgroundColor: '#0099FF',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              textDecoration: 'none'
            }}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
