import { FaBehance, FaGithub, FaVk } from 'react-icons/fa';

const settings = {
  email: 'lshegay@icloud.com',
  socials: [
    { link: 'https://github.com/lshegay', icon: <FaGithub /> },
    { link: 'https://www.behance.net/shegay', icon: <FaBehance /> },
    { link: 'https://vk.com/korewashegay', icon: <FaVk /> },
  ],
  headerMenu: [
    { name: 'Work', link: '/work' },
    { name: 'Get in touch', link: '/touch' },
  ],
  footerMenu: [
    { link: '/', name: 'Home' },
    { name: 'Work', link: '/work' },
    { name: 'Get in touch', link: '/touch' },
  ],
};

export default settings;
