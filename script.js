const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

document.getElementById("portfolioBtn")
.addEventListener("click", () => {

document.getElementById("projects")
.scrollIntoView({
behavior:"smooth"
});

});

document.getElementById("hireBtn")
.addEventListener("click", () => {

document.getElementById("contact")
.scrollIntoView({
behavior:"smooth"
});

});

document.querySelectorAll("nav a")
.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const section =
document.querySelector(
this.getAttribute("href")
);

section.scrollIntoView({
behavior:"smooth"
});

navMenu.classList.remove("active");

});

});

const words = [
"AI Student",
"Frontend Developer",
"Python Programmer",
"Software Tester"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const typing =
document.getElementById("typing");

let currentWord =
words[wordIndex];

if(!deleting){

typing.textContent =
currentWord.substring(
0,
charIndex + 1
);

charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;
}

}
else{

typing.textContent =
currentWord.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

wordIndex =
(wordIndex + 1)
% words.length;
}
}

setTimeout(
typeEffect,
deleting ? 60 : 120
);

}

typeEffect();

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.textContent = "☀️";
}
else{
themeBtn.textContent = "🌙";
}

});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
topBtn.style.display = "block";
}
else{
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});
