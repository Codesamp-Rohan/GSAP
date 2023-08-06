var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers: "true",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});
tl.to(
  ".text",
  {
    top: "-20%",
  },
  "a"
)
  .to(
    "#card-one",
    {
      top: "-50%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "60%",
    },
    "a"
  )
  .to(
    "#card-one",
    {
      scale: "0.7",
    },
    "b"
  )
  .to(
    "#card-two",
    {
      top: "-60%",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "60%",
    },
    "b"
  )
  .to(
    "#card-two",
    {
      scale: "0.8",
      // top: "-60%",
    },
    "c"
  )
  .to(
    "#card-three",
    {
      top: "-70%",
    },
    "c"
  )
  .to(
    "#card-three",
    {
      scale: "1",
    },
    "c"
  );
