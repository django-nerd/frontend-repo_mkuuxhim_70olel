import { motion } from 'framer-motion'
import { GraduationCap, Utensils, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Tutoring, school supplies, and scholarships for bright futures.',
    stat: '2,300+ kids'
  },
  {
    icon: Utensils,
    title: 'Nutrition',
    desc: 'Daily meals and nutrition workshops to keep children healthy.',
    stat: '55,000 meals'
  },
  {
    icon: ShieldCheck,
    title: 'Protection',
    desc: 'Safe spaces and counselling for vulnerable children.',
    stat: '18 community hubs'
  }
]

function Impact() {
  return (
    <section id="impact" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Impact</h2>
          <p className="mt-3 text-white/70">Every donation fuels real programs on the ground.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg shadow-rose-500/30">
                <it.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
              <p className="mt-4 text-sm text-white/60">{it.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
