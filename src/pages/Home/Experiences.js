import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { experiences } from '../../resources/experiences';

function Experiences() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <div>
      
      <SectionTitle title="Experience" />
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#fde68a] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
        {experiences.map((experience, index) => (
          <div key={index} onClick={() => {
            setselectedItemIndex(index);
          }}
          className='cursor-pointer'
        >
            <h1 className={`text-xl px-5
                ${selectedItemIndex === index
                 ? 'text-teritiary border-teritiary border-l-4 -ml-[3px] bg-[#dac77c5f] py-3 sm:w-40'
                 : 'text-white py-3'} `}>{experience.period}</h1>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-5'>
        <h1 className='text-secondary text-2xl'>{experiences[selectedItemIndex].title}</h1>
        <h1 className='text-teritiary text-2xl'>{experiences[selectedItemIndex].company}</h1>
        <p className='text-white'>
            {experiences[selectedItemIndex].description}
        </p>
      </div>
    </div>
    </div>
  );
}

export default Experiences;
