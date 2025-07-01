gsap.from(".hero-title", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero-tagline", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
gsap.from(".profile-pic", { scale: 0, opacity: 0, duration: 1, delay: 1 });

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1
  });
});