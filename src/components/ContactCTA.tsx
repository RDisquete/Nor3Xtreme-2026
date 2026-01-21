import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  const ROSE_COLOR_HEX = '#e5097f';
  const roseColorStyle = { color: ROSE_COLOR_HEX };
  const roseBorderStyle = { borderColor: ROSE_COLOR_HEX };

  return (
    <div className="relative px-4 py-16 bg-black md:px-16 md:py-24">
      <img
        src="/logo nortxtreme.png"
        alt="Logo Nor3xtrem"
        className="absolute inset-0 object-cover object-center w-full h-full opacity-5"
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.img
          src="/logo nortxtreme.png"
          alt="Logo Nor3xtrem"
          className="w-auto mb-6 h-28 md:h-36"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.h2
          className="text-3xl font-bold font-montserrat md:text-5xl"
          style={roseColorStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ¿Tienes alguna pregunta?
        </motion.h2>

        <motion.p
          className="max-w-2xl mt-4 text-lg font-light text-white md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Si quieres saber más sobre la marcha, inscripciones o colaborar con nosotros, no dudes en contactarnos.
        </motion.p>
        
        <motion.a
          href="/contacto"
          className="px-6 py-2 mt-8 transition-colors duration-300 border-2 rounded-xl" 
          style={{ borderColor: ROSE_COLOR_HEX, color: ROSE_COLOR_HEX, backgroundColor: 'transparent' }}
          
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            backgroundColor: ROSE_COLOR_HEX, 
            color: '#FFFFFF', 
          }}
          
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Contáctanos
        </motion.a>
      </div>
    </div>
  );
};

export default ContactCTA;