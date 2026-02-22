import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { src: '/patrocinadores/patrocinador21.webp', link: 'https://www.hervas.es/' },
  { src: '/patrocinadores/patrocinador2.webp', link: 'https://mitto.es/' },
  { src: '/patrocinadores/patrocinador3.webp', link: 'https://x-sauce.com/' },
  { src: '/patrocinadores/patrocinador4.webp', link: 'https://santanoautomocion.com/' },
  { src: '/patrocinadores/patrocinador5.webp', link: 'https://www.dip-caceres.es/' },
  { src: '/patrocinadores/patrocinador6.webp', link: 'https://www.juntaex.es/' },
  { src: '/patrocinadores/patrocinador7.webp', link: 'https://fundacion.cooprado.es/' },
  { src: '/patrocinadores/patrocinador8.webp', link: 'https://ciclismoextremadura.es/index.php/es/smartweb/seccion/seccion/extremadura/Inicio' },
  { src: '/patrocinadores/patrocinador9.webp', link: 'https://www.facebook.com/karmaopticas/videos/' },
  { src: '/patrocinadores/patrocinador10.webp', link: 'https://www.facebook.com/profile.php?id=61557950476229' },
  { src: '/patrocinadores/patrocinador11.webp', link: 'https://tucrono.es/' },
  { src: '/patrocinadores/patrocinador12.webp', link: 'https://rcymedia.eu/' },
  { src: '/patrocinadores/patrocinador13.webp', link: 'https://www.hotelsinagoga.com/' },
  { src: '/patrocinadores/patrocinador14.webp', link: 'https://complejoroma.com/' },
  { src: '/patrocinadores/patrocinador15.webp', link: 'https://www.lascanadas.es/' },
  { src: '/patrocinadores/patrocinador30.webp', link: 'https://aldeavetonia.es/' },
  { src: '/patrocinadores/patrocinador16.webp', link: 'https://campingelpinajarro.com/' },
  { src: '/patrocinadores/patrocinador17.webp', link: 'https://www.laplateadehervas.com/' },
  { src: '/patrocinadores/patrocinador18.webp', link: 'https://elsolitario.es/' },
  { src: '/patrocinadores/patrocinador19.webp', link: 'https://colmerbicicletas.com/' },
  { src: '/patrocinadores/patrocinador20.webp', link: 'https://www.albergueviadelaplata.com/' },
  { src: '/patrocinadores/patrocinador1.webp', link: 'https://www.navaconcejo.es/' },
  { src: '/patrocinadores/patrocinador22.webp', link: 'https://www.facebook.com/p/Bicicletas-PELIN-100083164635627/?locale=es_ES' },
  { src: '/patrocinadores/patrocinador23.webp', link: 'https://www.facebook.com/people/Bikeshop/100049533921886/' },
  { src: '/patrocinadores/patrocinador24.webp', link: 'https://bikesraul.com/bicicletas/' },
  { src: '/patrocinadores/patrocinador25.webp', link: 'https://bicicletaskilometrocero.com/' },
  { src: '/patrocinadores/patrocinador26.webp', link: 'https://www.fotoscarreras.com/' },
  { src: '/patrocinadores/patrocinador27.webp', link: 'https://adastrahervas.com/' },
  { src: '/patrocinadores/patrocinador28.webp', link: 'https://rdisquete.es/' },
  { src: '/patrocinadores/patrocinador29.webp', link: 'https://gr-100.com/' },
];

const Sponsors = () => {
  const roseColorStyle = { color: '#e5097f' };

  return (
    <section className="py-20 bg-black/50"> 
      <h2 
        className="mb-16 text-5xl font-extrabold text-center uppercase md:text-6xl font-montserrat"
        style={roseColorStyle}
      >
        Patrocinadores
      </h2>
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Mantengo tu grid de 6 columnas, pero ten cuidado: 
            con h-36 en desktop, 6 logos por fila puede quedar muy apretado. 
            Si ves que se pegan demasiado, baja a lg:grid-cols-4. */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6 xl:gap-16">
          {sponsors.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="flex items-center justify-center p-4 bg-white/5 rounded-2xl" 
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block transition-all duration-300 group hover:scale-110"
              >
                <img
                  src={item.src}
                  alt={`Patrocinador ${index + 1}`}
                  // He añadido loading="lazy" para que la web cargue más rápido
                  loading="lazy"
                  className="object-contain w-full h-24 transition-all duration-500 hover:grayscale-0 md:h-32 lg:h-36"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;