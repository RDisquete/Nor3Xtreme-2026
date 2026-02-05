import React from 'react';
import { motion, Variants } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_COLOR_HEX = '#f2a9c3';

const roseColorStyle = { color: ROSE_COLOR_HEX };
const lightRoseColorStyle = { color: LIGHT_ROSE_COLOR_HEX };
const roseBorderStyleOpacity = { borderColor: `rgba(229, 9, 127, 0.3)` };

const buttonBaseClasses = "inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition duration-300 rounded-lg";
const buttonStyle = { 
    backgroundColor: ROSE_COLOR_HEX, 
    borderColor: ROSE_COLOR_HEX 
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const titleVariants = {
    hidden: { y: 150 },
    visible: { y: 0, transition: { duration: 0.2 } },
};

const Resultados = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden font-sans bg-bg-neutral-900 text-rose-100">
            
            <div className="relative w-full h-screen">
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 object-cover w-full h-full opacity-30"
                src="/RENDER_COMP.mp4"
              >
                Tu navegador no soporta la etiqueta de vídeo.
              </video>
              <div className="absolute inset-0 bg-black/30" />
              <section className="relative z-10 flex flex-col items-center justify-end h-screen p-8 text-center md:p-16">
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                  >
                      <div className="overflow-hidden">
                          <motion.h1
                              className="text-4xl font-black leading-none uppercase font-montserrat xs:text-5xl md:text-6xl lg:text-9xl"
                              style={roseColorStyle}
                              variants={titleVariants}
                              initial="hidden"
                              animate="visible"
                          >
                              Resultados
                          </motion.h1>
                      </div>
                      
                      <motion.h2
                          className="mt-4 text-2xl font-bold uppercase md:text-3xl lg:text-5xl drop-shadow-lg"
                          style={lightRoseColorStyle}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                      >
                          Accede a los resultados de la última edición
                      </motion.h2>
                  </motion.div>
              </section>
            </div>

            <div className="container relative z-10 px-4 py-24 mx-auto space-y-24">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="space-y-24"
                >
                    <motion.section
                        variants={itemVariants}
                        className="relative overflow-hidden border shadow-xl rounded-3xl bg-black/60 md:flex"
                        style={roseBorderStyleOpacity}
                    >
                        <div className="relative md:w-1/2">
                            <img 
                                src="/mosaicodemo25.jpg"
                                alt="Fondo de ciclistas en la meta"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/50" />
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <h2 
                                    className="text-5xl font-extrabold uppercase font-montserrat md:text-7xl"
                                    style={roseColorStyle}
                                >
                                    Edición 2025
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center p-8 md:p-16 md:w-1/2">
                            <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl">
                                Accede a las clasificaciones oficiales de la última edición de la Nor3xtrem. Aquí podrás consultar los tiempos y posiciones de todos los participantes, gestionados por nuestra empresa de cronometraje oficial.
                            </p>
                            <motion.a 
                                href="https://ejemplo.com/resultados-2025" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`self-start mt-4 ${buttonBaseClasses}`}
                                style={buttonStyle}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Ver Resultados
                            </motion.a>
                        </div>
                    </motion.section>

                    <motion.section 
                        variants={itemVariants}
                        className="p-8 text-center border shadow-xl md:p-16 rounded-3xl bg-black/60"
                        style={roseBorderStyleOpacity}
                    >
                        <h2 
                            className="mb-4 text-3xl font-extrabold uppercase font-montserrat md:text-4xl"
                            style={roseColorStyle}
                        >
                            ¡Gracias por participar!
                        </h2>
                        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl">
                            La edición de este año ha sido un éxito gracias al esfuerzo y la pasión de cada uno de vosotros. Esperamos que hayáis disfrutado del recorrido y de la experiencia en Hervás. ¡Nos vemos el año que viene!
                        </p>
                    </motion.section>
                </motion.div>
            </div>
        </div>
    );
};

export default Resultados;