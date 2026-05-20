// src/components/DashboardCard.jsx
/**
 * Reusable Dashboard Card Component
 */
function DashboardCard({ title, icon, content, onClick }) {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem',
    transition: 'all 0.3s ease',
    cursor: onClick ? 'pointer' : 'default'
  }

  const titleStyle = {
    color: '#001F3F',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  return (
    <div style={cardStyle} onClick={onClick} onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
      e.currentTarget.style.transform = 'translateY(-3px)'
    }} onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)'
      e.currentTarget.style.transform = 'translateY(0)'
    }}>
      <h3 style={titleStyle}>
        <span>{icon}</span>
        <span>{title}</span>
      </h3>
      <div style={{ color: '#333', lineHeight: '1.8' }}>
        {content}
      </div>
    </div>
  )
}

export default DashboardCard
