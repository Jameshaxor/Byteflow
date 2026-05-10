import { useEffect, useRef, useState } from 'react'

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now(), dur = 1800
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur)
            const eased = 1 - Math.pow(1 - p, 4)
            setVal(Math.round(to * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref} className="num">{val}{suffix}</span>
}

const items = [
  { n: 120, s: '+', l: 'Projects shipped',  c: 'col-span-12 md:col-span-5 bg-lime text-ink' },
  { n: 38,  s: '',  l: 'Active clients',    c: 'col-span-6  md:col-span-3' },
  { n: 7,   s: '',  l: 'Years in business', c: 'col-span-6  md:col-span-2' },
  { n: 98,  s: '',  l: 'Avg. Lighthouse',   c: 'col-span-12 md:col-span-2 bg-coal/60' },
]

export default function Stats() {
  return (
    <section className="col-pad py-20 md:py-28 border-t hair-b">
      <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted mb-8 fade-up">[03] — By the numbers</div>
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {items.map((it, i) => (
          <div key={it.l} className={`bento p-7 md:p-9 min-h-[180px] flex flex-col justify-between fade-up ${it.c}`} data-delay={i * 60}>
            <div className="display text-7xl md:text-8xl tracking-tightest leading-none">
              <Counter to={it.n} suffix={it.s} />
            </div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] opacity-70 mt-4">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
