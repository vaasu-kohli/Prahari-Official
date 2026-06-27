import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageModalProps {
  images: { src: string; label: string }[];
  initialIndex: number;
  onClose: () => void;
}

export function ProductImageModal({ images, initialIndex, onClose }: ProductImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setScale(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setScale(1);
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 4));
  const zoomOut = () => setScale((s) => Math.max(s - 0.5, 1));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === '=' || e.key === '+') zoomIn();
      if (e.key === '-') zoomOut();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, images.length]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
        onWheel={handleWheel}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white z-50">
          <button onClick={(e) => { e.stopPropagation(); zoomOut(); }} className="hover:text-blue-400 disabled:opacity-50" disabled={scale <= 1}>
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="font-mono text-sm">{Math.round(scale * 100)}%</span>
          <button onClick={(e) => { e.stopPropagation(); zoomIn(); }} className="hover:text-blue-400 disabled:opacity-50" disabled={scale >= 4}>
            <ZoomIn className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="w-full h-[90vh] flex items-center justify-center overflow-hidden" ref={constraintsRef} onClick={(e) => e.stopPropagation()}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].label}
            className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            drag={scale > 1}
            dragConstraints={constraintsRef}
            dragElastic={0}
          />
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm z-50">
          {images[currentIndex].label}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
