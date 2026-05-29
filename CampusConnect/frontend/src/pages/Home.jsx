// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { useApp } from '../App'

/**
 * Home Page Component
 * Landing page with features overview
 */
function Home() {
  const { isDarkMode } = useApp()

  const features = [
    { icon: '📊', title: 'Track Attendance', description: 'Monitor your attendance and never miss important classes.' },
    { icon: '✓', title: 'Manage Assignments', description: 'Keep track of all your assignments with due dates.' },
    { icon: '📅', title: 'View Timetable', description: 'Check your class schedule and exam dates.' },
    { icon: '📝', title: 'Share Notes', description: 'Upload and share lecture notes with classmates.' },
    { icon: '🎉', title: 'Check Events', description: 'Stay updated with all college events and activities.' },
    { icon: '📚', title: 'Study Tools', description: 'Access study resources and create study groups.' }
  ]

  return (
    <div className={`${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} transition-colors duration-300`}>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-800 px-4 py-20 text-white sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Welcome to CampusConnect</h1>
            <p className="max-w-3xl text-base leading-8 sm:text-xl sm:leading-9 text-slate-200">
              Your Smart College Companion App - Manage your student life efficiently.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full bg-[#0099FF] px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-500"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} px-4 py-16 sm:px-6 lg:px-12`} id="features">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
            <p className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Everything you need to stay on top of college life — attendance, assignments, notes, events, and more.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group rounded-3xl p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${isDarkMode ? 'bg-slate-800 text-slate-100' : 'bg-slate-50 text-slate-950'}`}
              >
                <div className="mb-5 text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className={`text-sm leading-7 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001F3F] px-4 py-16 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your College Experience?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Join thousands of students using CampusConnect.
          </p>
          <Link
            to="/login"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0099FF] px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-500"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
