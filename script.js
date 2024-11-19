// Traducciones
const translations = {
  en: {
    home: "Home",
    "about-me": "About Me",
    service: "Service",
    contact: "Contact",
    subtitle: "Junior Web Developer",
    title: "Hi, I'm Vanesa Herrera",
    "about-title": "About Me",
    "about-text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam alias quibusdam, quam soluta fugit tenetur laudantium aliquam assumenda ipsa perspiciatis.Porro quibusdam eos commodi quis delectus amet fuga, natus sed?",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
  },
  es: {
    home: "Inicio",
    "about-me": "Sobre mí",
    service: "Servicios",
    contact: "Contacto",
    subtitle: "Desarrolladora Web Junior",
    title: "Hola, soy Vanesa Herrera",
    "about-title": "Sobre Mí",
    "about-text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam alias quibusdam, quam soluta fugit tenetur laudantium aliquam assumenda ipsa perspiciatis. Porro quibusdam eos commodi quis delectus amet fuga, natus sed?",
    skills: "Habilidades",
    experience: "Experiencia",
    education: "Educación",
  },
};

function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    element.textContent = translations[language][key];
  });
}

document.getElementById("es-button").addEventListener("click", () => {
  changeLanguage("es");
});

document.getElementById("en-button").addEventListener("click", () => {
  changeLanguage("en");
});

changeLanguage("en");
