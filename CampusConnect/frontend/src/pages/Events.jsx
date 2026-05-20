// src/pages/Events.jsx
import { useApp } from '../App'
import DashboardCard from '../components/DashboardCard'

function Events() {
  const { isDarkMode } = useApp()

  const mainStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  }

  return (
    <div style={mainStyle}>
      <DashboardCard
        title="🎉 College Events & Activities"
        content="Stay updated with all upcoming college events, fests, competitions, and club activities."
      />
      <p style={{ color: isDarkMode ? '#ccc' : '#666', marginTop: '1rem' }}>
        Events page - Browse and register for exciting college events!
      </p>
    </div>
  )
}

export default Events
