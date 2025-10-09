'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';
import profile from 'public/profile.jpeg';

const About = () => {
  const { title, img, list } = aboutSection;
  const imgSrc = img?.includes('profile') ? profile : img;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            I'm a robotics enthusiast from Bangladesh working across robotics, automation, and electronics. I design systems that combine sensors, microcontrollers, and solid mechanical design to solve real-world problems.
          </p>
          <p>
            Highlights include being a Conrad Innovator and Global Finalist at the NASA Conrad Challenge (2024), National Champion at the 6th RC National Science Fest (2023), and multiple regional and national awards in science and tech fairs.
          </p>
          <p>
            I enjoy turning complex problems into robust builds—fast iterations, clean wiring, and dependable code. My focus is practical engineering: reliable circuits, clear logic, and hardware that works outside the lab.
          </p>
          <p>
            When I'm not building, I'm teaching robotics, mentoring teams, and exploring how smart automation can improve everyday life.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={imgSrc} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
