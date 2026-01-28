// components/Hero/Hero.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLandmark, 
  FaPaintBrush, 
  FaHistory, 
  FaBookOpen, 
  FaCamera,
  FaMapMarkerAlt,
  FaUsers,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';

// Función para combinar clases de Tailwind
const cn = (...classes) => classes.filter(Boolean).join(' ');

const Hero1 = () => {
  const wrapperRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState([]);
  const imageIndexRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  // Imágenes de museos y patrimonio cultural de Bolivia (puedes reemplazar con tus propias imágenes)
  const imageSources = [
    "https://images.unsplash.com/photo-1580130539242-9d6c4c6b9e7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1567593810070-7a5c0925344e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  ];

  // Iconos para el efecto (puedes usar estos o imágenes)
  const culturalIcons = [
    { icon: <FaLandmark />, color: "from-amber-500 to-amber-700" },
    { icon: <FaPaintBrush />, color: "from-blue-500 to-cyan-500" },
    { icon: <FaHistory />, color: "from-emerald-500 to-green-500" },
    { icon: <FaBookOpen />, color: "from-purple-500 to-pink-500" },
    { icon: <FaCamera />, color: "from-red-500 to-orange-500" },
    { icon: <FaMapMarkerAlt />, color: "from-indigo-500 to-blue-500" },
    { icon: <FaUsers />, color: "from-yellow-500 to-amber-500" },
    { icon: <FaStar />, color: "from-rose-500 to-pink-500" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!wrapperRef.current) return;

      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });

      // Calcular distancia desde la última posición
      const lastPos = lastPositionRef.current;
      const distance = Math.sqrt(
        Math.pow(clientX - lastPos.x, 2) + Math.pow(clientY - lastPos.y, 2)
      );

      // Crear nueva imagen cada cierto intervalo de distancia
      if (distance > 50) {
        createTrailImage(clientX, clientY);
        lastPositionRef.current = { x: clientX, y: clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createTrailImage = (x, y) => {
    if (!wrapperRef.current) return;

    const containerRect = wrapperRef.current.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;

    const newImage = {
      id: Date.now() + Math.random(),
      x: relativeX,
      y: relativeY,
      iconIndex: imageIndexRef.current % culturalIcons.length,
      scale: 0,
      opacity: 1,
    };

    setImages(prev => [...prev.slice(-7), newImage]); // Mantener máximo 8 imágenes

    // Animar entrada
    setTimeout(() => {
      setImages(prev =>
        prev.map(img =>
          img.id === newImage.id ? { ...img, scale: 1 } : img
        )
      );
    }, 10);

    // Animar salida
    setTimeout(() => {
      setImages(prev =>
        prev.map(img =>
          img.id === newImage.id ? { ...img, opacity: 0 } : img
        )
      );

      // Eliminar después de la animación
      setTimeout(() => {
        setImages(prev => prev.filter(img => img.id !== newImage.id));
      }, 500);
    }, 1500);

    imageIndexRef.current++;
  };

  return (
    <section 
      ref={wrapperRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900/20"
    >
      {/* Imágenes del trail */}
      {images.map((img) => (
        <motion.div
          key={img.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: img.scale, 
            opacity: img.opacity,
            x: img.x,
            y: img.y
          }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.5 },
            default: { duration: 0.1 }
          }}
          className="absolute pointer-events-none z-10"
          style={{
            left: 0,
            top: 0,
            transform: `translate(-50%, -50%) translate(${img.x}px, ${img.y}px)`,
          }}
        >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${culturalIcons[img.iconIndex].color} flex items-center justify-center shadow-2xl`}>
            <div className="text-white text-2xl">
              {culturalIcons[img.iconIndex].icon}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-600/20 to-amber-800/20 border border-amber-600/30 text-amber-300 text-sm font-semibold mb-6">
              Fundación Cultural del Banco Central de Bolivia
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Descubre el{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                Patrimonio Cultural
              </span>
              <br />
              de Bolivia
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Explora nuestros museos, exposiciones y espacios culturales que preservan 
              la riqueza histórica y artística de nuestra nación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-3">
              Explorar Museos
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-transparent border-2 border-amber-600 hover:border-amber-500 text-amber-300 font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:bg-amber-900/20 flex items-center gap-3">
              <FaCalendarAlt className="text-xl" />
              Ver Eventos Culturales
            </button>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "12+", label: "Museos Nacionales", icon: <FaLandmark /> },
              { number: "500+", label: "Exposiciones Anuales", icon: <FaPaintBrush /> },
              { number: "50K+", label: "Visitas Guiadas", icon: <FaUsers /> },
              { number: "200+", label: "Colecciones", icon: <FaBookOpen /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-amber-600/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-amber-400 text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Texto animado flotante */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-amber-900/20 text-6xl font-bold rotate-12 pointer-events-none select-none"
          >
            CULTURA
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 text-amber-900/20 text-6xl font-bold -rotate-12 pointer-events-none select-none"
          >
            PATRIMONIO
          </motion.div>
        </div>
      </div>

      {/* Flecha indicadora */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-amber-400"
      >
        <div className="text-center">
          <div className="text-sm text-amber-300 mb-2">Desplázate para descubrir</div>
          <div className="text-2xl">↓</div>
        </div>
      </motion.div>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * 100 - 50],
              x: [null, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero1;