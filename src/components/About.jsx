import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, ScanEye, Server, Users, MapPin, Sparkles } from "lucide-react";
import profile from "../assets/profile.jpg";
import { personalInfo, stats } from "../data/portfolio";
import { CountUp, Reveal, SectionHeading, TiltCard } from "./ui";
import { ease } from "../lib/motion";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Generative AI",
    text: "LLM apps with RAG, vector search and local models through Ollama.",
  },
  {
    icon: ScanEye,
    title: "Computer Vision",
    text: "Real-time detection, OCR and face recognition with YOLO and OpenCV.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    text: "Secure, fast REST APIs in Laravel and FastAPI with tuned SQL.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    text: "Leading developers, reviewing code and working directly with clients.",
  },
];

function Portrait() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      className="portrait-wrap"
      initial={{ opacity: 0, y: 60, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease }}
    >
      <TiltCard className="portrait" max={7}>
        <span className="portrait-border" aria-hidden="true" />
        <div className="portrait-frame">
          <motion.img
            src={profile}
            alt={`Portrait of ${personalInfo.fullName}`}
            style={{ y: imgY }}
            width="720"
            height="864"
            loading="lazy"
          />
          <div className="portrait-shade" aria-hidden="true" />
          <div className="portrait-caption">
            <strong>{personalInfo.fullName}</strong>
            <span>{personalInfo.role}</span>
          </div>
        </div>
      </TiltCard>

      <motion.div
        className="portrait-badge pb-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="pulse-dot" /> Open to work
      </motion.div>
      <motion.div
        className="portrait-badge pb-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <MapPin size={14} /> {personalInfo.location}
      </motion.div>
      <motion.div
        className="portrait-badge pb-3"
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={14} /> AI · Full Stack
      </motion.div>
    </motion.div>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading index="01" kicker="About me" title="Where backend" accent="meets AI." />

        <div className="about-grid">
          <Portrait />

          <div className="about-copy">
            {personalInfo.bio.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.12} className={i === 0 ? "lead" : ""}>
                {p}
              </Reveal>
            ))}

            <div className="stats-grid">
              {stats.map((s, i) => (
                <Reveal className="stat" key={s.label} delay={0.1 * i}>
                  <span className="stat-value gradient-text">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="stat-label">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="pillars">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                <TiltCard className="pillar">
                  <span className="pillar-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </TiltCard>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default About;
