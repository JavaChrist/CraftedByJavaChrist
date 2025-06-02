import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import ImageCarousel from './ImageCarousel';
import ImageGallery from './ImageGallery';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number = 0) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
      >
        {/* Images Carousel ou Icône */}
        {project.images && project.images.length > 0 ? (
          <div className="mb-4">
            <ImageCarousel
              images={project.images}
              projectName={project.name}
              onImageClick={handleImageClick}
            />
            {project.status && (
              <div className="flex justify-end mt-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === 'Terminé'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                    }`}
                >
                  {project.status}
                </span>
              </div>
            )}

            {/* Indication de clic */}
            <div className="text-center mt-2">
              <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                🎴 Cliquez pour voir en éventail
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-start justify-between mb-4">
            <div className="text-4xl mb-2">{project.image}</div>
            {project.status && (
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === 'Terminé'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
                  }`}
              >
                {project.status}
              </span>
            )}
          </div>
        )}

        {/* Titre */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Stack technique */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {project.linkDemo && project.linkDemo !== '#' && (
            <a
              href={project.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Voir le projet
            </a>
          )}
          {project.linkCode && project.linkCode !== '#' && (
            <a
              href={project.linkCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Code source
            </a>
          )}
        </div>
      </motion.div>

      {/* Galerie en éventail */}
      {project.images && project.images.length > 0 && (
        <ImageGallery
          images={project.images}
          projectName={project.name}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialIndex={selectedImageIndex}
        />
      )}
    </>
  );
};

export default ProjectCard; 