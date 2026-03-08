import React from 'react';
import { motion } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f';
const BASE_TEXT_COLOR = '#f3f4f6'; 

const roseColorStyle = { color: ROSE_COLOR_HEX };
const baseTextColorStyle = { color: BASE_TEXT_COLOR };
const roseBorderStyle = { borderColor: ROSE_COLOR_HEX };
const roseBg10 = { backgroundColor: 'rgba(229, 9, 127, 0.1)' }; 
const buttonHoverColor = '#c026d3'; 

const RecorridoMobile = () => {
    const mosaicItems = [
        { src: '/mosaicodemo1.webp', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo2.webp', className: '', isColor: true },
        { src: '/mosaicodemo3.webp', className: 'col-span-3 row-span-2', isColor: false },
        { src: '/mosaicodemo4.webp', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo5.webp', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo6.webp', className: 'col-span-3', isColor: false },
        { src: '/mosaicodemo7.webp', className: 'col-span-2 row-span-2', isColor: true },
        { src: '/mosaicodemo8.webp', className: '', isColor: false },
        { src: '/mosaicodemo9.webp', className: 'col-span-4', isColor: false },
        { src: '/mosaicodemo10.webp', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo11.webp', className: '', isColor: true },
        { src: '/mosaicodemo12.webp', className: 'col-span-2 row-span-3', isColor: false },
        { src: '/mosaicodemo13.webp', className: 'col-span-3', isColor: false },
        { src: '/mosaicodemo14.webp', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo15.webp', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo16.webp', className: '', isColor: false },
        { src: '/mosaicodemo17.webp', className: 'col-span-2 row-span-2', isColor: false },
        { src: '/mosaicodemo18.webp', className: 'col-span-3', isColor: true },
        { src: '/mosaicodemo19.webp', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo20.webp', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo21.webp', className: '', isColor: false },
        { src: '/mosaicodemo22.webp', className: 'col-span-4 row-span-2', isColor: false },
        { src: '/mosaicodemo23.webp', className: 'col-span-2', isColor: true },
        { src: '/mosaicodemo24.webp', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo25.webp', className: '', isColor: false },
        { src: '/mosaicodemo26.webp', className: 'col-span-3', isColor: false },
        { src: '/mosaicodemo27.webp', className: 'row-span-2', isColor: true },
        { src: '/mosaicodemo28.webp', className: '', isColor: false },
    ];
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative block min-h-screen overflow-hidden bg-black md:hidden"
        >
            {/* Fondo de mosaico con opacidad reducida */}
            <div className="absolute inset-0 bg-black opacity-60" />
            <div className="absolute inset-0 grid grid-cols-2 grid-flow-row-dense auto-rows-[15vh] gap-4 p-4">
                {mosaicItems.map((item, index) => (
                    <div 
                      key={index} 
                      className={`relative w-full h-full overflow-hidden ${item.className}`}
                    >
                      <img
                        src={item.src}
                        alt={`Mosaico ${index + 1}`}
                        className="object-cover w-full h-full transition-transform duration-500 scale-110 filter grayscale opacity-30"
                      />
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center w-full gap-8 p-8 text-center">
                {/* Cabecera Sección */}
                <div className="w-full">
                    <h2 
                        className="text-4xl font-black uppercase leading-tight drop-shadow-lg"
                        style={roseColorStyle}
                    >
                        El Recorrido
                    </h2>
                    <p 
                        className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed drop-shadow-lg"
                        style={baseTextColorStyle}
                    >
                        Dos rutas para elegir: <strong className="text-white font-bold">Ruta Larga (143 km / 2860 D+)</strong> y la <strong className="text-white font-bold">Ruta Corta (115 km / 2100 D+)</strong>.
                    </p>
                </div>
                
                {/* Gráficas de perfil */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-lg space-y-6"
                >
                    <div 
                        className="overflow-x-scroll border-4 rounded-lg shadow-2xl"
                        style={roseBorderStyle}
                    >
                        <p 
                            className="py-2 text-sm font-black text-center uppercase tracking-widest"
                            style={{ ...roseBg10, ...baseTextColorStyle }}
                        >
                            Ruta Larga (143 km)
                        </p>
                        <img
                            src="/Nor3xtrem2026.webp" 
                            alt="Gráfica del Recorrido Largo"
                            className="w-auto min-w-[600px] h-auto" 
                        />
                    </div>
                    <div 
                        className="overflow-x-scroll border-4 rounded-lg shadow-2xl"
                        style={roseBorderStyle}
                    >
                        <p 
                            className="py-2 text-sm font-black text-center uppercase tracking-widest"
                            style={{ ...roseBg10, ...baseTextColorStyle }}
                        >
                            Ruta Corta (115 km)
                        </p>
                        <img
                            src="/Nor3xtrem 2026corta.webp" 
                            alt="Gráfica del Recorrido Corto"
                            className="w-auto min-w-[600px] h-auto" 
                        />
                    </div>
                </motion.div>
            
                {/* Puerto 1 */}
                <div className="w-full text-left mt-4">
                    <h3 
                        className="text-3xl font-black uppercase leading-tight"
                        style={roseColorStyle}
                    >
                        1. La Garganta
                    </h3>
                    <p 
                        className="mt-3 text-lg leading-relaxed"
                        style={baseTextColorStyle}
                    >
                        <span className="text-white font-bold block text-xl mb-1">1090 m · 15.3 km al 4.2%</span>
                        El primer gran reto. Tras su bucle, la ruta se bifurca: si eliges la <strong className="text-white font-bold">Ruta Larga</strong>, afrontarás los dos puertos restantes; la <strong className="text-white font-bold">Ruta Corta</strong> regresará a meta por un camino más suave.
                    </p>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <img 
                        src="/La Graganta.webp"
                        alt="Gráfica del Puerto de La Garganta" 
                        className="w-full h-auto rounded-lg shadow-2xl border border-white/10" 
                    />
                </motion.div>
                
                {/* Puerto 2 */}
                <div className="w-full text-left mt-4">
                    <h3 
                        className="text-3xl font-black uppercase leading-tight"
                        style={roseColorStyle}
                    >
                        2. Honduras
                    </h3>
                    <p 
                        className="mt-3 text-lg leading-relaxed"
                        style={baseTextColorStyle}
                    >
                        <span className="text-white font-bold block text-xl mb-1">1450 m · 12.1 km al 8.2%</span>
                     
                        En esta edición subiremos el puerto de Honduras desde Hervás. Este será el <strong className="text-white font-bold uppercase underline decoration-rose-500">puerto cronometrado</strong> oficial.
                    </p>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <img 
                        src="/Puerto de Honduras.webp"
                        alt="Gráfica del Puerto de Honduras" 
                        className="w-full h-auto rounded-lg shadow-2xl border border-white/10" 
                    />
                </motion.div>
                
                {/* Puerto 3 */}
                <div className="w-full text-left mt-4">
                    <h3 
                        className="text-3xl font-black uppercase leading-tight"
                        style={roseColorStyle}
                    >
                        3. Cabezabellosa
                    </h3>
                    <p 
                        className="mt-3 text-lg leading-relaxed"
                        style={baseTextColorStyle}
                    >
                        <span className="text-white font-bold block text-xl mb-1">933 m · 9.1 km al 5.4%</span>
                        Por último iremos remontando poco a poco desde Navaconcejo para coronar el <strong className="text-white font-bold">último puerto largo</strong> de la jornada.
                    </p>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <img 
                        src="/Puerto Cabezabellosa.webp"
                        alt="Gráfica del Puerto de Cabezabellosa" 
                        className="w-full h-auto rounded-lg shadow-2xl border border-white/10" 
                    />
                </motion.div>

                {/* Botón Final */}
                <motion.a
                    href="/altimetrias"
                    className="px-8 py-4 mt-8 font-black text-white transition duration-300 rounded-full uppercase tracking-widest shadow-lg"
                    style={{ backgroundColor: ROSE_COLOR_HEX }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05, backgroundColor: buttonHoverColor }}
                >
                    Ver perfil completo
                </motion.a>
            </div>
        </motion.div>
    );
};

export default RecorridoMobile;