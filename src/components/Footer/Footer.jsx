import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Repositorios Nacionales",
    link: "/repositorios",
  },
  {
    title: "Centros Culturales",
    link: "/centros-culturales",
  },
  {
    title: "Patrimonio Cultural",
    link: "/patrimonio",
  },
  {
    title: "Eventos",
    link: "/eventos",
  },
  {
    title: "Noticias",
    link: "/noticias",
  },
];

const contactosInstituciones = [
  {
    nombre: "Casa de la Libertad",
    emails: [
      "recepcion.correspondencia.cdl@casadelalibertad.org.bo",
      "crmfbcb@casacionaldemodena.do"
    ]
  },
  {
    nombre: "Museo Nacional de Arte",
    emails: ["museonacionaldearte@gmail.com"]
  },
  {
    nombre: "Centro de la Cultura Plurinacional",
    emails: ["recepción.ccps@gmail.com"]
  },
  {
    nombre: "Museo Nacional de Etnografía y Folklore",
    emails: ["muself.lpx@gmail.com"]
  },
  {
    nombre: "Archivo y Biblioteca Nacionales de Bolivia",
    emails: ["contacto@abnb.org.bo"]
  }
];

const Footer = () => {
  const mapaUrl = "https://maps.app.goo.gl/B3a8f8cC68uxLjuV7";

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Información de la Fundación */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-amber-400 mb-4">
                Fundación Cultural del Banco Central de Bolivia
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">
                    Calle Fernando Guachalla Nº 476, Zona Sopacuchí, La Paz - Bolivia
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-amber-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">
                    (+591) 2-424148 - 2-418419
                  </p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-amber-400 mr-3 flex-shrink-0" />
                  <a 
                    href="mailto:fundacion@fundacionculturalbc.gob.bo"
                    className="text-amber-300 hover:text-amber-400 transition-colors"
                  >
                    fundacion@fundacionculturalbc.gob.bo
                  </a>
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Enlaces Rápidos</h3>
              <div className="grid grid-cols-2 gap-2">
                {FooterLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-gray-300 hover:text-amber-400 transition-colors hover:underline"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contactos de instituciones */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contactos Institucionales</h3>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {contactosInstituciones.map((institucion, index) => (
                <div key={index} className="bg-gray-800/50 p-3 rounded-lg">
                  <h4 className="font-medium text-amber-300 mb-2">{institucion.nombre}</h4>
                  <div className="space-y-1">
                    {institucion.emails.map((email, emailIndex) => (
                      <a
                        key={emailIndex}
                        href={`mailto:${email}`}
                        className="block text-sm text-gray-300 hover:text-amber-400 transition-colors truncate"
                        title={email}
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa y redes sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Ubicación</h3>
            
            {/* Mapa interactivo */}
<div className="mb-6">
  <a 
    href={mapaUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block group"
  >
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img 
        src={`https://maps.googleapis.com/maps/api/staticmap?center=-16.5000,-68.1500&zoom=15&size=400x200&maptype=roadmap&markers=color:red%7C-16.5000,-68.1500&key=TU_API_KEY`}
        alt="Mapa de ubicación"
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23374151'/%3E%3Cpath d='M200,100 L200,80 L220,70 L240,90 L230,110 L210,120 L190,110 Z' fill='%23F59E0B'/%3E%3Ccircle cx='200' cy='100' r='5' fill='%23DC2626'/%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%239CA3AF' font-family='Arial' font-size='14'%3EClick para ver ubicación%3C/text%3E%3C/svg%3E";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
        <span className="text-white font-semibold flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          Ver ubicación completa
        </span>
      </div>
    </div>
  </a>
</div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior del footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-sm text-gray-400">Última actualización</p>
                  <p className="font-medium">28/01/2026</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Contador de Visitas</p>
                  <a 
                    href="https://www.contadorweb.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    contador.web
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Fundación Cultural del Banco Central de Bolivia. 
                Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Preservando y difundiendo el patrimonio cultural boliviano
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;