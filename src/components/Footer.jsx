import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, Magnetic } from "./ui";
import { scrollToId } from "../lib/motion";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-giant" aria-hidden="true">
        SAHAD
      </div>
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {personalInfo.fullName}. Built with React, Vite &amp; Framer Motion.
        </p>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={17} />
          </a>
          <Magnetic>
            <button className="to-top" onClick={() => scrollToId("top")} aria-label="Back to top">
              <ArrowUp size={17} />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
