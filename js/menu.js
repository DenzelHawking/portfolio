let menuBtn = document.querySelector('.circle-menu');
let menuItem = document.querySelectorAll('.circle-menu__item');


menuBtn.onclick = function() {
  menuBtn.classList.toggle('active');
};

menuItem.forEach(elem => {
  elem.onclick = () => {
    event.stopPropagation();
    menuBtn.classList.remove('active');
  };
});