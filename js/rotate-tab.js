const contentTab = document.querySelector('.content__tab-cube');
const currentTab = document.querySelector('.current-tab');
const nextTab = document.querySelector('.next-tab');
const tabsInner = document.querySelectorAll('.pages');

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
