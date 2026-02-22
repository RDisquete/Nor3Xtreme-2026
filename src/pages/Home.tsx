import React from 'react';
import { motion } from 'framer-motion';
import Sponsors from '../components/Sponsors';
import Recorrido from '../components/Recorrido';
import OrganizerAndCountdown from '../components/OrganizerAndCountdown';
import DynamicPhrase from '../components/DynamicPhrase';
import Highlights from '../components/Highlights';
import ContactCTA from '../components/ContactCTA';
import DatosCarrera from '../components/DatosCarrera';
import SorpresaMaillot from '../components/SorpresaMaillot';

const ROSE_COLOR_HEX = '#e5097f'; 
const ROSE_100_HEX = '#fff0f5'; 
const DARK_ROSE_HEX = '#c3076c'; 
const WHITE_GRAY_HEX = '#a0a0a0'; 


const IMAGEN_ENCIMA_URL = '/logo inicio.webp'; 

const Home: React.FC = () => {
  const titleVariants = {
    hidden: { y: 150 },
    visible: { y: 0, transition: { duration: 0.2 } },
  };

  const buttonStyle = {
    backgroundColor: ROSE_COLOR_HEX,
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.3s, transform 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div 
        className="relative w-full min-h-screen font-sans bg-black"
        style={{ color: ROSE_100_HEX }}
    >
      
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 z-0 object-cover w-full h-full opacity-20"
        src="/RENDER_COMP.mp4"
      >
        Tu navegador no soporta la etiqueta de vídeo.
      </video>

      <div className="relative z-10">
        
        <section className="flex flex-col items-center justify-center h-screen p-8 space-y-8 text-center md:p-16">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="flex justify-center"
            >
                <img
                    src={IMAGEN_ENCIMA_URL}
                    alt="Logo de Nor3xtreme"
                    className="w-auto h-72 opacity-100 md:h-80 lg:h-[30rem] max-w-full" 
                />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-4"
            >
              <div className="overflow-hidden">
                    <motion.h1
                        className="text-4xl font-bold leading-none uppercase font-montserrat xs:text-5xl md:text-6xl lg:text-9xl"
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* 2. text-gray-500 y text-rose-500 sustituidos */}
                        <span style={{ color: WHITE_GRAY_HEX }}>Nor</span>
                        <span style={{ color: ROSE_COLOR_HEX }}>3xt</span>
                        <span style={{ color: WHITE_GRAY_HEX }}>rem</span>
                    </motion.h1>
                </div>

                <motion.h2
                    className="mt-4 text-2xl font-bold uppercase md:text-3xl lg:text-5xl drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    style={{ color: ROSE_COLOR_HEX }}
                >
                X Edición
                </motion.h2>

                <motion.a
                   href="https://www.rockthesport.com/es/evento/2026"
                   target="_blank"
                   rel="noopener noreferrer"
                    className="mt-8 transition-colors duration-300"
                    style={buttonStyle}
                    whileHover={{ scale: 1.1, y: -5, backgroundColor: DARK_ROSE_HEX }} 
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    Inscripciones 2026
                </motion.a>
            </motion.div>
        </section>

        <OrganizerAndCountdown />

        <DatosCarrera />
        
        <Recorrido />
        <SorpresaMaillot />
        <Highlights />
         
        <DynamicPhrase />

        <Sponsors />
         
        <ContactCTA />
      </div>
    </div>
  );
};

export default Home;