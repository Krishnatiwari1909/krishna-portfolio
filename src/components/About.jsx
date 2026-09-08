import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { aboutData } from '../data/portfolioData'
import { SectionEyebrow } from './Projects'

export default function About() {
  // Slideshow State
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!aboutData.images || aboutData.images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutData.images.length)
    }, 12000) // Changes image every 12 seconds
    return () => clearInterval(timer)
  }, [])

  // 3D Mouse Tracking Setup
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionEyebrow index="02" label="Personnel File // About" />
      
      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
            {aboutData.heading}
          </h2>
          <div className="mt-6 space-y-6 text-base text-ink-400 leading-relaxed">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* 3D Interactive Photo Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md aspect-square perspective-[1000px]"
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full h-full rounded-2xl border border-line-800 bg-base-900/30 overflow-hidden shadow-2xl transition-colors duration-300 hover:border-signal-cyan/40"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-signal-cyan/10 to-transparent pointer-events-none" />

            {/* Crossfading Images */}
            {/* Sliding Images (Gap removed) */}
            <AnimatePresence>
              {aboutData.images && aboutData.images.length > 0 ? (
                <motion.img
                  key={currentIndex}
                  src={aboutData.images[currentIndex]}
                  alt="Krishna Tiwari"
                  // Starts off-screen right, slides to center, exits off-screen left
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  // 0.5s duration makes it a quick, snappy slide
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              ) : (
                /* Fallback if no images are added yet */
                <div className="absolute inset-0 flex items-center justify-center text-ink-500 font-mono text-sm">
                  [ No Personnel Images Found ]
                </div>
              )}
            </AnimatePresence>
            
            {/* Tech Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-signal-cyan/40 z-20 pointer-events-none rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-signal-cyan/40 z-20 pointer-events-none rounded-br-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}