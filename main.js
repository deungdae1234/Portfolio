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
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
  });
});
