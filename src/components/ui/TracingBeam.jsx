"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "../../lib/utils";

export const TracingBeam = ({
  children,
  className,
  showLine = true,
  showDot = true,
  offset = 0,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50 + offset, svgHeight + offset]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50 + offset, svgHeight - 200 + offset]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  // Colores: Azul para el inicio, Verde para el final
  const START_BLUE = "#3B82F6";     // Azul brillante
  const END_GREEN = "#10B981";      // Verde esmeralda
  const LIGHT_BLUE = "#60A5FA";     // Azul claro
  const LIGHT_GREEN = "#34D399";    // Verde claro
  const GRADIENT_MID = "#22D3EE";   // Cian para la transición

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full h-full", className)}
    >
      {showLine && (
        <div className="absolute top-3 left-4 md:left-8 lg:left-12 xl:left-16 2xl:left-24">
          {showDot && (
            <motion.div
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
              animate={{
                boxShadow:
                  scrollYProgress.get() > 0
                    ? `0 0 10px ${END_GREEN}`
                    : `0 0 10px ${START_BLUE}`,
              }}
              className="ml-[27px] flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors duration-300"
              style={{ 
                borderColor: scrollYProgress.get() > 0.5 ? END_GREEN : START_BLUE,
                backgroundColor: scrollYProgress.get() > 0.5 
                  ? 'rgba(16, 185, 129, 0.1)' 
                  : 'rgba(59, 130, 246, 0.1)'
              }}
            >
              <motion.div
                transition={{
                  duration: 0.2,
                  delay: 0.5,
                }}
                animate={{
                  backgroundColor: scrollYProgress.get() > 0.5 ? END_GREEN : START_BLUE,
                  boxShadow: scrollYProgress.get() > 0.5 
                    ? `0 0 8px ${END_GREEN}` 
                    : `0 0 8px ${START_BLUE}`,
                }}
                className="h-2.5 w-2.5 rounded-full border border-white transition-colors duration-300"
              />
            </motion.div>
          )}
          
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="ml-4 block"
            aria-hidden="true"
          >
            {/* Línea de fondo - degradado azul a verde */}
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#bg-gradient)"
              strokeOpacity="0.3"
              strokeWidth="2"
              transition={{
                duration: 10,
              }}
            />
            
            {/* Línea principal animada */}
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#main-gradient)"
              strokeWidth="2.5"
              className="motion-reduce:hidden"
              style={{ 
                filter: `drop-shadow(0 0 2px ${scrollYProgress.get() > 0.5 ? END_GREEN + '80' : START_BLUE + '80'})` 
              }}
              transition={{
                duration: 10,
              }}
            />
            
            <defs>
              {/* Gradiente de fondo azul → verde */}
              <linearGradient
                id="bg-gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1="0"
                y2={svgHeight}
              >
                <stop offset="0%" stopColor={START_BLUE} stopOpacity="0.4" />
                <stop offset="30%" stopColor={GRADIENT_MID} stopOpacity="0.3" />
                <stop offset="70%" stopColor={END_GREEN} stopOpacity="0.4" />
                <stop offset="100%" stopColor={END_GREEN} stopOpacity="0.2" />
              </linearGradient>

              {/* Gradiente principal que se anima con scroll */}
              <motion.linearGradient
                id="main-gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                {/* El gradiente cambia dinámicamente basado en la posición del scroll */}
                <motion.stop
                  offset="0%"
                  stopColor={START_BLUE}
                  animate={{
                    stopColor: scrollYProgress.get() > 0.7 ? END_GREEN : START_BLUE,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.stop
                  offset="30%"
                  stopColor={LIGHT_BLUE}
                  animate={{
                    stopColor: scrollYProgress.get() > 0.5 ? LIGHT_GREEN : LIGHT_BLUE,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.stop
                  offset="50%"
                  stopColor={GRADIENT_MID}
                  animate={{
                    stopColor: scrollYProgress.get() > 0.3 ? GRADIENT_MID : LIGHT_BLUE,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.stop
                  offset="70%"
                  stopColor={END_GREEN}
                  animate={{
                    stopColor: scrollYProgress.get() > 0.1 ? END_GREEN : GRADIENT_MID,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <stop offset="100%" stopColor={END_GREEN} />
              </motion.linearGradient>
            </defs>
          </svg>
          
          {/* Efecto de resplandor que cambia de color */}
          <motion.div 
            className="absolute left-4 top-0 bottom-0 w-0.5"
            initial={{ opacity: 0.3 }}
            animate={{
              background: `linear-gradient(180deg, 
                ${START_BLUE}20 0%, 
                ${scrollYProgress.get() > 0.5 ? END_GREEN + '60' : START_BLUE + '60'} 30%, 
                ${scrollYProgress.get() > 0.5 ? END_GREEN + '80' : START_BLUE + '80'} 50%,
                ${scrollYProgress.get() > 0.5 ? END_GREEN + '60' : START_BLUE + '60'} 70%,
                ${END_GREEN}20 100%)`,
            }}
            style={{
              filter: 'blur(3px)',
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      {/* Contenedor del contenido */}
      <div 
        ref={contentRef} 
        className={cn(
          showLine ? "pl-8 md:pl-16 lg:pl-20 xl:pl-24 2xl:pl-32" : "",
          "w-full"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};