window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button')
  btn.addEventListener('click', () => {
    const width = Number(document.querySelector(`[name='width']`).value)
    const height = Number(document.querySelector(`[name='height']`).value)
    window.api.setWindowPosition({ width, height })
  })

  // 事件注册
  window.api.menuEvent((value) => {
    document.querySelector('h1').innerHTML = value
  })
})