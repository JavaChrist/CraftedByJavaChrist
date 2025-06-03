import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  projectName,
  isOpen,
  onClose,
  initialIndex = 0
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [fanMode, setFanMode] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      } else if (e.key === ' ') {
        e.preventDefault();
        setFanMode(!fanMode);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, images.length, fanMode]);

  if (!isOpen) return null;

  const nextImage = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const getImagePosition = (index: number) => {
    if (!fanMode) {
      // Mode galerie simple - images plus centrées
      return {
        x: (index - selectedIndex) * 120,
        y: 0,
        rotate: 0,
        scale: index === selectedIndex ? 1.1 : 0.9,
        zIndex: index === selectedIndex ? 10 : 1,
        opacity: Math.abs(index - selectedIndex) <= 1 ? 1 : 0.4
      };
    }

    // Mode éventail amélioré
    const totalImages = images.length;
    const centerIndex = Math.floor(totalImages / 2);
    const maxRotation = 12; // Rotation réduite pour plus de lisibilité
    const maxSpread = 250; // Écartement augmenté

    const relativeIndex = index - centerIndex;
    const rotation = (relativeIndex / centerIndex) * maxRotation;
    const xOffset = relativeIndex * (maxSpread / Math.max(totalImages - 1, 1));
    const yOffset = Math.abs(relativeIndex) * 15; // Décalage vertical réduit

    return {
      x: xOffset,
      y: yOffset,
      rotate: rotation,
      scale: index === selectedIndex ? 1.2 : 1.0, // Image sélectionnée plus grande
      zIndex: index === selectedIndex ? 10 : totalImages - Math.abs(relativeIndex),
      opacity: 1
    };
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
          <div className="text-white">
            <h3 className="text-xl font-semibold">{projectName}</h3>
            <p className="text-gray-300 text-sm">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFanMode(!fanMode);
              }}
              className="text-white hover:text-gray-300 transition-colors text-sm bg-black/50 px-3 py-1 rounded"
            >
              {fanMode ? '📊 Galerie' : '🎴 Éventail'}
            </button>

            <button
              onClick={onClose}
              className="text-white hover:text-red-400 transition-colors text-2xl"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Instructions améliorées */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-gray-300 text-sm z-20">
          <p>
            ← → Navigation • Espace: Changer de mode • Clic: Sélectionner • Échap: Fermer
          </p>
        </div>

        {/* Images Container */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((image, index) => {
            const position = getImagePosition(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={position}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                className="absolute cursor-pointer"
                style={{ zIndex: position.zIndex }}
                onClick={() => setSelectedIndex(index)}
              >
                <motion.img
                  src={image}
                  alt={`${projectName} - Image ${index + 1}`}
                  className="max-w-md max-h-[450px] md:max-w-2xl md:max-h-[600px] object-contain rounded-lg shadow-2xl"
                  whileHover={{ scale: fanMode ? 1.05 : 1.02 }}
                  transition={{ duration: 0.2 }}
                  loading="lazy"
                />

                {/* Indicateur d'image sélectionnée */}
                {index === selectedIndex && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows - Disponible dans tous les modes */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-4xl z-20 bg-black/60 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:bg-black/80 hover:scale-110"
          aria-label="Image précédente"
        >
          ←
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-4xl z-20 bg-black/60 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:bg-black/80 hover:scale-110"
          aria-label="Image suivante"
        >
          →
        </button>

        {/* Dots indicator amélioré */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all transform ${index === selectedIndex
                ? 'bg-white scale-125 ring-2 ring-blue-400'
                : 'bg-white/60 hover:bg-white/90 hover:scale-110'
                }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Compteur d'images visible */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium z-20">
          Image {selectedIndex + 1} sur {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGallery; 