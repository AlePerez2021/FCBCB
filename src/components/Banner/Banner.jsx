import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube,
  FaCalendarAlt,
  FaNewspaper,
  FaBookOpen,
  FaBullhorn,
  FaUsers,
  FaMicrophone,
  FaPalette,
  FaMusic
} from "react-icons/fa";

const BannerImg = "/Repositorios/Casa_Moneda.jpg"; // Imagen representativa de la fundación
const BgImg = "/coffee-texture.jpg"; // O usa una textura cultural

const bgImage = {
  backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url(${BgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="actividades"></span>
      <div style={bgImage} className="relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A5276] to-amber-900/20"></div>
        
        <div className="min-h-[650px] flex justify-center items-center py-12 sm:py-0 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image section */}
              <div data-aos="zoom-in" data-aos-duration="800" className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src={BannerImg}
                    alt="Actividades Culturales Fundación BCB"
                    className="max-w-[500px] w-full mx-auto rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                  />

                </div>
                
                {/* Redes Sociales */}
                <div className="flex justify-center gap-4 mt-6">
                  {[
                    { icon: <FaInstagram />, color: "bg-gradient-to-r from-purple-600 to-pink-600", label: "Instagram" },
                    { icon: <FaFacebookF />, color: "bg-blue-600", label: "Facebook" },
                    { icon: <FaTwitter />, color: "bg-sky-500", label: "Twitter" },
                    { icon: <FaYoutube />, color: "bg-red-600", label: "YouTube" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      data-aos="fade-up"
                      data-aos-delay={100 * index}
                      className={`${social.color} text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* text content section */}
              <div className="order-1 lg:order-2 flex flex-col justify-center gap-8">
                <div data-aos="fade-up" data-aos-delay="200 p-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Conectamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">Cultura</span> y Comunidad
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Descubre nuestras últimas actividades, convocatorias, artículos especializados 
                    y boletines culturales. ¡Sé parte de la transformación cultural de Bolivia!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Columna izquierda - Actividades principales */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: <FaCalendarAlt className="text-xl" />,
                        bg: "bg-blue-500/20",
                        title: "Convocatorias",
                        desc: "Participa en nuestros programas y becas culturales",
                        delay: "300"
                      },
                      {
                        icon: <FaNewspaper className="text-xl" />,
                        bg: "bg-purple-500/20",
                        title: "Boletines Culturales",
                        desc: "Mantente informado con nuestras publicaciones",
                        delay: "400"
                      },
                      {
                        icon: <FaBookOpen className="text-xl" />,
                        bg: "bg-emerald-500/20",
                        title: "Artículos Especializados",
                        desc: "Investigación y análisis del patrimonio cultural",
                        delay: "500"
                      }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        data-aos="fade-up" 
                        data-aos-delay={item.delay}
                        className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-xl transition-all duration-300"
                      >
                        <div className={`${item.bg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Columna derecha - Estadísticas y destacados */}
                  <div 
                    data-aos="slide-left"
                    data-aos-delay="600"
                    className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 space-y-6"
                  >
                    
                    <div className="space-y-3">
                      <h3 className="text-white font-semibold">Próximos Eventos</h3>
                      {[
                        { title: "Taller de Conservación", date: "15 Mar", icon: <FaPalette /> },
                        { title: "Concierto Sinfónico", date: "22 Mar", icon: <FaMusic /> },
                        { title: "Foro Cultural", date: "30 Mar", icon: <FaUsers /> }
                      ].map((event, index) => (
                        <div key={index} className="flex items-center justify-between text-gray-300 hover:text-white transition-colors">
                          <div className="flex items-center gap-2">
                            <div className="text-blue-400">
                              {event.icon}
                            </div>
                            <span className="text-sm">{event.title}</span>
                          </div>
                          <span className="text-xs bg-blue-500/30 px-2 py-1 rounded">{event.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-4">

                  <button 
                    data-aos="fade-up" 
                    data-aos-delay="800"
                    className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaMicrophone />
                    Ver Convocatorias
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="0.05" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Banner;