export const ease = [0.22, 1, 0.36, 1];

/* Smooth-scroll to a section, via Lenis when it is running. */
export function scrollToId(id) {
  const el = id === "top" ? 0 : document.getElementById(id);
  if (el === null) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: id === "top" ? 0 : -70, duration: 1.4 });
  } else if (el === 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
