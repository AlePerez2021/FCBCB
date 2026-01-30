import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

// Datos de testimonios
const testimonialsData = [
  {
    id: 1,
    name: "Pete",
    role: "CEO at Empresa X",
    content: "He estado buscando una solución como esta durante AÑOS. ¡Me alegra haberla encontrado!",
    rating: 5,
    company: "TechCorp",
    delay: 0.1
  },
  {
    id: 2,
    name: "Fernando",
    role: "CEO at Digital Solutions",
    content: "Estoy seguro con esta empresa. No puedo decir lo mismo de otros productos en el mercado.",
    rating: 4,
    company: "Digital Solutions",
    delay: 0.2
  },
  {
    id: 3,
    name: "Andy",
    role: "CEO at Innovate Co",
    content: "Simplemente lo mejor. Punto final.",
    rating: 5,
    company: "Innovate Co",
    delay: 0.3
  },
  {
    id: 4,
    name: "Alex",
    role: "CEO at FutureTech",
    content: "Mi solución favorita en el mercado. Trabajamos 5 veces más rápido con esta empresa.",
    rating: 5,
    company: "FutureTech",
    delay: 0.4
  },
  {
    id: 5,
    name: "Dan",
    role: "CEO at Growth Partners",
    content: "Busco una empresa que no solo sea buena, sino que también tenga una gran cultura y valores.",
    rating: 4,
    company: "Growth Partners",
    delay: 0.5
  },
  {
    id: 6,
    name: "Sarah",
    role: "CTO at Cloud Systems",
    content: "La implementación fue impecable. El equipo de soporte es excepcional y siempre está disponible.",
    rating: 5,
    company: "Cloud Systems",
    delay: 0.6
  }
];

const StaggerTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Configuración del auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, activeIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Render estrellas de rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Variantes de animación
  const cardVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.9,
      rotateY: direction > 0 ? 20 : -20,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      scale: 0.9,
      rotateY: direction > 0 ? -20 : 20,
      transition: {
        duration: 0.4
      }
    })
  };

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVariants}
          custom={0}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 mb-6">
            <span className="text-amber-400 text-sm font-semibold tracking-wider">
              TESTIMONIOS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros 
            <span className="block text-amber-400 mt-2">clientes y socios</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Empresas líderes confían en nosotros para transformar sus operaciones y alcanzar nuevos niveles de éxito.
          </p>
        </motion.div>

        {/* Contenedor principal */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Tarjeta principal del testimonio */}
            <div className="relative h-[500px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* Tarjeta grande principal */}
                  <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
                    {/* Patrón de fondo sutil */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                    </div>

                    {/* Contenido */}
                    <div className="relative h-full p-8 md:p-12 flex flex-col">
                      {/* Quote icon top */}
                      <div className="mb-8">
                        <FaQuoteLeft className="w-12 h-12 text-amber-500/30" />
                      </div>

                      {/* Texto del testimonio */}
                      <div className="flex-grow">
                        <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                          "{testimonialsData[activeIndex].content}"
                        </p>
                      </div>

                      {/* Información de la persona */}
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {testimonialsData[activeIndex].name}
                            </h3>
                            <p className="text-gray-400 text-lg">
                              {testimonialsData[activeIndex].role}
                            </p>
                          </div>
                          
                          {/* Rating */}
                          <div className="flex items-center space-x-1">
                            {renderStars(testimonialsData[activeIndex].rating)}
                            <span className="ml-2 text-amber-400 font-semibold">
                              {testimonialsData[activeIndex].rating}.0
                            </span>
                          </div>
                        </div>

                        {/* Company badge */}
                        <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
                          <span className="text-amber-400 text-sm font-semibold">
                            {testimonialsData[activeIndex].company}
                          </span>
                        </div>
                      </div>

                      {/* Quote icon bottom */}
                      <div className="absolute bottom-8 right-8">
                        <FaQuoteRight className="w-8 h-8 text-amber-500/20" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles de navegación */}
            <div className="flex justify-center items-center mt-12 space-x-8">
              <button
                onClick={prevTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-amber-500 transition-all duration-300 group"
              >
                <FaChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </button>

              {/* Indicadores */}
              <div className="flex items-center space-x-4">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className={`transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-12 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full'
                        : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-amber-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-amber-500 transition-all duration-300 group"
              >
                <FaChevronRight className="w-6 h-6 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </button>
            </div>

            {/* Mini tarjetas en la parte inferior (stagger effect) */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerVariants}
                  custom={index * 0.1}
                  onClick={() => goToTestimonial(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-2 border-amber-500/50 shadow-lg shadow-amber-500/20 transform scale-105'
                      : 'bg-gray-800/50 border border-gray-700 hover:border-amber-500/30 hover:bg-gray-800/80'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === activeIndex 
                        ? 'bg-gradient-to-r from-amber-400 to-amber-600' 
                        : 'bg-gray-700'
                    }`}>
                      <span className="font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Mini rating */}
                  <div className="flex items-center mt-3 space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Más de 500 empresas confían en nosotros
                </h3>
                <p className="text-gray-400">
                  Con una satisfacción del cliente del 98% y crecimiento constante año tras año.
                </p>
              </div>
              <div className="ml-8 flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
                <span className="text-white font-bold text-xl ml-2">4.9</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efectos visuales adicionales */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default StaggerTestimonials;