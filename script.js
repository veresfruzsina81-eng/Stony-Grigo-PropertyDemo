gsap.registerPlugin(ScrollTrigger);

// FIRST TIMELINE (ABOUT SECTION)
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  }
});

tl.to("#can", {
  top: "95%",
  left: "12%",
  rotate: "30deg"
}, "chocolate");

tl.to("#chocolate", {
  top: "160%",
  left: "25%"
}, "chocolate");

tl.to("#chocolate2", {
  width: "25%",
  top: "160%",
  right: "10%",
  rotate: "-15deg"
}, "chocolate");

tl.to("#almond", {
  top: "110%",
  rotate: "130deg",
  left: "70%"
}, "chocolate");

tl.to("#almond2", {
  top: "110%",
  rotate: "-130deg",
  left: "10%"
}, "chocolate");


// SECOND TIMELINE (PRODUCT SECTION)
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  }
});

tl2.to("#chocolate", {
  width: "25%",
  left: "42%",
  top: "210%"
}, "can");

tl2.to("#chocolate2", {
  width: "15%",
  left: "32%",
  top: "270%"
}, "can");

tl2.to("#can", {
  width: "30%",
  top: "210%",
  left: "35%",
  rotate: "0deg"
}, "can");
