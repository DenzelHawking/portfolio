let menuBtn = document.querySelector('.circle-menu');
let menuItem = document.querySelectorAll('.circle-menu__item');


menuBtn.onclick = () => menuBtn.classList.toggle('active');

menuItem.forEach((elem, index) => {
  elem.onclick = () => {
    event.stopPropagation();
    menuBtn.classList.remove('active');

    getRotateSide(index)
  };
});