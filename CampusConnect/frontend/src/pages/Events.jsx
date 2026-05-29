// src/pages/Events.jsx
import { useApp } from '../App'
import DashboardCard from '../components/DashboardCard'

function Events() {
  const { isDarkMode } = useApp()

  return (
    <div className={`${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} min-h-screen px-4 py-10 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-6xl space-y-8">
        <DashboardCard
          title="🎉 College Events & Activities"
          content="Stay updated with all upcoming college events, fests, competitions, and club activities."
        />
        <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-base sm:text-lg`}>Events page - Browse and register for exciting college events!</p>
      </div>
    </div>
  )
}

export default Events
