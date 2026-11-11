import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";

function readTheme() {
  try {
    return localStorage.getItem("theme-v3") || "dark";
  } catch {
    return "dark";
  }
}

function App() {
  const [theme, setTheme] = useState(readTheme);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme-v3", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  // Buttery smooth scrolling (skipped for reduced-motion users).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Lock scroll while the preloader plays.
  useEffect(() => {
    if (loading) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  const finishLoading = useCallback(() => setLoading(false), []);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader onDone={finishLoading} />}</AnimatePresence>

      <Cursor />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <div className="app">
        <div className="bg-noise" aria-hidden="true" />
        <div className="bg-aurora" aria-hidden="true">
          <span className="aurora a1" />
          <span className="aurora a2" />
          <span className="aurora a3" />
        </div>

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero ready={!loading} />
          <Marquee />
          <About />
          <Process />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
