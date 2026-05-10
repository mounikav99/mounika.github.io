import React, { useState, useEffect, useRef } from 'react'
import { BarChart2, Activity, GitBranch, Cloud, Code2, Cpu } from 'lucide-react'
import { skillDomains } from '../data/resumeData'

const iconMap = { BarChart2, Activity, GitBranch, Cloud, Code2, Cpu }

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')
  const [isHiding, setIsHiding] = useState(false)
  const sectionRef = useRef(null)

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleTabChange = (id) => {
    if (id === activeTab) return
    setIsHiding(true)
    setTimeout(() => {
      setActiveTab(id)
      setIsHiding(false)
    }, 200)
  }

  const visibleDomains =
    activeTab === 'all' ? skillDomains : skillDomains.filter((d) => d.id === activeTab)

  const activeDomain = skillDomains.find((d) => d.id === activeTab)
  const totalCount = skillDomains.flatMap((d) => d.skills).length
  const countLabel =
    activeTab === 'all'
      ? `${totalCount} skills across ${skillDomains.length} domains`
      : `${activeDomain?.skills.length} skills in ${activeDomain?.label}`

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div
        ref={sectionRef}
        className="opacity-0 translate-y-6 transition-all duration-500 ease-out"
      >
        <div className="mb-12">
          <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-1">
            Skills &amp; Technologies
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded" />
          <p className="text-sm text-slate-600 font-mono mt-3">{countLabel}</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill domains">
          <button
            role="tab"
            aria-selected={activeTab === 'all'}
            onClick={() => handleTabChange('all')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors duration-150 ${
              activeTab === 'all'
                ? 'bg-teal-400 text-slate-900'
                : 'border border-slate-700 text-slate-400 hover:border-teal-400/50 hover:text-teal-400'
            }`}
          >
            All
          </button>
          {skillDomains.map((domain) => {
            const Icon = iconMap[domain.icon]
            return (
              <button
                key={domain.id}
                role="tab"
                aria-selected={activeTab === domain.id}
                onClick={() => handleTabChange(domain.id)}
                className={`px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 transition-colors duration-150 ${
                  activeTab === domain.id
                    ? domain.color === 'teal'
                      ? 'bg-teal-400 text-slate-900'
                      : 'bg-amber-400 text-slate-900'
                    : 'border border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                }`}
              >
                {Icon && <Icon size={14} aria-hidden="true" />}
                {domain.label}
              </button>
            )
          })}
        </div>

        {/* Skills grid — key forces re-mount on tab change so animations replay */}
        <div
          key={activeTab}
          className={`space-y-10 transition-opacity duration-150 ${isHiding ? 'opacity-0' : 'opacity-100'}`}
        >
          {visibleDomains.map((domain) => {
            const Icon = iconMap[domain.icon]
            return (
              <div key={domain.id}>
                {activeTab === 'all' && (
                  <div className="flex items-center gap-2 mb-4">
                    {Icon && (
                      <Icon
                        size={16}
                        className={domain.color === 'teal' ? 'text-teal-400' : 'text-amber-400'}
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-sm font-medium text-slate-300">{domain.label}</span>
                    <div className="flex-1 h-px bg-slate-800" />
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded text-sm font-mono transition-all duration-150 hover:scale-105 cursor-default ${
                        domain.color === 'teal'
                          ? 'bg-teal-400/10 text-teal-300 border border-teal-400/20 hover:border-teal-400/50 hover:bg-teal-400/15'
                          : 'bg-amber-400/10 text-amber-300 border border-amber-400/20 hover:border-amber-400/50 hover:bg-amber-400/15'
                      }`}
                      style={{ animation: 'fadeIn 0.4s ease-out both', animationDelay: `${i * 30}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
