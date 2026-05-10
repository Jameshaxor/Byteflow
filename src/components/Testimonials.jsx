const quotes = [
  {
    q: 'Pixel & Co turned a vague brief into the most-shared product launch in our company history.',
    a: 'Mira Lindqvist',
    r: 'Head of Brand · Northwind',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=85',
  },
  {
    q: 'It feels like having a creative co-founder. The taste level is unreal — and they ship faster than any team we\'ve worked with.',
    a: 'Sam Park',
    r: 'CEO · Lumen Health',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
  },
  {
    q: 'Six weeks. One redesign. 3× conversion. They just get it.',
    a: 'Yuki Tanaka',
    r: 'Product · Halo Coffee',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=85',
  },
]

export default function Testimonials() {
  return (
    <section className="light-section relative col-pad py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between mb-12 md:mb-16 gap-6">
        <div className="fade-up">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted mb-4">[06] — Kind words</div>
          <h2 className="display text-6xl md:text-8xl tracking-tightest leading-[0.92] text-balance">
            People say <br />
            <span className="text-muted italic">nice things.</span>
          </h2>
        </div>
        <div className="fade-up flex items-center gap-3" data-delay="100">
          <div className="display text-5xl tracking-tightest">5.0</div>
          <div>
            <div className="text-[#fbbf24] text-lg leading-none">★★★★★</div>
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted mt-1">38 client reviews</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {quotes.map((t, i) => (
          <figure
            key={i}
            data-cursor
            className="bg-white border border-black/10 rounded-2xl p-7 md:p-8 lift fade-up flex flex-col justify-between min-h-[340px] shadow-[0_2px_0_rgba(0,0,0,0.04)]"
            data-delay={i * 80}
          >
            <div>
              <div className="text-[#0a0a0a] text-5xl leading-none mb-4 display">"</div>
              <blockquote className="text-lg md:text-xl leading-snug text-balance text-[#0a0a0a]">{t.q}</blockquote>
            </div>
            <figcaption className="mt-8 flex items-center gap-3">
              <img src={t.img} alt={t.a} className="w-10 h-10 rounded-full object-cover" />
              <div className="mono text-[11px] uppercase tracking-[0.2em]">
                <div>{t.a}</div>
                <div className="text-muted">{t.r}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Press logos band */}
      <div className="mt-16 md:mt-20 pt-10 border-t hair-b">
        <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted mb-6">As featured in</div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 display text-2xl md:text-3xl tracking-tightest">
          {['Awwwards', "It's Nice That", 'FWA', 'CSS Design Awards', 'The Brand Identity', 'Eye on Design'].map((p) => (
            <span key={p} className="opacity-50 hover:opacity-100 transition-opacity duration-500">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
