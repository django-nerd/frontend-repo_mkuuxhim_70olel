import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Stories() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${backend}/api/stories`)
        const data = await res.json()
        setStories(data)
      } catch (e) {
        setStories([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="stories" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Stories of Change</h2>
          <p className="mt-3 text-white/70">Snapshots of the hope you make possible.</p>
        </div>
        {loading ? (
          <p className="text-center text-white/70 mt-10">Loading stories...</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => (
              <motion.article key={s._id || i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white">
                {s.image_url && (
                  <img src={s.image_url} alt={s.title} className="h-48 w-full object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{s.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Stories
