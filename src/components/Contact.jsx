import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, Magnetic, Reveal, SplitText } from "./ui";
import { ease } from "../lib/motion";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  // No backend: open the visitor's mail app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const channels = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: "sahad-moinuddeen-p-p", href: personalInfo.linkedin },
    { icon: GithubIcon, label: "GitHub", value: "Sahadmoinu", href: personalInfo.github },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-glow" aria-hidden="true" />

          <div className="contact-left">
            <Reveal className="section-kicker" y={20}>
              <span className="kicker-index">06</span>
              <span className="kicker-line" />
              <span>Contact</span>
            </Reveal>
            <h2 className="contact-title">
              <SplitText text="Let's build" />
              <br />
              <SplitText text="something smart." className="gradient-text" delay={0.15} />
            </h2>
            <Reveal as="p" className="contact-text" delay={0.2}>
              Hiring for an AI/ML or full-stack role, or have a project in mind? I reply quickly.
            </Reveal>

            <Reveal delay={0.3}>
              <Magnetic strength={0.2}>
                <button className="email-pill" onClick={copyEmail} data-cursor>
                  <span>{personalInfo.email}</span>
                  <span className="email-pill-icon">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={copied ? "y" : "n"}
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "grid" }}
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </button>
              </Magnetic>
            </Reveal>

            <div className="channels">
              {channels.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal key={label} delay={0.35 + i * 0.07} y={20}>
                  <a className="channel" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <span className="channel-icon">
                      <Icon size={17} />
                    </span>
                    <span className="channel-text">
                      <small>{label}</small>
                      <span>{value}</span>
                    </span>
                    <ArrowUpRight size={16} className="channel-arrow" />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="contact-loc" delay={0.6} y={10}>
              <MapPin size={15} /> {personalInfo.location} · {personalInfo.relocate}
            </Reveal>
          </div>

          <Reveal className="contact-right" delay={0.2}>
            <form className="contact-form" onSubmit={submit}>
              <div className="field">
                <input id="f-name" required placeholder=" " value={form.name} onChange={set("name")} />
                <label htmlFor="f-name">Your name</label>
              </div>
              <div className="field">
                <input id="f-email" type="email" required placeholder=" " value={form.email} onChange={set("email")} />
                <label htmlFor="f-email">Your email</label>
              </div>
              <div className="field">
                <textarea id="f-msg" rows="5" required placeholder=" " value={form.message} onChange={set("message")} />
                <label htmlFor="f-msg">Tell me about the role or project</label>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary btn-block"
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease }}
              >
                <span>Send message</span>
                <Send size={16} />
              </motion.button>
              <p className="form-note">Opens your email app with the message ready to send.</p>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
          >
            <Check size={16} /> Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
