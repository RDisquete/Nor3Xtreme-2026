import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const phrases = [
  "Donde el asfalto se vuelve leyenda.",
  "La montaña te espera.",
  "Cada pedalada cuenta.",
  "Pedalea, sufre, sonríe.",
  "Unidos por la bicicleta.",
  "La pasión nos mueve.",
  "Más que un trofeo, una experiencia.",
  "Tu historia comienza aquí.",
];

const DynamicPhrase = () => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  }, []);

  if (!phrase) return null;

  return (
    <motion.div
      className="p-8 text-center bg-black bg-opacity-70 md:p-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="text-sm italic font-light text-rose-100 md:text-base">
        — {phrase}
      </p>
    </motion.div>
  );
};

export default DynamicPhrase;