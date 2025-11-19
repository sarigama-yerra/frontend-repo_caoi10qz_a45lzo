import React from 'react'
import PDFMockup from './PDFMockup'

export default function Demo() {
  return (
    <section id="demo" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-[#F3F4F6] p-6">
            <div className="text-sm font-semibold text-neutral-700">Before</div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-20 rounded bg-neutral-300" />
              ))}
            </div>
            <div className="mt-4 h-24 rounded bg-neutral-200" />
          </div>
          <div className="relative rounded-xl border border-neutral-800 bg-[#0E1015] p-6">
            <div className="text-sm font-semibold text-neutral-200">After</div>
            <div className="mt-6">
              <PDFMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
