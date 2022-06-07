document.querySelector('.header__moon').onclick = function() {
    document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header__mob-menu').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('exp-contact');


burger.addEventListener('click', () => {
    ul.classList.toggle('show');
})

home.addEventListener('click', () => {
    ul.classList.toggle('show');
})
about.addEventListener('click', () => {
    ul.classList.toggle('show');
})
skills.addEventListener('click', () => {
    ul.classList.toggle('show');
})
projects.addEventListener('click', () => {
    ul.classList.toggle('show');
})
contact.addEventListener('click', () => {
    ul.classList.toggle('show');
})

