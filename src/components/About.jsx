import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Cpu } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function About() {
  const cards = [
    {
      icon: <Code2 size={24} />,
      title: "Full-Stack Development",
      text: "Building robust, production-ready web applications using Laravel, React, REST APIs, and MySQL.",
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "AI & Machine Learning",
      text: "Integrating intelligent solutions using Python, Computer Vision, YOLOv8, and LLM technologies.",
    },
    {
      icon: <Database size={24} />,
      title: "Backend Engineering",
      text: "Architecting high-performance APIs, relational database schemas, authentication systems, and business workflows.",
    },
    {
      icon: <Cpu size={24} />,
      title: "System Optimization",
      text: "Improving DB queries, caching strategies, and application performance for scale.",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="badge-tag">01 — ABOUT ME</span>
          <h2>
            Code with purpose.
            <br />
            <em>Build with curiosity.</em>
          </h2>
        </div>

        <div className="about-layout">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="lead">{personalInfo.shortBio}</p>

            <p>
              My core engineering background revolves around <strong>PHP and Laravel development</strong>, complemented by modern frontend crafting in <strong>React</strong> and intelligent backend AI modeling with <strong>Python</strong>.
            </p>

            <p>
              I take pride in translating complex client requirements into scalable backend architectures, clean RESTful endpoints, and responsive, interactive frontend experiences.
            </p>
          </motion.div>

          <div className="about-cards-grid">
            {cards.map((card, index) => (
              <motion.div
                className="about-card"
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="about-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;