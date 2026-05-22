import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#collection', label: 'Collection' },
  { href: '#runway', label: 'Runway' },
  { href: '#newsletter', label: 'Newsletter' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'glass-dark py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <a href="#" className="heading-display text-2xl md:text-3xl text-white hover:text-gold transition-colors duration-500">
          Maison <span className="italic text-gold">Élise</span>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.3em] uppercase text-milk/70 hover:text-gold transition-colors duration-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 w-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-px bg-milk transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-px bg-milk transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px bg-milk transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-0 glass-dark flex flex-col items-center justify-center gap-10 transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="heading-display text-3xl text-milk hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
