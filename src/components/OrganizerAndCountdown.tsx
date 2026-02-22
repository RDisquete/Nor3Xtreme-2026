import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OrganizerAndCountdown = () => {
  const eventDate = new Date('2026-05-10T08:00:00');
  const [timeLeft, setTimeLeft] = useState(eventDate.getTime() - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate.getTime() - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const roseColorStyle = { color: '#e5097f' };
  const roseBorderOpacityStyle = { borderColor: '#e5097f4d' };

  return (
    <motion.section
      className="flex flex-col items-center justify-center px-4 py-8 bg-black bg-opacity-70 md:p-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <motion.a
        href="https://www.facebook.com/ccfckycaceres"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center p-8 transition duration-300 md:flex-row md:space-x-8 md:p-12 group"
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src="/logo fucky.webp"
          alt="Logo del Club Fucky de Cáceres"
          className="w-32 mb-4 md:mb-0 md:w-40"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        />
        <div className="flex flex-col">
          <h3 className="text-xl font-light text-white md:text-2xl">Organizado por:</h3>
          <p
            className="text-3xl font-bold transition-colors duration-300 md:text-4xl"
            style={roseColorStyle}
          >
            C.C Fucky de Cáceres
          </p>
        </div>
      </motion.a>

      <div className="w-full overflow-hidden text-center">
        <h2
          className="mb-12 text-3xl font-extrabold md:text-5xl"
          style={roseColorStyle}
        >
          Próxima Edición en:
        </h2>
        
        <div className="grid grid-cols-2 gap-4 px-4 md:flex md:justify-center md:space-x-4 md:gap-0">
          {[
            { label: 'Días', value: formatNumber(days) },
            { label: 'Horas', value: formatNumber(hours) },
            { label: 'Minutos', value: formatNumber(minutes) },
            { label: 'Segundos', value: formatNumber(seconds) },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-3 transition-transform duration-300 border rounded-xl md:p-4 md:w-40 bg-black/50"
              style={roseBorderOpacityStyle}
              whileHover={{ scale: 1.05, borderColor: '#e5097f' }} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.span
                key={item.value}
                className="text-3xl font-black xs:text-4xl md:text-8xl"
                style={roseColorStyle}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.value}
              </motion.span>
              <span className="mt-2 text-sm font-medium tracking-widest uppercase xs:text-base md:text-xl text-white/90">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OrganizerAndCountdown;