import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/resumeData'

function ExperienceCard({ job, index }) {
  const cardRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const isCurrent = job.period.includes('Present')
  const accentColor = job.color === 'teal' ? 'teal' : 'amber'
  const extraHighlights = job.highlights.length - 3

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-6')
        }
      },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-6 transition-all duration-500 ease-out"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative pl-6 sm:pl-8 pb-12">
        {/* Pulse ring behind dot for current role */}
        {isCurrent && (
          <span className="absolute -left-0.5 top-1.5 w-4 h-4 rounded-full bg-teal-400/20 animate-ping" />
        )}
        {/* Timeline dot */}
        <div
          className={`absolute left-0 top-2 w-3 h-3 rounded-full border-2 z-10 ${
            accentColor === 'teal'
              ? 'bg-slate-950 border-teal-400'
              : 'bg-slate-950 border-amber-400'
          }`}
        />

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-slate-700 transition-colors duration-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">{job.company}</h3>
                {isCurrent && (
                  <span className="px-2 py-0.5 text-xs font-mono rounded bg-teal-400/15 text-teal-400 border border-teal-400/30">
                    Current
                  </span>
                )}
              </div>
              <p className={`text-sm font-medium ${accentColor === 'teal' ? 'text-teal-400' : 'text-amber-400'}`}>
                {job.role}
              </p>
            </div>
            <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs text-slate-500 flex-shrink-0">
              <span className="flex items-center gap-1">
                <Calendar size={12} aria-hidden="true" />
                {job.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} aria-hidden="true" />
                {job.location}
              </span>
            </div>
          </div>

          {/* Highlights with show more/less */}
          <ul className="space-y-2 mb-2">
            {job.highlights.slice(0, expanded ? job.highlights.length : 3).map((h, i) => (
              <li key={i} className="text-sm text-slate-400 flex gap-2 leading-relaxed">
                <span
                  className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                    accentColor === 'teal' ? 'bg-teal-400' : 'bg-amber-400'
                  }`}
                />
                {h}
              </li>
            ))}
          </ul>

          {extraHighlights > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-slate-600 hover:text-teal-400 font-mono mb-4 mt-1 transition-colors duration-150"
            >
              {expanded ? 'Show less' : `Show ${extraHighlights} more`}
            </button>
          )}

          {/* Stack badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-400 rounded border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
          Where I've worked
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Experience</h2>
        <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded" />
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-slate-800" />
        {experience.map((job, i) => (
          <ExperienceCard key={job.id} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}
