import React from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURACIÓN DE COLORES ---
const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_COLOR_HEX = '#f2a9c3'; 
const BASE_TEXT_COLOR = '#f3f4f6'; 

const roseColorStyle = { color: ROSE_COLOR_HEX };
const lightRoseColorStyle = { color: LIGHT_ROSE_COLOR_HEX };
const roseBorderStyle: React.CSSProperties = { borderColor: ROSE_COLOR_HEX };
const textBaseColor70 = { color: 'rgba(243, 244, 246, 0.7)' }; 
const textBaseColor80 = { color: 'rgba(243, 244, 246, 0.8)' }; 
const roseBorder20 = { borderColor: 'rgba(229, 9, 127, 0.2)' }; 

const btnDownloadStyle: React.CSSProperties = {
  backgroundColor: ROSE_COLOR_HEX,
  color: '#fff',
  display: 'inline-block',
  marginTop: '20px',
  padding: '12px 24px',
  borderRadius: '8px',
  fontWeight: 'bold',
  textTransform: 'uppercase', 
  fontSize: '0.875rem',
  letterSpacing: '1px',
  cursor: 'pointer',
  border: 'none',
  textAlign: 'center'
};

const DatosCarrera = () => {
  const ARCHIVO_TRACK_LARGO = "/ae0334ed-d813-4427-89af-48beaa1497f7.gpx"; 
  const ARCHIVO_TRACK_CORTO = "/51960bd3-2da9-4cb5-8199-69108c0c340b.gpx";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="container px-8 py-24 mx-auto text-center">
      <motion.h2
        className="text-4xl font-black uppercase font-montserrat md:text-6xl"
        style={roseColorStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Los Números del Desafío 2026
      </motion.h2>

      <motion.div
        className="flex flex-col items-stretch justify-center mt-16 space-y-12 md:flex-row md:space-y-0 md:space-x-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="flex flex-col justify-between flex-1 p-6 bg-black/50 rounded-xl" 
          style={{ ...roseBorderStyle, borderWidth: 4, borderStyle: 'solid' }}
          variants={itemVariants}
        >
          <div>
            <h3 className="text-4xl font-black uppercase font-montserrat md:text-5xl" style={roseColorStyle}>
              Nor3xtrem Ruta Larga
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase" style={lightRoseColorStyle}>
              Cajón 1 (Sprint) | Cajón 2 (Clásica)
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6 text-left">
              <div>
                <p className="text-2xl font-black" style={textBaseColor70}>Distancia</p>
                <h4 className="text-5xl font-black font-montserrat" style={roseColorStyle}>143 km</h4>
              </div>
              <div>
                <p className="text-2xl font-black" style={textBaseColor70}>Desnivel</p>
                <h4 className="text-5xl font-black font-montserrat" style={roseColorStyle}>2860 D+</h4>
              </div>
            </div>
          </div>

          <motion.a 
            href={ARCHIVO_TRACK_LARGO} 
            download
            style={btnDownloadStyle}
            whileHover={{ scale: 1.05, backgroundColor: '#ff1a9b' }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar Track Largo
          </motion.a>
        </motion.div>

        <motion.div 
          className="flex flex-col justify-between flex-1 p-6 bg-black/50 rounded-xl" 
          style={{ ...roseBorderStyle, borderWidth: 4, borderStyle: 'solid' }}
          variants={itemVariants}
        >
          <div>
            <h3 className="text-4xl font-black uppercase font-montserrat md:text-5xl" style={roseColorStyle}>
              Nor3xtrem Ruta Corta
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase" style={lightRoseColorStyle}>
              Cajón 3 (Cicloturismo)
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6 text-left">
              <div>
                <p className="text-2xl font-black" style={textBaseColor70}>Distancia</p>
                <h4 className="text-5xl font-black font-montserrat" style={roseColorStyle}>115 km</h4>
              </div>
              <div>
                <p className="text-2xl font-black" style={textBaseColor70}>Desnivel</p>
                <h4 className="text-5xl font-black font-montserrat" style={roseColorStyle}>2100 D+</h4>
              </div>
            </div>
          </div>

          <motion.a 
            href={ARCHIVO_TRACK_CORTO} 
            download
            style={btnDownloadStyle}
            whileHover={{ scale: 1.05, backgroundColor: '#ff1a9b' }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar Track Corto
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-16 space-y-8 md:flex-row md:space-y-0 md:space-x-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="flex-1 md:border-r md:pr-8" style={roseBorder20} variants={itemVariants}>
          <h3 className="text-4xl font-black font-montserrat" style={roseColorStyle}>3 Cápsulas</h3>
          <p className="mt-2 text-lg md:text-xl" style={{ color: BASE_TEXT_COLOR }}>
            Grupos de seguridad con <strong>coche de cabeza</strong> y motos bandera.
          </p>
        </motion.div>

        <motion.div className="flex-1 md:border-r md:pr-8" style={roseBorder20} variants={itemVariants}>
          <h3 className="text-4xl font-black font-montserrat" style={roseColorStyle}>Trofeo Montaña</h3>
          <p className="mt-2 text-lg md:text-xl" style={{ color: BASE_TEXT_COLOR }}>
            Segmento cronometrado exclusivo en el <strong>Puerto de Honduras</strong>.
          </p>
        </motion.div>

        <motion.div className="flex-1" variants={itemVariants}>
          <h3 className="text-4xl font-black font-montserrat" style={roseColorStyle}>10 de Mayo</h3>
          <p className="mt-2 text-lg md:text-xl" style={{ color: BASE_TEXT_COLOR }}>
            Salida oficial en la Avenida de España, <strong>Hervás</strong>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DatosCarrera;