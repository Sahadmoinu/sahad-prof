import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download, MapPin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import profile from "../assets/profile.jpg";
import { GithubIcon, LinkedinIcon, Magnetic } from "./ui";
import { ease, scrollToId } from "../lib/motion";

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
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const first = "Sahad";
  const last = "Moinuddeen";
  const show = ready ? "show" : "hidden";

  const letter = {
    hidden: { y: "115%" },
    show: (i) => ({ y: "0%", transition: { duration: 1, delay: 0.1 + i * 0.035, ease } }),
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: d, ease } }),
  };
  const pop = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    show: (d) => ({ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 180, damping: 16, delay: d } }),
  };

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <div className="hero-lines" />
      </div>

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: yText, opacity: fade }}>
          <motion.div className="hero-status" variants={fadeUp} initial="hidden" animate={show} custom={0}>
            <span className="pulse-dot" />
            Available for AI / ML &amp; Full Stack roles
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
            <span className="name-line serif" aria-hidden="true">
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
            <span className="role-line" />
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

        <motion.div className="hero-visual" style={{ y: yVisual }}>
          <motion.div
            className="hero-arch"
            initial={{ clipPath: "inset(100% 0 0 0 round 999px 999px 32px 32px)" }}
            animate={ready ? { clipPath: "inset(0% 0 0 0 round 999px 999px 32px 32px)" } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease }}
          >
            <motion.img
              src={profile}
              alt={`Portrait of ${personalInfo.fullName}`}
              style={{ scale: imgScale }}
              width="720"
              height="864"
            />
          </motion.div>

          <motion.button
            className="talk-badge"
            onClick={() => scrollToId("contact")}
            aria-label="Let's talk — go to contact"
            variants={pop}
            initial="hidden"
            animate={show}
            custom={1.2}
          >
            <svg viewBox="0 0 120 120" className="talk-ring" aria-hidden="true">
              <defs>
                <path id="talk-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text>
                <textPath href="#talk-circle" textLength="286" lengthAdjust="spacing">
                  LET'S TALK • OPEN TO WORK • HIRE ME •
                </textPath>
              </text>
            </svg>
            <span className="talk-core">
              <ArrowUpRight size={22} />
            </span>
          </motion.button>

          <motion.div className="float-card fc-1" variants={pop} initial="hidden" animate={show} custom={1.35}>
            <span className="fc-big">3+</span>
            <div>
              <strong>Years</strong>
              <small>AI Software Engineer</small>
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
