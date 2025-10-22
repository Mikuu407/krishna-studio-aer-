
import React, { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageUrl}
          alt="Enlarged view"
          className="object-contain w-full h-full"
        />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 -mt-4 -mr-4 md:mt-0 md:mr-0 bg-white text-gray-800 rounded-full h-10 w-10 flex items-center justify-center text-2xl shadow-lg hover:bg-gray-200 transition duration-300"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
