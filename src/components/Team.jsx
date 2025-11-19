import React from 'react'

const members = [
  { name: 'A. Martin', role: 'Engineering', bio: 'Systems, mobile, pipelines.', img: '' },
  { name: 'L. Chen', role: 'Security', bio: 'Threat modeling, crypto, audits.', img: '' },
  { name: 'R. Singh', role: 'Integrity', bio: 'Data lineage, forensics.', img: '' },
]

export default function Team() {
  return (
    <section className="bg-[#0E1015] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="rounded-xl border border-neutral-800 bg-[#0F1420] p-6">
              <div className="h-40 w-full rounded bg-[linear-gradient(135deg,#0b0e15, #141a26)] opacity-90" />
              <div className="mt-4 text-white font-semibold">{m.name}</div>
              <div className="text-sm text-neutral-300">{m.role}</div>
              <div className="mt-2 text-sm text-neutral-400">{m.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
