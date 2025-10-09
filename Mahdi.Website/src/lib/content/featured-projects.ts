import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: 'featured robotics projects',
  projects: [
    {
      id: getId(),
      name: 'Gas Leakage & Fire Safety Device',
      description:
        'An IoT safety system that detects gas leakage and abnormal temperature, triggers alarms, and provides real-time monitoring.',
      tasks:
        'Designed sensor circuitry, implemented microcontroller logic, built alarm and notification flow, validated thresholds in real scenarios',
      url: '#',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
      tags: ['IoT', 'Sensors', 'Arduino', 'Safety'],
    },
    {
      id: getId(),
      name: 'SCORPO — Multipurpose Robot',
      description:
        'A multi-functional robot built for navigation, object handling, and task automation with robust mechanical design.',
      tasks:
        'Designed chassis and mechanisms, wrote C/C++ control code, integrated motor drivers and sensor suite',
      url: '#',
      img: 'https://images.unsplash.com/photo-1581092334700-7d89c0e8fa61',
      tags: ['Robotics', 'C/C++', 'Mechanisms'],
    },
    {
      id: getId(),
      name: 'Smart Farming (IoT)',
      description:
        'Automated irrigation and environment monitoring system for agriculture using sensors and microcontrollers.',
      tasks:
        'Implemented sensor fusion, designed PCB, added cloud logging and control for field reliability',
      url: '#',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      tags: ['IoT', 'Automation', 'Agriculture'],
    },
    {
      id: getId(),
      name: 'Home Automation through IoT',
      description:
        'Modular home automation system with device control, safety monitoring, and local failsafes.',
      tasks:
        'Developed firmware and control flows, optimized power usage, implemented device discovery and recovery',
      url: '#',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['IoT', 'Embedded', 'Automation'],
    },
  ],
};

export default featuredProjectsSection;
