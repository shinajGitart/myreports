import React from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Clock } from 'lucide-react'
import WorkCard from './WorkCard'
import CCCComplianceCard from './CCCComplianceCard'
import ADAutomationCard from './ADAutomationCard'
import HaseenCard from './HaseenCard'

/* ── Completed works data ── */
const COMPLETED_WORKS = [
  {
    title: 'CCC Certification Project for SBC and FABCO',
    description:
      'Managed and supported the Cybersecurity Compliance Certification project for SBC and FABCO. The work included reviewing the organisations\' existing cybersecurity controls, identifying compliance gaps, preparing and updating the required policies and forms, implementing technical security configurations, and collecting supporting evidence for the audit process. The project was coordinated with the relevant teams and auditor to improve both companies\' readiness for CCC certification.',
    benefits: [
      'Improved cybersecurity compliance readiness for SBC and FABCO',
      'Identified and addressed gaps in existing security controls',
      'Standardised cybersecurity policies, procedures, and forms',
      'Created clear audit evidence and implementation records',
      'Strengthened security governance across both organisations',
    ],
    customContent: <CCCComplianceCard />,
  },
  {
    title: 'Website for MEP PLUS',
    description:
      'Designed and developed a modern corporate website for MEP PLUS to showcase its electromechanical services, completed projects, media activities, and company capabilities. The website combines a strong visual identity with a responsive layout, smooth interactions, clear navigation, and structured service information. It gives MEP PLUS a more professional online presence and makes it easier for potential clients to understand the company\'s expertise.',
    benefits: [
      'Strengthened MEP PLUS\'s professional digital presence',
      'Clearly presents services, projects, and company capabilities',
      'Fully responsive across desktop, tablet, and mobile devices',
      'Improves brand credibility and customer engagement',
      'Supports business development and new client acquisition',
    ],
    link: 'https://mep-bice.vercel.app/',
    images: ['/MEP.png'],
  },
  {
    title: 'Active Directory Users Automation',
    description:
      'Developed Active Directory user-management automations to reduce repetitive administrative work and improve consistency. The automated workflows support common user lifecycle activities such as account creation, organisational unit placement, security group assignment, password operations, account activation or deactivation, and employee onboarding and offboarding tasks. This reduces manual errors and allows IT administrators to manage users more efficiently.',
    benefits: [
      'Reduces repetitive Active Directory administration',
      'Accelerates employee onboarding and offboarding',
      'Ensures consistent user and permission configurations',
      'Minimises manual errors during account provisioning',
      'Improves operational efficiency and accountability',
    ],
    customContent: <ADAutomationCard />,
  },
  {
    title: 'Website for SPARK',
    description:
      'Designed and developed a modern corporate website for SPARK – Sharara Renewable Energy, presenting the company\'s industrial supply, maintenance, safety, environmental, warehouse, chemical, and technical solutions. The website uses a bold industrial visual style, responsive layouts, smooth animations, structured capability sections, partner information, and clear calls to action to create a strong and credible online presence.',
    benefits: [
      'Gives SPARK a strong and modern corporate identity',
      'Clearly showcases industrial services and capabilities',
      'Highlights sectors, business partners, and solutions',
      'Fully responsive with smooth visual interactions',
      'Supports customer enquiries and business development',
    ],
    link: 'https://spark-stfl.vercel.app/',
    images: ['/SPARK.png'],
  },
]

/* ── Currently working data ── */
const CURRENT_WORKS = [
  {
    title: 'AI Product – NURA',
    description:
      'NURA is an enterprise AI assistant being developed to help employees access information, search approved company knowledge, summarise content, receive operational support, and manage internal service requests through a single conversational interface. The product will use secure Microsoft authentication and Retrieval-Augmented Generation to provide answers based on authorised organisational data rather than generic responses.\n\nNURA is also being designed for future integration with platforms such as Microsoft 365, Outlook, Barracuda, Sophos, internal documents, and ticketing systems. The product can reduce the time employees spend searching for information, improve decision-making, and position the company as an innovative provider of practical enterprise AI solutions. It also has the potential to become a scalable commercial product for external clients.',
    benefits: [
      'Secure enterprise AI assistant with Microsoft authentication',
      'Searches approved internal documents and company knowledge',
      'Supports intelligent ticket creation and operational assistance',
      'Planned integrations with Microsoft 365 and security platforms',
      'Reduces information-search time and improves productivity',
      'Can be developed into a scalable AI solution for external clients',
    ],
    images: ['/NURA.png'],
  },
  {
    title: 'National Cybersecurity Authority Registration through Haseen',
    description:
      'Managing the organisation\'s registration process through the National Cybersecurity Authority\'s Haseen platform. The work includes coordinating the required company information, cybersecurity details, authorised-account requirements, supporting documents, and internal approvals needed to complete the registration. Successful registration will strengthen the organisation\'s cybersecurity profile, improve regulatory visibility, and support future compliance and business opportunities.',
    benefits: [
      'Supports registration with the National Cybersecurity Authority',
      'Strengthens the organisation\'s cybersecurity profile',
      'Improves regulatory and compliance readiness',
      'Organises the required company and cybersecurity information',
      'Supports credibility in future cybersecurity opportunities',
    ],
    customContent: <HaseenCard />,
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
      <span className="inline-flex items-center gap-2 text-[clamp(14px,1vw,16px)] font-semibold tracking-[0.2em] uppercase text-brand-light/60 mb-4">
        {label}
      </span>
      <h2 className="text-[clamp(40px,4vw,60px)] font-black text-white mb-4 leading-tight">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-white/40 text-[clamp(16px,1.2vw,22px)] max-w-3xl mx-auto leading-relaxed">
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

      <div className="mx-auto" style={{ width: 'min(86vw, 1500px)' }}>

        {/* ── COMPLETED WORKS ── */}
        {/* ID used by PDF export to capture this header in isolation */}
        <div id="completed-works-header">
          <SectionHeader
            label="Completed Works"
            title="Work"
            highlight="Report"
            subtitle="A detailed breakdown of projects and initiatives completed during the reporting period as part of my role at Nama & Injaz."
            meta={['Shinaj Ahammed', 'ID 4118', 'Nama & Injaz', 'Work Report - 2026 July']}
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
          <div className="inline-block glass-card px-10 py-6">
            <p className="text-white/30 text-[clamp(14px,1vw,16px)] leading-relaxed">
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
