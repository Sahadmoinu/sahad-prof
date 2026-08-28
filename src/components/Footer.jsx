import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <strong>{personalInfo.name}</strong>
          <p>Full-Stack Software Developer & AI Engineer</p>
        </div>

        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>

        <p className="copyright" style={{ color: "var(--text-dim)", fontSize: 13 }}>
          © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;