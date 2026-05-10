import React, { useState, useEffect, useRef } from 'react'
import { Mail, Linkedin, MapPin, Send } from 'lucide-react'
import { personal } from '../data/resumeData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
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

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // TODO: Formspree integration
    // 1. Sign up at https://formspree.io and create a new form
    // 2. Copy your form ID (looks like: xpzgkwrq)
    // 3. Replace the mailto fallback below with:
    //
    // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    // })
    // if (res.ok) setSent(true)
    // else setErrors({ submit: 'Something went wrong. Try emailing directly.' })

    setSubmitting(true)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`)
    setTimeout(() => {
      setSent(true)
      setSubmitting(false)
    }, 800)
  }

  const inputClass = (field) =>
    `w-full bg-slate-900 border rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600
     focus:outline-none focus:ring-1 focus:ring-teal-400/40 focus:border-teal-400/50 focus:bg-slate-800/50
     transition-colors ${errors[field] ? 'border-red-500/50' : 'border-slate-800'}`

  return (
    <section id="contact" className="relative py-24 px-6 max-w-6xl mx-auto">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(45,212,191,0.04) 0%, transparent 70%)',
        }}
      />

      <div
        ref={sectionRef}
        className="relative opacity-0 translate-y-6 transition-all duration-500 ease-out"
      >
        <div className="mb-16">
          <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Contact</h2>
          <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — intro + links */}
          <div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Open to hybrid data analyst and BI engineering roles. If you're building something
              interesting with data, I'd love to connect.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-400/40 group transition-colors duration-200"
              >
                <div className="p-2 bg-teal-400/10 rounded-lg">
                  <Mail size={18} className="text-teal-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="text-sm text-slate-300 group-hover:text-teal-400 transition-colors">
                    {personal.email}
                  </p>
                </div>
                <Send size={14} className="text-slate-600 group-hover:text-teal-400 transition-colors" aria-hidden="true" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-400/40 group transition-colors duration-200"
              >
                <div className="p-2 bg-teal-400/10 rounded-lg">
                  <Linkedin size={18} className="text-teal-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                  <p className="text-sm text-slate-300 group-hover:text-teal-400 transition-colors">
                    Connect on LinkedIn
                  </p>
                </div>
                <Send size={14} className="text-slate-600 group-hover:text-teal-400 transition-colors" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3 px-4 py-3 text-sm text-slate-500">
                <MapPin size={14} className="text-teal-400/60" aria-hidden="true" />
                {personal.location}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-teal-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Message sent!</h3>
                  <p className="text-slate-500 text-sm">Thanks for reaching out. I'll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="What's on your mind?"
                    className={inputClass('message') + ' resize-none'}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1" role="alert">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 bg-teal-400 text-slate-900 font-semibold rounded-lg hover:bg-teal-300 transition-colors duration-200 flex items-center justify-center gap-2 ${
                    submitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                  {!submitting && <Send size={16} aria-hidden="true" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
