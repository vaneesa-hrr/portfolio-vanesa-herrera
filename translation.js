// Traducciones
const translations = {
  en: {
    english: "English",
    spanish: "Spanish",
    home: "Home",
    "about-me": "About Me",
    services: "Service",
    portfolio: "Portfolio",
    contact: "Contact",
    subtitle: "Junior Web Developer",
    title: "Hi, I'm",
    "about-title": "About Me",
    "about-text": "I'm a passionate junior web developer eager to learn and grow. I love working with web technologies to create engaging, user-friendly websites. Though I'm at the beginning of my journey, I’m constantly expanding my skills and taking on new challenges to improve. I’m excited to contribute to projects, collaborate with others, and further develop my coding abilities. I am looking for opportunities to continue developing professionally and contribute with my work to innovative projects.",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    "re-an": "Developing interactive web interfaces using modern frameworks, creating efficient and reusable single-page applications (SPA).",
    typescript: "Enhancing JavaScript with strong typing to improve code quality and maintainability, making it easier to scale applications.",
    boots: "Building responsive and mobile-first web designs with pre-built components, ensuring fast development and consistent layout across devices.",
    java: "Developing web and desktop applications with Java, using the Eclipse IDE.",
    "word-el": "Building dynamic websites with WordPress and Elementor for fast, responsive design.",
    sql: "Writing and optimizing queries, managing databases, designing schemas, and performing data retrieval and performance tuning in relational databases.",
    CAng: "Intensive C# and Angular training program",
    incident: "Incident notification and resolution via QMetry",
    maintenance: "Maintenance and development of created web pages by the company",
    support: "Customer-facing program support and Angular code development to maintain and add app",
    MVC: "Improvements using MVC pattern and layer-based architecture",
    elementor: "Design and layout with Elementor and Wordpress creating and customizing pages",
    opt: "Performance optimization by minifying CSS and JavaScript to improve speed",
    display: "Fixing display issues on different screen sizes",
    upd: "Site maintenance and updates",
    css: "Customizing styles with CSS",
    interact: "Using JavaScript to improve interactivity",
    arts: "High School Diploma in Performing Arts",
    develop: "Advanced Technical Degree in Web Application Development",
    present: "2023 - Present",
    estudiov: "Actor Training Course",
    MyServices: "My Services",
    websites: "Custom Websites",
    "desc-web": "I create fully customized websites tailored to your needs, ensuring unique and high- quality designs.",
    learnMore: "Learn More",
    "desc-word": "I build professional and dynamic websites using WordPress and Elementor, making website management easy and efficient.",
    "react-ang": "React & Angular Development",
    "desc-react": "I develop interactive and scalable web applications using React and Angular, ensuring performance and smooth user experience, following best practices and modern standards.",
    "java-type": "JavaScript & TypeScript Development",
    "desc-java": "Develop robust applications with JavaScript and TypeScript, enhancing code quality, maintainability, and performance, while implementing dynamic and interactive features on websites.",
    MyWork: "My Work",
    workReact: "Web application developed with React that allows users to dynamically share and organize links.It features an intuitive interface and functionalities such as adding and categorizing links, providing a seamless user experience.",
    workWordpress: "Complete website development. The project included the implementation of an attractive and functional design using Elementor, mobile optimization, and the integration of dynamic sections, providing an intuitive and seamless user experience.",
    workJavaScript: "Development of a personal portfolio using HTML, CSS, and JavaScript. The website features a modern and responsive interface showcasing highlighted projects, skills, and professional experience.It includes interactive functionalities such as dynamic navigation and visual effects, providing an engaging and seamless user experience.",
    seeMore: "See more",
    contactMe: "Contact Me",
    CV: "Download CV",
    "your_name": "Your name",
    "your_email": "Your email",
    "your_message": "Your message",

    submit: "Submit"
  },
  es: {
    english: "Inglés",
    spanish: "Español",
    home: "Inicio",
    "about-me": "Sobre mí",
    services: "Servicios",
    portfolio: "Portafolio",
    contact: "Contacto",
    subtitle: "Desarrolladora Web Junior",
    title: "Hola, soy",
    "about-title": "Sobre Mí",
    "about-text": "Soy una apasionada desarrolladora web junior con ganas de aprender y crecer. Me encanta trabajar con tecnologías web para crear sitios web atractivos y fáciles de usar. Aunque estoy al comienzo de mi viaje, estoy constantemente ampliando mis habilidades y asumiendo nuevos desafíos para mejorar. Estoy emocionada de contribuir a proyectos, colaborar con otros y desarrollar aún más mis habilidades de codificación. Estoy en busca de oportunidades para seguir desarrollándome profesionalmente y contribuir con mi trabajo a proyectos innovadores.",
    skills: "Habilidades",
    experience: "Experiencia",
    education: "Educación",
    "re-an": "Desarrollo de interfaces web interactivas utilizando frameworks modernos, creando aplicaciones de una sola página eficientes y reutilizables (SPA).",
    typescript: "Mejorando JavaScript con tipado fuerte para mejorar la calidad y mantenibilidad del código, facilitando la escalabilidad de las aplicaciones.",
    boots: "Creando diseños web responsivos y móviles desde el primer momento con componentes predefinidos, asegurando un desarrollo rápido y un diseño consistente en todos los dispositivos.",
    java: "Desarrollo de aplicaciones web y de escritorio con Java, utilizando el IDE Eclipse.",
    "word-el": "Creación de sitios web dinámicos con WordPress y Elementor para un diseño rápido y responsivo.",
    sql: "Escribir y optimizar consultas, gestionar bases de datos, diseñar esquemas y realizar recuperación de datos y optimización del rendimiento en bases de datos relacionales.",
    CAng: "Formación intensiva en C# y Angular",
    incident: "Notificación y solución de incidencias del programa mediante QMetry",
    maintenance: "Mantenimiento y desarrollo de páginas Web creadas por la empresa",
    support: "Soporte técnico del programa de cara al cliente y desarrollo de código Angular para mantener y añadir mejoras a la aplicación",
    MVC: "Uso de patrón MVC y arquitectura basada en capas",
    elementor: "Diseño y maquetación con Elementor y Wordpress creando y personalizando páginas",
    opt: "Optimización del rendimiento minificando el CSS y JavaScript para mejorar la velocidad",
    display: "Corrección de problemas de visualización en diferentes tamaños de pantalla",
    upd: "Mantenimiento y actualizaciones del sitio",
    css: "Personalización de estilos con CSS",
    interact: "Uso de JavaScript para mejorar interactividad",
    arts: "Bachillerato de Artes Escénicas",
    develop: "Grado Superior en Desarrollo de Aplicaciones Web",
    present: "2023 - Actualmente",
    estudiov: "Curso de Formación del Actor",
    MyServices: "Mis Servicios",
    websites: "Páginas Web Personalizadas",
    "desc-web": "Diseño y desarrollo sitios web totalmente personalizados, adaptados a tus necesidades, con un enfoque único y profesional.",
    learnMore: "Más información",
    "desc-word": "Creo sitios web dinámicos y profesionales con WordPress y Elementor, facilitando su gestión y optimización.",
    "react-ang": "Desarrollo con React & Angular",
    "desc-react": "Desarrollo aplicaciones web interactivas y escalables utilizando React y Angular, asegurando el rendimiento y una experiencia de usuario fluida, siguiendo las mejores prácticas y estándares modernos.",
    "java-type": "Desarrollo con JavaScript & TypeScript",
    "desc-java": "Desarrollo aplicaciones robustas con JavaScript y TypeScript, mejorando la calidad del código, la mantenibilidad y el rendimiento, mientras implemento funcionalidades dinámicas e interactivas en sitios web.",
    MyWork: "Mi Trabajo",
    workReact: "Aplicación web desarrollada con React que permite a los usuarios compartir y organizar enlaces de manera dinámica. Implementa una interfaz intuitiva y funcionalidades como la adición y categorización de enlaces, proporcionando una experiencia de usuario fluida.",
    workWordpress: "Desarrollo completo del sitio web. El proyecto incluyó la implementación de un diseño atractivo y funcional utilizando Elementor, optimización para dispositivos móviles y la integración de secciones dinámicas, facilitando una experiencia de usuario intuitiva y fluida.",
    workJavaScript: "Desarrollo de un portafolio personal utilizando HTML, CSS y JavaScript. El sitio web presenta una interfaz moderna y responsiva que muestra proyectos destacados, habilidades y experiencia profesional. Incluye funcionalidades interactivas como navegación dinámica y efectos visuales, proporcionando una experiencia de usuario atractiva y fluida",
    seeMore: "Ver más",
    contactMe: "Contacto",
    CV: "Descargar CV",
    "your_name": "Tu nombre",
    "your_email": "Tu correo",
    "your_message": "Tu mensaje",
    submit: "Enviar"
  },
};

function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-lang], [placeholder]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (key) {
      element.textContent = translations[language][key] || element.textContent;
    }

    const placeholder = element.getAttribute("placeholder");
    if (placeholder) {
      // Crear la clave para traducción, eliminando espacios y convirtiendo a minúsculas
      const translationKey = placeholder.toLowerCase().replace(/\s+/g, '_'); // Asegurando que el espacio sea reemplazado por un guion bajo
      if (translations[language][translationKey]) {
        element.setAttribute("placeholder", translations[language][translationKey]);
      } else {
        // Si no se encuentra la clave, deja el placeholder original
        console.log(`No translation found for: ${translationKey}`);
      }
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const esButton = document.getElementById("es-button");
  const enButton = document.getElementById("en-button");

  if (esButton && enButton) {
    esButton.addEventListener("click", () => {
      changeLanguage("es");
    });

    enButton.addEventListener("click", () => {
      changeLanguage("en");
    });
  }
});

changeLanguage("en");
