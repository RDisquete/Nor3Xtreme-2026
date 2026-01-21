/* eslint-env node */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 💡 AÑADIDO: safelist para prevenir la purga de clases cruciales en producción (Netlify)
  safelist: [
    // Si usas tu color personalizado 'rose-500' de forma dinámica (ej: `bg-${color}-500`),
    // debes listarlo aquí para que no sea eliminado por la purga.
    'bg-rose-500', 
    'text-rose-500', 
    'border-rose-500', 
    // Si usas el color renombrado a 'primary' (ver abajo), añade:
    'bg-primary',
    'text-primary',
    // ... añade cualquier otra clase crucial de color/utilidad que se genere dinámicamente
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        // 💡 RECOMENDACIÓN: Usar un nombre personalizado como 'primary' para tu color principal.
        // Esto evita cualquier conflicto potencial con la paleta base de Tailwind.
        'primary': '#e5097f', 

        // Si prefieres mantener la sobrescritura de 'rose-500':
        'rose-500': '#e5097f', 
    
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}