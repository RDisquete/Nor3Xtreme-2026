import React from 'react';
import { motion, Variants } from 'framer-motion';

const ROSE_COLOR_HEX = '#e5097f'; 
const LIGHT_ROSE_COLOR_HEX = '#f2a9c3'; 

const roseColorStyle = { color: ROSE_COLOR_HEX };
const lightRoseColorStyle = { color: LIGHT_ROSE_COLOR_HEX };
const roseBorderStyle = { borderColor: ROSE_COLOR_HEX }; 
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const titleVariants = {
    hidden: { y: 150 },
    visible: { y: 0, transition: { duration: 0.2 } },
};

const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={roseColorStyle}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-5 4H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-2M9 3v2a2 2 0 002 2h2" />
    </svg>
);

const StartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={roseColorStyle}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const BikeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={roseColorStyle}>
        <path d="M12.5 12a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0z" />
        <path fillRule="evenodd" d="M20 10a4 4 0 00-4-4h-3V5a2 2 0 10-4 0v1H5a4 4 0 00-4 4v10a2 2 0 002 2h14a2 2 0 002-2V10zm-6 0h-2V7a1 1 0 112 0v3zm0 4h-2a1 1 0 110-2h2a1 1 0 110 2zm0 4h-2a1 1 0 110-2h2a1 1 0 110 2z" clipRule="evenodd" />
    </svg>
);

const AvituallamientoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={roseColorStyle}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const RulesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={roseColorStyle}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0V3m0 2H9m-1.5 2H5.5c-.276 0-.5.224-.5.5v2c0 .276.224.5.5.5H9c.276 0 .5-.224.5-.5v-2c0-.276-.224-.5-.5-.5zm9 0H14.5c-.276 0-.5.224-.5.5v2c0 .276.224.5.5.5H18c.276 0 .5-.224.5-.5v-2c0-.276-.224-.5-.5-.5z" />
    </svg>
);

const Reglamento = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden font-sans bg-bg-neutral-900 text-rose-100">
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
                              REGLAMENTO NOR3XTREM 2026
                          </motion.h1>
                      </div>
                      
                      <motion.h2
                          className="mt-4 text-2xl font-bold uppercase md:text-3xl lg:text-5xl drop-shadow-lg"
                          style={lightRoseColorStyle}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                      >
                          Nor3xtrem 2026
                      </motion.h2>
                  </motion.div>
              </section>
            </div>

            <div className="container relative z-10 px-4 py-24 mx-auto">
                <motion.div
                    initial="show"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="space-y-24"
                >
                    {/* Art. 1 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8" 
                        style={roseBorderStyle} 
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 1</h2>
                            <p className="text-lg leading-relaxed">
                                Nor3xtrem es una marcha CICLODEPORTIVA, con velocidades medias y tiempos de paso pre establecidos, y con dos tramos cronometrados en las condiciones que se reflejan en el Reglamento “Ciclismo para Todos” de la RFEC, como especialidad ciclista que concibe este deporte como un ejercicio físico con fines de ocio y turísticos o culturales.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                La marcha es CicloDeportiva al contar con un número de ciclistas superior a 500, será considerada a todos los efectos como una prueba CicloDeportiva sujeta a la normativa al efecto.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                La prueba, aun siendo controlada por Guardia Civil mediante cápsulas de seguridad para evitar el posible tráfico, no está exenta de que los participantes deban cumplir en todo momento las normas de tráfico. Por ello:
                            </p>
                            <ol className="mt-4 space-y-2 text-lg list-decimal list-inside">
                                <li>No sobrepasarán a los vehículos de apertura o cierre de la prueba.</li>
                                <li>Respetarán en todo momento las indicaciones de Guardia Civil, organizadores y personal auxiliar habilitado.</li>
                                <li>Circularán por el carril derecho no invadiendo en ningún momento el carril izquierdo, y de no estar éstos delimitados, circularán lo más a la derecha posible sobre la vía.</li>
                                <li>El uso de la vía será dirigido por la Guardia Civil que marcará la cabeza de carrera y cierre.</li>
                            </ol>

                            <p className="mt-4 text-lg leading-relaxed">
                                Se establecen 2 distancias:
                            </p>
                            <ul className="mt-2 space-y-2 text-lg list-disc list-inside">
                                <li>Nor3xtrem Ruta Larga: 143 km y 2860 d+ (inscripción en cajón 1 - Sprint y cajón 2 - Clásica).</li>
                                <li>Nor3xtrem Ruta Corta: 115 km y 2100 d+ (inscripción en cajón 3 - Cicloturismo).</li>
                            </ul>

                            <p className="mt-4 text-lg leading-relaxed">
                                Por lo que habrá 3 cápsulas de seguridad:
                            </p>
                            <ul className="mt-2 space-y-2 text-lg list-disc list-inside">
                                <li>Primer Cajón; Grupo Sprint (1ª Cápsula de seguridad)</li>
                                <li>Segundo Cajón; Grupo Clásica (2ª Cápsula de seguridad)</li>
                                <li>Tercer Cajón; Grupo Cicloturismo (3ª Cápsula de seguridad)</li>
                            </ul>

                            <p className="mt-4 text-lg leading-relaxed">
                                La salida se dará a los participantes del primer cajón a las 8:00h del 10 de mayo. Cuando todos los participantes de ese cajón hayan salido se esperará 5 minutos para dar la salida al cajón 2. Cuando todos los participantes de los cajones 1 y 2 hayan hecho el bucle de La garganta (1 puerto) se dará la salida al cajón número 3 (salida a las 9:30h).
                            </p>

                            <p className="mt-4 text-lg leading-relaxed">
                                Cada “Cápsula de seguridad” contará con coche de cabeza, moto con bandera roja y moto con bandera verde. Cada cápsula tiene establecida una velocidad media para el inicio del grupo y una velocidad media para los participantes del final del grupo, quedando en potestad de la Guardia Civil marcar ese margen según las circunstancias.
                            </p>

                            <p className="mt-4 text-lg leading-relaxed">
                                Si por cualquier circunstancia un participante fuera rebasado por la bandera verde de la cápsula de seguridad en la que se encuentra, pasará a tráfico abierto y deberá respetar las normas de circulación y podrá incorporarse a la cápsula que rueda por detrás de él. Todos los ciclistas adelantados por moto bandera verde seguirán disfrutando de los servicios incluidos en la inscripción (avituallamientos, cronometraje, asistencia médica y mecánica, etc.).
                            </p>

                            <p className="mt-4 text-lg leading-relaxed">
                                La Organización habilitará un Trofeo para cronometrar segmentos de la marcha de tal forma que los ciclistas puedan disfrutar de la marcha en determinadas zonas y competir en otros segmentos cronometrados. El Trofeo se desarrollará en la forma y condiciones que se especifiquen en este Reglamento y en la web oficial www.nor3xtrem.es.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 2 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <StartIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 2</h2>
                            <p className="text-lg leading-relaxed">
                                Nor3xtrem 2026 tendrá la salida oficial a las 08:00 del 10 de mayo de 2026, Avenida de España en Hervás (Cáceres) para los cajones 1 y 2. Para el cajón 3 la salida oficial será a las 9:30h del 10 de mayo de 2026 en el mismo lugar.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 3 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <BikeIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 3 - Recorridos</h2>
                            <p className="text-lg leading-relaxed">
                                Cada participante elegirá el recorrido que desea realizar:
                            </p>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li>Ruta larga (cajón Sprint y cajón Clásica): 143 km, 2850/2860 d+ (según medición oficial).</li>
                                <li>Ruta corta (cajón Cicloturista): 115 km, 2100 d+.</li>
                            </ul>
                            <p className="mt-4 text-lg leading-relaxed">
                                Velocidades medias orientativas por cajón: Sprint entre 25 y 28 km/h, Clásica entre 21 y 24 km/h, Cicloturista entre 16,5 y 20 km/h. La participación está abierta a todo ciclista mayor de 18 años.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                Todo participante, al inscribirse, admite conocer las características del recorrido, su dureza y su condición física para elegir el cajón de salida adecuado. Los participantes que no puedan seguir el ritmo del cajón de salida serán absorbidos por la cápsula de seguridad que venga detrás y no podrán adelantar al coche de cabeza de esa cápsula, adaptando su ritmo al de la cápsula.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 4 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 4 - Inscripciones</h2>
                            <p className="text-lg leading-relaxed">
                                Para poder participar es necesario rellenar el boletín de inscripción en la forma que se especifique en el canal oficial de la prueba (www.nor3xtrem.es), y abonar los derechos antes de la fecha límite del 1 de abril de 2026. Se establece un límite de 1200 ciclistas.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                Después de la fecha límite, solo se aceptarán inscripciones si no se ha cubierto el cupo, a cambio de un recargo.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 5 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 5 - Derechos de inscripción</h2>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li>Ciclistas federados: 49€ hasta el 1 de febrero de 2026 y 58€ con posterioridad.</li>
                                <li>Ciclistas NO federados: incremento 13,50€ en concepto “licencia de un día”. Existe opción de tramitación por parte de los ciclistas.</li>
                                <li>Fecha límite de inscripciones: 1 de abril de 2026 o agotar límite máximo. La inscripción se considera efectiva en la fecha de abono.</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Art. 6 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 6 - Licencias y responsabilidad</h2>
                            <p className="text-lg leading-relaxed">
                                Para participar es obligatorio estar en posesión de la correspondiente licencia de ciclismo homologada por la Real Federación Española de Ciclismo (RFEC), o suscribir la licencia de día con el seguro proporcionado por la organización. No es válido el carnet de ciclista ni seguros privados.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                La participación en la prueba está bajo la responsabilidad y propio riesgo de los participantes. El participante, en el momento de su inscripción, manifiesta encontrarse físicamente apto para la prueba, haber entrenado, preparado y revisado médicamente si procede.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                Cualquier ciclista discapacitado que tome parte con una handbike deberá ir permanentemente acompañado por un ciclista vestido con un chaleco reflectante que circule detrás del discapacitado.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 7 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 7 - Validez de la inscripción</h2>
                            <p className="text-lg leading-relaxed">
                                SÓLO SE CONSIDERA UNA INSCRIPCIÓN VÁLIDA cuando se han abonado los derechos de inscripción. No se ACEPTAN INSCRIPCIONES A LA RECOGIDA DE DORSAL.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                El procedimiento de inscripción se especificará en la web www.nor3xtrem.es mediante pasarela de inscripciones o puntos de venta autorizados, y serán los únicos medios válidos para formalizar la inscripción en los plazos indicados.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 8 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 8 - Devoluciones y transferencias</h2>
                            <p className="text-lg leading-relaxed">
                                Las inscripciones se consideran DEFINITIVAS a 15 de marzo de 2026; por tanto, en caso de no poder participar por las razones justificadas en el párrafo siguiente, no habrá derecho a devolución salvo lo indicado. Las inscripciones son personales e intransferibles.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                En caso de lesión, enfermedad o causa grave, previa acreditación fehaciente, se podrá anular la inscripción antes del 15 de marzo de 2026 con un coste de 15€ en concepto de gastos de gestión.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 9 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 9 - Control de tiempos y dorsal</h2>
                            <p className="text-lg leading-relaxed">
                                Se realizarán puntos de control de tiempo de manera electrónica mediante chip con el objeto de controlar la seguridad de los participantes. Es obligatorio portar en todo momento el DORSAL, bien visible, sin doblar, sin ocultar ni alterar la publicidad.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                La Organización se reserva fijar los puntos de control que estime necesarios. El dorsal deberá ser entregado a la Organización cuando así sea requerido y siempre que el ciclista sea rebasado por el coche de cierre de carrera.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 10 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <BikeIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 10 - Sistema de eliminación</h2>
                            <p className="text-lg leading-relaxed">
                                Todo participante, al ser rebasado por el vehículo escoba de “Fin de Prueba” se considera fuera de la misma, y deberá entregar dorsal conforme al artículo 9. Podrá hacer uso del autobús escoba que habilitará la organización o continuar bajo su responsabilidad fuera de la marcha.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 11 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 11 - Recogida de dorsales</h2>
                            <p className="text-lg leading-relaxed">
                                La recogida de dorsales se realizará en el Pabellón Polideportivo de Hervás:
                            </p>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li>Sábado 9 de mayo de 17:00 a 21:00</li>
                                <li>Domingo 10 de mayo de 6:15 a 7:30</li>
                            </ul>
                            <p className="mt-4 text-lg leading-relaxed">
                                A todo participante se le facilitará dorsal chip delantero además de una pulsera control. El dorsal y la pulsera son personales e intransferibles; sin pulsera no se podrá acceder a los servicios y logística de la marcha. El dorsal debe ir visible en el lugar asignado; su pérdida o mala colocación no se considerará motivo de reclamación.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                La organización se reserva un número de dorsales para patrocinadores, VIP e invitados con lugar preferente en la línea de salida.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 12 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 12 - Vehículos acompañantes</h2>
                            <p className="text-lg leading-relaxed">
                                Todo participante que sea visto remolcado por cualquier vehículo será descalificado. Prohibición de vehículos acompañantes de acuerdo con la normativa de tráfico. Las fuerzas y cuerpos de seguridad del Estado podrán detener a vehículos acompañantes y éstos responderán por las sanciones derivadas del incumplimiento.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 13 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <AvituallamientoIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 13 - Avituallamientos</h2>
                            <p className="text-lg leading-relaxed">
                                Se dispondrá de avituallamientos sólidos y líquidos que serán informados mediante la web y RRSS. Se recomienda llevar la nutrición que cada corredor estime oportuna; en los avituallamientos se podrá disponer de agua, refrescos, sales, fruta, dulces, gominolas y bocadillitos.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 13 Bis */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 13 Bis - Tramos cronometrados</h2>
                            <p className="text-lg leading-relaxed">
                                Se recuerda que solo es competitivo y cronometrado el puerto de Honduras. Los ciclistas deberán circular en todo momento por el carril derecho lo más pegado posible a la derecha, facilitando el paso de autoridades y medios sanitarios.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 14 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 14 - Servicios médicos</h2>
                            <p className="text-lg leading-relaxed">
                                La organización dispondrá, durante el desarrollo de la prueba y de forma permanente, de un cuadro de médicos, ambulancias, varios puntos de socorro fijos, un puesto médico en la llegada, bus escoba y un servicio de duchas.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 15 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 15 - Asistencia mecánica</h2>
                            <p className="text-lg leading-relaxed">
                                La organización dispondrá de asistencia mecánica a lo largo de la prueba. La mano de obra será gratuita, pero las piezas de recambio correrán a cargo de los participantes. Solo se tendrán en cuenta reparaciones que se puedan solucionar en ruta, salvo pinchazos.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                Existirán puntos fijos de asistencia mecánica y puntos móviles en ruta. Todos los participantes deben portar sus recambios y ser autosuficientes; la asistencia mecánica es un servicio de cortesía.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 16 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 16 - Uso del casco</h2>
                            <p className="text-lg leading-relaxed">
                                ES OBLIGATORIO EL USO DEL CASCO DE CICLISMO HOMOLOGADO ABROCHADO durante todo el transcurso de la marcha.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 17 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 17 - Seguridad</h2>
                            <p className="text-lg leading-relaxed">
                                La Jefatura Provincial de Tráfico, Guardia Civil, Policía Municipal y Protección Civil velarán por la seguridad de la marcha.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 18 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 18 - Normas de circulación</h2>
                            <p className="text-lg leading-relaxed">
                                Todos los participantes deberán cumplir escrupulosamente las disposiciones de la Ley de la Seguridad Vial y su Reglamento. La prueba discurre por carreteras cerradas al tráfico en el tramo controlado por la Guardia Civil; quien no cumpla la ley será expulsado de la marcha y de ediciones posteriores.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                La inscripción supone que el participante asume los riesgos inherentes a participar en una prueba cerrada al tráfico y abierta al tráfico cuando la supere el coche de cierre de carrera.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 19 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 19 - Responsabilidad</h2>
                            <p className="text-lg leading-relaxed">
                                La organización no se hace responsable de ningún accidente del que pudiera ser causa o víctima el participante; éste debe estar cubierto por la correspondiente licencia federativa o por el seguro contratado a la organización. Tampoco responde de gastos, deudas, extravíos o averías de bicicletas u otro equipamiento.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                El participante exime a la organización de responsabilidad por pérdida o deterioro de objetos personales.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 20 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 20 - Recogida de dorsal</h2>
                            <p className="text-lg leading-relaxed">
                                Para recoger el dorsal ES OBLIGATORIO presentar el DNI y/o la licencia de la RFEC en caso de no haber suscrito el seguro propuesto por la organización. No se admite como seguro el Carnet de Ciclista ni seguros privados.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 21 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 21 - Medio ambiente</h2>
                            <p className="text-lg leading-relaxed">
                                Los participantes se comprometen a no arrojar desperdicios ni envoltorios fuera de los lugares señalados. En los puntos de avituallamiento se habilitarán contenedores. Cualquier participante que arroje basura será automáticamente descalificado y expulsado de la marcha.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 22 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 22 - Modificaciones</h2>
                            <p className="text-lg leading-relaxed">
                                La organización se reserva el derecho de realizar las modificaciones oportunas cuando lo estime necesario, así como el derecho de admisión.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 23 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 23 - Dopaje</h2>
                            <p className="text-lg leading-relaxed">
                                Aunque legalmente puedan inscribirse, la Organización declara NON GRATA la participación de personas incluidas en procesos relativos a dopaje y aconseja que elijan otros eventos.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 24 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 24 - Derechos de imagen</h2>
                            <p className="text-lg leading-relaxed">
                                La aceptación del presente reglamento implica que el participante autoriza a los organizadores a la grabación total o parcial de su participación y al uso de su imagen para promoción y difusión de la Nor3xtrem 2026 en todos los medios, cediendo los derechos relativos sin compensación económica.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                Este artículo se extiende a fotografías realizadas durante la prueba y al uso en promociones, mailings de patrocinadores y demás comunicaciones relacionadas.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 25 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 25 - Aceptación del reglamento</h2>
                            <p className="text-lg leading-relaxed">
                                El mero hecho de inscribirse en esta prueba supone la aceptación del presente reglamento. La exención de responsabilidad estará sujeta a lo establecido en la normativa aplicable (Real Decreto y reglamentos vigentes).
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 26 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 26 - Penalizaciones</h2>
                            <p className="text-lg leading-relaxed">
                                De manera estricta, se penalizará a aquellos participantes que:
                            </p>
                            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                                <li>A) No respeten las normas de circulación (descalificación y expulsión).</li>
                                <li>B) No respeten las consignas de seguridad indicadas por fuerzas del orden y organización.</li>
                                <li>C) No usen el casco debidamente abrochado (descalificación y expulsión).</li>
                                <li>D) No pasen por el control de salida o por otros puntos de control (descalificación y expulsión).</li>
                                <li>E) Ensucien o degraden el itinerario arrojando desperdicios.</li>
                                <li>F) Dispongan de vehículo de apoyo propio entorpeciendo la marcha (descalificación y expulsión).</li>
                                <li>G) Se comporten de forma que impidan el normal desarrollo de la prueba o vayan en contra del reglamento (descalificación y expulsión).</li>
                                <li>H) Se sitúen en lugares de salida anteriores a los permitidos por su dorsal (no hay sanción por situarse en zona posterior).</li>
                            </ul>
                            <p className="mt-4 text-lg leading-relaxed">
                                La penalización será la descalificación, inclusión en listados de sancionados y prohibición de participar en otras ediciones.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 27 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 27 - Colaboradores de seguridad</h2>
                            <p className="text-lg leading-relaxed">
                                La organización designará un grupo de participantes cuya función será velar por la seguridad de la prueba. Sus comunicaciones tendrán el mismo valor que las denuncias de la organización.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 28 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 28 - Suspensión</h2>
                            <p className="text-lg leading-relaxed">
                                La organización podrá suspender la prueba, temporal o definitivamente, por causas ajenas a su voluntad o por medidas gubernativas que afecten la seguridad. En caso de suspensión, los participantes no tendrán derecho a reembolso alguno, aunque conservarán su dorsal para la siguiente convocatoria.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 29 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 29 - Clasificaciones y cambios</h2>
                            <p className="text-lg leading-relaxed">
                                La Organización publicará un listado informativo con el tiempo de cada participante, pudiendo realizar clasificaciones parciales y premios no dinerarios. Se reserva el derecho de realizar cambios en los recorridos oficiales publicados cuando sea necesario por razones técnicas o por exigencia de las Fuerzas y Cuerpos de Seguridad del Estado.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 30 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 30 - Recomendación médica</h2>
                            <p className="text-lg leading-relaxed">
                                Se recomienda encarecidamente a los participantes hacerse un reconocimiento médico antes de participar en la prueba.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 31 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 31 - Protección de Datos</h2>
                            <p className="text-lg leading-relaxed">
                                El Club Ciclista Fucky Cáceres garantiza el pleno cumplimiento de la normativa de Protección de Datos de Carácter Personal. De acuerdo con el Real Decreto 5/2018 de 27 de julio, el firmante queda informado y presta su consentimiento a la incorporación de sus datos a los ficheros del Club y al tratamiento de los mismos para uso administrativo y promoción exclusiva relacionados con el evento o futuras ediciones.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 32 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <RulesIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 32 - Notificaciones</h2>
                            <p className="text-lg leading-relaxed">
                                Todas las comunicaciones oficiales relativas al reglamento, suspensiones, aplazamientos o cualquier otra información se realizarán a través de la web oficial (www.nor3xtrem.es) como único conducto oficial. Es obligación del inscrito mantenerse informado a través de la web.
                            </p>
                        </div>
                    </motion.section>

                    {/* Art. 33 */}
                    <motion.section 
                        variants={itemVariants} 
                        className="flex flex-col pb-8 border-b-2 md:flex-row md:space-x-8"
                        style={roseBorderStyle}
                    >
                        <div className="hidden md:block">
                            <DocumentIcon />
                        </div>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl" style={roseColorStyle}>Art. 33 - Trofeo Montaña</h2>
                            <p className="text-lg leading-relaxed">
                                La organización establecerá un Trofeo patrocinado que cronometrará el segmento determinado en el puerto de Honduras. Los tiempos oficiales serán los certificados por la empresa de cronometraje; no se admitirán tiempos de aplicaciones móviles. Tras la finalización de la edición 2026 se procederá a la entrega de premios en las categorías masculinas y femeninas. Todas las condiciones del Trofeo de Montaña se publicarán en la web oficial.
                            </p>
                        </div>
                    </motion.section>
                </motion.div>
            </div>
        </div>
    );
};

export default Reglamento;