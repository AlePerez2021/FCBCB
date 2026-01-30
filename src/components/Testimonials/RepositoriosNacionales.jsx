import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  EffectCoverflow, 
  Parallax,
  Navigation, 
  Pagination, 
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/parallax';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight,
  FaPlay,
  FaPause,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLayerGroup,
  FaBuilding,
  FaLandmark,
  FaBook,
  FaPalette,
  FaMonument,
  FaTheaterMasks,
  FaCamera,
  FaHistory
} from 'react-icons/fa';

// Datos de imágenes de fondo para cada repositorio
const ImagenesFondo = [
  {
    id: 1,
    nombre: "Casa de la Moneda",
    image: "/Repositorios/Casa_Moneda.jpg",
    icon: <FaBuilding />,
    color: "from-amber-600 to-orange-500"
  },
  {
    id: 2,
    nombre: "Casa de la Libertad",
    image: "/Repositorios/Casa_Libertad.jpg",
    icon: <FaLandmark />,
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 3,
    nombre: "Archivo y Biblioteca Nacional de Bolivia",
    image: "/Repositorios/Archivo_Biblioteca_Nacional_Bolivia.jpg",
    icon: <FaBook />,
    color: "from-emerald-600 to-teal-500"
  },
  {
    id: 4,
    nombre: "Museo Nacional de Etnografía y Folklore",
    image: "/Repositorios/museo-etnografia-folklore.jpg",
    icon: <FaTheaterMasks />,
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 5,
    nombre: "Museo Nacional de Arte",
    image: "/Repositorios/museo-nacional-de-arte.jpg",
    icon: <FaPalette />,
    color: "from-rose-600 to-red-500"
  },
  {
    id: 6,
    nombre: "Centro Cultura Plurinacional",
    image: "/Repositorios/centro_cultura_plurinacional.jpg",
    icon: <FaMonument />,
    color: "from-indigo-600 to-violet-500"
  },
  {
    id: 7,
    nombre: "Museo Fernando Montes",
    image: "/Repositorios/centro_cultura_plurinacional.jpg", // Usando la misma por ahora
    icon: <FaCamera />,
    color: "from-cyan-600 to-sky-500"
  },
  {
    id: 8,
    nombre: "Centro Revolucion Cultural",
    image: "/Repositorios/centro_cultura_plurinacional.jpg", // Usando la misma por ahora
    icon: <FaHistory />,
    color: "from-lime-600 to-green-500"
  },
];

// Datos de repositorios nacionales y centros culturales - actualizados con imágenes
const RepositoriosData = [
  {
    id: 1,
    nombre: "Casa de la Libertad",
    descripcion: "Resguarda la memoria documental histórica del país desde la época colonial hasta la actualidad.",
    logo: "/public/LogosRpositorios/logo-cdl-o.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Casa de la Libertad")?.image || "/Repositorios/Casa_Libertad.jpg",
    categoria: "Archivo Histórico",
    ubicacion: "Sucre, Bolivia",
    color: "from-blue-600 to-cyan-500",
    icon: <FaLandmark />,
    delay: 0.1
  },
  {
    id: 2,
    nombre: "Archivo y Biblioteca Nacional de Bolivia",
    descripcion: "Principal repositorio bibliográfico nacional con colecciones únicas y patrimonio documental.",
    logo: "/public/LogosRpositorios/logo-abnb-o.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Archivo y Biblioteca Nacional de Bolivia")?.image || "/Repositorios/Archivo_Biblioteca_Nacional_Bolivia.jpg",
    categoria: "Biblioteca Nacional",
    ubicacion: "Sucre, Bolivia",
    color: "from-emerald-600 to-teal-500",
    icon: <FaBook />,
    delay: 0.2
  },
  {
    id: 3,
    nombre: "Museo Nacional de Etnografía y Folklore",
    descripcion: "Conserva y exhibe el patrimonio cultural etnográfico y folklórico de las culturas bolivianas.",
    logo: "/public/LogosRpositorios/logo-musef-o.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Museo Nacional de Etnografía y Folklore")?.image || "/Repositorios/museo-etnografia-folklore.jpg",
    categoria: "Museo Nacional",
    ubicacion: "La Paz, Bolivia",
    color: "from-purple-600 to-pink-500",
    icon: <FaTheaterMasks />,
    delay: 0.3
  },
  {
    id: 4,
    nombre: "Casa Nacional de la moneda",
    descripcion: "Monumento histórico donde se firmó el Acta de Independencia de Bolivia.",
    logo: "/public/LogosRpositorios/logo-cnm-o.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Casa de la Moneda")?.image || "/Repositorios/Casa_Moneda.jpg",
    categoria: "Museo Histórico",
    ubicacion: "Sucre, Bolivia",
    color: "from-amber-600 to-orange-500",
    icon: <FaBuilding />,
    delay: 0.4
  },
  {
    id: 5,
    nombre: "Museo Nacional de Arte",
    descripcion: "Repositorio documental especializado en la historia de La Paz y región andina.",
    logo: "/public/LogosRpositorios/logo-mna-circular.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Museo Nacional de Arte")?.image || "/Repositorios/museo-nacional-de-arte.jpg",
    categoria: "Archivo Regional",
    ubicacion: "La Paz, Bolivia",
    color: "from-rose-600 to-red-500",
    icon: <FaPalette />,
    delay: 0.5
  },
  {
    id: 6,
    nombre: "Centro de la Cultura Plurinacional",
    descripcion: "Complejo cultural que integra patrimonio arquitectónico, arte religioso y espacios expositivos.",
    logo: "/public/LogosRpositorios/logo-ccp-o.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Centro Cultura Plurinacional")?.image || "/Repositorios/centro_cultura_plurinacional.jpg",
    categoria: "Centro Cultural",
    ubicacion: "La Paz, Bolivia",
    color: "from-indigo-600 to-violet-500",
    icon: <FaMonument />,
    delay: 0.6
  },
  {
    id: 7,
    nombre: "Museo Fernando Montes",
    descripcion: "Complejo cultural que integra patrimonio arquitectónico, arte religioso y espacios expositivos.",
    logo: "/public/LogosRpositorios/logo-fm-o.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Museo Fernando Montes")?.image || "/Repositorios/centro_cultura_plurinacional.jpg",
    categoria: "Centro Cultural",
    ubicacion: "La Paz, Bolivia",
    color: "from-cyan-600 to-sky-500",
    icon: <FaCamera />,
    delay: 0.7
  },
  {
    id: 8,
    nombre: "Centro de la Revolucion Cultural",
    descripcion: "Complejo cultural que integra patrimonio arquitectónico, arte religioso y espacios expositivos.",
    logo: "/public/LogosRpositorios/logo-crc-o.png",
    imagenFondo: ImagenesFondo.find(img => img.nombre === "Centro Revolucion Cultural")?.image || "/Repositorios/centro_cultura_plurinacional.jpg",
    categoria: "Centro Cultural",
    ubicacion: "La Paz, Bolivia",
    color: "from-lime-600 to-green-500",
    icon: <FaHistory />,
    delay: 0.8
  },
];

const RepositoriosNacionales = () => {
  const [activeEffect, setActiveEffect] = useState('coverflow');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const effectConfigs = {
    coverflow: {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: isMobile ? 1.2 : 2.5,
      coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: true,
      },
      modules: [EffectCoverflow, Navigation, Pagination, Autoplay, Parallax],
    }
  };

  const getSwiperConfig = () => ({
    ...effectConfigs[activeEffect],
    speed: 800,
    loop: true,
    parallax: true,
    spaceBetween: 30,
    autoplay: isPlaying ? {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    } : false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    onSlideChange: (swiper) => {
      setActiveIndex(swiper.realIndex);
    },
    onSwiper: (swiper) => {
      mainSwiperRef.current = swiper;
    },
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (mainSwiperRef.current) {
      if (isPlaying) {
        mainSwiperRef.current.autoplay.stop();
      } else {
        mainSwiperRef.current.autoplay.start();
      }
    }
  };

const renderLogo = (repositorio, isActive) => {
  const initials = repositorio.nombre
    .split(' ')
    .map(word => word[0])
    .slice(0, 3)
    .join('');

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ 
          scale: isActive ? [1, 1.05, 1] : 1
        }}
        transition={{ 
          scale: isActive ? { duration: 2, repeat: Infinity } : {}
        }}
        className="w-40 h-40 flex items-center justify-center"
      >
        {/* Logo grande y limpio */}
        <div className="w-full h-full flex items-center justify-center relative">
          <img 
            src={repositorio.logo} 
            alt={`Logo ${repositorio.nombre}`}
            className="max-w-full max-h-full object-contain p-2"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.parentElement;
              const iconElement = document.createElement('div');
              iconElement.className = `text-white text-5xl`;
              iconElement.innerHTML = repositorio.icon.props.children;
              fallback.appendChild(iconElement);
            }}
          />
        </div>
      </motion.div>
      
      {/* Año de fundación - removido el anillo de colores */}
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-2 border border-white/20"
        >
          <FaCalendarAlt className="text-gray-700" />
          <span className="text-sm font-bold text-gray-800">{repositorio.año}</span>
        </motion.div>
      </div>
    </div>
  );
};

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/90 to-black/80 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <div className="inline-block mb-4">
            <span className="text-amber-400 text-lg font-semibold tracking-wider">
              PATRIMONIO CULTURAL
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            REPOSITORIOS NACIONALES
            <span className="block text-3xl md:text-4xl text-gray-300 mt-2">
              Y CENTROS CULTURALES
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Descubre los tesoros culturales que preservan la memoria histórica y el patrimonio 
            documental de Bolivia, bajo la custodia del FCBCB.
          </p>
        </motion.div>

        {/* Swiper 3D Principal */}
        <div className="relative">
          <Swiper
            {...getSwiperConfig()}
            modules={effectConfigs[activeEffect].modules}
            className="!overflow-visible !py-20"
          >
            {RepositoriosData.map((repositorio, index) => (
              <SwiperSlide key={repositorio.id}>
                {({ isActive }) => (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: isActive ? 1 : 0.85,
                      opacity: 1,
                      rotateY: isActive ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`relative rounded-2xl overflow-hidden transform-gpu preserve-3d 
                      h-[550px] shadow-2xl shadow-black/50 hover:shadow-3xl border border-white/10
                      ${isActive ? 'ring-2 ring-amber-400/50 ring-offset-2 ring-offset-black/50' : ''}`}
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Imagen de fondo con gradiente */}
                    <div className="absolute inset-0">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                        style={{
                          backgroundImage: `url(${repositorio.imagenFondo})`,
                          transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        }}
                      ></div>
                      
                      {/* Gradiente overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-90`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${repositorio.color} opacity-20 mix-blend-overlay`}></div>
                      
                      {/* Patrón sutil */}
                      <div className="absolute inset-0 opacity-5" 
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                      {/* Logo animado */}
                      <div className="mb-8">
                        {renderLogo(repositorio, isActive)}
                      </div>

                      {/* Nombre */}
                      <div className="text-center mb-6">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className={`text-3xl font-bold mb-3 px-4 ${
                            isActive ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          {repositorio.nombre}
                        </motion.h3>
                        
                        {/* Categoría */}
                        <div className="inline-block">
                          <span className={`px-5 py-2 rounded-full text-sm font-semibold 
                            bg-gradient-to-r ${repositorio.color} text-white shadow-lg 
                            backdrop-blur-sm border border-white/20`}>
                            {repositorio.categoria}
                          </span>
                        </div>
                      </div>

                      {/* Ubicación */}
                      <div className="flex items-center text-gray-300 mb-8">
                        <FaMapMarkerAlt className="mr-3 text-amber-400" />
                        <span className="font-medium text-lg">{repositorio.ubicacion}</span>
                      </div>

                      {/* Descripción (solo en slide activo) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full px-6 mb-8 overflow-hidden"
                          >
                            <p className="text-gray-200 text-center text-base leading-relaxed">
                              {repositorio.descripcion}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Botón Visitar */}
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className={`mt-6 px-10 py-4 rounded-xl font-bold transition-all duration-300 
                          flex items-center gap-3 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                          bg-gradient-to-r ${repositorio.color} text-white shadow-2xl 
                          hover:shadow-3xl backdrop-blur-sm border border-white/30
                          transform hover:-translate-y-1`}
                      >
                        <span className="text-lg">Visitar Repositorio</span>
                        <FaChevronRight className="text-lg" />
                      </motion.button>
                    </div>

                    {/* Efecto de borde 3D */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-40"
                      style={{
                        background: `linear-gradient(45deg, transparent 60%, ${repositorio.color}) border-box`,
                        mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    ></div>

                    {/* Efecto de brillo en borde */}
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${repositorio.color} opacity-0 
                      ${isActive ? 'animate-pulse' : ''} blur-xl`}></div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controles de navegación */}
          <div className="flex justify-center items-center gap-8 mt-5">
            <button 
              className="p-5 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 
                hover:scale-110 group border border-white/20 shadow-2xl"
              onClick={() => mainSwiperRef.current?.slidePrev()}
            >
              <FaChevronLeft className="text-white text-xl group-hover:text-amber-400" />
            </button>
            
            <button
              onClick={togglePlay}
              className="p-5 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-700 hover:to-amber-500 
                transition-all duration-300 hover:scale-110 shadow-2xl text-white"
            >
              {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
            </button>
            
            <button 
              className="p-5 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 
                hover:scale-110 group border border-white/20 shadow-2xl"
              onClick={() => mainSwiperRef.current?.slideNext()}
            >
              <FaChevronRight className="text-white text-xl group-hover:text-amber-400" />
            </button>
          </div>

          {/* Indicador de posición */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              <span className="font-bold text-white text-xl">{activeIndex + 1}</span> 
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">{RepositoriosData.length}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Estilos globales */}
      <style>
        {`
        .swiper {
          padding: 40px 10px !important;
        }
        
        .swiper-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform-origin: center center !important;
          backface-visibility: hidden;
        }
        
        .swiper-slide-active {
          z-index: 10 !important;
        }
        
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.1)
          ) !important;
          border-radius: 16px !important;
        }
        
        .swiper-pagination {
          position: relative !important;
          margin-top: 30px !important;
        }
        
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          transition: all 0.3s ease !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #f59e0b, #fbbf24) !important;
          transform: scale(1.4) !important;
          border: 1px solid rgba(245, 158, 11, 0.5);
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .swiper-3d .swiper-slide-shadow-left {
          background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.3)) !important;
        }
        
        .swiper-3d .swiper-slide-shadow-right {
          background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.3)) !important;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}
      </style>
    </div>
  );
};

export default RepositoriosNacionales;