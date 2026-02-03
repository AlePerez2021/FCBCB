import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderPrincipal from '../../components/Header/HeaderPrincipal';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import RepositoriosNacionales from '../../components/Testimonials/RepositoriosNacionales';
import { BackgroundLines } from "../../components/ui/BackgroundLines"; // Importa el componente

// Iconos
import { FiSearch, FiCalendar, FiChevronLeft, FiChevronRight, FiEye, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { FaRegFilePdf } from 'react-icons/fa';

const Logo = "../../../public/LogoHome/logo-white.png";

const BoletinesInstitucionales = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('reciente'); // 'reciente' o 'antiguo'
  const [hoveredBoletin, setHoveredBoletin] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Datos de boletines culturales (12 boletines) - ORDENADOS: N°12 es más reciente, N°1 es más antiguo
  const boletinesBase = Array.from({ length: 12 }, (_, index) => {
    const numero = index + 1;
    // Para que N°12 sea el más reciente, invertimos el orden en la fecha
    const fechaBase = new Date(2024, 0, 15); // 15 de enero 2024
    fechaBase.setMonth(fechaBase.getMonth() - (12 - numero)); // N°12 = más reciente, N°1 = más antiguo
    
    return {
      id: numero,
      nombre: `Boletín Informativo N°${numero}`,
      año: fechaBase.getFullYear().toString(),
      descripcion: `Boletín cultural informativo número ${numero} con las últimas actividades y noticias culturales.`,
      archivo: `../../../../public/Boletines_culturales/tejiendo-culturas${numero}.jpg`,
      paginas: 24,
      tamaño: '4.2 MB',
      fecha: fechaBase.toLocaleDateString('es-ES'),
      fechaTimestamp: fechaBase.getTime(),
      periodo: 'Cultural',
      color: numero <= 6 ? 'blue' : 'indigo',
      // Imagen de fondo para el card
      imagenFondo: `../../../../public/Boletines_culturales/tejiendo-culturas${numero}.jpg`,
      // Para ordenar por número de boletín
      numeroBoletin: numero
    };
  });

  // Obtener años únicos para el filtro
  const añosUnicos = ['Todos', ...Array.from(new Set(boletinesBase.map(b => b.año)))].sort((a, b) => {
    if (a === 'Todos') return -1;
    if (b === 'Todos') return 1;
    return parseInt(b) - parseInt(a);
  });

  // Filtrar y ordenar boletines por NÚMERO (N°12 = más reciente, N°1 = más antiguo)
  const boletinesFiltrados = boletinesBase
    .filter(boletin => {
      const coincideNombre = boletin.nombre.toLowerCase().includes(searchTerm.toLowerCase());
      const coincideAño = selectedYear === 'Todos' || boletin.año.toString() === selectedYear;
      return coincideNombre && coincideAño;
    })
    .sort((a, b) => {
      if (sortOrder === 'reciente') {
        // Más reciente primero = N°12 primero, N°1 último
        return b.numeroBoletin - a.numeroBoletin;
      } else {
        // Más antiguo primero = N°1 primero, N°12 último
        return a.numeroBoletin - b.numeroBoletin;
      }
    });

  // Paginación
  const totalPages = Math.ceil(boletinesFiltrados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = boletinesFiltrados.slice(startIndex, startIndex + itemsPerPage);

  // Resetear página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedYear, sortOrder]);

  // Colores institucionales
  const colorMap = {
    blue: {
      spine: 'from-blue-800 to-blue-900',
      cover: 'bg-white/95 dark:bg-gray-900/95 border-blue-200 dark:border-blue-800 backdrop-blur-sm',
      badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 border-blue-700'
    },
    indigo: {
      spine: 'from-indigo-800 to-indigo-900',
      cover: 'bg-white/95 dark:bg-gray-900/95 border-indigo-200 dark:border-indigo-800 backdrop-blur-sm',
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
      
      {/* Contenedor principal sin padding/margen superior */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 w-full pt-0">
        
        {/* Hero section con BackgroundLines - FUERA del container y sin margen superior */}
        <div className="relative w-full overflow-hidden">
          <BackgroundLines
            className="w-full h-[500px] md:h-[550px] lg:h-[650px] bg-[#131b2a]"
            svgOptions={{ duration: 15 }}
          >
            {/* Contenido del hero encima del BackgroundLines */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-6xl w-full px-4"
              >
                <h1 className="text-5xl sm:text-6xl md:text-10xl lg:text-9xl font-bold text-amber-400 dark:text-white">
                  <span className="block">Boletines Culturales</span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mt-1 block">
                    Fundación Cultural BCB
                  </span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ delay: 0.5, duration: 1.2 }}
                  className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full mx-auto my-2"
                />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-base sm:text-xl text-white dark:text-gray-300 mb-6 max-w-3xl mx-auto px-4"
                >
                  Publicaciones periódicas sobre actividades, eventos y noticias culturales 
                  de la Fundación Cultural del Banco Central de Bolivia
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-6 mt-8 px-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <FaRegFilePdf className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-white dark:text-white">{boletinesBase.length}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Boletines disponibles</div>
                    </div>
                  </div>
                  
                  
                  <div className="flex items-center gap-3">


                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Overlay para mejor legibilidad */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/40 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/80" />
          </BackgroundLines>
        </div>

        {/* Contenido principal dentro del container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 -mt-8 sm:-mt-12">
          
          {/* Resto de tu contenido aquí */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
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
                      placeholder="Buscar boletines por nombre o número..."
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

                {/* Filtro de ordenamiento */}
                <div className="w-full md:w-auto">
                  <div className="relative">
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="w-full appearance-none pl-12 pr-10 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white cursor-pointer"
                    >
                      <option value="reciente">Más reciente primero</option>
                      <option value="antiguo">Más antiguo primero</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {sortOrder === 'reciente' ? (
                        <FiArrowUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <FiArrowDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mostrando <span className="font-semibold text-blue-600 dark:text-blue-400">{boletinesFiltrados.length}</span> de {boletinesBase.length} boletines
                  {sortOrder === 'reciente' ? ' (N°12 → N°1)' : ' (N°1 → N°12)'}
                </div>
                
                {(searchTerm || selectedYear !== 'Todos' || sortOrder !== 'reciente') ? (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedYear('Todos');
                      setSortOrder('reciente');
                    }}
                    className="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300 border border-gray-300 dark:border-gray-700"
                  >
                    Limpiar filtros
                  </button>
                ) : null}
              </div>
            </motion.div>

            {/* Grid de Boletines */}
            <AnimatePresence>
              {currentItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 mx-auto mb-6 text-gray-300 dark:text-gray-600">
                    <FaRegFilePdf className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No se encontraron boletines
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    No hay boletines que coincidan con tu búsqueda.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedYear('Todos');
                      setSortOrder('reciente');
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 border border-blue-700"
                  >
                    Ver todos los boletines
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
                    {currentItems.map((boletin) => (
                      <motion.div
                        key={boletin.id}
                        variants={bookVariants}
                        whileHover="hover"
                        onHoverStart={() => setHoveredBoletin(boletin.id)}
                        onHoverEnd={() => setHoveredBoletin(null)}
                        className="relative group h-[28rem]"
                        style={{ perspective: "1200px" }}
                      >
                        {/* Contenedor del libro en 3D */}
                        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                          
                          {/* Lomo del libro */}
                          <motion.div
                            variants={bookSpineVariants}
                            animate={hoveredBoletin === boletin.id ? "hover" : "normal"}
                            className={`absolute left-0 top-0 h-full bg-gradient-to-b ${colorMap[boletin.color].spine} rounded-l-lg z-30 shadow-xl`}
                            style={{ 
                              transform: "translateZ(20px)",
                              transformOrigin: "left center"
                            }}
                          >
                            {/* Texto vertical en el lomo */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-40">
                              <div className="text-white h-full flex flex-col items-center justify-center">
                                <div className="text-xs font-bold tracking-widest -rotate-90 whitespace-nowrap transform origin-center">
                                  N°{boletin.numeroBoletin}
                                </div>
                                <div className="mt-3 w-8 h-0.5 bg-white/40 -rotate-90"></div>
                                <div className="text-[9px] mt-3 -rotate-90 whitespace-nowrap opacity-90 tracking-tighter">
                                  FCBCB
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Portada del libro */}
                          <motion.div
                            variants={bookCoverVariants}
                            animate={hoveredBoletin === boletin.id ? "hover" : "normal"}
                            className="absolute left-4 top-0 w-[calc(100%-16px)] h-full rounded-lg border-2 border-white/30 shadow-2xl z-40 overflow-hidden"
                            style={{ 
                              transform: "translateZ(40px)",
                              transformOrigin: "left center"
                            }}
                          >
                            {/* Fondo con imagen real del boletín */}
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ 
                                backgroundImage: `url(/Boletines_culturales/tejiendo-culturas${boletin.id}.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                              }}
                            />
                            
                            {/* Contenido de la portada */}
                            <div className="absolute inset-0 flex flex-col p-6 text-center">
                              <div className="relative z-10 flex flex-col h-full">
                                
                                {/* Badge de período */}
                                <div className="mb-72"></div>
                                
                                {/* Título */}
                                <div className="mb-0 p-3 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-sm">
                                  <h3 className="text-xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent mb-0 leading-tight text-center">
                                    {boletin.nombre}
                                  </h3>
                                </div>
                                
                                {/* Información de archivo */}
                                <div className="mt-0 p-2 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-sm">
                                  <div className="flex items-center justify-center gap-3 text-xs text-white mb-0">
                                    <div className="flex items-center gap-1">
                                      <FaRegFilePdf className="w-3 h-3 text-amber-300" />
                                      <span>{boletin.tamaño}</span>
                                    </div>
                                    <span className="text-amber-300">•</span>
                                    <span>{boletin.paginas} páginas</span>
                                    <span className="text-amber-300">•</span>
                                    <span>{boletin.fecha}</span>
                                  </div>
                                </div>
                                
                                {/* Botón de acción */}
                                <div className="flex gap-2 mt-0">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(`/Boletines_culturales/tejiendo-culturas${boletin.id}.jpg`, '_blank')}
                                    className="flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-blue-700 shadow-lg"
                                  >
                                    <FiEye className="w-4 h-4" />
                                    <span>Ver Boletín</span>
                                  </motion.button>
                                </div>
                                
                                {/* Logo FCBCB */}
                                <div className="mt-4 pt-4 border-t border-amber-400/30">
                                  <div className="flex items-center gap-2 justify-center p-2 rounded-lg bg-gradient-to-r from-amber-400/20 via-amber-500/20 to-amber-400/20 backdrop-blur-sm">
                                    <img src={Logo} alt="Logo" className="w-8 h-8 drop-shadow-md" />
                                    <div className="text-sm text-center">
                                      <div className="font-semibold bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
                                        Fundación Cultural BCB
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Pila de páginas */}
                          <motion.div
                            variants={pageStackVariants}
                            animate={hoveredBoletin === boletin.id ? "hover" : "normal"}
                            className="absolute left-8 top-2 w-[calc(100%-32px)] h-[calc(100%-16px)] bg-gradient-to-br from-gray-50/80 to-gray-100/80 rounded-lg shadow-lg z-10 overflow-hidden pointer-events-none"
                            style={{ 
                              transform: "translateZ(10px)",
                              transformOrigin: "left center"
                            }}
                          >
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,0,0,0.03)_98%),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                          </motion.div>

                          {/* Efecto de profundidad */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
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
                          Página {currentPage} de {totalPages} • {boletinesFiltrados.length} boletines
                        </div>
                        {renderPagination()}
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <RepositoriosNacionales/>
      <Footer/>
    </>
            )}


export default BoletinesInstitucionales;