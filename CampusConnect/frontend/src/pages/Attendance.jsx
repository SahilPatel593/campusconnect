// src/pages/Attendance.jsx
import { useApp } from '../App'
import DashboardCard from '../components/DashboardCard'

function Attendance() {
  const { isDarkMode } = useApp()

  return (
    <div className={`${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} min-h-screen px-4 py-10 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-6xl space-y-8">
        <DashboardCard
          title="✓ Attendance Tracker"
          content="Monitor your class attendance and stay informed about your attendance status."
        />
        <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-base sm:text-lg`}>Attendance tracking page - Coming soon with detailed records!</p>
      </div>
    </div>
  )
}

export default Attendance
