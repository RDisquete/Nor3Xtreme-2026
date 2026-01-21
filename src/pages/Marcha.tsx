import React from 'react';
import { motion, Variants } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_HEX = '#ff80bf';
const MED_ROSE_HEX = '#d40877';
const DARK_ROSE_HEX = '#c3076c'; 

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

const titleVariants = {
  hidden: { y: 150 },
  visible: { y: 0, transition: { duration: 0.2 } },
};

const climbData = [
  { name: 'Puerto La Garganta', category: '2ª Categoría', description: 'Un puerto desafiante que pone a prueba a los ciclistas en la primera parte del recorrido.' },
  { name: 'Puerto de Honduras', category: '1ª Categoría', description: 'El más emblemático puerto de extremadura, el cual se disfrutará y sufrirá desde el km 1 hasta el final' },
  { name: 'Puerto de Cabezabellosa', category: '2ª Categoría', description: 'Ofrece unas vistas espectaculares, recompensando el esfuerzo de la subida.' },
];

const Marcha = () => (
  <div className="relative w-full min-h-screen font-sans bg-black" style={{ color: '#fff0f5' }}>
    <video
      autoPlay
      loop
      muted
      className="fixed inset-0 object-cover w-full h-full opacity-40"
      src="/RENDER_COMP.mp4"
    />

    <div className="relative z-10">
      <section className="flex flex-col items-center justify-end h-screen p-4 text-center md:p-16">
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
              style={{ color: ROSE_COLOR_HEX }}
            >
              Nor3xtreme
            </motion.h1>
          </div>

          <motion.h2
            className="mt-4 text-2xl font-bold uppercase md:text-3xl lg:text-5xl drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ color: LIGHT_ROSE_HEX }}
          >
          La Marcha Ciclodeportiva Extremeña
          </motion.h2>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={contentVariants}
        className="container px-4 mx-auto my-16 md:my-24"
      >
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 
                className="mb-4 text-4xl font-bold md:text-5xl"
                style={{ color: ROSE_COLOR_HEX }}
            >
                ¿Qué es Nor3xtrem?
            </h2>
            <p 
                className="pl-4 text-base leading-relaxed border-l-4 md:text-lg"
                style={{ borderColor: ROSE_COLOR_HEX }}
            >
              Desde el año 2014 hemos trabajado muy duro para consolidar esta marcha Ciclodeportiva en el Calendario Nacional de Pruebas. En el 2016, se unió al proyecto como organizador el <strong>Club Ciclista Fucky Cáceres</strong>; no hay mejor organizador de un evento ciclista que los propios ciclistas.
              <br /><br />
              Para proteger la imagen de nuestra carrera y la de todas las marcas, la Marcha Ciclodeportiva Nor3xtrem ha sido registrada como Marca <strong>nor3xtrem</strong> en el Registro de Marcas y Patentes a nivel Nacional durante un periodo de diez años.
              <br /><br />
              La prueba se celebra con éxito rotundo desde 2017, juntando en Hervás a más de 1.200 ciclistas. Para el <strong>10 de Mayo de 2026</strong> se ha optado por continuar en la misma época del año, manteniendo la tradición y el espíritu deportivo.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src="/mosaicodemo3.jpeg" alt="Organización del evento" className="object-cover w-full h-auto" />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={contentVariants}
        className="container px-4 mx-auto my-16 md:my-24"
      >
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="md:order-last">
            <h2 
                className="mb-4 text-4xl font-bold md:text-5xl"
                style={{ color: ROSE_COLOR_HEX }}
            >
                La Esencia de Nor3xtreme
            </h2>
            <p 
                className="pr-4 text-base leading-relaxed border-r-4 md:text-lg"
                style={{ borderColor: ROSE_COLOR_HEX }}
            >
              La denominación <strong>Nor3xtrem</strong> surge de la localización geográfica y del objetivo que era tocar los 3 valles del norte extremeño: <strong>Valle Ambroz, Jerte y la Vera</strong>. Tras varias modificaciones de recorrido, actualmente nos centramos en el Valle del Ambroz y Valle del Jerte, donde superaremos algunas de las ascensiones más conocidas.
              <br /><br />
              La máxima y premisa de la carrera es disfrutar de los Valles del Norte Extremeño, consolidando nuestra carrera como un evento diferente y con vida. El recorrido discurrirá por carreteras locales con buen asfalto, entretenidas, diseñadas para el disfrute del cicloturismo durante sus <strong>130 km y 2750mD+</strong>.
              <br /><br />
              En definitiva, conjugamos el valor paisajístico con la orografía del lugar, la vida y esencia de la tierra extremeña, y la ilusión sin fin del <strong>Club Ciclista a Rueda</strong> por el éxito de la Nor3xtrem.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src="/mosaicodemo4.jpeg" alt="Paisaje de los valles" className="object-cover w-full h-auto" />
          </div>
        </div>
      </motion.section>

      <section className="container px-4 mx-auto my-16 md:my-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-4xl font-bold text-center md:text-5xl"
          style={{ color: ROSE_COLOR_HEX }}
        >
          El Recorrido y Sus Puertos
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {climbData.map((climb, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
              className="flex flex-col justify-between p-8 bg-black/80 rounded-xl"
            >
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">{climb.name}</h3>
                <p className="mb-4 text-sm font-light text-gray-400">({climb.category})</p>
                <p className="text-base md:text-lg">{climb.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Marcha;