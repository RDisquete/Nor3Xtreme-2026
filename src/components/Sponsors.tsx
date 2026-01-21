import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { src: '/patrocinadores/patrocinador1.png', link: '' },
  { src: '/patrocinadores/patrocinador2.jpeg', link: 'https://mitto.es/' },
  { src: '/patrocinadores/patrocinador3.png', link: 'https://x-sauce.com/' },
  { src: '/patrocinadores/patrocinador4.png', link: 'https://santanoautomocion.com/' },
  { src: '/patrocinadores/patrocinador5.png', link: 'https://www.dip-caceres.es/' },
  { src: '/patrocinadores/patrocinador6.png', link: 'https://www.juntaex.es/' },
  { src: '/patrocinadores/patrocinador7.png', link: 'https://fundacion.cooprado.es/' },
  { src: '/patrocinadores/patrocinador8.png', link: 'https://ciclismoextremadura.es/index.php/es/smartweb/seccion/seccion/extremadura/Inicio' },
  { src: '/patrocinadores/patrocinador9.png', link: 'https://www.facebook.com/karmaopticas/videos/' },
  { src: '/patrocinadores/patrocinador10.jpeg', link: '' },
  { src: '/patrocinadores/patrocinador11.jpeg', link: 'https://tucrono.es/' },
  { src: '/patrocinadores/patrocinador12.png', link: 'https://rcymedia.eu/' },
  { src: '/patrocinadores/patrocinador13.png', link: 'https://www.hotelsinagoga.com/' },
  { src: '/patrocinadores/patrocinador14.png', link: 'https://complejoroma.com/' },
  { src: '/patrocinadores/patrocinador15.png', link: 'https://www.lascanadas.es/' },
  { src: '/patrocinadores/patrocinador30.png', link: 'https://aldeavetonia.es/' },
  { src: '/patrocinadores/patrocinador16.png', link: 'https://campingelpinajarro.com/' },
  { src: '/patrocinadores/patrocinador17.png', link: 'https://www.laplateadehervas.com/' },
  { src: '/patrocinadores/patrocinador18.png', link: 'https://elsolitario.es/' },
  { src: '/patrocinadores/patrocinador19.png', link: 'https://colmerbicicletas.com/' },
  { src: '/patrocinadores/patrocinador20.png', link: 'https://www.albergueviadelaplata.com/' },
  { src: '/patrocinadores/patrocinador21.png', link: '' },
  { src: '/patrocinadores/patrocinador22.png', link: 'https://www.facebook.com/p/Bicicletas-PELIN-100083164635627/?locale=es_ES' },
  { src: '/patrocinadores/patrocinador23.png', link: 'https://www.facebook.com/people/Bikeshop/100049533921886/' },
  { src: '/patrocinadores/patrocinador24.png', link: 'https://bikesraul.com/bicicletas/' },
  { src: '/patrocinadores/patrocinador25.png', link: 'https://bicicletaskilometrocero.com/' },
  { src: '/patrocinadores/patrocinador26.png', link: 'https://www.fotoscarreras.com/' },
  { src: '/patrocinadores/patrocinador27.png', link: 'https://adastrahervas.com/' },
  { src: '/patrocinadores/patrocinador28.png', link: 'https://rdisquete.es/' },
  { src: '/patrocinadores/patrocinador29.png', link: 'https://gr-100.com/' },
];

const Sponsors = () => {
    const roseColorStyle = { color: '#e5097f' };

  return (
    <section className="py-12 bg-black/50"> 
      <h2 
        className="mb-8 text-5xl font-extrabold text-center md:mb-12"
        style={roseColorStyle}
      >
        Patrocinadores
      </h2>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {sponsors.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center" 
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition duration-300 hover:scale-110"
              >
                <img
                  src={item.src}
                  alt={`Patrocinador ${index + 1}`}
                  className="object-contain w-auto h-16 md:h-20"
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