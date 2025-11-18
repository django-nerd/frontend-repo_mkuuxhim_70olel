import { Menu, HeartHandshake, HandHeart, Phone } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-rose-500/30">
            <HeartHandshake size={18} />
          </span>
          <div>
            <p className="text-white font-semibold leading-none">ChildHope</p>
            <p className="text-xs text-white/70 leading-none">For every child's tomorrow</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#impact" className="hover:text-white">Impact</a>
          <a href="#stories" className="hover:text-white">Stories</a>
          <a href="#donate" className="hover:text-white">Donate</a>
          <a href="#volunteer" className="hover:text-white">Volunteer</a>
          <a href="#contact" className="hover:text-white inline-flex items-center gap-1"><Phone size={16}/> Contact</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
