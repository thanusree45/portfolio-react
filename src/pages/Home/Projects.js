import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#fde68a] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedIndex(index)}>
              <h1
                className={`text-xl px-5 ${
                  selectedIndex === index
                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#dac77c5f] py-3 sm:w-40'
                    : 'text-white py-3'
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="flex items-center justify-center gap-10 sm:flex-col">
            <img
              src={projects[selectedIndex].image}
              alt="Project"
              className="h-60 w-72"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-secondary text-2xl">{projects[selectedIndex].title}</h1>
              <p className="text-white text-1xl">{projects[selectedIndex].description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
