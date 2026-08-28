import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-container">
        <div className="section-heading">
          <span className="badge-tag">02 — EXPERIENCE</span>
          <h2>
            Where I've
            <br />
            <em>made an impact.</em>
          </h2>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <motion.article
              className="experience-card"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div>
                <span className="exp-year">{item.year}</span>
              </div>

              <div className="exp-content">
                <h3>{item.role}</h3>
                <div className="exp-company">
                  <span>{item.company}</span> · <span>{item.location}</span>
                </div>

                <p className="exp-description">{item.description}</p>

                <div className="tag-pills">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;