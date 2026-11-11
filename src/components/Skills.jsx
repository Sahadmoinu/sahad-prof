import { motion } from "framer-motion";
import { Sparkles, Brain, Eye, Server, LayoutTemplate, Database } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import { SectionHeading, TiltCard } from "./ui";
import { ease } from "../lib/motion";

const icons = {
  sparkles: Sparkles,
  brain: Brain,
  eye: Eye,
  server: Server,
  layout: LayoutTemplate,
  database: Database,
};

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading index="03" kicker="Toolkit" title="What I" accent="work with.">
          The stack behind everything from a vector search to a payment checkout.
        </SectionHeading>

        <div className="bento">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <motion.div
                key={g.title}
                className={`bento-cell cell-${i}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease }}
              >
                <TiltCard className={`skill-card accent-${g.accent}`} max={5}>
                  <div className="skill-head">
                    <span className="skill-icon">
                      <Icon size={22} />
                    </span>
                    <span className="skill-count">{String(g.items.length).padStart(2, "0")}</span>
                  </div>
                  <h3>{g.title}</h3>
                  <p className="skill-blurb">{g.blurb}</p>
                  <div className="skill-tags">
                    {g.items.map((t, j) => (
                      <motion.span
                        className="skill-tag"
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.035, duration: 0.4, ease }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
