// nav-overlay
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".nav-overlay");
const closeBtn = document.querySelector(".close-btn");
const overlayNav = document.querySelector(".overlay-nav");
// const crsr = document.querySelector(".custom-crsr");
// const footer = document.querySelector(".page7");
// footer.addEventListener("mousemove", (e) => {
//   // location.reload();
//   crsr.style.top = e.y - 50 + "px";
//   crsr.style.left = e.x - 50 + "px";
// });
hamburger.addEventListener("click", () => {
  overlay.style.width = "100%";
  overlay.style.opacity = "1";
  overlayNav.style.width = "20%";
  gsap.from(".overlay-nav a", {
    x: 120,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5,
  });
  gsap.from(".overlay-bottom ul li", {
    x: 120,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5,
  });
});
closeBtn.addEventListener("click", () => {
  overlay.style.width = "0";
  overlay.style.opacity = "0";
  overlayNav.style.width = "0";
});

// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Handle the slider-navigation positioning and visibility
ScrollTrigger.create({
  trigger: ".cards",
  start: "top top",
  end: "bottom top",
  onEnter: () => {
    document.getElementById("day-indicator").classList.add("fixed");
    document.querySelector(".orange-divider").classList.add("fixed");
  },
  onLeave: () => {
    document.getElementById("day-indicator").classList.remove("fixed");
    document.querySelector(".orange-divider").classList.remove("fixed");
  },
  onEnterBack: () => {
    document.getElementById("day-indicator").classList.add("fixed");
    document.querySelector(".orange-divider").classList.add("fixed");
  },
  onLeaveBack: () => {
    document.getElementById("day-indicator").classList.remove("fixed");
    document.querySelector(".orange-divider").classList.remove("fixed");
  },
});

// Timeline for ScrollTrigger animation
const dayIndicator = document.getElementById("day-indicator");
const cards = document.querySelectorAll(".idv-card");

// Create a ScrollTrigger instance for each card
cards.forEach((card, index) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 30%",
    end: "bottom 30%", // Adjust as needed to fit your design
    markers: false, // Set to true if you want to debug with visual markers
    onEnter: () => updateDayIndicator(index + 1),
    onEnterBack: () => updateDayIndicator(index + 1),
  });
});

function updateDayIndicator(day) {
  dayIndicator.textContent = `DAY ${day}`;
}

// Create ScrollTrigger instances to animate .nav-pointer and .orange-divider
gsap.to(".nav-pointer", {
  y: "100%", // Adjust the end position as needed
  scrollTrigger: {
    trigger: ".cards",
    start: "top top",
    end: "bottom top",
    scrub: true, // This makes the animation follow the scroll position
    markers: false, // Set to true if you want to debug with visual markers
  },
});

gsap.to(".orange-divider", {
  y: "0%", // Adjust the end position as needed
  scrollTrigger: {
    trigger: ".cards",
    start: "top top",
    end: "bottom top",
    scrub: true, // This makes the animation follow the scroll position
    markers: false, // Set to true if you want to debug with visual markers
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navOverlay = document.querySelector(".nav-overlay");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", function () {
    navOverlay.style.width = "100%"; // Expand the overlay
    navOverlay.style.opacity = "1"; // Make the overlay visible
    document.body.classList.add("no-scroll"); // Prevent body scrolling
  });

  closeBtn.addEventListener("click", function () {
    navOverlay.style.width = "0"; // Collapse the overlay
    navOverlay.style.opacity = "0"; // Hide the overlay
    document.body.classList.remove("no-scroll"); // Allow body scrolling
  });
});

// Events Section
const div3Elements = document.querySelectorAll(".events .div-3");

div3Elements.forEach((div3) => {
  const ellipse = div3.querySelector(".ellipse");

  // Set the position of the ellipse to be at the bottom center
  ellipse.style.top = "calc(100% - 48.5px)"; // Adjust the position to be at the bottom
  ellipse.style.left = "calc(50% - 245px)"; // Center horizontally

  div3.addEventListener("mouseenter", () => {
    ellipse.style.opacity = "1";
  });

  div3.addEventListener("mouseleave", () => {
    ellipse.style.opacity = "0";
  });
});

// Page 6 Js
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const isActive = faq.classList.contains("active");

      // Close all FAQs
      faqs.forEach((f) => {
        f.classList.remove("active");
      });

      // If clicked FAQ wasn't already active, open it
      if (!isActive) {
        faq.classList.add("active");
      }
    });
  });
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
// Links for hamburger menu
document.querySelectorAll(" .overlay-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
    overlay.style.width = "0";
    document.body.classList.remove("no-scroll");
  });
});

const tlPage = document.querySelector(".page3");
document.getElementById("getStarted").addEventListener("click", () => {
  window.scrollTo({
    top: tlPage.offsetTop,
    behavior: "smooth",
  });
});

// oss website redirection
document.getElementById("oss").addEventListener("click", () => {
  window.open("https://aitoss.club/", "_blank");
});

// footer
gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer-top", {
  opacity: 0,
  y: "200%",
  stagger: 0.3,
  duration: 3,
  scrollTrigger: {
    trigger: ".page7",
    start: "top 50%",
    end: "top 5%",
    markers: false,
    scrub: 2,
  },
});

gsap.from(".footer-bottom", {
  opacity: 0,
  y: "100%",
  stagger: 0.3,
  duration: 3,
  scrollTrigger: {
    trigger: ".page7",
    start: "top 50%",
    end: "top 5%",
    markers: false,
    scrub: 2,
  },
});

gsap.from(".footer-bottom h1 span", {
  y: -120,
  opacity: 0,
  stagger: 0.3,
  duration: 2,
  scrollTrigger: {
    trigger: ".page7",
    start: "top 50%",
    end: "top 5%",
    markers: false,
    scrub: 2,
  },
  delay: 2,
});
document.querySelectorAll(".footer-nav li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
//page 3
document.getElementById("notesButton1").addEventListener("click", function () {
  // window.location.href = "";
  window.open(
    "https://economic-snowboard-82f.notion.site/HTML-e306ec5af9014818847fe94d8e1eb852?pvs=4",
    "_blank"
  );
});
document.getElementById("notesButton2").addEventListener("click", function () {
  window.open(
    "https://economic-snowboard-82f.notion.site/HTML-e306ec5af9014818847fe94d8e1eb852?pvs=4",
    "_blank"
  );
});
document.getElementById("notesButton3").addEventListener("click", function () {
  window.open(
    "https://economic-snowboard-82f.notion.site/Introduction-to-CSS-5778d2f272e948b4a352feac6c067f3b?pvs=4",
    "_blank"
  );
});
document.getElementById("notesButton4").addEventListener("click", function () {
  window.open(
    "https://economic-snowboard-82f.notion.site/CSS-Advanced-054b078ed9d84dffaaa07c59e0b3502d?pvs=4",
    "_blank"
  );
});
document.getElementById("notesButton5").addEventListener("click", function () {
  window.open(
    "https://economic-snowboard-82f.notion.site/CSS-Advanced-054b078ed9d84dffaaa07c59e0b3502d?pvs=4",
    "_blank"
  );
});
document.getElementById("notesButton6").addEventListener("click", function () {
  window.open(
    "https://economic-snowboard-82f.notion.site/CSS-Advanced-054b078ed9d84dffaaa07c59e0b3502d?pvs=4",
    "_blank"
  );
});

document.getElementById("notesButton7").addEventListener("click", function () {
  window.location.href = "";
});
document.getElementById("notesButton8").addEventListener("click", function () {
  window.location.href = "";
});
document.getElementById("notesButton9").addEventListener("click", function () {
  window.location.href = "";
});
document.getElementById("notesButton10").addEventListener("click", function () {
  window.location.href = "";
});
document.getElementById("notesButton11").addEventListener("click", function () {
  window.location.href = "";
});
document.getElementById("notesButton12").addEventListener("click", function () {
  window.location.href = "";
});

document.getElementById("notes").addEventListener("click", function () {
  window.open(
    "https://economic-snowboard-82f.notion.site/SPARK-2k24-931b6ffdb0294e85981095e1852b8eb8?pvs=4",
    "_blank"
  );
});

document
  .getElementById("notesHamburgerSec")
  .addEventListener("click", function () {
    window.open(
      "https://economic-snowboard-82f.notion.site/SPARK-2k24-931b6ffdb0294e85981095e1852b8eb8?pvs=4",
      "_blank"
    );
  });
