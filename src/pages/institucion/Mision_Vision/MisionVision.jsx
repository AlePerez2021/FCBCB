"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useMotionValueEvent, useScroll } from 'motion/react';
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import RepositoriosNacionales from '../../../components/Testimonials/RepositoriosNacionales';

import misionImg from '../../../../public/Mision_vision/mision.jpg';
import visionImg from '../../../../public/Mision_vision/vision.jpg';
import { cn } from '../../../lib/utils';

// Componente StickyScroll (puedes moverlo a un archivo separado)
const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#fefce8", // amber-50
    "#fefce8", // amber-50
    "#fefce8", // amber-50
  ];
  
  const linearGradients = [
    "linear-gradient(to bottom right, #3b82f6, #8b5cf6)", // blue-500 to purple-500
    "linear-gradient(to bottom right, #f59e0b, #d97706)", // amber-500 to amber-600
    "linear-gradient(to bottom right, #3b82f6, #06b6d4)", // blue-500 to cyan-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[40rem] justify-center space-x-10 overflow-y-auto rounded-2xl p-10 shadow-xl"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-3xl font-bold text-gray-800 dark:text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-lg text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-80 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

const MisionVision = () => {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { once: true, amount: 0.1 });
  const containerControls = useAnimation();

  useEffect(() => {
    if (containerInView) containerControls.start("visible");
  }, [containerInView]);

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

  // Contenido para StickyScroll
  const stickyContent = [
    {
      title: "Nuestra Misión",
      description: "Recuperar, fortalecer, salvaguardar, custodiar, conservar, registrar, investigar y difundir el patrimonio cultural material e inmaterial del Estado Plurinacional de Bolivia que se encuentra bajo nuestra responsabilidad; así como promover las manifestaciones y producciones culturales, garantizando espacios de acceso, encuentro, diálogo y acción desde la equidad y la diversidad.",
      content: (
        <div className="flex h-full w-full items-center justify-center p-6">
          <motion.img
            src={misionImg}
            alt="Misión"
            className="h-full w-full object-cover rounded-xl shadow-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-blue-900/20 to-transparent rounded-xl" />
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
            <span className="font-semibold text-sm">Misión</span>
          </div>
        </div>
      ),
    },
    {
      title: "Nuestra Visión",
      description: "Ser un referente, en el ámbito territorial del Estado Plurinacional de Bolivia, en la gestión, promoción y dinamización del patrimonio cultural material e inmaterial y la diversidad cultural, para la consolidación de una sociedad equitativa, descolonizada, despatriarcalizada e intercultural, con acceso democrático a los espacios y servicios culturales para todas y todos, nacionales o extranjeros, contribuyendo al desarrollo social para el Vivir Bien.",
      content: (
        <div className="flex h-full w-full items-center justify-center p-6">
          <motion.img
            src={visionImg}
            alt="Visión"
            className="h-full w-full object-cover rounded-xl shadow-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-950/60 via-yellow-900/20 to-transparent rounded-xl" />
          <div className="absolute bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg">
            <span className="font-semibold text-sm">Visión</span>
          </div>
        </div>
      ),
    },
    {
      title: "Nuestro Compromiso",
      description: "Trabajamos por la preservación y promoción del patrimonio cultural boliviano con equidad y diversidad, buscando siempre el Vivir Bien para todas y todos. Nos comprometemos a ser un puente entre el pasado y el futuro, conservando nuestra identidad cultural mientras construimos una sociedad más inclusiva.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-8">
          <div className="text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-5xl mb-4"
            >
              🤝
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Compromiso Cultural</h3>
            <p className="text-sm opacity-90">
              Patrimonio, Equidad, Diversidad
            </p>
          </div>
        </div>
      ),
    },
  ];

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

          {/* Sección con StickyScroll */}
          <motion.div
            ref={containerRef}
            variants={scrollAnimation}
            initial="hidden"
            animate={containerControls}
            className="mb-20"
          >
            <StickyScroll content={stickyContent} />
          </motion.div>

          {/* Sección adicional de valores (opcional) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50/50 to-yellow-50/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-blue-200/30 dark:border-blue-800/30"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Nuestros Valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Equidad",
                  description: "Garantizamos acceso igualitario a los servicios culturales para todos los bolivianos.",
                  icon: "⚖️"
                },
                {
                  title: "Diversidad",
                  description: "Valoramos y promovemos la riqueza cultural de todas las regiones de Bolivia.",
                  icon: "🌈"
                },
                {
                  title: "Compromiso",
                  description: "Trabajamos con dedicación para preservar nuestro patrimonio cultural.",
                  icon: "🤝"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <RepositoriosNacionales />
      <Footer />
    </>
  );
};

export default MisionVision;