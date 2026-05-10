const stack = [
  ['Next.js',     'Framework'],
  ['React',       'UI Library'],
  ['TypeScript',  'Language'],
  ['Tailwind',    'Styling'],
  ['Framer Motion','Motion'],
  ['GSAP',        'Animation'],
  ['Three.js',    '3D / WebGL'],
  ['Sanity',      'CMS'],
  ['Shopify',     'Commerce'],
  ['Stripe',      'Payments'],
  ['Supabase',    'Backend'],
  ['Vercel',      'Deploy'],
]

export default function Stack() {
  return (
    <section className="col-pad py-24 md:py-32 border-t hair-b">
      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.2em] text-muted fade-up">
          [04] — The stack
        </div>
        <h2 className="col-span-12 md:col-span-9 display text-5xl md:text-7xl tracking-tightest leading-[0.95] text-balance fade-up" data-delay="80">
          Modern tools, <span className="text-muted">used well.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px hair">
        {stack.map((s, i) => (
          <div
            key={s[0]}
            data-cursor
            className="group bg-ink p-6 lg:p-8 hover:bg-coal transition-colors duration-500 cursor-default fade-up"
            data-delay={i * 30}
          >
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2">{s[1]}</div>
            <div className="display text-2xl md:text-3xl tracking-tightest leading-none group-hover:text-lime transition-colors duration-500">{s[0]}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
