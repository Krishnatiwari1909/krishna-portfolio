import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import { SectionEyebrow } from './Projects'

const accentDot = {
  cyan: 'bg-signal-cyan',
  indigo: 'bg-signal-indigo',
  emerald: 'bg-signal-emerald',
}

const accentText = {
  cyan: 'text-signal-cyan',
  indigo: 'text-signal-indigo',
  emerald: 'text-signal-emerald',
}

// Skills.jsx
// A categorized badge matrix. Each category gets its own accent color so
// the eye can quickly parse "language" vs "framework" vs "tool" clusters
// without needing headers to do all the work.
export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionEyebrow index="02" label="System Capabilities // Skills" />
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        What&rsquo;s in the toolkit
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="rounded-2xl border border-line-800 bg-base-900/50 p-6"
          >
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${accentDot[group.accent]}`} />
              <h3 className={`font-mono text-xs uppercase tracking-[0.2em] ${accentText[group.accent]}`}>
                {group.category}
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-line-800 bg-base-950/60 px-3 py-1.5 text-sm text-ink-300 transition-colors hover:border-line-700 hover:text-ink-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
