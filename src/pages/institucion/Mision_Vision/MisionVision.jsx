import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import RepositoriosNacionales from '../../../components/Testimonials/RepositoriosNacionales';

import misionImg from '../../../../public/Mision_vision/mision.jpg';
import visionImg from '../../../../public/Mision_vision/vision.jpg';

const MisionVision = () => {
  const misionRef = useRef(null);
  const visionRef = useRef(null);
  const containerRef = useRef(null);
  
  const misionInView = useInView(misionRef, { once: true, amount: 0.3 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const containerInView = useInView(containerRef, { once: true, amount: 0.1 });

  const misionControls = useAnimation();
  const visionControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    if (misionInView) misionControls.start("visible");
    if (visionInView) visionControls.start("visible");
    if (containerInView) containerControls.start("visible");
  }, [misionInView, visionInView, containerInView]);

  // Animación de scroll
  const scrollAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animación de revelación de letras
  const letterRevealAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Función para dividir texto
  const splitTextIntoChars = (text) => {
    return text.split('').map((char, index) => ({
      char,
      id: index,
      isSpace: char === ' '
    }));
  };

  // Textos
  const misionText = "Recuperar, fortalecer, salvaguardar, custodiar, conservar, registrar, investigar y difundir el patrimonio cultural material e inmaterial del Estado Plurinacional de Bolivia que se encuentra bajo nuestra responsabilidad; así como promover las manifestaciones y producciones culturales, garantizando espacios de acceso, encuentro, diálogo y acción desde la equidad y la diversidad.";
  
  const visionText = "Ser un referente, en el ámbito territorial del Estado Plurinacional de Bolivia, en la gestión, promoción y dinamización del patrimonio cultural material e inmaterial y la diversidad cultural, para la consolidación de una sociedad equitativa, descolonizada, despatriarcalizada e intercultural, con acceso democrático a los espacios y servicios culturales para todas y todos, nacionales o extranjeros, contribuyendo al desarrollo social para el Vivir Bien.";

  const misionChars = splitTextIntoChars(misionText);
  const visionChars = splitTextIntoChars(visionText);

  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      
      <div className="min-h-screen pt-20 bg-gradient-to-b from-yellow-50/10 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="text-blue-600 dark:text-blue-400">Misión</span>
              {' '}y{' '}
              <span className="text-yellow-600 dark:text-yellow-400">Visión</span>
            </h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 mx-auto rounded-full"
            />
            
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-base">
              Nuestro compromiso con el patrimonio cultural boliviano
            </p>
          </motion.div>

          {/* Contenedor principal */}
          <div ref={containerRef} className="relative space-y-16 lg:space-y-24">
            {/* Sección MISIÓN: Imagen a la izquierda, texto a la derecha */}
            <motion.div
              ref={misionRef}
              variants={scrollAnimation}
              initial="hidden"
              animate={misionControls}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Imagen a la izquierda */}
              <motion.div
                className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={misionImg}
                  alt="Misión"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-blue-900/20 to-transparent" />
                
                {/* Badge Misión */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
                >
                  <span className="font-semibold text-sm">Misión</span>
                </motion.div>
              </motion.div>

              {/* Texto a la derecha */}
              <div className="space-y-6">
                {/* Título con animación de revelación */}
                <div className="relative overflow-hidden">
                  <motion.h2
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={misionControls}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white"
                  >
                    Misión 
                  </motion.h2>
                  
                  {/* Línea de revelación azul */}
                  <motion.div
                    variants={{
                      hidden: { left: 0 },
                      visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={misionControls}
                    transition={{ duration: 0.5, ease: "easeIn", delay: 0 }}
                    className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 z-10"
                  />
                </div>

                {/* Texto con animación de letras */}
                <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">"</span>
                  <motion.div 
                    initial="hidden"
                    animate={misionInView ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.008,
                          delayChildren: 0.2
                        }
                      }
                    }}
                    className="inline"
                  >
                    {misionChars.map(({ char, id, isSpace }) => (
                      <motion.span
                        key={id}
                        variants={letterRevealAnimation}
                        className={`inline-block ${isSpace ? 'w-1.5' : ''}`}
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">"</span>
                </div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800"
                >
                  {["Patrimonio", "Cultura", "Conservación", "Difusión"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Sección VISIÓN: Texto a la izquierda, imagen a la derecha */}
            <motion.div
              ref={visionRef}
              variants={scrollAnimation}
              initial="hidden"
              animate={visionControls}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Texto a la izquierda - Orden invertido en móvil */}
              <div className="space-y-6 lg:order-1 order-2">
                {/* Título con animación de revelación */}
                <div className="relative overflow-hidden">
                  <motion.h2
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={visionControls}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white"
                  >
                    Visión
                  </motion.h2>
                  
                  {/* Línea de revelación azul */}
                  <motion.div
                    variants={{
                      hidden: { left: 0 },
                      visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={visionControls}
                    transition={{ duration: 0.5, ease: "easeIn", delay: 0 }}
                    className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 z-10"
                  />
                </div>

                {/* Texto con animación de letras */}
                <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">"</span>
                  <motion.div 
                    initial="hidden"
                    animate={visionInView ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.008,
                          delayChildren: 0.2
                        }
                      }
                    }}
                    className="inline"
                  >
                    {visionChars.map(({ char, id, isSpace }) => (
                      <motion.span
                        key={id}
                        variants={letterRevealAnimation}
                        className={`inline-block ${isSpace ? 'w-1.5' : ''}`}
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">"</span>
                </div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800"
                >
                  {["Referente", "Equidad", "Interculturalidad", "Desarrollo"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Imagen a la derecha - Orden invertido en móvil */}
              <motion.div
                className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg lg:order-2 order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={visionImg}
                  alt="Visión"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-950/60 via-yellow-900/20 to-transparent" />
                
                {/* Badge Visión */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md"
                >
                  <span className="font-semibold text-sm">Visión</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Sección de compromiso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50/50 to-yellow-50/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl border border-blue-200/30 dark:border-blue-800/30"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Nuestro Compromiso
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                Trabajamos por la preservación y promoción del patrimonio cultural boliviano con equidad y diversidad, buscando siempre el Vivir Bien para todas y todos.
              </p>
              

            </motion.div>
          </div>
        </div>
      </div>

      <RepositoriosNacionales />
      <Footer />
    </>
  );
};

export default MisionVision;