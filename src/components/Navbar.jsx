import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (const [, id] of links) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <button
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <div className="logo-icon">S</div>
          <div className="logo-info">
            <strong>{personalInfo.name}</strong>
            <small>Software Engineer</small>
          </div>
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          {links.map(([label, id]) => (
            <button
              key={id}
              className={activeSection === id ? "active" : ""}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            className="nav-resume-btn"
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            className="theme-toggle-btn mobile-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;