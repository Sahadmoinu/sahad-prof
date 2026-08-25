import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <strong>{personalInfo.name}</strong>

          <p>
            Full-Stack Developer · AI/ML Engineer
          </p>
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
          Back to top
          <ArrowUp size={16} />
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;