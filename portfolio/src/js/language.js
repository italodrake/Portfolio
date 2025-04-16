// Constante para cada idioma
const translations = {
    pt: {
      titulo: "Olá, Sou o Ítalo Silva",
      descricao: "Estudante de programação, me identifiquei com a área, ainda no estágio, trabalhando muito com JS.",
      descricao1: "Desenvolvedor Full-Stack em formação, apaixonado por tecnologia e sempre buscando mais conhecimento.",
      descricao2: "Sempre procurando aprender com desafios e novos projetos, seja Back ou Front-end.",
      descricao3: "Sou fã de música, animes, games e HQs.",
      contato: "Entre em contato",
      formacaoTitulo: "Formações",
      formacao: "Sou formado em Automação Industrial, pela ETEC de São José dos Campos - Aquarius.",
      formacao1: "Também, formado em Técnico em Desenvolvimento de Sistemas, também pela ETEC.",
      formacao2: "Além disso, possuo vários cursos na área de programação, feitos na Alura, sendo Front-end e Back-end. Também pela Data Science Academy, sendo Python para Data Science e Fundamentos da Engenharia De Dados.",
      meusProjetos: "Meus Projetos",
      sobreMim: "Sobre Mim",
      formacoes: "Formações",
      webProjects: "Projetos Web",
      mobileProjects: "Projetos Mobile",
      logicProjects: "Lógica de Programação",
      showAllProjects: "Mostrar Todos os Projetos",
    },
    en: {
      titulo: "Hello, I'm Ítalo Silva",
      descricao: "Programming student who found a passion for the field. Currently an intern, working heavily with JS.",
      descricao1: "Full-Stack Developer in training, passionate about technology and always seeking more knowledge.",
      descricao2: "Always looking to learn from challenges and new projects, whether it's Back or Front-end.",
      descricao3: "I'm a fan of music, anime, games, and comics.",
      contato: "Contact me",
      formacaoTitulo: "Education",
      formacao: "I have a degree in Industrial Automation from ETEC of São José dos Campos - Aquarius.",
      formacao1: "I also have a degree in Systems Development Technician, also from ETEC.",
      formacao2: "Additionally, I’ve completed several programming courses on Alura, covering both Front-end and Back-end. Also, courses from Data Science Academy, including Python for Data Science and Fundamentals of Data Engineering.",
      meusProjetos: "My Projects",
      sobreMim: "About Me",
      formacoes: "Education",
      webProjects: "Web Projects",
      mobileProjects: "Mobile Projects",
      logicProjects: "Programming Logic",
      showAllProjects: "Show All Projects",
    },
    es: {
      titulo: "Hola, soy Ítalo Silva",
      descricao: "Estudiante de programación que se identificó con el área. Actualmente en prácticas, trabajando mucho con JS.",
      descricao1: "Desarrollador Full-Stack en formación, apasionado por la tecnología y siempre con ganas de aprender más.",
      descricao2: "Siempre buscando crecer con desafíos y nuevos proyectos, ya sea en el Back-end o Front-end.",
      descricao3: "Soy fanático de la música, el anime, los videojuegos y los cómics.",
      contato: "Contáctame",
      formacaoTitulo: "Formación académica",
      formacao: "Tengo un título en Automatización Industrial por la ETEC de São José dos Campos - Aquarius.",
      formacao1: "También tengo un título como Técnico en Desarrollo de Sistemas, también por la ETEC.",
      formacao2: "Además, he realizado varios cursos en el área de programación en Alura, tanto en Front-end como en Back-end. También en Data Science Academy, incluyendo Python para Ciencia de Datos y Fundamentos de Ingeniería de Datos.",
      meusProjetos: "Mis Proyectos",
      sobreMim: "Sobre Mim",
      formacoes: "Formácion",
      webProjects: "Proyectos Web",
      mobileProjects: "Proyectos Móviles",
      logicProjects: "Lógica de Programación",
      showAllProjects: "Mostrar Todos los Proyectos",
    }
};

const languageSelector = document.getElementById("idioma");

languageSelector.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  translatePage(selectedLang);
});

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });
}

  