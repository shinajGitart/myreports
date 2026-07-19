import React from 'react'
import { User, Shield, Key, Bell, CheckCircle2, Activity, Server, Clock } from 'lucide-react'

/* Active Directory Automation workflow visual — used in Completed Project 03 */
const ADAutomationCard = () => {
  const logs = [
    { time: '09:00:12', msg: 'Request received from HR Portal' },
    { time: '09:00:15', msg: 'User details validated' },
    { time: '09:00:18', msg: 'AD account created (s.ahammed)' },
    { time: '09:00:21', msg: 'User assigned to required OU' },
    { time: '09:00:25', msg: 'Security groups applied' },
    { time: '09:00:28', msg: 'Temporary password generated' },
    { time: '09:00:30', msg: 'Notification sent to Manager' },
    { time: '09:00:32', msg: 'Audit record saved' },
  ]

  return (
    <div className="w-full bg-[#031d1a] border border-brand-mid/30 rounded-xl overflow-hidden font-sans text-sm">
      {/* Dashboard Header */}
      <div className="bg-[#021412] px-6 py-4 flex items-center justify-between border-b border-brand-mid/20">
        <div className="flex items-center gap-3">
          <Server className="text-brand-light" size={24} />
          <h3 className="text-white font-semibold text-lg">Active Directory Automation Engine</h3>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            System Active
          </span>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: User Info Card */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-brand-light font-medium uppercase tracking-wider text-xs">Provisioning Details</h4>
            <span className="px-2.5 py-1 bg-brand-base/20 text-brand-light border border-brand-mid/30 rounded text-xs">ID: REQ-8942</span>
          </div>
          
          <div className="bg-brand-darkest border border-brand-mid/20 rounded-lg p-5">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-mid/20">
              <div className="w-16 h-16 rounded-full bg-brand-mid/20 flex items-center justify-center border border-brand-mid/40">
                <User size={32} className="text-brand-light" />
              </div>
              <div>
                <h5 className="text-white text-lg font-medium">Sarah Jenkins</h5>
                <p className="text-white/50 text-sm">New Employee Onboarding</p>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <CheckCircle2 size={12} /> Provisioned
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Department</p>
                <p className="text-white/90">Information Technology</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Job Title</p>
                <p className="text-white/90">Systems Analyst</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Manager</p>
                <p className="text-white/90">Michael Scott</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Username</p>
                <p className="text-brand-light font-mono">s.jenkins</p>
              </div>
              <div className="col-span-2">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Assigned Organisational Unit</p>
                <p className="text-white/90 font-mono text-xs bg-brand-dark p-2 rounded border border-brand-mid/20">OU=IT,OU=Users,DC=corp,DC=local</p>
              </div>
              <div className="col-span-2">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Assigned Security Groups</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-2 py-1 bg-brand-dark border border-brand-mid/20 text-white/70 rounded text-xs flex items-center gap-1.5"><Shield size={10} /> VPN_Users</span>
                  <span className="px-2 py-1 bg-brand-dark border border-brand-mid/20 text-white/70 rounded text-xs flex items-center gap-1.5"><Shield size={10} /> IT_All</span>
                  <span className="px-2 py-1 bg-brand-dark border border-brand-mid/20 text-white/70 rounded text-xs flex items-center gap-1.5"><Shield size={10} /> SG_Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Workflow Log */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-brand-light font-medium uppercase tracking-wider text-xs">Automation Execution Log</h4>
            <span className="flex items-center gap-1.5 text-white/50 text-xs"><Clock size={12} /> Duration: 20s</span>
          </div>

          <div className="bg-brand-darkest border border-brand-mid/20 rounded-lg p-5 h-[375px] flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-white/80 pb-2 border-b border-brand-mid/10">
              <Activity size={16} className="text-brand-light" />
              <span className="font-medium">Job Status:</span>
              <span className="text-green-400 font-medium">Completed Successfully</span>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="absolute top-2 bottom-2 left-[11px] w-[2px] bg-brand-mid/20"></div>
              
              <div className="space-y-4 relative">
                {logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="relative mt-1 z-10 w-6 h-6 rounded-full bg-[#021412] border-2 border-brand-light flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-light"></div>
                    </div>
                    <div className="flex-1 bg-brand-dark/50 p-2.5 rounded border border-brand-mid/10 flex justify-between items-center">
                      <span className="text-white/80">{log.msg}</span>
                      <span className="text-white/40 font-mono text-xs">{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ADAutomationCard

