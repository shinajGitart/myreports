import React from 'react'
import { MessageSquare, Database, Shield, Search, Ticket, Layers } from 'lucide-react'

/* NURA AI Product visual — used in Currently Working Project 01 */
const NURACard = () => {
  const features = [
    { icon: <MessageSquare size={14} />, label: 'AI Assistant Interface' },
    { icon: <Database size={14} />, label: 'Enterprise Knowledge' },
    { icon: <Shield size={14} />, label: 'Secure MS Auth' },
    { icon: <Search size={14} />, label: 'RAG-Based Search' },
    { icon: <Layers size={14} />, label: 'M365 Integration' },
    { icon: <Ticket size={14} />, label: 'Internal Ticketing' },
  ]

  return (
    <div
      className="nura-card mb-6"
      style={{
        background: 'linear-gradient(135deg, rgba(3,39,35,0.78), rgba(21,102,93,0.20))',
        border: '1px solid rgba(89,182,173,0.28)',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '210px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow rings */}
      <div style={{
        position: 'absolute', width: '260px', height: '260px',
        background: 'radial-gradient(circle, rgba(89,182,173,0.09) 0%, transparent 65%)',
        borderRadius: '50%', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        animation: 'shield-pulse 4s ease-in-out infinite',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}>
        {/* NURA name */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{
            fontSize: '2.2rem', fontWeight: 900, letterSpacing: '0.12em',
            background: 'linear-gradient(135deg, #59B6AD 0%, #2F8A81 45%, #59B6AD 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', display: 'inline-block',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 12px rgba(89,182,173,0.4))',
          }}>
            NURA
          </span>
        </div>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '1.5rem', marginTop: 0 }}>
          Enterprise AI Assistant
        </p>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(89,182,173,0.25), transparent)', marginBottom: '1.25rem' }} />

        {/* Feature grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', maxWidth: '420px', margin: '0 auto' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '8px 12px', borderRadius: '10px',
              background: 'rgba(21,102,93,0.15)', border: '1px solid rgba(89,182,173,0.12)',
              transition: 'border-color 0.3s',
            }}>
              <div style={{ color: '#59B6AD', flexShrink: 0 }}>{f.icon}</div>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', textAlign: 'left', lineHeight: 1.3 }}>{f.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '1.25rem', marginBottom: 0 }}>
          Secure · RAG-Powered · Microsoft Integrated
        </p>
      </div>
    </div>
  )
}

export default NURACard
