import { useEffect, useState } from 'react'

const WORDS = ['Considered.', 'Crafted.', 'Refined.', 'Premium.', 'Byteflow.']
const WORD_DURATION = 700 // ms each
const TOTAL_DURATION = WORDS.length * WORD_DURATION + 500 // small breath at end

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [idx, setIdx] = useState(0)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    // smooth percentage tied to total duration
    const start = performance.now()
    let raf
    const loop = (now) => {
      const t = Math.min(1, (now - start) / TOTAL_DURATION)
      setPct(Math.floor(t * 100))
      if (t < 1) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // step through words
    const stepId = setInterval(() => {
      setIdx((i) => Math.min(i + 1, WORDS.length - 1))
    }, WORD_DURATION)

    const finishId = setTimeout(() => setDone(true), TOTAL_DURATION)
    return () => { cancelAnimationFrame(raf); clearInterval(stepId); clearTimeout(finishId) }
  }, [])

  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setMounted(false), 1100)
    return () => clearTimeout(t)
  }, [done])

  if (!mounted) return null

  const isFinal = idx === WORDS.length - 1

  return (
    <div
      className={`preloader ${done ? 'done' : ''}`}
      style={{ '--p2': `${pct}%` }}
    >
      {/* Top hairline label */}
      <div className="preloader__top-line">
        <span className="dot" />
        <span>A two-person studio</span>
      </div>

      {/* Cycling word stack */}
      <div className="preloader__inner">
        <div className="preloader__stage">
          {WORDS.map((w, i) => (
            <span
              key={w}
              className={`pword ${i === idx ? 'is-active' : i < idx ? 'is-past' : 'is-future'} ${i === WORDS.length - 1 ? 'lime' : ''}`}
              aria-hidden={i !== idx}
            >
              {w}
            </span>
          ))}
        </div>

        <div className="preloader__sub">
          <span style={{ opacity: isFinal ? 1 : 0.55, transition: 'opacity 0.6s ease' }}>
            {isFinal ? 'Premium websites for ambitious founders & brands' : 'Building things worth waiting for'}
          </span>
        </div>
      </div>

      {/* Bottom — single elegant line */}
      <div className="preloader__bottom-line">
        <span>Byteflow Creatives</span>
        <span className="sep" />
        <span>Ranchi · Est. 2026</span>
      </div>

      <div className="preloader__hairline" />
    </div>
  )
}
