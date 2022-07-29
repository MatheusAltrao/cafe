ScrollReveal().reveal('h2', {
  delay: 100,
  duration: 500,
  reset: false
})

ScrollReveal().reveal('.text', {
  delay: 100,
  duration: 500,
  reset: false
})

ScrollReveal().reveal('.button', {
  delay: 100,
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
