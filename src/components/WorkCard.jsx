import React from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ExternalLink } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' },
  }),
}

const WorkCard = ({ item, index, isLast, statusIcon, statusLabel, statusColor = 'teal' }) => {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const dotBg = statusColor === 'amber'
    ? 'linear-gradient(135deg, #78450a, #b45309)'
    : 'linear-gradient(135deg, #15665D, #2F8A81)'

  const dotBorder = statusColor === 'amber'
    ? 'rgba(251,191,36,0.5)'
    : 'rgba(89,182,173,0.5)'

  const dotShadow = statusColor === 'amber'
    ? '0 0 18px rgba(251,191,36,0.25)'
    : '0 0 18px rgba(89,182,173,0.25)'

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={0}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative flex gap-5 md:gap-7"
    >
      {/* Timeline column */}
      <div className="relative flex flex-col items-center shrink-0">
        {/* Numbered dot */}
        <div
          className="timeline-dot"
          style={{
            background: dotBg,
            borderColor: dotBorder,
            boxShadow: dotShadow,
          }}
        >
          {String(index).padStart(2, '0')}
        </div>
        {/* Vertical connector - hidden on last card */}
        {!isLast && <div className="timeline-line" />}
      </div>

      {/* Card */}
      <div className="glass-card flex-1 p-6 md:p-8 mb-10">

        {/* Card header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div className="flex-1 min-w-0">
            {/* Status badge */}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-3"
              style={{
                background: statusColor === 'amber'
                  ? 'rgba(120,60,10,0.25)'
                  : 'rgba(47,138,129,0.2)',
                border: `1px solid ${statusColor === 'amber' ? 'rgba(251,191,36,0.3)' : 'rgba(89,182,173,0.3)'}`,
                color: statusColor === 'amber' ? '#fbbf24' : '#59B6AD',
              }}
            >
              {statusIcon}
              {statusLabel}
            </span>
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">{item.title}</h2>
          </div>

          {/* Live link button */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-link-${index}`}
              className="btn-outline flex items-center gap-2 shrink-0 text-sm no-print"
            >
              <ExternalLink size={13} />
              View Live
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-white/60 leading-[1.8] text-sm md:text-[0.95rem] mb-7">
          {item.description}
        </p>

        {/* Images */}
        {item.images && item.images.length > 0 && (
          <div className={`grid gap-4 mb-7 ${item.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
            {item.images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-brand-base/20 bg-brand-dark/40">
                <img
                  src={src}
                  alt={`${item.title} - screenshot ${i + 1}`}
                  className="report-img"
                />
              </div>
            ))}
          </div>
        )}

        {/* Custom content (email security card) */}
        {item.customContent && (
          <div className="mb-7">{item.customContent}</div>
        )}

        {/* Key Benefits */}
        <div className="pt-4 border-t border-brand-light/8">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-light/40 mb-4">
            Key Benefits
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {item.benefits.map((b, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed"
              >
                <CheckCircle2 size={14} className="text-brand-light shrink-0 mt-0.5" />
                {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkCard
