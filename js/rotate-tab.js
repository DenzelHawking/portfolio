let contentTab = document.querySelector('.content__tab-cube');
let currentTab = document.querySelector('.current-tab');
let nextTab = document.querySelector('.next-tab');
let tabsInner = document.querySelectorAll('.pages');

let rotateSide = ['top', 'bottom', 'left', 'right'];
let currentTabIndex = 0;

currentTab.innerHTML = tabsInner[0].innerHTML;


function getRotateSide(index) {
  if (currentTabIndex == index) return;

  let randomNumber = Math.floor(Math.random() * 4);
  currentTabIndex = index;
  nextTab.innerHTML = tabsInner[index].innerHTML;

  contentTab.classList.add(`next-tab__${rotateSide[randomNumber]}`);
  setTimeout(() => currentTab.innerHTML = nextTab.innerHTML, 1500);
  setTimeout(() => contentTab.classList.remove(`next-tab__${rotateSide[randomNumber]}`), 2000);
};
