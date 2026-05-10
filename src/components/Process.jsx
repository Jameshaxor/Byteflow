const steps = [
  { n: '01', t: 'Discovery',  w: '1 day',     d: 'A focused kickoff and audit — we align on goals, audience, and what success looks like.' },
  { n: '02', t: 'Design',     w: '3-4 days',  d: 'Art direction and high-fidelity UI in Figma. Tight iterations until every screen feels right.' },
  { n: '03', t: 'Development',w: '4-6 days',  d: 'Pixel-perfect, responsive, accessible. Built on a stack tuned for speed and longevity.' },
  { n: '04', t: 'Launch',     w: '1 day',     d: 'QA, performance pass, content load, deployment. A considered handover with docs.' },
]

export default function Process() {
  return (
    <section id="process" className="col-pad py-24 md:py-32 border-t hair-b">
      <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.2em] text-muted fade-up">
          [03] — How we work
        </div>
        <h2 className="col-span-12 md:col-span-9 display text-5xl md:text-7xl tracking-tightest leading-[0.95] text-balance fade-up" data-delay="80">
          From kickoff to launch <br />in <span className="text-lime">1–2 weeks.</span>
        </h2>
      </div>

      <div className="border-t hair-b">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="group grid grid-cols-12 gap-6 items-start py-8 md:py-10 border-b hair-b hover:bg-coal/40 transition-colors duration-500 fade-up"
            data-delay={i * 60}
          >
            <div className="col-span-2 md:col-span-1 mono text-sm text-muted">{s.n}</div>
            <div className="col-span-10 md:col-span-4 display text-3xl md:text-5xl tracking-tightest leading-none group-hover:text-lime transition-colors duration-500">{s.t}</div>
            <div className="col-span-12 md:col-span-5 text-muted text-[15px] md:text-base leading-relaxed">{s.d}</div>
            <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.2em] text-muted md:text-right">{s.w}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
