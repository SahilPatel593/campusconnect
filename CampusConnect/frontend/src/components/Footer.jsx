// src/components/Footer.jsx
import { Link } from 'react-router-dom'

/**
 * Footer Component
 */
function Footer() {
  const footerStyle = {
    backgroundColor: '#001F3F',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    marginTop: '3rem'
  }

  const footerLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '1rem',
    flexWrap: 'wrap'
  }

  const linkStyle = {
    color: '#0099FF',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  }

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 CampusConnect. All rights reserved.</p>
      <p>Making College Life Easier, One Feature at a Time.</p>
      <div style={footerLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <a href="#privacy" style={linkStyle}>Privacy Policy</a>
        <a href="#terms" style={linkStyle}>Terms & Conditions</a>
      </div>
    </footer>
  )
}

export default Footer
