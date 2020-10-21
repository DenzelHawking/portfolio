// content variables
const wrapper = document.querySelector('.wrapper');
const contentTab = document.querySelector('.content__tab-cube');
const currentTab = document.querySelector('.current-tab');
const nextTab = document.querySelector('.next-tab');
const tabsInner = document.querySelectorAll('.pages');

// menu variables
const menuIcon = document.querySelector('.menu__icon');
const menuItem = document.querySelectorAll('.menu__item');

// other variables
let canClick = true;
const rotateSide = ['top', 'bottom', 'left', 'right'];

const pageTitle = ['#/main', '#/about', '#/skills', '#/projects', '#/contact'];

const pages = {
  '#/main': 0,
  '#/about': 1,
  '#/skills': 2,
  '#/projects': 3,
  '#/contact': 4,
}

let previousTab = pages[window.location.hash];

verifyURL();
window.onhashchange = () => verifyURL();


// events
document.addEventListener('keydown', (e) => {
  if (canClick) {
    if (e.key === 'ArrowUp') showTab('top', previousTab - 1);
    if (e.key === 'ArrowRight') showTab('right', previousTab + 1);
    if (e.key === 'ArrowLeft') showTab('left', previousTab - 1);
    if (e.key === 'ArrowDown') showTab('bottom', previousTab + 1);
    letClick(2000)
  }
})

menuIcon.onclick = () => {
  if (canClick) {
    wrapper.classList.contains('menu-opened') ? closeMenu() : openMenu();
    letClick(500)
  }
}

menuItem.forEach((elem, index) => {
  elem.onclick = () => {
    setTimeout(() => getRotateSide(index), 500);
    closeMenu();
  }
})


// toggle tab
function getRotateSide(index) {
  if (previousTab === index) return;

  const randomNumber = Math.floor(Math.random() * 4);
  nextTab.innerHTML = tabsInner[index].innerHTML;
  contentTab.classList.add(`next-tab__${rotateSide[randomNumber]}`);

  showTab(rotateSide[randomNumber], index)
};

function showTab(side, tab, onload) {
  if (tab >= menuItem.length) {
    tab = 0;
  } else if (tab < 0) {
    tab = menuItem.length - 1;
  }

  nextTab.innerHTML = tabsInner[tab].innerHTML;

  if (onload) {
    currentTab.innerHTML = nextTab.innerHTML;
  } else {
    contentTab.classList.add(`next-tab__${side}`);
    setTimeout(() => currentTab.innerHTML = nextTab.innerHTML, 1200);
    setTimeout(() => contentTab.classList.remove(`next-tab__${side}`), 1200);
  }

  getCurentTab(tab);
};


// toggle menu
function openMenu() {
  wrapper.classList.add('menu-opened');
  wrapper.classList.add('perspective-animation');
  wrapper.classList.remove('menu-closed');
}

function closeMenu() {
  wrapper.classList.remove('menu-opened');
  wrapper.classList.add('menu-closed');
  setTimeout(() => {
    wrapper.classList.remove('perspective-animation');
  }, 500);
}

// others
function getCurentTab(index) {
  menuItem[previousTab].classList.remove('active');
  menuItem[index].classList.add('active');
  previousTab = index;
  window.location.hash = pageTitle[index];
}

function letClick(timeout) {
  canClick = false;
  setTimeout(() => canClick = true, timeout);
}

function verifyURL() {
  if (!pageTitle.includes(window.location.hash)) window.location.hash = '#/main';
  showTab('', pages[window.location.hash], true);
}