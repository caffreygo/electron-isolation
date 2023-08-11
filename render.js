window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button')
  btn.addEventListener('click', () => {
    window.api.toMain()
  })
})