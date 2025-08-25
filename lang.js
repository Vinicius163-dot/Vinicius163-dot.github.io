const translations = {
    pt: {
        "name-section": "Olá, eu sou Vinicius Cardoso,",
        "name-sectionweb": "DESENVOLVEDOR FRONT-END",
        "paragraph-section": "Sou um desenvolvedor web iniciante com paixão por criar páginas dinâmicas e responsivas.",
        "paragraph-section2": "Sinta-se bem-vindo para explorar meu portfolio!",
        "Welcome": "BEM-VINDO.",
        "menuHome": "Inicio",
        "aboutme": "SOBRE MIM",
        "aboutmep":"Me chamo vinicius, moro em São Paulo e sou um estudante de Analise e Desenvolvimento de Sistemas, desde criança sou apaixonado por tecnologia e programação e atualmente estou me especializando em desenvolvimento web com foco em front-end, e estou sempre em busca de aprender e melhorar minhas habilidades com as linguagens que utilizo. Ainda estou incerto da area que quero seguir, porém quero aprender de tudo um pouco, e quem sabe, me tornar um desenvolvedor full-stack no futuro. ",
        "aboutmep2":"Em relação a minha experiencia profissional, eu tenho experiencia com integração de equipes; trabalho em equipe e resolução de problemas. Por aproximadamente 2 anos, eu trabalhei com team building e coaching, onde desenvolvi habilidades de liderança e comunicação muito importantes para o meu desenvolvimento profissional.Estou em busca do meu primeiro estágio na área de desenvolvimento, onde poderei aplicar meus conhecimentos e aprender ainda mais.",
        
    }, 
    en: {
        "name-section": "Hello, I am Vinicius Cardoso,",
        "name-sectionweb": "FRONT-END DEVELOPER",
        "paragraph-section": "I am a beginner web developer passionate about creating dynamic and responsive pages.",
        "paragraph-section2": "Feel free to explore my portfolio!",
        "menuHome": "Home",
        "menuAbout": "About Me",
        "menuProjects": "Projects",
        "menuContact": "Contact",
        "Welcome": "WELCOME.",
        "aboutme": "ABOUT ME",
        "aboutmep":"My name is Vinicius, I live in São Paulo, and I am a student of Systems Analysis and Development. Since childhood, I have been passionate about technology and programming, and I am currently specializing in web development with a focus on front-end. I am always seeking to learn and improve my skills with the languages I use. I am still uncertain about the area I want to pursue, but I want to learn a little bit of everything and, who knows, maybe become a full-stack developer in the future.",
        "aboutmep2":"Regarding my professional experience, I have experience with team integration, teamwork, and problem-solving. For approximately 2 years, I worked with team building and coaching, where I developed leadership and communication skills that were very important for my professional growth. I am now looking for my first internship in the development field, where I can apply my knowledge and learn even more.",
        
    },
    es: {
        "name-section": "Hola, soy Vinicius Cardoso,",
        "name-sectionweb": "DESARROLLADOR FRONT-END",
        "paragraph-section": "Soy un desarrollador web principiante apasionado por crear páginas dinámicas y responsivas.",
        "paragraph-section2": "¡Siéntete libre de explorar mi portafolio!",
        "menuHome": "Inicio",
        "menuAbout": "Sobre mí",
        "menuProjects": "Proyectos",
        "menuContact": "Contacto",
        "Welcome": "BIENVENIDO.",
        "aboutme": "SOBRE MI",
        "aboutmep":"Me llamo Vinicius, vivo en São Paulo y soy estudiante de Análisis y Desarrollo de Sistemas. Desde niño he sentido pasión por la tecnología y la programación, y actualmente me estoy especializando en desarrollo web con enfoque en front-end. Siempre estoy buscando aprender y mejorar mis habilidades con los lenguajes que utilizo. Todavía no tengo claro qué área quiero seguir, pero quiero aprender un poco de todo y, quién sabe, tal vez convertirme en un desarrollador full-stack en el futuro.",
        "aboutmep2":"En cuanto a mi experiencia profesional, tengo experiencia en integración de equipos, trabajo en equipo y resolución de problemas. Durante aproximadamente 2 años, trabajé en team building y coaching, donde desarrollé habilidades de liderazgo y comunicación muy importantes para mi desarrollo profesional. Actualmente, busco mi primera pasantía en el área de desarrollo, donde podré aplicar mis conocimientos y aprender aún más.",
    }
};

document.getElementById("langSelect").addEventListener("change", function () {
    const lang = this.value;
    const elements = translations[lang];

    for (let id in elements) {
        document.getElementById(id).textContent = elements[id];
    }
});