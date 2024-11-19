import React from 'react'
import SectionTitle from '../../components/SectionTitle';

function Contact() {
  // Static contact data
  const contact = {
    phone: "9398306907",
    email: "thanur454@email.com",
    location: "Visakhapatnam, India",
    github: "https://github.com/thanusree45",
  };

  return (
    <div>
        <SectionTitle title="Contact" />

        <div className="flex sm:flex-col items-center justify-between">
            <div className='flex flex-col gap-1'>
                <p className='text-teritiary'>{'{'}</p>
                {Object.keys(contact).map((key) => (
                    <p className='ml-5' key={key}>
                        <span className='text-teritiary'>{key}:</span>{" "}
                        <span className='text-teritiary'>{contact[key]}</span>
                    </p>
                ))}
                <p className='text-white'>{'}'}</p>
            </div>
            <div className='h-[300px] sm:flex-col'>
                <lottie-player 
                    src="https://lottie.host/eb922eed-2046-44c4-94f6-e76b7cb77f96/Ue8gnOJT7H.json"
                    background="##fff"
                    speed="1" 
                    autoplay
                ></lottie-player>
            </div>
        </div>
    </div>
  )
}

export default Contact;
