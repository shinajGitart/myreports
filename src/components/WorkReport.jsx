import React from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Clock } from 'lucide-react'
import WorkCard from './WorkCard'
import EmailSecurityCard from './EmailSecurityCard'

/* ── Completed works data ── */
const COMPLETED_WORKS = [
  {
    title: 'Internal Security Dynamic Architecture',
    description:
      'Developed an interactive infrastructure visualization system that maps the entire internal network using a dynamic tree topology, built with D3.js. The tool gives the team a live, interactive view of how systems, services, and infrastructure components connect to each other. During incidents or security investigations, this makes it much faster to pinpoint affected areas, trace dependency paths, and understand how far an issue has spread.',
    benefits: [
      'Clear visibility into internal infrastructure connections',
      'Faster incident investigation and root cause analysis',
      'Supports threat modelling and infrastructure mapping',
      'Helps trace affected areas during cyber attacks',
      'Improves defensive planning and security awareness',
    ],
    images: ['/archi.png', '/archi1.png'],
  },
  {
    title: 'Internal Company Team Portal',
    description:
      'Designed and built a dedicated internal team portal for Nama & Injaz, aimed at improving how the team communicates, shares ideas, and stays aligned. Team members can post suggestions, updates, or concerns - and if someone feels uncomfortable sharing openly, they have an anonymous option. Managers get a clear view of team sentiment and ideas, which helps build a more transparent and productive workplace. The portal also supports internal work reporting.',
    benefits: [
      'Improved internal communication and transparency',
      'Anonymous suggestion feature for open feedback',
      'Helps management understand team concerns and ideas',
      'Boosts team collaboration and engagement',
      'Centralised platform for internal work reports',
    ],
    link: 'https://team-portal-tau.vercel.app/',
    images: ['/team.png', '/team1.png'],
  },
  {
    title: 'Active Directory Automations',
    description:
      'Implemented a set of Active Directory automations that replaced time-consuming manual tasks with smart, reliable workflows. Weekly AD password changes - which previously required manual intervention - now happen automatically, with notifications sent to both email and Slack. Additionally, the data center AD network, which previously had to be manually powered down after hours, can now be fully managed remotely through Slack - even from a mobile device. This removes the need to be physically present for routine network control tasks.',
    benefits: [
      'Fully automated weekly AD password rotation',
      'Real-time notifications via email and Slack',
      'Remote AD network on/off control via Slack',
      'AD status checks available from mobile devices',
      'Reduces manual workload and human error',
      'Supports faster and more flexible IT operations',
    ],
    images: ['/Adauto.png'],
  },
  {
    title: 'Barracuda Email Security',
    description:
      'Configured and aligned email security settings across company domains using Barracuda Email Security. This involved a full review and improvement of domain security records - SPF, DKIM, and DMARC - to close authentication gaps and improve email deliverability. The configuration work also improved overall email flow visibility and brought the company\'s email security posture in line with recognised industry frameworks such as NIST security controls.',
    benefits: [
      'Improved SPF, DKIM, and DMARC alignment across domains',
      'Strengthened domain email authentication and protection',
      'Better visibility into email flow and security events',
      'Reduced risk of email spoofing and phishing attacks',
      'Aligned with NIST-style email security best practices',
    ],
    customContent: <EmailSecurityCard />,
  },
  {
    title: 'New Modern Company Website',
    description:
      'Designed and developed a brand-new website for Nama & Injaz using modern frontend technologies - React, JavaScript, CSS, and HTML. The website features 3D-style animations, smooth section transitions, and a fully responsive layout that looks great on any device. Beyond the visual upgrade, the site gives the company a professional online presence that helps attract new clients, showcase services clearly, and reinforce the company\'s reputation as a capable and modern organisation.',
    benefits: [
      'Elevated company online presence and credibility',
      'Modern UI with 3D animations and smooth transitions',
      'Fully responsive across all screen sizes',
      'Supports business development and client acquisition',
      'Built with modern, maintainable web technologies',
    ],
    link: 'https://nama-injaz.vercel.app/',
    images: ['/site.png'],
  },
]

/* ── Currently working data ── */
const CURRENT_WORKS = [
  {
    title: 'National Cybersecurity Authority Registration through Haseen',
    description:
      'Currently working on the National Cybersecurity Authority registration through the Haseen platform. The purpose is to support NCA-related licensing and registration requirements, improve the company\'s ability to work with government projects, and strengthen the company\'s credibility with government authorities. This will help enhance Nama & Injaz\'s market reputation, build better trust with clients, and create a stronger impression when approaching government-related opportunities.',
    benefits: [
      'Supports NCA registration readiness through Haseen',
      'Improves eligibility for government cybersecurity opportunities',
      'Strengthens company reputation with government authorities',
      'Builds client trust and market credibility',
      'Supports future cybersecurity business growth',
    ],
  },
  {
    title: 'Centralised Printer Operations and Consumables Monitoring Platform',
    description:
      'Currently working on a centralised printer operations and consumables monitoring platform for all group companies. The solution is planned as a Windows desktop agent that discovers and monitors LAN-connected printers. The agent will alert users before toner or consumables run low and will also notify them about printer issues before they affect daily work. The goal is to reduce downtime, avoid last-minute toner shortages, and improve printer operations across departments and group companies.',
    benefits: [
      'Discovers and monitors LAN-connected printers',
      'Alerts users before toner or consumables run low',
      'Notifies users about printer issues early',
      'Reduces printer downtime and operational delays',
      'Helps departments manage printers without central IT oversight',
      'Can be deployed across group companies as an internal product',
    ],
  },
]

/* ── Section header ── */
const SectionHeader = ({ label, title, highlight, subtitle, meta }) => {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-14"
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-light/60 mb-4">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-white/40 text-sm md:text-[0.95rem] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {meta && (
        <div className="flex items-center justify-center gap-4 mt-5 text-xs text-white/25 tracking-wide">
          {meta.map((m, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/15" />}
              <span>{m}</span>
            </React.Fragment>
          ))}
        </div>
      )}
    </motion.div>
  )
}

/* ── Main report component ── */
const WorkReport = ({ reportRef }) => {
  return (
    <section
      id="report"
      ref={reportRef}
      className="relative py-24 px-4 sm:px-6 lg:px-10 mesh-bg"
    >
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-light/15 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* ── COMPLETED WORKS ── */}
        {/* ID used by PDF export to capture this header in isolation */}
        <div id="completed-works-header">
          <SectionHeader
            label="Completed Works"
            title="Work"
            highlight="Report"
            subtitle="A detailed breakdown of projects and initiatives completed during the reporting period as part of my role at Nama & Injaz."
            meta={['Shinaj Ahammed', 'ID 4118', 'Nama & Injaz', 'Work Report - 2026 April']}
          />
        </div>

        {/* ID used by PDF export to capture ONLY completed cards */}
        <div id="completed-works-cards" className="relative mb-20">
          {COMPLETED_WORKS.map((work, i) => (
            <WorkCard
              key={i}
              item={work}
              index={i + 1}
              isLast={i === COMPLETED_WORKS.length - 1}
              statusIcon={<CheckCircle size={14} className="text-brand-light" />}
              statusLabel="Completed"
            />
          ))}
        </div>

        {/* ── CURRENTLY WORKING ── */}
        {/* ID used by PDF export to capture this header in isolation */}
        <div id="current-works-header">
          <SectionHeader
            label="In Progress"
            title="Currently"
            highlight="Working"
            subtitle="Projects currently in progress - planned, being built, or in the implementation phase."
          />
        </div>

        {/* ID used by PDF export to capture ONLY current cards */}
        <div id="current-works-cards" className="relative">
          {CURRENT_WORKS.map((work, i) => (
            <WorkCard
              key={i}
              item={work}
              index={i + 1}
              isLast={i === CURRENT_WORKS.length - 1}
              statusIcon={<Clock size={14} className="text-amber-400" />}
              statusLabel="In Progress"
              statusColor="amber"
            />
          ))}
        </div>

        {/* Footer note — ID used by PDF export, captured once at the end */}
        <motion.div
          id="report-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block glass-card px-8 py-5">
            <p className="text-white/30 text-xs leading-relaxed">
              This report covers completed projects and ongoing initiatives as part of my work at Nama &amp; Injaz.
              <br />All completed implementations are live and in active use.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WorkReport
