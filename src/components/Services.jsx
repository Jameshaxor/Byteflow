import { useRef } from 'react'
import { Code2, Palette, Sparkles, Zap, Globe, ShoppingBag } from 'lucide-react'

// Mini visual mockup per service
function MiniMockup({ kind, accent }) {
  if (kind === 'code') return (
    <div className="mini-ui font-mono text-[10px] leading-[1.6] text-muted">
      <div className="flex gap-1 mb-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" /><span className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" /><span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" /></div>
      <div><span className="text-[#ff7b72]">const</span> <span className="text-[#ffa657]">site</span> = <span className="text-[#a5d6ff]">'live'</span></div>
      <div><span className="text-[#79c0ff]">ship</span>(<span className="text-[#a5d6ff]">'fast'</span>)</div>
    </div>
  )
  if (kind === 'palette') return (
    <div className="mini-ui flex items-center gap-1.5 p-3">
      {['#d8ff36','#fafaf7','#ff7b7b','#79c0ff','#ffa657'].map((c,i) => <span key={i} className="w-6 h-6 rounded-md" style={{ background: c }} />)}
    </div>
  )
  if (kind === 'logo') return (
    <div className="mini-ui flex items-center justify-center gap-3 py-4">
      <div className="w-7 h-7 rounded-full bg-bone" />
      <div className="display text-xl text-bone tracking-tightest">brand/co</div>
    </div>
  )
  if (kind === 'cart') return (
    <div className="mini-ui">
      <div className="flex items-center justify-between mb-2"><span className="mono text-[9px] text-muted">CART</span><span className="mono text-[9px]" style={{ color: accent }}>$84</span></div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2"><span className="w-7 h-7 rounded bg-bone/10" /><div className="flex-1"><div className="mini-bar w-3/4 mb-1" /><div className="mini-bar w-1/2" style={{ height: 4 }} /></div></div>
        <div className="flex items-center gap-2"><span className="w-7 h-7 rounded bg-bone/10" /><div className="flex-1"><div className="mini-bar w-2/3 mb-1" /><div className="mini-bar w-1/3" style={{ height: 4 }} /></div></div>
      </div>
    </div>
  )
  if (kind === 'motion') return (
    <div className="mini-ui flex items-center gap-1.5 p-4">
      {[10,20,16,24,14,22,18].map((h,i) => (
        <span key={i} className="w-1.5 rounded-full" style={{ height: h, background: i === 3 ? accent : 'rgba(250,250,247,0.25)' }} />
      ))}
      <div className="flex-1 mini-bar ml-2" />
    </div>
  )
  if (kind === 'gauge') return (
    <div className="mini-ui flex items-center gap-3 p-3">
      <div className="relative w-14 h-14">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15" stroke="rgba(250,250,247,0.1)" strokeWidth="3" fill="none" />
          <circle cx="18" cy="18" r="15" stroke={accent} strokeWidth="3" fill="none" strokeDasharray="92 100" strokeLinecap="round" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center display text-sm">98</span>
      </div>
      <div className="flex-1">
        <div className="mono text-[9px] text-muted mb-1">PERFORMANCE</div>
        <div className="mini-bar w-full mb-1" />
        <div className="mini-bar w-2/3" style={{ height: 4 }} />
      </div>
    </div>
  )
  return null
}

const services = [
  { icon: Code2,       n: '01', t: 'Web Development',  d: 'Production-grade React, Next.js and Astro sites with performance and SEO baked in.', tags: ['Next.js','TS','Edge'],          accent: '#d8ff36', mock: 'code',    span: 'md:col-span-5' },
  { icon: Palette,     n: '02', t: 'UI / UX Design',   d: 'From wireframes to polished UI. Design systems, prototypes, interfaces that ship.',     tags: ['Figma','Systems','Proto'],      accent: '#a3e635', mock: 'palette', span: 'md:col-span-4' },
  { icon: Sparkles,    n: '03', t: 'Brand & Identity', d: 'Logos, type systems, and visual languages that make ambitious brands look the part.',  tags: ['Logo','Type','Guides'],          accent: '#fbbf24', mock: 'logo',    span: 'md:col-span-3' },
  { icon: ShoppingBag, n: '04', t: 'E-commerce',       d: 'Headless storefronts on Shopify, Stripe and custom rails — fast, conversion-tuned.',    tags: ['Shopify','Stripe','Headless'],   accent: '#f97316', mock: 'cart',    span: 'md:col-span-3' },
  { icon: Zap,         n: '05', t: 'Motion & Interaction', d: 'Micro-interactions, scroll experiences and considered motion — without sacrificing speed.', tags: ['GSAP','Lenis','WebGL'],   accent: '#22d3ee', mock: 'motion',  span: 'md:col-span-4' },
  { icon: Globe,       n: '06', t: 'SEO & Performance', d: 'Core Web Vitals, structured data and analytics that measurably move the needle.',     tags: ['Vitals','Schema','GA4'],         accent: '#a78bfa', mock: 'gauge',   span: 'md:col-span-5' },
]

function Card({ s, i }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const mx = e.clientX - r.left, my = e.clientY - r.top
    const px = (mx / r.width - 0.5) * 2, py = (my / r.height - 0.5) * 2
    el.style.transform = `perspective(1000px) rotateX(${-py * 4}deg) rotateY(${px * 5}deg)`
    el.style.setProperty('--mx', `${mx}px`); el.style.setProperty('--my', `${my}px`)
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)' }
  const Icon = s.icon
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      data-cursor data-delay={i * 50}
      className={`bento tilt fade-up p-6 lg:p-7 min-h-[340px] flex flex-col justify-between group cursor-pointer col-span-12 ${s.span}`}
    >
      <div className="tilt-inner flex items-start justify-between mb-6">
        <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted">{s.n} / 06</span>
        <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${s.accent}1a`, color: s.accent }}>
          <Icon className="w-4 h-4" strokeWidth={1.7} />
        </span>
      </div>
      <div className="tilt-inner mb-6"><MiniMockup kind={s.mock} accent={s.accent} /></div>
      <div className="tilt-inner">
        <div className="display text-3xl md:text-4xl tracking-tightest leading-[0.95] mb-2">{s.t}</div>
        <p className="text-muted text-[14px] leading-relaxed mb-4 max-w-sm">{s.d}</p>
        <div className="flex flex-wrap gap-1.5">
          {s.tags.map((t) => (
            <span key={t} className="mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border hair-b text-muted group-hover:text-bone group-hover:border-bone/30 transition-colors duration-500">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative col-pad py-24 md:py-32 border-t hair-b">
      <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.2em] text-muted fade-up">[02] — What we do</div>
        <h2 className="col-span-12 md:col-span-9 display text-6xl md:text-8xl tracking-tightest leading-[0.92] text-balance fade-up" data-delay="80">
          Six things we do <span className="text-muted">obsessively</span> well.
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {services.map((s, i) => <Card key={s.n} s={s} i={i} />)}
      </div>
    </section>
  )
}
