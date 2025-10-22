
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Krishna Studio are artists. They captured our day so perfectly, we cried tears of joy looking through the photos. Every shot was filled with emotion and beauty. We couldn't have asked for more.",
    author: 'Ananya & Rohan',
    location: 'Udaipur, RJ',
  },
  {
    quote: "From our first meeting, we knew we were in good hands. The team made us feel so comfortable and natural in front of the camera. The final gallery exceeded all our expectations!",
    author: 'Meera & Vikram',
    location: 'Goa',
  },
  {
    quote: "The photos are absolutely breathtaking! The photographers have an incredible eye for detail and light. They're professional, fun, and immensely talented. Highly, highly recommend!",
    author: 'Aisha & Sameer',
    location: 'Delhi',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#fdfaf7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Kind Words</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={{fontFamily: "'Playfair Display', serif"}}>What Our Couples Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <i className="fas fa-quote-left text-3xl text-rose-300 mb-4"></i>
              <p className="text-gray-600 italic leading-relaxed mb-6">{testimonial.quote}</p>
              <h4 className="font-bold text-lg text-gray-800">{testimonial.author}</h4>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;