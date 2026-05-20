// src/pages/Attendance.jsx
import { useApp } from '../App'
import DashboardCard from '../components/DashboardCard'

function Attendance() {
  const { isDarkMode } = useApp()

  const mainStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  }

  return (
    <div style={mainStyle}>
      <DashboardCard
        title="✓ Attendance Tracker"
        content="Monitor your class attendance and stay informed about your attendance status."
      />
      <p style={{ color: isDarkMode ? '#ccc' : '#666', marginTop: '1rem' }}>
        Attendance tracking page - Coming soon with detailed records!
      </p>
    </div>
  )
}

export default Attendance
