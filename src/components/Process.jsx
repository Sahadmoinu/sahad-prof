import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Database, Brain, Server, Rocket } from "lucide-react";
import { process } from "../data/portfolio";
import { SectionHeading, TiltCard } from "./ui";
import { ease } from "../lib/motion";

const icons = { database: Database, brain: Brain, server: Server, rocket: Rocket };

function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading index="02" kicker="How I build" title="From raw data" accent="to real product.">
          Every AI project I ship follows the same path, end to end, one engineer.
        </SectionHeading>

        <div className="process" ref={ref}>
          <div className="process-line" aria-hidden="true">
            <motion.div className="process-line-fill" style={{ "--p": fill }} />
            <span className="process-pulse" />
          </div>

          {process.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.div
                key={s.step}
                className="process-step"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.14, ease } },
                }}
              >
                <motion.span
                  className="process-node"
                  variants={{
                    hidden: { scale: 0, rotate: -90 },
                    show: {
                      scale: 1,
                      rotate: 0,
                      transition: { type: "spring", stiffness: 220, damping: 16, delay: 0.2 + i * 0.14 },
                    },
                  }}
                >
                  <Icon size={22} />
                </motion.span>
                <TiltCard className="process-card glow-card" max={6}>
                  <span className="process-num">{s.step}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="chips">
                    {s.tools.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
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

export default Process;
