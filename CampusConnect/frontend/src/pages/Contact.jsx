// src/pages/Contact.jsx
import { useState } from 'react'
import { useApp } from '../App'

function Contact() {
  const { isDarkMode, showNotification } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    showNotification('✓ Message sent successfully!', 'success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const mainStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem'
  }

  const formStyle = {
    backgroundColor: isDarkMode ? '#2d2d2d' : 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'inherit',
    backgroundColor: isDarkMode ? '#333' : 'white',
    color: isDarkMode ? '#f0f0f0' : '#333'
  }

  return (
    <div style={mainStyle}>
      <h2 style={{
        textAlign: 'center',
        color: isDarkMode ? 'white' : '#001F3F',
        marginBottom: '2rem'
      }}>
        📧 Get In Touch With Us
      </h2>

      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: isDarkMode ? '#f0f0f0' : '#001F3F',
              fontWeight: '500'
            }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: isDarkMode ? '#f0f0f0' : '#001F3F',
              fontWeight: '500'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: isDarkMode ? '#f0f0f0' : '#001F3F',
              fontWeight: '500'
            }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your Subject"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: isDarkMode ? '#f0f0f0' : '#001F3F',
              fontWeight: '500'
            }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              style={{
                ...inputStyle,
                resize: 'vertical',
                minHeight: '120px'
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#0099FF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0077CC'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0099FF'}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
