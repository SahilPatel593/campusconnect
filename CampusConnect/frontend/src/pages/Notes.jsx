// src/pages/Notes.jsx
import { useApp } from '../App'
import DashboardCard from '../components/DashboardCard'

function Notes() {
  const { isDarkMode } = useApp()

  const mainStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  }

  return (
    <div style={mainStyle}>
      <DashboardCard
        title="📝 Shared Notes Repository"
        content="Upload, share, and download lecture notes from your courses."
      />
      <p style={{ color: isDarkMode ? '#ccc' : '#666', marginTop: '1rem' }}>
        Notes sharing page - Upload and manage your study notes here!
      </p>
    </div>
  )
}

export default Notes
