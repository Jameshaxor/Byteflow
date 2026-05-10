const items = [
  { t: 'Byteflow Creatives', s: '✦' },
  { t: 'Premium Websites',   s: '◆' },
  { t: 'Considered',          s: '✺' },
  { t: 'Scroll-stopping',    s: '✦' },
  { t: 'Available Q3 2026',  s: '◇' },
  { t: 'Ranchi → Worldwide', s: '★' },
]

export default function Marquee() {
  return (
    <section className="border-y hair-b py-7 overflow-hidden bg-coal/30">
      <div className="flex marquee-track whitespace-nowrap gap-10 display text-4xl md:text-6xl tracking-tightest">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % 2 ? 'text-bone' : 'text-muted'}>{it.t}</span>
            <span className="text-lime">{it.s}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
