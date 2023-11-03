/* Navbar */
const navbar = document.querySelector('#navbar');
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let { pageYOffset } = window;
  if (pageYOffset > lastScrollTop) {
    navbar.classList.remove("visible");
  } else if (pageYOffset < lastScrollTop) {
    navbar.classList.add("visible");
  }
  lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
}, { passive: true });


/* Text Animation */
gsap.registerPlugin(ScrollTrigger)

const splitHello = document.querySelectorAll('.hello')
splitHello.forEach((char,i) => {
    const text = new SplitType(char, { types: 'chars'})
    gsap.fromTo(text.chars, 
        {
            y:50,
            opacity: 0,
        },
        {
            y:0,
            ease: "expo.out",
            opacity: 1,
            duration: 1,
            stagger: .2,
    })
})

gsap.fromTo('.nav', {
    opacity:0,
    y:-30
},
{
    delay:1,
    opacity:1,
    y:0
})
gsap.fromTo('.hello-text', {
    opacity:0,
    x:-30
},
{
    delay:1.1,
    opacity:1,
    x:0
})
gsap.fromTo('.hello-gif', {
    opacity:0,
    x:50
},
{
    delay:1.3,
    opacity:1,
    x:0
})

const splitTypes = document.querySelectorAll('.text-reveal');

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: 'chars' });

  gsap.fromTo(text.chars,
    {
      y: -10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: '50% center',
        scrub: false,
        markers: false,
    
      }
    }
  );
});


/* Smooth scroll */
const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

/* Img projet scaling */
// const imgs = document.querySelectorAll('.projet-img');

// imgs.forEach(img => {
//   gsap.set(img, { scale: 1 });

//   ScrollTrigger.create({
//     trigger: img,
//     start: 'top 60%',
//     end: 'top 40%',
//     onToggle: self => {
//       if (self.isActive) {
//         gsap.to(img, {
//           scale: 1.1,
//           duration:.5,
//           ease: "power2.out",
//         });
//       } else {
//         gsap.to(img, {
//           scale: 1,
//           duration:1.5,
//           ease: "power4.out",
//         });
//       }
//     },
//   });
// });

