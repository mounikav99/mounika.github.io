import React, { useEffect, useRef } from 'react'
import { BarChart2, Cloud, GitBranch, PieChart, Check } from 'lucide-react'
import { certifications, education } from '../data/resumeData'

const iconMap = { BarChart2, Cloud, GitBranch, PieChart }

function CertCard({ cert }) {
  const Icon = iconMap[cert.icon]
  const isTeal = cert.color === 'teal'

  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all duration-200 ${
        isTeal
          ? 'hover:shadow-[0_0_24px_rgba(45,212,191,0.08)]'
          : 'hover:shadow-[0_0_24px_rgba(251,191,36,0.08)]'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2.5 rounded-lg flex-shrink-0 ${isTeal ? 'bg-teal-400/10' : 'bg-amber-400/10'}`}>
          {Icon && <Icon size={20} className={isTeal ? 'text-teal-400' : 'text-amber-400'} aria-hidden="true" />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-200 leading-snug mb-1">{cert.name}</p>
          <p className="text-xs text-slate-500">{cert.issuer}</p>
        </div>
        <span
          className={`text-xs font-mono px-2 py-1 rounded flex-shrink-0 ${
            isTeal
              ? 'bg-teal-400/10 text-teal-400 border border-teal-400/20'
              : 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
          }`}
        >
          {cert.code}
        </span>
      </div>
      <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-1.5">
        <div className="w-4 h-4 rounded-full bg-teal-400/15 flex items-center justify-center">
          <Check size={10} className="text-teal-400" aria-hidden="true" />
        </div>
        <span className="text-xs text-slate-600">Verified credential</span>
      </div>
    </div>
  )
}

export default function Certifications() {
  const certRef = useRef(null)
  const eduRef = useRef(null)

  useEffect(() => {
    const refs = [certRef, eduRef]
    const observers = refs.map((ref) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
          }
        },
        { threshold: 0.15 }
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Certifications */}
        <div
          ref={certRef}
          className="opacity-0 translate-y-6 transition-all duration-500 ease-out"
        >
          <div className="mb-10">
            <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
              Validated expertise
            </p>
            <h2 className="text-3xl font-bold text-slate-100">Certifications</h2>
            <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          ref={eduRef}
          className="opacity-0 translate-y-6 transition-all duration-500 ease-out"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="mb-10">
            <p className="font-mono text-amber-400 text-xs uppercase tracking-widest mb-2">
              Academic background
            </p>
            <h2 className="text-3xl font-bold text-slate-100">Education</h2>
            <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-amber-400 to-teal-400 rounded" />
          </div>
          <div className="space-y-6">
            {/* NOTE: graduation year intentionally omitted */}
            {education.map((edu, i) => (
              <div
                key={i}
                className="border-l-2 border-slate-800 pl-5 hover:border-teal-400/40 transition-colors duration-200"
              >
                <p className="text-slate-200 font-medium leading-snug mb-1">{edu.degree}</p>
                <p className="text-sm text-slate-400">{edu.institution}</p>
                <p className="text-xs text-slate-600 mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
