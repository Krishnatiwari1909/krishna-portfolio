import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navSections } from '../data/portfolioData'

// Navbar.jsx
// A floating "dock" that stays pinned to the top of the viewport.
// Active-section highlighting is driven by an IntersectionObserver that
// watches every <section id="..."> referenced in navSections — whichever
// section currently occupies the middle band of the viewport wins.
export default function Navbar() {
  const [active, setActive] = useState(navSections[0].id)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        // Treat the vertical middle third of the screen as "current".
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`flex items-center gap-1 rounded-full border border-line-800 bg-base-900/70 px-2 py-2 backdrop-blur-xl transition-shadow ${
          scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.45)]' : ''
        }`}
      >
        {/* Wordmark / status dot, doubles as a "home" jump */}
        <button
          onClick={() => scrollTo('hero')}
          className="mr-1 hidden items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-ink-500 transition-colors hover:text-ink-100 sm:flex"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-emerald opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-emerald" />
          </span>
          KT
        </button>

        <div className="h-4 w-px bg-line-800 sm:block hidden" />

        <ul className="flex items-center gap-0.5">
          {navSections.map((section) => (
            <li key={section.id} className="relative">
              <button
                onClick={() => scrollTo(section.id)}
                className={`relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                  active === section.id ? 'text-base-950' : 'text-ink-500 hover:text-ink-100'
                }`}
              >
                {section.label}
              </button>
              {active === section.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-signal-cyan"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  )
}
