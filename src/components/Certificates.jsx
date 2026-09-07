import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Maximize2 } from 'lucide-react'
import { certificates } from '../data/portfolioData'
import { SectionEyebrow } from './Projects'
import CertificateModal from './CertificateModal'

// Certificates.jsx
// A grid of credential cards. Clicking any card opens CertificateModal
// with that certificate's metadata (and image, once uploaded) — the
// selected certificate lives in local state here since only one can be
// inspected at a time.
export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionEyebrow index="03" label="Verified Credentials // Certificates" />
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        Certifications
      </h2>
      <p className="mt-3 max-w-xl text-ink-500">Tap any card to view the certificate.</p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} onSelect={setSelected} />
        ))}
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

function CertificateCard({ cert, index, onSelect }) {
  // Once an image is uploaded to public/assets/certificates and wired up
  // in portfolioData.js, its thumbnail shows here automatically — that,
  // plus the persistent "View" label below, is what signals the card is
  // clickable (not just a hover-only cue, since that's invisible on touch).
  const [thumbFailed, setThumbFailed] = useState(false)
  const hasThumb = Boolean(cert.image) && !thumbFailed

  return (
    <motion.button
      onClick={() => onSelect(cert)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      className="group flex cursor-pointer items-start gap-4 rounded-xl border border-line-800 bg-base-900/50 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-signal-cyan/40 hover:bg-base-900"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line-800 bg-base-950/60 text-signal-cyan">
        {hasThumb ? (
          <img
            src={cert.image}
            alt=""
            onError={() => setThumbFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <Award className="h-[18px] w-[18px]" strokeWidth={1.75} />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-ink-100">{cert.title}</p>
        <p className="mt-1 font-mono text-xs text-ink-500">
          {cert.issuer}
          {cert.duration ? ` · ${cert.duration}` : ''}
        </p>
      </div>

      <span className="mt-1 flex shrink-0 items-center gap-1 self-start font-mono text-[10px] uppercase tracking-wide text-ink-700 transition-colors group-hover:text-signal-cyan">
        <Maximize2 className="h-3.5 w-3.5 transition-transform group-hover:scale-110" strokeWidth={2} />
        View
      </span>
    </motion.button>
  )
}
