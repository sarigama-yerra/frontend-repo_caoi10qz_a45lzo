import React from 'react'

export default function Story() {
  return (
    <section className="bg-[#111827] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-xl border border-neutral-800 bg-[#101522] p-6">
          <div className="h-32 w-full rounded bg-[linear-gradient(135deg,#0b0e15, #141a26)] flex items-center justify-center text-neutral-500">
            {/* Placeholder for B/W founder photo */}
            <span className="font-mono text-xs">PHOTO_BW_CREATOR</span>
          </div>
          <div className="mt-6 space-y-3 text-neutral-300">
            <h3 className="text-white text-2xl font-bold">Why this exists</h3>
            <p>Repeated client disputes. No reliable way to present clean conversation evidence. Internal scripts emerged to collect and normalize messages.</p>
            <p>Word of mouth spread the tool; it became a daily workflow. We shaped it into a product with one principle: integrity over flash.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
