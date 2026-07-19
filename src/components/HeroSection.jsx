import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/* Stable particle list — generated once, not on every render */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 2,
  left: Math.random() * 100,
  duration: Math.random() * 14 + 13,
  delay: Math.random() * 12,
}))

const HeroSection = ({ onShowReport }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-[var(--navbar-height)] mesh-bg grid-overlay overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-brand-mid/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-brand-base/8 blur-[80px] pointer-events-none" />

      {/* Floating particles */}
      <div className="particle-overlay">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle bg-brand-light"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">

        {/* Company logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mb-10"
        >
          <img
            src="/NITlogo.jpg"
            alt="Nama & Injaz"
            className="hero-logo"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </motion.div>

        {/* WORK REPORT label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(12px,1vw,16px)] font-semibold tracking-[0.3em] uppercase text-brand-light/70 mb-5"
        >
          WORK REPORT
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[clamp(40px,5vw,72px)] font-black tracking-tight leading-none mb-6"
        >
          <span className="gradient-text">Shinaj</span>
          <span className="text-white"> Ahammed</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-brand-light/40 to-transparent mb-6"
        />

        {/* Meta info block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col items-center gap-2 mb-10"
        >
          <p className="text-white/50 text-sm sm:text-base tracking-wide">Employee ID: 4118</p>
          <p className="text-brand-light/80 text-sm sm:text-base font-medium tracking-wide">Nama &amp; Injaz</p>
          <p className="text-white/35 text-xs sm:text-sm tracking-widest uppercase mt-1">Work Report - 2026 July</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            id="show-report-btn"
            className="btn-primary flex items-center gap-2"
            onClick={onShowReport}
          >
            Show Work Report
            <ChevronDown size={16} />
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 scroll-cue"
      >
        <span className="text-[10px] text-white/25 tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={14} className="text-brand-light/30" />
      </motion.div>
    </section>
  )
}

export default HeroSection
