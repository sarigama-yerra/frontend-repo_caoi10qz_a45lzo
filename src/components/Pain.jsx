import React from 'react'
import { AlertTriangle, Search, Archive, MessageSquareWarning, ShieldX } from 'lucide-react'

export default function Pain() {
  const items = [
    { icon: ShieldX, text: 'Client denies prior agreement' },
    { icon: Archive, text: 'Messages lost in WhatsApp/SMS' },
    { icon: MessageSquareWarning, text: 'Screenshots unverified / messy' },
    { icon: Search, text: 'Searching manually for proof' },
    { icon: AlertTriangle, text: 'Conflict escalation due to lack of evidence' },
  ]

  return (
    <section className="bg-[#0E1015] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">The problem</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-[#0E1015] p-4 text-neutral-200">
              <Icon className="h-5 w-5 text-neutral-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-[#3B82F6]/30 bg-[#0B0D13] p-4 text-neutral-200 font-mono text-sm">
          <div className="text-[#3B82F6]">[ EVIDENCE GAP ]</div>
          <div>Lost time. Lost credibility. Endless disputes.</div>
        </div>
      </div>
    </section>
  )
}
