const cube = `<div class="skills-cube">
                <div class="skills-cube__inner">
                  <div class="skills-cube__side skills-cube__side-0"></div>
                  <div class="skills-cube__side skills-cube__side-1"></div>
                  <div class="skills-cube__side skills-cube__side-2"></div>
                  <div class="skills-cube__side skills-cube__side-3"></div>
                  <div class="skills-cube__side skills-cube__side-4"></div>
                  <div class="skills-cube__side skills-cube__side-5"></div>
                </div>
              </div>`

const projectList = `<div class="project__list">
                <div class="project__item project__item-0"><div class="project__image"></div></div>
                <div class="project__item project__item-1"><div class="project__image"></div></div>
                <div class="project__item project__item-2"><div class="project__image"></div></div>
                <div class="project__item project__item-3"><div class="project__image"></div></div>
                <div class="project__item project__item-4"><div class="project__image"></div></div>
                <div class="project__item project__item-5"><div class="project__image"></div></div>
              </div>`


const pageInner = {
  main: {
    tabClass: 'main',
    title: 'main',
    description: 'Мы воплощаем ваши идеи в экстраординарные продукты',
    image: 'main.jpg'
  },
  about: {
    tabClass: 'about-us',
    title: 'about us',
    description: 'Мы команда опытных специалистов работающих в сфере IT предоставляющие ... услуги на протяжении более 5 лет.',
    image: 'main.jpg'
  },
  skills: {
    tabClass: 'our-services',
    title: 'our services',
    description: 'Наша команда предоставляет професиональные услуги в IT секторе. В наш сектор услуг входит: Лэндинг пэйджы, интернет магазины, сайты визитки, крупные корпоротивные сайты, SEO продвижение и тд.',
    image: 'main.jpg',
    inner_data: cube
    // cube
  },
  projects: {
    tabClass: 'our-projects',
    title: 'our projects',
    description: '',
    image: 'main.jpg',
    inner_data: projectList
    // project
  },
  contact: {
    tabClass: 'contact-us',
    title: 'contact us',
    description: '',
    inner_data: ''
    // form
  }
}

let tabName = window.location.hash.slice(2);

let currentTabInner = '';
let nextTabInner = '';



function generationTabInner(tab) {
  return `
  <div class="${pageInner[tab].tabClass}-tab">
    <div class="title">${pageInner[tab].title}</div>
    <div class="description">
      ${pageInner[tab].description}
    </div>

    ${pageInner[tab].inner_data}
    
    <div class="page__images"></div>
  </div>
  `
}


// currentTab.innerHTML = generationTabInner(pageInner[tabName])