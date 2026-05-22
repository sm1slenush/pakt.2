import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const runwayPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80',
    alt: 'Runway walk',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80',
    alt: 'Fashion week backstage',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=80',
    alt: 'Model on runway',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=700&q=80',
    alt: 'Couture detail',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=900&q=80',
    alt: 'Fashion show audience',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=80',
    alt: 'Editorial portrait',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1467043237213-65f5da533ff5?w=900&q=80',
    alt: 'Runway finale',
    tall: false,
  },
]

export default function Runway() {
  const headerRef = useReveal()
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationId
    let scrollPos = 0
    const speed = 0.3

    const autoScroll = () => {
      if (track.scrollWidth > track.clientWidth) {
        scrollPos += speed
        if (scrollPos >= track.scrollWidth - track.clientWidth) {
          scrollPos = 0
        }
        track.scrollLeft = scrollPos
      }
      animationId = requestAnimationFrame(autoScroll)
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced) {
      animationId = requestAnimationFrame(autoScroll)
    }

    const pause = () => cancelAnimationFrame(animationId)
    const resume = () => {
      if (!prefersReduced) animationId = requestAnimationFrame(autoScroll)
    }

    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)
    track.addEventListener('touchstart', pause, { passive: true })
    track.addEventListener('touchend', resume)

    return () => {
      cancelAnimationFrame(animationId)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
      track.removeEventListener('touchstart', pause)
      track.removeEventListener('touchend', resume)
    }
  }, [])

  return (
    <section id="runway" className="py-28 md:py-40 bg-milk/5 border-y border-white/5">
      <div ref={headerRef} className="reveal section-padding max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-6">Fashion Week</p>
          <h2 className="heading-display text-5xl md:text-7xl text-white">
            The Runway
          </h2>
        </div>
        <p className="text-sm text-milk/50 max-w-sm tracking-wide">
          Paris Fashion Week · SS26 — A visual journey through our latest presentation.
        </p>
      </div>

      <div
        ref={trackRef}
        className="runway-track flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 cursor-grab active:cursor-grabbing"
      >
        {runwayPhotos.map((photo, i) => (
          <div
            key={photo.src}
            className={`flex-shrink-0 overflow-hidden group ${
              photo.tall ? 'w-[280px] md:w-[340px] h-[420px] md:h-[520px]' : 'w-[240px] md:w-[300px] h-[320px] md:h-[400px]'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              loading="lazy"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          </div>
        ))}
      </div>

      <div className="section-padding max-w-7xl mx-auto mt-16 hidden lg:grid grid-cols-3 gap-6">
        {runwayPhotos.slice(0, 3).map((photo) => (
          <div key={`grid-${photo.src}`} className="overflow-hidden aspect-[4/5] group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
