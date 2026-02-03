import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaLandmark, FaBook, FaUniversity, FaPalette, FaBuilding,
  FaMonument, FaPaintBrush, FaHistory, FaLeaf, FaCalendarAlt,
  FaMapMarkerAlt, FaBalanceScale, FaHandshake, FaAward,
  FaGavel, FaFileContract, FaRocket, FaHome
} from 'react-icons/fa';
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import RepositoriosNacionales from '../../../components/Testimonials/RepositoriosNacionales';
import { TracingBeam } from '../../../components/ui/TracingBeam';
import { Timeline } from '../../../components/ui/TimeLine'; // Importa el componente Timeline

const HistoriaInstitucion = () => {
  const timelineRef = useRef(null);
  
  // Configurar scroll para la línea verde animada
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 80%"]
  });

  const scrollHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const eventosHistoricos = [
    {
      año: "1995",
      evento: "Creación de la FC-BCB",
      descripcion: "Ley N° 1670 del 31 de octubre. Fundación como entidad estatal de derecho público bajo tuición del BCB.",
      icon: <FaLandmark className="text-2xl" />,
      color: "from-blue-600 to-cyan-500"
    },
    {
      año: "1997",
      evento: "Inicio de operaciones",
      descripcion: "Funcionamiento con Consejo de Administración, Secretaría Ejecutiva y 4 centros: Casa de la Libertad, Archivo y Biblioteca Nacionales (Sucre), Casa Nacional de Moneda (Potosí), Museo de Etnografía y Folklore (La Paz).",
      icon: <FaBook className="text-2xl" />,
      color: "from-emerald-600 to-teal-500"
    },
    {
      año: "2002",
      evento: "Incorporación Museo Nacional de Arte",
      descripcion: "Ley N° 2389 del 23 de mayo incorpora el Museo Nacional de Arte (La Paz) a la tuición de la FC-BCB.",
      icon: <FaPalette className="text-2xl" />,
      color: "from-purple-600 to-pink-500"
    },
    {
      año: "2005",
      evento: "Expansión a Santa Cruz",
      descripcion: "Resolución N° 276/2005 del 6 de diciembre autoriza transferencia gratuita de inmueble para Centro Cultural en Santa Cruz.",
      icon: <FaMapMarkerAlt className="text-2xl" />,
      color: "from-amber-600 to-orange-500"
    },
    {
      año: "2009",
      evento: "Inauguración CCP",
      descripcion: "Apertura del Centro de la Cultura Plurinacional en Santa Cruz.",
      icon: <FaUniversity className="text-2xl" />,
      color: "from-rose-600 to-red-500"
    },
    {
      año: "2013",
      evento: "Ley N° 398 – Definición de repositorios",
      descripcion: "Modificación Art. 82 Ley 1670: tuición oficial de 6 repositorios nacionales (incluye CCP).",
      icon: <FaGavel className="text-2xl" />,
      color: "from-indigo-600 to-violet-500"
    },
    {
      año: "2015",
      evento: "Nuevo Estatuto aprobado",
      descripcion: "Resolución Directorio BCB N° 095/2015 del 9 de junio aprueba nuevo Estatuto y Consejo de 7 miembros.",
      icon: <FaFileContract className="text-2xl" />,
      color: "from-cyan-600 to-sky-500"
    },
    {
      año: "2016",
      evento: "Oferta Casa Museo Marina Núñez del Prado",
      descripcion: "Recepción de propuesta de transferencia gratuita por parte de la Fundación Núñez del Prado (Gil Imaná).",
      icon: <FaHandshake className="text-2xl" />,
      color: "from-teal-600 to-cyan-500"
    },
    {
      año: "2019 (enero)",
      evento: "Inauguración Museo Fernando Montes",
      descripcion: "Donación de obras del pintor paceño. Museo en Sopocachi (La Paz) con ingreso libre, tienda y jardín.",
      icon: <FaPaintBrush className="text-2xl" />,
      color: "from-lime-600 to-green-500"
    },
    {
      año: "2019",
      evento: "Creación Centro de la Revolución Cultural",
      descripcion: "Nueva plataforma curatorial. Primera gestión en Ex Estación Central (convenio con Mi Teleférico).",
      icon: <FaRocket className="text-2xl" />,
      color: "from-orange-600 to-amber-500"
    },
    {
      año: "2019 (27 sept)",
      evento: "Recepción Casa Museo Marina Núñez del Prado",
      descripcion: "Ley N° 1231. Entrega formal por Gil Imaná. Declaración como patrimonio y dependencia a FC-BCB.",
      icon: <FaMonument className="text-2xl" />,
      color: "from-amber-600 to-yellow-500"
    }
  ];

  const textoHistoria = `Mediante Ley N° 1670 de 31 de octubre de 1995, se crea la Fundación Cultural del Banco Central de Bolivia, con el objeto de mantener, proteger, conservar, promocionar y administrar los Repositorios Nacionales y Centros Culturales bajo su tuición. La FC-BCB es constituida como una persona colectiva estatal de derecho público, bajo tuición del Banco Central de Bolivia, con personalidad jurídica y patrimonio propios, con competencia administrativa, técnica y financiera.

A partir de 1997, la FC-BCB entra en funcionamiento, conformada inicialmente por un Consejo de Administración que se constituye en la Autoridad Superior de la Entidad, una Secretaría Ejecutiva como Máxima Autoridad Ejecutiva y cuatro Centros Culturales bajo su tuición y administración: Casa de la Libertad, Archivo y Biblioteca Nacionales de Bolivia (Sucre), Casa Nacional de Moneda (Potosí) y Museo Nacional de Etnografía y Folklore (La Paz). Mediante Ley N° 2389 de 23 de mayo de 2002, el Museo Nacional de Arte (La Paz) es puesto bajo tuición y administración de la FC-BCB. En la gestión 2005, mediante Resolución No 276/2005 de 6 de diciembre de 2005 del Banco Central de Bolivia, se autoriza la transferencia a título gratuito del inmueble de propiedad del BCB, ubicado en la Calle Gabriel René Moreno No 369 de la ciudad de Santa Cruz de la Sierra, a favor de la FC-BCB, para establecer un Centro Cultural en dicha ciudad, a fin de apoyar el desarrollo cultural de la región.

El Centro de la Cultura Plurinacional (CCP), es inaugurado en el año 2009. Mediante Ley N° 398, del 3 de Septiembre de 2013, se dispone la modificación del Art. 82 de la Ley N° 1670 de 31 de Octubre de 1995, donde se establece que la FCBCB tendrá la tuición y administración de los siguientes repositorios nacionales: Casa Nacional de Moneda (Potosí), Casa de la Libertad (Sucre), Archivo y Biblioteca Nacionales de Bolivia (Sucre), Museo Nacional de Etnografía y Folklore (La Paz), Museo Nacional de Arte (La Paz) y el Centro de la Cultura Plurinacional (Santa Cruz), sin que pierdan su condición de patrimonio cultural e histórico del Estado Plurinacional. Mediante Resolución de Directorio del BCB No 095/2015 de fecha 9 de junio de 2015, se aprueba el nuevo Estatuto de la Fundación Cultural del Banco Central de Bolivia, norma interna de mayor jerarquía, donde se establece que la FUNDACIÓN tendrá por objeto mantener, proteger, conservar, promocionar y administrar los Repositorios Nacionales, estará dirigida por un Consejo de Administración compuesto por siete consejeros de reconocido prestigio en el ámbito cultural e histórico.

El Museo “Fernando Montes” fue formado en base a una donación de obras y bienes de la familia del pintor paceño, y la asignación de espacios exclusivos en la casa de la FCBCB ubicada en el barrio de Sopocachi de La Paz. Fue inaugurado en enero de 2019 y es de ingreso libre al público. Ambos factores coincidieron para el emplazamiento de un pequeño museo donde se exhibe la obra donada, se cuenta con una tienda para la promoción y difusión de publicaciones de todos los repositorios de la FCBCB, y un jardín interior de acceso libre.

El Centro de la Revolución Cultural, nueva dependencia de la FCBCB, creada como plataforma curatorial, con fines de estímulo a la creación y la difusión de producciones culturales en artes visuales, audiovisuales, escénicas, musicales, literarias, investigativas y editoriales. El año 2019 cursa la primera gestión en espacios de la Ex Estación Central mediante la firma de un convenio con la Empresa Estatal “mi Teleférico”.

Finalmente, habiéndose promulgado la Ley N° 1231 y dando cumplimiento a sus disposiciones, en fecha 27 de septiembre de 2019, la Fundación Cultural del Banco Central de Bolivia recibió en propiedad la Casa Museo Marina Núñez del Prado y todos los bienes culturales que en ella se conservan, para su gestión y administración. La entrega se realizó de manos de don Gil Imaná, Presidente de la que fuera Fundación Núñez del Prado, en un acto administrativo con presencia de notario de fe pública. La FCBCB recibió en la gestión 2016 la oferta de transferencia a título gratuito de la Casa Museo Marina Núñez del Prado y de todos los bienes culturales que alberga, por parte de miembros del Directorio de la Fundación Marina Núñez bajo la Presidencia del artista Gil Imaná Garrón, institución que administró este repositorio hasta el cierre del museo hace más de 15 años. El Consejo de Administración de la FCBCB, en coordinación con el Directorio del BCB como su ente tutor, aceptó la transferencia mediante Resolución de Consejo de Administración, consolidándose la donación mediante Ley del Órgano Legislativo Plurinacional que declara patrimonio a la Casa Museo Marina Núñez y al conjunto de bienes culturales que la conforman, y establece su dependencia a la FCBCB.`;

  const timelineData = eventosHistoricos.map(evento => ({
    title: evento.año,
    content: (
      <div className="w-full max-w-none">
        <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-[#10B981]/30">
          <div className="flex flex-wrap md:flex-row items-start gap-0 ">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${evento.color} text-white flex-shrink-0 shadow-lg md:w-16 md:h-16 flex items-center justify-center`}>
              {evento.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-0">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                  {evento.año}
                </span>
                <h4 className="text-xl font-bold text-gray-800">
                  {evento.evento}
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {evento.descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      
      {/* Sección principal con TracingBeam */}
      <TracingBeam className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 py-12 w-full">
            {/* Título principal con efecto TracingBeam */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white text-sm font-semibold px-4 py-2 rounded-full">
                  Historia Institucional
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Nuestra Historia
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Conoce la trayectoria de la Fundación Cultural del Banco Central de Bolivia desde su creación
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] mx-auto rounded-full"></div>
            </motion.div>

            {/* Sección de foto y texto (ahora ocupa todo el ancho) */}
            <div className="space-y-10 mb-20">
              {/* Foto principal con animación */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 max-w-4xl mx-auto"
              >
                <img
                  src="/public/Institucion/historia.jpg"
                  alt="Patrimonio cultural FCBCB"
                  className="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Texto completo con animación de aparición */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <FaHistory className="text-[#10B981]" />
                    Reseña Histórica
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6">
                    {textoHistoria.split('\n\n').map((parrafo, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx + 0.3 }}
                        className="text-gray-700 leading-relaxed"
                      >
                        {parrafo}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Separador visual */}
            <div className="my-16 max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-gray-500">
                    <FaCalendarAlt className="text-[#10B981] text-2xl" />
                  </span>
                </div>
              </div>
            </div>

            {/* SECCIÓN DE TIMELINE COMPLETA */}
            <div ref={timelineRef} className="max-w-6xl mx-auto">
              {/* Cabecera de la timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Línea de Tiempo Histórica
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Eventos clave que marcaron el desarrollo institucional de la FC-BCB
                </p>
              </motion.div>

              {/* Componente Timeline centrado y más ancho */}
              <div className="relative">
                {/* Línea vertical central animada (opcional) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
                  <div className="absolute inset-0 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>
                  <motion.div
                    style={{
                      height: scrollHeight,
                      background: "linear-gradient(to bottom, #10B98100 0%, #10B98180 30%, #10B981 50%, #10B98180 70%, #10B98100 100%)",
                    }}
                    className="absolute inset-x-0 top-0 w-1 rounded-full"
                  />
                </div>

                {/* Timeline Component con contenedor más ancho */}
                <div className="w-full">
                  <Timeline 
                    data={timelineData}
                    title=""
                    description=""
                    showHeader={false}
                    color="#10B981"
                    glowColor="#10B98180"
                  />
                </div>
              </div>

              {/* Estadísticas después de la timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16 max-w-4xl mx-auto"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
                    <FaAward className="text-[#10B981]" />
                    Logros Destacados
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-3xl font-bold text-[#10B981] mb-2">8</div>
                      <div className="text-sm font-medium text-gray-700">Repositorios Nacionales</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-3xl font-bold text-[#059669] mb-2">25+</div>
                      <div className="text-sm font-medium text-gray-700">Años de Trayectoria</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-3xl font-bold text-[#047857] mb-2">5</div>
                      <div className="text-sm font-medium text-gray-700">Ciudades</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-3xl font-bold text-[#065F46] mb-2">1000+</div>
                      <div className="text-sm font-medium text-gray-700">Eventos Culturales</div>
                    </div>
                  </div>
                  <p className="text-center text-gray-600 text-sm mt-6">
                    Una trayectoria de compromiso con la cultura boliviana
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </TracingBeam>

      {/* Sección de Repositorios Nacionales */}
      <div className="mt-0">
        <RepositoriosNacionales />
      </div>
      
      <Footer />
    </>
  );
};

export default HistoriaInstitucion;