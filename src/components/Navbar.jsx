import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <button
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>S</span>
          <div>
            <strong>{personalInfo.name}</strong>
            <small>Developer</small>
          </div>
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}

          <a
            className="nav-resume"
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;