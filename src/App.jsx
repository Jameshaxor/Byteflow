import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Cursor from './components/Cursor.jsx'
import Preloader from './components/Preloader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import Showcase from './components/Showcase.jsx'
import Spotlight from './components/Spotlight.jsx'
import Stack from './components/Stack.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './lib/useReveal.js'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: 'expo.out', duration: 1.1 })

export default function App() {
  useEffect(() => {
    // Skip Lenis on touch devices — native momentum scroll is smoother
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      lerp: 0.13,
      wheelMultiplier: 1,
    })
    lenis.on('scroll', ScrollTrigger.update)
    let raf
    const tick = (time) => { lenis.raf(time); raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => { clearTimeout(refresh); cancelAnimationFrame(raf); lenis.destroy() }
  }, [])

  useReveal([])

  return (
    <div className="grain bg-ink text-bone min-h-screen">
      <Preloader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <Spotlight />
        <Services />
        <Process />
        <Stack />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
