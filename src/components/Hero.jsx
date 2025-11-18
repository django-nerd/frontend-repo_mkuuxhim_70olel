import { motion } from 'framer-motion'

function Hero({ onScrollToDonate }) {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Help poor children learn, eat, and dream.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/80 max-w-xl">
              We are a non-profit organization providing education, meals, and safe spaces for children in need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#donate" onClick={onScrollToDonate} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 px-6 py-3 text-white font-semibold shadow-lg shadow-rose-500/30 hover:scale-[1.02] active:scale-[0.98] transition">
                Donate now
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur border border-white/10 hover:bg-white/15 transition">
                Learn more
              </a>
            </div>
            <div className="mt-6 text-white/70 text-sm">Registered Charity • Tax-deductible donations</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop" alt="Children" className="h-full w-full object-cover"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10 text-white shadow-xl">
              <p className="text-2xl font-bold">10,000+</p>
              <p className="text-sm text-white/80">Meals served last year</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
