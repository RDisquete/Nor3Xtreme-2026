import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const ROSE_COLOR_HEX = '#e5097f';
const LIGHT_ROSE_COLOR_HEX = '#f2a9c3';
const BASE_TEXT_COLOR = '#f3f4f6';

const Footer = () => {
    
  const applyIconHoverStyles = () => ({
      style: { color: ROSE_COLOR_HEX },
      onMouseEnter: (e) => { e.currentTarget.style.color = LIGHT_ROSE_COLOR_HEX; },
      onMouseLeave: (e) => { e.currentTarget.style.color = ROSE_COLOR_HEX; },
  });

  return (
    <footer 
      className="relative z-20 px-8 py-6 text-sm text-center bg-black border-t md:px-16"
      style={{ 
        borderColor: ROSE_COLOR_HEX, 
        color: BASE_TEXT_COLOR 
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        <p className="font-light tracking-wide opacity-90">
          © 2026 Marcha Ciclodeportiva Nor3xtrem.
        </p>
        <div className="flex justify-center space-x-5">
          <a href="https://www.instagram.com/nor3xtrem" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" {...applyIconHoverStyles()}>
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/Nor3xtrem.es" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" {...applyIconHoverStyles()}>
            <FaFacebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute flex items-center bottom-2 right-4 md:right-8">
        <a 
          href="https://rdisquete.es/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-end no-underline group"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] opacity-30 group-hover:opacity-60 transition-opacity">
            Created by
          </span>
          <span 
            className="text-[11px] font-bold tracking-tighter opacity-40 group-hover:opacity-100 transition-all duration-300"
            style={{ color: ROSE_COLOR_HEX }}
          >
            RDisquete
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;