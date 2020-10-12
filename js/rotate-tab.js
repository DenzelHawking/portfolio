const contentTab = document.querySelector('.content__tab-cube');
const currentTab = document.querySelector('.current-tab');
const nextTab = document.querySelector('.next-tab');
const tabsInner = document.querySelectorAll('.pages');

let letRotate = true;

const rotateSide = ['top', 'bottom', 'left', 'right'];

let currentTabIndex = 0;

currentTab.innerHTML = tabsInner[0].innerHTML;


function getRotateSide(index) {
  if (currentTabIndex === index) return;

  const randomNumber = Math.floor(Math.random() * 4);
  currentTabIndex = index;
  nextTab.innerHTML = tabsInner[index].innerHTML;

  contentTab.classList.add(`next-tab__${rotateSide[randomNumber]}`);
  setTimeout(() => currentTab.innerHTML = nextTab.innerHTML, 1500);
  setTimeout(() => contentTab.classList.remove(`next-tab__${rotateSide[randomNumber]}`), 2000);
};

function showTab(side, tab) {
  if (tab >= menuItem.length) {
    tab = 0;
  } else if (tab <= 0) {
    tab = menuItem.length - 1;
  }

  currentTabIndex = tab;

  getCurentTab(tab);

  nextTab.innerHTML = tabsInner[tab].innerHTML;
  contentTab.classList.add(`next-tab__${side}`);
  setTimeout(() => currentTab.innerHTML = nextTab.innerHTML, 1500);
  setTimeout(() => contentTab.classList.remove(`next-tab__${side}`), 2000);
};


document.addEventListener('keydown', (e) => {
  if (letRotate) {
    if (e.key === 'ArrowUp') showTab('top', currentTabIndex + 1);
    if (e.key === 'ArrowRight') showTab('right', currentTabIndex + 1);
    if (e.key === 'ArrowLeft') showTab('left', currentTabIndex - 1);
    if (e.key === 'ArrowDown') showTab('bottom', currentTabIndex - 1);
  }

  letRotate = false;
  setTimeout(() => letRotate = true, 2000)
})