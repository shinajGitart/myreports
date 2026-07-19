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
      <div className="glass-card flex-1 p-6 sm:p-8 lg:p-10 mb-10">

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
            <h2 className="text-[clamp(22px,2vw,32px)] font-bold text-white leading-snug">{item.title}</h2>
          </div>

          {/* Live link button */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-link-${index}`}
              className="btn-outline flex items-center gap-2 shrink-0 text-[clamp(14px,1vw,16px)] px-5 py-2 no-print"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
        </div>

        {/* Description — supports multi-paragraph text split by \n\n */}
        <div className="mb-8">
          {item.description.split('\n\n').map((para, pi) => (
            <p key={pi} className="text-white/70 text-[clamp(15px,1vw,18px)] leading-[1.75] mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </div>

        {/* Images */}
        {item.images && item.images.length > 0 && (
          <div className={`grid gap-6 mb-8 ${item.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {item.images.map((src, i) => (
              <div key={i} className="image-wrapper bg-brand-dark/40">
                <img
                  src={src}
                  alt={`${item.title} screenshot ${i + 1}`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Custom content (inline visual component) */}
        {item.customContent && (
          <div className="mb-7">{item.customContent}</div>
        )}

        {/* Key Benefits */}
        <div className="pt-6 border-t border-brand-light/10 mt-2">
          <p className="text-[clamp(12px,0.9vw,14px)] font-semibold tracking-[0.18em] uppercase text-brand-light/50 mb-5">
            Key Benefits
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {item.benefits.map((b, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex items-start gap-3 text-[clamp(15px,1vw,18px)] text-white/75 leading-[1.6]"
              >
                <CheckCircle2 size={18} className="text-brand-light shrink-0 mt-[2px]" />
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
