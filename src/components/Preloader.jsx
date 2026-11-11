import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ease } from "../lib/motion";

const words = ["Data", "Models", "APIs", "Products"];

function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      onDone();
      return;
    }
    const start = performance.now();
    const total = 1800;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / total, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      setWord(Math.min(words.length - 1, Math.floor(p * words.length)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="preloader-inner">
        <motion.div
          className="preloader-logo"
          initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          SM
        </motion.div>
        <div className="preloader-word">
          <motion.span
            key={word}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.4, ease }}
          >
            {words[word]}
          </motion.span>
        </div>
        <div className="preloader-bar">
          <span style={{ transform: `scaleX(${count / 100})` }} />
        </div>
        <div className="preloader-count">{String(count).padStart(3, "0")}</div>
      </div>
    </motion.div>
  );
}

export default Preloader;
