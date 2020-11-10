// imports
import generationTabInner from "./generation-tab-contain.js";

// content variables
const wrapper = document.querySelector(".wrapper");
const contentTab = document.querySelector(".content__tab-cube");
const currentTab = document.querySelector(".current-tab");
const nextTab = document.querySelector(".next-tab");

// menu variables
const menuIcon = document.querySelector(".menu__icon");
const menuItem = document.querySelectorAll(".menu__item");

// other variables
let hashName = window.location.hash.slice(2);
let canClick = true;
let previousTab;

const rotateSide = ["top", "bottom", "left", "right"];
const pageTitle = ["main", "about", "skills", "projects", "contact"];

pageTitle.indexOf(hashName) !== -1
  ? (previousTab = pageTitle.indexOf(hashName))
  : (previousTab = 0),
  (hashName = pageTitle[previousTab]);

verifyURL();
window.onhashchange = () => verifyURL();

// events
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && wrapper.classList.contains("menu-opened"))
    closeMenu();

  if (canClick) {
    if (e.key === "ArrowUp")
      showTab("top", getTitleOnKeyPress(previousTab - 1));
    if (e.key === "ArrowRight")
      showTab("right", getTitleOnKeyPress(previousTab + 1));
    if (e.key === "ArrowLeft")
      showTab("left", getTitleOnKeyPress(previousTab - 1));
    if (e.key === "ArrowDown")
      showTab("bottom", getTitleOnKeyPress(previousTab + 1));

    letClick(1200);
  }
});

menuIcon.onclick = () => {
  if (canClick) {
    wrapper.classList.contains("menu-opened") ? closeMenu() : openMenu();
    letClick(500);
  }
};

menuItem.forEach((elem, index) => {
  elem.onclick = () => {
    if (previousTab !== index)
      setTimeout(
        () =>
          showTab(rotateSide[Math.floor(Math.random() * 4)], pageTitle[index]),
        500
      );
    closeMenu();
  };
});

// toggle tab
function showTab(side, tabName, onload) {
  if (onload) {
    currentTab.innerHTML = generationTabInner(tabName);
  } else {
    contentTab.classList.add(`next-tab__${side}`);
    nextTab.innerHTML = generationTabInner(tabName);

    setTimeout(() => {
      currentTab.innerHTML = generationTabInner(tabName);
      contentTab.classList.remove(`next-tab__${side}`);
      setTimeout(() => (nextTab.innerHTML = ""), 0);
    }, 1200);
  }

  getCurentTab(pageTitle.indexOf(tabName));
}

// toggle menu
function openMenu() {
  wrapper.classList.add("menu-opened");
  wrapper.classList.add("perspective-animation");
  wrapper.classList.remove("menu-closed");
}

function closeMenu() {
  wrapper.classList.remove("menu-opened");
  wrapper.classList.add("menu-closed");
  setTimeout(() => wrapper.classList.remove("perspective-animation"), 500);
}

// others
function getCurentTab(index) {
  menuItem[previousTab].classList.remove("active");
  menuItem[index].classList.add("active");
  previousTab = index;
  setTimeout(() => {
    (window.location.hash = `#/${pageTitle[index]}`),
      (hashName = window.location.hash.slice(2));
  }, 1200);
}

function getTitleOnKeyPress(pageTitleIndex) {
  if (pageTitleIndex >= menuItem.length) {
    pageTitleIndex = 0;
  } else if (pageTitleIndex < 0) {
    pageTitleIndex = menuItem.length - 1;
  }

  return pageTitle[pageTitleIndex];
}

function letClick(timeout) {
  canClick = false;
  setTimeout(() => (canClick = true), timeout);
}

function verifyURL() {
  hashName = window.location.hash.slice(2);
  if (!pageTitle.includes(hashName))
    (window.location.hash = "#/main"), (hashName = "main");
  showTab("", hashName, true);
}
