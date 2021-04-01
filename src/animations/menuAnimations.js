import gsap from "gsap";

export const closeMenuAnimation = () => {
  const tl = gsap.timeline();

  tl.to(".cross", {
    duration: 0.2,
    css: {
      display: "none",
      opacity: 0,
    },
  }).to(".hamburger", {
    duration: 0.2,
    css: {
      display: "block",
      opacity: 1,
    },
  });

  tl.to(".navigation", {
    delay: -0.4,
    duration: 1,
    y: "-100vh",
    ease: "power4.in",
  }).to(".navigation .content", {
    delay: -1,
    duration: 0.5,
    opacity: 0,
  });
};

export const openMenuAnimation = () => {
  const tl = gsap.timeline();
  tl.to(".hamburger", {
    duration: 0.2,
    css: {
      display: "none",
      opacity: 0,
    },
  }).to(".cross", {
    duration: 0.2,
    css: {
      display: "block",
      opacity: 1,
    },
  });

  tl.set(".navigation .content", {
    duration: 1,
    opacity: 1,
    css: {
      display: "flex",
      opacity: 1,
    },
  })
    .to(".navigation", {
      delay: -0.4,
      duration: 1.2,
      y: "100vh",
      ease: "power4.out",
    })

    .from(".navigation .content ul li", {
      delay: -0.8,
      duration: 1.2,
      opacity: 0,
      y: -200,
      ease: "power2.out",
      stagger: {
        amount: -0.2,
      },
    });
};
