import { useState, useCallback } from 'react';
import { GalleryImage } from '../types';

interface UseGalleryProps {
  images: GalleryImage[];
  initialCategory?: string;
}

export const useGallery = ({ images, initialCategory }: UseGalleryProps) => {
  const [category, setCategory] = useState(initialCategory);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = category
    ? images.filter(img => img.category === category)
    : images;

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const previousImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  return {
    currentImage: filteredImages[currentIndex],
    nextImage,
    previousImage,
    setCategory,
    category,
    totalImages: filteredImages.length,
    currentIndex
  };
};