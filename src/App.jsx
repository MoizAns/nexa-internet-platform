import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'
import Coverage from './components/Coverage'
import WhyNexa from './components/WhyNexa'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-900 text-slate-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Coverage />
        <WhyNexa />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}