import React from 'react'
import { ShieldCheck, Building2, FileCheck, Globe, BadgeCheck } from 'lucide-react'

/* NCA Haseen Registration visual — used in Currently Working Project 02 */
const HaseenCard = () => {
  const steps = [
    { icon: <Building2 size={14} />, label: 'Company Information' },
    { icon: <ShieldCheck size={14} />, label: 'Cybersecurity Details' },
    { icon: <FileCheck size={14} />, label: 'Supporting Documents' },
    { icon: <BadgeCheck size={14} />, label: 'Internal Approvals' },
    { icon: <Globe size={14} />, label: 'NCA Registration' },
  ]

  return (
    <div
      className="haseen-card mb-6"
      style={{
        background: 'linear-gradient(135deg, rgba(3,39,35,0.75), rgba(21,102,93,0.18))',
        border: '1px solid rgba(89,182,173,0.25)',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', width: '220px', height: '220px',
        background: 'radial-gradient(circle, rgba(89,182,173,0.09) 0%, transparent 70%)',
        borderRadius: '50%', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        animation: 'shield-pulse 3.8s ease-in-out infinite',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Header badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.25rem' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #15665D, #2F8A81)',
            border: '2px solid rgba(89,182,173,0.5)',
            boxShadow: '0 0 16px rgba(89,182,173,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldCheck size={18} style={{ color: '#fff' }} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 700, color: '#59B6AD', letterSpacing: '0.05em' }}>National Cybersecurity Authority</p>
            <p style={{ margin: 0, fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)' }}>Registration via Haseen Platform</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(89,182,173,0.22), transparent)', marginBottom: '1.25rem' }} />

        {/* Registration flow */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
                padding: '8px 10px', borderRadius: '10px', minWidth: '76px', textAlign: 'center',
                background: 'rgba(21,102,93,0.2)', border: '1px solid rgba(89,182,173,0.18)',
              }}>
                <div style={{ color: '#59B6AD' }}>{step.icon}</div>
                <span style={{ fontSize: '0.66rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.3 }}>{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ color: 'rgba(89,182,173,0.45)', fontSize: '0.9rem' }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Tagline */}
        <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center', marginTop: '1.25rem', marginBottom: 0 }}>
          Cybersecurity Profile · Regulatory Compliance
        </p>
      </div>
    </div>
  )
}

export default HaseenCard
