const selector = name => document.querySelector(name)

const btn = selector('#burger')
const menu = selector('.dropdown_menu')


const toggleBtn = e => {
  e.stopPropagation()
  btn.classList.toggle('turn')
  menu.classList.toggle('show')
}

const removeClass = () => {
  if (btn.classList.contains('turn')) {
    btn.classList.remove('turn')
    menu.classList.remove('show')
  }

}



btn.addEventListener('click', toggleBtn)

menu.addEventListener('click', e => {
  e.stopPropagation()
})

window.addEventListener('click', removeClass)
