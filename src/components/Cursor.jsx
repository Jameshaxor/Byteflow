import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dot = useRef(null), ring = useRef(null)
  const [hover, setHover] = useState(false)
  const [label, setLabel] = useState('')
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable the custom cursor on devices that have a precise pointer (mouse).
    // Touch / coarse-pointer devices (phones, most tablets) keep their native behavior.
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const target = { x: window.innerWidth/2, y: window.innerHeight/2 }
    const a = { ...target }, b = { ...target }
    const onMove = (e) => { target.x = e.clientX; target.y = e.clientY }
    const loop = () => {
      a.x += (target.x - a.x) * 0.4
      a.y += (target.y - a.y) * 0.4
      b.x += (target.x - b.x) * 0.13
      b.y += (target.y - b.y) * 0.13
      if (dot.current)  dot.current.style.transform  = `translate3d(${a.x}px,${a.y}px,0) translate(-50%,-50%)`
      if (ring.current) ring.current.style.transform = `translate3d(${b.x}px,${b.y}px,0) translate(-50%,-50%)`
      requestAnimationFrame(loop)
    }
    loop()
    const onOver = (e) => {
      const t = e.target.closest('[data-cursor]')
      if (t) { setHover(true); setLabel(t.getAttribute('data-cursor-label') || '') }
      else { setHover(false); setLabel('') }
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dot}
        className={`fixed top-0 left-0 z-[200] pointer-events-none rounded-full transition-[width,height,opacity] duration-500 ease-silk ${hover ? 'w-0 h-0 opacity-0' : 'w-1.5 h-1.5 bg-bone mix-blend-difference'}`} />
      <div ref={ring}
        className={`fixed top-0 left-0 z-[200] pointer-events-none rounded-full flex items-center justify-center mono text-[10px] uppercase tracking-[0.2em] transition-[width,height,background-color,color,border-color] duration-500 ease-silk ${
          hover ? 'w-10 h-10 bg-lime text-ink border border-lime text-[8px]' : 'w-7 h-7 bg-transparent text-bone border border-bone/40 mix-blend-difference'
        }`}>
        {hover && label}
      </div>
    </>
  )
}
