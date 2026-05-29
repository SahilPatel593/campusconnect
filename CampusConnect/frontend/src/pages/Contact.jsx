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

  return (
    <div className={`${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} min-h-screen px-4 py-12 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-3xl">
        <h2 className={`text-center text-3xl font-bold sm:text-4xl ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
          📧 Get In Touch With Us
        </h2>

        <div className={`mt-10 rounded-3xl border ${isDarkMode ? 'border-slate-700 bg-slate-900/95' : 'border-slate-200 bg-white'} p-6 shadow-xl shadow-slate-900/10 transition-colors duration-300`}>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-3">
              <label className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input-field"
                required
              />
            </div>

            <div className="grid gap-3">
              <label className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="input-field"
                required
              />
            </div>

            <div className="grid gap-3">
              <label className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                className="input-field"
                required
              />
            </div>

            <div className="grid gap-3">
              <label className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="input-field min-h-[16rem] resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-3xl bg-[#0099FF] px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
