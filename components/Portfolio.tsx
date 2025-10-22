
import React, { useState, useMemo } from 'react';
import type { PortfolioImage } from '../types';

const imagesData: PortfolioImage[] = [
  { id: 1, src: 'https://picsum.photos/800/600?random=10', alt: 'Wedding ceremony', category: 'Ceremony' },
  { id: 2, src: 'https://picsum.photos/600/800?random=11', alt: 'Bride getting ready', category: 'Details' },
  { id: 3, src: 'https://picsum.photos/800/600?random=12', alt: 'Couple portrait', category: 'Portraits' },
  { id: 4, src: 'https://picsum.photos/800/600?random=13', alt: 'Wedding reception', category: 'Reception' },
  { id: 5, src: 'https://picsum.photos/600/800?random=14', alt: 'Groom portrait', category: 'Portraits' },
  { id: 6, src: 'https://picsum.photos/800/600?random=15', alt: 'Wedding cake', category: 'Details' },
  { id: 7, src: 'https://picsum.photos/800/600?random=16', alt: 'First dance', category: 'Reception' },
  { id: 8, src: 'https://picsum.photos/600/800?random=17', alt: 'Bouquet toss', category: 'Reception' },
  { id: 9, src: 'https://picsum.photos/800/600?random=18', alt: 'Vows exchange', category: 'Ceremony' },
  { id: 10, src: 'https://picsum.photos/600/800?random=19', alt: 'Bridal party', category: 'Portraits' },
  { id: 11, src: 'https://picsum.photos/800/600?random=20', alt: 'Rings detail shot', category: 'Details' },
  { id: 12, src: 'https://picsum.photos/800/600?random=21', alt: 'Couple walking away', category: 'Portraits' },
];

const categories = ['All', 'Portraits', 'Ceremony', 'Reception', 'Details'];

interface PortfolioProps {
  onImageClick: (imageUrl: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return imagesData;
    }
    return imagesData.filter(image => image.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#fdfaf7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Our Work</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={{fontFamily: "'Playfair Display', serif"}}>Gallery of Dreams</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition duration-300 ease-in-out ${
                activeCategory === category
                  ? 'bg-gray-800 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map(image => (
            <div key={image.id} className="overflow-hidden rounded-lg break-inside-avoid cursor-pointer group" onClick={() => onImageClick(image.src)}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
