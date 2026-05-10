import { useEffect, useState } from 'react'

const cities = [['Ranchi', 'Asia/Kolkata'], ['New York', 'America/New_York'], ['London', 'Europe/London']]
const t = (tz) => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz, hour12: false }).format(new Date())

export default function Footer() {
  const [, force] = useState(0)
  useEffect(() => { const id = setInterval(() => force((n) => n + 1), 30000); return () => clearInterval(id) }, [])

  return (
    <footer className="col-pad pt-16 pb-8 border-t hair-b bg-coal/30">
      <div className="grid grid-cols-12 gap-6 mono text-[11px] uppercase tracking-[0.2em]">
        <div className="col-span-6 md:col-span-3">
          <div className="text-muted mb-2">Studio</div>
          <span className="text-bone">Byteflow Creatives</span><br />
          A two-person studio<br />Ranchi · IN
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-muted mb-2">Contact</div>
          <a href="mailto:hello@byteflowcreatives.com" data-cursor className="block hover:text-lime">hello@byteflowcreatives.com ↗</a>
          <a href="mailto:Manuhaxr@gmail.com" data-cursor className="block hover:text-lime">Manuhaxr@gmail.com ↗</a>
          <span className="block text-muted mt-1">Ankit · clients</span>
          <span className="block text-muted">Manu · code</span>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-muted mb-2">Live work</div>
          <a href="https://lumiereniyati.vercel.app" target="_blank" rel="noreferrer" data-cursor className="block hover:text-lime">Lumière ↗</a>
          <a href="https://fidadance.netlify.app"   target="_blank" rel="noreferrer" data-cursor className="block hover:text-lime">Fida Dance ↗</a>
          <a href="https://7fitgym.vercel.app"      target="_blank" rel="noreferrer" data-cursor className="block hover:text-lime">7 Fit Gym ↗</a>
          <a href="https://greekares.vercel.app"    target="_blank" rel="noreferrer" data-cursor className="block hover:text-lime">Greeka Cafe ↗</a>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-muted mb-2">World clocks</div>
          {cities.map(([c, tz]) => (
            <div key={c} className="flex justify-between"><span>{c}</span><span className="text-muted num">{t(tz)}</span></div>
          ))}
        </div>
      </div>

      <div className="mt-16 -mx-6 md:-mx-10 overflow-hidden select-none pointer-events-none">
        <div className="display text-[24vw] leading-[0.78] tracking-tightest text-center text-bone/[0.04]">
          BYTEFLOW
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between mono text-[10px] uppercase tracking-[0.2em] text-muted">
        <span>© 2026 Byteflow Creatives — Built with obsession</span>
        <a href="#" data-cursor className="hover:text-lime">↑ Back to top</a>
      </div>
    </footer>
  )
}
