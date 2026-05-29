// src/pages/Notes.jsx
import { useApp } from '../App'
import DashboardCard from '../components/DashboardCard'

function Notes() {
  const { isDarkMode } = useApp()

  return (
    <div className={`${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} min-h-screen px-4 py-10 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-6xl space-y-8">
        <DashboardCard
          title="📝 Shared Notes Repository"
          content="Upload, share, and download lecture notes from your courses."
        />
        <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-base sm:text-lg`}>Notes sharing page - Upload and manage your study notes here!</p>
      </div>
    </div>
  )
}

export default Notes
