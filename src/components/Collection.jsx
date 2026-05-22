import { useReveal } from '../hooks/useReveal'

const collections = [
  {
    title: 'Noir Absolu',
    season: 'Fall / Winter 26',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e96875951?w=800&q=80',
  },
  {
    title: 'Lumière Dorée',
    season: 'Resort 26',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Silk Reverie',
    season: 'Spring / Summer 26',
    image: 'https://images.unsplash.com/photo-1515886657611-9c9a42f3a140?w=800&q=80',
  },
  {
    title: 'Architectural Forms',
    season: 'Couture 26',
    image: 'https://images.unsplash.com/photo-1483985988350-763728e3685b?w=800&q=80',
  },
]

function CollectionCard({ item, index }) {
  const ref = useReveal(0.1)

  return (
    <article
      ref={ref}
      className="reveal group relative overflow-hidden aspect-[3/4] cursor-pointer"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.season}
        </p>
        <h3 className="heading-display text-3xl md:text-4xl text-white">{item.title}</h3>
        <span className="mt-4 inline-block text-[10px] tracking-[0.3em] uppercase text-milk/60 border-b border-gold/0 group-hover:border-gold/80 pb-1 transition-all duration-500 w-fit">
          View Lookbook
        </span>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </article>
  )
}

export default function Collection() {
  const headerRef = useReveal()

  return (
    <section id="collection" className="section-padding py-28 md:py-40">
      <div ref={headerRef} className="reveal max-w-7xl mx-auto mb-20">
        <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-6">Featured</p>
        <h2 className="heading-display text-5xl md:text-7xl text-white">
          The Collection
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {collections.map((item, i) => (
          <CollectionCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
