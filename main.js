const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links ul');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


