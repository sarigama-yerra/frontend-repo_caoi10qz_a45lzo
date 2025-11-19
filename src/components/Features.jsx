import React from 'react'
import { Radar, Clock8, LockKeyhole, Bell } from 'lucide-react'

const features = [
  { title: 'Automatic capture', icon: Radar, desc: 'Hands-free message ingestion with audit trail.' },
  { title: 'Timestamped PDF', icon: Clock8, desc: 'UTC-stamped, tamper-resistant documents.' },
  { title: 'Secure archive', icon: LockKeyhole, desc: 'Encrypted at rest. Integrity verified.' },
  { title: 'Workflow notifications', icon: Bell, desc: 'Know when a new proof is ready.' },
]

export default function Features() {
  return (
    <section className="bg-[#0E1015] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Capabilities</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-lg border border-neutral-800 bg-[#0E1015] p-5 transition hover:bg-[#111827]">
              <div className="flex items-center gap-2 text-white">
                <Icon className="h-5 w-5 text-neutral-300" />
                <span className="font-semibold">{title}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
