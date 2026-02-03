import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // ← Añade Link
import { motion, AnimatePresence } from "framer-motion";
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
  FaCoffee,
  FaChevronDown
} from "react-icons/fa";
import { path } from "framer-motion/client";

const Logo = "/LogoHome/logo-white.png";

// ── ESTRUCTURA DEL MENÚ ────────────────────────────────────────────────
// Estructura con submenús 
const Menu = [
  { 
    id: 1, 
    name: "Inicio", 
    icon: <FaHome className="text-xl" />,
    active: true,
    colorGroup: "first",
    path: "/" // ← para usar con react-router después
  },
  { 
    id: 2, 
    name: "Institucion", 
    icon: <FaLandmark className="text-xl" />,
    active: false,
    colorGroup: "first",
    subItems: [
      { name: "Historia",  path: "/institucion/historia"},
      { name: "Misión y Visión", path: "/institucion/mision-vision" },
      { name: "Presidencia", path:"/institucion/presidencia" },
      { name: "Consejo de Administración" , path:"/institucion/consejo-administracion"},
      { name: "Informe de Gestión", path:"/institucion/Informe-Gestion" },
      { name: "Preguntas Frecuentes", path:"/institucion/preguntas-frecuentes" },
      { name: "Auditoría Interna", path:"/institucion/auditoria-interna" },
    ]
  },
  { 
    id: 3, 
    name: "Comunicacion", 
    icon: <FaImages className="text-xl" />,
    active: false,
    colorGroup: "first",
    subItems: [
      { name: "Catálogo de Publicaciones", path:"/Comunicacion/catalogo-publicaciones" },
      { name: "Boletines Institucionales", path:"/Comunicacion/boletines-institucionales" },
      { name: "Notas de Presidencia", path:"/Comunicacion/notas-presidencia" },
      { 
        name: "Notas de Prensa", 
        subSubItems: [
          { 
            name: "Notas de Prensa FCBCB", 
            path: "/comunicacion/notas-prensa/fcbcb" 
          },
          { 
            name: "Notas de Prensa ABNB", 
            path: "/comunicacion/notas-prensa/abnb" 
          },
          { 
            name: "Notas de Prensa CCP", 
            path: "/comunicacion/notas-prensa/CCP" 
          },
          { 
            name: "Notas de Prensa CDL", 
            path: "/comunicacion/notas-prensa/CDL" 
          },
          { 
            name: "Notas de Prensa CNM", 
            path: "/comunicacion/notas-prensa/CNM" 
          },
          { 
            name: "Notas de Prensa CRC", 
            path: "/comunicacion/notas-prensa/CRC" 
          },
          { 
            name: "Notas de Prensa MNA", 
            path: "/comunicacion/notas-prensa/MNA" 
          },
          { 
            name: "Notas de Prensa MUSEF", 
            path: "/comunicacion/notas-prensa/MUSEF" 
          },
          { 
            name: "Notas de Prensa CCMMNP", 
            path: "/comunicacion/notas-prensa/CCMMNP" 
          }
        ]
      },
      { name: "Galería de Fotos", path:"/Comunicacion/galeria-fotos" },
      { name: "Galería de Videos" , path:"/Comunicacion/galeria-videos"},
      { name: "Comunicados" , path:"/Comunicacion/comunicados"},
      { name: "Coberturas" , path:"/Comunicacion/coberutras"},
    ]
  },
  { 
    id: 4, 
    name: "Cultura", 
    icon: <FaImage className="text-xl" />,
    active: false,
    colorGroup: "first",
    subItems: [
      { 
        name: "Publicaciones e Investigación",
        subSubItems: ["Revista Piedra de Agua", "Convocatorias"]
      },
      { 
        name: "Convocatoria CRC",
        subSubItems: ["Letras e Imágenes de Nuevo Tiempo", "Fomento a la Productividad", "Convocatoria Ideas Creativas", "Artistas Emergentes"]
      },
      { 
        name: "Convocatorias FC BCB",
        subSubItems: ["Encuentro Latinoamericano EBAM", "Congreso de Arqueología CAM"]
      },
      { name: "Convocatorias MNA" },
      { name: "Convocatorias CCP" },
    ]
  },
  { 
    id: 5, 
    name: "Museos", 
    icon: <FaCalendarAlt className="text-xl" />,
    active: false,
    colorGroup: "first",
    subItems: [
      { name: "Archivo y Bibliotecas Nacionales de Bolivia" },
      { name: "Casa de la Libertad" },
      { name: "Casa Nacional de Moneda" },
      { name: "Museo Nacional de Etnografía y Folklore" },
      { name: "Museo Nacional de Arte" },
      { name: "Centro de la Cultura Plurinacional" },
      { name: "Museo Fernando Montes" },
      { name: "Centro de la Revolución Cultural" },
    ]
  },
  { 
    id: 6, 
    name: "Transparencia", 
    icon: <FaGraduationCap className="text-xl" />,
    active: false,
    colorGroup: "second",
    subItems: [
      { 
        name: "Información Financiera",
        subSubItems: ["Fuentes de Financiamiento", "Estados Financieros", "Plan Anual de Contrataciones", "Contratación de Bienes y Servicios", "Nómina de Proveedores"]
      },
      { 
        name: "Planificación",
        subSubItems: ["Plan Estratégico Institucional", "Plan Operativo Anual", "Seguimiento POA"]
      },
      { 
        name: "Convocatorias",
        subSubItems: ["Convocatorias ANPE", "De Personal", "Pasantías"]
      },
      { name: "Recursos Humanos" },
      { name: "Rendición Pública de Cuentas" },
      { name: "Viajes al Exterior" },
      { name: "Marco Normativo" },
    ]
  },
  { 
    id: 7, 
    name: "Sistemas", 
    icon: <FaSearch className="text-xl" />,
    active: false,
    colorGroup: "second",
    subItems: [
      { name: "Correo Institucional" },
      { name: "Sistema de Gestión de Correspondencia" },
      { name: "Sistema de Correspondencia Antiguo" },
    ]
  },
  { 
    id: 8, 
    name: "Contactos", 
    icon: <FaUsers className="text-xl" />,
    active: false,
    colorGroup: "second",
    // sin submenús
  }
];

// ── VARIANTS PARA ANIMACIÓN ────────────────────────────────────────────
const wrapperVariants = {
  open: { scaleY: 1, opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  closed: { scaleY: 0, opacity: 0, transition: { when: "afterChildren", staggerChildren: 0.06, duration: 0.3 } }
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, y: -12, transition: { duration: 0.2 } }
};

const iconVariants = {
  open: { rotate: 180, transition: { duration: 0.4 } },
  closed: { rotate: 0, transition: { duration: 0.4 } }
};

// ── COMPONENTE DrawOutlineButton ───────────────────────────────────────
const DrawOutlineButton = ({ children, isActive, colorGroup, icon, onClick, className = "", ...rest }) => {
  const colors = {
    first: { text: "text-[#D4AC0D]", hoverText: "hover:text-[#F1C40F]", border: "bg-[#D4AC0D]", hoverBorder: "group-hover:bg-[#F1C40F]" },
    second: { text: "text-[#1A5276]", hoverText: "hover:text-[#21618C]", border: "bg-[#1A5276]", hoverBorder: "group-hover:bg-[#21618C]" }
  };

  const colorSet = colors[colorGroup] || colors.first;

  return (
    <button
      onClick={onClick}
      className={`group relative px-4 py-3 font-medium transition-all duration-[400ms] flex items-center gap-3 ${
        isActive ? colorSet.text : 'text-gray-300'
      } ${colorSet.hoverText} ${isActive ? 'scale-105' : ''} rounded-lg ${className}`}
      {...rest}
    >
      <div className={`transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 ${isActive ? 'scale-110' : ''}`}>
        {icon}
      </div>
      <span className="text-sm font-semibold tracking-wide">{children}</span>

      <span className={`absolute left-0 top-0 h-[2px] w-0 ${colorSet.border} ${colorSet.hoverBorder} transition-all duration-100 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
      <span className={`absolute right-0 top-0 h-0 w-[2px] ${colorSet.border} ${colorSet.hoverBorder} transition-all delay-100 duration-100 group-hover:h-full ${isActive ? 'h-full' : ''}`} />
      <span className={`absolute bottom-0 right-0 h-[2px] w-0 ${colorSet.border} ${colorSet.hoverBorder} transition-all delay-200 duration-100 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
      <span className={`absolute bottom-0 left-0 h-0 w-[2px] ${colorSet.border} ${colorSet.hoverBorder} transition-all delay-300 duration-100 group-hover:h-full ${isActive ? 'h-full' : ''}`} />
      
      <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </button>
  );
};

// ── COMPONENTE AnimatedLoginButton ─────────────────────────────────────
const AnimatedLoginButton = ({ children, onClick, className = "", ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 font-medium text-gray-900 transition-all duration-[400ms] hover:scale-105 bg-gradient-to-r from-[#D4AC0D] to-[#F1C40F] rounded-full flex items-center justify-center gap-3 overflow-hidden ${className}`}
      {...rest}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <span className="relative z-10 font-semibold">{children}</span>
      <FaCoffee className="relative z-10 text-xl drop-shadow-sm transform transition-transform duration-300 group-hover:rotate-12" />
    </button>
  );
};

// ── COMPONENTE LiquidMenuButton (el hamburguesa) ───────────────────────
const LiquidMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AC0D] to-[#1A5276] md:hidden z-50"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AC0D] to-[#1A5276] transition-all duration-500 ${isOpen ? 'scale-125 opacity-20' : 'scale-100'}`}></div>
      
      <div className="relative z-10">
        {isOpen ? (
          <FaTimes className="text-white text-2xl transition-transform duration-500 rotate-180" />
        ) : (
          <FaBars className="text-white text-2xl transition-transform duration-500" />
        )}
      </div>

      <div className="absolute inset-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-700 ${
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 animate-pulse'
            }`}
            style={{ top: `${30 + i * 20}%`, left: `${30 + i * 20}%`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </button>
  );
};

// ── COMPONENTE NavItem (versión con tercer nivel destacado) ──────────────
const NavItem = ({ item, isMobile = false }) => {
  const navigate = useNavigate();
  const [openMain, setOpenMain] = useState(false);
  const [hoveredSubIndex, setHoveredSubIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const hasSubmenu = item.subItems?.length > 0;

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      if (isMobile) {
        closeMenu?.();
      }
    }
  };

  if (!hasSubmenu) {
    return (
      <DrawOutlineButton
        isActive={item.active}
        colorGroup={item.colorGroup}
        icon={item.icon}
        className={isMobile ? "w-full justify-start" : "min-w-[100px]"}
        onClick={() => handleNavigation(item.path)}
      >
        {item.name}
      </DrawOutlineButton>
    );
  }

  // Manejo de hover para desktop
  const handleMainEnter = () => {
    if (!isMobile) {
      if (timeoutId) clearTimeout(timeoutId);
      setOpenMain(true);
    }
  };

  const handleMainLeave = () => {
    if (!isMobile) {
      const id = setTimeout(() => {
        setOpenMain(false);
        setHoveredSubIndex(null);
      }, 300);
      setTimeoutId(id);
    }
  };

  const handleSubEnter = (index) => {
    if (!isMobile) {
      if (timeoutId) clearTimeout(timeoutId);
      setHoveredSubIndex(index);
    }
  };

  const handleSubLeave = () => {
    if (!isMobile) {
      const id = setTimeout(() => {
        setHoveredSubIndex(null);
      }, 200);
      setTimeoutId(id);
    }
  };

  // Manejo de clicks para mobile
  const toggleMain = () => {
    if (isMobile) setOpenMain(!openMain);
  };

  const toggleSub = (index) => {
    if (isMobile) {
      setHoveredSubIndex(hoveredSubIndex === index ? null : index);
    }
  };

  // Función para renderizar subSubItems de manera segura
  const renderSubSubItems = (subSubItems) => {
    if (!subSubItems || subSubItems.length === 0) return null;

    return subSubItems.map((item, idx) => {
      // Si es string (vieja estructura)
      if (typeof item === 'string') {
        return (
          <li
            key={idx}
            className="px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-800/70 rounded cursor-pointer transition-colors"
          >
            {item}
          </li>
        );
      }
      
      // Si es objeto (nueva estructura con name y path)
      return (
        <li
          key={idx}
          onClick={() => {
            if (item.path) {
              handleNavigation(item.path);
            }
          }}
          className="px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-gray-800/70 rounded cursor-pointer transition-colors"
        >
          {item.name}
        </li>
      );
    });
  };

  // Función para renderizar subSubItems móviles
  const renderMobileSubSubItems = (subSubItems) => {
    if (!subSubItems || subSubItems.length === 0) return null;

    return subSubItems.map((item, idx) => {
      // Si es string (vieja estructura)
      if (typeof item === 'string') {
        return (
          <motion.li
            key={idx}
            variants={itemVariants}
            className="py-1.5 px-3 text-xs text-gray-300 hover:text-white"
          >
            {item}
          </motion.li>
        );
      }
      
      // Si es objeto (nueva estructura con name y path)
      return (
        <motion.li
          key={idx}
          variants={itemVariants}
          onClick={() => {
            if (item.path) {
              handleNavigation(item.path);
            }
          }}
          className="py-1.5 px-3 text-xs text-gray-300 hover:text-white cursor-pointer"
        >
          {item.name}
        </motion.li>
      );
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMainEnter}
      onMouseLeave={handleMainLeave}
    >
      <DrawOutlineButton
        isActive={item.active}
        colorGroup={item.colorGroup}
        icon={item.icon}
        onClick={isMobile ? toggleMain : undefined}
        className={`${isMobile ? "w-full justify-stretch" : "w-[150px]"} flex items-center justify-center `}

      >
        <span>{item.name}</span>
        <motion.span animate={openMain ? "open" : "closed"} variants={iconVariants} className="ml-1">

        </motion.span>
      </DrawOutlineButton>

      {/* Segundo nivel de menú */}
      <AnimatePresence>
        {openMain && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`
              ${isMobile 
                ? "relative mt-2"
                : "absolute top-full left-0 mt-2 z-50"
              }
            `}
            onMouseEnter={() => !isMobile && clearTimeout(timeoutId)}
            onMouseLeave={handleMainLeave}
          >
            <motion.ul
              variants={wrapperVariants}
              className={`
                ${isMobile 
                  ? "pl-4 pr-3 space-y-1 bg-gray-800/80 rounded-lg border border-gray-700/60"
                  : "w-72 p-3 rounded-lg bg-gray-900/95 backdrop-blur-md shadow-xl border border-gray-700/40"
                }
                flex flex-col gap-1
              `}
            >
              {item.subItems.map((sub, idx) => {
                const hasSubSub = !!sub.subSubItems?.length;
                const isHovered = hoveredSubIndex === idx;

                return (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div
                      className={`
                        flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition-all
                        text-sm text-gray-200 hover:bg-gray-700/60 hover:text-white
                        ${isHovered && hasSubSub ? "bg-gray-800/70 text-[#F1C40F]" : ""}
                      `}
                      onClick={() => {
                        if (isMobile && hasSubSub) {
                          toggleSub(idx);
                        } else if (sub.path) {
                          handleNavigation(sub.path);
                        }
                      }}
                      onMouseEnter={() => !isMobile && handleSubEnter(idx)}
                      onMouseLeave={() => !isMobile && handleSubLeave()}
                    >
                      <span className="flex-1">{sub.name}</span>
                      {hasSubSub && (
                        <FaChevronDown 
                          size={12} 
                          className={`transition-transform duration-200 ${isHovered ? "rotate-180 text-[#F1C40F]" : "text-gray-500"}`}
                        />
                      )}
                    </div>

                    {/* Tercer nivel - DESKTOP */}
                    {!isMobile && hasSubSub && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-full top-0 ml-1 z-[60]"
                        onMouseEnter={() => clearTimeout(timeoutId)}
                        onMouseLeave={handleSubLeave}
                      >
                        <div className="w-64 p-3 rounded-lg bg-gray-900 shadow-2xl border border-gray-700/50">
                          <div className="text-xs font-semibold text-amber-400 mb-2 px-2">
                            {sub.name}
                          </div>
                          <ul className="space-y-1">
                            {renderSubSubItems(sub.subSubItems)}
                          </ul>
                        </div>
                      </motion.div>
                    )}

                    {/* Tercer nivel - MOBILE */}
                    {isMobile && hasSubSub && hoveredSubIndex === idx && (
                      <motion.ul
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={wrapperVariants}
                        className="mt-1 ml-4 pl-4 space-y-1 border-l-2 border-amber-500/30"
                      >
                        {renderMobileSubSubItems(sub.subSubItems)}
                      </motion.ul>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// ── COMPONENTE PRINCIPAL NAVBAR ────────────────────────────────────────
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg relative">
        <div className="container py-3 mx-auto px-4">
          <div className="flex justify-between items-center">

              <Link href="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider">
                <img src={Logo} alt="Logo" className="w-29 h-auto" />
              </Link>

            <div className="md:hidden">
              <LiquidMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            <div className="hidden md:flex items-center gap-4">
              <ul className="flex items-center justify-center gap-2 text-5xl">
                {Menu.map((item) => (
                  <li key={item.id}>
                    <NavItem item={item} />
                  </li>
                ))}
              </ul>
                <AnimatedLoginButton>Login</AnimatedLoginButton>
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#D4AC0D] via-transparent to-[#1A5276]" />

        {/* Mobile Sidebar */}
        {/* Mobile Sidebar - MODIFICADO PARA IZQUIERDA */}
        <div className={` fixed inset-0 z-40 md:hidden transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          <div 
            className={` absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm transition-all duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeMenu}
          />

          {/* CAMBIO: left-0 en lugar de right-0 */}
          <div className={`absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-transform duration-700 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            
            {/* Header del sidebar móvil */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between mb-6">
                {/* Logo alineado a la izquierda */}
                <div className="flex items-center gap-5">
                  <img src={Logo} alt="Logo" className="w-50 h-50" />

                </div>
                <button onClick={closeMenu} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <FaTimes className="text-white text-xl" />
                </button>
              </div>
            </div>

            {/* Contenido del menú móvil - ALINEADO A LA IZQUIERDA */}
            <div className="p-4 overflow-y-auto h-[calc(100vh-180px)] space-y-2">
              {Menu.map((item) => (
                <div key={item.id} className="w-full">
                  <NavItem key={item.id} item={item} isMobile />
                </div>
              ))}

              {/* Separador */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

              {/* Botón Login */}
              <div className="px-2">
                <AnimatedLoginButton onClick={closeMenu} className="w-full justify-center py-3">
                  Login
                </AnimatedLoginButton>
              </div>

              {/* Info adicional */}
              <div className="mt-6 p-4 rounded-lg bg-gray-800/50 text-left text-sm text-gray-300">
                <div className="font-medium text-white mb-1">Fundación Cultural BCB</div>
                <div className="text-xs text-gray-400">
                  Museos • Espacios Culturales • Patrimonio
                </div>
              </div>
            </div>

            {/* Footer del sidebar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} FCBCB - Todos los derechos reservados
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;