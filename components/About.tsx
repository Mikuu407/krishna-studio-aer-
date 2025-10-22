
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative w-full aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/400/500?random=2"
                alt="Photographer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">About Our Studio</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Krishna Studio
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Welcome to Krishna Studio! We are a team of passionate wedding photographers with over a decade of experience in turning fleeting moments into timeless treasures. Our style is a blend of fine art and photojournalism, focusing on authentic emotions and beautiful details.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe every couple has a unique story, and our mission is to tell yours with elegance, creativity, and heart. From the grandest gestures to the quietest whispers, we'll be there to capture it all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;