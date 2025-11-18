import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Stories from './components/Stories'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const scrollToDonate = (e) => {
    if (e) e.preventDefault()
    const el = document.querySelector('#donate')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(244,63,94,0.12),transparent_50%),radial-gradient(1000px_circle_at_90%_20%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="relative">
        <Navbar />
        <Hero onScrollToDonate={scrollToDonate} />
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc3xlbnwwfDB8fHwxNzYzNDUwMzAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Class" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Who we are</h2>
              <p className="mt-4 text-white/80">We partner with local communities to ensure children in poverty can learn safely, eat well, and find mentors who believe in them. Our programs are designed with dignity and long-term impact in mind.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-white/80 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-semibold text-white">Founded</p><p>2012</p></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-semibold text-white">Chapters</p><p>16 cities</p></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-semibold text-white">Volunteers</p><p>1,500+</p></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-semibold text-white">Children Reached</p><p>12,000+/yr</p></div>
              </div>
            </div>
          </div>
        </section>
        <Impact />
        <Stories />
        <CTA />
        <section id="volunteer" className="py-20">
          <div className="mx-auto max-w-7xl px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold">Volunteer with us</h2>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">Mentor a student, serve meals, or help run community workshops. Your time can change a life.</p>
            <a href="/test" className="mt-6 inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur border border-white/10 hover:bg-white/15 transition">Check system status</a>
          </div>
        </section>
        <section id="contact" className="py-10">
          <div className="mx-auto max-w-7xl px-4 text-center text-white/70">
            <p>Contact: hello@childhope.org • +1 (555) 123-4567</p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
