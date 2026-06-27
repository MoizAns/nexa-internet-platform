import React from 'react'
import { motion } from 'framer-motion'
import { Zap, TrendingUp, HeadphonesIcon, Cpu, Gamepad2, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Ultra Fast Internet',
    description: 'Fiber-optic speeds up to 500 Mbps — stream 4K, download in seconds, and never queue behind a buffer wheel again.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: TrendingUp,
    title: '99.9% Uptime',
    description: 'Our redundant network infrastructure and proactive monitoring ensures your connection stays rock-solid around the clock.',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.3)',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Real engineers, not bots. Reach our technical support team any hour via phone, chat, or our dedicated app.',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.3)',
  },
  {
    icon: Cpu,
    title: 'Fiber Technology',
    description: 'Pure fiber-to-the-home (FTTH) infrastructure. No copper, no coax — just photons at the speed of light.',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.3)',
  },
  {
    icon: Gamepad2,
    title: 'Low Latency Gaming',
    description: 'Sub-5ms ping on our gaming-optimised routes. Compete at the highest level without lag costing you the match.',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.3)',
  },
  {
    icon: Lock,
    title: 'Secure Network',
    description: 'Built-in DDoS protection, DNS filtering, and optional parental controls — your privacy and safety, our priority.',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.3)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#05050f 0%,#080820 50%,#05050f 100%)' }}>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-18 flex flex-col items-center gap-4"
        >
          <span className="section-tag">What We Offer</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white leading-tight">
            Built for the way you live — <span className="text-gradient">online.</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            Every Nexa plan comes with these core capabilities as standard.
            No tiers of trust. No feature gating. Just the internet, done right.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="glass rounded-2xl p-7 group cursor-default relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${feat.glow}, transparent 70%)` }} />

                {/* Icon */}
                <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${feat.color}18`, border: `1px solid ${feat.color}35` }}>
                  <Icon size={22} style={{ color: feat.color }} />
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 16px ${feat.glow}` }} />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}