// src/components/Footer.jsx
import { Link } from 'react-router-dom'

/**
 * Footer Component
 */
function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-4 text-center">
        <div className="space-y-2 text-sm sm:text-base">
          <p className="font-semibold">&copy; 2024 CampusConnect. All rights reserved.</p>
          <p>Making College Life Easier, One Feature at a Time.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
          <Link to="/" className="transition hover:text-[#c7ddff]">Home</Link>
          <Link to="/contact" className="transition hover:text-[#c7ddff]">Contact</Link>
          <a href="#privacy" className="transition hover:text-[#c7ddff]">Privacy Policy</a>
          <a href="#terms" className="transition hover:text-[#c7ddff]">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
