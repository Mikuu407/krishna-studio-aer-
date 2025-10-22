
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Krishna Studio</h2>
        <p className="max-w-md mx-auto mb-8 text-gray-400">
          Wedding Photography for the modern, romantic couple.
        </p>
         <div className="flex justify-center items-center space-x-6 mb-8">
          <a href="https://www.instagram.com/krishna_studio-air" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
           <a href="tel:9580881049" className="text-gray-400 hover:text-white transition duration-300 flex items-center space-x-2">
            <i className="fas fa-phone text-xl"></i>
            <span>9580881049</span>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Krishna Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;