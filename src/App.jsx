import React from 'react'
import Hero from './components/Hero'
import Pain from './components/Pain'
import Solution from './components/Solution'
import Features from './components/Features'
import Demo from './components/Demo'
import Story from './components/Story'
import Team from './components/Team'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0E1015] text-white">
      <Hero />
      <Pain />
      <Solution />
      <Features />
      <Demo />
      <Story />
      <Team />
      <FAQ />
      <FinalCTA />
      <footer className="bg-[#0B0D13] py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} ClientProof Secure — Evidence archiving for real disputes.
      </footer>
    </div>
  )
}

export default App
