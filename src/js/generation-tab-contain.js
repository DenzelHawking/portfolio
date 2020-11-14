const skillsCube = `<div class="skills-cube">
                <div class="skills-cube__inner">
                  <div class="skills-cube__side skills-cube__side-0"></div>
                  <div class="skills-cube__side skills-cube__side-1"></div>
                  <div class="skills-cube__side skills-cube__side-2"></div>
                  <div class="skills-cube__side skills-cube__side-3"></div>
                  <div class="skills-cube__side skills-cube__side-4"></div>
                  <div class="skills-cube__side skills-cube__side-5"></div>
                </div>
              </div>`;

const projectList = `<div class="project__list">
                <div class="project__item project__item-0"><div class="project__image"></div></div>
                <div class="project__item project__item-1"><div class="project__image"></div></div>
                <div class="project__item project__item-2"><div class="project__image"></div></div>
                <div class="project__item project__item-3"><div class="project__image"></div></div>
                <div class="project__item project__item-4"><div class="project__image"></div></div>
                <div class="project__item project__item-5"><div class="project__image"></div></div>
              </div>`;

const form = `<form id="sendForm">
                <input type="text" name="name" placeholder="Имя" required>
                <input type="email" name="mail" placeholder="Почта" required>
                <textarea name="message" placeholder="Расскажите о своем проекте"></textarea>
                <button>Отправить</button>
              </form>`;

const pageInner = {
  main: {
    tabClass: "main",
    title: "main",
    description: "Мы воплощаем ваши идеи в экстраординарные продукты",
    image: "",
  },
  about: {
    tabClass: "about-us",
    title: "about us",
    description: "Мы команда опытных специалистов работающих в сфере IT предоставляющие ... услуги на протяжении более 5 лет.",
    image: "",
  },
  skills: {
    tabClass: "our-services",
    title: "our services",
    description: "Наша команда предоставляет професиональные услуги в IT секторе. В наш сектор услуг входит: Лэндинг пэйджы, интернет магазины, сайты визитки, крупные корпоротивные сайты, SEO продвижение и тд.",
    image: "",
    innerData: skillsCube,
  },
  projects: {
    tabClass: "our-projects",
    title: "our projects",
    description: "",
    image: "",
    innerData: projectList,
  },
  contact: {
    tabClass: "contact-us",
    title: "contact us",
    description: "",
    innerData: form,
    // form
  },
};

export default function generationTabInner(tab) {
  let tabClass = pageInner[tab].tabClass || "";
  let title = pageInner[tab].title || "";
  let description = pageInner[tab].description || "";
  let innerData = pageInner[tab].innerData || "";

  // setTimeout(() => {
  //   let form = document.querySelector('#sendForm');
  //   form.onsubmit = () => {
  //     sendForm(e);
  //   }
  // }, 0)


  return `
  <div class="${tabClass}-tab">
    <div class="title">${title}</div>
    <div class="description">
      ${description}
    </div>
    ${innerData}
    <div class="page__images"></div>
  </div>
  `;
}