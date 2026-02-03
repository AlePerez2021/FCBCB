import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

// Iconos
import { 
  FiHelpCircle, 
  FiMail, 
  FiMapPin, 
  FiBook, 
  FiDollarSign, 
  FiSend,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
  FiShoppingBag,
  FiUsers
} from 'react-icons/fi';
import RepositoriosNacionales from '../../../components/Testimonials/RepositoriosNacionales';

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const preguntas = [
    {
      id: 1,
      pregunta: "¿La Fundación Cultural del Banco Central de Bolivia apoya económicamente Proyectos Artísticos/Culturales?",
      respuesta: "La FCBCB es una institución pública, su ejecución presupuestaria está regida por un Plan Operativo Anual (POA) que es aprobado en la gestión anterior, de acuerdo a tareas planificadas para cada uno de los Repositorios Nacionales y Centros Culturales dependientes. Para este tipo de colaboraciones no previstas, la Unidad Nacional de Gestión Cultural debe analizar el tipo de proyecto y ver si es posible vincularlo con el POA institucional. Por ello es importante que el solicitante envíe su nota, explicando su proyecto artístico/cultural, el destino de los fondos solicitados y el monto total requerido.",
      icono: FiDollarSign,
      categoria: "Apoyos y Financiamiento"
    },
    {
      id: 2,
      pregunta: "¿Cómo puedo solicitar apoyo por parte de la Fundación Cultural del BCB para llevar a cabo un proyecto Artístico/Cultural?",
      respuesta: "Debe elaborar una carta en la cual explique el proyecto artístico/cultural que se llevará a cabo y qué tipo de apoyo requiere de la institución. Esta carta debe remitirse a nombre del Presidente de la FCBCB y entregarla en nuestra oficina central, que se ubica en la calle Fernando Guachalla Nº 476, Zona Sopocachi de la ciudad de La Paz. En caso de vivir en otra ciudad, puede hacernos llegar la carta escaneada a nuestro correo institucional fundacion@fundacionculturalbcb.gob.bo. No olvide añadir un número de teléfono y correo electrónico para que podamos ponernos en contacto.",
      icono: FiSend,
      categoria: "Procedimientos"
    },
    {
      id: 3,
      pregunta: "¿Cómo puedo hacer llegar una propuesta y/o invitación?",
      respuesta: "Puede enviar a nuestra oficina central que se ubica en la calle Fernando Guachalla Nº 476 zona Sopocachi, La Paz. En caso de estar en otra ciudad, puede hacernos llegar el documento escaneado a nuestro correo institucional fundacion@fundacionculturalbcb.gob.bo. No olvide añadir un número de teléfono y correo electrónico para que podamos ponernos en contacto.",
      icono: FiMail,
      categoria: "Contacto"
    },
    {
      id: 4,
      pregunta: "¿Cómo puedo adquirir una de sus publicaciones?",
      respuesta: "Actualmente la institución cuenta con tiendas en las cuales puede adquirir nuestras publicaciones. En el caso de la oficina central (FCBCB) la tienda se ubica en el Museo Fernando Montes, calle Fernando Guachalla Nº 476, zona Sopocachi. Los horarios de atención son de lunes a viernes de 8:30 a 16:30. Puede revisar nuestro catálogo de publicaciones en este enlace: http://www.fundacionculturalbcb.gob.bo/documentos/cultura/catalogo-de-publicaciones.pdf. En caso de vivir en otra ciudad, realizamos envíos usando la línea de buses de su preferencia, con pago en destino. Previamente debe realizar un depósito bancario por el monto total de la publicación y enviarnos el comprobante por correo electrónico. Para más información puede contactarnos al 2-424148 o escribirnos al correo fundacion@fundacionculturalbcb.gob.bo",
      icono: FiShoppingBag,
      categoria: "Publicaciones"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          
          {/* Encabezado */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl">
              <FiHelpCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Preguntas Frecuentes
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto"
            >
              Encuentra respuestas a las consultas más comunes sobre la Fundación Cultural del BCB
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-4 sm:mt-6"
            />
          </motion.div>

          {/* Grid de Categorías */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 sm:mb-12"
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-10 h-10 mx-auto mb-2 text-blue-600 dark:text-blue-400">
                <FiDollarSign className="w-full h-full" />
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">Apoyos</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-10 h-10 mx-auto mb-2 text-blue-600 dark:text-blue-400">
                <FiSend className="w-full h-full" />
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">Procedimientos</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-10 h-10 mx-auto mb-2 text-blue-600 dark:text-blue-400">
                <FiMail className="w-full h-full" />
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">Contacto</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-10 h-10 mx-auto mb-2 text-blue-600 dark:text-blue-400">
                <FiShoppingBag className="w-full h-full" />
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">Publicaciones</div>
            </div>
          </motion.div>

          {/* Acordeones de Preguntas Frecuentes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {preguntas.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="mb-4"
              >
                <motion.div
                  onClick={() => toggleAccordion(index)}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 cursor-pointer transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-blue-500 dark:border-blue-600 shadow-md' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <div className="p-5 sm:p-6 flex items-center justify-between">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className={`p-2.5 sm:p-3 rounded-lg ${
                        openIndex === index 
                          ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        <item.icono className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                            {item.categoria}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white leading-tight">
                          {item.pregunta}
                        </h3>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      {openIndex === index ? (
                        <FiChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                          <div className="pl-11 sm:pl-14 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="prose prose-blue dark:prose-invert max-w-none">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.respuesta.split('.').map((sentence, idx, arr) => (
                                  <React.Fragment key={idx}>
                                    {sentence.trim()}.
                                    {idx < arr.length - 1 && <br className="mb-3" />}
                                  </React.Fragment>
                                ))}
                              </p>
                              
                              {/* Enlaces especiales para ciertas preguntas */}
                              {item.id === 4 && (
                                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                  <div className="flex items-start gap-3">
                                    <FiBook className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                    <div>
                                      <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">Enlace al catálogo:</h4>
                                      <a 
                                        href="http://www.fundacionculturalbcb.gob.bo/documentos/cultura/catalogo-de-publicaciones.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                                      >
                                        http://www.fundacionculturalbcb.gob.bo/documentos/cultura/catalogo-de-publicaciones.pdf
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sección de Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-blue-200 dark:border-blue-800/30"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg">
                  <FiUsers className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  ¿Aún tienes preguntas?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Si no encontraste la respuesta que buscabas, nuestro equipo estará encantado de ayudarte. 
                  Ponte en contacto con nosotros a través de los siguientes medios:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded">
                      <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Correo Electrónico</div>
                      <div className="text-blue-600 dark:text-blue-400 font-medium">fundacion@fundacionculturalbcb.gob.bo</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded">
                      <FiPhone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono</div>
                      <div className="text-blue-600 dark:text-blue-400 font-medium">2-424148</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded">
                      <FiMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Dirección</div>
                      <div className="text-blue-600 dark:text-blue-400 font-medium">Calle Fernando Guachalla Nº 476, Sopocachi, La Paz</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded">
                      <FiShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Horario de atención</div>
                      <div className="text-blue-600 dark:text-blue-400 font-medium">Lunes a viernes 8:30 - 16:30</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 shadow-md"
                  >
                    <a href="mailto:fundacion@fundacionculturalbcb.gob.bo" className="flex items-center gap-2">
                      <FiMail className="w-5 h-5" />
                      <span>Enviar correo</span>
                    </a>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-300 border border-gray-300 dark:border-gray-700"
                  >
                    <a href="tel:2424148" className="flex items-center gap-2">
                      <FiPhone className="w-5 h-5" />
                      <span>Llamar ahora</span>
                    </a>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <RepositoriosNacionales/>
      <Footer />
    </>
  );
};

export default PreguntasFrecuentes;