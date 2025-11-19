import React from 'react'
import { Link2, FileCheck2, CloudLock, Activity } from 'lucide-react'

const steps = [
  { id: '01', title: 'Connect your channels', desc: 'WhatsApp / SMS / Email', icon: Link2 },
  { id: '02', title: 'Auto-capture', desc: 'App monitors incoming threads', icon: Activity },
  { id: '03', title: 'Generate PDF', desc: 'Clean and timestamped', icon: FileCheck2 },
  { id: '04', title: 'Secure archive', desc: 'Stored in-app with integrity', icon: CloudLock },
]

export default function Solution() {
  return (
    <section className="bg-[#1F2937] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How it works</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ id, title, desc, icon: Icon }) => (
            <div key={id} className="rounded-lg border border-neutral-700 bg-[#1F2937] p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-neutral-300">STEP {id}</div>
                <Icon className="h-5 w-5 text-neutral-300" />
              </div>
              <div className="mt-3 text-white font-semibold">{title}</div>
              <div className="text-sm text-neutral-300">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
