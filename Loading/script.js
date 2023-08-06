var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    markers: true,
    start: "50% 50%",
    end: "100% 50%",
    scubL: 2,
    pin: true,
  },
});
tl.from(
  "#center",
  {
    height: "0vh",
  },
  "a"
)
  .to(
    "#center",
    {
      height: "100vh",
    },
    "a"
  )
  .to(
    "#top",
    {
      top: "-50%",
    },
    "a"
  )
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "a"
  )
  .to(
    "#top-h1",
    {
      top: "80%",
    },
    "a"
  )
  .to(
    "#bottom-h1",
    {
      bottom: "-80%",
    },
    "a"
  )
  .to(
    "#center-h1",
    {
      top: "-30%",
    },
    "a"
  )
  .to(".content", {
    delay: -0.2,
    marginTop: "0%",
  });

var loader = document.getElementById("mainLoader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
