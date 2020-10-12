const menuIcon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item');
let previousTab = 0;

menuIcon.onclick = () => {
  menuIcon.classList.contains('opened') ? closeMenu() : openMenu();
}

menuItem.forEach((elem, index) => {
  elem.onclick = () => {
    getCurentTab(index);
    setTimeout(() => getRotateSide(index), 300);
    closeMenu();
  }
})

function getCurentTab(index) {
  menuItem[index].classList.add('active');
  menuItem[previousTab].classList.remove('active');
  previousTab = index;
}

function openMenu() {
  menuIcon.classList.add('opened');
  menuIcon.classList.remove('closed');
  menu.classList.add('active');
}

function closeMenu() {
  menuIcon.classList.add('closed');
  menuIcon.classList.remove('opened');
  menu.classList.remove('active');
}