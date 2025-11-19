import React, { useState } from 'react'

const faqs = [
  { q: 'Are messages stored?', a: 'Yes. Encrypted at rest. Access controlled. Retention configurable.' },
  { q: 'Which channels are supported?', a: 'WhatsApp, SMS, and Email at launch. More coming.' },
  { q: 'Is the PDF admissible?', a: 'We generate UTC timestamps and integrity hashes. Talk to your counsel for jurisdiction specifics.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg border border-neutral-800">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-4 py-3 text-left">
        <span className="font-mono text-sm text-neutral-200">[ Q ] {q}</span>
        <span className="font-mono text-xs text-neutral-400">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="border-t border-neutral-800 px-4 py-3">
          <div className="font-mono text-xs text-neutral-300">[ A ] {a}</div>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-[#0B0D13] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 space-y-3">
        {faqs.map((f) => (
          <Item key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  )
}
