import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, Star, ArrowRight } from 'lucide-react'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    speed: '50 Mbps',
    monthly: 499,
    annual: 4999,
    tag: null,
    color: '#818cf8',
    features: [
      'Unlimited Data',
      'Up to 50 Mbps download',
      'Up to 25 Mbps upload',
      '24/7 Customer Support',
      'Free Router on 12-month plan',
      '1 static IP address',
    ],
    description: 'Perfect for light browsing, email, and HD streaming on 1–2 devices.',
  },
  {
    id: 'standard',
    name: 'Standard',
    speed: '100 Mbps',
    monthly: 799,
    annual: 7999,
    tag: null,
    color: '#a78bfa',
    features: [
      'Unlimited Data',
      'Up to 100 Mbps download',
      'Up to 50 Mbps upload',
      '24/7 Priority Support',
      'Free Router included',
      '1 static IP address',
      'Parental controls',
    ],
    description: 'Ideal for remote work, HD video calls, and households with 3–4 devices.',
  },
  {
    id: 'premium',
    name: 'Premium',
    speed: '200 Mbps',
    monthly: 1299,
    annual: 12999,
    tag: 'Most Popular',
    color: '#38bdf8',
    features: [
      'Unlimited Data',
      'Up to 200 Mbps download',
      'Up to 100 Mbps upload',
      '24/7 Dedicated Support',
      'Premium WiFi 6 Router',
      '2 static IP addresses',
      'Parental controls',
      'DDoS protection',
    ],
    description: 'Our bestseller — 4K streaming, gaming, and smart home on 5–8 devices.',
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    speed: '500 Mbps',
    monthly: 2499,
    annual: 24999,
    tag: 'Enterprise Grade',
    color: '#f472b6',
    features: [
      'Unlimited Data',
      'Up to 500 Mbps download',
      'Up to 250 Mbps upload',
      '24/7 Dedicated Account Manager',
      'Premium WiFi 6E Mesh Router',
      '5 static IP addresses',
      'Advanced parental controls',
      'Full DDoS + threat protection',
      'SLA uptime guarantee',
    ],
    description: 'Maximum performance for power users, gamers, creators, and small offices.',
  },
]

function PlanCard({ plan, annual, index }) {
  const isPopular = plan.id === 'premium'
  const price = annual ? plan.annual : plan.monthly
  const savingsPct = Math.round((1 - plan.annual / (plan.monthly * 12)) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: isPopular ? -4 : -8, transition: { duration: 0.25 } }}
      className={`relative flex flex-col rounded-2xl overflow-hidden ${
        isPopular
          ? 'ring-2 ring-brand-500/80 shadow-[0_0_60px_rgba(99,102,241,0.3)]'
          : 'glass'
      }`}
      style={isPopular ? { background: 'linear-gradient(160deg,#0c0c2e,#0f0f38,#080828)' } : {}}
    >
      {/* Popular gradient top bar */}
      {isPopular && (
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#6366f1,#a78bfa,#38bdf8)' }} />
      )}

      {/* Tag */}
      {plan.tag && (
        <div className="absolute top-5 right-5">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: isPopular ? 'rgba(99,102,241,0.25)' : 'rgba(244,114,182,0.15)',
              color: isPopular ? '#a5b4fc' : '#f9a8d4',
              border: `1px solid ${isPopular ? 'rgba(99,102,241,0.4)' : 'rgba(244,114,182,0.3)'}`,
            }}>
            {isPopular && <Star size={10} fill="currentColor" />}
            {plan.tag}
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col flex-1 gap-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}30` }}>
              <Zap size={15} style={{ color: plan.color }} />
            </div>
            <h3 className="font-display font-bold text-lg text-white">{plan.name}</h3>
          </div>

          {/* Speed badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-mono-custom font-semibold mb-4"
            style={{ background: `${plan.color}15`, color: plan.color }}>
            {plan.speed}
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
        </div>

        {/* Price */}
        <AnimatePresence mode="wait">
          <motion.div
            key={annual ? 'annual' : 'monthly'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-end gap-1">
              <span className="text-sm text-slate-500 mb-1">₹</span>
              <span className="font-display font-black text-5xl text-white leading-none">
                {price.toLocaleString('en-IN')}
              </span>
              <span className="text-slate-500 text-sm mb-1">/{annual ? 'yr' : 'mo'}</span>
            </div>
            {annual && (
              <p className="text-xs text-emerald-400 mt-1.5 font-medium">
                Save {savingsPct}% vs monthly — ₹{(plan.monthly * 12 - plan.annual).toLocaleString('en-IN')} off
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Features */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {plan.features.map(feat => (
            <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
              <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
            isPopular
              ? 'text-white'
              : 'text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08]'
          }`}
          style={isPopular ? {
            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
            boxShadow: '0 0 24px rgba(99,102,241,0.45)',
          } : {}}
        >
          Get Started <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Plans() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="plans" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#05050f 0%,#080822 60%,#05050f 100%)' }}>

      {/* Ambient */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 flex flex-col items-center gap-4"
        >
          <span className="section-tag">Internet Plans</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
            Simple, transparent <span className="text-gradient">pricing.</span>
          </h2>
          <p className="text-slate-400 max-w-md text-lg">
            No hidden fees. No speed throttling. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-4 flex items-center gap-4 glass rounded-2xl p-1.5 pr-4">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                !annual ? 'bg-brand-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                annual ? 'bg-brand-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual
            </button>
            {annual && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-semibold text-emerald-400 px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)' }}
              >
                Up to 17% off
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} annual={annual} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-slate-600 mt-10"
        >
          All plans include unlimited data, free installation, and our 30-day money-back guarantee.
          Prices inclusive of GST.
        </motion.p>
      </div>
    </section>
  )
}