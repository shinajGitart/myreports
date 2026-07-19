import React, { useState, useEffect } from 'react'
import { Home, Briefcase, Download } from 'lucide-react'

const Navbar = ({ onDownload, isPdfExporting }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar no-print ${scrolled ? 'scrolled' : ''}`}>
      {/* Company Logo */}
      <button
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-3 focus:outline-none group"
        id="nav-logo"
      >
        <img
          src="/NITlogo.jpg"
          alt="Nama & Injaz logo"
          className="nav-logo-img"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <span className="text-[clamp(15px,1.2vw,18px)] font-semibold tracking-wide text-white/80 group-hover:text-brand-light transition-colors hidden sm:inline">
          Shinaj Work Report
        </span>
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-2">
        <NavLink icon={<Home size={14} />} label="Home"  onClick={() => scrollTo('hero')} />
        <NavLink icon={<Briefcase size={14} />} label="Works" onClick={() => scrollTo('report')} />
        <button
          id="nav-download-btn"
          onClick={onDownload}
          disabled={isPdfExporting}
          className="btn-primary flex items-center gap-2 text-[clamp(14px,1vw,16px)] px-6 py-2.5"
        >
          <Download size={16} />
          {isPdfExporting ? 'Generating PDF...' : 'Download Report'}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        id="nav-hamburger"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-brand-light transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-brand-light transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-brand-light transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-brand-darkest border-b border-brand-mid/20 flex flex-col gap-1 p-4 md:hidden z-50">
          <MobileNavLink label="Home"  onClick={() => scrollTo('hero')} />
          <MobileNavLink label="Works" onClick={() => scrollTo('report')} />
          <button
            onClick={() => { setMenuOpen(false); onDownload() }}
            className="btn-primary text-sm w-full mt-2"
          >
            Download Report
          </button>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 px-5 py-2.5 text-[clamp(15px,1vw,18px)] font-medium text-white/70 hover:text-brand-light rounded-full hover:bg-brand-mid/10 transition-all"
  >
    {icon}
    {label}
  </button>
)

const MobileNavLink = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left px-4 py-3 text-[clamp(15px,3vw,18px)] font-medium text-white/80 hover:text-brand-light hover:bg-brand-mid/10 rounded-lg transition-all"
  >
    {label}
  </button>
)

export default Navbar
