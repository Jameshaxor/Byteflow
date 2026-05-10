import { useEffect, useState } from 'react'

const LINKS = [['Work','#work'],['Services','#services'],['Process','#process'],['About','#about'],['Contact','#contact']]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`fixed top-4 inset-x-4 md:inset-x-6 z-50 rounded-full border border-bone/10 transition-all duration-700 ease-silk ${
        scrolled || open ? 'bg-ink/80 backdrop-blur-xl' : 'bg-ink/30 backdrop-blur-md'
      }`}>
        <div className="px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between mono text-[11px] uppercase tracking-[0.18em]">
          <a href="#" data-cursor data-cursor-label="Top" className="logo-pill flex items-center gap-2.5 px-3 py-1.5 rounded-full">
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-lime opacity-70 animate-ping" />
              <span className="relative inline-block w-2 h-2 rounded-full bg-lime" />
            </span>
            <span className="relative z-10">Byteflow<span className="text-muted">.creatives</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(([l,h]) => (
              <a key={l} href={h} data-cursor className="px-3 py-1.5 rounded-full hover:bg-bone hover:text-ink transition-colors duration-500 ease-silk">{l}</a>
            ))}
          </nav>

          <a href="mailto:Manuhaxr@gmail.com" data-cursor data-cursor-label="Email" className="hidden md:inline-flex items-center gap-2 pl-3 pr-1 py-1 rounded-full bg-lime text-ink hover:bg-bone transition-colors duration-500 ease-silk">
            Let's talk
            <span className="w-6 h-6 rounded-full bg-ink text-lime inline-flex items-center justify-center">↗</span>
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden relative w-10 h-10 -mr-1 flex items-center justify-center rounded-full border border-bone/15 bg-ink/40"
          >
            <span className={`absolute h-[1.5px] w-5 bg-bone rounded-full transition-all duration-500 ease-silk ${open ? 'rotate-45 translate-y-0' : '-translate-y-[5px]'}`} />
            <span className={`absolute h-[1.5px] w-5 bg-bone rounded-full transition-all duration-500 ease-silk ${open ? '-rotate-45 translate-y-0' : 'translate-y-[5px]'}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-700 ease-silk ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="absolute inset-0 bg-ink/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className={`relative h-full flex flex-col justify-between px-6 pt-28 pb-10 transition-transform duration-700 ease-silk ${open ? 'translate-y-0' : '-translate-y-4'}`}>
          <nav className="flex flex-col gap-2">
            {LINKS.map(([l,h], i) => (
              <a
                key={l}
                href={h}
                onClick={() => setOpen(false)}
                className="display text-6xl tracking-tightest leading-none py-3 border-b hair-b hover:text-lime transition-colors"
                style={{ transitionDelay: open ? `${i * 60 + 200}ms` : '0ms', transform: open ? 'translateY(0)' : 'translateY(20px)', opacity: open ? 1 : 0, transitionProperty: 'transform, opacity, color' }}
              >
                <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted align-top mr-3">0{i+1}</span>
                {l}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-8">
            <a href="mailto:hello@byteflowcreatives.com" className="flex items-center justify-between gap-2 px-5 py-4 rounded-full bg-lime text-ink mono text-[11px] uppercase tracking-[0.2em]">
              hello@byteflowcreatives.com
              <span className="w-7 h-7 rounded-full bg-ink text-lime flex items-center justify-center">↗</span>
            </a>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted flex justify-between">
              <span>Byteflow Creatives ©2026</span>
              <span>Ranchi · IN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
