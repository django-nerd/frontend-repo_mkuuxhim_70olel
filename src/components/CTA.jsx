import { useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function CTA() {
  const [pledge, setPledge] = useState({ name: '', email: '', amount: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/api/pledge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...pledge, amount: parseFloat(pledge.amount) })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('success')
      setPledge({ name: '', email: '', amount: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="donate" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Make a pledge</h2>
            <p className="mt-3 text-white/70 max-w-lg">Your contribution provides books, meals, and safe spaces. Pledges are non-binding; we’ll email you with secure options to complete your donation.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm list-disc pl-5">
              <li>$25 feeds a child for a week</li>
              <li>$60 equips a student for school</li>
              <li>$120 supports a community class</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white">
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={pledge.name} onChange={e=>setPledge(v=>({...v,name:e.target.value}))} placeholder="Full name" className="w-full rounded-lg bg-white/10 px-4 py-3 outline-none border border-white/10 placeholder-white/60" required />
              <input value={pledge.email} type="email" onChange={e=>setPledge(v=>({...v,email:e.target.value}))} placeholder="Email address" className="w-full rounded-lg bg-white/10 px-4 py-3 outline-none border border-white/10 placeholder-white/60" required />
              <input value={pledge.amount} type="number" min="1" step="1" onChange={e=>setPledge(v=>({...v,amount:e.target.value}))} placeholder="Amount (USD)" className="w-full rounded-lg bg-white/10 px-4 py-3 outline-none border border-white/10 placeholder-white/60" required />
              <input value={pledge.message} onChange={e=>setPledge(v=>({...v,message:e.target.value}))} placeholder="Message (optional)" className="w-full rounded-lg bg-white/10 px-4 py-3 outline-none border border-white/10 placeholder-white/60 sm:col-span-2" />
            </div>
            <button disabled={status==='loading'} className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 px-6 py-3 text-white font-semibold shadow-lg shadow-rose-500/30 disabled:opacity-60">
              {status==='loading' ? 'Submitting...' : 'Pledge Support'}
            </button>
            {status==='success' && <p className="mt-3 text-emerald-300">Thanks! We’ll be in touch shortly.</p>}
            {status==='error' && <p className="mt-3 text-rose-300">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
