import { FaReact, FaNodeJs, FaDatabase, FaWordpress, FaJs } from 'react-icons/fa';

const cardsPortfolio = [
  {
    title: 'Vinotipia',
    description: 'E-commerce de vinos premium con catálogo dinámico, pasarela de pagos segura y panel de administración para gestión de productos y ventas. Diseño elegante y experiencia de usuario optimizada para amantes del vino.',
    image: '/portfolio/vinotipia.png',
    url: 'https://vinotipia.com',
    techs: [
      { name: 'React.js', icon: <FaReact color="#61DBFB" /> },
      { name: 'WordPress', icon: <FaWordpress color="#21759B" /> },
    ],
  },
  {
  title: 'Joycof Make-Up',
  description: 'Sitio web personalizado para una artista del maquillaje profesional, con diseño visual atractivo, enfoque en la identidad de marca, y secciones dinámicas para portfolio, servicios y contacto. Totalmente administrable desde WordPress.',
  image: '/portfolio/Joycof.png',
  url: 'https://joycofmakeup.com/',
  techs: [
    { name: 'WordPress', icon: <FaWordpress color="#21759B" /> },
    { name: 'CSS3', icon: <FaDatabase color="#264de4" /> },
  ],
},
  {
    title: 'NhEstetica',
    description: 'Sitio web profesional para centro de estética, con presentación de servicios, turnos online, galería de resultados y testimonios de clientes. Diseño moderno y enfoque en la confianza y el bienestar.',
    image: '/portfolio/nh.png',
    url: 'http://ugks4ckw4gcoc4g8g000sgcw.31.97.83.15.sslip.io/',
    techs: [
      { name: 'React.js', icon: <FaReact color="#61DBFB" /> },
      { name: 'Node.js', icon: <FaNodeJs color="#3C873A" /> },
      { name: 'MySQL', icon: <FaDatabase color="#00758F" /> },
    ],
  },
  {
    title: 'Sistema Aéreo de Detección Argentino',
    description: 'S.A.D.A nació para optimizar la detección y gestión de avistamientos de aeronaves no autorizadas en el espacio aéreo argentino. Se definieron requerimientos y protocolos seguros, creando una solución robusta y escalable.',
    image: '/portfolio/sada.png',
    techs: [
      { name: 'Node.js', icon: <FaNodeJs color="#3C873A" /> },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
      { name: 'MySQL', icon: <FaDatabase color="#00758F" /> },
      { name: 'Express', icon: <FaDatabase color="#00758F" /> },
    ],
  },
];

export default cardsPortfolio; 