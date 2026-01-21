import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_HEX = '#ff80bf';
const DARK_ROSE_BORDER_HEX = '#73043d';
const MED_ROSE_HEX = '#d40877';
const DARK_ROSE_HEX = '#c3076c'; 
const RED_HEX_SHADOW = '#e11d48'; 

const roseColorStyle = { color: ROSE_COLOR_HEX }; 
const lightRoseColorStyle = { color: LIGHT_ROSE_HEX }; 
const rose100ColorStyle = { color: '#fff0f5' }; 

const darkRoseBorderOpacityStyle = { borderColor: DARK_ROSE_BORDER_HEX + '4d' }; 
const darkRoseBorderOpacityHeavyStyle = { borderColor: DARK_ROSE_BORDER_HEX + '80' }; 

const titleVariants: Variants = {
    hidden: { y: 150 },
    visible: { y: 0, transition: { duration: 0.2 } },
};

const Contacto = () => {
    const [showForm, setShowForm] = useState(false); 

    return (
        <div 
            className="relative w-full min-h-screen overflow-hidden font-sans bg-bg-neutral-900"
            style={rose100ColorStyle}
        >
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
                              variants={titleVariants}
                              initial="hidden"
                              animate="visible"
                              style={roseColorStyle}
                          >
                              Contacto
                          </motion.h1>
                      </div>
                      
                      <motion.h2
                          className="mt-4 text-2xl font-bold uppercase md:text-3xl lg:text-5xl drop-shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          style={lightRoseColorStyle}
                      >
                          Resolvemos tus dudas
                      </motion.h2>
                  </motion.div>
              </section>
            </div>

            <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-24 mx-auto space-y-16">
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-4xl"
                >
                    <div 
                        className="p-8 border shadow-xl md:p-16 rounded-3xl bg-black/60"
                        style={darkRoseBorderOpacityStyle}
                    >
                        <h2 
                            className="mb-12 text-4xl font-extrabold text-center uppercase font-montserrat md:text-5xl"
                            style={roseColorStyle}
                        >
                            Síguenos y contáctanos
                        </h2>
                        <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            
                            <motion.a
                                href="https://www.instagram.com/nor3xtrem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 space-x-4 text-xl font-bold text-white transition duration-300 bg-pink-600 rounded-full shadow-lg hover:bg-pink-700"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(236, 72, 153, 0.5), 0 4px 6px -2px rgba(236, 72, 153, 0.2)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <FaInstagram className="w-6 h-6" />
                                <span>Instagram</span>
                            </motion.a>
                            
                            <motion.a
                                href="https://www.facebook.com/Nor3xtrem.es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 space-x-4 text-xl font-bold text-white transition duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -2px rgba(59, 130, 246, 0.2)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <FaFacebook className="w-6 h-6" />
                                <span>Facebook</span>
                            </motion.a>
                        </div>

                        <p 
                            className="mt-12 text-lg text-center"
                            style={{ color: LIGHT_ROSE_HEX + 'cc'}}
                        >
                            Síguenos para estar al tanto de todas las novedades.
                        </p>
                    </div>
                </motion.div>

                {
                    showForm && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full max-w-4xl"
                        >
                            <div 
                                className="p-8 border shadow-xl md:p-16 rounded-3xl bg-black/60"
                                style={darkRoseBorderOpacityStyle}
                            >
                                <h2 
                                    className="mb-8 text-4xl font-extrabold text-center uppercase font-montserrat md:text-5xl"
                                    style={roseColorStyle}
                                >
                                    Envíanos un mensaje
                                </h2>
                                <form className="max-w-3xl mx-auto space-y-6">
                                    <div>
                                        <label 
                                            htmlFor="nombre" 
                                            className="block mb-2 text-xl font-bold"
                                            style={rose100ColorStyle}
                                        >
                                            Nombre
                                        </label>
                                        <input 
                                            type="text" 
                                            id="nombre" 
                                            name="nombre" 
                                            className="w-full px-4 py-3 text-lg text-white bg-black border rounded-lg focus:outline-none focus:ring-2" 
                                            style={{ 
                                                borderColor: DARK_ROSE_BORDER_HEX + '80', 
                                                '--tw-ring-color': ROSE_COLOR_HEX 
                                            } as React.CSSProperties}
                                        />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="email" 
                                            className="block mb-2 text-xl font-bold"
                                            style={rose100ColorStyle}
                                        >
                                            Email
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            className="w-full px-4 py-3 text-lg text-white bg-black border rounded-lg focus:outline-none focus:ring-2" 
                                            style={{ 
                                                borderColor: DARK_ROSE_BORDER_HEX + '80', 
                                                '--tw-ring-color': ROSE_COLOR_HEX 
                                            } as React.CSSProperties}
                                        />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="mensaje" 
                                            className="block mb-2 text-xl font-bold"
                                            style={rose100ColorStyle}
                                        >
                                            Mensaje
                                        </label>
                                        <textarea 
                                            id="mensaje" 
                                            name="mensaje" 
                                            rows={6}
                                            className="w-full px-4 py-3 text-lg text-white bg-black border rounded-lg focus:outline-none focus:ring-2" 
                                            style={{ 
                                                borderColor: DARK_ROSE_BORDER_HEX + '80', 
                                                '--tw-ring-color': ROSE_COLOR_HEX 
                                            } as React.CSSProperties}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <motion.button 
                                            type="submit" 
                                            className="inline-flex items-center px-12 py-4 space-x-4 text-xl font-bold text-white transition duration-300 rounded-full shadow-lg hover:bg-[#c3076c]"
                                            style={{ backgroundColor: MED_ROSE_HEX }}
                                            whileHover={{ scale: 1.05, boxShadow: `0 10px 15px -3px ${RED_HEX_SHADOW}80, 0 4px 6px -2px ${RED_HEX_SHADOW}33` }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            Enviar Mensaje
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )
                }

            </div>
        </div>
    );
};

export default Contacto;