import React, { useEffect, useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_HEX = '#ff80bf';
const DARK_ROSE_BORDER_HEX = '#73043d';

const roseColorStyle = { color: ROSE_COLOR_HEX };
const lightRoseColorStyle = { color: LIGHT_ROSE_HEX }; 
const rose100ColorStyle = { color: '#fff0f5' }; 

const darkRoseBorderOpacityStyle = { borderColor: DARK_ROSE_BORDER_HEX + '4d' }; 
const darkRoseBgOpacityStyle = { backgroundColor: DARK_ROSE_BORDER_HEX + '33' }; 

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

const Modal = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={onClose}
        >
            <div className="relative max-w-5xl max-h-full p-4 overflow-auto rounded-lg shadow-2xl bg-black/80" onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute text-3xl font-bold top-4 right-4 hover:text-white"
                    style={roseColorStyle} 
                    onClick={onClose}
                >
                    &times;
                </button>
                <img src={src} alt={alt} className="w-full h-auto max-h-full cursor-pointer" />
            </div>
        </motion.div>
    );
};

const Altimetrias = () => {
    const location = useLocation();
    const [modalImage, setModalImage] = useState<string | null>(null);

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            const header = document.getElementById('main-header');

            if (element && header) {
                const headerOffset = header.offsetHeight + 10;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

    const climbs = [
        {
            id: 'puerto-de-la-garganta',
            name: 'Puerto de la Garganta',
            image: '/La Graganta.jpg',
            imageAlt: 'Perfil de altimetría del Puerto de la Garganta',
            description: 'Es el primer puerto para los cajones 1 y 2 saliendo desde Hervas y con inicio del puerto en baños de montemayor.',
            stats: [
                { label: 'Distancia', value: '10.0 km' },
                { label: 'Pendiente Media', value: '5.2%' },
                { label: 'Pendiente Máxima', value: '6.4%' },
                { label: 'Desnivel', value: '1188 m' }
            ]
        },
    
       
        {
            id: 'puerto-de-honduras',
            name: 'Puerto de Honduras',
            image: '/Puerto de Honduras.jpg',
            imageAlt: 'Perfil de altimetría del Puerto de Honduras',
            description: 'En esta edición subiremos el puerto de Honduras desde Hervas (y será la salida y primer puerto para el cajón 3). Este puerto será el puerto cronometrado para el trofeo de montaña',
            stats: [
                { label: 'Distancia', value: '14.0 km' },
                { label: 'Pendiente Media', value: '5.3%' },
                { label: 'Pendiente Máxima', value: '6.4%' },
                { label: 'Desnivel', value: '1425 m' }
            ]
        },
        {
            id: 'puerto-de-cabezabellosa',
            name: 'Puerto de Cabezabellosa',
            image: '/Puerto Cabezabellosa.jpg',
            imageAlt: 'Perfil de altimetría del Puerto de Cabezabellosa',
            description: 'Por último iremos remontando poco a poco desde navaconcejo para llegar a Rebollar y comenzar el ascenso al último puerto largo de la jornada.',
            stats: [
                { label: 'Distancia', value: '17.7 km' },
                { label: 'Pendiente Media', value: '2.8%' },
                { label: 'Pendiente Máxima', value: '8%' },
                { label: 'Desnivel', value: '935 m' }
            ]
        },
    ];

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
                                Altimetrías
                            </motion.h1>
                        </div>

                        <motion.h2
                            className="mt-4 text-2xl font-bold uppercase md:text-3xl lg:text-5xl drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            style={lightRoseColorStyle}
                        >
                            Descubre los perfiles de los puertos de montaña de la carrera

                        </motion.h2>
                    </motion.div>
                </section>
            </div>

            <div className="container relative z-10 px-4 py-24 mx-auto">
                <motion.div
                    variants={containerVariants}
                    className="space-y-24"
                >
                    {climbs.map(climb => (
                        <motion.section
                            key={climb.id}
                            id={climb.id}
                            variants={itemVariants}
                            className="p-8 border shadow-xl md:p-16 rounded-3xl"
                            style={darkRoseBorderOpacityStyle}
                        >
                            <h2 
                                className="mb-4 text-4xl font-extrabold text-center uppercase font-montserrat md:text-6xl"
                                style={roseColorStyle}
                            >
                                {climb.name}
                            </h2>
                            <p className="max-w-4xl mx-auto text-lg leading-relaxed text-center text-gray-300 md:text-xl">
                                {climb.description}
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-4">
                                {climb.stats.map(stat => (
                                    <div 
                                        key={stat.label} 
                                        className="flex flex-col items-center p-4 rounded-lg"
                                        style={darkRoseBgOpacityStyle}
                                    >
                                        <span 
                                            className="text-2xl font-bold md:text-4xl"
                                            style={roseColorStyle}
                                        >
                                            {stat.value}
                                        </span>
                                        <span className="mt-1 text-sm text-gray-400 uppercase md:text-base">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-16 overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src={climb.image}
                                    alt={climb.imageAlt}
                                    className="object-cover w-full h-auto max-w-sm mx-auto transition-transform duration-300 transform cursor-pointer hover:scale-105"
                                    onClick={() => setModalImage(climb.image)}
                                />
                            </div>
                        </motion.section>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {modalImage && (
                    <Modal
                        src={modalImage}
                        alt="Imagen de altimetría en grande"
                        onClose={() => setModalImage(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Altimetrias;