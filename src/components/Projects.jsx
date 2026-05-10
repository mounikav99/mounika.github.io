import React, { useEffect, useRef } from 'react'
import { LayoutDashboard, AlertTriangle, Database } from 'lucide-react'
import { projects } from '../data/resumeData'

const iconMap = { LayoutDashboard, AlertTriangle, Database }

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const Icon = iconMap[project.icon]
  const isTeal = project.color === 'teal'

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
      <div
        className={`relative group bg-slate-900 border border-slate-800 rounded-xl p-6 overflow-hidden shadow-none
          hover:border-slate-700 hover:-translate-y-2 hover:shadow-lg transition-all duration-200 flex flex-col
          ${isTeal ? 'hover:shadow-teal-400/10' : 'hover:shadow-amber-400/10'}`}
      >
        {/* Decorative SVG texture */}
        <svg
          className="absolute top-0 right-0 opacity-10 pointer-events-none"
          width="120"
          height="80"
          viewBox="0 0 120 80"
          aria-hidden="true"
        >
          <circle cx="100" cy="10" r="60" fill={isTeal ? '#2dd4bf' : '#fbbf24'} />
          <circle cx="110" cy="60" r="30" fill={isTeal ? '#2dd4bf' : '#fbbf24'} />
        </svg>

        {/* Card header */}
        <div className="flex items-start justify-between mb-5 relative z-10">
          <div className={`p-3 rounded-lg ${isTeal ? 'bg-teal-400/10' : 'bg-amber-400/10'}`}>
            {Icon && (
              <Icon
                size={24}
                className={isTeal ? 'text-teal-400' : 'text-amber-400'}
                aria-hidden="true"
              />
            )}
          </div>
          <div className="text-right">
            <p className={`text-2xl font-bold font-mono ${isTeal ? 'text-teal-400' : 'text-amber-400'}`}>
              {project.metric}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">{project.metricLabel}</p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-4 relative z-10">{project.title}</h3>

        {/* Problem → Solution → Impact */}
        <div className="space-y-3 flex-1 mb-5 relative z-10">
          <div>
            <span className="text-xs font-mono text-slate-600 uppercase tracking-wider">Problem</span>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-xs font-mono text-teal-400/70 uppercase tracking-wider">Solution</span>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400/70 uppercase tracking-wider">Impact</span>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{project.impact}</p>
          </div>
        </div>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800 relative z-10">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-500 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Placeholder links */}
        <div className="flex gap-4 mt-4 pt-4 border-t border-slate-800 relative z-10">
          {/* TODO: Replace with real links when available */}
          <span className="text-xs text-slate-700 font-mono cursor-not-allowed">
            GitHub (coming soon)
          </span>
          <span className="text-xs text-slate-700 font-mono cursor-not-allowed">
            Case Study (coming soon)
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
          Selected work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Projects</h2>
        <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
