ScrollReveal().reveal('h2', {
  delay: 300,
  duration: 500,
  reset: false
})

ScrollReveal().reveal('.text', {
  delay: 300,
  duration: 500,
  reset: false
})

ScrollReveal().reveal('.button', {
  delay: 300,
  duration: 500,
  reset: false
})

const scrollTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

document.getElementById('backToTopButton').onclick = scrollTop

const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

bar && bar.addEventListener('click', () => nav.classList.add('active'))
close && close.addEventListener('click', () => nav.classList.remove('active'))

const links = document.querySelectorAll(' ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('active')
  })
}
