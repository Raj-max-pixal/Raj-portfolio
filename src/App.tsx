import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from '@/hooks/useLenis'
import { initScrollAnimations } from '@/lib/gsap'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CursorGlow } from '@/components/effects/CursorGlow'
import { NoiseOverlay } from '@/components/effects/NoiseOverlay'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { TechStack } from '@/components/sections/TechStack'
import { Experience } from '@/components/sections/Experience'
import { EducationTimeline } from '@/components/sections/Education'
import { Projects } from '@/components/sections/Projects'
import { Achievements } from '@/components/sections/Achievements'
import { Certificates } from '@/components/sections/Certificates'
import { GitHubStats } from '@/components/sections/GitHubStats'
import { Gallery } from '@/components/sections/Gallery'
import { Contact } from '@/components/sections/Contact'
import { MaxieAssistant } from '@/components/assistant/MaxieAssistant'

function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        initScrollAnimations()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [loading])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <CursorGlow />
          <NoiseOverlay />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <TechStack />
            <Experience />
            <EducationTimeline />
            <Projects />
            <Achievements />
            <Certificates />
            <GitHubStats />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <MaxieAssistant />
        </>
      )}
    </>
  )
}

export default App
