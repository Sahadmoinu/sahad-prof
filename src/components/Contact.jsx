import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="contact-decoration"></div>

          <span className="contact-label">05 — CONTACT</span>

          <h2>
            Have an idea?
            <br />
            <em>Let's build it.</em>
          </h2>

          <p>
            I'm open to interesting software, AI and international
            opportunities. If you have a project or opportunity in mind,
            let's talk.
          </p>

          <a
            className="contact-button"
            href={`mailto:${personalInfo.email}`}
          >
            Start a conversation
            <ArrowUpRight size={20} />
          </a>

          <div className="contact-details">
            <div>
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </div>

            <div>
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;