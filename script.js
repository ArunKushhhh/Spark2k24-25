gsap.registerPlugin(ScrollTrigger);
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
// });
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed",
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

const dayIndicator = document.getElementById("day-indicator");
const cards = document.querySelectorAll(".idv-card");

cards.forEach((card, index) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top center",
    end: "bottom center",
    onEnter: () => updateDayIndicator(index + 1),
    onEnterBack: () => updateDayIndicator(index + 1),
  });
});

function updateDayIndicator(day) {
  dayIndicator.textContent = `DAY ${day}`;
}

// gsap.to(dayIndicator, {
//   scrollTrigger: {
//     trigger: ".cards-container",
//     start: "top top",
//     end: "bottom top",
//     pin: true,
//     pinSpacing: false,
//   },
// });

// gsap.to("#slider-navigation", {
//   scrollTrigger: {
//     trigger: ".cards-container",
//     start: "top top",
//     end: "bottom top",
//     pin: true,
//     pinSpacing: false
//   }
// });

// This is the js for event cards
const div3Elements = document.querySelectorAll('.events .div-3');

div3Elements.forEach(div3 => {
  const ellipse = div3.querySelector('.ellipse');

  div3.addEventListener('mousemove', (e) => {
    const rect = div3.getBoundingClientRect();
    const x = e.clientX - rect.left - ellipse.offsetWidth / 2;
    const y = e.clientY - rect.top - ellipse.offsetHeight / 2;

    ellipse.style.top = `${y}px`;
    ellipse.style.left = `${x}px`;
  });

  div3.addEventListener('mouseleave', () => {
    ellipse.style.opacity = '0';
  });

  div3.addEventListener('mouseenter', () => {
    ellipse.style.opacity = '1';
  });
});


// Page 6 Js , touch mat krna bkl
document.addEventListener('DOMContentLoaded', () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      const isActive = faq.classList.contains("active");

      // Close all FAQs
      faqs.forEach(f => {
        f.classList.remove("active");
      });

      // If clicked FAQ wasn't already active, open it
      if (!isActive) {
        faq.classList.add("active");
      }
    });
  });
});
