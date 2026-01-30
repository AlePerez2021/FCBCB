import React from 'react';
import { motion } from 'framer-motion';
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

const HistoriaInstitucion = () => {
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

  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nuestra Historia Institucional
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Layout principal: Izquierda (foto + texto completo) | Derecha (timeline detallada) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16">
            {/* Columna izquierda: Foto + Texto completo */}
            <div className="lg:col-span-3 space-y-10">
              {/* Foto principal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
              >
                <img
                  src="/public/Institucion/historia.jpg"  // ← cambia por tu imagen real
                  alt="Patrimonio cultural FCBCB"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </motion.div>

              {/* Texto completo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify"
              >
                {textoHistoria.split('\n\n').map((parrafo, idx) => (
                  <p key={idx} className="mb-6">
                    {parrafo}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Columna derecha: Timeline más detallada y sticky */}
            <div className="lg:col-span-2 lg:sticky lg:top-24 lg:h-fit">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Línea vertical */}
                <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600"></div>

                {eventosHistoricos.map((evento, index) => (
                  <motion.div
                    key={evento.año}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    className="relative mb-12 last:mb-0"
                  >
                    {/* Punto en la línea */}
                    <div className="absolute left-[-10px] md:left-[-12px] top-3 w-6 h-6 rounded-full bg-white border-4 border-amber-500 shadow-md z-10"></div>
                    
                    {/* Tarjeta del evento */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${evento.color} text-white flex-shrink-0`}>
                          {evento.icon}
                        </div>
                        <div>
                          <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-extrabold text-amber-600">{evento.año}</span>
                            <h4 className="text-xl font-bold text-gray-800">{evento.evento}</h4>
                          </div>
                          <p className="mt-2 text-gray-700 text-base leading-relaxed">
                            {evento.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <RepositoriosNacionales/>
      <Footer />
    </>
  );
};

export default HistoriaInstitucion;