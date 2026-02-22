import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_COLOR_HEX = '#f2a9c3'; 
const BASE_TEXT_COLOR = '#f3f4f6'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubMenu(null);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenSubMenu(null);
  };

  const handleSubMenuClick = (menuName: string) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };
  
  const applyHoverStyles = (isSubmenu: boolean, isBgHover: boolean = false) => {
    const defaultTextColor = isSubmenu ? LIGHT_ROSE_COLOR_HEX : BASE_TEXT_COLOR;
    const hoverBgColor = isBgHover ? ROSE_COLOR_HEX : 'transparent';
    const hoverTextColor = isBgHover ? 'white' : ROSE_COLOR_HEX;

    return {
      style: { 
        color: defaultTextColor,
        backgroundColor: 'transparent',
      },
      onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isBgHover) {
          e.currentTarget.style.backgroundColor = hoverBgColor;
          e.currentTarget.style.color = hoverTextColor;
        } else {
          e.currentTarget.style.color = hoverTextColor;
        }
      },
      onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isBgHover) {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = defaultTextColor;
        } else {
          e.currentTarget.style.color = defaultTextColor;
        }
      },
    };
  };


  const navItems = [
    { label: 'La Marcha', to: '/marcha', submenu: null },
    { label: 'Reglamento', to: '/reglamento', submenu: null },
    { label: 'Recorrido', to: '/recorridos', submenu: null },
    {
      label: 'Altimetrías',
      to: '/altimetrias',
      submenu: [
        { label: 'Puerto de la Garganta', to: '/altimetrias#puerto-de-la-garganta' }, 
        { label: 'Puerto de Honduras', to: '/altimetrias#puerto-de-honduras' },
        { label: 'Puerto de Cabezabellosa', to: '/altimetrias#puerto-de-cabezabellosa' },
      ]
    },
     { 
      label: 'Servicios de carrera', 
      to: '/servicios-carrera', 
      submenu: [
        { label: 'Track oficial', to: '/servicios-carrera#track-oficial' },
        { label: 'Retirada de dorsales', to: '/servicios-carrera#retirada-dorsales' },
        { label: 'Cómo llegar', to: '/servicios-carrera#como-llegar' },
        { label: 'Zona 0 y parking', to: '/servicios-carrera#zona-0-y-parking' },
        { label: 'Comida', to: '/servicios-carrera#comida' },
        { label: 'Duchas', to: '/servicios-carrera#duchas' },
        { label: 'Libro del ciclista', to: '/servicios-carrera#libro-del-ciclista' },
        { label: 'Galería de Fotos', to: '/servicios-carrera#galeria-de-fotos' },
    ]},
    { label: 'Resultados', to: '/resultados', submenu: null },
    { label: 'Alojamientos', to: '/alojamiento', submenu: null },
    { label: 'Contacto', to: '/contacto', submenu: null, isButton: true },
  ];

  const renderNavLinks = (isDesktop: boolean) => (
    <ul className={`flex ${isDesktop ? 'space-x-6' : 'flex-col space-y-6 text-2xl font-bold items-center'}`}>
      {navItems.map((item) => (
        <li key={item.label} className={isDesktop ? 'relative group' : ''}>
          {item.submenu ? (
            <>
              <Link
                to={item.to}
                className={`transition-colors duration-300 flex items-center`}
                style={{ color: BASE_TEXT_COLOR }}
                onMouseEnter={(e) => { e.currentTarget.style.color = ROSE_COLOR_HEX; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = BASE_TEXT_COLOR; }}
                onClick={isDesktop ? undefined : () => handleSubMenuClick(item.label)} 
              >
                {item.label}
                <motion.svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDesktop ? '' : (openSubMenu === item.label ? 'rotate-180' : '')}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </Link>

              {isDesktop && (
                <ul className="absolute left-0 z-10 hidden w-48 py-2 bg-black rounded-md shadow-lg group-hover:block bg-opacity-90">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.label}>
                      <Link 
                        to={subItem.to} 
                        className="block px-4 py-2 transition-colors duration-300" 
                        {...applyHoverStyles(false, true)}
                        onClick={handleLinkClick}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              {!isDesktop && openSubMenu === item.label && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col items-center mt-2 space-y-2 text-lg font-normal"
                >
                  {item.submenu.map((subItem) => (
                    <li key={subItem.label}>
                      <Link 
                        to={subItem.to} 
                        onClick={handleLinkClick} 
                        className="transition-colors duration-300"
                        {...applyHoverStyles(true, false)}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </>
          ) : (
            <Link 
                to={item.to} 
                className={`transition-colors duration-300`} 
                style={{ color: BASE_TEXT_COLOR }}
                onMouseEnter={(e) => { e.currentTarget.style.color = ROSE_COLOR_HEX; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = BASE_TEXT_COLOR; }}
                onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
  
  return (
    <motion.header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-black bg-opacity-70' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="relative flex items-center justify-between px-8 py-4 md:px-16">
        <motion.div
            initial={{ scale: 1, filter: 'drop-shadow(0 0 0px transparent)' }}
            whileHover={{ 
                scale: 1.05, 
                filter: `drop-shadow(0 0 10px ${ROSE_COLOR_HEX})`, 
                transition: { duration: 0.3 }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-pointer"
        >
            <Link to="/">
                <img 
                    src="/logo index.webp"
                    alt="Logo Nor3xtrem" 
                    className="w-auto h-12 md:h-16 lg:h-20"
                />
            </Link>
        </motion.div>
        
        <nav className="hidden md:block">
          {renderNavLinks(true)}
        </nav>
        
        <button
          onClick={toggleMenu}
          className="z-50 block md:hidden"
          style={{ color: ROSE_COLOR_HEX }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black bg-opacity-95 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {renderNavLinks(false)}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;