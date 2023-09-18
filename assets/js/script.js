gsap.registerPlugin(ScrollTrigger);

// const textValue = document.querySelector(".case_studies_wrapper");
// console.log(textValue.offsetWidth);

// function getScrollAmount() {
//   let scrollAmount = textValue.scrollWidth;
//   return -(scrollAmount - window.innerWidth);
// }

// const tween = gsap.to(textValue, {
//   x: getScrollAmount,
//   duration: 3,
//   ease: "none",
// });

// ScrollTrigger.create({
//   trigger: ".dual_carousel_section",
//   start: "top top",
//   end: () => `+=${getScrollAmount() * -1}`,
//   pin: true,
//   pinSpacing: true,
//   animation: tween,
//   scrub: true,
//   invalidateOnRefresh: true,
//   markers: true,
//   snap: 1 / getScrollAmount() * -1
// });


let sections = gsap.utils.toArray(".strip");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".dual_carousel_section",
    pin: ".case_studies_wrapper",
    pinSpacing: false,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    start: "top top",
    end: "bottom 90%",
    markers: false
  }
});