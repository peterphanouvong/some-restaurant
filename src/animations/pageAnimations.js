import gsap from "gsap";

export const pageLoadAnimation = (id) => {
  window.scrollTo(0, 0);
  const tl = gsap.timeline();
  tl.from(id, {
    delay: 0.5,
    duration: 1,
    opacity: 0,
  }).from(".hero h1", {
    delay: -0.8,
    duration: 1,
    opacity: 0,
    y: 75,
    ease: "power2.out",
  });
};
