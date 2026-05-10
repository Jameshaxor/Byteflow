import { useRef } from 'react'

// rAF-throttled tilt that ONLY runs while hovered — zero idle cost.
export default function BentoCard({ children, className = '', tilt = false, ...rest }) {
  const ref = useRef(null)
  const raf = useRef(null)
  const state = useRef({ mx: 0, my: 0, tx: 0, ty: 0, cx: 0, cy: 0, hovering: false })

  const tick = () => {
    const el = ref.current; if (!el) return
    const s = state.current
    s.cx += (s.tx - s.cx) * 0.15
    s.cy += (s.ty - s.cy) * 0.15
    if (tilt) {
      el.style.transform = `perspective(1000px) rotateX(${s.cx}deg) rotateY(${s.cy}deg)`
    }
    el.style.setProperty('--mx', `${s.mx}px`)
    el.style.setProperty('--my', `${s.my}px`)

    const settled = Math.abs(s.tx - s.cx) < 0.02 && Math.abs(s.ty - s.cy) < 0.02
    if (s.hovering || !settled) {
      raf.current = requestAnimationFrame(tick)
    } else {
      raf.current = null
      if (tilt) el.style.transform = ''
    }
  }

  const start = () => { if (!raf.current) raf.current = requestAnimationFrame(tick) }

  const onEnter = () => { state.current.hovering = true; start() }
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const s = state.current
    s.mx = e.clientX - r.left; s.my = e.clientY - r.top
    if (tilt) {
      const px = (s.mx / r.width - 0.5) * 2
      const py = (s.my / r.height - 0.5) * 2
      s.tx = -py * 3.5; s.ty = px * 4.5
    }
    start()
  }
  const onLeave = () => { state.current.hovering = false; state.current.tx = 0; state.current.ty = 0; start() }

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`bento ${tilt ? 'tilt' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
