import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Pricing from './pages/Pricing'
import ADR from './pages/ADR'
import Contact from './pages/Contact'
import Career from './pages/Career'

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            }
          />
          <Route
            path="/services"
            element={
              <AnimatedPage>
                <Services />
              </AnimatedPage>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <AnimatedPage>
                <ServiceDetail />
              </AnimatedPage>
            }
          />
          <Route
            path="/pricing"
            element={
              <AnimatedPage>
                <Pricing />
              </AnimatedPage>
            }
          />
          <Route
            path="/adr"
            element={
              <AnimatedPage>
                <ADR />
              </AnimatedPage>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />
          <Route
            path="/careers"
            element={
              <AnimatedPage>
                <Career />
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
