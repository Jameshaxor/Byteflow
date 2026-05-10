import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ArrowUpRight, Coffee } from 'lucide-react'
import BentoCard from './BentoCard.jsx'

gsap.config({ force3D: true })

function LiveTime() {
  const [t, setT] = useState('')
  useEffect(() => {
    const tick = () => setT(new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata', hour12: false }).format(new Date()))
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [])
  return <span className="num tabular-nums">{t}</span>
}

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType('.h1', { types: 'lines, words', lineClass: 'overflow-hidden block leading-[0.92]' })
      gsap.set(split.words, { yPercent: 110, force3D: true })
      gsap.to(split.words, {
        yPercent: 0, duration: 1.4, ease: 'expo.out', stagger: 0.05, delay: 0.2, force3D: true,
        onComplete: () => {
          // Allow the hand-drawn circle SVG to overflow the line bounds.
          split.lines && split.lines.forEach((l) => { l.style.overflow = 'visible' })
        },
      })

      gsap.from('.h-bento', { y: 30, opacity: 0, duration: 1.4, ease: 'expo.out', stagger: 0.07, delay: 0.5, force3D: true })
      gsap.from('.h-meta',  { opacity: 0, y: 16, duration: 1, ease: 'expo.out', stagger: 0.06, delay: 0.2 })
      gsap.from('.h-deco',  { scale: 0.7, opacity: 0, duration: 1.2, ease: 'expo.out', delay: 1.0, stagger: 0.1 })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative col-pad pt-28 md:pt-32 pb-10 overflow-hidden">
      {/* Subtle background — reduced blur intensity */}
      <div className="absolute -top-40 -right-40 w-[55vw] h-[55vw] rounded-full blob-1 opacity-40 -z-10" />
      <div className="absolute top-[40%] -left-40 w-[35vw] h-[35vw] rounded-full bg-lime/8 blur-[80px] -z-10" />

      <div className="flex flex-wrap items-end justify-between gap-6 mb-8 mono text-[11px] uppercase tracking-[0.2em]">
        <div className="h-meta flex items-center gap-2 text-bone">
          <span className="relative inline-flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-lime opacity-70 animate-ping" />
            <span className="relative inline-block w-2 h-2 rounded-full bg-lime" />
          </span>
          Available · Q3 2026 · Ranchi <span className="opacity-60">/</span> <LiveTime />
        </div>
        <div className="h-meta text-bone/85">A two-person studio · Obsessed with the details</div>
      </div>

      {/* Refined headline */}
      <h1 className="h1 relative display text-[14vw] md:text-[11.5vw] leading-[0.92] tracking-tightest text-balance mb-10 md:mb-14">
        <span>Premium websites</span><br />
        <span>for <span className="inline-block bg-lime text-ink rounded-2xl px-3 md:px-5">ambitious</span></span><br />
        <span>founders &amp; brands.</span>

        {/* annotation arrow — bigger & brighter */}
        <span className="h-deco hidden md:flex absolute -right-4 top-[6%] flex-col items-center mono text-xs uppercase tracking-[0.2em] text-lime font-medium">
          <span className="rotate-3 mb-2 max-w-[160px] text-center leading-tight">two humans · <br />zero templates ↘</span>
          <svg width="68" height="68" viewBox="0 0 60 60" className="rotate-12">
            <path d="M 5 10 Q 25 5, 40 30 T 55 50" stroke="#d8ff36" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 50 42 L 55 50 L 47 50" stroke="#d8ff36" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </h1>

      <p className="h-meta max-w-2xl text-lg md:text-2xl leading-snug text-bone/90 mb-10 md:mb-12">
        We're <span className="text-lime font-medium">Byteflow Creatives</span> — a small studio building considered, scroll-stopping websites for brands that refuse to look like templates.
      </p>

      {/* Bento — only 2 tilt cards now (about + cta) */}
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {/* About card (tilt) */}
        <BentoCard tilt className="h-bento col-span-12 md:col-span-7 p-7 md:p-9 min-h-[280px] flex flex-col justify-between">
          <div className="tilt-inner flex items-start justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-bone/70">[Who]</span>
            <span className="sticker sticker-lime">★ Built with obsession</span>
          </div>
          <p className="tilt-inner text-2xl md:text-3xl leading-[1.18] tracking-tight max-w-xl mt-10 md:mt-0">
            <span className="text-bone">Manu</span> builds the product. <span className="text-bone">Ankit</span> runs the relationships. Together we ship sites that <span className="text-lime">punch above their weight</span>.
          </p>
        </BentoCard>

        {/* Code card (no tilt — saves perf) */}
        <BentoCard className="h-bento col-span-12 md:col-span-5 p-0 min-h-[280px] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b hair-b">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 mono text-[10px] uppercase tracking-[0.2em] text-bone/70">~/byteflow/studio.tsx</span>
            </div>
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-lime">●  LIVE</span>
          </div>
          <pre className="code-card flex-1 m-0 rounded-none border-0 text-[12.5px] leading-[1.85] whitespace-pre overflow-hidden">
            <code>
              <span className="tk-c">{`// the studio`}</span>{`\n`}
              <span className="tk-k">export const</span> <span className="tk-v">byteflow</span> = {`{`}{`\n`}
              {`  `}<span className="tk-n">team</span>: [<span className="tk-s">{`"Manu — dev"`}</span>, <span className="tk-s">{`"Ankit — clients"`}</span>],{`\n`}
              {`  `}<span className="tk-n">based</span>: <span className="tk-s">{`"Ranchi, IN"`}</span>,{`\n`}
              {`  `}<span className="tk-n">stack</span>: [<span className="tk-s">{`"React"`}</span>, <span className="tk-s">{`"GSAP"`}</span>, <span className="tk-s">{`"Three.js"`}</span>],{`\n`}
              {`  `}<span className="tk-n">fuel</span>: <span className="tk-s">{`"☕ + obsession"`}</span>,{`\n`}
              {`  `}<span className="tk-n">vibe</span>: <span className="tk-s">{`"premium ✦"`}</span>,{`\n`}
              {`  `}<span className="tk-n">ship</span>: () =&gt; <span className="tk-k">true</span>,{`\n`}
              {`}`}
            </code>
          </pre>
        </BentoCard>

        {/* Stats card (no tilt) */}
        <BentoCard className="h-bento col-span-6 md:col-span-3 p-6 md:p-7 min-h-[220px] flex flex-col justify-between bg-lime text-ink border-lime">
          <div className="flex items-start justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.2em] opacity-70">[Shipped]</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <div>
            <div className="display text-7xl md:text-8xl tracking-tightest leading-none">04</div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] opacity-70 mt-2">Live launches · 2026</div>
          </div>
        </BentoCard>

        {/* Image card */}
        <BentoCard className="h-bento col-span-12 md:col-span-5 min-h-[220px] overflow-hidden p-0 group">
          <div className="absolute inset-0">
            <img
              src="/projects/7fit.png"
              alt="7 Fit Gym"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-silk group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
          </div>
          <div className="relative h-full p-6 md:p-7 flex flex-col justify-between">
            <span className="sticker sticker-lime self-start">▸ Latest launch</span>
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.2em] text-bone/80 mb-1">Featured project</div>
              <a href="https://7fitgym.vercel.app" target="_blank" rel="noreferrer" data-cursor className="display text-3xl md:text-4xl tracking-tightest hover:text-lime transition-colors duration-500">7 Fit Gym →</a>
            </div>
          </div>
        </BentoCard>

        {/* Vibe card (no tilt) */}
        <BentoCard className="h-bento col-span-6 md:col-span-2 p-5 md:p-6 min-h-[220px] flex flex-col justify-between">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-bone/70">[Now]</div>
          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full spin-slow">
              <defs><path id="circle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" /></defs>
              <text className="mono fill-bone" fontSize="9" letterSpacing="3">
                <textPath href="#circle">CODING · 2026 · CODING · 2026 · </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-lime text-ink flex items-center justify-center"><Coffee className="w-4 h-4" /></span>
            </div>
          </div>
          <div className="mono text-[10px] uppercase tracking-[0.2em] text-center text-bone/70 leading-tight">
            On caffeine<br /><span className="text-bone">building v2</span>
          </div>
        </BentoCard>

        {/* Stack chip card (no tilt) */}
        <BentoCard className="h-bento col-span-6 md:col-span-3 p-6 min-h-[220px] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-bone/70">[Stack]</span>
            <span className="sticker sticker-coal text-[9px]">10+ tools</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['React','Next.js','GSAP','Three.js','Tailwind','Framer','Lenis'].map((s) => (
              <span key={s} className="mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border hair-b">{s}</span>
            ))}
          </div>
          <a href="#services" data-cursor className="mono text-[11px] uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:text-lime">
            What we build <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </BentoCard>

        {/* CTA card (tilt — second one) */}
        <BentoCard tilt className="h-bento col-span-12 md:col-span-2 p-6 min-h-[220px] flex flex-col justify-between bg-bone text-ink border-bone">
          <div className="tilt-inner flex items-start justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.2em] opacity-70">[Hire]</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <a href="mailto:hello@byteflowcreatives.com" data-cursor data-cursor-label="Ankit" className="tilt-inner display text-3xl leading-[0.95] tracking-tightest">
            Talk to<br />Ankit →
          </a>
        </BentoCard>
      </div>
    </section>
  )
}
