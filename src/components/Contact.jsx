import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-info">
            <span className="badge-tag">05 — GET IN TOUCH</span>

            <h2>
              Have an idea?
              <br />
              <em>Let's build it.</em>
            </h2>

            <p>
              I am open to full-stack engineering, AI/ML initiatives, and contract opportunities worldwide. Let's discuss your vision and turn it into software.
            </p>

            <div className="contact-quick-actions">
              <button className="copy-email-btn" onClick={handleCopyEmail}>
                <span>{personalInfo.email}</span>
                {copied ? <Check size={16} color="var(--accent)" /> : <Copy size={16} />}
              </button>

              <div style={{ display: "flex", gap: 16, marginTop: 10, color: "var(--text-muted)", fontSize: 13 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <MapPin size={16} color="var(--accent)" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button type="submit" className="primary-button" style={{ height: 48, width: "100%" }}>
              <span>{formSent ? "Message Sent!" : "Send Message"}</span>
              {formSent ? <Check size={18} /> : <Send size={16} />}
            </button>
          </form>
        </motion.div>
      </div>

      {copied && (
        <div className="toast-notice">
          Email address copied to clipboard!
        </div>
      )}
    </section>
  );
}

export default Contact;