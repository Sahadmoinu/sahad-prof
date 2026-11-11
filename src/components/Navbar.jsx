import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { ease, scrollToId } from "../lib/motion";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function ThemeButton({ theme, toggleTheme }) {
  return (
    <button
      className="icon-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: "grid" }}
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > last && y > 400);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      animate={{ y: hidden && !open ? -110 : 0 }}
      transition={{ duration: 0.45, ease }}
    >
      <div className="nav-inner">
        <button className="logo" onClick={() => go("top")} aria-label="Back to top">
          <span className="logo-mark">{personalInfo.initials}</span>
          <span className="logo-text">
            {personalInfo.shortName}
            <span className="logo-dot">.</span>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className={active === id ? "active" : ""}>
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="nav-label">{label}</span>
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
          <a className="nav-cta" href={personalInfo.resume} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease }}
          >
            {links.map(([label, id], i) => (
              <motion.button
                key={id}
                onClick={() => go(id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, ease }}
              >
                <span className="mm-index">0{i + 1}</span>
                {label}
              </motion.button>
            ))}
            <a className="nav-cta mm-cta" href={personalInfo.resume} target="_blank" rel="noreferrer">
              Download Resume <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
