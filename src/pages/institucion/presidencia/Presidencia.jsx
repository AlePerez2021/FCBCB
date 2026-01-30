import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

// Importa la imagen de la Presidente 
import PresidenteImg from '../../../../public/presidencia/alejandra_echazu.jpeg'; 

const Presidencia = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const PresidenteRef = useRef(null);
  const bioRef = useRef(null);
  
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const PresidenteInView = useInView(PresidenteRef, { once: true, amount: 0.5 });
  const bioInView = useInView(bioRef, { once: true, amount: 0.3 });

  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const PresidenteControls = useAnimation();
  const bioControls = useAnimation();

  useEffect(() => {
    if (titleInView) titleControls.start("visible");
    if (contentInView) contentControls.start("visible");
    if (PresidenteInView) PresidenteControls.start("visible");
    if (bioInView) bioControls.start("visible");
  }, [titleInView, contentInView, PresidenteInView, bioInView]);

  // Animaciones
  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const splitTextIntoChars = (text) => {
    return text.split('').map((char, index) => ({
      char,
      id: index,
      isSpace: char === ' '
    }));
  };

  const titleText = "Presidencia";
  const titleChars = splitTextIntoChars(titleText);

  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12">
          {/* Título principal con animación de letras */}
          <motion.div
            ref={titleRef}
            className="text-center mb-16 relative"
          >
            <div className="relative inline-block">
              <motion.h1
                initial="hidden"
                animate={titleControls}
                variants={staggerContainer}
                className="text-5xl md:text-6xl font-bold mb-4 relative"
              >
                {titleChars.map(({ char, id, isSpace }) => (
                  <motion.span
                    key={id}
                    variants={letterAnimation}
                    className={`inline-block ${isSpace ? 'w-3' : ''} text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              
              {/* Línea decorativa animada */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto"
            >
              Liderazgo y Gestión Cultural Institucional
            </motion.p>
          </motion.div>

          {/* Sección de contenido - La Presidencia */}
          <motion.div
            ref={contentRef}
            variants={slideInFromLeft}
            initial="hidden"
            animate={contentControls}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-200 dark:border-gray-800"
          >
            {/* Título con animación de línea */}
            <div className="mb-10 relative overflow-hidden">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={contentControls}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
              >
                El Rol del Presidente del Consejo de Administración
              </motion.h2>
              
              <motion.div
                variants={{
                  hidden: { left: 0 },
                  visible: { left: "100%" },
                }}
                initial="hidden"
                animate={contentControls}
                transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 z-10"
              />
            </div>

            {/* Contenido del texto con animaciones escalonadas y texto indentado */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={contentControls}
              className="space-y-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed pl-6 md:pl-8 relative te"

            >
              {/* Línea vertical decorativa */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>
              
              <motion.p variants={fadeInUp}>
                El <span className="font-bold text-blue-600 dark:text-blue-400">Presidente del Consejo de Administración</span> es la <span className="font-bold">Autoridad Ejecutiva</span> de la FCBCB. Es designado por el <span className="font-bold">Directorio del Banco Central de Bolivia</span>. 
              </motion.p>

              <motion.p variants={fadeInUp} >
                Su mandato es de <span className="font-bold text-yellow-600 dark:text-yellow-400">cinco años</span> computables desde el día de su designación como Presidente y podrá ser designado por una sola vez, por un periodo adicional de cinco años. 
              </motion.p>

              <motion.p variants={fadeInUp}>
                Su cargo es de <span className="font-bold">libre nombramiento</span>, con funciones a <span className="font-bold">tiempo completo</span> y <span className="font-bold">dedicación exclusiva</span>, no pudiendo ejercer ningún cargo público o privado, salvo lo dispuesto en la normativa vigente.
              </motion.p>

              <motion.p variants={fadeInUp} >
                La <span className="font-bold text-purple-600 dark:text-purple-400">Presidencia del Consejo de Administración</span> es responsable por la gestión y administración interna de la FCBCB, es un <span className="font-bold">eje de integración</span> entre los <span className="font-bold">Repositorios Nacionales</span> y <span className="font-bold">Centros Culturales</span>, coordinando y organizando su labor y otras muchas actividades del que hacer cultural boliviano.
              </motion.p>

              <motion.p variants={fadeInUp} >
                Articula a la Fundación con los sistemas de administración y control y con otras instancias del Estado y otras organizaciones.
              </motion.p>
            </motion.div>

          </motion.div>

          {/* Sección de la Presidente */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Foto de la Presidente - MÁS PEQUEÑA */}
            <motion.div
              ref={PresidenteRef}
              variants={slideInFromLeft}
              initial="hidden"
              animate={PresidenteControls}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0">
                <motion.div
                  className="aspect-[3/4] w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Imagen de la Presidente - MÁS PEQUEÑA */}
                  <motion.img
                    src={PresidenteImg}
                    alt="Alejandra Echazú Conitzer"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    loading="lazy"
                  />
                  
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
                
                {/* Badge animado - MÁS PEQUEÑO */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl"
                >
                  <span className="font-bold text-xs">PRESIDENTE</span>
                </motion.div>
              </div>
              
              {/* Elementos decorativos */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
              />
            </motion.div>

            {/* Información de la Presidente a la derecha */}
            <motion.div
              ref={bioRef}
              variants={slideInFromRight}
              initial="hidden"
              animate={bioControls}
              className="space-y-6"
            >
              {/* Título con animación */}
              <div className="relative overflow-hidden mb-6">
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={bioControls}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center"
                >
                  Alejandra Echazú Conitzer
                </motion.h2>
                                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={bioControls}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center"
                >
                  Presidente de la Fundación Cultural del Banco Central de Bolivia (FC-BCB)
                </motion.h2> 
                <motion.div
                  variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                  }}
                  initial="hidden"
                  animate={bioControls}
                  transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 z-10"
                />
              </div>

              {/* Biografía con texto indentado */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={bioControls}
                className="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed pl-4 relative"
              >
                {/* Línea vertical decorativa */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                
                <motion.p variants={fadeInUp} className="indent-4">
                  Es <span className="font-bold text-gray-800 dark:text-white">Doctora en literatura</span>, trabajó como docente, gestora cultural, editora y académica.
                </motion.p>

                <motion.p variants={fadeInUp} className="indent-4">
                  Fue <span className="font-bold text-purple-600 dark:text-purple-400">coordinadora de culturas en el Goethe-Institut</span>
                </motion.p>

                <motion.p variants={fadeInUp} className="indent-4">
                  <span className="font-bold text-blue-600 dark:text-blue-400">Profesora en la Universidad de Maryland, Estados Unidos</span>
                </motion.p>

                <motion.p variants={fadeInUp} className="indent-4">
                  Se desempeñó como <span className="font-bold text-yellow-600 dark:text-yellow-400">directora del Departamento de Cultura y Arte en la Universidad Católica Boliviana San Pablo (UCB)</span>
                </motion.p>
              </motion.div>

              {/* Logros destacados */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800/30"
              >
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  Áreas de Experiencia
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Gestión Cultural",
                    "Docencia Universitaria",
                    "Literatura",
                    "Edición",
                    "Academia",
                    "Coordinación"
                  ].map((area, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium text-center shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sección de contacto o información adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center p-6 md:p-8 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 dark:from-blue-800/20 dark:via-purple-800/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800/30 max-w-3xl mx-auto"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Liderazgo Cultural Institucional
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base indent-4 text-justify max-w-2xl mx-auto">
              Bajo la dirección de la Presidente, la FC-BCB continúa fortaleciendo el patrimonio cultural boliviano y promoviendo la diversidad cultural a nivel nacional e internacional.
            </p>
            
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Presidencia;