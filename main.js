'use strict';

// make navbar
// make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Scrollto

const menu = document.querySelector('.navbar__menu');

menu.addEventListener('click', (e) => {
  const event = e.target;
  const link = event.dataset.link;
  if (event == null) {
    return;
  }

  scrollIntoView(link);
  menu.classList.remove('toggle__img');
  menu.classList.remove('click__toggle');
});

//ScrollTo Contact me

const contact = document.querySelector('.home__button');

contact.addEventListener('click', () => {
  scrollIntoView('#contact');
});
// 반복되는 부분을 함수로 만들어서 호출
// selector라는 인자값을 이용.. 천잰가?
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);

  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// Home scrolling transparent
const homeContainer = document.querySelector('.home__container');

const homeHeight = home.getBoundingClientRect().height;
console.log(`hegiht : ${homeHeight}`);

console.log(home.style.opacity);

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow-btn-

const arrowBtn = document.querySelector('.navbar__arrow-btn');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add('arrow-visible');
  } else {
    arrowBtn.classList.remove('arrow-visible');
  }
});

arrowBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

// My work
const workContainer = document.querySelector('.work__menu');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project__img');

workContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.work || e.target.parentNode.dataset.work;
  console.log(filter);
  if (filter == null) {
    return;
  }
  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (project.dataset.type === filter || filter === '*') {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
  // my__work button
  const active = document.querySelector('.menu__btn.active');
  active.classList.remove('active');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('active');
});

// toggle btn

const toggleBtn = document.querySelector('.navbar__toggle-btn');
const homeAvatar = document.querySelector('.home__avatar');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('click__toggle');
  homeAvatar.classList.toggle('toggle__img');
});
