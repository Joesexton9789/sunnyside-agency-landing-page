const navIcon = document.querySelector('.menu-icon')
const navLinks = document.querySelector('.nav-links-container')

function showNav() {
  navLinks.classList.toggle('show')

  if (navLinks.classList.contains('show')) {
    navIcon.style.opacity = 0.5
  } else {
    navIcon.style.opacity = 1
  }
}

navIcon.addEventListener('click', showNav)
