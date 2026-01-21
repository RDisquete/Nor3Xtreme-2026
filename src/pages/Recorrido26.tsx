import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f'; 
const LIGHT_ROSE_HEX = '#ff80bf'; 
const MED_ROSE_HEX = '#d40877'; 
const DARK_ROSE_HEX = '#c3076c'; 
const ROSE_500_50_HEX = '#e5097f80'; 

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const titleVariants = {
    hidden: { y: 150 },
    visible: { y: 0, transition: { duration: 0.2 } },
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

const AvituallamientoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1.5 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ backgroundColor: ROSE_COLOR_HEX }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    {
        title: 'KM 0 | Salida en Hervás (Cajones 1 y 2)',
        description: <><strong>8:00h:</strong> Los ciclistas de la Ruta Larga (cajones 1 y 2) inician la prueba desde Hervás, dirigiéndose a Baños de Montemayor para ascender el primer puerto: <strong>La Garganta</strong>. Es el primer puerto para los cajones 1 y 2.</>,
        icon: <StartIcon />,
        imageAlt: 'Salida en Hervás'
    },
    {
        title: 'Primer Bucle | Paso por Hervás',
        description: 'Tras coronar La Garganta, los participantes regresan a Hervás para completar el primer bucle.',
        icon: <StartIcon />,
        imageAlt: 'Paso por Hervás'
    },
    {
        title: 'KM X | Salida en Hervás (Cajón 3 y Corta)',
        description: <><strong>9:30h:</strong> Salida del cajón 3 y de la Ruta Corta. Tras su paso por Hervás, los participantes de la corta se unen al grupo principal para iniciar el ascenso a Honduras.</>,
        icon: <StartIcon />,
        imageAlt: 'Salida del Cajón 3 y Ruta Corta'
    },
    {
        title: 'Puerto de Honduras (Cronometrado)',
        description: <>Ascensión a <strong>Honduras desde Hervás</strong>. Este puerto será la salida y primer puerto para el cajón 3, y el puerto cronometrado oficial para el Trofeo de Montaña.</>,
        icon: <ChronoIcon />,
        imageAlt: 'Puerto de Honduras (Cronometrado)'
    },
    {
        title: 'Descenso a Cabezuela del Valle',
        description: 'Bajada hasta el KM 4 del puerto (pista Iryda, que no se realiza), para descender por Las Monjas hasta Cabezuela del Valle, dirigiéndose por la N-110 hacia Navaconcejo.',
        icon: <StartIcon />,
        imageAlt: 'Descenso a Cabezuela del Valle'
    },
    {
        title: 'Puerto de Cabezabellosa (desde Navaconcejo)',
        description: <>Desde Navaconcejo, se remonta pasando por Rebollar y El Torno, para comenzar el ascenso al último puerto largo de la jornada: <strong>Cabezabellosa</strong>.</>,
        icon: <StartIcon />,
        imageAlt: 'Ascenso a Cabezabellosa'
    },
    {
        title: 'Alto de Gargantilla y Tramo Final',
        description: <>Descenso a la N-630 (dirección Caparra, Zarza la Mayor). La ruta continúa subiendo por Casas del Monte, Segura de Toro y <strong>Gargantilla</strong>. Los últimos kilómetros antes de la meta.</>,
        icon: <StartIcon />,
        imageAlt: 'Ascenso al Alto de Gargantilla'
    },
    {
        title: 'META | KM 143 | Llegada a Hervás',
        description: 'Final de la Ruta Larga (143 km / 2860 D+). Cruzar la meta en Hervás es la recompensa al esfuerzo épico.',
        icon: <MetaIcon />,
        imageAlt: 'Llegada a Hervás Ruta Larga'
    },
];

const shortRoutePoints: RoutePoint[] = [
   
    {
        title: 'KM 0 | Salida en Hervás (Ruta Corta)',
        description: <><strong>9:30h:</strong> Los participantes de la Ruta Corta inician la prueba en Hervás y se dirigen directamente al Puerto de Honduras.</>,
        icon: <StartIcon />,
        imageAlt: 'Salida de la Ruta Corta'
    },
    {
        title: 'Puerto de Honduras (Cronometrado)',
        description: 'Ascensión al Puerto de Honduras, el único gran puerto para la Ruta Corta. Una prueba exigente de fondo.',
        icon: <ChronoIcon />,
        imageAlt: 'Puerto de Honduras'
    },
    {
        title: 'Avituallamiento | Descenso y Desvío',
        description: 'Tras el puerto, se desciende por Las Monjas hasta Cabezuela del Valle. Después del descenso, iremos buscando Navaconcejo para subir por Rebollar y el torno a Cabezabellosa.',
        icon: <AvituallamientoIcon />,
        imageAlt: 'Avituallamiento en el Valle y desvío'
    },
    {
        title: 'Alto de Gargantilla y Regreso',
        description: <>El tramo final por Casas del Monte, Segura de Toro y <strong>Gargantilla</strong>, regresando a la meta.</>,
        icon: <StartIcon />,
        imageAlt: 'Alto de Gargantilla Ruta Corta'
    },
    {
        title: 'META | KM 115 | Llegada a Hervás',
        description: 'Final de la Ruta Corta (115 km / 2100 D+). Una ruta desafiante e ideal para el Cicloturismo.',
        icon: <MetaIcon />,
        imageAlt: 'Llegada a Hervás Ruta Corta'
    },
];

const TimelineSection = ({ title, points, profileImage, profileAlt, distanceText }: 
    { title: string, points: RoutePoint[], profileImage?: string, profileAlt?: string, distanceText: string }) => (
    <div className="relative">
        <h3 
            className="mb-8 text-3xl font-extrabold text-center font-montserrat"
            style={{ color: LIGHT_ROSE_HEX }}
        >
            {title}
        </h3>

        {profileImage && (
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-12 overflow-x-scroll border-2 rounded-lg shadow-xl"
                style={{ borderColor: ROSE_COLOR_HEX }}
            >
                <h4 
                    className="p-3 text-lg font-bold text-center text-neutral-900 md:text-xl"
                    style={{ backgroundColor: ROSE_COLOR_HEX }}
                >
                    {distanceText}
                </h4>
                <img
                    src={profileImage}
                    alt={profileAlt}
                    className="w-auto h-full"
                />
            </motion.div>
        )}

        <div 
            className="absolute hidden w-0.5 h-full -translate-x-1/2 rounded-full left-1/2 md:block"
            style={{ backgroundColor: ROSE_COLOR_HEX }}
        ></div>
        
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="relative z-10 space-y-12 md:space-y-16" 
        >
            {points.map((point, index) => (
                <motion.div 
                    key={index} 
                    variants={itemVariants} 
                    className={`relative flex items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                    <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:block">
                        {point.icon}
                    </div>
                    <div className={`w-full max-w-lg md:w-[calc(50%-2rem)] flex flex-col items-center p-4 md:p-0 md:items-start ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                        <div className={`flex items-center space-x-3 ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:space-x-reverse'}`}>
                            <div className="md:hidden">
                                {point.icon}
                            </div>
                            <h3 
                                className="text-xl font-extrabold leading-tight font-montserrat md:text-2xl"
                                style={{ color: ROSE_COLOR_HEX }}
                            >
                                {point.title}
                            </h3>
                        </div>
                        <p className="mt-2 text-base leading-snug md:text-lg">
                            {point.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
);

const Recorrido26 = () => {
    const heroImageUrl = '/logo inicio.png'; 

    return (
        <div 
            className="relative w-full min-h-screen overflow-hidden font-sans bg-bg-neutral-900" 
            style={{ color: '#fff0f5' }}
        >
            <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden">
                <motion.img
                    src={heroImageUrl}
                    alt="Fondo decorativo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0 object-contain w-full h-full opacity-10" 
                />
                
                <div className="absolute inset-0 z-10 bg-black/80" />
              
                <section className="relative z-20 flex flex-col items-center justify-end h-full p-6 text-center md:p-16">
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                  >
                      <div className="overflow-hidden">
                          <motion.h1
                              className="text-4xl font-black leading-none uppercase font-montserrat xs:text-5xl md:text-6xl lg:text-8xl [text-shadow:_0_2px_5px_rgb(0_0_0_/_60%)]" 
                              variants={titleVariants}
                              initial="hidden"
                              animate="visible"
                              style={{ color: ROSE_COLOR_HEX }}
                          >
                              Recorrido
                          </motion.h1>
                      </div>
                      
                      <motion.h2
                          className="mt-2 text-xl font-bold uppercase md:text-2xl lg:text-4xl drop-shadow-lg" 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          style={{ color: LIGHT_ROSE_HEX }}
                      >
                          RUTAS LARGA (143 km) Y CORTA (115 km)
                      </motion.h2>
                  </motion.div>
              </section>
            </div>

            <div className="container relative px-4 py-12 mx-auto md:px-8 md:py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center gap-4 mb-16 md:flex-row"
                >
                    <a 
                        href="/Nor3xtreme_2026_larga" 
                        download
                        className="flex items-center justify-center w-full px-6 py-3 text-lg font-bold text-white transition duration-300 rounded-lg shadow-lg hover:bg-gray-700 md:w-auto"
                        style={{ backgroundColor: MED_ROSE_HEX }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v7a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Descargar Track Ruta Larga (GPX)
                    </a>

                    <a 
                        href="/Nor3xtreme_2026_corta" 
                        download
                        className="flex items-center justify-center w-full px-6 py-3 text-lg font-bold text-white transition duration-300 rounded-lg shadow-lg hover:bg-gray-700 md:w-auto"
                        style={{ backgroundColor: MED_ROSE_HEX }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v7a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Descargar Track Ruta Corta (GPX)
                    </a>
                </motion.div>

                <h2 
                    className="mb-12 text-4xl font-extrabold text-center font-montserrat"
                    style={{ color: ROSE_COLOR_HEX }}
                >
                    Perfiles de Elevación
                </h2>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 overflow-x-scroll border-2 rounded-lg shadow-xl" 
                    style={{ borderColor: ROSE_COLOR_HEX }}
                >
                    <h3 
                        className="p-3 text-lg font-bold text-center text-neutral-900 md:text-xl"
                        style={{ backgroundColor: ROSE_COLOR_HEX }}
                    >
                        Ruta Larga (143 km / 2860 D+)
                    </h3>
                    <img
                        src="/Nor3xtrem2026.jpg"
                        alt="Perfil de elevación del recorrido largo"
                        className="w-auto h-full"
                    />
                </motion.div>
                
                <TimelineSection 
                    title="Detalle de la Ruta Larga" 
                    points={longRoutePoints} 
                    distanceText="Ruta Larga (143 km / 2860 D+)" 
                />

                <div className="flex justify-center my-16">
                    <div 
                        className="w-full max-w-md h-0.5 rounded-full"
                        style={{ backgroundColor: ROSE_500_50_HEX }}
                    />
                </div>

                <TimelineSection 
                    title="Detalle de la Ruta Corta" 
                    points={shortRoutePoints} 
                    profileImage="/Nor3xtrem 2026corta.jpg"
                    profileAlt="Perfil de elevación del recorrido corto"
                    distanceText="Ruta Corta (115 km / 2100 D+)"
                />

            </div>
        </div>
    );
};

export default Recorrido26;