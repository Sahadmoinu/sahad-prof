import { GraduationCap, Award } from "lucide-react";
import { certifications, education } from "../data/portfolio";
import { Reveal, SectionHeading, TiltCard } from "./ui";

function Education() {
  return (
    <section className="section section-tight" id="education">
      <div className="container">
        <SectionHeading index="06" kicker="Learning" title="Education &" accent="training." />

        <div className="edu-grid">
          <Reveal>
            <TiltCard className="edu-card glow-card" max={4}>
              <span className="edu-icon">
                <GraduationCap size={24} />
              </span>
              <span className="edu-period">{education.period}</span>
              <h3>{education.degree}</h3>
              <p>
                {education.school} · {education.place}
              </p>
            </TiltCard>
          </Reveal>

          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={0.12 * (i + 1)}>
              <TiltCard className="edu-card cert glow-card" max={4}>
                <span className="edu-icon">
                  <Award size={24} />
                </span>
                <span className="edu-period">{c.period}</span>
                <h3>{c.title}</h3>
                <p className="edu-org">{c.org}</p>
                <p>{c.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
