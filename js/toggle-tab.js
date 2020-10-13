// content variables
const contentTab = document.querySelector('.content__tab-cube');
const currentTab = document.querySelector('.current-tab');
const nextTab = document.querySelector('.next-tab');
const tabsInner = document.querySelectorAll('.pages');

// navigation keyboard variables
const arrowUp = document.querySelector('.arrot__up');
const arrowDown = document.querySelector('.arrot__down');
const arrowLeft = document.querySelector('.arrot__left');
const arrowRight = document.querySelector('.arrot__right');


// menu variables
const menuIcon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item');

// other variables
let previousTab = 0;
let letRotate = true;
const rotateSide = ['top', 'bottom', 'left', 'right'];


currentTab.innerHTML = tabsInner[0].innerHTML;

// events
document.addEventListener('keydown', (e) => {
  if (letRotate) {
    if (e.key === 'ArrowUp') {
      showTab('top', previousTab - 1);
      showClickedArrow(arrowUp);
    }
    if (e.key === 'ArrowRight') {
      showTab('right', previousTab + 1);
      showClickedArrow(arrowRight);
    }
    if (e.key === 'ArrowLeft') {
      showTab('left', previousTab - 1);
      showClickedArrow(arrowLeft);
    }
    if (e.key === 'ArrowDown') {
      showTab('bottom', previousTab + 1);
      showClickedArrow(arrowDown);
    }
  }

  letRotate = false;
  setTimeout(() => letRotate = true, 2000);
})

menuIcon.onclick = () => {
  menuIcon.classList.contains('opened') ? closeMenu() : openMenu();
}

menuItem.forEach((elem, index) => {
  elem.onclick = () => {
    setTimeout(() => getRotateSide(index), 300);
    closeMenu();
  }
})


// toggle tab
function getRotateSide(index) {
  if (previousTab === index) return;

  const randomNumber = Math.floor(Math.random() * 4);
  nextTab.innerHTML = tabsInner[index].innerHTML;
  contentTab.classList.add(`next-tab__${rotateSide[randomNumber]}`);

  setTimeout(() => currentTab.innerHTML = nextTab.innerHTML, 1500);
  setTimeout(() => contentTab.classList.remove(`next-tab__${rotateSide[randomNumber]}`), 2000);
  getCurentTab(index);
};

function showTab(side, tab) {
  if (tab >= menuItem.length) {
    tab = 0;
  } else if (tab < 0) {
    tab = menuItem.length - 1;
  }

  nextTab.innerHTML = tabsInner[tab].innerHTML;
  contentTab.classList.add(`next-tab__${side}`);
  setTimeout(() => currentTab.innerHTML = nextTab.innerHTML, 1500);
  setTimeout(() => contentTab.classList.remove(`next-tab__${side}`), 2000);
  getCurentTab(tab);
};


// toggle menu
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

// others
function getCurentTab(index) {
  menuItem[index].classList.add('active');
  menuItem[previousTab].classList.remove('active');
  previousTab = index;
}

function showClickedArrow(arrow) {
  arrow.classList.add('active');
  setTimeout(() => arrow.classList.remove('active'), 200);
}