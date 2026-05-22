import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-padding py-28 md:py-40 bg-milk text-black">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="text-[10px] tracking-[0.45em] uppercase text-gold-dark mb-6">Our Story</p>
            <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl leading-tight">
              Crafted for
              <br />
              <span className="italic">the discerning</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-16 space-y-8">
            <p className="text-sm md:text-base leading-relaxed text-black/70 tracking-wide">
              Founded in Paris in 1987, Maison Élise emerged from a singular vision: to merge
              timeless savoir-faire with the pulse of contemporary culture. Each garment is a
              dialogue between artisanal precision and architectural silhouette — a testament
              to the house&apos;s enduring commitment to haute couture excellence.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-black/70 tracking-wide">
              From our atelier on Rue du Faubourg Saint-Honoré, we dress women who move through
              the world with quiet confidence. Our collections have graced the runways of Paris,
              Milan, and New York — yet every piece remains intimately personal, designed to
              become part of your story.
            </p>
            <div className="flex gap-16 pt-4">
              <div>
                <p className="heading-display text-4xl text-gold-dark">1987</p>
                <p className="text-[10px] tracking-[0.3em] uppercase mt-2 text-black/50">Founded</p>
              </div>
              <div>
                <p className="heading-display text-4xl text-gold-dark">47</p>
                <p className="text-[10px] tracking-[0.3em] uppercase mt-2 text-black/50">Ateliers</p>
              </div>
              <div>
                <p className="heading-display text-4xl text-gold-dark">∞</p>
                <p className="text-[10px] tracking-[0.3em] uppercase mt-2 text-black/50">Elegance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 relative aspect-[21/9] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Atelier craftsmanship"
            className="w-full h-full object-cover transition-transform duration-[1.8s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
          <div className="absolute bottom-8 left-8 glass px-6 py-4">
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold">The Atelier</p>
          </div>
        </div>
      </div>
    </section>
  )
}
