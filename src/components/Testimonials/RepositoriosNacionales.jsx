import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

// Datos de repositorios nacionales y centros culturales
const RepositoriosData = [
  {
    id: 1,
    nombre: "Casa de la Libertad",
    descripcion: "Resguarda la memoria documental histórica del país desde la época colonial hasta la actualidad.",
    logo: "/public/LogosRpositorios/logo-cdl-o.png",
    imagen: "/public/LogosRpositorios/logo-ccp-o.png",
    categoria: "Archivo Histórico",
    ubicacion: "Sucre, Bolivia",
    año: "1886",
    color: "bg-blue-500"
  },
  {
    id: 2,
    nombre: "Archivo y Biblioteca Nacional de Bolivia",
    descripcion: "Principal repositorio bibliográfico nacional con colecciones únicas y patrimonio documental.",
    logo: "/public/LogosRpositorios/logo-abnb-o.png",
    imagen: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
    categoria: "Biblioteca Nacional",
    ubicacion: "Sucre, Bolivia",
    año: "1836",
    color: "bg-green-500"
  },
  {
    id: 3,
    nombre: "Museo Nacional de Etnografía y Folklore",
    descripcion: "Conserva y exhibe el patrimonio cultural etnográfico y folklórico de las culturas bolivianas.",
    logo: "/public/LogosRpositorios/logo-musef-o.png",
    imagen: "https://images.unsplash.com/photo-1580598153881-4df5bbe8b2e2?w=400&h=300&fit=crop",
    categoria: "Museo Nacional",
    ubicacion: "La Paz, Bolivia",
    año: "1925",
    color: "bg-purple-500"
  },
  {
    id: 4,
    nombre: "Casa Nacional de la moneda",
    descripcion: "Monumento histórico donde se firmó el Acta de Independencia de Bolivia.",
    logo: "/public/LogosRpositorios/logo-cnm-o.png",
    imagen: "https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?w=400&h=300&fit=crop",
    categoria: "Museo Histórico",
    ubicacion: "Sucre, Bolivia",
    año: "1701",
    color: "bg-red-500"
  },
  {
    id: 5,
    nombre: "Museo Nacional de Arte",
    descripcion: "Repositorio documental especializado en la historia de La Paz y región andina.",
    logo: "/public/LogosRpositorios/logo-mna-circular.png",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop",
    categoria: "Archivo Regional",
    ubicacion: "La Paz, Bolivia",
    año: "1938",
    color: "bg-yellow-500"
  },
  {
    id: 6,
    nombre: "Centro Cultura Plurinacional",
    descripcion: "Complejo cultural que integra patrimonio arquitectónico, arte religioso y espacios expositivos.",
    logo: "/public/LogosRpositorios/logo-ccp-o.png",
    imagen: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=400&h=300&fit=crop",
    categoria: "Centro Cultural",
    ubicacion: "La Paz, Bolivia",
    año: "1549",
    color: "bg-indigo-500"
  },
  {
    id: 7,
    nombre: "Museo Fernando Montes",
    descripcion: "Complejo cultural que integra patrimonio arquitectónico, arte religioso y espacios expositivos.",
    logo: "/public/LogosRpositorios/logo-fm-o.png",
    imagen: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=400&h=300&fit=crop",
    categoria: "Centro Cultural",
    ubicacion: "La Paz, Bolivia",
    año: "1549",
    color: "bg-indigo-500"
  },
  {
    id: 8,
    nombre: "Centro Revolucion Cultural",
    descripcion: "Complejo cultural que integra patrimonio arquitectónico, arte religioso y espacios expositivos.",
    logo: "/public/LogosRpositorios/logo-crc-o.png",
    imagen: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=400&h=300&fit=crop",
    categoria: "Centro Cultural",
    ubicacion: "La Paz, Bolivia",
    año: "1549",
    color: "bg-indigo-500"
  },
];

const RepositoriosNacionales = () => {
  const [activeCard, setActiveCard] = useState(null);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  };

  return (
    <div className="py-16 mb-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header con animación */}
        <div className="mb-16 text-center">
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block mb-4"
          >
            <span className="text-amber-500 text-lg font-semibold tracking-wider">
              PATRIMONIO CULTURAL
            </span>
          </div>
          
          <h1 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            NUESTROS REPOSITORIOS NACIONALES
            <span className="block text-3xl md:text-4xl text-amber-600 mt-2">
              Y CENTROS CULTURALES
            </span>
          </h1>
          
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"
          ></div>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg"
          >
            Descubre los tesoros culturales que preservan la memoria histórica y el patrimonio 
            documental de Bolivia, bajo la custodia del FCBCB.
          </p>
        </div>

        {/* Slider de tarjetas simplificadas */}
        <div data-aos="zoom-in" data-aos-delay="500">
          <Slider {...settings}>
            {RepositoriosData.map((repositorio) => (
              <div 
                key={repositorio.id}
                className="px-3 py-4"
                onMouseEnter={() => setActiveCard(repositorio.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`
                  relative group flex flex-col items-center 
                  p-8 rounded-2xl shadow-lg
                  transition-all duration-500 transform
                  bg-white hover:bg-gray-50
                  ${activeCard === repositorio.id 
                    ? 'scale-105 shadow-xl ring-2 ring-amber-300' 
                    : 'hover:scale-[1.03] hover:shadow-xl'
                  }
                `}>
                  {/* Logo circular con imagen */}
                  <div className={`
                    relative mb-6
                    ${activeCard === repositorio.id 
                      ? 'animate-pulse-once' 
                      : ''
                    }
                  `}>
                    <div className={`
                      w-32 h-32 rounded-full flex items-center justify-center
                      ${repositorio.color}
                      transform transition-all duration-500
                      group-hover:scale-110 group-hover:shadow-lg
                      ${activeCard === repositorio.id 
                        ? 'ring-4 ring-offset-2 ring-opacity-50' 
                        : 'ring-2 ring-gray-200'
                      }
                    `}>
                      {/* Aquí se muestra la imagen del logo */}
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img 
                          src={repositorio.logo} 
                          alt={`Logo ${repositorio.nombre}`}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            // Fallback si la imagen no carga
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            const fallbackDiv = document.createElement('div');
                            fallbackDiv.className = "text-center";
                            fallbackDiv.innerHTML = `
                              <div class="text-2xl font-bold text-white mb-1">
                                ${repositorio.nombre.split(' ').map(word => word[0]).join('')}
                              </div>
                              <div class="text-xs text-white opacity-80 font-semibold">
                                ${repositorio.categoria.split(' ')[0]}
                              </div>
                            `;
                            e.target.parentNode.appendChild(fallbackDiv);
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Elemento decorativo animado */}
                    <div className="absolute -inset-4 rounded-full border-2 border-dashed border-gray-200 group-hover:border-amber-300 transition-colors duration-500"></div>
                    
                    {/* Indicador de año pequeño */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="px-3 py-1 bg-white rounded-full shadow-md">
                        <span className="text-xs font-bold text-gray-700">{repositorio.año}</span>
                      </div>
                    </div>
                  </div>

                  {/* Nombre del repositorio */}
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-4 px-2">
                    <span className={`
                      transition-all duration-300
                      ${activeCard === repositorio.id 
                        ? 'text-amber-600' 
                        : 'group-hover:text-amber-500'
                      }
                    `}>
                      {repositorio.nombre}
                    </span>
                  </h3>

                  {/* Ubicación simplificada */}
                  <div className="flex items-center text-gray-600 mb-6">
                    <svg className="w-4 h-4 mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{repositorio.ubicacion}</span>
                  </div>

                  {/* Botón VISITAR */}
                  <button className={`
                    w-full py-3 px-6 rounded-lg font-semibold
                    transform transition-all duration-300
                    flex items-center justify-center
                    ${activeCard === repositorio.id 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-500 hover:text-white hover:shadow-md'
                    }
                    group-hover:shadow-md group-hover:-translate-y-1
                  `}>
                    <span className="mr-2">Visitar</span>
                    <svg className={`
                      w-4 h-4 transition-transform duration-300
                      ${activeCard === repositorio.id 
                        ? 'translate-x-1' 
                        : 'group-hover:translate-x-1'
                      }
                    `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {/* Elemento decorativo sutil */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Nota informativa */}
        <div 
          data-aos="fade-up"
          data-aos-delay="700"
          className="mt-12 text-center"
        >

        </div>
      </div>

      {/* Estilos personalizados */}
<style>{`
  .slick-prev:before, .slick-next:before {
    color: #f59e0b;
    font-size: 30px;
  }
  .slick-dots li button:before {
    font-size: 10px;
    color: #f59e0b;
  }
  .slick-dots li.slick-active button:before {
    color: #d97706;
  }
  @keyframes pulse-once {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .animate-pulse-once {
    animation: pulse-once 0.5s ease-in-out;
  }
`}</style>
    </div>
  );
};

export default RepositoriosNacionales;