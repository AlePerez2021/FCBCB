import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./NotaPrensa";
import { useState, useRef, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  Calendar,
  Clock
} from "lucide-react";
import "./notas.css";

export const NotasPrensa = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  // Ref para la sección de notas
  const notasSectionRef = useRef(null);

  // Calcular notas para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotas = notasCulturalesOrdenadas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(notasCulturalesOrdenadas.length / itemsPerPage);

  // Función para hacer scroll suave a la sección de notas
  const scrollToNotasSection = () => {
    if (notasSectionRef.current) {
      // Obtener la posición de la sección de notas
      const notasSection = notasSectionRef.current;
      const yOffset = -20; // Pequeño offset para no pegarse al borde
      const y = notasSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Funciones de paginación
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Pequeño delay para que React actualice el estado primero
      setTimeout(scrollToNotasSection, 50);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(scrollToNotasSection, 50);
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      setTimeout(scrollToNotasSection, 50);
    }
  };

  // Efecto para manejar cambios de página
  useEffect(() => {
    // Solo hacer scroll cuando la página cambie (no en la carga inicial)
    if (currentPage > 1) {
      scrollToNotasSection();
    }
  }, [currentPage]);

  return (
    <section 
      ref={notasSectionRef} // Añadir ref aquí
      className="section-wrapper py-16 bg-gradient-to-b from-white to-gray-50" 
      id="notas-prensa"
    >
      <div className="container mx-auto px-4">
        <SectionHeader title="Notas de Prensa" dir="r" />
        
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mantente informado sobre nuestras últimas actividades, exposiciones y eventos culturales
          </p>
          
        </div>

        {/* Grid de notas */}
        <div className="projects-grid max-w-4xl mx-auto mb-12">
          {currentNotas.map((nota) => {
            return <Project key={nota.id} {...nota} />;
          })}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center justify-center gap-6 mt-12">
            {/* Información de página */}
            <div className="text-gray-600 text-sm flex items-center gap-2">
              <Clock size={16} />
              <span>
                Página <span className="font-bold text-blue-700">{currentPage}</span> de <span className="font-bold text-blue-700">{totalPages}</span>
              </span>
            </div>

            {/* Controles de paginación */}
            <div className="flex items-center justify-center gap-2">
              {/* Botón Primera Página */}
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                } transition-all duration-200`}
              >
                <ChevronsLeft size={20} />
              </button>

              {/* Botón Página Anterior */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                } transition-all duration-200`}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Números de página */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => {
                    // Mostrar páginas cercanas a la actual
                    if (totalPages <= 5) return true;
                    if (page === 1 || page === totalPages) return true;
                    if (Math.abs(page - currentPage) <= 1) return true;
                    return false;
                  })
                  .map((page, index, array) => {
                    // Agregar "..." para saltos de página
                    const prevPage = array[index - 1];
                    if (prevPage && page - prevPage > 1) {
                      return (
                        <span key={`dots-${page}`} className="flex items-center">
                          <span className="px-2 text-gray-400">...</span>
                          <PageButton 
                            page={page} 
                            currentPage={currentPage} 
                            goToPage={goToPage} 
                          />
                        </span>
                      );
                    }
                    return (
                      <PageButton 
                        key={page} 
                        page={page} 
                        currentPage={currentPage} 
                        goToPage={goToPage} 
                      />
                    );
                  })}
              </div>

              {/* Botón Página Siguiente */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                } transition-all duration-200`}
              >
                <ChevronRight size={20} />
              </button>

              {/* Botón Última Página */}
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                } transition-all duration-200`}
              >
                <ChevronsRight size={20} />
              </button>
            </div>

            {/* Selector de página */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Ir a página:</span>
              <select
                value={currentPage}
                onChange={(e) => goToPage(Number(e.target.value))}
                className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <option key={page} value={page}>
                    {page}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Componente para botones de página
const PageButton = ({ page, currentPage, goToPage }) => (
  <button
    onClick={() => goToPage(page)}
    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 font-medium ${
      page === currentPage
        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105'
        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm'
    }`}
  >
    {page}
  </button>
);

// Datos de notas de prensa con fechas (ordenadas de más reciente a más antigua)
const notasCulturalesOrdenadas = [
  {
    id: 1,
    title: "Inauguración de la Exposición 'Memorias del Patrimonio'",
    imgSrc: "/Repositorios/Casa_Moneda.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Exposición", "Patrimonio", "Inauguración"],
    description: "La Fundación Cultural BCB inauguró una exposición única que recorre la historia del patrimonio cultural boliviano.",
    date: "2024-02-15",
    modalContent: (
      <>
        <p>
          El pasado viernes 15 de febrero, en las instalaciones del Museo Nacional de Arte, 
          se inauguró la exposición "Memorias del Patrimonio".
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Nuevo Acervo Digital Disponible para Investigadores",
    imgSrc: "/Repositorios/Archivo_Biblñioteca_Nacional_Bolivia.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Digitalización", "Investigación", "Archivo"],
    description: "Más de 10,000 documentos históricos han sido digitalizados y puestos a disposición de investigadores.",
    date: "2024-02-10",
    modalContent: (
      <>
        <p>
          La Fundación Cultural BCB, en colaboración con el Archivo y Biblioteca Nacional 
          de Bolivia, ha completado la digitalización de más de 10,000 documentos históricos.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Talleres de Conservación para Comunidades Indígenas",
    imgSrc: "/Repositorios/museo-etnografia-folklore.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Talleres", "Comunidades", "Conservación"],
    description: "Programa de capacitación en técnicas de conservación patrimonial dirigido a comunidades indígenas.",
    date: "2024-02-05",
    modalContent: (
      <>
        <p>
          La Fundación Cultural BCB ha lanzado un programa de capacitación en técnicas 
          de conservación patrimonial dirigido específicamente a comunidades indígenas.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Reapertura de la Casa de la Libertad con Nuevas Salas",
    imgSrc: "/Repositorios/Casa_Libertad.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Reapertura", "Museo", "Historia"],
    description: "Tras 6 meses de renovación, la Casa de la Libertad reabre sus puertas con 3 nuevas salas interactivas.",
    date: "2024-01-30",
    modalContent: (
      <>
        <p>
          Después de un proceso de renovación que duró 6 meses, la Casa de la Libertad 
          en Sucre reabrió sus puertas al público con importantes mejoras.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Convenio con Universidades para Prácticas Profesionales",
    imgSrc: "/Repositorios/centro_cultura_plurinacional.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Educación", "Convenio", "Universidades"],
    description: "Firma de convenio con 5 universidades nacionales para prácticas profesionales en museos.",
    date: "2024-01-25",
    modalContent: (
      <>
        <p>
          La Fundación Cultural BCB ha firmado convenios con 5 universidades nacionales 
          para establecer programas de prácticas profesionales.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Exposición Itinerante 'Arte Contemporáneo Boliviano'",
    imgSrc: "/Repositorios/museo-nacional-de-arte.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Exposición", "Itinerante", "Arte Contemporáneo"],
    description: "Colección de arte contemporáneo boliviano comenzará gira por 8 ciudades del país.",
    date: "2024-01-20",
    modalContent: (
      <>
        <p>
          Una selección de 50 obras de arte contemporáneo boliviano, pertenecientes 
          a la colección de la Fundación Cultural BCB, iniciará una gira nacional.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Restauración del Archivo Histórico Nacional",
    imgSrc: "/Repositorios/Archivo_Biblñioteca_Nacional_Bolivia.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Restauración", "Archivo", "Conservación"],
    description: "Proyecto de restauración del archivo histórico nacional con apoyo de la UNESCO.",
    date: "2024-01-15",
    modalContent: (
      <>
        <p>
          La Fundación Cultural BCB, en colaboración con la UNESCO, ha iniciado un 
          proyecto de restauración del archivo histórico nacional.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Nuevas Adquisiciones para el Museo Nacional de Arte",
    imgSrc: "/Repositorios/museo-nacional-de-arte.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Adquisiciones", "Arte", "Colección"],
    description: "El Museo Nacional de Arte incorpora 15 nuevas obras a su colección permanente.",
    date: "2024-01-10",
    modalContent: (
      <>
        <p>
          El Museo Nacional de Arte ha incorporado 15 nuevas obras a su colección permanente, 
          incluyendo piezas de artistas contemporáneos bolivianos.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Programa de Visitas Escolares a Museos",
    imgSrc: "/Repositorios/Casa_Moneda.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Educación", "Escuelas", "Museos"],
    description: "Programa gratuito de visitas escolares a museos para estudiantes de todo el país.",
    date: "2024-01-05",
    modalContent: (
      <>
        <p>
          La Fundación Cultural BCB ha lanzado un programa gratuito de visitas escolares 
          a museos para estudiantes de instituciones públicas.
        </p>
      </>
    ),
  },
  {
    id: 10,
    title: "Digitalización de la Colección Fotográfica Histórica",
    imgSrc: "/Repositorios/Archivo_Biblñioteca_Nacional_Bolivia.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Digitalización", "Fotografía", "Historia"],
    description: "Proyecto de digitalización de más de 5,000 fotografías históricas de Bolivia.",
    date: "2023-12-28",
    modalContent: (
      <>
        <p>
          La Fundación Cultural BCB ha iniciado un proyecto de digitalización de más de 
          5,000 fotografías históricas que documentan la vida en Bolivia desde 1850.
        </p>
      </>
    ),
  },
  {
    id: 11,
    title: "Exposición de Arte Precolombino",
    imgSrc: "/Repositorios/museo-etnografia-folklore.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Arte Precolombino", "Exposición", "Cultura"],
    description: "Exposición especial de arte precolombino con piezas de las culturas Tiwanaku e Inca.",
    date: "2023-12-20",
    modalContent: (
      <>
        <p>
          El Museo Nacional de Etnografía y Folklore presenta una exposición especial de 
          arte precolombino con piezas de las culturas Tiwanaku e Inca.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Renovación del Sistema de Climatización en Museos",
    imgSrc: "/Repositorios/Casa_Libertad.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Infraestructura", "Conservación", "Museos"],
    description: "Modernización del sistema de climatización en todos los museos nacionales.",
    date: "2023-12-15", // Más antigua
    modalContent: (
      <>
        <p>
          La Fundación Cultural BCB ha completado la modernización del sistema de 
          climatización en todos los museos nacionales para mejorar la conservación 
          de las colecciones.
        </p>
      </>
    ),
  },
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha descendente