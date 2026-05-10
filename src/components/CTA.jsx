import { MessageSquare, Code2 } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative col-pad py-32 md:py-48 border-t hair-b overflow-hidden">
      <div className="absolute -top-40 right-[10vw] w-[40vw] h-[40vw] rounded-full bg-lime/15 blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-[20vw] w-[30vw] h-[30vw] rounded-full bg-lime/5 blur-[120px] -z-10" />

      <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted mb-8 fade-up">[06] — Let's talk</div>

      <h2 className="display text-[14vw] md:text-[10vw] leading-[0.9] tracking-tightest text-balance mb-12 fade-up" data-delay="80">
        <span className="block">Got a project?</span>
        <span className="block">Let's make it <span className="shimmer-text">unforgettable.</span></span>
      </h2>

      {/* Two-route contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 fade-up" data-delay="160">
        {/* Ankit — primary */}
        <a
          href="mailto:hello@byteflowcreatives.com"
          data-cursor
          data-cursor-label="Ankit"
          className="bento p-7 md:p-9 flex flex-col justify-between min-h-[260px] bg-lime text-ink border-lime group"
        >
          <div className="flex items-start justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.2em] opacity-70 flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5" /> [01] · Project enquiries
            </span>
            <span className="sticker sticker-coal">★ Start here</span>
          </div>
          <div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] opacity-70 mb-2">Talk to Ankit</div>
            <div className="display text-4xl md:text-5xl tracking-tightest leading-none mb-4 group-hover:translate-x-1 transition-transform duration-700 ease-silk">
              Briefs, timelines,<br />pricing → <span className="opacity-50 group-hover:opacity-100 transition-opacity">Ankit</span>
            </div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] flex items-center justify-between">
              <span>hello@byteflowcreatives.com</span>
              <span className="w-9 h-9 rounded-full bg-ink text-lime flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 ease-silk">↗</span>
            </div>
          </div>
        </a>

        {/* Manu — tech / collab */}
        <a
          href="mailto:Manuhaxr@gmail.com"
          data-cursor
          data-cursor-label="Manu"
          className="bento p-7 md:p-9 flex flex-col justify-between min-h-[260px] group"
        >
          <div className="flex items-start justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" /> [02] · Tech & collabs
            </span>
            <span className="sticker sticker-lime">⌘ Devs only</span>
          </div>
          <div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted mb-2">Reach Manu</div>
            <div className="display text-4xl md:text-5xl tracking-tightest leading-none mb-4 group-hover:text-lime transition-colors duration-500">
              Code talk,<br />WebGL, GSAP → <span className="opacity-50 group-hover:opacity-100 transition-opacity">Manu</span>
            </div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] flex items-center justify-between">
              <span>Manuhaxr@gmail.com</span>
              <span className="w-9 h-9 rounded-full border hair-b flex items-center justify-center group-hover:bg-lime group-hover:text-ink group-hover:border-lime transition-all duration-700 ease-silk">↗</span>
            </div>
          </div>
        </a>
      </div>

      {/* Quick info row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 fade-up" data-delay="220">
        {[
          ['Response', '< 24h'],
          ['Booking',  'Q3 — Q4 2026'],
          ['Based',    'Ranchi · Remote'],
        ].map(([l, v]) => (
          <div key={l} className="bento p-5 md:p-6">
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2">{l}</div>
            <div className="display text-xl md:text-2xl tracking-tightest">{v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
