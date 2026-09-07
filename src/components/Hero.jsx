import { motion } from 'framer-motion'
import { ArrowDown, GraduationCap, MapPin, Satellite } from 'lucide-react'
import { profile } from '../data/portfolioData'

// Hero.jsx
// The page's thesis. The signature element here is the orbital-ring
// system: it's a direct nod to OrbitLab (Krishna's flagship satellite
// simulation project) rather than a generic decorative flourish — the
// same visual language reappears, quieted down, as the section markers
// throughout the rest of the page.
export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* ── Signature: orbital ring system ─────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 hidden -translate-y-1/2 md:block"
      >
        <div className="relative h-[560px] w-[560px]">
          <div className="absolute inset-0 animate-orbit-slow rounded-full border border-dashed border-line-700/60" />
          <div className="absolute inset-[70px] animate-orbit-reverse rounded-full border border-line-700/50" />
          <div className="absolute inset-[150px] animate-orbit rounded-full border border-dashed border-signal-cyan/20">
            <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal-cyan shadow-[0_0_16px_4px_rgba(34,211,238,0.55)]" />
          </div>
          <div className="absolute inset-[230px] rounded-full bg-signal-cyan/5 blur-2xl" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-cyan"
        >
          <Satellite className="h-3.5 w-3.5" strokeWidth={2} />
          LOG.00 // TRANSMISSION START
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-xl text-balance text-lg text-ink-500 sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        {/* Education + location — quick-scan line, mono to match the
            instrument-panel data styling used across the rest of the site */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-ink-500 sm:text-sm"
        >
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 shrink-0 text-signal-indigo" strokeWidth={2} />
            {profile.education.degree} · {profile.education.institution} ·{' '}
            {profile.education.period}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-700 sm:inline-block" />
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-signal-indigo" strokeWidth={2} />
            {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          {/* Status badge */}
          <span className="flex items-center gap-2 rounded-full border border-line-800 bg-base-900/60 px-3.5 py-1.5 font-mono text-xs text-ink-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-emerald" />
            </span>
            {profile.status}
          </span>

          <span className="flex items-center gap-1.5 rounded-full border border-line-800 bg-base-900/60 px-3.5 py-1.5 font-mono text-xs text-ink-500">
            <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
            {profile.location}
          </span>
        </motion.div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative overflow-hidden rounded-lg bg-signal-cyan px-5 py-3 font-medium text-base-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-lg border border-line-700 px-5 py-3 font-medium text-ink-100 transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('projects')}
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-700 transition-colors hover:text-ink-300"
      >
        <ArrowDown className="h-5 w-5 animate-pulse-slow" />
      </motion.button>
    </section>
  )
}
