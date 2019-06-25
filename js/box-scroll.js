const html = document.getElementById("html-scroll");
const react = document.getElementById("react-scroll");
const vue = document.getElementById("vue scroll");
const html_1 = document.getElementById("html-proj-1");
const html_2 = document.getElementById("html-proj-2");
const html_3 = document.getElementById("html-proj-3");
const html_4 = document.getElementById("html-proj-4");
const html_5 = document.getElementById("html-proj-5");

const react_1 = document.getElementById("react-proj-1");
const react_2 = document.getElementById("react-proj-2");
const react_3 = document.getElementById("react-proj-3");
const react_4 = document.getElementById("react-proj-4");
const react_5 = document.getElementById("react-proj-5");

const vue_1 = document.getElementById("vue-proj-1");
const vue_2 = document.getElementById("react-proj-1");
const vue_3 = document.getElementById("react-proj-1");
const vue_4 = document.getElementById("react-proj-1");
const vue_5 = document.getElementById("react-proj-1");

const html_dot_1 = document.getElementById("html-dot-1");
const html_dot_2 = document.getElementById("html-dot-2");
const html_dot_3 = document.getElementById("html-dot-3");
const html_dot_4 = document.getElementById("html-dot-4");
const html_dot_5 = document.getElementById("html-dot-5");

const react_dot_1 = document.getElementById("react-dot-1");
const react_dot_2 = document.getElementById("react-dot-2");
const react_dot_3 = document.getElementById("react-dot-3");
const react_dot_4 = document.getElementById("react-dot-4");
const react_dot_5 = document.getElementById("react-dot-5");

const vue_dot_1 = document.getElementById("vue-dot-1");
const vue_dot_2 = document.getElementById("vue-dot-2");
const vue_dot_3 = document.getElementById("vue-dot-3");
const vue_dot_4 = document.getElementById("vue-dot-4");
const vue_dot_5 = document.getElementById("vue-dot-5");

html_dots = [html_dot_1, html_dot_2, html_dot_3, html_dot_4, html_dot_5];
react_dots = [react_dot_1, react_dot_2, react_dot_3, react_dot_4, react_dot_5];
vue_dots = [vue_dot_1, vue_dot_2, vue_dot_3, vue_dot_4, vue_dot_5];

html_dots.forEach(dot => {
  dot.addEventListener("click", boxScroll);
});
function boxScroll(e) {
  let target = e.target;
  console.log(target);
  html_dots.forEach(dot => dot.classList.remove("selected"));
  target.classList.add("selected");
  switch (target) {
    case html_dot_1:
      _left = html_1.offsetLeft;
      break;
    case html_dot_2:
      _left = html_2.offsetLeft;
      break;
    case html_dot_3:
      _left = html_3.offsetLeft;
      break;
    case html_dot_4:
      _left = html_4.offsetLeft;
      break;
    case html_dot_5:
      _left = html_5.offsetLeft;
      break;
  }
  html.scroll({
    top: 0,
    left: _left - html_1.offsetLeft,
    behavior: "smooth"
  });
}
