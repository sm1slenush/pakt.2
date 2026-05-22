import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Newsletter() {
  const ref = useReveal()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="newsletter" className="section-padding py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div ref={ref} className="reveal relative max-w-3xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-6">Private Circle</p>
        <h2 className="heading-display text-4xl md:text-6xl text-white mb-6">
          Join the Maison
        </h2>
        <p className="text-sm text-milk/60 tracking-wide mb-12 max-w-md mx-auto">
          Receive exclusive previews, invitation-only events, and early access to new collections.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="flex-1 glass rounded-none">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full bg-transparent px-6 py-4 text-sm text-milk placeholder:text-milk/30 tracking-wide outline-none"
              aria-label="Email address"
            />
          </div>
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-6 text-xs tracking-[0.25em] uppercase text-gold animate-fade-in">
            Welcome to Maison Élise
          </p>
        )}
      </div>
    </section>
  )
}
