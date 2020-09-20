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

  console.log(link);
  scrollIntoView(link);
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

const home = document.querySelector('.home__container');

const homeHeight = home.getBoundingClientRect().height;
console.log(`hegiht : ${homeHeight}`);

console.log(home.style.opacity);

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
