import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillFileText, AiOutlineEye } from "react-icons/ai";
import { ProjectModal } from "./NotaModal";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { cn } from "../../lib/utils";

export const Project = (props) => {
  const { modalContent, projectLink, description, imgSrc, title, code, tech } = props;
  
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Ref para el título - usa el mismo ref que el contenedor
  const titleRef = useRef(null);
  
  // Ref para la descripción
  const descRef = useRef(null);
  const descInView = useInView(descRef, { once: true, margin: "-50px" });

  // Un solo useEffect para todas las animaciones
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Colores culturales vibrantes
  const culturalColors = [
    "#D4AF37", // Oro - representa valor, riqueza cultural
    "#C41E3A", // Rojo carmesí - pasión, arte
    "#0D4F8B", // Azul real - sabiduría, tradición
    "#228B22", // Verde bosque - naturaleza, patrimonio
  ];

  // Función para abrir modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // Función para manejar clics en botones (evita que abran el modal)
  const handleButtonClick = (e, type) => {
    e.stopPropagation();
    if (type === 'code') {
      window.open(code, '_blank');
    } else if (type === 'project') {
      window.open(projectLink, '_blank');
    }
  };

  // Animaciones para títulos y descripciones
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1 
      }
    }
  };

  const descriptionAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.3 
      }
    }
  };

  const badgesAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: 0.2 
      }
    }
  };

  const badgeItemAnimation = (index) => ({
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        delay: 0.1 * index 
      }
    }
  });

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          },
        }}
        initial="hidden"
        animate={controls}
        className="mb-6 last:mb-0 relative"
      >
        {/* WRAPPER CON BACKGROUND GRADIENT */}
        <BackgroundGradient 
          className="rounded-[22px] max-w-full p-1 sm:p-1.5 bg-white dark:bg-zinc-900"
          containerClassName="rounded-[22px]"
          animate={true}
        >
          <div onClick={handleOpenModal} className="cursor-pointer relative">
            <CardContainer className="w-full">
              <div className="relative" style={{ perspective: "1000px" }}>
                {/* Card principal con animación 3D */}
                <CardBody 
                  className="relative bg-white flex flex-col sm:flex-row gap-4 p-5 rounded-xl group w-full items-center w-full border-2 border-gray-100"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{
                    background: hovered 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))'
                      : 'white',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                    transformStyle: "preserve-3d",
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  {/* Esquinas decorativas 3D con colores del gradient */}
                  {hovered && (
                    <>
                      <motion.div
                        className="absolute -top-2 -left-2 w-8 h-8"
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        style={{ transformStyle: "preserve-3d", zIndex: 5 }}
                      >
                        <div className="w-6 h-6 border-t-4 border-l-4 rounded-tl-lg border-[#00ccb1]" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8"
                        initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        style={{ transformStyle: "preserve-3d", zIndex: 5 }}
                      >
                        <div className="w-6 h-6 border-t-4 border-r-4 rounded-tr-lg border-[#7b61ff]" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-8 h-8"
                        initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        style={{ transformStyle: "preserve-3d", zIndex: 5 }}
                      >
                        <div className="w-6 h-6 border-b-4 border-l-4 rounded-bl-lg border-[#ffc414]" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-8 h-8"
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        style={{ transformStyle: "preserve-3d", zIndex: 5 }}
                      >
                        <div className="w-6 h-6 border-b-4 border-r-4 rounded-br-lg border-[#1ca0fb]" />
                      </motion.div>
                    </>
                  )}

                  {/* Título con animación 3D */}
                  <CardItem
                    translateZ={50}
                    rotateX={10}
                    className="relative w-full"
                  >
                    <div ref={titleRef} style={{ position: "relative", overflow: "hidden" }}>
                      <motion.h4
                        initial="hidden"
                        animate={controls} // Usa el mismo control que el contenedor
                        variants={titleAnimation}
                        className={cn(
                          "text-xl font-bold text-center",
                          hovered 
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            : "text-blue-800"
                        )}
                        style={{ 
                          textShadow: hovered ? '2px 2px 4px rgba(0,0,0,0.1)' : 'none',
                          transform: hovered ? 'translateZ(30px)' : 'translateZ(0)'
                        }}
                      >
                        {title}
                      </motion.h4>
                    </div>
                  </CardItem>

                  {/* Imagen con efecto 3D */}
                  <CardItem
                    translateZ={80}
                    rotateX={15}
                    rotateY={-20}
                    className="min-w-full sm:min-w-full sm:max-w-full h-[220px] flex-shrink-0 self-center sm:self-start overflow-hidden rounded-xl relative group/image lg:w-full"
                    style={{
                      border: hovered ? '3px solid #7b61ff50' : '3px solid transparent',
                      boxShadow: hovered ? '0 15px 30px #00ccb130, inset 0 0 20px #1ca0fb20' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <motion.img
                      src={imgSrc}
                      alt={`Imagen de ${title}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{
                        scale: hovered ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        filter: hovered ? 'brightness(1.1) contrast(1.05)' : 'none'
                      }}
                    />
                    
                    {/* Overlay 3D en la imagen */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </CardItem>
                  
                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
                      <div className="flex-1">
                        
                        {/* Badges con efecto 3D */}
                        <CardItem
                          translateZ={30}
                          translateY={-10}
                        >
                          <motion.div 
                            className="flex flex-wrap gap-2 mb-3"
                            initial="hidden"
                            animate={controls} // Usa el mismo control
                            variants={badgesAnimation}
                          >
                            {tech.map((item, index) => (
                              <motion.span 
                                key={index}
                                initial="hidden"
                                animate={controls} // Usa el mismo control
                                variants={badgeItemAnimation(index)}
                                whileHover={{ 
                                  scale: 1.1,
                                  translateZ: 20,
                                  backgroundColor: culturalColors[index % culturalColors.length],
                                  color: "white",
                                  boxShadow: `0 8px 20px ${culturalColors[index % culturalColors.length]}80`
                                }}
                                className="text-xs px-3 py-1.5 rounded-full font-medium cursor-default border transition-all duration-300"
                                style={{ 
                                  background: `linear-gradient(135deg, ${culturalColors[index % culturalColors.length]}20, ${culturalColors[(index + 2) % culturalColors.length]}20)`,
                                  borderColor: culturalColors[index % culturalColors.length] + '40',
                                  color: culturalColors[index % culturalColors.length],
                                  transformStyle: "preserve-3d"
                                }}
                              >
                                {item}
                              </motion.span>
                            ))}
                          </motion.div>
                        </CardItem>
                        
                        {/* Descripción con efecto 3D */}
                        <CardItem
                          translateZ={20}
                          rotateX={5}
                          className="relative"
                        >
                          <div ref={descRef} style={{ position: "relative", overflow: "hidden" }}>
                            <motion.p
                              initial="hidden"
                              animate={controls} // Usa el mismo control
                              variants={descriptionAnimation}
                              className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3"
                              style={{ 
                                textShadow: hovered ? '1px 1px 2px rgba(0,0,0,0.1)' : 'none',
                                transform: hovered ? 'translateZ(10px)' : 'translateZ(0)'
                              }}
                            >
                              {description}
                            </motion.p>
                          </div>
                        </CardItem>
                      </div>
                      
                      {/* Iconos con efecto 3D */}
                      <CardItem
                        translateZ={40}
                        translateX={10}
                        translateY={-10}
                        rotateZ={5}
                      >
                        <div className="flex gap-3 sm:ml-auto">
                          <motion.button 
                            whileHover={{ scale: 1.2, rotate: 10, translateZ: 20 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="p-3 rounded-full transition-all duration-300"
                            onClick={(e) => handleButtonClick(e, 'code')}
                            style={{
                              background: `linear-gradient(135deg, #00ccb1, #7b61ff)`,
                              boxShadow: hovered 
                                ? '0 10px 25px #00ccb180, inset 0 1px 0 #00ccb180'
                                : '0 4px 12px rgba(0,0,0,0.15)',
                              transformStyle: "preserve-3d"
                            }}
                          >
                            <AiFillFileText size="1.3rem" className="text-white" />
                          </motion.button>

                          <motion.button 
                            whileHover={{ scale: 1.2, rotate: -10, translateZ: 20 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.45 }}
                            className="p-3 rounded-full transition-all duration-300"
                            onClick={(e) => handleButtonClick(e, 'project')}
                            style={{
                              background: `linear-gradient(135deg, #ffc414, #1ca0fb)`,
                              boxShadow: hovered 
                                ? '0 10px 25px #ffc41480, inset 0 1px 0 #ffc41480'
                                : '0 4px 12px rgba(0,0,0,0.15)',
                              transformStyle: "preserve-3d"
                            }}
                          >
                            <AiOutlineEye size="1.3rem" className="text-white" />
                          </motion.button>
                        </div>
                      </CardItem>
                    </div>
                    
                    {/* Pie del card */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <CardItem
                        translateZ={25}
                        translateX={-15}
                        rotateY={10}
                      >
                        <div style={{ position: "relative", display: "inline-block" }}>
                          <div 
                            className={cn(
                              "text-sm font-semibold transition-colors inline-flex items-center gap-1 group/btn",
                              hovered 
                                ? "bg-gradient-to-r from-[#00ccb1] to-[#7b61ff] bg-clip-text text-transparent"
                                : "text-[#00ccb1]"
                            )}
                          >
                            <span className="group-hover/btn:underline">Explorar contenido</span>
                            <motion.span
                              animate={{ x: hovered ? 8 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.span>
                          </div>
                          
                          {/* Línea decorativa 3D */}
                          <motion.div
                            className="absolute bottom-0 left-0 h-1 rounded-full"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                            style={{ 
                              background: `linear-gradient(90deg, #00ccb1, #7b61ff)`,
                              boxShadow: '0 2px 8px #00ccb140',
                              transform: 'translateZ(5px)'
                            }}
                          />
                        </div>
                      </CardItem>
                      
                      {/* Fecha con efecto 3D */}
                      <CardItem
                        translateZ={25}
                        translateX={15}
                        rotateY={-10}
                      >
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.55 }}
                          className="text-xs font-medium flex items-center"
                          style={{ 
                            color: hovered ? '#ffc414' : '#1ca0fb'
                          }}
                        >
                          <motion.span
                            animate={hovered ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="inline-block mr-2"
                            style={{ color: hovered ? '#7b61ff' : '#00ccb1' }}
                          >
                            ⏳
                          </motion.span>
                          <span className={cn(
                            hovered && "bg-gradient-to-r from-[#ffc414] to-[#1ca0fb] bg-clip-text text-transparent"
                          )}>
                            Reciente
                          </span>
                        </motion.span>
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </div>
            </CardContainer>
          </div>
        </BackgroundGradient>
      </motion.div>
      
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};