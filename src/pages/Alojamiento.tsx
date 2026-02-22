import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f';
const DARK_ROSE_HEX = '#c3076c';
const MED_ROSE_HEX = '#d40877';
const LIGHT_ROSE_HEX = '#ff80bf';
const LIGHTER_ROSE_HEX = '#ffe6f3';
const LIGHTEST_ROSE_HEX = '#ffccff';
const DARK_ROSE_BORDER_HEX = '#73043d';

const roseColorStyle = { color: ROSE_COLOR_HEX };
const darkRoseColorStyle = { color: DARK_ROSE_HEX };
const medRoseColorStyle = { color: MED_ROSE_HEX };

const darkRoseBorderOpacityStyle = { borderColor: DARK_ROSE_BORDER_HEX + '4d' }; 
const darkRoseBorderOpacityStrongStyle = { borderColor: DARK_ROSE_BORDER_HEX + 'ad' }; 
const roseBorderOpacityStyle = { borderColor: ROSE_COLOR_HEX + '80' }; 
const lightRoseBorderStyle = { borderColor: LIGHT_ROSE_HEX }; 
const lighterRoseBorderStyle = { borderColor: LIGHTEST_ROSE_HEX }; 
const lighterRoseBgStyle = { backgroundColor: LIGHTER_ROSE_HEX }; 

interface Accommodation {
    name: string;
    description: string;
    website: string;
    mapLink: string;
    logo: string;
    galleryImages: string[];
    rates: {
        advantages: string[];
        priceTable: { type: string; oneNight: string; twoNights: string }[];
        contact: string;
    };
    isPlaceholder?: boolean; 
}

const accommodationData: Accommodation[] = [

    {
        name: 'Aldea Vetonia', 
        description: 'Alojamiento colaborador oficial Nor3xtrem 2026, ofreciendo ventajas exclusivas y tarifas especiales para los participantes.',
        website: 'https://aldeavetonia.es/',
        mapLink: 'https://maps.app.goo.gl/NXjhBQsVDRhtGsZh6',
        logo: '/patrocinadores/patrocinador16.webp', 
        galleryImages: [],
        rates: {
            advantages: [
                'Alojamiento colaborador oficial Nor3xtrem 2026',
                'Entrada flexible a partir de las 11:00 h (viernes o sábado).',
                'Salida ampliada hasta las 20:00 h del domingo, sin coste adicional.',
                'Cancelación gratuita, sin datos bancarios.',
                'Mascotas sin coste adicional',
                'Bicis seguras: recinto cerrado, con vigilancia',
                'Piscina abierta (si la climatología lo permite).',
                'Instalaciones para familias: parque infantil, parque de bolas de dos plantas, pistas deportivas y amplias zonas verdes.',
            ],
            priceTable: [
                { type: 'Estudio 2 plazas', oneNight: '90 €', twoNights: '130 €' },
                { type: 'Casita 1 habitación (3 plazas)', oneNight: '125 €', twoNights: '165 €' },
                { type: 'Casita 1 habitación (4 plazas)', oneNight: '130 €', twoNights: '170 €' },
                { type: 'Villa 2 habitaciones (4 plazas)', oneNight: '140 €', twoNights: '180 €' },
                { type: 'Villa 2 habitaciones (5 plazas)', oneNight: '150 €', twoNights: '190 €' },
            ],
            contact: 'Las reservas se abrirán el día de apertura de venta de dorsales.\nForma de reservar: Por WhatsApp: 618959251 O en nuestra web oficial.',
        },
    },

    {
        name: 'Camping Las Cañadas (Casas de Campo)', 
        description: 'Complejo de Casas de Campo en Baños de Montemayor. Ideal para ciclistas y familias.',
        website: 'https://www.lascanadas.es/',
        mapLink: 'https://maps.app.goo.gl/1sfFmpSAqQXg4JwD9',
        logo: '/fwdfotoscomplejotursticolascaadas/Logo LC Peq.webp', 
        galleryImages: [
            '/fwdfotoscomplejotursticolascaadas/las canadas 1.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas2.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas3.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas4.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas5.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas6.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas7.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas8.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas9.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas10.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas12.webp',
            '/fwdfotoscomplejotursticolascaadas/las canadas11.webp',
        ],
        rates: {
            advantages: [
                'Ubicación en Baños de Montemayor (Cáceres).',
                'Opciones de bungalow de 2 a 6 plazas.',
                'Se aceptan mascotas (consultar tarifas y condiciones).',
                'Amplias zonas verdes y acampada.',
            ],
            priceTable: [], 
            contact: 'Para consultar disponibilidad, tarifas y realizar reservas, contacte directamente con el camping por: WhatsApp: @ctlascanadas o a través de su web: https://www.lascanadas.es/.',
        },
    },

    {
        name: 'Apartamentos Rurales La Platea', 
        description: 'Apartamentos confortables asociados a Las Cañadas, ideales para grupos pequeños y familias.',
        website: 'https://www.laplateadehervas.com/',
        mapLink: 'https://www.google.com/maps/place/Apartamentos+Rurales+La+Platea/@40.2706228,-5.8655331,19z/data=!4m9!3m8!1s0xd3e4f1af1f7d1d7:0xef0a435c77e9d035!5m2!4m1!1i2!8m2!3d40.2706834!4d-5.865537!16s%2Fg%2F1hc4396pb!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
        logo: '/fwdfotosapartamentosruraleslaplateahervs/LP NEGRO.webp',
        galleryImages: [
            '/fwdfotosapartamentosruraleslaplateahervs/platea.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea2.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea3.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea4.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea5.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea6.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea7.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea8.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea9.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea10.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea11.webp',
            '/fwdfotosapartamentosruraleslaplateahervs/platea12.webp',
        ],
        rates: {
            advantages: [
               
                'Ubicación en Baños de Montemayor.',
            ],
            priceTable: [], 
            contact: 'Para consultar disponibilidad, tarifas y realizar reservas, contacte directamente con los Apartamentos por: WhatsApp: @ctlascanadas o a través de su web: https://www.lascanadas.es/.',
        },
    },

    {
        name: 'Camping El Pinajarro', 
        description: 'Alojamiento rural colaborador. Pincha en el nombre o en "Web" para consultar disponibilidad y precios.',
        website: 'https://www.booking.com/hotel/es/camping-el-pinajarro-hervas1.es.html?chal_t=1765653250440&force_referer=https%3A%2F%2Fwww.google.com%2F',
        mapLink: 'https://www.google.com/maps/search/apartamentoselpinajarro',
        logo: '/Logo pinajarro.webp', 
        galleryImages: [],
        rates: {
            advantages: ['Información de tarifas y ventajas especiales próximamente.'],
            priceTable: [],
            contact: 'Consulta disponibilidad y tarifas directamente en su web oficial.',
        },
        isPlaceholder: true,
    },

    {
        name: 'Apartamentos Rurales El Solitario', 
        description: 'Una opción tranquila para tu descanso en el Valle. Consulta su web para más detalles.',
        website: 'https://elsolitario.es',
        mapLink: 'https://www.google.com/maps/search/apartamentosruraleselsolitario',
        logo: '/WhatsApp Image 2025-12-03 at 13.11.08.webp', 
        galleryImages: [],
        rates: {
            advantages: ['Información de tarifas y ventajas especiales próximamente.'],
            priceTable: [],
            contact: 'Consulta disponibilidad y tarifas directamente en su web oficial.',
        },
        isPlaceholder: true,
    },

    {
        name: 'Complejo Roma', 
        description: 'Hotel y restaurante ubicado en la zona, ideal para ciclistas. Consulta su web.',
        website: 'https://www.complejoroma.com/',
        mapLink: 'https://www.google.com/maps/search/complejo+roma',
        logo: '/logo-complejo-roma-300x138-1.webp', 
        galleryImages: [],
        rates: {
            advantages: ['Información de tarifas y ventajas especiales próximamente.'],
            priceTable: [],
            contact: 'Consulta disponibilidad y tarifas directamente en su web oficial.',
        },
        isPlaceholder: true,
    },

    {
        name: 'Hotel Sinagoga', 
        description: 'Una opción de hotel con encanto. Consulta su web para más detalles sobre servicios.',
        website: 'https://hotelsinagoga.com/',
        mapLink: 'https://www.google.com/maps/search/hotel+sinagoga',
        logo: '/logo-sinagoga.webp', 
        galleryImages: [],
        rates: {
            advantages: ['Información de tarifas y ventajas especiales próximamente.'],
            priceTable: [],
            contact: 'Consulta disponibilidad y tarifas directamente en su web oficial.',
        },
        isPlaceholder: true,
    },
];

const RatesModal = ({ accommodation, onClose }: { accommodation: Accommodation | null; onClose: () => void }) => {
    if (!accommodation) return null;

    const showPriceTable = accommodation.rates.priceTable.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" 
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[90vh] p-8 overflow-y-auto border rounded-lg shadow-2xl bg-white" 
                style={roseBorderOpacityStyle}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Cabecera y Logo */}
                <div className="flex flex-col items-center justify-center text-center">
                    {accommodation.logo && (
                        <img src={accommodation.logo} alt={`Logo ${accommodation.name}`} className="object-contain w-auto h-20 mb-4" />
                    )}
                    <h2 
                      className="text-4xl font-extrabold uppercase font-montserrat"
                      style={darkRoseColorStyle}
                    > 
                        {accommodation.name}
                    </h2>
                    <p className="mt-2 text-gray-600">{accommodation.description}</p> 
                    <hr 
                      className="w-full my-6" 
                      style={lightRoseBorderStyle}
                    /> 
                </div>
                
                {accommodation.galleryImages.length > 0 && (
                    <>
                        <h3 
                          className="mb-4 text-2xl font-bold" 
                          style={medRoseColorStyle}
                        >
                          Galería de Imágenes
                        </h3> 
                        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3">
                            {accommodation.galleryImages.map((src, index) => (
                                <div key={index} className="overflow-hidden rounded-lg shadow-xl aspect-video">
                                    <img 
                                        src={src} 
                                        alt={`Imagen ${index + 1} de ${accommodation.name}`} 
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
                
                <h3 
                  className="mb-4 text-2xl font-bold" 
                  style={medRoseColorStyle}
                >
                  Ventajas Especiales
                </h3> 
                <ul className="grid grid-cols-1 mb-8 text-gray-700 list-disc list-inside md:grid-cols-2 gap-x-6 gap-y-2"> 
                    {accommodation.rates.advantages.map((advantage, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2" style={roseColorStyle}>•</span> {advantage}
                        </li>
                    ))}
                </ul>

                {showPriceTable && (
                    <>
                        <h3 
                          className="mb-4 text-2xl font-bold" 
                          style={medRoseColorStyle}
                        >
                          Tarifas Especiales Nor3xtrem 2026
                        </h3> 
                        <div className="mb-6 overflow-x-auto">
                            <table 
                              className="min-w-full text-left border rounded-lg bg-gray-50"
                              style={lightRoseBorderStyle}
                            > 
                                <thead 
                                  style={lighterRoseBgStyle}
                                > 
                                    <tr>
                                        <th scope="col" className="px-6 py-3 font-medium text-gray-800">Tipo de Alojamiento</th> 
                                        <th scope="col" className="px-6 py-3 font-medium text-center text-gray-800">1 Noche</th>
                                        <th scope="col" className="px-6 py-3 font-medium text-center text-gray-800">2 Noches</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accommodation.rates.priceTable.map((item, index) => (
                                        <tr 
                                          key={index} 
                                          className="border-b hover:bg-[#fff9fc]" 
                                          style={lighterRoseBorderStyle}
                                        > 
                                            <td className="px-6 py-4 font-semibold text-gray-800">{item.type}</td> 
                                            <td className="px-6 py-4 text-center text-gray-800">{item.oneNight}</td>
                                            <td className="px-6 py-4 text-center text-gray-800">{item.twoNights}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                <p className={`mt-4 text-lg leading-relaxed text-gray-700 whitespace-pre-line text-center ${showPriceTable ? '' : 'mt-0'}`}> 
                    {accommodation.rates.contact}
                </p>
                 <div className="flex justify-end mt-8">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 text-white transition duration-200 rounded-lg hover:bg-[#c3076c]"
                        style={{ backgroundColor: MED_ROSE_HEX }}
                    >
                        Cerrar
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const AlojamientosPage = () => {
    const [modalRates, setModalRates] = useState<Accommodation | null>(null);

    return (

        <main className="min-h-screen p-8 bg-black md:p-12"> 
            <div className="mx-auto max-w-7xl">
                <header className="pt-8 mb-12 text-center">
                    <h1 
                      className="mb-4 text-5xl font-extrabold uppercase font-montserrat md:text-6xl"
                      style={roseColorStyle}
                    >
                        Alojamientos Nor3xtrem
                    </h1>
                    <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-300 md:text-2xl">
                        ¡Prepara tu estancia! Colaboradores oficiales y las mejores opciones cerca de Hervás.
                    </p>
                </header>
            
                <div
                    className="p-8 border shadow-xl md:p-16 rounded-3xl bg-black/70"
                    style={darkRoseBorderOpacityStyle}
                >
                    <p className="max-w-4xl mx-auto mb-12 text-lg leading-relaxed text-center text-gray-400 md:text-xl">
                        A continuación, las opciones recomendadas y las tarifas especiales de nuestros colaboradores.
                    </p>
                    
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 "> 
                        {accommodationData.map((alojamiento, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 transition-transform duration-300 border rounded-lg shadow-md cursor-pointer bg-black/50 hover:scale-[1.02]"
                                style={darkRoseBorderOpacityStrongStyle}
                                whileHover={{ 
                                    boxShadow: `0 4px 6px -1px ${ROSE_COLOR_HEX}33, 0 2px 4px -2px ${ROSE_COLOR_HEX}33` 
                                }}
                                
                                onClick={() => {
                                    if (alojamiento.isPlaceholder) {
                                        window.open(alojamiento.website, '_blank');
                                    } else {
                                        setModalRates(alojamiento);
                                    }
                                }} 
                            >
                                <div className={`flex justify-center h-16 mb-4 ${alojamiento.logo ? 'bg-white' : 'bg-gray-900'}`}>
                                    {alojamiento.logo ? (
                                        <img src={alojamiento.logo} alt={`Logo ${alojamiento.name}`} className="object-contain w-auto h-full" />
                                    ) : (
                                        <div className="flex items-center h-full text-sm font-semibold text-gray-500">LOGO PENDIENTE</div>
                                    )}
                                </div>
                                
                                <h3 
                                  className="text-xl font-bold text-center text-gray-400"
                                  style={roseColorStyle}
                                >
                                  {alojamiento.name}
                                </h3>
                                <p className="h-10 mt-2 overflow-hidden text-sm text-center text-gray-400">{alojamiento.description}</p>
                                
                                <div className="flex flex-wrap justify-center gap-2 mt-6 ">
                                    <motion.a 
                                        href={alojamiento.website} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-4 py-2 text-sm font-semibold text-gray-100 transition duration-200 border-2 border-gray-500 rounded-lg hover:bg-gray-700"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={(e) => e.stopPropagation()} 
                                    >
                                        Web
                                    </motion.a>
                                    <motion.a 
                                        href={alojamiento.mapLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-4 py-2 text-sm font-semibold text-gray-100 transition duration-200 border-2 border-gray-500 rounded-lg hover:bg-gray-700"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={(e) => e.stopPropagation()} 
                                    >
                                        Mapa
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {modalRates && !modalRates.isPlaceholder && ( 
                    <RatesModal
                        accommodation={modalRates}
                        onClose={() => setModalRates(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
};

export default AlojamientosPage;