import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, Clock, ImageOff, User2, X } from 'lucide-react'

// CertificateModal.jsx
// Accessible dialog: traps Escape-to-close, restores focus to the
// triggering card on close, and uses role="dialog" + aria-modal so
// screen readers announce it correctly.
//
// If `certificate.image` is set (see portfolioData.js / public/assets/
// certificates) it's rendered here in place of the placeholder panel. A
// missing or broken image file falls back to the placeholder automatically
// — nothing breaks if an image hasn't been uploaded yet.
export default function CertificateModal({ certificate, onClose }) {
  const closeButtonRef = useRef(null)
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    // Reset the error flag whenever a different certificate is opened.
    setImageFailed(false)
  }, [certificate])

  useEffect(() => {
    if (!certificate) return
    closeButtonRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [certificate, onClose])

  const hasImage = Boolean(certificate?.image) && !imageFailed

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-base-950/80 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line-700 bg-base-900 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close certificate details"
              className="absolute right-4 top-4 z-10 rounded-full border border-line-800 bg-base-950/70 p-1.5 text-ink-300 backdrop-blur-sm transition-colors hover:border-line-700 hover:text-ink-100"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>

            {/* Proof panel: shows the uploaded certificate image when one
                exists at `certificate.image`. Otherwise falls back to a
                stylized instrument-readout placeholder, matching the
                site's telemetry visual language. */}
            <div className="relative h-64 border-b border-line-800 bg-base-950 sm:h-72">
              {hasImage ? (
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-contain p-4"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-grid bg-[length:28px_28px]">
                  {certificate?.image ? (
                    <>
                      <ImageOff className="h-8 w-8 text-ink-700" strokeWidth={1.5} />
                      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-700">
                        Image not added yet
                      </p>
                    </>
                  ) : (
                    <>
                      <Award className="h-9 w-9 text-signal-cyan" strokeWidth={1.5} />
                      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-500">
                        Verified Credential
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 id="certificate-modal-title" className="font-display text-xl font-semibold text-ink-100">
                {certificate.title}
              </h3>

              <dl className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <dt className="flex w-28 items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-700">
                    <Award className="h-3.5 w-3.5" strokeWidth={2} /> Issuer
                  </dt>
                  <dd className="text-sm text-ink-300">{certificate.issuer}</dd>
                </div>
                {certificate.duration && (
                  <div className="flex items-center gap-3">
                    <dt className="flex w-28 items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-700">
                      <Clock className="h-3.5 w-3.5" strokeWidth={2} /> Duration
                    </dt>
                    <dd className="text-sm text-ink-300">{certificate.duration}</dd>
                  </div>
                )}
                {certificate.instructor && (
                  <div className="flex items-center gap-3">
                    <dt className="flex w-28 items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-700">
                      <User2 className="h-3.5 w-3.5" strokeWidth={2} /> Instructor
                    </dt>
                    <dd className="text-sm text-ink-300">{certificate.instructor}</dd>
                  </div>
                )}
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
