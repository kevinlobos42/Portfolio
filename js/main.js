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
}
