import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

// Iconos
import { FiSearch, FiCalendar, FiDownload, FiBookOpen, FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi';
import { FaRegFilePdf } from 'react-icons/fa';
import RepositoriosNacionales from '../../../components/Testimonials/RepositoriosNacionales';

const Logo = "../../../public/LogoHome/logo-white.png";


const AuditoriaInterna = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('Todos');
  const [hoveredBook, setHoveredBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Datos basados en tu contenido (2021-2025)
  const informes = [
    {
      id: 1,
      nombre: 'Informe de Gestión 2021 - 2025',
      año: '2021-2025',
      descripcion: 'Informe completo de gestión quinquenal 2021-2025',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_fcbcb_2021_2025.pdf',
      paginas: 180,
      tamaño: '9.5 MB',
      fecha: '15/01/2026',
      periodo: 'Quinquenal',
      color: 'blue'
    },
    {
      id: 2,
      nombre: 'Memoria Institucional 2024',
      año: 2024,
      descripcion: 'Memoria anual de actividades institucionales del año 2024',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2024.pdf',
      paginas: 156,
      tamaño: '8.4 MB',
      fecha: '20/03/2025',
      periodo: 'Anual',
      color: 'blue'
    },
    {
      id: 3,
      nombre: 'Memoria Institucional 2023',
      año: 2023,
      descripcion: 'Memoria anual de actividades institucionales del año 2023',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2023.pdf',
      paginas: 148,
      tamaño: '7.9 MB',
      fecha: '18/03/2024',
      periodo: 'Anual',
      color: 'blue'
    },
    {
      id: 4,
      nombre: 'Memoria Institucional 2022',
      año: 2022,
      descripcion: 'Memoria anual de actividades institucionales del año 2022',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2022.pdf',
      paginas: 142,
      tamaño: '7.5 MB',
      fecha: '15/03/2023',
      periodo: 'Anual',
      color: 'blue'
    },
    {
      id: 5,
      nombre: 'Memoria Institucional 2021',
      año: 2021,
      descripcion: 'Memoria anual de actividades institucionales del año 2021',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2021.pdf',
      paginas: 138,
      tamaño: '7.2 MB',
      fecha: '12/03/2022',
      periodo: 'Anual',
      color: 'blue'
    },
    {
      id: 6,
      nombre: 'Memoria Institucional 2019',
      año: 2019,
      descripcion: 'Memoria anual de actividades institucionales del año 2019',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2019.pdf',
      paginas: 132,
      tamaño: '6.8 MB',
      fecha: '10/03/2020',
      periodo: 'Anual',
      color: 'indigo'
    },
    {
      id: 7,
      nombre: 'Memoria Institucional 2018',
      año: 2018,
      descripcion: 'Memoria anual de actividades institucionales del año 2018',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2018.pdf',
      paginas: 128,
      tamaño: '6.5 MB',
      fecha: '08/03/2019',
      periodo: 'Anual',
      color: 'indigo'
    },
    {
      id: 8,
      nombre: 'Memoria Institucional 2017',
      año: 2017,
      descripcion: 'Memoria anual de actividades institucionales del año 2017',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2017.pdf',
      paginas: 124,
      tamaño: '6.2 MB',
      fecha: '05/03/2018',
      periodo: 'Anual',
      color: 'indigo'
    },
    {
      id: 9,
      nombre: 'Memoria Institucional 2016',
      año: 2016,
      descripcion: 'Memoria anual de actividades institucionales del año 2016',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2016.pdf',
      paginas: 120,
      tamaño: '6.0 MB',
      fecha: '03/03/2017',
      periodo: 'Anual',
      color: 'indigo'
    },
    {
      id: 10,
      nombre: 'Memoria Institucional 2015',
      año: 2015,
      descripcion: 'Memoria anual de actividades institucionales del año 2015',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2015.pdf',
      paginas: 118,
      tamaño: '5.8 MB',
      fecha: '01/03/2016',
      periodo: 'Anual',
      color: 'indigo'
    },
    {
      id: 11,
      nombre: 'Memoria Institucional 2014',
      año: 2014,
      descripcion: 'Memoria anual de actividades institucionales del año 2014',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2014.pdf',
      paginas: 115,
      tamaño: '5.5 MB',
      fecha: '28/02/2015',
      periodo: 'Anual',
      color: 'indigo'
    },
    {
      id: 12,
      nombre: 'Memoria Institucional 2013',
      año: 2013,
      descripcion: 'Memoria anual de actividades institucionales del año 2013',
      archivo: '../documentos/transparencia/memoria-anual/informe_de_gestion_2013.pdf',
      paginas: 110,
      tamaño: '5.2 MB',
      fecha: '25/02/2014',
      periodo: 'Anual',
      color: 'indigo'
    }
  ];

  // Obtener años únicos para el filtro
  const añosUnicos = ['Todos', '2021-2025', 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

  // Filtrar informes
  const informesFiltrados = informes.filter(informe => {
    const coincideNombre = informe.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const coincideAño = selectedYear === 'Todos' || informe.año.toString() === selectedYear;
    return coincideNombre && coincideAño;
  });

  // Paginación
  const totalPages = Math.ceil(informesFiltrados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = informesFiltrados.slice(startIndex, startIndex + itemsPerPage);

  // Colores institucionales
  const colorMap = {
    blue: {
      spine: 'from-blue-800 to-blue-900',
      cover: 'bg-white dark:bg-gray-900 border-blue-200 dark:border-blue-800',
      badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 border-blue-700'
    },
    indigo: {
      spine: 'from-indigo-800 to-indigo-900',
      cover: 'bg-white dark:bg-gray-900 border-indigo-200 dark:border-indigo-800',
      badge: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300',
      button: 'bg-indigo-600 hover:bg-indigo-700 border-indigo-700'
    }
  };

  // Animaciones 3D mejoradas
  const bookContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const bookVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateY: -180,
      scale: 0.8,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
        mass: 0.9
      }
    },
    hover: {
      y: -20,
      rotateY: -25,
      rotateX: 5,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 22,
        mass: 0.8
      }
    }
  };

  const bookSpineVariants = {
    normal: {
      width: "14px",
      rotateY: 0,
      x: 0,
      filter: "brightness(1)"
    },
    hover: {
      width: "18px",
      rotateY: -8,
      x: -4,
      filter: "brightness(1.1)",
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 20
      }
    }
  };

  const bookCoverVariants = {
    normal: {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
    },
    hover: {
      rotateY: -20,
      rotateX: 3,
      x: -8,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 320,
        damping: 20
      }
    }
  };

  const pageStackVariants = {
    normal: {
      x: 0,
      rotateY: 0,
      opacity: 0.8
    },
    hover: {
      x: 10,
      rotateY: 25,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 18
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <motion.button
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
            currentPage === i 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          {i}
        </motion.button>
      );
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            currentPage === 1
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <FiChevronLeft className="w-5 h-5" />
        </motion.button>
        
        {pages}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            currentPage === totalPages
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <FiChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    );
  };

  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          
          {/* Encabezado */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-5"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 text-center">
                  Documentos de Auditoria Interna
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Auditorias institucionales y reportes de gestión de la Fundación Cultural del BCB
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <FiBookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800 dark:text-white text-center">{informes.length}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Documentos disponibles</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full"
            />
          </motion.div>

          {/* Filtros */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar informes por nombre..."
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white"
                  />
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="w-full md:w-64">
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full appearance-none pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white cursor-pointer"
                  >
                    {añosUnicos.map(año => (
                      <option key={año} value={año}>
                        {año === 'Todos' ? 'Todos los años' : `Año ${año}`}
                      </option>
                    ))}
                  </select>
                  <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mostrando <span className="font-semibold text-blue-600 dark:text-blue-400">{informesFiltrados.length}</span> de {informes.length} documentos
              </div>
              
              {searchTerm || selectedYear !== 'Todos' ? (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedYear('Todos');
                    setCurrentPage(1);
                  }}
                  className="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300 border border-gray-300 dark:border-gray-700"
                >
                  Limpiar filtros
                </button>
              ) : null}
            </div>
          </motion.div>

          {/* Grid de Libros/Informes */}
          <AnimatePresence>
            {currentItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 mx-auto mb-6 text-gray-300 dark:text-gray-600">
                  <FiBookOpen className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  No se encontraron documentos
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  No hay informes que coincidan con tu búsqueda.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedYear('Todos');
                    setCurrentPage(1);
                  }}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 border border-blue-700"
                >
                  Ver todos los informes
                </button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  variants={bookContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                  {currentItems.map((informe) => (
                <motion.div
  key={informe.id}
  variants={bookVariants}
  whileHover="hover"
  onHoverStart={() => setHoveredBook(informe.id)}
  onHoverEnd={() => setHoveredBook(null)}
  className="relative group h-[28rem] bg-gradient-to-r from-blue-300 to-blue-500-400 hover:from-blue-400 hover:to-blue-300 
                transition-all duration-300 hover:scale-110"
  style={{ perspective: "1200px" }}
>
  {/* Contenedor del libro en 3D */}
  <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
    
    {/* Lomo del libro */}
    <motion.div
      variants={bookSpineVariants}
      animate={hoveredBook === informe.id ? "hover" : "normal"}
      className={`absolute left-0 top-0 h-full bg-gradient-to-b  ${colorMap[informe.color].spine} rounded-l-lg z-30 shadow-xl`}
      style={{ 
        transform: "translateZ(20px)",
        transformOrigin: "left center"
      }}
    >
      {/* Texto vertical en el lomo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-40">
        <div className="text-white h-full flex flex-col items-center justify-center">
          <div className="text-xs font-bold tracking-widest -rotate-90 whitespace-nowrap transform origin-center">
            {informe.año}
          </div>
          <div className="mt-3 w-8 h-0.5 bg-white/40 -rotate-90"></div>
          <div className="text-[9px] mt-3 -rotate-90 whitespace-nowrap opacity-90 tracking-tighter">
            FCBCB
          </div>
        </div>
      </div>
    </motion.div>

    {/* Portada del libro - CON BOTONES INTEGRADOS */}
    <motion.div
      variants={bookCoverVariants}
      animate={hoveredBook === informe.id ? "hover" : "normal"}
      className={`absolute   left-4 top-0 w-[calc(100%-16px)] h-full ${colorMap[informe.color].cover} rounded-lg border-2 shadow-2xl z-40 overflow-hidden`}
      style={{ 
        transform: "translateZ(40px)",
        transformOrigin: "left center"
      }}
    >
      {/* Contenido de la portada */}
      <div className="absolute inset-0 flex flex-col p-6 text-center ">
        {/* Badge de período */}
        <div className="mb-20">
          <span className={`inline-block px-3 py-1 ${colorMap[informe.color].badge} text-xs font-semibold rounded-full`}>
            {informe.periodo}
          </span>
        </div>
        
        {/* Título */}
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 leading-tight text-center ">
          {informe.nombre}
        </h3>
        
        {/* Descripción */}
        <div className="mb-0 flex-grow ">
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 text-center">
            {informe.descripcion}
          </p>
        </div>
        
        {/* Información de archivo */}
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <FaRegFilePdf className="w-3 h-3" />
            <span>{informe.tamaño}</span>
          </div>
          <span>•</span>
          <span>{informe.paginas} páginas</span>
          <span>•</span>
          <span>{informe.fecha}</span>
        </div>
        
        {/* Botones de acción - SIEMPRE VISIBLES */}
        <div className="flex gap-2 mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(informe.archivo, '_blank')}
            className={`flex-1 py-2.5 px-3 ${colorMap[informe.color].button} text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm border`}
          >
            <FiEye className="w-4 h-4" />
            <span>Ver Documento</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = informe.archivo;
              link.download = informe.nombre + '.pdf';
              link.click();
            }}
            className="py-2.5 px-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm border border-gray-300 dark:border-gray-700"
          >
            <FiDownload className="w-4 h-4" />
          </motion.button>
        </div>
        
        {/* Logo FCBCB */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 ">
          <div className="flex items-center gap-2 ">
              <a href="/" className="font-bold text-2xl sm:text-2xl flex items-center gap-2 tracking-wider bg-amber-400">
                <img src={Logo} alt="Logo" className="w-29 h-auto" />
              </a>
            <div className="text-lg text-gray-600 dark:text-gray-400 text-center">
              <div className="font-semibold">Fundación Cultural BCB</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Pila de páginas - SOLO EFECTO VISUAL */}
    <motion.div
      variants={pageStackVariants}
      animate={hoveredBook === informe.id ? "hover" : "normal"}
      className="absolute left-8 top-2 w-[calc(100%-32px)] h-[calc(100%-16px)] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg z-10 overflow-hidden pointer-events-none"
      style={{ 
        transform: "translateZ(10px)",
        transformOrigin: "left center"
      }}
    >
      {/* Solo textura de papel - sin contenido interactivo */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,0,0,0.03)_98%),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
    </motion.div>

    {/* Efecto de profundidad */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
  </div>
</motion.div>
                  ))}
                </motion.div>

                {/* Paginación */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Página {currentPage} de {totalPages} • {informesFiltrados.length} documentos
                      </div>
                      {renderPagination()}
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      <RepositoriosNacionales />
      <Footer />
    </>
  );
};

export default AuditoriaInterna;