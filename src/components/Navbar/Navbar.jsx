import React, { useState } from "react";
import { 
  FaHome, 
  FaLandmark, 
  FaImages, 
  FaImage, 
  FaCalendarAlt,
  FaGraduationCap,
  FaSearch,
  FaUsers,
  FaBars,
  FaTimes,
  FaCoffee
} from "react-icons/fa";

const Logo = "/public/LogoHome/logo-white.png";

const Menu = [
    { 
      id: 1, 
      name: "Inicio", 
      icon: <FaHome className="text-xl" />,
      active: true,
      colorGroup: "first"
    },
    { 
      id: 2, 
      name: "Institucion", 
      icon: <FaLandmark className="text-xl" />,
      active: false,
      colorGroup: "first"
    },
    { 
      id: 3, 
      name: "Comunicacion", 
      icon: <FaImages className="text-xl" />,
      active: false,
      colorGroup: "first"
    },
    { 
      id: 4, 
      name: "Cultura", 
      icon: <FaImage className="text-xl" />,
      active: false,
      colorGroup: "first"
    },
    { 
      id: 5, 
      name: "Museos", 
      icon: <FaCalendarAlt className="text-xl" />,
      active: false,
      colorGroup: "first"
    },
    { 
      id: 6, 
      name: "Transparencia", 
      icon: <FaGraduationCap className="text-xl" />,
      active: false,
      colorGroup: "second"
    },
    { 
      id: 7, 
      name: "Sistemas", 
      icon: <FaSearch className="text-xl" />,
      active: false,
      colorGroup: "second"
    },
    { 
      id: 8, 
      name: "Contactos", 
      icon: <FaUsers className="text-xl" />,
      active: false,
      colorGroup: "second"
    }
];

// Componente para botones con efecto outline animado
const DrawOutlineButton = ({ children, isActive, colorGroup, icon, onClick, ...rest }) => {
  const colors = {
    first: {
      text: "text-[#D4AC0D]",
      hoverText: "hover:text-[#F1C40F]",
      border: "bg-[#D4AC0D]",
      hoverBorder: "group-hover:bg-[#F1C40F]"
    },
    second: {
      text: "text-[#1A5276]",
      hoverText: "hover:text-[#21618C]",
      border: "bg-[#1A5276]",
      hoverBorder: "group-hover:bg-[#21618C]"
    }
  };

  const colorSet = colors[colorGroup] || colors.first;

  return (
    <button
      onClick={onClick}
      {...rest}
      className={`group relative px-4 py-3 font-medium transition-all duration-[400ms] flex items-center gap-3 ${
        isActive ? colorSet.text : 'text-gray-300'
      } ${colorSet.hoverText} ${isActive ? 'scale-105' : ''} w-full rounded-lg`}
    >
      {/* Icono animado */}
      <div className={`transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 ${isActive ? 'scale-110' : ''}`}>
        {icon}
      </div>
      
      {/* Texto */}
      <span className="text-sm font-semibold tracking-wide">{children}</span>

      {/* Efecto outline animado */}
      {/* TOP */}
      <span className={`absolute left-0 top-0 h-[2px] w-0 ${colorSet.border} ${colorSet.hoverBorder} transition-all duration-100 group-hover:w-full ${isActive ? 'w-full' : ''}`} />

      {/* RIGHT */}
      <span className={`absolute right-0 top-0 h-0 w-[2px] ${colorSet.border} ${colorSet.hoverBorder} transition-all delay-100 duration-100 group-hover:h-full ${isActive ? 'h-full' : ''}`} />

      {/* BOTTOM */}
      <span className={`absolute bottom-0 right-0 h-[2px] w-0 ${colorSet.border} ${colorSet.hoverBorder} transition-all delay-200 duration-100 group-hover:w-full ${isActive ? 'w-full' : ''}`} />

      {/* LEFT */}
      <span className={`absolute bottom-0 left-0 h-0 w-[2px] ${colorSet.border} ${colorSet.hoverBorder} transition-all delay-300 duration-100 group-hover:h-full ${isActive ? 'h-full' : ''}`} />

      {/* Efecto de brillo interior en hover */}
      <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </button>
  );
};

// Componente para el botón de Login con animación
const AnimatedLoginButton = ({ children, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="group relative px-6 py-3 font-medium text-gray-900 transition-all duration-[400ms] hover:scale-105 bg-gradient-to-r from-[#D4AC0D] to-[#F1C40F] rounded-full flex items-center gap-3 overflow-hidden"
    >
      {/* Efecto de partículas animadas */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Texto e icono */}
      <span className="relative z-10 font-semibold">{children}</span>
      <FaCoffee className="relative z-10 text-xl drop-shadow-sm transform transition-transform duration-300 group-hover:rotate-12" />
    </button>
  );
};

// Botón de hamburguesa con animación líquida
const LiquidMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AC0D] to-[#1A5276] md:hidden z-50"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      {/* Efecto líquido */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AC0D] to-[#1A5276] transition-all duration-500 ${isOpen ? 'scale-125 opacity-20' : 'scale-100'}`}></div>
      
      {/* Icono animado */}
      <div className="relative z-10">
        {isOpen ? (
          <FaTimes className="text-white text-2xl transition-transform duration-500 rotate-180" />
        ) : (
          <FaBars className="text-white text-2xl transition-transform duration-500" />
        )}
      </div>
      
      {/* Puntos animados */}
      <div className="absolute inset-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-700 ${
              isOpen 
                ? `opacity-0 scale-0` 
                : `opacity-100 animate-pulse`
            }`}
            style={{
              top: `${30 + i * 20}%`,
              left: `${30 + i * 20}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg relative">
        <div className="container py-3">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider"
              >
                <img src={Logo} alt="Logo" className="w-28 h-auto" />
              </a>
            </div>

            {/* Botón hamburguesa para móvil */}
            <div className="md:hidden">
              <LiquidMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            {/* Menú para desktop */}
            <div className="hidden md:flex items-center gap-4">
              <ul className="flex items-center justify-center gap-1">
                {Menu.map((menu) => (
                  <li key={menu.id} className="relative">
                    <DrawOutlineButton
                      isActive={menu.active}
                      colorGroup={menu.colorGroup}
                      icon={menu.icon}
                      className="min-w-[100px]"
                    >
                      {menu.name}
                    </DrawOutlineButton>
                    
                    {/* Indicador de item activo */}
                    {menu.active && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3">
                        <div className="absolute inset-0 bg-[#D4AC0D] rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-3 h-3 bg-[#D4AC0D] rounded-full"></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Botón Login en desktop */}
              <div data-aos="fade-down" data-aos-once="true" data-aos-delay="600">
                <AnimatedLoginButton>
                  Login
                </AnimatedLoginButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria decorativa */}
        <div className="h-1 w-full bg-gradient-to-r from-[#D4AC0D] via-transparent to-[#1A5276]"></div>

        {/* Liquid Side Nav para móvil */}
        <div className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          {/* Overlay con efecto líquido */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm transition-all duration-700 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
          ></div>
          
          {/* Side Nav con animación líquida */}
          <div 
            className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-transform duration-700 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Encabezado del side nav */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <img src={Logo} alt="Logo" className="w-32 h-auto" />
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <FaTimes className="text-white text-xl" />
                </button>
              </div>
              
            </div>
            
            {/* Menú en side nav */}
            <div className="p-6 overflow-y-auto h-[calc(100vh-200px)]">
              <div className="space-y-2">
                {Menu.map((menu) => (
                  <DrawOutlineButton
                    key={menu.id}
                    isActive={menu.active}
                    colorGroup={menu.colorGroup}
                    icon={menu.icon}
                    onClick={closeMenu}
                    className="w-full justify-start"
                  >
                    {menu.name}
                  </DrawOutlineButton>
                ))}
              </div>
              
              {/* Separador */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              
              {/* Botón Login en móvil */}
              <div className="mt-6">
                <AnimatedLoginButton onClick={closeMenu} className="w-full justify-center">
                  Login
                </AnimatedLoginButton>
              </div>
              
              {/* Información adicional */}
              <div className="mt-8 p-4 rounded-lg bg-gray-800/50">
                <p className="text-gray-300 text-sm text-center">
                  Fundación Cultural del Banco Central de Bolivia
                </p>
                <p className="text-gray-400 text-xs text-center mt-2">
                  Museos • Espacios Culturales • Patrimonio
                </p>
              </div>
            </div>
            
            {/* Pie del side nav */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
              <div className="text-center text-gray-400 text-xs">
                © {new Date().getFullYear()} FCBCB - Todos los derechos reservados
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;