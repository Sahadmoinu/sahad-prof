import { marqueeItems } from "../data/portfolio";

function Row({ reverse }) {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
      {items.map((t, i) => (
        <span className="marquee-item" key={i} aria-hidden={i >= marqueeItems.length}>
          {t}
          <span className="marquee-star">✦</span>
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  return (
    <section className="marquee" aria-label="Technologies">
      <div className="marquee-band band-a">
        <Row />
      </div>
      <div className="marquee-band band-b" aria-hidden="true">
        <Row reverse />
      </div>
    </section>
  );
}

export default Marquee;
