const header = document.querySelector("header");
const links = document.querySelectorAll(".nav-link");

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

// window.addEventListener("scroll", stickyNavbar);
window.addEventListener("scroll", () => {
  activeLink();
  stickyNavbar();
})

const sr = ScrollReveal({
  duration: 2500,
  distance: "60px"
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", duration: 700 });

function activeLink() {
  const sections = document.querySelectorAll("section[id]");

  const passedSections = Array.from(sections)
    .map((section, index) => {
      return {
        y: section.getBoundingClientRect().top - header.offsetHeight,
        id: index,
      };
    })
    .filter((section) => section.y <= 0);

  const currSectionID = passedSections.at(-1).id;

  links.forEach(link => link.classList.remove("active"));
  links[currSectionID].classList.add("active");
}
