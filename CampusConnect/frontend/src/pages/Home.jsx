// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { useApp } from '../App'

/**
 * Home Page Component
 * Landing page with features overview
 */
function Home() {
  const { isDarkMode } = useApp()

  const heroStyle = {
    background: 'linear-gradient(135deg, #001F3F 0%, #003f7f 100%)',
    color: 'white',
    padding: '6rem 2rem',
    textAlign: 'center',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const featuresStyle = {
    padding: '4rem 2rem',
    backgroundColor: isDarkMode ? '#2d2d2d' : 'white'
  }

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  }

  const featureCardStyle = {
    backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const features = [
    { icon: '📊', title: 'Track Attendance', description: 'Monitor your attendance and never miss important classes.' },
    { icon: '✓', title: 'Manage Assignments', description: 'Keep track of all your assignments with due dates.' },
    { icon: '📅', title: 'View Timetable', description: 'Check your class schedule and exam dates.' },
    { icon: '📝', title: 'Share Notes', description: 'Upload and share lecture notes with classmates.' },
    { icon: '🎉', title: 'Check Events', description: 'Stay updated with all college events and activities.' },
    { icon: '📚', title: 'Study Tools', description: 'Access study resources and create study groups.' }
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Welcome to CampusConnect</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Your Smart College Companion App - Manage your student life efficiently
        </p>
        <div>
          <Link to="/login" style={{
            backgroundColor: '#0099FF',
            color: 'white',
            padding: '0.75rem 2rem',
            marginRight: '1rem',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}>
            Get Started
          </Link>
          <a href="#features" style={{
            backgroundColor: 'white',
            color: '#001F3F',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}>
            Learn More
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={featuresStyle} id="features">
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: isDarkMode ? 'white' : '#001F3F'
        }}>
          Key Features
        </h2>
        <div style={featuresGridStyle}>
          {features.map((feature, idx) => (
            <div key={idx} style={featureCardStyle} onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
              e.currentTarget.style.transform = 'translateY(-10px)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ color: isDarkMode ? '#0099FF' : '#001F3F', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: isDarkMode ? '#ccc' : '#666' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        backgroundColor: '#001F3F',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Ready to Transform Your College Experience?
        </h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Join thousands of students using CampusConnect
        </p>
        <Link to="/login" style={{
          backgroundColor: '#0099FF',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'all 0.3s ease',
          fontSize: '1.1rem'
        }}>
          Join Now
        </Link>
      </section>
    </div>
  )
}

export default Home
