const typed = new Typed("#type-animation", {
  strings: ["Front-End web developer"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});
// prettier-ignore
const img_card = document.querySelectorAll(".projects-sec .cards-container .card img");
const imgArray = Array.from(img_card); // or [...img_card]

// prettier-ignore
imgArray.forEach((img, index) => {
  img.addEventListener('click', () => {
    const dicription = document.querySelector(`.projects-sec .cards-container .card .discription${index + 1}`);
    dicription.style.top = "0%";
  });
});

const discription = document.querySelectorAll(
  ".projects-sec .cards-container .card .discription"
);
discription.forEach((dis) => {
  dis.addEventListener("click", () => {
    dis.style.top = "100%";
  });
});

// make sure GSAP + ScrollTrigger scripts are included above this script tag
gsap.registerPlugin(ScrollTrigger);

// simple check for errors — will log something if ScrollTrigger not loaded
if (!gsap || !gsap.core || !ScrollTrigger) {
  console.error("GSAP or ScrollTrigger not loaded properly.");
}

// animate the section title first, then stagger skills (single timeline)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

tl.from("#skills h2", {
  opacity: 0,
  y: 60,
  duration: 0.9,
  ease: "back.out(1.7)",
}).fromTo(
  ".skill",
  { opacity: 0, y: 40, scale: 0.9 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.18,
    ease: "power3.out",
  },
  "-=0.4" // overlap slightly with title animation
);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#animated-ul",
    start: "bottom 20%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

tl1.fromTo(
  "#animated-ul li a",
  { opacity: 0, y: 50, scale: 0.9 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.18,
    ease: "power3.out",
    delay: 1.8,
  },
  "-=0.4" // overlap slightly with title animation
);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#education-sec",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

tl2.fromTo(
  "#education-sec .container h2",
  { opacity: 0, y: 20, scale: 0.9 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.18,
    ease: "power3.out",
    delay: 0.8,
  },
  "-=0.4" // overlap slightly with title animation
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#education-sec .container p",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

tl3.fromTo(
  "#education-sec .container p",
  { opacity: 0, y: 20, scale: 0.9 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.18,
    ease: "power3.out",
    delay: 0.8,
  },
  "-=0.4" // overlap slightly with title animation
);

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects-sec",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

tl4.fromTo(
  "#projects-sec p",
  { opacity: 0, y: 20, scale: 0.9 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.18,
    ease: "power3.out",
    delay: 0.8,
  },
  "-=0.4" // overlap slightly with title animation
);

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects-sec .cards-container",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});
tl5.fromTo(
  "#projects-sec .cards-container",
  { opacity: 0, y: 20, scale: 0.9 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.18,
    ease: "power3.out",
    delay: 0.8,
  },
  "-=0.4" // overlap slightly with title animation
);

// const tl6 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#contact-sec",
//     start: "top 40%",
//     toggleActions: "play none none reverse",
//     markers: false,
//   },
// });

// tl6
//   .from("#contact-sec .big-container #animate", {
//     opacity: 0,
//     x: -60,
//     duration: 0.9,
//     ease: "back.out(1.7)",
//   })
//   .To(
//     {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       duration: 1.8,
//       stagger: 0.18,
//       ease: "power3.out",
//       delay: 0.8,
//     },
//     "-=0.4" // overlap slightly with title animation
//   );
const tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".form-container",
    start: "top 60%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

tl7
  .from(".form-container", {
    opacity: 0,
    x: 60,
    duration: 0.9,
    ease: "back.out(1.7)",
  })
  .To(
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.18,
      ease: "power3.out",
      delay: 0.8,
    },
    "-=0.4" // overlap slightly with title animation
  );
const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cv-btn",
    start: "top 20%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});

tl8
  .from(".cv-btn", {
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: "back.out(1.7)",
  })
  .To(
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.18,
      ease: "power3.out",
      delay: 0.8,
    },
    "-=0.4" // overlap slightly with title animation
  );
