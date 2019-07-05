const homeLink = document.getElementById("home");
const projectsLink = document.getElementById("projects");
const skillsLink = document.getElementById("skills");
const resumeLink = document.getElementById("resume");
const contactLink = document.getElementById("contact");
const home = document.getElementById("page-1");
const projects = document.getElementById("page-2");
const skills = document.getElementById("page-3");
const resume = document.getElementById("page-4");
const contact = document.getElementById("page-5");

const links = [homeLink, projectsLink, skillsLink, resumeLink, contactLink];
links.forEach(link => link.addEventListener("click", change));

function change(e) {
  links.forEach(link => link.classList.remove("current"));
  e.target.classList.add("current");
  switch (e.target.id) {
    case "home":
      _top = home.offsetTop;
      _left = home.offsetLeft;
      break;
    case "projects":
      _top = projects.offsetTop;
      _left = projects.offsetLeft;
      break;
    case "skills":
      _top = skills.offsetTop;
      _left = skills.offsetLeft;
      break;
    case "resume":
      _top = resume.offsetTop;
      _left = resume.offsetLeft;
      break;
    case "contact":
      _top = contact.offsetTop;
      _left = contact.offsetLeft;
      break;
  }
  window.scroll({
    top: _top,
    left: _left,
    behavior: "smooth"
  });
  console.log(window.scrollY);
}
window.onscroll = () => {
  if (window.scrollY >= 0 && window.scrollY < projects.offsetTop) {
    links.forEach(link => link.classList.remove("current"));
    homeLink.classList.add("current");
  } else if (
    window.scrollY >= projects.offsetTop &&
    window.scrollY < skills.offsetTop
  ) {
    links.forEach(link => link.classList.remove("current"));
    projectsLink.classList.add("current");
  } else if (
    window.scrollY >= skills.offsetTop &&
    window.scrollY < resume.offsetTop
  ) {
    links.forEach(link => link.classList.remove("current"));
    skillsLink.classList.add("current");
  } else if (
    window.scrollY >= resume.offsetTop &&
    window.scrollY < contact.offsetTop
  ) {
    links.forEach(link => link.classList.remove("current"));
    resumeLink.classList.add("current");
  } else if (window.scrollY >= contact.offsetTop) {
    links.forEach(link => link.classList.remove("current"));
    contactLink.classList.add("current");
  }
};
console.log(window.scrollY);
