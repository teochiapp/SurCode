// Datos de las personas del equipo
export const people = [
  {
    name: "Tomás Cejas",
    surname: "Toto",
    description: "Fullstack Developer",
    role: "Fullstack",
    image: "team/ROMA.png",
    fullImage: "team/ROMA.png",
    skills: ["Node.js", "Docker", "MySQL", "React"],
    social: {
      github: "https://github.com/tomascejas",
      linkedin: "https://linkedin.com/in/tomascejas",
      instagram: "https://instagram.com/tomascejas"
    },
    bio: "Desarrollador apasionado por crear experiencias digitales excepcionales. Especializado en tecnologías modernas y diseño centrado en el usuario.",
    stats: {
      experience: "2+",
      projects: "5+"
    }
  },
  {
    name: "Teo Chiappero",
    surname: "Teo",
    description: "Fullstack Developer",
    role: "Frontend",
    image: "team/Teo.png",
    fullImage: "team/TeoFull.jpg",
    skills: ["React", "JavaScript", "CSS", "Wordpress"],
    social: {
      github: "https://github.com/teochiappero",
      linkedin: "https://linkedin.com/in/teochiappero",
      instagram: "https://instagram.com/teochiappero"
    },
    bio: "Desarrollador apasionado por crear experiencias digitales excepcionales. Especializado en tecnologías modernas y diseño centrado en el usuario.",
    stats: {
      experience: "3+",
      projects: "10+"
    }
  },
  {
    name: "Jacky Vazquez",
    surname: "Jacky",
    description: "UX/UI Designer",
    role: "UX/UI",
    image: "team/Jacky.png",
    fullImage: "team/Jacky.png",
    skills: ["Figma", "Illustrator", "Photoshop", "Prototyping"],
    social: {
      github: "https://github.com/jacky",
      linkedin: "https://linkedin.com/in/jacky",
      instagram: "https://instagram.com/jacky"
    },
    bio: "Diseñadora apasionada por crear experiencias digitales excepcionales. Especializada en tecnologías modernas y diseño centrado en el usuario.",
    stats: {
      experience: "4+",
      projects: "60+"
    }
  },
  {
    name: "Faustina",
    surname: "Lud",
    description: "UX/UI Designer",
    role: "UX/UI",
    image: "team/lu.png",
    fullImage: "team/lu.png",
    skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
    social: {
      github: "https://github.com/faustina",
      linkedin: "https://linkedin.com/in/faustina",
      instagram: "https://instagram.com/faustina"
    },
    bio: "Diseñadora apasionada por crear experiencias digitales excepcionales. Especializada en tecnologías modernas y diseño centrado en el usuario.",
    stats: {
      experience: "3+",
      projects: "45+"
    }
  }
];

// Skills para el marquee
export const skills = [
  "React", "Node.js", "Docker", "MySQL",
  "Wordpress", "Figma", "Illustrator", "Photoshop"
];

// Configuración de roles y sus iconos
export const roleConfig = {
  frontend: {
    icon: "FaCode",
    level: "Mid",
    color: "var(--secondary-color)"
  },
  fullstack: {
    icon: "FaLaptopCode", 
    level: "Senior",
    color: "var(--primary-cyan)"
  },
  "ux/ui": {
    icon: "FaPalette",
    level: "Expert", 
    color: "var(--accent-color)"
  },
  designer: {
    icon: "FaPalette",
    level: "Expert",
    color: "var(--accent-color)"
  }
};

// Configuración de estadísticas
export const statsConfig = {
  experience: {
    label: "Años de Experiencia",
    icon: "FaClock"
  },
  projects: {
    label: "Proyectos Completados", 
    icon: "FaProjectDiagram"
  },
  satisfaction: {
    label: "Satisfacción del Cliente",
    icon: "FaHeart"
  }
};

// Configuración de colores para gradientes
export const gradientColors = [
  "var(--text-color)", 
  "var(--primary-color)", 
  "var(--primary-cyan)", 
  "var(--accent-color)", 
  "var(--text-color)"
];

// Configuración de animación
export const animationConfig = {
  speed: 4,
  showBorder: false
};

// Funciones helper
export const getRoleConfig = (role) => {
  const normalizedRole = role?.toLowerCase();
  return roleConfig[normalizedRole] || roleConfig.frontend;
};

export const getPersonByIndex = (index) => {
  return people[index] || null;
};

export const getTotalPeople = () => {
  return people.length;
};

export const getPersonStats = (person) => {
  return person.stats || {
    experience: "3+",
    projects: "50+", 
    satisfaction: "100%"
  };
};

export const getPersonBio = (person) => {
  return person.bio || "Desarrollador apasionado por crear experiencias digitales excepcionales. Especializado en tecnologías modernas y diseño centrado en el usuario.";
};

export const getPersonSkills = (person) => {
  return person.skills || [];
};

export const getPersonSocial = (person) => {
  return person.social || {};
};