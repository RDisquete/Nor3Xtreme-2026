import React from 'react';
import { motion } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f';
const DARK_ROSE_HEX = '#c3036c';
const LIGHT_PINK_BG = '#fff0f5';
const GRAY_TEXT = '#4b5563';

const SorpresaMaillot: React.FC = () => {
    
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const buttonHover = { 
        scale: 1.05, 
        backgroundColor: DARK_ROSE_HEX 
    };
    
    const titleStyle = { 
        color: ROSE_COLOR_HEX 
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
            className="w-full py-20 overflow-hidden bg-white" 
        >
            <div className="container px-8 mx-auto md:px-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative overflow-hidden rounded-xl h-0 pt-[100%]" 
                        style={{ backgroundColor: LIGHT_PINK_BG }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                            <img
                                src="/malliot.jpg"
                                alt="Maillot X Edición"
                                className="object-contain w-full h-full" 
                            />
                        </div>
                        
                        <p 
                            className="absolute top-0 right-0 px-4 py-1 text-sm font-bold uppercase"
                            style={{ color: ROSE_COLOR_HEX, backgroundColor: LIGHT_PINK_BG }}
                        >
                            ¡Edición Limitada Exclusiva!
                        </p>
                        
                         <p className="absolute bottom-0 right-0 p-4 text-xs font-medium text-gray-500">
                             En colaboración con <strong>MITTO Custom Wear</strong>
                         </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex flex-col pt-4 text-left"
                    >
                        <p className="mb-2 text-sm font-bold uppercase" style={titleStyle}>
                            ¡Edición Limitada Exclusiva!
                        </p>
                        <h2 
                            className="mb-6 text-5xl font-extrabold leading-none uppercase md:text-6xl"
                            style={titleStyle}
                        >
                            MAILLOT <br /> X EDICIÓN
                        </h2>

                        <p className="mb-8 text-base text-gray-700">
                            Hemos diseñado una <strong>"segunda piel"</strong> de máxima calidad para conmemorar la X Edición Nor3xtrem. Un diseño vibrante que encapsula el pulso de la carrera.
                        </p>

                        <div className="pl-4 mb-8 border-l-4" style={{ borderColor: ROSE_COLOR_HEX }}>
                            <p 
                                className="mb-1 text-lg font-extrabold uppercase"
                                style={titleStyle}
                            >
                                ¡ATENCIÓN! SÓLO LOS PRIMEROS
                            </p>
                            <p className="mb-2 text-6xl font-black" style={titleStyle}>
                                500
                            </p>
                            <p className="text-lg font-bold text-gray-700">
                                Lo reciben <strong>TOTALMENTE GRATIS</strong> con su dorsal.
                            </p>
                        </div>
                        
                         <h3 className="mb-2 text-lg font-bold text-gray-800">DETALLES: DISEÑO HEARTBEAT</h3>
                         <p className="mb-6 text-sm text-gray-600">
                             El reverso eleva el perfil de los grandes: La Garganta, Cabezabellosa y Honduras.
                         </p>

                        <p className="mb-4 text-sm text-gray-700">
                            EN COLABORACIÓN CON: <br />
                            <strong>MITTO Custom Wear</strong>
                        </p>

                        <motion.a
                            href="https://www.rockthesport.com/es/evento/2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center w-full px-8 py-3 mt-4 text-lg font-bold text-white transition duration-300 border-2 rounded-lg md:w-auto"
                            style={{ backgroundColor: ROSE_COLOR_HEX, borderColor: ROSE_COLOR_HEX }}
                            whileHover={buttonHover}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Inscripciones 2026
                        </motion.a>
                        
                        <p className="mt-2 text-xs text-gray-500">
                            ¡Las tallas se eligen en el formulario de inscripción!
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default SorpresaMaillot;