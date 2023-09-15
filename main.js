const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav'); 

  bar1.classList.toggle('rotate-bar1');
  bar2.classList.toggle('hide-bar2');
  bar3.classList.toggle('rotate-bar3');

 
  if (navLinks.classList.contains('show-nav')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
