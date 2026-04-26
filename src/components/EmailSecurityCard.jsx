import React from 'react'
import { Shield, Mail, Lock, CheckCircle, Globe } from 'lucide-react'

/* Reusable animated email security visual — used in project #4 */
const EmailSecurityCard = () => {
  const protocols = ['SPF', 'DKIM', 'DMARC']
  const features = [
    { icon: <Shield size={16} />, label: 'Domain Protection' },
    { icon: <Mail size={16} />, label: 'Email Authentication' },
    { icon: <Lock size={16} />, label: 'Security Controls' },
    { icon: <Globe size={16} />, label: 'Threat Visibility' },
  ]

  return (
    <div className="email-shield mb-6">
      {/* Shield SVG decoration */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full">
        {/* Protocol badges */}
        <div className="flex items-center gap-4">
          {protocols.map((p) => (
            <div
              key={p}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-mid/40 to-brand-base/20 border border-brand-light/30 flex items-center justify-center shadow-glow-sm">
                <CheckCircle size={20} className="text-brand-light" />
              </div>
              <span className="text-xs font-bold text-brand-light/80 tracking-widest">{p}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-light/20 to-transparent" />

        {/* Feature grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-brand-mid/10 border border-brand-light/10 hover:border-brand-light/30 transition-all"
            >
              <div className="text-brand-light">{f.icon}</div>
              <span className="text-xs text-white/60 text-center leading-tight">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-xs text-white/30 tracking-wider uppercase text-center">
          Barracuda Email Security — Domain Hardening
        </p>
      </div>
    </div>
  )
}

export default EmailSecurityCard
