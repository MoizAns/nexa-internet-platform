import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, Clock } from 'lucide-react'

/* ─── Particle network canvas ─────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W, H, particles

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const rand = (min, max) => Math.random() * (max - min) + min

    const initParticles = () => {
      const count = Math.floor((W * H) / 12000)
      particles = Array.from({ length: count }, () => ({
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3),
        r: rand(1, 2.5),
        opacity: rand(0.3, 0.9),
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // dots
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2)
        grad.addColorStop(0, `rgba(167,139,250,${p.opacity})`)
        grad.addColorStop(1, 'rgba(167,139,250,0)')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    window.addEventListener('resize', () => { resize(); initParticles() })
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

/* ─── Stats pill ────────────────────────────────────────────────────────── */
function StatPill({ icon: Icon, label, value }) {
  return (
    <div className="glass rounded-2xl px-5 py-3.5 flex items-center gap-3 min-w-[140px]">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(99,102,241,0.2)' }}>
        <Icon size={15} className="text-brand-400" />
      </div>
      <div>
        <p className="text-lg font-display font-bold text-white leading-tight">{value}</p>
        <p className="text-xs text-slate-500 leading-tight">{label}</p>
      </div>
    </div>
  )
}

/* ─── Speed ring SVG ─────────────────────────────────────────────────── */
function SpeedRing() {
  return (
    <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full opacity-20 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)' }} />

      {/* SVG rings */}
      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
        <circle cx="100" cy="100" r="90" stroke="url(#ringGrad)" strokeWidth="1.5"
          strokeDasharray="60 480" strokeLinecap="round" />
        <circle cx="100" cy="100" r="70" stroke="rgba(167,139,250,0.12)" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="url(#ringGrad2)" strokeWidth="1"
          strokeDasharray="30 360" strokeLinecap="round" />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" /><stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="ringGrad2" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" /><stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="glass-strong rounded-3xl px-8 py-6 flex flex-col items-center gap-1">
          <span className="text-5xl lg:text-6xl font-display font-black text-gradient leading-none">500</span>
          <span className="text-sm font-mono-custom text-brand-400 tracking-widest">Mbps</span>
          <span className="text-xs text-slate-500 mt-1">Max Speed</span>
        </div>
      </div>

      {/* Orbit dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div key={i}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: i % 2 === 0 ? '#6366f1' : '#a78bfa',
            boxShadow: `0 0 8px ${i % 2 === 0 ? '#6366f1' : '#a78bfa'}`,
            top: `${50 - 47 * Math.cos(deg * Math.PI / 180)}%`,
            left: `${50 + 47 * Math.sin(deg * Math.PI / 180)}%`,
            transform: 'translate(-50%,-50%)',
          }}
        />
      ))}
    </div>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(167,139,250,0.2) 0%, transparent 60%), linear-gradient(180deg, #05050f 0%, #0a0a1f 100%)' }}>

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — copy */}
        <div className="flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 inline-block animate-pulse" />
              Now live in 50+ cities across India
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h1 className="font-display font-black text-5xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              Unlimited
              <br />
              <span className="text-gradient">Speed.</span>
              <br />
              Unlimited
              <br />
              <span className="text-gradient">Possibilities.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            Nexa Internet delivers blazing-fast fiber broadband to your home and business —
            with zero throttling, zero data caps, and zero excuses for buffering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#plans" className="btn-primary">
              Get Connected <ArrowRight size={16} />
            </a>
            <a href="#plans" className="btn-ghost">
              <Play size={15} className="text-brand-400" />
              View Plans
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <StatPill icon={Zap}   value="500 Mbps" label="Max speed"   />
            <StatPill icon={Shield} value="99.9%"   label="Uptime SLA"  />
            <StatPill icon={Clock}  value="24/7"    label="Support"     />
          </motion.div>
        </div>

        {/* Right — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:flex justify-center items-center animate-float"
        >
          <SpeedRing />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-500/60 to-transparent" />
      </motion.div>
    </section>
  )
}