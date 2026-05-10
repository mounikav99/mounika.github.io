import React, { useState, useEffect } from 'react'
import { MapPin, Mail, Download, ArrowDown } from 'lucide-react'
import { personal } from '../data/resumeData'

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTaglineIndex((i) => (i + 1) % personal.taglines.length)
        setVisible(true)
      }, 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY < 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(45,212,191,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 75%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 75%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <p
          className="font-mono text-teal-400 text-sm mb-4 tracking-widest uppercase"
          style={{ animation: 'slideUp 0.6s ease-out both', animationDelay: '0ms' }}
        >
          Data Analyst · Portfolio
        </p>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
          style={{ animation: 'slideUp 0.6s ease-out both', animationDelay: '100ms' }}
        >
          <span className="text-gradient">Mounika</span>
          <br />
          <span className="text-slate-100">Veeramachaneni</span>
        </h1>

        {/* Rotating tagline — fixed height prevents layout jump */}
        <div
          className="relative h-10 overflow-hidden flex items-center mt-4 mb-6"
          style={{ animation: 'slideUp 0.6s ease-out both', animationDelay: '200ms' }}
        >
          <span
            className={`font-mono text-xl md:text-2xl text-amber-400 absolute transition-opacity duration-300 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {personal.taglines[taglineIndex]}
          </span>
        </div>

        <p
          className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8"
          style={{ animation: 'slideUp 0.6s ease-out both', animationDelay: '300ms' }}
        >
          {personal.summary}
        </p>

        <div
          className="flex flex-wrap gap-4 mb-8"
          style={{ animation: 'slideUp 0.6s ease-out both', animationDelay: '400ms' }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-400 text-slate-900 font-semibold rounded hover:bg-teal-300 transition-colors duration-200 glow-teal"
          >
            View Projects
          </a>
          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:border-teal-400/50 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div
          className="flex flex-wrap gap-3 text-sm"
          style={{ animation: 'slideUp 0.6s ease-out both', animationDelay: '500ms' }}
        >
          <span className="flex items-center gap-2 text-slate-500">
            <MapPin size={14} className="text-teal-400" aria-hidden="true" />
            {personal.location}
          </span>
          <span className="flex items-center gap-2 text-slate-500">
            <Mail size={14} className="text-teal-400" aria-hidden="true" />
            {personal.email}
          </span>
        </div>
      </div>

      {/* Scroll arrow fades on scroll */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block transition-opacity duration-300 ${
          showArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowDown size={20} className="text-slate-600" aria-hidden="true" />
      </div>
    </section>
  )
}
