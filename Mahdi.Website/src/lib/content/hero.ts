import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Mahdi Bin Ferdaus.',
  tagline: 'Robotics enthusiast focused on automation and electronics.',
  description:
    'I design and build robots, IoT systems, and safety devices—turning ideas into reliable hardware backed by clean code.',
  specialText: 'Conrad Innovator — NASA Conrad Challenge Global Finalist (2024)',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
