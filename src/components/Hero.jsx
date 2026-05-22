export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e042a06e5d93?w=1920&q=80"
          alt="Fashion editorial"
          className="w-full h-full object-cover scale-105 animate-[fadeIn_2s_ease_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative section-padding w-full pb-24 md:pb-32 pt-40">
        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold mb-6 animate-fade-up opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
          Haute Couture · Paris · MMXXVI
        </p>

        <h1 className="heading-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] text-white mb-6 animate-fade-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
          Maison
          <br />
          <span className="italic text-gold">Élise</span>
        </h1>

        <p className="heading-display text-xl md:text-2xl text-milk/80 font-light italic mb-12 max-w-md animate-fade-up opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
          Redefining Modern Elegance
        </p>

        <a
          href="#collection"
          className="btn-primary animate-fade-up opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards]"
        >
          Explore Collection
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-milk/40">
        <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
