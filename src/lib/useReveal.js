import { useEffect } from 'react'

export default function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .clip-up')
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target
            const delay = parseFloat(el.dataset.delay || '0')
            setTimeout(() => el.classList.add('in'), delay)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line
  }, deps)
}
