const socials = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { name: 'Pinterest', href: 'https://pinterest.com', icon: 'PI' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'YT' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'IN' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-padding py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <a href="#" className="heading-display text-2xl text-white hover:text-gold transition-colors duration-500">
          Maison <span className="italic text-gold">Élise</span>
        </a>

        <nav className="flex items-center gap-8" aria-label="Social media">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-[10px] tracking-wider text-milk/50 border border-white/10 hover:border-gold hover:text-gold transition-all duration-400"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </nav>

        <p className="text-[10px] tracking-[0.2em] text-milk/40 uppercase">
          © {year} Maison Élise. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
