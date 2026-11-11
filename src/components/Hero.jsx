import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download, MapPin, Sparkles, Cpu, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import NeuralBackground from "./NeuralBackground";
import { GithubIcon, LinkedinIcon, Magnetic } from "./ui";
import { ease, scrollToId } from "../lib/motion";

const pipeline = [
  { t: "$ python analyze.py --resume cv.pdf", c: "cmd" },
  { t: "→ extracting text with pdfplumber…", c: "dim" },
  { t: "→ embedding 42 chunks · all-MiniLM-L6-v2", c: "dim" },
  { t: "→ chromadb.query(top_k=5)  ✓", c: "ok" },
  { t: "→ llama3 › scoring against JD…", c: "dim" },
  { t: "match_score: 0.87", c: "hl" },
  { t: "missing: ['Docker', 'MLOps']", c: "warn" },
  { t: "✓ done in 1.42s", c: "ok" },
];

function Terminal({ start }) {
  const [lines, setLines] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!start) return;
    let cancelled = false;
    const timers = [];
    const run = () => {
      setLines(0);
      setTyped("");
      const cmd = pipeline[0].t;
      [...cmd].forEach((_, i) =>
        timers.push(setTimeout(() => !cancelled && setTyped(cmd.slice(0, i + 1)), 35 * i))
      );
      const base = cmd.length * 35 + 300;
      pipeline.slice(1).forEach((_, i) =>
        timers.push(setTimeout(() => !cancelled && setLines(i + 1), base + i * 420))
      );
      timers.push(setTimeout(() => !cancelled && run(), base + pipeline.length * 420 + 3500));
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [start]);

  return (
    <div className="terminal">
      <div className="terminal-head">
        <span className="tdot r" />
        <span className="tdot y" />
        <span className="tdot g" />
        <span className="terminal-title">resume-analyzer — zsh</span>
      </div>
      <div className="terminal-body">
        <div className="tline cmd">
          {typed}
          {lines === 0 && <span className="caret" />}
        </div>
        {pipeline.slice(1, lines + 1).map((l, i) => (
          <motion.div
            key={i}
            className={`tline ${l.c}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {l.t}
            {i === lines - 1 && i < pipeline.length - 2 && <span className="caret" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % personalInfo.roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="role-rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease }}
        >
          {personalInfo.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Hero({ ready }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const first = "Sahad";
  const last = "Moinuddeen";
  const show = ready ? "show" : "hidden";

  const letter = {
    hidden: { y: "115%", rotate: 8 },
    show: (i) => ({ y: "0%", rotate: 0, transition: { duration: 1, delay: 0.1 + i * 0.04, ease } }),
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: d, ease } }),
  };

  return (
    <section className="hero" id="top" ref={ref}>
      <NeuralBackground />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: yText, opacity: fade }}>
          <motion.div className="hero-status" variants={fadeUp} initial="hidden" animate={show} custom={0}>
            <span className="pulse-dot" />
            Open to AI / ML &amp; Full Stack roles
          </motion.div>

          <h1 className="hero-name" aria-label={personalInfo.name}>
            <span className="name-line" aria-hidden="true">
              {[...first].map((ch, i) => (
                <span className="char-mask" key={i}>
                  <motion.span variants={letter} initial="hidden" animate={show} custom={i}>
                    {ch}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="name-line outline" aria-hidden="true">
              {[...last].map((ch, i) => (
                <span className="char-mask" key={i}>
                  <motion.span variants={letter} initial="hidden" animate={show} custom={i + first.length}>
                    {ch}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p className="hero-role" variants={fadeUp} initial="hidden" animate={show} custom={0.7}>
            <Sparkles size={18} className="role-icon" />
            <RoleRotator />
          </motion.p>

          <motion.p className="hero-desc" variants={fadeUp} initial="hidden" animate={show} custom={0.85}>
            {personalInfo.description}
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate={show} custom={1}>
            <Magnetic>
              <button className="btn btn-primary" onClick={() => scrollToId("projects")}>
                <span>View my work</span>
                <ArrowUpRight size={18} />
              </button>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={personalInfo.resume} target="_blank" rel="noreferrer">
                <span>Download CV</span>
                <Download size={17} />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="hero-meta" variants={fadeUp} initial="hidden" animate={show} custom={1.15}>
            <span className="meta-item">
              <MapPin size={15} /> {personalInfo.location} · {personalInfo.relocate}
            </span>
            <span className="hero-socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={17} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={17} />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail size={17} />
              </a>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ y: yVisual }}
          initial={{ opacity: 0, scale: 0.92, rotateY: -12 }}
          animate={ready ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease }}
        >
          <div className="orbit orbit-1" aria-hidden="true">
            <span className="orbit-chip">LLM</span>
          </div>
          <div className="orbit orbit-2" aria-hidden="true">
            <span className="orbit-chip">YOLO</span>
          </div>

          <Terminal start={ready} />

          <motion.div
            className="float-card fc-1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu size={18} />
            <div>
              <strong>FastAPI + Laravel</strong>
              <small>Models served as APIs</small>
            </div>
          </motion.div>

          <motion.div
            className="float-card fc-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="fc-big">3+</span>
            <div>
              <strong>Years</strong>
              <small>Shipping software</small>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-cue"
        onClick={() => scrollToId("about")}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.6 }}
      >
        <span className="mouse">
          <span className="wheel" />
        </span>
        <span>Scroll</span>
      </motion.button>
    </section>
  );
}

export default Hero;
