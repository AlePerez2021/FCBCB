import React, { useState } from "react";
// Importar logos 
const LogoEscudoBolivia = "/public/LogoHome/logo_escudo_bolivia_0_0.png";
const LogoFCBCB = "/public/LogoHome/logo-white.png";

const HeaderPrincipal = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí agregar lógica para cambiar el tema global
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Buscando:", searchTerm);
      // Aquí iría la lógica de búsqueda
    }
  };

  return (
    <header className="w-full bg-white shadow-md">
      {/* Barra superior - Fondo blanco con buscador y tema */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          
          {/* Lado izquierdo: Texto institucional */}
          <div className="flex items-center mb-3 md:mb-0 w-full md:w-auto">
            <div className="flex items-center space-x-3">

            </div>
          </div>

          {/* Lado derecho: Buscador y controles */}
          <div className="flex items-center space-x-4 w-full md:w-auto">
            
            {/* Buscador estético */}
            <div className="relative flex-grow md:flex-grow-0">
              <form onSubmit={handleSearch} className="w-full">
                <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-full md:w-72' : 'w-full md:w-56'}`}>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    placeholder="Buscar museos, colecciones, eventos..."
                    className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 text-gray-800 placeholder-gray-500 transition-all"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}

                </div>
              </form>
            </div>

            {/* Botón de cambio de tema */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 transition-all duration-300 hover:shadow-md"
              aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              title={isDarkMode ? "Modo oscuro activado" : "Modo claro activado"}
            >
              {isDarkMode ? (
                // Icono de sol (modo claro)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Icono de luna (modo oscuro)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Botón de idioma */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-amber-700 transition-colors px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>ES</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Menú desplegable de idiomas */}
              <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700">Español (ES)</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700">English (EN)</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700">Português (PT)</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700">Quechua (QU)</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700">Aymara (AY)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo y menú principal - TODOS LOS ELEMENTOS CENTRADOS */}
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col items-center justify-center">
          
          {/* Contenedor principal centrado */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 xl:space-x-12">
            
            {/* Logo Escudo Bolivia */}
            <div className="flex-shrink-0">
              <img 
                src={LogoEscudoBolivia} 
                alt="Escudo Nacional de Bolivia" 
                className="h-32 w-32 md:h-36 md:w-36 object-contain"
              />
            </div>

            {/* Texto institucional CENTRADO */}
            <div className="text-center border-l-0 lg:border-l-4 lg:border-[#D4AC0D] lg:pl-8 border-r-0 lg:border-r-4 lg:border-[#D4AC0D] lg:pr-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                FUNDACIÓN CULTURAL
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-800 mt-1 font-semibold">
                Banco Central de Bolivia
              </div>
              <div className="text-amber-700 font-medium mt-2 text-lg md:text-xl">
                Museos • Espacios Culturales • Patrimonio
              </div>
            </div>

            {/* Logo FCBCB con fondo redondo negro */}
            <div className="flex flex-col items-center">
              <div className="relative">
                {/* Fondo redondo negro */}
                <div className="absolute inset-0 bg-black rounded-full -z-10 transform scale-105"></div>
                
                {/* Fondo circular degradado para mejor estética */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full -z-10"></div>
                
                {/* Sombra exterior para destacar */}
                <div className="absolute inset-0 rounded-full shadow-2xl shadow-gray-900/50 -z-10"></div>
                
                {/* Borde decorativo */}
                <div className="absolute inset-0 rounded-full border-4 border-amber-600/30 -z-10"></div>
                
                {/* Logo blanco sobre fondo negro */}
                <div className="bg-black rounded-full p-3 flex items-center justify-center h-36 w-36 md:h-40 md:w-40">
                  <img 
                    src={LogoFCBCB} 
                    alt="Logo Fundación Cultural BCB" 
                    className="h-28 w-28 md:h-32 md:w-32 object-contain p-1"
                  />
                </div>
                
                {/* Anillo exterior decorativo */}
                <div className="absolute -inset-2 rounded-full border-2 border-amber-500/20 pointer-events-none"></div>
              </div>
              
              {/* Texto bajo el logo */}
              <div className="text-center mt-3">
                <div className="text-sm font-bold text-amber-800">FCBCB</div>
                <div className="text-xs text-gray-600">Fundación Cultural</div>
              </div>
            </div>
          </div>

          {/* Línea divisoria decorativa */}
          <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-[#1A5276] to-transparent mt-8 rounded-full"></div>
        </div>
      </div>

      {/* Menú de navegación DIVIDIDO EN DOS COLORES */}
      <div className="border-t border-b border-gray-200">
        <div className="container mx-auto">
          {/* Línea divisoria entre las dos mitades */}
          <div className="h-3 w-full bg-gradient-to-r from-[#D4AC0D] via-transparent to-[#1A5276]"></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPrincipal;