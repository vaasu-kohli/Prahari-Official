import { motion } from 'motion/react';
import React, { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.21, 1.11, 0.81, 0.99], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
