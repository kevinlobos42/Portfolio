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
      _left = home.offsetLeft;
      break;
    case "projects":
      _left = projects.offsetLeft;
      break;
    case "skills":
      _left = skills.offsetLeft;
      break;
    case "resume":
      _left = resume.offsetLeft;
      break;
    case "contact":
      _left = contact.offsetLeft;
      break;
  }
  window.scroll({
    top: 0,
    left: _left,
    behavior: "smooth"
  });
  console.log(document.body.offsetLeft);
}
