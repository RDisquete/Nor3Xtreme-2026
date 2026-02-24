import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f'; 
const LIGHT_ROSE_HEX = '#ff80bf'; 
const MED_ROSE_HEX = '#d40877'; 
const ROSE_500_50_HEX = '#e5097f80'; 
const BASE_TEXT_COLOR = '#f3f4f6'; 

// Clases y estilos
const buttonBaseClasses = "flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white transition-shadow duration-300 rounded-full shadow-[0_0_20px_rgba(229,9,127,0.3)] md:w-auto uppercase tracking-wider";
const buttonMainStyle = { backgroundColor: MED_ROSE_HEX };

const titleVariants = {
    hidden: { y: 150 },
    visible: { y: 0, transition: { duration: 0.2 } },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface RoutePoint {
    title: string;
    description: ReactNode;
    icon: ReactNode;
    imageAlt: string;
}

const StartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1.5 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ backgroundColor: ROSE_COLOR_HEX }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const ChronoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1.5 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ backgroundColor: ROSE_COLOR_HEX }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const MetaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1.5 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ backgroundColor: ROSE_COLOR_HEX }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2-2m-2 2l2 2m7-2l-2 2m2-2l-2-2m0 0h6a2 2 0 012 2v2a2 2 0 01-2 2h-6a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </svg>
);

const longRoutePoints: RoutePoint[] = [
    { title: 'KM 0 | Salida en Hervás (Cajones 1 y 2)', description: <><strong>8:00h:</strong> Inicio hacia el puerto de <strong>La Garganta</strong>.</>, icon: <StartIcon />, imageAlt: 'Salida' },
    { title: 'Puerto de Honduras (Cronometrado)', description: <>Ascensión oficial para el Trofeo de Montaña.</>, icon: <ChronoIcon />, imageAlt: 'Honduras' },
    { title: 'META | KM 143 | Llegada a Hervás', description: 'Final de la Ruta Larga.', icon: <MetaIcon />, imageAlt: 'Meta' },
];

const shortRoutePoints: RoutePoint[] = [
    { title: 'KM 0 | Salida en Hervás (Ruta Corta)', description: <><strong>9:30h:</strong> Inicio directo hacia el Puerto de Honduras.</>, icon: <StartIcon />, imageAlt: 'Salida Corta' },
    { title: 'META | KM 115 | Llegada a Hervás', description: 'Final de la Ruta Corta.', icon: <MetaIcon />, imageAlt: 'Meta Corta' },
];

const TimelineSection = ({ title, points, profileImage, profileAlt, distanceText }: 
    { title: string, points: RoutePoint[], profileImage?: string, profileAlt?: string, distanceText: string }) => (
    <div className="relative">
        <h3 className="mb-8 text-3xl font-extrabold text-center font-montserrat" style={{ color: LIGHT_ROSE_HEX }}>{title}</h3>
        {profileImage && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-12 overflow-x-scroll border-2 rounded-lg shadow-xl" style={{ borderColor: ROSE_COLOR_HEX }}>
                <h4 className="p-3 text-lg font-bold text-center text-neutral-900 md:text-xl" style={{ backgroundColor: ROSE_COLOR_HEX }}>{distanceText}</h4>
                <img src={profileImage} alt={profileAlt} className="w-auto h-full" />
            </motion.div>
        )}
        <div className="absolute hidden w-0.5 h-full -translate-x-1/2 rounded-full left-1/2 md:block" style={{ backgroundColor: ROSE_COLOR_HEX }}></div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={containerVariants} className="relative z-10 space-y-12 md:space-y-16">
            {points.map((point, index) => (
                <motion.div key={index} variants={itemVariants} className={`relative flex items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:block">{point.icon}</div>
                    <div className={`w-full max-w-lg md:w-[calc(50%-2rem)] flex flex-col items-center p-4 md:p-0 md:items-start ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                        <div className={`flex items-center space-x-3 ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:space-x-reverse'}`}>
                            <div className="md:hidden">{point.icon}</div>
                            <h3 className="text-xl font-extrabold leading-tight font-montserrat md:text-2xl" style={{ color: ROSE_COLOR_HEX }}>{point.title}</h3>
                        </div>
                        <p className="mt-2 text-base leading-snug md:text-lg">{point.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
);

const Recorrido26 = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden font-sans bg-bg-neutral-900" style={{ color: BASE_TEXT_COLOR }}>
            
            <div className="relative w-full h-screen">
                <video autoPlay loop muted playsInline className="absolute inset-0 object-cover w-full h-full opacity-30" src="/RENDER_COMP.mp4">
                    Tu navegador no soporta la etiqueta de vídeo.
                </video>
                <div className="absolute inset-0 bg-black/70" />
                
                <section className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center md:p-16">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-4xl font-black leading-none uppercase font-montserrat xs:text-5xl md:text-6xl lg:text-9xl"
                                style={{ color: ROSE_COLOR_HEX }}
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                Recorrido
                            </motion.h1>
                        </div>

                    {/* SUSTITUYE EL BLOQUE DEL H2 POR ESTE */}
<motion.div
    className="flex flex-col items-center mt-6 space-y-2 md:mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
>
    <div className="flex flex-wrap justify-center gap-4 text-xl font-bold uppercase md:text-3xl lg:text-4xl drop-shadow-lg">
        <span style={{ color: LIGHT_ROSE_HEX }}>
            Larga <span className="text-white">143K</span>
        </span>
        <span className="text-white/40">|</span>
        <span style={{ color: LIGHT_ROSE_HEX }}>
            Corta <span className="text-white">115K</span>
        </span>
    </div>
    <p className="text-sm tracking-[0.3em] uppercase opacity-60 font-medium">Edición 2026</p>
</motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                            className="flex flex-col items-center justify-center gap-6 mt-12 md:flex-row"
                        >
                            <motion.a
                                href="/ae0334ed-d813-4427-89af-48beaa1497f7.gpx"
                                className={buttonBaseClasses}
                                style={buttonMainStyle}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                // Transición súper rápida para que no haya lag
                                transition={{ duration: 0.1, ease: "easeOut" }}
                                download
                            >
                                Descargar Track Largo (GPX)
                            </motion.a>

                            <motion.a
                                href="/ae0334ed-d813-4427-89af-48beaa1497f7.gpx"
                                className={buttonBaseClasses}
                                style={buttonMainStyle}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.1, ease: "easeOut" }}
                                download
                            >
                                Descargar Track Corto (GPX)
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </section>
            </div>

            <div className="container relative z-10 px-4 py-24 mx-auto md:px-8">
                <h2 className="mb-12 text-4xl font-extrabold text-center font-montserrat md:text-5xl" style={{ color: ROSE_COLOR_HEX }}>Perfiles de Elevación</h2>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-16 overflow-x-scroll border-2 rounded-lg shadow-xl" style={{ borderColor: ROSE_COLOR_HEX }}>
                    <h3 className="p-3 text-lg font-bold text-center text-neutral-900 md:text-xl" style={{ backgroundColor: ROSE_COLOR_HEX }}>Ruta Larga (143 km / 2860 D+)</h3>
                    <img src="/Nor3xtrem2026.webp" alt="Perfil Ruta Larga" className="w-auto h-full" />
                </motion.div>
                
                <TimelineSection title="Detalle de la Ruta Larga" points={longRoutePoints} distanceText="Ruta Larga (143 km / 2860 D+)" />
                <div className="flex justify-center my-24">
                    <div className="w-full max-w-md h-0.5 rounded-full" style={{ backgroundColor: ROSE_500_50_HEX }} />
                </div>
                <TimelineSection title="Detalle de la Ruta Corta" points={shortRoutePoints} profileImage="/Nor3xtrem 2026corta.webp" profileAlt="Perfil Ruta Corta" distanceText="Ruta Corta (115 km / 2100 D+)" />
            </div>
        </div>
    );
};

export default Recorrido26;