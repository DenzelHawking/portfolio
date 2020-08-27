let contentTab = document.querySelector('.content__tab-cube');

let currentTab = document.querySelector('.current-tab');
let nextTab = document.querySelector('.next-tab');

let rotateSide = ['top', 'bottom', 'left', 'right'];


function getRotateSide() {
  let randomNumber = Math.floor(Math.random() * 4);

  contentTab.classList.add(`next-tab__${rotateSide[randomNumber]}`);
  setTimeout(() => {
    currentTab.innerHTML = nextTab.innerHTML;
  }, 1500);

  setTimeout(() => {
    contentTab.classList.remove(`next-tab__${rotateSide[randomNumber]}`);
  }, 2000);
};

// document.body.onclick = getRotateSide;
