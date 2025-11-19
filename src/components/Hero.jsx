import React from 'react'
import { ShieldCheck, Download } from 'lucide-react'
import PDFMockup from './PDFMockup'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 sm:py-28">
      {/* micro noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{backgroundImage:'radial-gradient(#3B82F6 0.5px, transparent 0.5px)', backgroundSize:'6px 6px'}} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              ClientProof Secure
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300">
              Automatically capture conversations and produce clean, timestamped, tamper-resistant PDFs. Built for disputes, audits, and evidence archiving.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-5 py-3 font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:bg-blue-500">
                <ShieldCheck className="h-5 w-5" /> Get early access
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-neutral-100/5 px-5 py-3 font-semibold text-neutral-200 ring-1 ring-white/10 transition hover:bg-white/10">
                <Download className="h-5 w-5" /> See a demo
              </a>
            </div>
          </div>
          <div className="relative">
            <PDFMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
