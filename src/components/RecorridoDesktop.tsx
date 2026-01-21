import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f';
const BASE_TEXT_COLOR = '#f3f4f6'; 

const roseColorStyle = { color: ROSE_COLOR_HEX };
const roseBorderStyle = { borderColor: ROSE_COLOR_HEX };
const baseTextColorStyle = { color: BASE_TEXT_COLOR };

const buttonBaseClasses = "inline-flex items-center justify-center px-6 py-3 text-white font-bold transition duration-300 rounded-lg";
const buttonMainStyle = {
    backgroundColor: ROSE_COLOR_HEX,
};

const RecorridoDesktop = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-300vw"]);
    const xParallax = useTransform(scrollYProgress, [0, 1], ["0vw", "-120vw"]); 
    
    const mosaicItems = [
        { src: '/mosaicodemo1.jpeg', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo2.jpeg', className: '', isColor: true },
        { src: '/mosaicodemo3.jpeg', className: 'col-span-3 row-span-2', isColor: false },
        { src: '/mosaicodemo4.jpeg', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo5.jpeg', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo6.jpeg', className: 'col-span-3', isColor: false },
        { src: '/mosaicodemo7.jpeg', className: 'col-span-2 row-span-2', isColor: true },
        { src: '/mosaicodemo8.jpeg', className: '', isColor: false },
        { src: '/mosaicodemo9.jpeg', className: 'col-span-4', isColor: false },
        { src: '/mosaicodemo10.jpeg', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo11.jpeg', className: '', isColor: true },
        { src: '/mosaicodemo12.jpeg', className: 'col-span-2 row-span-3', isColor: false },
        { src: '/mosaicodemo13.jpeg', className: 'col-span-3', isColor: false },
        { src: '/mosaicodemo14.jpeg', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo15.jpeg', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo16.jpg', className: '', isColor: false },
        { src: '/mosaicodemo17.jpg', className: 'col-span-2 row-span-2', isColor: false },
        { src: '/mosaicodemo18.jpg', className: 'col-span-3', isColor: true },
        { src: '/mosaicodemo19.jpg', className: 'col-span-2', isColor: false },
        { src: '/mosaicodemo20.jpg', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo21.jpg', className: '', isColor: false },
        { src: '/mosaicodemo22.jpg', className: 'col-span-4 row-span-2', isColor: false },
        { src: '/mosaicodemo23.jpg', className: 'col-span-2', isColor: true },
        { src: '/mosaicodemo24.jpg', className: 'row-span-2', isColor: false },
        { src: '/mosaicodemo25.jpg', className: '', isColor: false },
        { src: '/mosaicodemo26.jpg', className: 'col-span-3', isColor: false },
        { src: '/mosaicodemo27.jpg', className: 'row-span-2', isColor: true },
        { src: '/mosaicodemo28.jpg', className: '', isColor: false },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative min-h-[500vh] bg-black" 
            ref={targetRef}
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    style={{ x: xParallax }}
                    className="absolute inset-0 z-0 w-[600vw] h-full"
                >
                    <div className="absolute inset-0 bg-black opacity-60" />
                    <div className="absolute inset-0 grid h-full grid-flow-col-dense auto-cols-[10vw] gap-2 p-4">
                        {mosaicItems.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className={`relative w-full h-full overflow-hidden ${item.className}`}
                                whileHover={{ scale: item.isColor ? 1.05 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={item.src}
                                    alt={`Mosaico ${index + 1}`}
                                    className={`object-cover w-full h-full transition-all duration-500 scale-110 ${item.isColor ? 'opacity-40' : 'filter grayscale opacity-30'}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="flex w-[400vw] h-full" 
                    style={{ x }}
                >
                    <div className="relative flex items-center justify-center w-screen p-8 text-center md:p-16">
                        <div className="relative z-10 flex flex-col items-center justify-center w-full md:flex-row-reverse max-w-7xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-2/3 md:ml-8 md:mt-0 mt-8 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
                            >
                                <div className="space-y-4">
                                    <div 
                                        className="overflow-x-scroll border-4 rounded-lg shadow-2xl"
                                        style={roseBorderStyle}
                                    >
                                        <img
                                            src="/Nor3xtrem2026.jpg" 
                                            alt="Gráfica del Recorrido Largo"
                                            className="w-auto h-full"
                                        />
                                    </div>
                                    <div 
                                        className="overflow-x-scroll border-4 rounded-lg shadow-2xl"
                                        style={roseBorderStyle}
                                    >
                                        <img
                                            src="/Nor3xtrem 2026corta.jpg" 
                                            alt="Gráfica del Recorrido Corto"
                                            className="w-auto h-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                            <div className="w-full max-w-4xl mx-auto md:w-1/3 md:text-right">
                                <h2 
                                    className="text-5xl font-extrabold leading-tight md:text-7xl drop-shadow-lg"
                                    style={roseColorStyle}
                                >
                                    El Recorrido
                                </h2>
                                <p 
                                    className="max-w-2xl mx-auto mt-4 text-lg font-light md:text-2xl drop-shadow-lg"
                                    style={baseTextColorStyle}
                                >
                                    Dos rutas para elegir: <strong>Ruta Larga (143 km / 2860 D+)</strong>, con tres grandes puertos, y la <strong>Ruta Corta (115 km / 2100 D+)</strong>, ideal para el Cicloturismo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-screen p-8 md:p-16">
                        <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-8 md:flex-row">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="w-full overflow-hidden md:w-3/5 rounded-xl"
                            >
                                <img
                                    src="/La Graganta.jpg"
                                    alt="Gráfica del Puerto de La Garganta"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="w-full mt-8 md:mt-0 md:w-2/5 max-w-[500px] drop-shadow-lg md:ml-8"
                            >
                                <h3 
                                    className="text-3xl font-extrabold leading-tight md:text-4xl"
                                    style={roseColorStyle}
                                >
                                    1. El Puerto de La Garganta
                                </h3>
                                <p 
                                    className="mt-2 text-base font-light md:text-lg"
                                    style={baseTextColorStyle}
                                >
                                    <strong>1188 m de altitud · 10.0 km al 5.2%</strong>
                                    <br />
                                    Es el primer puerto para los cajones 1 y 2 saliendo desde Hervas y con inicio del puerto en baños de montemayor.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-screen p-8 md:p-16">
                        <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-8 md:flex-row">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="w-full overflow-hidden md:w-3/5 rounded-xl"
                            >
                                <img
                                    src="/Puerto de Honduras.jpg"
                                    alt="Gráfica del Puerto de Honduras"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="w-full mt-8 md:mt-0 md:w-2/5 max-w-[500px] drop-shadow-lg md:ml-8"
                            >
                                <h3 
                                    className="text-3xl font-extrabold leading-tight md:text-4xl"
                                    style={roseColorStyle}
                                >
                                    2. El Puerto de Honduras
                                </h3>
                                <p 
                                    className="mt-2 text-base font-light md:text-lg"
                                    style={baseTextColorStyle}
                                >
                                    <strong>1425 m de altitud · 14.0 km al 5.3%</strong>
                                    <br />
                                    En esta edición subiremos el puerto de Honduras desde Hervas (y será la salida y primer puerto para el cajón 3). Este puerto será el puerto cronometrado para el trofeo de montaña.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center w-screen p-8 md:p-16">
                        <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-8 md:flex-row-reverse">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="w-full overflow-hidden md:w-3/5 rounded-xl"
                            >
                                <img
                                    src="/Puerto Cabezabellosa.jpg"
                                    alt="Gráfica del Puerto de Cabezabellosa"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="w-full mt-8 md:mt-0 md:w-2/5 max-w-[500px] drop-shadow-lg md:mr-8"
                            >
                                <h3 
                                    className="text-3xl font-extrabold leading-tight md:text-4xl"
                                    style={roseColorStyle}
                                >
                                    3. El Puerto de Cabezabellosa
                                </h3>
                                <p 
                                    className="mt-2 text-base font-light md:text-lg"
                                    style={baseTextColorStyle}
                                >
                                    <strong>935 m de altitud · 17.7 km al 2.7%</strong>
                                    <br />
                                    Por último iremos remontando poco a poco desde navaconcejo para llegar a Rebollar y comenzar el ascenso al último puerto largo de la jornada.
                                </p>
                                <motion.a
                                    href="/altimetrias"
                                    className={`mt-8 ${buttonBaseClasses}`}
                                    style={buttonMainStyle}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    Ver perfil completo
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default RecorridoDesktop;