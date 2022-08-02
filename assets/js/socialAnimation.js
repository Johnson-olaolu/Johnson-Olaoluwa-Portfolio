const socialMediaItem = document.querySelector(".social-media .social-media-item");

// <div class="social-media-item">
// <i class="icon" data-feather="github"></i>
// <a href="https://github.com/Johnson-olaolu" target="_blank" class="">
//   <p class="">@Johnson-olaolu</p> 
//   <i class="icon" data-feather="external-link"></i>
// </a>
// </div>


document.querySelectorAll(".social-media .social-media-item").forEach(element => {
  const hover = gsap.timeline()
    .fromTo(element.querySelector(".icon"), .5,
      {
        scale: 1
      },
      {
        scale: 1.2,
        repeat: 1,
        pause: true,
        //ease: RoughEase.ease,
        //ease: Elastic.easeOut,
        //ease: Elastic.easeOut.config(1.75, 1),
        yoyo: true
      })
    .to(element.querySelector(".details"), {
      scale: 1.1,
      background: "white",
      paddingLeft: "16px",
      paddingRight : "36px",
      gap: "8px",
      borderRadius: "8px 0 0 8px",
      position: "absolute",
      right : "0",
      zIndex: 5,
      boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      duration: 0.5,
      ease: "ease-in-out"
    })
    .to(element.querySelector("a") , {
      display : "flex",
      width : "max-content",
      duration : 0.5
    })

    hover.pause()
  element.addEventListener("mouseenter", () => hover.play());
  element.addEventListener("mouseleave", () => hover.reverse());
})