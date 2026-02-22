import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AlojamientoSection from './Alojamiento'; 

const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_COLOR_HEX = '#f2a9c3'; 
const BASE_TEXT_COLOR = '#f3f4f6'; 

const roseColorStyle = { color: ROSE_COLOR_HEX };
const lightRoseColorStyle = { color: LIGHT_ROSE_COLOR_HEX };

const galleryImages = [
    { src: '/mosaicodemo20.webp', alt: 'Corredor en el bosque' },
    { src: '/mosaicodemo12.webp', alt: 'Corredores en el grupo' },
    { src: '/mosaicodemo16.webp', alt: 'Ciclista en la meta' },
    { src: '/mosaicodemo27.webp', alt: 'Paisaje de la carrera' },
    { src: '/mosaicodemo6.webp', alt: 'Corredor subiendo un puerto' },
    { src: '/mosaicodemo17.webp', alt: 'Grupo de ciclistas' },
    { src: '/mosaicodemo23.webp', alt: 'Corredor subiendo un puerto' },
    { src: '/mosaicodemo25.webp', alt: 'Grupo de ciclistas' },
];
const roseBorderStyle70 = { borderColor: `rgba(229, 9, 127, 0.7)` };
const roseBorderStyle30 = { borderColor: `rgba(229, 9, 127, 0.3)` };
const roseBgHover40 = 'rgba(229, 9, 127, 0.4)';
const buttonBaseClasses = "inline-flex items-center justify-center px-6 py-3 text-sm md:w-auto md:text-base text-white font-bold transition duration-300 rounded-lg";
const buttonMainStyle = {
    backgroundColor: ROSE_COLOR_HEX,
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const titleVariants = {
    hidden: { y: 150 },
    visible: { y: 0, transition: { duration: 0.2 } },
};

const ImageModal = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={onClose}
        >
            <div
                className="relative max-w-5xl max-h-full p-4 overflow-auto border rounded-lg shadow-2xl bg-black/80"
                style={roseBorderStyle70}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={src} alt={alt} className="w-full h-auto max-h-full cursor-pointer" />
            </div>
        </motion.div>
    );
};

const ServiceModal = ({ service, onClose }: { service: { title: string; description: string; mapLink?: string; image?: string } | null; onClose: () => void }) => {
    if (!service) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-lg p-8 overflow-auto border rounded-lg shadow-2xl bg-black/80"
                style={roseBorderStyle70}
                onClick={(e) => e.stopPropagation()}
            >
                {service.image && (
                    <div className="mb-6 overflow-hidden rounded-lg shadow-xl">
                        <img src={service.image} alt={service.title} className="object-cover w-full h-auto" />
                    </div>
                )}
                <h2
                    className="mb-4 text-4xl font-extrabold uppercase font-montserrat"
                    style={roseColorStyle}
                >
                    {service.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">{service.description}</p>
                {service.mapLink && (
                    <motion.a
                        href={service.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-6 ${buttonBaseClasses}`}
                        style={buttonMainStyle}
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        Ver en Google Maps
                    </motion.a>
                )}
            </motion.div>
        </motion.div>
    );
};

const IconosServicios = {
    'retirada-dorsales': (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={roseColorStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    'como-llegar': (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={roseColorStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    'zona-0-y-parking': (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={roseColorStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <path d="M9 3v18M15 3v18" />
            <path d="M3 9h18M3 15h18" />
        </svg>
    ),
    'comida': (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={roseColorStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L12 12L2 12L2 22L12 22L12 12L22 12L22 2L12 2Z" />
            <path d="M12 22V12L22 12" />
        </svg>
    ),
    'duchas': (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={roseColorStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1" />
            <path d="M12 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1" />
            <path d="M9 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1" />
            <path d="M5 22h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
        </svg>
    ),
    'libro-del-ciclista': (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" style={roseColorStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
};

const ServiciosCarrera = () => {
    const location = useLocation();
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [modalService, setModalService] = useState<{ id: string; title: string; description: string; mapLink?: string; image?: string } | null>(null);

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            const header = document.getElementById('main-header');

            if (element && header) {
                const headerHeight = header.offsetHeight;
                const offsetPosition = window.scrollY + element.getBoundingClientRect().top - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

    const logisticsServices = [
        {
            id: 'retirada-dorsales',
            title: 'Retirada de dorsales',
            description: 'Los dorsales se podrán retirar en el polideportivo de Hervás el sábado 9 de 17:00 a 21:00  y el mismo día de la prueba de 6:15 a 7:30. Es obligatorio presentar el DNI para la recogida.',
        },
        {
            id: 'como-llegar',
            title: 'Cómo llegar',
            description: 'Hervás es un municipio en el norte de Extremadura, conocido por su barrio judío. Para los participantes, la forma más sencilla de llegar es por la A-66, tomando la salida 436. Una vez en el pueblo, las indicaciones te llevarán directamente al pabellón polideportivo, punto central de la carrera.',
            mapLink: 'https://www.google.com/maps/place/Pabell%C3%B3n+Polideportivo+de+Herv%C3%A1s/@40.2642594,-5.8753229,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e51f845012567:0x228f413a96860d5b!8m2!3d40.2642594!4d-5.872748!16s%2Fg%2F1tf_9r7v?entry=ttu',
            image: 'https://picsum.photos/400/250?random=11', 
        },
        {
            id: 'zona-0-y-parking',
            title: 'Zona 0 y parking',
            description: 'El punto de inicio de la carrera, conocido como "Zona 0", estará señalizado en el pabellón polideportivo. Para facilitar la llegada, hemos habilitado varias zonas de parking disponibles en las cercanías del recinto. Serán debidamente indicadas por la organización, y podrás consultar las ubicaciones exactas en el mapa.',
            mapLink: 'https://www.google.com/maps/search/parking+p%C3%BAblico+Herv%C3%A1s/@40.264223,-5.873219,16z/data=!3m1!4b1?entry=ttu',
            image: 'https://picsum.photos/400/250?random=12', 
        },
        {
            id: 'comida',
            title: 'Comida',
            description: 'Después de la carrera, quien la haya contratado, podrá disfrutar de una reconfortante comida en el pabellón, perfecta para reponer energías y compartir anécdotas con el resto de corredores en un ambiente festivo y de camaradería.',
        },
        {
            id: 'duchas',
            title: 'Duchas',
            description: 'Las duchas y vestuarios estarán a disposición de todos los ciclistas en el polideportivo municipal. Después de un gran esfuerzo, podrás darte una merecida ducha para refrescarte y prepararte para la comida y el resto de la jornada.',
        },
        {
            id: 'libro-del-ciclista',
            title: 'Libro del ciclista',
            description: 'Se enviará online a todo los inscritos',
        },
    ];

    return (
        <div
            className="relative w-full min-h-screen overflow-hidden font-sans bg-bg-neutral-900"
            style={{ color: BASE_TEXT_COLOR }}
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
                <div className="absolute inset-0 bg-black/70" />
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
                                Servicios carrera
                            </motion.h1>
                        </div>

                        <motion.h2
                            className="mt-4 text-2xl font-bold uppercase md:text-3xl lg:text-5xl drop-shadow-lg"
                            style={lightRoseColorStyle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Todo lo que necesitas saber
                        </motion.h2>
                    </motion.div>
                </section>
            </div>

            <div className="container relative z-10 px-4 py-24 mx-auto space-y-24">
                <section
                    id="track-oficial"
                    className="relative overflow-hidden bg-black border shadow-xl rounded-3xl"
                    style={roseBorderStyle30}
                >
                    <img
                        src="/mosaicodemo14.webp"
                        alt="Fondo de ciclista en una ruta de montaña"
                        className="absolute inset-0 object-cover w-full h-full opacity-20"
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center md:p-16">
                        <h2
                            className="mb-4 text-4xl font-extrabold uppercase font-montserrat md:text-6xl"
                            style={roseColorStyle}
                        >
                            Tracks Oficiales
                        </h2>
                        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl">
                            Descarga los tracks oficiales en formato GPX para planificar y seguir tu ruta de manera segura, ya sea la Larga o la Corta.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">

                            <motion.a
                                href="/ae0334ed-d813-4427-89af-48beaa1497f7.gpx"
                                className={`${buttonBaseClasses}`}
                                style={buttonMainStyle}
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                download
                            >
                                Descargar Track Largo (GPX)
                            </motion.a>

                            <motion.a
                                href="/ae0334ed-d813-4427-89af-48beaa1497f7.gpx"
                                className={`${buttonBaseClasses}`}
                                style={buttonMainStyle}
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                download
                            >
                                Descargar Track Corto (GPX)
                            </motion.a>

                        </div>
                    </div>
                </section>

                <section
                    id="servicios-logistica"
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {logisticsServices.map(service => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="block p-8 transition-colors duration-300 bg-black border shadow-xl cursor-pointer rounded-3xl"
                            style={roseBorderStyle30}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = roseBgHover40; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                            onClick={() => setModalService(service)}
                        >
                            <div className="flex flex-col items-center justify-center text-center">
                                {IconosServicios[service.id as keyof typeof IconosServicios]}
                                <h3
                                    className="mt-4 text-2xl font-bold uppercase"
                                    style={roseColorStyle}
                                >
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-gray-400">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section
                    id="galeria-de-fotos"
                    className="p-8 bg-black border shadow-xl md:p-16 rounded-3xl"
                    style={roseBorderStyle30}
                >
                    <h2
                        className="mb-8 text-4xl font-extrabold text-center uppercase font-montserrat md:text-5xl"
                        style={roseColorStyle}
                    >
                        Galería de Fotos
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover w-full h-40 transition-transform duration-300 transform cursor-pointer md:h-56 hover:scale-110"
                                    onClick={() => setModalImage(image.src)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-12">
                        <motion.a
                            href="https://www.fotoscarreras.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonBaseClasses}`}
                            style={buttonMainStyle}
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Ver más fotos
                        </motion.a>
                    </div>
                </section>

                <AlojamientoSection />


            </div>

            <AnimatePresence>
                {modalImage && (
                    <ImageModal
                        src={modalImage}
                        alt="Imagen en grande de la galería"
                        onClose={() => setModalImage(null)}
                    />
                )}
                {modalService && (
                    <ServiceModal
                        service={modalService}
                        onClose={() => setModalService(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiciosCarrera;