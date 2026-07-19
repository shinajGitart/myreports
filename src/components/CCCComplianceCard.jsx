import React from 'react'
import { ShieldCheck, FileText, CheckCircle, Search, AlertCircle } from 'lucide-react'

/* CCC Cybersecurity Compliance visual — used in Completed Project 01 */
const CCCComplianceCard = () => {
  return (
    <div className="w-full bg-[#031d1a] border border-brand-mid/30 rounded-xl overflow-hidden font-sans text-sm">
      {/* Dashboard Header */}
      <div className="bg-[#021412] px-6 py-4 flex items-center justify-between border-b border-brand-mid/20">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-brand-light" size={24} />
          <h3 className="text-white font-semibold text-lg">CCC Certification Readiness Dashboard</h3>
        </div>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 bg-brand-base text-white rounded-md text-sm font-medium">SBC</span>
          <span className="px-4 py-1.5 bg-brand-darkest border border-brand-mid/50 text-white/70 rounded-md text-sm cursor-pointer hover:bg-brand-dark transition-colors">FABCO</span>
        </div>
      </div>

      <div className="p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-brand-darkest border border-brand-mid/20 rounded-lg p-4">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Controls Reviewed</p>
            <p className="text-3xl font-bold text-white">42</p>
          </div>
          <div className="bg-brand-darkest border border-brand-mid/20 rounded-lg p-4">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Policies Updated</p>
            <p className="text-3xl font-bold text-white">18</p>
          </div>
          <div className="bg-brand-darkest border border-brand-mid/20 rounded-lg p-4">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Evidence Collected</p>
            <p className="text-3xl font-bold text-white">35</p>
          </div>
          <div className="bg-brand-darkest border border-brand-mid/20 rounded-lg p-4 relative overflow-hidden">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Audit Readiness</p>
            <p className="text-3xl font-bold text-brand-light">92%</p>
            <div className="absolute bottom-0 left-0 h-1 bg-brand-light" style={{ width: '92%' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white/80 font-medium">Overall Certification Readiness</span>
            <span className="text-brand-light font-bold">92%</span>
          </div>
          <div className="w-full bg-brand-darkest rounded-full h-2.5 border border-brand-mid/20 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-base to-brand-light h-2.5 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>

        {/* Control Status Table */}
        <div className="border border-brand-mid/20 rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-darkest border-b border-brand-mid/20 text-white/60 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 font-medium">Control Area</th>
                <th className="py-3 px-4 font-medium">Implementation Status</th>
                <th className="py-3 px-4 font-medium">Evidence Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-mid/10 text-white/80">
              <tr className="hover:bg-brand-mid/5 transition-colors">
                <td className="py-3 px-4 font-medium">Cybersecurity Governance</td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20"><CheckCircle size={12} /> Completed</span></td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"><FileText size={12} /> Evidence Ready</span></td>
              </tr>
              <tr className="hover:bg-brand-mid/5 transition-colors">
                <td className="py-3 px-4 font-medium">Policies and Procedures</td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20"><CheckCircle size={12} /> Completed</span></td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"><FileText size={12} /> Evidence Ready</span></td>
              </tr>
              <tr className="hover:bg-brand-mid/5 transition-colors">
                <td className="py-3 px-4 font-medium">Identity and Access Management</td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-light/10 text-brand-light border border-brand-light/20"><CheckCircle size={12} /> Implemented</span></td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20"><Search size={12} /> Available</span></td>
              </tr>
              <tr className="hover:bg-brand-mid/5 transition-colors">
                <td className="py-3 px-4 font-medium">Asset Management</td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"><AlertCircle size={12} /> Reviewed</span></td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20"><Search size={12} /> Available</span></td>
              </tr>
              <tr className="hover:bg-brand-mid/5 transition-colors">
                <td className="py-3 px-4 font-medium">Incident Response</td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-light/10 text-brand-light border border-brand-light/20"><CheckCircle size={12} /> Implemented</span></td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"><FileText size={12} /> Evidence Ready</span></td>
              </tr>
              <tr className="hover:bg-brand-mid/5 transition-colors">
                <td className="py-3 px-4 font-medium">Business Continuity</td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"><AlertCircle size={12} /> Reviewed</span></td>
                <td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20"><FileText size={12} /> Prepared</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CCCComplianceCard
