import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['hero', 'skills', 'experience', 'projects', 'certifications', 'contact']

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-mono text-xl font-bold tracking-tight"
          aria-label="Home"
        >
          <span className="text-teal-400">M</span>
          <span className="text-amber-400">V</span>
          <span className="text-slate-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm transition-colors duration-200 pb-0.5 ${
                  isActive
                    ? 'text-teal-400 border-b border-teal-400'
                    : 'text-slate-400 hover:text-teal-400'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-teal-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer — CSS height transition, not conditional render */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-slate-900 border-t border-slate-800 px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block text-slate-300 hover:text-teal-400 transition-colors py-2"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
