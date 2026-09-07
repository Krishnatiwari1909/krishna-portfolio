import { motion } from 'framer-motion'
import { Heart, Trophy, Users2 } from 'lucide-react'
import { extracurriculars } from '../data/portfolioData'
import { SectionEyebrow } from './Projects'

const iconFor = (item) => {
  if (item.highlight) return Trophy
  if (item.id === 'polio-campaign') return Heart
  return Users2
}

// Extracurriculars.jsx
// Framed as a mission log rather than a resume bullet list — each entry
// reads like a dated field report, consistent with the site's telemetry
// motif established in the hero.
export default function Extracurriculars() {
  return (
    <section id="extracurricular" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionEyebrow index="04" label="Field Reports // Beyond Code" />
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        Beyond the codebase
      </h2>

      <div className="mt-12 space-y-3">
        {extracurriculars.map((item, i) => {
          const Icon = iconFor(item)
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex flex-col gap-3 rounded-xl border p-5 sm:flex-row sm:items-center ${
                item.highlight
                  ? 'border-signal-emerald/30 bg-signal-emerald/5'
                  : 'border-line-800 bg-base-900/40'
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                  item.highlight
                    ? 'border-signal-emerald/40 text-signal-emerald'
                    : 'border-line-800 text-signal-cyan'
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </span>

              <div className="flex-1">
                <p className="font-medium text-ink-100">{item.title}</p>
                <p className="mt-0.5 text-sm text-ink-500">{item.description}</p>
              </div>

              {item.date && (
                <span className="shrink-0 font-mono text-xs text-ink-700">{item.date}</span>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
