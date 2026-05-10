import { ArrowUpRight, ExternalLink } from 'lucide-react'

const featured = {
  n: '01',
  title: 'Lumière by Niyati',
  client: 'Niyati Jewels',
  role: 'E-commerce · Editorial',
  year: 2026,
  url: 'lumiereniyati.vercel.app',
  href: 'https://lumiereniyati.vercel.app',
  tags: ['React', 'GSAP', 'Lenis', 'Editorial'],
  desc: 'A gold-on-black editorial jewelry platform. Scroll-driven collection showcase with curated typography and cinematic product reveals.',
  accent: '#fbbf24',
  fallback: '/projects/lumiere.png',
}

const projects = [
  {
    n: '02',
    title: 'Fida Dance Academy',
    client: 'Fida',
    role: 'Brand · Website',
    year: 2026,
    url: 'fidadance.netlify.app',
    href: 'https://fidadance.netlify.app',
    tags: ['React', 'GSAP', 'Cinematic'],
    desc: 'A dark luxury scroll-driven experience for Ranchi\'s premier dance academy. Cinematic storytelling that makes you feel the rhythm.',
    accent: '#a78bfa',
    span: 'md:col-span-7',
    label: 'Cinematic',
    fallback: '/projects/fida.png',
  },
  {
    n: '03',
    title: '7 Fit Gym',
    client: '7 Fit',
    role: 'Marketing · Brand',
    year: 2025,
    url: '7fitgym.vercel.app',
    href: 'https://7fitgym.vercel.app',
    tags: ['React', 'Tailwind', 'Motion'],
    desc: 'A high-energy fitness brand site for Ranchi\'s premium gym. Bold neon-on-black aesthetic with program showcases and trial conversions.',
    accent: '#d8ff36',
    span: 'md:col-span-5',
    label: 'High-energy',
    fallback: '/projects/7fit.png',
  },
  {
    n: '04',
    title: 'Greeka Cafe',
    client: 'Greeka',
    role: 'Hospitality · Web',
    year: 2025,
    url: 'greekares.vercel.app',
    href: 'https://greekares.vercel.app',
    tags: ['React', 'Reservations', 'Atmospheric'],
    desc: 'A cinematic rooftop cafe experience with atmospheric design, reservations, and food photography. Built to convert visitors into guests.',
    accent: '#22d3ee',
    span: 'md:col-span-5',
    label: 'Atmospheric',
    fallback: '/projects/greeka.png',
  },
]

function ShotFrame({ href, accent, image, title, tall = false }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border hair-b bg-coal lift">
      <div className="browser-chrome">
        <span className="dot" style={{ background: '#ff5f57' }} />
        <span className="dot" style={{ background: '#febc2e' }} />
        <span className="dot" style={{ background: '#28c840' }} />
        <span className="url">{href}</span>
        <span className="mono text-[10px] text-bone/60">↻</span>
      </div>

      <div className={`shot-window ${tall ? 'shot-window-tall' : ''} group/shot`}>
        <img src={image} alt={title} loading="lazy" className="shot-img" />

        {/* View live pill on hover */}
        <div className="absolute top-4 right-4 z-[3] pointer-events-none">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mono text-[11px] uppercase tracking-[0.2em] text-ink opacity-0 translate-y-2 group-hover/shot:opacity-100 group-hover/shot:translate-y-0 transition-all duration-700 ease-silk"
            style={{ background: accent }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View live
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section id="work" className="relative col-pad py-24 md:py-32 border-t hair-b overflow-hidden">
      <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-3 fade-up">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-bone/80 mb-2">[01] — Selected work</div>
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-bone/70">04 projects · 2026</div>
        </div>
        <div className="col-span-12 md:col-span-9 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-5xl md:text-8xl tracking-tightest leading-[0.92] text-balance fade-up" data-delay="80">
            Sites that <em className="not-italic text-lime">don't whisper</em>.
          </h2>
          <a href="mailto:hello@byteflowcreatives.com" data-cursor className="btn-pill fade-up" data-delay="160">
            <span className="arr">↗</span>
            <span>Start your project</span>
          </a>
        </div>
      </div>

      {/* FEATURED */}
      <div className="mb-6 md:mb-10 fade-up">
        <a href={featured.href} target="_blank" rel="noreferrer" data-cursor data-cursor-label="Visit" className="block group">
          <div className="relative">
            <span className="display absolute -top-8 -left-2 text-[16vw] md:text-[10vw] leading-none tracking-tightest text-bone/[0.05] pointer-events-none select-none">
              {featured.n}
            </span>
            <ShotFrame
              tall
              href={`https://${featured.url}`}
              accent={featured.accent}
              image={featured.fallback}
              title={featured.title}
            />
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="mb-3">
                <span className="sticker sticker-lime">★ Project 01 · Featured</span>
              </div>
              <h3 className="display text-5xl md:text-7xl tracking-tightest leading-none mb-4 group-hover:text-lime transition-colors duration-500">{featured.title}</h3>
              <p className="text-bone/85 text-base md:text-lg max-w-xl leading-relaxed">{featured.desc}</p>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:justify-end items-end gap-6">
              <div className="flex-1 md:flex-none md:text-right">
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-bone/60 mb-2">Stack</div>
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {featured.tags.map((t) => (
                    <span key={t} className="mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border hair-b text-bone/85">{t}</span>
                  ))}
                </div>
              </div>
              <span className="w-14 h-14 rounded-full bg-lime text-ink flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-700 ease-silk">
                <ArrowUpRight className="w-6 h-6" />
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <a
            key={p.n}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            data-cursor
            data-cursor-label="Visit"
            className={`group block fade-up col-span-12 ${p.span}`}
            data-delay={i * 80}
          >
            <div className="relative">
              <span className="display absolute -top-6 left-0 text-[10vw] md:text-[6vw] leading-none tracking-tightest text-bone/[0.05] pointer-events-none select-none">
                {p.n}
              </span>
              <ShotFrame
                href={`https://${p.url}`}
                accent={p.accent}
                image={p.fallback}
                title={p.title}
              />
              <span
                className="absolute -bottom-3 left-5 sticker z-10"
                style={{ background: p.accent, color: '#0a0a0a' }}
              >
                ▸ {p.label}
              </span>
            </div>
            <div className="mt-7 flex items-start justify-between gap-6">
              <div className="flex-1 min-w-0">
                <div className="mono text-[11px] uppercase tracking-[0.2em] text-bone/80 mb-1.5">{p.n} · {p.client}</div>
                <h3 className="display text-3xl md:text-4xl tracking-tightest leading-none group-hover:text-lime transition-colors duration-500 truncate">{p.title}</h3>
                <p className="text-bone/80 text-sm leading-relaxed mt-2">{p.desc}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="mono text-[11px] uppercase tracking-[0.2em] text-bone/80 mb-1.5">{p.year}</div>
                <div className="mono text-[11px] uppercase tracking-[0.2em]">{p.role}</div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border hair-b text-bone/85">{t}</span>
              ))}
            </div>
          </a>
        ))}

        {/* Yours-next card */}
        <a
          href="mailto:hello@byteflowcreatives.com"
          data-cursor
          data-cursor-label="Talk"
          className="group col-span-12 md:col-span-7 fade-up bento p-8 md:p-10 flex flex-col justify-between min-h-[300px] bg-lime text-ink border-lime"
          data-delay="240"
        >
          <div className="flex items-start justify-between">
            <span className="mono text-[11px] uppercase tracking-[0.2em] opacity-70">[05] · Reserved</span>
            <span className="sticker sticker-coal">★ Up next</span>
          </div>
          <div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] opacity-70 mb-3">Want yours here?</div>
            <h3 className="display text-5xl md:text-7xl tracking-tightest leading-[0.95] mb-4 group-hover:translate-x-1 transition-transform duration-700 ease-silk">
              Project 05<br />
              <span className="opacity-60">— could be yours.</span>
            </h3>
            <div className="mono text-[11px] uppercase tracking-[0.2em] flex items-center justify-between">
              <span>Talk to Ankit · hello@byteflowcreatives.com</span>
              <span className="w-10 h-10 rounded-full bg-ink text-lime flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 ease-silk">↗</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
