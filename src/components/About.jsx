import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Rocket } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function About() {
  const cards = [
    {
      icon: <Code2 />,
      title: "Full-Stack Development",
      text: "Building production-ready web applications with Laravel, React, REST APIs and MySQL.",
    },
    {
      icon: <BrainCircuit />,
      title: "AI & Machine Learning",
      text: "Developing practical AI solutions using Python, computer vision, deep learning and LLM technologies.",
    },
    {
      icon: <Database />,
      title: "Backend Engineering",
      text: "Designing APIs, database systems, authentication flows and business logic for scalable applications.",
    },
    {
      icon: <Rocket />,
      title: "Continuous Learning",
      text: "Constantly exploring new technologies across AI, GenAI, cloud and modern software engineering.",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span>01 — ABOUT</span>
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
          >
            <p className="large-text">{personalInfo.shortBio}</p>

            <p>
              My primary professional experience is in PHP and Laravel
              development, while my broader technical journey has expanded
              into React, Python, machine learning, computer vision and
              Generative AI.
            </p>

            <p>
              I enjoy taking an idea from a database and API layer all the way
              through to a polished user interface — and increasingly adding
              intelligent capabilities along the way.
            </p>
          </motion.div>

          <div className="about-cards">
            {cards.map((card, index) => (
              <motion.div
                className="about-card"
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-icon">{card.icon}</div>

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