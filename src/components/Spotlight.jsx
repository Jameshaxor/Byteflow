export default function Spotlight() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2000&q=85"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
      <div className="absolute inset-0 col-pad flex flex-col justify-between py-10 md:py-14">
        <div className="flex items-start justify-between mono text-[11px] uppercase tracking-[0.2em] text-bone/80">
          <span>[Manifesto]</span>
          <span>Byteflow · est. 2026</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="sticker sticker-lime mb-6">★ A two-person studio</span>
            <h3 className="display text-5xl md:text-8xl tracking-tightest leading-[0.95] text-balance fade-up">
              We don't build websites. <br />
              <span className="text-lime">We build experiences.</span>
            </h3>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right text-muted text-base md:text-lg leading-relaxed fade-up" data-delay="100">
            <p>Every project starts with one question: <span className="text-bone">how should this feel?</span> The answer drives every pixel, every transition, every line of code.</p>
            <a href="#about" data-cursor className="btn-pill mt-6">
              <span className="arr">↗</span>
              <span>Meet the team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
