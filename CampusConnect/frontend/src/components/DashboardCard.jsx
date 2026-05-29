// src/components/DashboardCard.jsx
/**
 * Reusable Dashboard Card Component
 */
function DashboardCard({ title, icon, content, onClick }) {
  return (
    <div
      className={`group rounded-3xl bg-white/95 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900/95 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-950 dark:text-white">
        <span>{icon}</span>
        <span>{title}</span>
      </h3>
      <div className="text-slate-600 leading-7 dark:text-slate-300">{content}</div>
    </div>
  )
}

export default DashboardCard
