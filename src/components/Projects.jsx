import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Users, Github, Globe } from 'lucide-react'
import { projects } from '../data/portfolioData'

const accentMap = {
  cyan: {
    ring: 'group-hover:border-signal-cyan/40',
    glow: 'from-signal-cyan/15',
    text: 'text-signal-cyan',
    dot: 'bg-signal-cyan',
  },
  emerald: {
    ring: 'group-hover:border-signal-emerald/40',
    glow: 'from-signal-emerald/15',
    text: 'text-signal-emerald',
    dot: 'bg-signal-emerald',
  },
  indigo: {
    ring: 'group-hover:border-signal-indigo/40',
    glow: 'from-signal-indigo/15',
    text: 'text-signal-indigo',
    dot: 'bg-signal-indigo',
  },
}

const spanMap = {
  hero: 'sm:col-span-2 lg:col-span-2 lg:row-span-2',
  md: 'sm:col-span-2 lg:col-span-2',
  sm: 'col-span-1',
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionEyebrow index="01" label="Flight Log // Projects" />
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        Things I&rsquo;ve built
      </h2>
      <p className="mt-3 max-w-xl text-ink-500">
        From cloud orchestrations to embedded sensing — a log of what I&rsquo;ve engineered.
      </p>

      {/* Removed lg:auto-rows so the cards naturally expand to fit all text */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const isHero = project.size === 'hero'
  const accent = accentMap[project.accent]

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 250, damping: 22 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 250, damping: 22 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-800 bg-base-900/60 p-6 transition-colors ${accent.ring} ${spanMap[project.size]}`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      
      {/* Top Section */}
      <div className="relative z-20">
        <div className="flex items-start justify-between gap-3">
          <p className={`mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] ${accent.text}`}>
            {project.tag}
          </p>
          
          {/* Action Links Moved to Top Right so they don't fight with the tech stack */}
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-line-800 bg-base-950/80 p-1.5 text-ink-400 transition-colors hover:text-ink-100 hover:border-line-700" aria-label="GitHub">
                <Github className="h-4 w-4" strokeWidth={1.75} />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-line-800 bg-base-950/80 p-1.5 text-ink-400 transition-colors hover:text-signal-cyan hover:border-signal-cyan/40" aria-label="Live Demo">
                <Globe className="h-4 w-4" strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className={`mt-3 font-display font-semibold text-ink-100 ${isHero ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {project.name}
        </h3>
        
        {/* Removed line-clamp. Text will take exactly the space it needs. */}
        <p className={`mt-2 text-ink-500 ${isHero ? 'max-w-md text-sm sm:text-base' : 'text-sm'}`}>
          {project.description}
        </p>

        {isHero && (
          <p className="mt-3 flex items-start gap-2 text-xs text-ink-500">
            <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-cyan" strokeWidth={2} />
            {project.details}
          </p>
        )}
      </div>

      {/* Bottom Section */}
      <div className="relative z-20 mt-6 flex items-end justify-between gap-2">
        {/* Removed max-h-[28px]. Tags will wrap to a second line if needed without cutting off. */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-line-800 bg-base-950/50 px-2 py-0.5 font-mono text-[10px] text-ink-500">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function SectionEyebrow({ index, label }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-ink-500">
      <span className="text-signal-cyan">LOG.{index}</span>
      <span className="h-px w-6 bg-line-700" />
      {label}
    </p>
  )
}