import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile, resume, socials } from '../data/portfolioData'
import { SectionEyebrow } from './Projects'

// Contact.jsx
// `onCopy(message)` is passed down from App.jsx, which owns the toast
// state — that keeps the toast a single source of truth even though
// several cards (email copy, resume download) can trigger it.
export default function Contact({ onCopy }) {
  const copy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value)
      onCopy(`${label} copied to clipboard`)
    } catch {
      onCopy('Could not copy — try selecting the text manually')
    }
  }

  const downloadResume = async () => {
    try {
      // HEAD-check first so a missing PDF doesn't silently "download" a
      // 404 error page — the visitor gets a clear toast instead.
      const res = await fetch(resume.url, { method: 'HEAD' })
      if (!res.ok) throw new Error('missing')

      const link = document.createElement('a')
      link.href = resume.url
      link.download = resume.filename
      document.body.appendChild(link)
      link.click()
      link.remove()
      onCopy('Resume download started')
    } catch {
      onCopy('Resume isn\u2019t uploaded yet')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionEyebrow index="05" label="Open Channel // Contact" />
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        Let&rsquo;s talk
      </h2>
      <p className="mt-3 max-w-xl text-ink-500">
        {profile.status}. Reach out directly — the fastest way in is below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ContactCard
          icon={Mail}
          label="Email"
          value={profile.email}
          onClick={() => copy(profile.email, 'Email')}
        />
        <ResumeCard onClick={downloadResume} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <LinkCard
          icon={Github}
          label="GitHub"
          value="@Krishnatiwari1909"
          href={socials.github}
        />
        <LinkCard
          icon={Linkedin}
          label="LinkedIn"
          value="krishna-tiwari-87906b335"
          href={socials.linkedin}
        />
      </motion.div>

      <footer className="mt-20 border-t border-line-800 pt-8 text-center font-mono text-xs text-ink-700">
        TRANSMISSION END // {profile.name.toUpperCase()} · {new Date().getFullYear()}
      </footer>
    </section>
  )
}

function ContactCard({ icon: Icon, label, value, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className="group flex items-center gap-4 rounded-xl border border-line-800 bg-base-900/40 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-signal-cyan/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line-800 text-signal-cyan">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-700">{label}</p>
        <p className="mt-0.5 truncate text-ink-100">{value}</p>
      </div>
      <Copy
        className="h-4 w-4 shrink-0 text-ink-700 transition-colors group-hover:text-signal-cyan"
        strokeWidth={2}
      />
    </motion.button>
  )
}

// Resume download. Kept as a button (not an anchor) because the click
// first verifies the PDF actually exists via `downloadResume` above —
// a plain `<a download>` would silently "download" a 404 page if the
// file hasn't been uploaded yet.
function ResumeCard({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: 0.06 }}
      className="group flex items-center gap-4 rounded-xl border border-line-800 bg-base-900/40 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-signal-emerald/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line-800 text-signal-emerald">
        <Download className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-700">Resume</p>
        <p className="mt-0.5 truncate text-ink-100">Download CV</p>
      </div>
      <Download
        className="h-4 w-4 shrink-0 text-ink-700 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-signal-emerald"
        strokeWidth={2}
      />
    </motion.button>
  )
}

// External profile links (GitHub, LinkedIn). Rendered as real anchors —
// not buttons — so they behave correctly for middle-click / "open in new
// tab" and are announced as links by assistive tech.
function LinkCard({ icon: Icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className="group flex items-center gap-4 rounded-xl border border-line-800 bg-base-900/40 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-signal-indigo/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line-800 text-signal-indigo">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-700">{label}</p>
        <p className="mt-0.5 truncate text-ink-100">{value}</p>
      </div>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-ink-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-indigo"
        strokeWidth={2}
      />
    </motion.a>
  )
}
