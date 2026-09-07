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
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-4 lg:grid-flow-dense">
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

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 250,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 250,
    damping: 22,
  })

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
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${accent.text}`}>
            {project.tag}
          </p>
        </div>
        
        <h3 className={`mt-3 font-display font-semibold text-ink-100 ${isHero ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {project.name}
        </h3>
        
        <p className={`mt-2 text-ink-500 line-clamp-2 sm:line-clamp-3 ${isHero ? 'max-w-md text-sm sm:text-base' : 'text-sm'}`}>
          {project.description}
        </p>
        
        {isHero && (
          <p className="mt-3 flex items-start gap-2 text-xs text-ink-500">
            <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-cyan" strokeWidth={2} />
            {project.details}
          </p>
        )}
      </div>

      <div className="relative z-20 mt-6 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-line-800 bg-base-950/50 px-2.5 py-1 font-mono text-[11px] text-ink-500">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Render Action Links Only if they exist in the data */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-ink-700 transition-colors hover:text-ink-100" aria-label="View Source on GitHub">
              <Github className="h-5 w-5" strokeWidth={1.75} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-ink-700 transition-colors hover:text-signal-cyan" aria-label="View Live Site">
              <Globe className="h-5 w-5" strokeWidth={1.75} />
            </a>
          )}
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