import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data/portfolio";
import { SectionHeading } from "./ui";
import { ease } from "../lib/motion";

function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading index="02" kicker="Experience" title="The path" accent="so far.">
          From intern to team lead, with a data science detour that turned into my focus.
        </SectionHeading>

        <div className="timeline" ref={listRef}>
          <div className="timeline-rail" aria-hidden="true">
            <motion.div className="timeline-fill" style={{ scaleY: line }} />
          </div>

          {experience.map((job, i) => {
            const Icon = job.type === "Internship" ? GraduationCap : Briefcase;
            return (
              <motion.article
                className="timeline-item"
                key={job.company + job.role}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease, delay: 0.05 * i }}
              >
                <motion.span
                  className={`timeline-node ${job.current ? "current" : ""}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
                >
                  <Icon size={15} />
                </motion.span>

                <div className="job-card glow-card">
                  <div className="job-top">
                    <span className="job-period">{job.period}</span>
                    <span className={`job-type ${job.current ? "now" : ""}`}>
                      {job.current ? "Current" : job.type}
                    </span>
                  </div>
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-company">{job.company}</p>
                  <ul className="job-points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="chips">
                    {job.tech.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
