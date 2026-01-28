// components/Hero/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Carousel } from 'react-3dm-carousel';
import { 
  FaArrowRight,
  FaCalendarAlt,
  FaPlay,
  FaMapMarkerAlt,
  FaUsers,
  FaLandmark,
  FaPaintBrush,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaChevronUp,
  FaChevronDown
} from 'react-icons/fa';

// Función cn para combinar clases
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Componente Reveal para animaciones de texto
// Componente Reveal para animaciones de texto
const Reveal = ({ children, width = "fit-content", delay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>

      {/* Div de revelación */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: delay - 0.25 }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-gradient-to-r from-amber-500 to-amber-600"
      ></motion.div>
    </div>
  );
};
// Datos para el carrusel 3D
const carouselData = [
  {
    id: "1",
    title: "Casa de la Moneda",
    description: "Museo histórico de la acuñación de monedas en Potosí",
    image: "/Repositorios/Casa_Moneda.jpg"
  },
  {
    id: "2",
    title: "Casa de la Libertad",
    description: "Símbolo de la independencia boliviana en Sucre",
    image: "/Repositorios/Casa_Libertad.jpg"
  },
  {
    id: "3",
    title: "Archivo Biblioteca Nacional",
    description: "Guardian del patrimonio documental de Bolivia",
    image: "/Repositorios/Archivo_Biblñioteca_Nacional_Bolivia.jpg"
  },
  {
    id: "4",
    title: "Museo Nacional de Etnografía",
    description: "Cultura y tradiciones de los pueblos originarios",
    image: "/Repositorios/museo-etnografia-folklore.jpg"
  },
  {
    id: "5",
    title: "Museo Nacional de Arte",
    description: "Artes plásticas bolivianas desde la colonia",
    image: "/Repositorios/museo-nacional-de-arte.jpg"
  },
  {
    id: "6",
    title: "Centro Cultural Plurinacional",
    description: "Espacio para la diversidad cultural boliviana",
    image: "/Repositorios/centro_cultura_plurinacional.jpg"
  }
];

// Imágenes para el fondo (carrusel opaco)
const backgroundImages = [
  "/Repositorios/Casa_Moneda.jpg",
  "/Repositorios/Casa_Libertad.jpg",
  "/Repositorios/Archivo_Biblñioteca_Nacional_Bolivia.jpg",
  "/Repositorios/museo-etnografia-folklore.jpg",
  "/Repositorios/museo-nacional-de-arte.jpg",
  "/Repositorios/centro_cultura_plurinacional.jpg",
  "/Repositorios/Museomontes.jpg",
  "/Repositorios/centro-de-la-revolucion-cultural.jpg"
];

// Componente para partículas flotantes
const FloatingParticles = ({ count = 25 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const xStart = Math.random() * 100;
        const yStart = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${xStart}%`,
              top: `${yStart}%`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(180,83,9,0.2) 70%, transparent 100%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(253,224,71,0.3) 0%, rgba(161,98,7,0.1) 70%, transparent 100%)'
                : 'radial-gradient(circle, rgba(254,243,199,0.2) 0%, rgba(146,64,14,0.05) 70%, transparent 100%)',
              filter: 'blur(0.5px)',
              boxShadow: '0 0 8px rgba(251,191,36,0.3)'
            }}
            animate={{
              x: [
                `${Math.random() * 100 - 50}px`,
                `${Math.random() * 100 - 50}px`,
                `${Math.random() * 100 - 50}px`
              ],
              y: [
                `${Math.random() * 100 - 50}px`,
                `${Math.random() * 200 - 100}px`,
                `${Math.random() * 100 - 50}px`
              ],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: delay
            }}
          />
        );
      })}
    </div>
  );
};

// Componente de fondo con carrusel de imágenes
const BackgroundImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Imagen actual */}
      <motion.div
        key={currentIndex}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={backgroundImages[currentIndex]}
          alt="Patrimonio Cultural"
          className="w-full h-full object-cover"
          style={{
            filter: 'sepia(10%) brightness(70%) contrast(110%)'
          }}
        />
      </motion.div>

      {/* Imagen siguiente (pre-cargada) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0 }}
      >
        <img
          src={backgroundImages[(currentIndex + 1) % backgroundImages.length]}
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: 'sepia(30%) brightness(40%) contrast(110%)'
          }}
        />
      </motion.div>

      {/* Superposición de gradiente */}
<div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/20 to-gray-900/50" />
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30" />
      
      {/* Patrón de textura sutil */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d97706' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '400px',
          opacity: 0.3
        }}
      />
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const carouselRef = useRef(null);

  // Funciones para mover el carrusel - FIXED
  const moveLeft = () => {
    if (carouselRef.current && carouselRef.current.carouselRef) {
      const carousel = carouselRef.current.carouselRef.current;
      if (carousel && carousel.rotateLeft) {
        carousel.rotateLeft();
        const newIndex = selectedCardIdx === 0 ? carouselData.length - 1 : selectedCardIdx - 1;
        setSelectedCardIdx(newIndex);
      }
    }
  };

  const moveRight = () => {
    if (carouselRef.current && carouselRef.current.carouselRef) {
      const carousel = carouselRef.current.carouselRef.current;
      if (carousel && carousel.rotateRight) {
        carousel.rotateRight();
        const newIndex = selectedCardIdx === carouselData.length - 1 ? 0 : selectedCardIdx + 1;
        setSelectedCardIdx(newIndex);
      }
    }
  };

  // Función para obtener el tamaño del carrusel según el dispositivo
  const getCarouselSize = () => {
    if (typeof window === 'undefined') return 'w-[90%] h-[400px] lg:w-[600px] lg:h-[500px] xl:w-[700px] xl:h-[550px]';
    
    const width = window.innerWidth;
    if (width < 640) return 'w-[90%] h-[300px]';
    if (width < 768) return 'w-[90%] h-[350px]';
    if (width < 1024) return 'w-[80%] h-[300px]';
    if (width < 1280) return 'w-[600px] h-[450px]';
    return 'w-[700px] h-[500px]';
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-auto min-h-[20vh] md:min-h-[5vh] lg:min-h-[15vh] w-full overflow-hidden"
    >
      {/* NUEVO FONDO: Carrusel de imágenes opacas */}
      <BackgroundImageCarousel />

      {/* Partículas flotantes */}
      <FloatingParticles count={30} />

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Texto a la izquierda */}
          <div className="w-full lg:w-5/12 xl:w-2/5 mb-8 lg:mb-0 lg:pr-8">
            {/* Badge */}
            <Reveal delay={0.3}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-600/30 to-amber-800/30 border border-amber-500/40 mb-6 backdrop-blur-lg">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                <span className="text-amber-200 text-sm font-semibold">
                  Fundación Cultural BCB
                </span>
                <FaStar className="text-amber-300 text-xs ml-1" />
              </div>
            </Reveal>

            {/* Título principal */}
            <Reveal width="100%" delay={0.4}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="block drop-shadow-lg">PATRIMONIO</span>
                <span className="block bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 bg-clip-text text-transparent drop-shadow-xl">
                  CULTURAL
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-amber-100/90 mt-2 font-light">
                  de Bolivia
                </span>
              </h1>
            </Reveal>

            {/* Descripción */}
            <Reveal width="100%" delay={0.5}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                Descubre la riqueza histórica y artística de nuestra nación a través 
                de museos, exposiciones y espacios culturales que preservan 
                la identidad boliviana.
              </p>
            </Reveal>

          </div>

          {/* Carrusel 3D a la derecha */}
          <div className="w-full lg:w-7/12 xl:w-3/5 flex justify-center items-center mt-8 lg:mt-0">
            <div className={`relative ${getCarouselSize()} mx-auto lg:mx-0`}>
              {/* Botones de navegación para móvil */}
              <div className="flex justify-center gap-6 mb-6 lg:hidden">
                <button 
                  onClick={moveLeft}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-600/90 to-amber-800/90 flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all shadow-2xl z-30 hover:scale-110 active:scale-95 backdrop-blur-sm border border-amber-500/30"
                  aria-label="Anterior"
                >
                  <FaChevronLeft className="text-white text-lg" />
                </button>
                <button 
                  onClick={moveRight}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-600/90 to-amber-800/90 flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all shadow-2xl z-30 hover:scale-110 active:scale-95 backdrop-blur-sm border border-amber-500/30"
                  aria-label="Siguiente"
                >
                  <FaChevronRight className="text-white text-lg" />
                </button>
              </div>

              {/* Contenedor del carrusel */}
              <div className="relative w-full h-full">
                {/* Efecto de brillo alrededor del carrusel */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 blur-xl z-0" />
                
              {/* Carrusel 3D */}
              <div className="w-full h-full relative z-10">
                <Carousel
                  cardsData={carouselData}
                  setSelectedCardIdx={setSelectedCardIdx}
                  rotation={true}
                  rotationDuration={60}  // Cambiado de 35 a 60
                  tilt={false}           // Cambiado de true a false
                  freeRoam={true}        // Cambiado de false a true
                  freeRoamLowerBounds={-180}  // Cambiado de -90 a -180
                  freeRoamUpperBounds={0}     // Cambiado de 10 a 0
                  onTitleClickHandler={(card) => console.log("Card clicked:", card)}
                  startingAnimation={true}
                  rotateOnScroll={true}
                  drag={true}
                  dragSensitivity={0.8}
                  ref={carouselRef}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                />
              </div>

                {/* Botones de navegación para desktop */}
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-8 z-20">
                  <button 
                    onClick={moveLeft}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-600/90 to-amber-800/90 backdrop-blur-md flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all shadow-2xl hover:scale-110 active:scale-95 border border-amber-500/40 hover:border-amber-400/60"
                    aria-label="Anterior"
                  >
                    <FaChevronLeft className="text-white text-xl" />
                  </button>
                  <button 
                    onClick={moveRight}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-600/90 to-amber-800/90 backdrop-blur-md flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all shadow-2xl hover:scale-110 active:scale-95 border border-amber-500/40 hover:border-amber-400/60"
                    aria-label="Siguiente"
                  >
                    <FaChevronRight className="text-white text-xl" />
                  </button>
                </div>

                {/* Indicador del carrusel seleccionado */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -bottom-6 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-30 min-w-[280px]"
                >
                  <div className="bg-gradient-to-r from-gray-900/80 to-gray-900/60 backdrop-blur-xl px-6 py-4 rounded-2xl border border-amber-500/30 shadow-2xl">
                    <div className="text-white text-base font-bold flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 animate-pulse shadow-glow" />
                        <span className="text-amber-100 bg-gradient-to-r from-amber-500/10 to-amber-600/10 px-3 py-1 rounded-full">
                          {carouselData[selectedCardIdx]?.title}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-2 max-w-xs leading-snug">
                      {carouselData[selectedCardIdx]?.description}
                    </p>
                  </div>
                </motion.div>

                {/* Indicadores de navegación para móvil */}
                <div className="flex justify-center gap-3 mt-8 lg:hidden">
                  {carouselData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const diff = index - selectedCardIdx;
                        if (diff > 0) {
                          for (let i = 0; i < diff; i++) {
                            setTimeout(() => moveRight(), i * 100);
                          }
                        } else if (diff < 0) {
                          for (let i = 0; i < Math.abs(diff); i++) {
                            setTimeout(() => moveLeft(), i * 100);
                          }
                        }
                      }}
                      className={`transition-all duration-300 ${
                        index === selectedCardIdx 
                          ? 'w-10 h-2 bg-gradient-to-r from-amber-400 to-amber-300 rounded-lg shadow-lg' 
                          : 'w-2 h-2 bg-gray-500/60 rounded-full hover:bg-gray-400'
                      }`}
                      aria-label={`Ir a slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;