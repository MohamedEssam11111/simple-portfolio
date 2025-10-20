const typed = new Typed("#type-animation", {
  strings: ["Front-End "],
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
