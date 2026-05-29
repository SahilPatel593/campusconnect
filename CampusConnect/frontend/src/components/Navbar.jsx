// src/components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa6'
import { useApp } from '../App'

/**
 * Navigation Bar Component
 * Mobile-first responsive header with collapsible menu
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode, user, handleLogout } = useApp()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/attendance', label: 'Attendance' },
    { href: '/notes', label: 'Notes' },
    { href: '/events', label: 'Events' }
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="bg-[#001F3F] text-white sticky top-0 z-50 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-bold uppercase tracking-[0.05em] text-white transition hover:text-[#c7ddff]"
          onClick={closeMenu}
        >
          <span className="text-2xl">🎓</span>
          <span>CampusConnect</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-2 text-base font-semibold transition hover:bg-white/20 sm:inline-flex"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <div className={`${menuOpen ? 'block' : 'hidden'} border-t border-white/10 bg-[#001F3F]/95 sm:block`}>
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="grid gap-3 text-sm sm:flex sm:items-center sm:justify-end sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#c7ddff]"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="sm:hidden">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left text-white transition hover:bg-white/20"
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </li>

            {user ? (
              <>
                <li>
                  <span className="block rounded-2xl px-4 py-3 text-white/80 sm:px-4 sm:py-0">
                    👤 {user.name}
                  </span>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      handleLogout()
                      closeMenu()
                    }}
                    className="block w-full rounded-2xl bg-[#0099FF] px-4 py-3 text-left text-white transition hover:bg-blue-500 sm:w-auto sm:text-center"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block rounded-2xl bg-[#0099FF] px-4 py-3 text-center text-white transition hover:bg-blue-500"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 sm:hidden"
          onClick={closeMenu}
          aria-label="Close mobile menu"
        />
      )}
    </nav>
  )
}

export default Navbar
