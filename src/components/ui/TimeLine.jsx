"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data,
  title = "Línea de Tiempo Histórica",
  description = "Eventos clave en nuestra trayectoria institucional",
  showHeader = true,
  color = "#10B981", // Color verde por defecto
  glowColor = "#10B98180" // Color del brillo
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Función para generar gradiente dinámico
  const generateGradient = (baseColor) => {
    return `linear-gradient(to bottom, 
      transparent 0%, 
      ${baseColor}40 20%, 
      ${baseColor}80 50%, 
      ${baseColor}40 80%, 
      transparent 100%)`;
  };

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}>
      
      {showHeader && (
        <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white max-w-4xl">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl">
            {description}
          </p>
        </div>
      )}
      
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 md:pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 md:pt-12 md:gap-8">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-4 w-4 rounded-full border-2 border-white"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 8px ${glowColor}`
                  }}
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-gray-700 dark:text-gray-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 md:pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-gray-700 dark:text-gray-300">
                {item.title}
              </h3>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        
        {/* Línea vertical de fondo */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-7 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          
          {/* Línea animada verde */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: generateGradient(color),
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
          
          {/* Efecto de brillo */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: `linear-gradient(to bottom, 
                ${color}00 0%, 
                ${color}40 20%, 
                ${color}80 50%, 
                ${color}40 80%, 
                ${color}00 100%)`,
            }}
            className="absolute inset-x-0 top-0 w-[3px] blur-[1px]"
          />
        </div>
      </div>
    </div>
  );
};