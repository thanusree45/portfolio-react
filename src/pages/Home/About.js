import React from 'react';
import SectionTitle from '../../components/SectionTitle';

function About() {
  const skills = {
    Frontend: 'HTML, CSS, Bootstrap, JavaScript, React.js',
    Backend: 'Python, Express, Node.js',
    Databases: 'SQLite',
    'Other skills': 'MongoDB',
  };

  return (
    <div>
      <SectionTitle title="About Me" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[70vh] w-1/3 sm:w-full'>
          <img
            src="/assets/thanusree pic.jpg"  // Correct image path (make sure the extension is included)
            alt="Thanu Sree"
            style={{ height: '200px' }}
          />
        </div>
        <div className='flex flex-col gap-5 w-2/3 sm:w-full'>
          <p className='text-white'>
          I am a Computer Science and Data Science student currently pursuing a Bachelor of Technology in Computer Science Engineering (Data Science) at Anil Neerukonda Institute of Technology and Sciences. I have a solid foundation in full-stack development and a passion for problem-solving, with a keen interest in learning and adapting to new technologies.
          </p>
          <p className='text-white'>
          I enjoy collaborating in team environments and contributing to innovative projects. My proactive mindset and dedication to continuous learning drive me to find creative solutions to real-world challenges, aiming to make a positive impact in the tech industry.
          </p>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='text-teritiary text-xl'>
          Here are a few tech skills I worked on:
        </h1>
        <div className='flex flex-wrap gap-10 mt-5'>
          <div className='border border-teritiary py-3 px-10 w-[250px]'>
            <h2 className='text-teritiary font-semibold'>Frontend</h2>
            <p className='text-white'>{skills.Frontend}</p>
          </div>

          <div className='border border-teritiary py-3 px-10 w-[250px]'>
            <h2 className='text-teritiary font-semibold'>Backend</h2>
            <p className='text-white'>{skills.Backend}</p>
          </div>

          <div className='border border-teritiary py-3 px-10 w-[250px]'>
            <h2 className='text-teritiary font-semibold'>Databases</h2>
            <p className='text-white'>{skills.Databases}</p>
          </div>

          <div className='border border-teritiary py-3 px-10 w-[250px]'>
            <h2 className='text-teritiary font-semibold'>Other Skills</h2>
            <p className='text-white'>{skills['Other skills']}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
