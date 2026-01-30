import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

// Importa las imágenes de los miembros
import AlejandraImg from '../../../../public/presidencia/alejandra_echazu.jpeg';
import FreddyImg from '../../../../public/consejo/freddy_chipana.jpg';
import RossanaImg from '../../../../public/consejo/rossana_barragan.jpeg';
import AliciaImg from '../../../../public/consejo/alicia_cortes.jpg';
import PaolaImg from '../../../../public/consejo/paola_claros.jpeg';
import HomeroImg from '../../../../public/consejo/homero_carvalho.jpg';
import GonzaloImg from '../../../../public/consejo/gonzalo_azurduy.jpeg';
import RepositoriosNacionales from '../../../components/Testimonials/RepositoriosNacionales';

const ConsejoAdministracion = () => {
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const miembrosRef = useRef(null);
  
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const miembrosInView = useInView(miembrosRef, { once: true, amount: 0.2 });

  const titleControls = useAnimation();
  const introControls = useAnimation();
  const miembrosControls = useAnimation();

  useEffect(() => {
    if (titleInView) titleControls.start("visible");
    if (introInView) introControls.start("visible");
    if (miembrosInView) miembrosControls.start("visible");
  }, [titleInView, introInView, miembrosInView, titleControls, introControls, miembrosControls]);

  // Animaciones mejoradas
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      } 
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      } 
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      } 
    }
  };

  const letterAnimation = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.07, 
        delayChildren: 0.2,
        duration: 0.8
      } 
    }
  };

  const textReveal = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
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

  const titleText = "Consejo de Administración";
  const titleChars = splitTextIntoChars(titleText);

  // Datos
  const presidenciaYVicepresidencia = [
    {
      nombre: "Alejandra María Echazú Conitzer",
      rol: "Presidenta de la Fundación Cultural del Banco Central de Bolivia",
      bio: "Es Doctora en literatura, trabajó como docente, gestora cultural, editora y académica. Fue coordinadora de culturas en el Goethe-Institut, Profesora en la Universidad de Maryland, Estados Unidos; y fue directora del Departamento de Cultura y Arte en la Universidad Católica Boliviana San Pablo (UCB).",
      imagen: AlejandraImg,
      color: "blue",
      designadoPor: "Banco Central de Bolivia",
      esPresidente: true
    },
    {
      nombre: "Freddy Chipana Vargas",
      rol: "Vicepresidente del Consejo de Administración de la Fundación Cultural del Banco Central de Bolivia",
      bio: "Nació en La Paz y es actor, director, dramaturgo y gestor cultural. Inició su carrera en 1990 y formó parte de compañías como Teatro Ojo Morado, Teatro de los Andes y Altoteatro, grupo que actualmente dirige. Trabajó con diversas instituciones, fundaciones y ONGs en numerosos proyectos culturales. Su obra se caracteriza por el uso del arte como herramienta de transformación social y responsabilidad con la vida. Dirigió y presentó trabajos en América y Europa, con los que obtuvo premios y reconocimientos.",
      imagen: FreddyImg,
      color: "orange",
      designadoPor: "Ministerio de Turismo Sostenible, Culturas, Folklore y Gastronomía",
      esVicepresidente: true
    }
  ];

  const consejerosBCB = [
    {
      nombre: "Rossana Barragán Romano",
      rol: "Consejera FCBCB",
      bio: "Doctora en Historia por la Escuela de Altos Estudios en Ciencias Sociales de París. Fue directora del Archivo de La Paz e investigadora senior del Instituto Internacional de Historia Social de Ámsterdam (2011–2022). Actualmente es docente e investigadora del postgrado en CIDES-UMSA. Coordina el proyecto Tejiendo Historias, integra la Academia Boliviana de la Historia, dirige la Revista Umbrales y organiza el seminario 'Los Viernes Históricos sobre América Latina y la Historia Global'. Es autora de más de 70 artículos académicos y varios libros, entre ellos, Espacio urbano y dinámica étnica. La Paz en el siglo XIX, y El Imperio del Trabajo. Historia social de la producción de plata en Potosí para el mundo (s. XVI-XVIII).",
      imagen: RossanaImg,
      color: "purple",
      designadoPor: "Banco Central de Bolivia"
    },
    {
      nombre: "Alicia A. Cortés Soruco",
      rol: "Consejera FCBCB",
      bio: "Comunicadora social y Máster en Evaluación y Gestión del Patrimonio Cultural por la Universidad de Salamanca. Becaria del Banco Santander, con Mención de Honor y Premio Extraordinario de Máster (2022-2023). Formada en Relaciones Internacionales por la Universidad de Oslo y en Educación Superior por la Universidad Mayor de San Simón. Colaboró con la Asociación Cultural Hispania Nostra (España) en la protección del patrimonio cultural. Especialista en Patrimonio Cultural Inmaterial y comunicación cultural digital, es autora de artículos de divulgación como Príncipe de hielo: el Huayna Potosí, Conocimiento abandonado: el último dios del Titicaca y La catedral de la selva.",
      imagen: AliciaImg,
      color: "green",
      designadoPor: "Banco Central de Bolivia"
    },
    {
      nombre: "Paola Claros Arteaga",
      rol: "Consejera FCBCB",
      bio: "Máster en Escritura Creativa y licenciada en Ciencias de la Comunicación Social. Gestora cultural y docente universitaria con amplia trayectoria en dirección y coordinación de proyectos culturales y educativos, tanto en el ámbito público como privado. En 2024 recibió el Premio al Mérito Docente de la Universidad Privada de Santa Cruz de la Sierra (UPSA) y forma parte de directorios culturales como la Orquesta Sinfónica Juvenil y CIDAC–Artecampo.",
      imagen: PaolaImg,
      color: "yellow",
      designadoPor: "Banco Central de Bolivia"
    }
  ];

  const consejerosMinisterio = [
    {
      nombre: "Homero Carvalho Oliva",
      rol: "Consejero FCBCB",
      bio: "Escritor y poeta boliviano. Recibió premios nacionales e internacionales en diversos géneros literarios. Su obra fue publicada y traducida en varios países. Textos suyos integran más de cien antologías internacionales. Es autor y compilador de importantes antologías de poesía y narrativa. Dirige colecciones digitales de novela y microficción en la editorial BGR. Su obra es estudiada en universidades de Iberoamérica.",
      imagen: HomeroImg,
      color: "red",
      designadoPor: "Ministerio de Turismo Sostenible, Culturas, Folklore y Gastronomía"
    },
    {
      nombre: "Gonzalo Azurduy Salinas",
      rol: "Consejero FCBCB",
      bio: "Profesional con experiencia en gestión y coordinación de programas culturales. Participó en la planificación y ejecución de proyectos culturales y artísticos. Desempeñó funciones técnicas y administrativas en los Bicentenarios de Tarija. Trabajó en instancias oficiales en 2010 y 2017. Enfocado en la preservación de la memoria histórica. Promueve la identidad cultural y la producción artística e intelectual. Participó en la redacción de la Carta Orgánica Municipal de Tarija.",
      imagen: GonzaloImg,
      color: "indigo",
      designadoPor: "Ministerio de Turismo Sostenible, Culturas, Folklore y Gastronomía"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-700 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20",
    purple: "from-purple-500 to-purple-700 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20",
    green: "from-green-500 to-green-700 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20",
    yellow: "from-yellow-500 to-yellow-700 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20",
    red: "from-red-500 to-red-700 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20",
    indigo: "from-indigo-500 to-indigo-700 border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20",
    orange: "from-orange-500 to-orange-700 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20"
  };

  // Componente AnimatedName con nuevas animaciones
  const AnimatedName = ({ nombre, delay = 0 }) => {
    const nombreChars = splitTextIntoChars(nombre);
    
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delay: delay, duration: 1.2 }}
        className="text-center md:text-left"
      >
        <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-xl md:text-2xl leading-tight">
          {nombreChars.map(({ char, id, isSpace }) => (
            <motion.span
              key={id}
              variants={letterAnimation}
              whileHover={{
                y: -8,
                color: "#3b82f6",
                transition: { duration: 0.3 }
              }}
              className={`inline-block ${isSpace ? 'w-2 md:w-3' : ''} ${
                char === ' ' ? '' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600'
              }`}
            >
              {char}
            </motion.span>
          ))}
        </h3>
      </motion.div>
    );
  };

  // Componente Card optimizado para mobile/tablet
  const MiembroCard = ({ miembro, index, destacado = false }) => {
    const isPresidente = miembro.esPresidente || miembro.rol.includes("Presidenta");
    const isVicepresidente = miembro.esVicepresidente || miembro.rol.includes("Vicepresidente");

    return (
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.15, 
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          y: -12, 
          scale: 1.02,
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 25 
          } 
        }}
        className="group h-full w-full"
      >
        <div className="bg-white w-f dark:bg-gray-900 rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200/70 dark:border-gray-700/60 group-hover:shadow-2xl group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-all duration-500 relative flex flex-col h-full">

{/* Foto - CIRCULAR EN DESKTOP, RECTANGULAR EN MOBILE */}
<div className="relative w-full h-55 sm:h-72 md:h-80 lg:h-[28rem] xl:h-[32rem] overflow-hidden  dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
  
  {/* CONTENEDOR PRINCIPAL - Cambia entre circular (md+) y rectangular (mobile) */}
  <motion.div
    className="relative w-full h-48 sm:h-56 md:w-96 md:h-96 lg:w-[25rem] lg:h-[25rem] xl:w-[32rem] xl:h-[32rem]"
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    
    {/* ===== VERSIÓN MOBILE/TABLET (RECTANGULAR) ===== */}
    <div className="md:hidden w-full h-full">
      {/* Contenedor rectangular para móvil */}
      <div className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ${
        isPresidente ? "border-2 border-yellow-400" :
        isVicepresidente ? "border-2 border-orange-400" :
        miembro.designadoPor.includes("BCB") ? "border-2 border-blue-400" : 
        "border-2 border-green-400"
      }`}>
        
        {/* Imagen rectangular - object-contain para ver rostro completo */}
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 p-4">
          <motion.img
            src={miembro.imagen}
            alt={miembro.nombre}
            className="w-auto h-auto max-w-full max-h-full object-contain"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
        
        {/* Overlay degradado en la parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
        
        {/* Badge para móvil */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${
            isPresidente ? "bg-yellow-500" :
            isVicepresidente ? "bg-orange-500" :
            miembro.designadoPor.includes("BCB") ? "bg-blue-500" : 
            "bg-green-500"
          }`}
        >
          {isPresidente ? "PRESIDENTA" : 
           isVicepresidente ? "VICEPRESIDENTE" : 
           "CONSEJERO/A"}
        </motion.div>
      </div>
    </div>
    
    {/* ===== VERSIÓN DESKTOP (CIRCULAR) ===== */}
    <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden dark:from-gray-800 dark:to-gray-900 flex items-center justify-cente ">
      {/* Anillo exterior con gradiente dinámico */}
      <div className={`absolute -inset-4 lg:-inset-5 rounded-full bg-gradient-to-r ${
        isPresidente ? "from-yellow-400 via-amber-400 to-yellow-500" :
        isVicepresidente ? "from-orange-400 via-orange-500 to-orange-600" :
        miembro.designadoPor.includes("BCB") ? "from-blue-400 via-blue-500 to-blue-600" : 
        "from-green-400 via-emerald-500 to-green-600"
      } p-1 shadow-2xl`}>
        
        {/* Círculo interior blanco */}
        <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
          
          {/* Contenedor para la imagen con padding */}
          <div className="absolute inset-3 lg:inset-4 rounded-full overflow-hidden flex items-center justify-center">
            <motion.img
              src={miembro.imagen}
              alt={miembro.nombre}
                 className="w-full h-full object-contain rounded-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              style={{
                transformOrigin: 'center 40%'
              }}
            />
            
            {/* Overlay degradado para mejor contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-full"></div>
          </div>
          
          {/* Borde interno sutil */}
          <div className="absolute inset-0 rounded-full border-2 border-white/50 dark:border-gray-800/50 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Sombra de profundidad */}
      <div className="absolute -inset-8 lg:-inset-10 rounded-full  to-transparent blur-2xl opacity-50 pointer-events-none"></div>
      
      {/* Efecto de brillo animado */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 0.3 }}
      />
      
      {/* Badge para desktop */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className={`absolute top-6 right-6 px-4 py-2 rounded-full text-base font-bold text-white shadow-2xl z-10 ${
          isPresidente ? "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 border-2 border-yellow-300" :
          isVicepresidente ? "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-orange-300" :
          miembro.designadoPor.includes("BCB") ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-2 border-blue-300" : 
          "bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 border-2 border-emerald-300"
        }`}
        whileHover={{ 
          scale: 1.1, 
          rotate: 3,
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-white"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span>
            {isPresidente ? "PRESIDENTA" : 
             isVicepresidente ? "VICEPRESIDENTE" : 
             "CONSEJERO/A"}
          </span>
        </div>
      </motion.div>
      
      {/* Partículas decorativas - SOLO DESKTOP */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-currentColor/20"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-currentColor/15"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  </motion.div>
</div>
    {/* Contenido - ESPACIO OPTIMIZADO PARA MOBILE */}
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow space-y-3 sm:space-y-4 md:space-y-5">
      <motion.div 
        className="text-center space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white leading-tight line-clamp-2">
          {miembro.nombre}
        </h3>
        <motion.p 
          className={`text-xs sm:text-sm md:text-base font-semibold italic line-clamp-1 ${
            isPresidente ? "text-yellow-600 dark:text-yellow-400" :
            isVicepresidente ? "text-orange-600 dark:text-orange-400" :
            "text-blue-600 dark:text-blue-400"
          }`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {miembro.rol}
        </motion.p>
      </motion.div>

      <motion.p 
        className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed flex-grow text-justify line-clamp-4 sm:line-clamp-none"
        variants={textReveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        {miembro.bio}
      </motion.p>

      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4 mt-auto">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs font-medium ${
            miembro.designadoPor.includes("BCB") 
              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700" 
              : "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700"
          }`}>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current"></span>
            <span className="truncate max-w-[180px] sm:max-w-none">
              Designado por {miembro.designadoPor}
            </span>
          </span>
        </motion.div>

        <motion.button
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg sm:rounded-xl font-semibold text-white shadow-md sm:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
            isPresidente ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700" :
            isVicepresidente ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700" :
            miembro.designadoPor.includes("BCB") ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" :
            "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          }`}
        >

        </motion.button>
      </div>
    </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      
      <div className="min-h-screen pt-20 sm:pt-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Título principal - FIXED FOR MOBILE */}
          <motion.div 
            ref={titleRef} 
            className="text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0"
          >
            <motion.h1
              initial="hidden"
              animate={titleControls}
              variants={staggerContainer}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              {titleChars.map(({ char, id, isSpace }) => (
                <motion.span
                  key={id}
                  variants={letterAnimation}
                  whileHover={{
                    y: -10,
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                  className={`inline-block mx-[0.05em] sm:mx-[0.1em] ${
                    isSpace ? 'w-2 sm:w-3 md:w-4' : ''
                  } text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full mt-3 sm:mt-4"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-gray-600 dark:text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2"
            >
              Máxima autoridad de la Fundación Cultural del Banco Central de Bolivia
            </motion.p>
          </motion.div>

          {/* Sección introductoria - FIXED FOR MOBILE */}
          <motion.div
            ref={introRef}
            variants={slideInFromLeft}
            initial="hidden"
            animate={introControls}
            className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 mb-8 sm:mb-12 md:mb-16 border border-gray-200 dark:border-gray-800"
          >
            <div className="mb-6 sm:mb-8 relative overflow-hidden">
              <motion.h2
                variants={textReveal}
                initial="hidden"
                animate={introControls}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4"
              >
                <motion.span
                  initial={{ backgroundSize: "0% 3px" }}
                  animate={{ backgroundSize: "100% 3px" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 bg-no-repeat bg-left-bottom bg-[length:0%_3px] pb-1"
                >
                  Estructura y Funciones del Consejo
                </motion.span>
              </motion.h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={introControls}
              className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              <motion.p variants={textReveal}>
                La <motion.span 
                  className="font-bold text-blue-600 dark:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >Fundación Cultural del Banco Central de Bolivia (FCBCB)</motion.span> está dirigida por un <span className="font-bold">Consejo de Administración</span> compuesto por siete miembros de reconocido prestigio en el ámbito cultural e histórico.
              </motion.p>
              <motion.p variants={textReveal}>
                Cuatro son designados por el <motion.span 
                  className="font-bold text-blue-600 dark:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >Directorio del Banco Central de Bolivia</motion.span> y tres por el <motion.span 
                  className="font-bold text-green-600 dark:text-green-400"
                  whileHover={{ scale: 1.05 }}
                >Ministerio de Turismo Sostenible, Culturas, Folklore y Gastronomía de Bolivia</motion.span>.
              </motion.p>
              <motion.p variants={textReveal}>
                Los Consejeros se reúnen periódicamente para controlar y velar por el cumplimiento de los fines de la institución, formular políticas, autorizar la firma de convenios y contratos, por mencionar algunas de sus responsabilidades.
              </motion.p>
              <motion.p variants={textReveal}>
                Como <span className="font-bold">máxima autoridad de la FCBCB</span> es responsable de definir sus políticas, establecer sus estrategias administrativas, financieras, operativas y la norma interna, con la finalidad de procurar el cumplimiento de su objeto.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-6 sm:mt-8 p-3 sm:p-4 md:p-5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl border border-blue-200 dark:border-blue-800/30"
            >
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-blue-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <div>
                    <span className="font-bold text-blue-700 dark:text-blue-300 text-sm sm:text-base">4 Miembros</span>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Designados por BCB</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <div>
                    <span className="font-bold text-green-700 dark:text-green-300 text-sm sm:text-base">3 Miembros</span>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Designados por Ministerio</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-purple-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                  <div>
                    <span className="font-bold text-purple-700 dark:text-purple-300 text-sm sm:text-base">7 Total</span>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Consejeros</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sección de miembros - FIXED GRID FOR MOBILE/TABLET */}
          <motion.div
            ref={miembrosRef}
            initial="hidden"
            animate={miembrosControls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { 
                  staggerChildren: 0.15, 
                  delayChildren: 0.3,
                  duration: 1
                }
              }
            }}
            className="space-y-12 sm:space-y-16 md:space-y-20"
          >
            {/* PRESIDENCIA Y VICEPRESIDENCIA */}
            <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="relative text-center">
                <motion.h2
                  variants={scaleIn}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 inline-block"
                >
                  <span className="relative">
                    <motion.span 
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0%", "100%"],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                      style={{ 
                        backgroundSize: "200% auto" 
                      }}
                    >
                      Presidencia y Vicepresidencia
                    </motion.span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full"
                    />
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-2 mt-3 sm:mt-4"
                >
                  <motion.div 
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  ></motion.div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {presidenciaYVicepresidencia.length} miembros de la máxima dirección
                  </span>
                </motion.div>
              </div>

              {/* GRID FIXED - Responsive para todos los dispositivos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {presidenciaYVicepresidencia.map((miembro, index) => (
                  <MiembroCard key={miembro.nombre} miembro={miembro} index={index} destacado={true} />
                ))}
              </div>
            </motion.div>

            {/* CONSEJEROS BCB */}
            <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="relative text-center">
                <motion.h2
                  variants={scaleIn}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 inline-block"
                >
                  <span className="relative">
                    <motion.span 
                      className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0%", "100%"],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                      style={{ 
                        backgroundSize: "200% auto" 
                      }}
                    >
                      Consejeros designados por el Banco Central de Bolivia
                    </motion.span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-2 mt-3 sm:mt-4"
                >
                  <motion.div 
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  ></motion.div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {consejerosBCB.length} consejeros especializados
                  </span>
                </motion.div>
              </div>

              {/* GRID FIXED - Responsive para todos los dispositivos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {consejerosBCB.map((miembro, index) => (
                  <MiembroCard key={miembro.nombre} miembro={miembro} index={index} />
                ))}
              </div>
            </motion.div>

            {/* CONSEJEROS MINISTERIO */}
            <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="relative text-center">
                <motion.h2
                  variants={scaleIn}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 inline-block"
                >
                  <span className="relative">
                    <motion.span 
                      className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0%", "100%"],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                      style={{ 
                        backgroundSize: "200% auto" 
                      }}
                    >
                      Consejeros designados por el Ministerio
                    </motion.span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    />
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-2 mt-3 sm:mt-4"
                >
                  <motion.div 
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  ></motion.div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {consejerosMinisterio.length} consejeros especializados
                  </span>
                </motion.div>
              </div>

              {/* GRID FIXED - Responsive para todos los dispositivos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {consejerosMinisterio.map((miembro, index) => (
                  <MiembroCard key={miembro.nombre} miembro={miembro} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <RepositoriosNacionales/>
      <Footer />
    </>
  );
};

export default ConsejoAdministracion;