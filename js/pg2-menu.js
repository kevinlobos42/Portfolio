let js = document.getElementById("js-option");
let react_opt= document.getElementById("react-option");
// let vue_opt= document.getElementById("vue-option");
// let java= document.getElementById("java-option");
let btns=[js,react_opt/*, vue_opt*/];
let js_projs = document.getElementById("reg-projs");
let react_projs = document.getElementById("react-projs");
let vue_projs = document.getElementById("vue-projs");
// let java_projs = document.getElementById("js-option");
let arr = [js_projs, react_projs/*, vue_projs*/];
js.addEventListener('click', function(){
    remove(js_projs, js);
});
react_opt.addEventListener('click', function(){
    remove(react_projs, react_opt);
});
// vue_opt.addEventListener('click', function(){
//     remove(vue_projs, vue_opt);
// });

function remove(opt, btn){
   arr.forEach(e=>{
       e.style.display="none";
   })
   btns.forEach(e=>{
       e.classList.remove("current-menu")
   })
   opt.style.display="block";
   btn.classList.add("current-menu")
}
// js.addEventListener('click', function(){
//     console.log("JS-CLICK")
// });