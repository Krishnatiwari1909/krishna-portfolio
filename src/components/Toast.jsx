import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

// Toast.jsx
// Purely presentational — App.jsx owns the `message` state (null = hidden)
// and clears it on a timer. Kept separate so any component could trigger
// a toast just by calling the setter passed down from App.
export default function Toast({ message }) {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4"
      aria-live="polite"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center gap-2 rounded-full border border-line-700 bg-base-850/90 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <CheckCircle2 className="h-4 w-4 text-signal-emerald" strokeWidth={2} />
            <span className="font-mono text-xs tracking-wide text-ink-100">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
