import { motion } from "framer-motion";
import { BrainCircuit, ScanEye, Server, Users } from "lucide-react";
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

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading index="01" kicker="About me" title="Where backend" accent="meets AI." />

        <div className="about-grid">
          <div className="about-copy">
            {personalInfo.bio.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.12} className={i === 0 ? "lead" : ""}>
                {p}
              </Reveal>
            ))}

          </div>

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

        <div className="pillars">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                <TiltCard className="pillar glow-card">
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
