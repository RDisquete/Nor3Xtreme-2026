import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const carouselImages: string[] = ['/mosaicodemo2.jpeg', '/mosaicodemo16.jpg', '/mosaicodemo5.jpeg', '/mosaicodemo7.jpeg', '/mosaicodemo23.jpg', '/mosaicodemo14.jpeg', '/mosaicodemo15.jpeg', '/mosaicodemo3.jpeg'];

const Highlights = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const roseColorStyle = { color: '#e5097f' };

    const openModal = (image: string) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = '';
    };

    const updateScrollButtons = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 1);
        }
    };
    
    useEffect(() => {
        const currentRef = carouselRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', updateScrollButtons);
            updateScrollButtons();
            return () => {
                currentRef.removeEventListener('scroll', updateScrollButtons);
            };
        }
    }, []);

    const handleNext = () => {
        if (carouselRef.current && canScrollRight) {
            const scrollAmount = carouselRef.current.offsetWidth * 0.8;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (carouselRef.current && canScrollLeft) {
            const scrollAmount = carouselRef.current.offsetWidth * 0.8;
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full overflow-x-hidden text-white bg-black"> 
            <div className="absolute inset-0 z-0 overflow-x-hidden"> 
                <div className="absolute inset-0 bg-black opacity-60" />
                <div className="absolute inset-0 grid h-full grid-flow-col-dense auto-cols-[10vw] gap-2">
                    {mosaicItems.map((item, index) => (
                        <div 
                            key={index} 
                            className={`relative w-full h-full overflow-hidden ${item.className}`}
                        >
                            <img
                                src={item.src}
                                alt={`Mosaico ${index + 1}`}
                                className={`object-cover w-full h-full scale-110 ${item.isColor ? 'opacity-40' : 'filter grayscale opacity-30'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 p-8 md:p-16">
                <motion.h2
                    className="relative mb-8 text-4xl font-extrabold text-center md:text-6xl md:mb-12"
                    style={roseColorStyle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Momentos Destacados
                </motion.h2>

                <div className="relative w-full overflow-hidden">
                    <div 
                        ref={carouselRef}
                        className="flex px-4 py-8 space-x-8 overflow-x-auto lg:space-x-12 snap-x snap-mandatory hide-scrollbar"
                    >
                        {carouselImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-xl snap-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openModal(image)}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img
                                    src={image}
                                    alt={`Momento destacado ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={handlePrev}
                        disabled={!canScrollLeft}
                        className={`absolute top-1/2 left-0 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full transform -translate-x-1/2 hidden md:block ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={!canScrollRight}
                        className={`absolute top-1/2 right-0 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full transform translate-x-1/2 hidden md:block ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Imagen en vista completa"
                            className="max-w-full max-h-full rounded-lg shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Highlights;