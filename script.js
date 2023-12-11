const navIcon = document.querySelector('.menu-icon')
const navLinks = document.querySelector('.nav-links-container')

function showNav() {
  navLinks.classList.toggle('show')

  if (navLinks.classList.contains('show')) {
    navIcon.style.opacity = 0.5
    navIcon.setAttribute('aria-expanded', true)
    navIcon.setAttribute('aria-label', 'hide main menu')
  } else {
    navIcon.style.opacity = 1
    navIcon.setAttribute('aria-expanded', false)
    navIcon.setAttribute('aria-label', 'show main menu')
  }
}

navIcon.addEventListener('click', showNav)
