import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText } from 'lucide-react'
import { experienceData } from '../data/portfolioData'
import { SectionEyebrow } from './Projects'

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [activeTab, setActiveTab] = useState(0)

  // HIDDEN UNTIL READY: If there is no data, render absolutely nothing.
  if (!experienceData || experienceData.length === 0) {
    return null
  }

  const handleOpenModal = (job) => {
    if (job.documents && job.documents.length > 0) {
      setSelectedJob(job)
      setActiveTab(0) // Always start on the first document
    }
  }

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionEyebrow index="03" label="Career Log // Experience" />
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        Internships & Roles
      </h2>

      <div className="mt-12 space-y-8">
        {experienceData.map((job, index) => (
          <motion.div 
            key={job.id}
            onClick={() => handleOpenModal(job)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group relative rounded-2xl border border-line-800 bg-base-900/60 p-6 sm:p-8 transition-colors hover:bg-base-900 ${job.documents?.length > 0 ? 'cursor-pointer hover:border-signal-cyan/30 hover:bg-base-800/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]' : ''}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-ink-100">{job.role}</h3>
                <p className="font-mono text-sm text-signal-cyan mt-1">{job.company}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-xs text-ink-500 rounded-full border border-line-800 px-3 py-1 bg-base-950/50">
                  {job.duration}
                </span>
                
                {/* Visual indicator that documents are attached */}
                {job.documents?.length > 0 && (
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-600 transition-colors group-hover:text-signal-cyan">
                    <FileText className="h-3 w-3" /> View Records ({job.documents.length})
                  </span>
                )}
              </div>
            </div>
            
            <p className="mt-4 text-ink-400 text-sm leading-relaxed max-w-3xl">
              {job.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {job.skills.map(skill => (
                <span key={skill} className="rounded-lg border border-line-800 bg-base-950 px-2 py-1 font-mono text-[10px] text-ink-500">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Document Viewer Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-base-950/90 p-4 sm:p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-4xl max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-line-700 bg-base-900 shadow-2xl"
            >
              {/* Modal Header & Tabs */}
              <div className="flex items-center justify-between border-b border-line-800 bg-base-950/50 px-4 py-3 sm:px-6">
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {selectedJob.documents.map((doc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
                        activeTab === idx 
                          ? 'bg-signal-cyan/10 text-signal-cyan border border-signal-cyan/30' 
                          : 'bg-base-900 border border-line-800 text-ink-500 hover:text-ink-300'
                      }`}
                    >
                      {doc.label}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedJob(null)}
                  className="rounded-full p-2 text-ink-500 transition-colors hover:bg-line-800 hover:text-ink-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Document Display Area */}
              <div className="w-full h-full overflow-y-auto bg-base-950 p-2 sm:p-6">
                <motion.img
                  key={activeTab} // Forces animation when tab changes
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedJob.documents[activeTab].url}
                  alt={selectedJob.documents[activeTab].label}
                  className="w-full h-auto rounded border border-line-800 object-contain shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}