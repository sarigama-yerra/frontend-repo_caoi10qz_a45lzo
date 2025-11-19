import React from 'react'

// Simple white PDF mockup with timestamp header
export default function PDFMockup({ spotlight = true, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {spotlight && (
        <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),rgba(59,130,246,0.05)_45%,transparent_70%)] blur-2xl" />
      )}
      <div className="relative mx-auto w-full max-w-md rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
        {/* PDF header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3">
          <div className="text-xs font-mono text-neutral-600 tracking-tight">CLIENTPROOF_SECURE.PDF</div>
          <div className="text-[10px] font-mono text-neutral-500">TS: 2025-01-12 14:22:09 UTC</div>
        </div>
        {/* Content */}
        <div className="space-y-3 px-5 py-5">
          <div className="h-3 w-24 rounded bg-neutral-200" />
          <div className="h-4 w-3/4 rounded bg-neutral-100" />
          <div className="h-4 w-2/3 rounded bg-neutral-100" />
          <div className="h-4 w-4/5 rounded bg-neutral-100" />
          <div className="mt-4 grid grid-cols-12 gap-2">
            <div className="col-span-3 h-20 rounded bg-neutral-50 ring-1 ring-neutral-200" />
            <div className="col-span-9 space-y-2">
              <div className="h-3 w-28 rounded bg-neutral-200" />
              <div className="h-4 w-full rounded bg-neutral-100" />
              <div className="h-4 w-5/6 rounded bg-neutral-100" />
            </div>
          </div>
          <div className="mt-2 border-t border-neutral-200 pt-3 text-[10px] font-mono text-neutral-500">
            HASH: 8e2b…91af • SIGN: RSA-2048 • INTEGRITY: OK
          </div>
        </div>
      </div>
    </div>
  )
}
