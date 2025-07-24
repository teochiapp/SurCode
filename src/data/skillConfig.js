import { FaReact, FaNodeJs, FaDocker, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiMysql, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';

export const SKILL_CONFIG = {
  'react': {
    icon: FaReact,
    color: '#61DAFB',
    label: 'React'
  },
  'node.js': {
    icon: FaNodeJs,
    color: '#339933',
    label: 'Node.js'
  },
  'docker': {
    icon: FaDocker,
    color: '#2496ED',
    label: 'Docker'
  },
  'mysql': {
    icon: SiMysql,
    color: '#4479A1',
    label: 'MySQL'
  },
  'wordpress': {
    icon: FaWordpress,
    color: '#21759B',
    label: 'WordPress'
  },
  'figma': {
    icon: FaFigma,
    color: '#F24E1E',
    label: 'Figma'
  },
  'illustrator': {
    icon: SiAdobeillustrator,
    color: '#FF9A00',
    label: 'Illustrator'
  },
  'photoshop': {
    icon: SiAdobephotoshop,
    color: '#31A8FF',
    label: 'Photoshop'
  }
};

export const getSkillConfig = (skill) => {
  const skillKey = skill.toLowerCase();
  return SKILL_CONFIG[skillKey] || null;
}; 