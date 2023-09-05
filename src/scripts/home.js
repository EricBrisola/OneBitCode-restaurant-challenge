const menuBtn = document.querySelector('#menu-btn')
const menuPage = 'src/menu.html'

const moveToMenu = () => 
{
  window.location.href = menuPage
}

menuBtn.addEventListener('click', moveToMenu)