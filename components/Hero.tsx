
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img 
        src="https://picsum.photos/1920/1080?random=1" 
        alt="Wedding couple" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-20 text-center px-4">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
          Capturing Love Stories,
        </h2>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-light">
          One Frame at a Time.
        </p>
        <button 
            onClick={scrollToContact}
            className="mt-8 px-8 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-200 transform hover:scale-105 transition duration-300 ease-in-out">
          Book a Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
