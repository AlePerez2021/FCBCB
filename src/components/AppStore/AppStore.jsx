import { useEffect, useState, useRef } from 'react';
import { 
  FaUsers, 
  FaEye, 
  FaDownload, 
  FaGlobeAmericas,
  FaCalendarCheck,
  FaHeart,
  FaChartLine
} from 'react-icons/fa';
import { motion, useInView, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

const BgPng = "/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98)), url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setStartCounting(true);
      controls.start("visible");
    }
  }, [isInView, controls]);

  const statsData = [
    {
      id: 1,
      icon: <FaUsers className="text-3xl" />,
      value: 12543,
      suffix: "+",
      label: "Visitantes Únicos",
      description: "Personas que han explorado nuestro patrimonio",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-400 ",
      delay: 0.1
    },
    {
      id: 2,
      icon: <FaEye className="text-3xl" />,
      value: 85620,
      suffix: "+",
      label: "Páginas Vistas",
      description: "Contenido cultural explorado",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-amber-400",
      delay: 0.2
    },
    {
      id: 3,
      icon: <FaDownload className="text-3xl" />,
      value: 3247,
      suffix: "+",
      label: "Descargas",
      description: "Recursos y publicaciones culturales",
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-blue-400",
      delay: 0.3
    }
  ];

  return (
    <>
      <div className="py-20" style={backgroundStyle} ref={statsRef}>
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-4">
              <FaChartLine className="text-blue-500" />
              <span className="text-blue-600 font-semibold text-sm">
                Estadísticas Culturales
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Impacto</span> Cultural
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre el alcance de nuestra labor en la preservación y difusión 
              del patrimonio cultural boliviano en números
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: stat.delay,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`${stat.bgColor} p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Icon Container */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  {/* Trend Indicator */}
                  <div className="text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700">
                    +{Math.floor(Math.random() * 15) + 5}%
                  </div>
                </div>

                {/* Stat Number */}
                <div className="mb-2">
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">
                      {startCounting && (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          delay={stat.delay}
                          separator=","
                          decimals={stat.label === "Satisfacción" ? 1 : 0}
                          decimal="."
                        />
                      )}
                    </span>
                    <span className={`text-2xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent ml-1`}>
                      {stat.suffix}
                    </span>
                  </div>
                </div>

                {/* Stat Label */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(stat.value / 1000, 100)}%` }}
                      transition={{ duration: 1.5, delay: stat.delay + 0.5 }}
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.8 }
              }
            }}
            className="mt-16 text-center"
          >

          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1,
                transition: { duration: 0.5, delay: 1 }
              }
            }}
            className="text-center mt-12"
          >
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppStore;