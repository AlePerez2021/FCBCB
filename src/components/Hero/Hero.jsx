import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Carousel } from 'react-3dm-carousel';
import { 
  FaChevronLeft,
  FaChevronRight,
  FaStar
} from 'react-icons/fa';
import { ImagesSlider } from "../ui/Images-slider"; // Importa el componente

// Función cn para combinar clases
const cn = (...classes) => classes.filter(Boolean).join(' ');

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
    image: "/Repositorios/Archivo_Biblioteca_Nacional_Bolivia.jpg"
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

// Imágenes para el fondo con ImagesSlider
const backgroundImages = [
  "/Repositorios/Casa_Moneda.jpg",
  "/Repositorios/Casa_Libertad.jpg",
  "/Repositorios/museo-etnografia-folklore.jpg",
  "/Repositorios/museo-nacional-de-arte.jpg",
  "/Repositorios/centro_cultura_plurinacional.jpg"
];

// Componente para partículas flotantes
const FloatingParticles = ({ count = 25 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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

// Componente de animación de carga
const LoadingAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl z-30">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-400 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaStar className="text-amber-400 text-xl animate-pulse" />
          </div>
        </div>
        <div className="text-amber-300 font-semibold text-lg">Cargando Galería 3D</div>
        <div className="text-gray-400 text-sm mt-2">Por favor espera...</div>
      </div>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);

  // Simular carga de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Funciones para mover el carrusel
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

  // Tamaño del carrusel según dispositivo
  const getCarouselSize = () => {
    if (typeof window === 'undefined') return 'w-[90%] h-[300px] lg:w-[600px] lg:h-[500px]';
    
    const width = window.innerWidth;
    if (width < 640) return 'w-[90%] h-[300px]';
    if (width < 768) return 'w-[90%] h-[350px]';
    if (width < 1024) return 'w-[80%] h-[400px]';
    if (width < 1280) return 'w-[600px] h-[450px]';
    return 'w-[700px] h-[500px]';
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[50vh] lg:min-h-[80vh] w-full overflow-hidden bg-black"
    >
      {/* Fondo con ImagesSlider - ANIMACIÓN 3D DE IMÁGENES */}
      <ImagesSlider
        className="absolute inset-0"
        images={backgroundImages}
        overlay={true}
        overlayClassName="bg-gradient-to-b from-gray-900/60 via-gray-900/30 to-gray-900/60"
        autoplay={true}
        direction="up"
      >
        {/* Contenido del slider (vacío, solo para estructura) */}
        <div></div>
      </ImagesSlider>

      {/* Gradiente adicional para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-transparent to-gray-900/40 z-5"></div>

      {/* Partículas flotantes */}
      <FloatingParticles count={20} />

      {/* Contenido principal - MOBILE: columna, DESKTOP: horizontal */}
      <div className="relative z-0 container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex  lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* TEXTO - En mobile va arriba, en desktop a la izquierda */}
          <div className="w-full lg:w-5/12 xl:w-2/5 text-center lg:text-left order-1">
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

            {/* Título principal con animación suave */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                <span className="block">PATRIMONIO</span>
                <span className="block bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 bg-clip-text text-transparent">
                  CULTURAL
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-amber-100/90 mt-2 font-light">
                  de Bolivia
                </span>
              </h1>
            </motion.div>

            {/* Descripción */}
            <Reveal width="100%" delay={0.5}>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Descubre la riqueza histórica y artística de nuestra nación a través 
                de museos, exposiciones y espacios culturales que preservan 
                la identidad boliviana.
              </p>
            </Reveal>

          </div>

          {/* CARRUSEL 3D - En mobile va abajo, en desktop a la derecha */}
          <div className="w-full lg:w-7/12 xl:w-3/5 order-2 lg:order-2 mt-8 lg:mt-0">
            <div className={`relative ${getCarouselSize()} mx-auto lg:mx-0`}>
              
              {/* Animación de carga por 3 segundos */}
              {isLoading && <LoadingAnimation />}
              
              {/* Contenedor del carrusel */}
              <div className="relative w-full h-full">
                {/* Efecto de brillo alrededor */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 blur-xl z-0" />
                
                {/* Carrusel 3D */}
                <div className="w-full h-full relative z-10">
                  {!isLoading && (
                    <Carousel
                      cardsData={carouselData}
                      setSelectedCardIdx={setSelectedCardIdx}
                      rotation={true}
                      rotationDuration={60}
                      tilt={false}
                      freeRoam={true}
                      freeRoamLowerBounds={-180}
                      freeRoamUpperBounds={0}
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
                  )}
                </div>

                {/* Indicador del museo seleccionado */}
                {!isLoading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute -bottom-6 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-30 min-w-[280px] lg:min-w-[320px]"
                  >
                    <div className="bg-gradient-to-r from-gray-900/90 to-gray-900/70 backdrop-blur-xl px-6 py-4 rounded-2xl border border-amber-500/30 shadow-2xl">
                      <div className="text-white text-base lg:text-lg font-bold flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 animate-pulse" />
                          <span className="text-amber-100 bg-gradient-to-r from-amber-500/20 to-amber-600/20 px-3 py-2 rounded-full">
                            {carouselData[selectedCardIdx]?.title}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mt-2 max-w-xs lg:max-w-sm">
                        {carouselData[selectedCardIdx]?.description}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Controles para mobile */}
                <div className="flex lg:hidden justify-center gap-4 mt-6">
                  <button 
                    onClick={moveLeft}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600/90 to-amber-800/90 flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all"
                    aria-label="Anterior"
                  >
                    <FaChevronLeft className="text-white" />
                  </button>
                  <button 
                    onClick={moveRight}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600/90 to-amber-800/90 flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all"
                    aria-label="Siguiente"
                  >
                    <FaChevronRight className="text-white" />
                  </button>
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