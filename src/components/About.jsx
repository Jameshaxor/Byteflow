import { Code2, MessageSquare, Coffee, Users } from 'lucide-react'

const team = [
  {
    name: 'Manu Kumar Nayak',
    role: 'Lead Developer · Co-founder',
    handle: '@manuhaxor',
    badge: 'Codes the magic',
    accent: '#d8ff36',
    bio: "Obsesses over micro-interactions, performance and the kind of details most people never notice — because those are the ones that separate good from unforgettable.",
    skills: ['React', 'Next.js', 'GSAP', 'Three.js', 'WebGL', 'Tailwind'],
    icon: Code2,
    monogram: 'M',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Ankit Nag',
    role: 'Client Lead · Co-founder',
    handle: '@ankit.byteflow',
    badge: 'Talks to humans',
    accent: '#a78bfa',
    bio: "Finds the right clients, runs every conversation, and turns vague briefs into clear projects. The reason your inbox isn't a mess and your timeline isn't on fire.",
    skills: ['Strategy', 'Discovery', 'Briefs', 'Timelines', 'Pitching', 'Onboarding'],
    icon: MessageSquare,
    monogram: 'A',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
  },
]

export default function About() {
  return (
    <section id="about" className="relative col-pad py-24 md:py-32 border-t hair-b overflow-hidden">
      <div className="absolute -top-20 right-0 w-[40vw] h-[40vw] rounded-full bg-lime/8 blur-[120px] -z-10" />

      <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.2em] text-muted fade-up flex items-center gap-2">
          <Users className="w-3.5 h-3.5" /> [05] — Meet the studio
        </div>
        <h2 className="col-span-12 md:col-span-9 display text-6xl md:text-8xl tracking-tightest leading-[0.92] text-balance fade-up" data-delay="80">
          Two humans. <br />
          <span className="text-muted">Zero middlemen.</span>
        </h2>
      </div>

      {/* Two-member showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {team.map((m, i) => {
          const Icon = m.icon
          return (
            <div
              key={m.name}
              data-cursor
              className="bento p-0 fade-up flex flex-col overflow-hidden group"
              data-delay={i * 100}
            >
              {/* Photo */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.4s] ease-silk"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="sticker" style={{ background: m.accent, color: '#0a0a0a' }}>★ {m.badge}</span>
                  <span className="display text-7xl md:text-8xl leading-none tracking-tightest opacity-30">{m.monogram}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="display text-3xl md:text-4xl tracking-tightest leading-none mb-1">{m.name}</div>
                    <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted">{m.role}</div>
                  </div>
                  <span className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: m.accent, color: '#0a0a0a' }}>
                    <Icon className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </div>

              {/* Bio + skills */}
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <p className="text-base md:text-lg leading-relaxed text-muted max-w-md mb-6">{m.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {m.skills.map((s) => (
                    <span key={s} className="mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border hair-b text-muted group-hover:text-bone group-hover:border-bone/30 transition-colors duration-500">{s}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted">{m.handle}</span>
                  <span className="w-9 h-9 rounded-full border hair-b flex items-center justify-center group-hover:bg-lime group-hover:text-ink group-hover:border-lime transition-all duration-500">↗</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* How we work together */}
      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bento p-7 fade-up md:col-span-2 flex flex-col justify-between min-h-[200px]">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted mb-4">[How it works]</div>
          <h3 className="display text-3xl md:text-5xl tracking-tightest leading-[1] text-balance">
            <span className="text-bone">Ankit listens →</span> <span className="text-lime">Manu builds.</span>
          </h3>
          <p className="text-muted text-base leading-relaxed mt-4 max-w-xl">
            You'll talk to <span className="text-bone">Ankit</span> from day one — kickoff, brief, weekly updates, launch. <span className="text-bone">Manu</span> stays heads-down in the editor, shipping the work. No project managers in between, no agency layers, no hand-offs.
          </p>
        </div>
        <div className="bento p-7 fade-up flex flex-col justify-between min-h-[200px] bg-lime text-ink border-lime" data-delay="100">
          <div className="mono text-[11px] uppercase tracking-[0.2em] opacity-70 flex items-center gap-2 mb-4">
            <Coffee className="w-3.5 h-3.5" /> [Stats]
          </div>
          <div>
            <div className="display text-6xl md:text-7xl tracking-tightest leading-none">04</div>
            <div className="mono text-[11px] uppercase tracking-[0.2em] opacity-70 mt-2">Live launches · 2026</div>
          </div>
          <div className="display text-2xl md:text-3xl tracking-tightest mt-4">
            ∞ <span className="text-base mono uppercase tracking-[0.2em] opacity-70 ml-1">cups of chai</span>
          </div>
        </div>
      </div>
    </section>
  )
}
