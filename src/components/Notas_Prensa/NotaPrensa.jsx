import { Reveal } from "../util/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillFileText, AiOutlineEye } from "react-icons/ai";
import { ProjectModal } from "./NotaModal";

export const Project = (props) => {
  const { modalContent, projectLink, description, imgSrc, title, code, tech } = props;
  
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Ref para el título
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const titleControls = useAnimation();

  // Ref para la descripción
  const descRef = useRef(null);
  const descInView = useInView(descRef, { once: true });
  const descControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (descInView) {
      descControls.start("visible");
    }
  }, [descInView, descControls]);

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
        transition={{ duration: 0.5 }}
        className="mb-6 last:mb-0"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div 
          className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-blue-50/30 group cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
        >
          {/* Imagen con efecto de zoom */}
          <div className="min-w-[140px] max-w-[140px] h-[100px] flex-shrink-0 self-center sm:self-start overflow-hidden rounded-lg">
            <motion.img
              src={imgSrc}
              alt={`Imagen de ${title}`}
              className="w-full h-full object-cover"
              animate={{
                scale: hovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Contenido */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
              <div className="flex-1">
                {/* Título con animación de revelación azul */}
                <div ref={titleRef} style={{ position: "relative", overflow: "hidden" }}>
                  <motion.h4
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={titleControls}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg font-bold text-gray-800 group-hover:text-blue-800 transition-colors"
                  >
                    {title}
                  </motion.h4>
                  
                  {/* Línea de revelación azul */}
                  <motion.div
                    variants={{
                      hidden: { left: 0 },
                      visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={titleControls}
                    transition={{ duration: 0.5, ease: "easeIn", delay: 0 }}
                    className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 z-10"
                  />
                </div>
                
                {/* Badges de categoría con animación */}
                <motion.div 
                  className="flex flex-wrap gap-1 mb-2 mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {tech.map((item, index) => (
                    <motion.span 
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Descripción con animación de revelación */}
                <div ref={descRef} style={{ position: "relative", overflow: "hidden" }}>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={descControls}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-600 text-sm line-clamp-2 mb-3"
                  >
                    {description}
                  </motion.p>
                  
                  {/* Línea de revelación azul más clara */}
                  <motion.div
                    variants={{
                      hidden: { left: 0 },
                      visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={descControls}
                    transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                    className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-blue-500 z-10"
                  />
                </div>
              </div>
              
              {/* Iconos de acción */}
              <div className="flex gap-2 sm:ml-auto">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-full hover:bg-blue-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(code, '_blank');
                  }}
                >
                  <AiFillFileText size="1.2rem" />
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.45 }}
                  className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-full hover:bg-blue-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(projectLink, '_blank');
                  }}
                >
                  <AiOutlineEye size="1.2rem" />
                </motion.button>
              </div>
            </div>
            
            {/* Botón para ver más con animación */}
            <div className="flex items-center justify-between mt-2">
              <div style={{ position: "relative", display: "inline-block" }}>
                <motion.button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="text-blue-700 hover:text-blue-900 text-sm font-semibold transition-colors inline-flex items-center gap-1 group/btn relative z-20"
                >
                  <span className="group-hover/btn:underline">Leer nota completa</span>
                  <motion.span
                    animate={{ x: hovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-700"
                  >
                    →
                  </motion.span>
                </motion.button>
                
                {/* Línea azul decorativa debajo del botón */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Fecha simulada con animación */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.55 }}
                className="text-xs text-gray-500"
              >
                Hace 2 días
              </motion.span>
            </div>
          </div>
        </div>
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