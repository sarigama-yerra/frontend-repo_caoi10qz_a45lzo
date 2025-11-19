import React from 'react'
import { Mail, Smartphone, MessageSquare } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative bg-black py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <h3 className="text-center text-2xl sm:text-3xl font-bold text-white">Request early access</h3>
        <form className="mt-8 grid gap-4 rounded-xl border border-neutral-800 bg-black/50 p-6">
          <label className="text-xs font-mono text-neutral-400">EMAIL</label>
          <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white">
            <Mail className="h-4 w-4 text-neutral-400" />
            <input type="email" required placeholder="you@company.com" className="w-full bg-transparent outline-none placeholder:text-neutral-500" />
          </div>

          <label className="text-xs font-mono text-neutral-400">CHANNELS</label>
          <div className="grid grid-cols-3 gap-2">
            <button type="button" className="flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800">
              <Smartphone className="h-4 w-4" /> SMS
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800">
              <MessageSquare className="h-4 w-4" /> WhatsApp
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800">
              <Mail className="h-4 w-4" /> Email
            </button>
          </div>

          <button className="mt-4 rounded-lg bg-[#3B82F6] px-5 py-3 font-semibold text-white hover:bg-blue-500">
            Join the waitlist
          </button>
        </form>
      </div>
    </section>
  )
}
