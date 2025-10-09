import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Core interests & tools:',
    items: [
      'Robotics & Automation',
      'Electronics',
      'C/C++ coding',
      'PCB design',
      'Soldering',
      'CAD & Simulation',
      'IoT & Home Automation',
      'Project Management',
    ],
  },
  img: '/profile.jpeg',
};
