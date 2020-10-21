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
const rotateSide = ['top', 'bottom', 'left', 'right'];
const pageTitle = ['#/main', '#/about', '#/skills', '#/projects', '#/contact'];
let canClick = true;
let previousTab = pageTitle.indexOf(window.location.hash);

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
    if (previousTab !== index) setTimeout(() => showTab(rotateSide[Math.floor(Math.random() * 4)], index), 500);
    closeMenu();
  }
})


// toggle tab
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
  setTimeout(() => wrapper.classList.remove('perspective-animation'), 500);
}

// others
function getCurentTab(index) {
  menuItem[previousTab].classList.remove('active');
  menuItem[index].classList.add('active');
  previousTab = index;
  setTimeout(() => window.location.hash = pageTitle[index], 1200)
}

function letClick(timeout) {
  canClick = false;
  setTimeout(() => canClick = true, timeout);
}

function verifyURL() {
  if (!pageTitle.includes(window.location.hash)) window.location.hash = '#/main';
  showTab('', pageTitle.indexOf(window.location.hash), true);
}