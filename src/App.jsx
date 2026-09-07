import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Extracurriculars from './components/Extracurriculars'
import Contact from './components/Contact'
import Toast from './components/Toast'

// App.jsx
// Composition root. Owns two pieces of cross-cutting state that many
// sections would otherwise need to duplicate:
//   1. The cursor-following ambient glow (pure CSS var + rAF, no React
//      re-renders on every mouse move — keeps scrolling smooth).
//   2. The toast message shown after a clipboard copy.
export default function App() {
  const glowRef = useRef(null)
  const frame = useRef(null)
  const [toastMessage, setToastMessage] = useState(null)
  const toastTimer = useRef(null)

  // Cursor-following radial glow: update a CSS custom property instead of
  // React state so the animation never triggers a re-render.
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (frame.current) return
      frame.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.setProperty('--x', `${e.clientX}px`)
          glowRef.current.style.setProperty('--y', `${e.clientY}px`)
        }
        frame.current = null
      })
    }
    window.addEventListener('pointermove', handlePointerMove)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  const showToast = (message) => {
    setToastMessage(message)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastMessage(null), 2400)
  }

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Ambient cursor glow — fixed, behind all content, ignores pointer events */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-60 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(600px circle at var(--x, 50%) var(--y, 20%), rgba(34,211,238,0.06), transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <Projects />
          <Skills />
          <Certificates />
          <Extracurriculars />
          <Contact onCopy={showToast} />
        </main>
      </div>

      <Toast message={toastMessage} />
    </div>
  )
}
