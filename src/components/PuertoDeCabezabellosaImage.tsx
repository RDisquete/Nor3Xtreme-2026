import React from 'react';

const PerfilCabezabellosa = () => {
  return (
    <div className="relative p-8 bg-black md:p-16 text-rose-100">
    
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{ backgroundImage: 'url(/perfil-cabezabellosa.webp)' }} 
      />

     
      <div className="relative z-10 w-full max-w-4xl p-6 mx-auto border border-gray-700 shadow-lg bg-gray-900/60 rounded-xl backdrop-blur-md">
        <h2 className="mb-4 text-3xl font-black leading-tight md:text-4xl text-rose-500">
          Puerto de Cabezabellosa
        </h2>
        <p className="text-base md:text-lg">
          Uno de los puertos más exigentes del recorrido. Con 9,1 km al 5,4% y una altitud de 933 m, este puerto es todo un reto para los ciclistas más valientes.
        </p>
      </div>
    </div>
  );
};

export default PerfilCabezabellosa;