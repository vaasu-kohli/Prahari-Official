import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Mail, Phone, Link as LinkIcon, FileText, X } from 'lucide-react';

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[90]" ref={containerRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="p-4 bg-gray-50 border-b border-gray-100">
              <h4 className="font-semibold text-gray-900">Get in Touch</h4>
              <p className="text-xs text-gray-500 mt-1">We typically reply within 24 hours.</p>
            </div>
            <div className="p-2 flex flex-col gap-1">
              <a href="mailto:vasudeepkohli@gmail.com" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-sm text-gray-700 font-medium">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-lg"><Mail className="w-4 h-4" /></div>
                Email Us
              </a>
              <a href="tel:+917780987246" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-sm text-gray-700 font-medium">
                <div className="bg-green-50 text-green-600 p-2 rounded-lg"><Phone className="w-4 h-4" /></div>
                Phone Call
              </a>
              <a href="https://wa.me/917780987246" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-sm text-gray-700 font-medium">
                <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg"><MessageCircle className="w-4 h-4" /></div>
                WhatsApp
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-sm text-gray-700 font-medium">
                <div className="bg-blue-50 text-blue-700 p-2 rounded-lg"><LinkIcon className="w-4 h-4" /></div>
                LinkedIn
              </a>
              <a href="/PRAHARI_Brochure_Final.pdf" download className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-sm text-gray-700 font-medium">
                <div className="bg-gray-100 text-gray-600 p-2 rounded-lg"><FileText className="w-4 h-4" /></div>
                Download Brochure
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Contact options"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
}
