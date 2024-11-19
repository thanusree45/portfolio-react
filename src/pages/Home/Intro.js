import React from 'react';

function Intro() {
  return (
    <div className='h-[70vh] bg-primary flex-col items-start justify-center gap-8 py-6'>
      <h1 className='text-white text-3xl sm:text-1xl'>Hello, I'm</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Thanu Sree</h1>
      <h1 className='text-5xl sm:text-2xl text-white font-semibold'>Ramapatruni</h1>
      <p className='text-white w-2/3'>
      I am a dedicated Computer Science student specializing in Data Science, eager to build innovative solutions.
      </p>
      <button className='border-2 border-teritiary text-teritiary px-10 py-4 rounded'>
        Get Started
      </button>
    </div>
  );
}

export default Intro; 
