import React, { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24" />}>
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
