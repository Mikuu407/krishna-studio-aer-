
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-[#fdfaf7] text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio onImageClick={openModal} />
        <Packages />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
