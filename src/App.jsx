// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './styles/carousel-styles.css';

// Importar páginas
import Home from "./pages/Home";
import Historia from "./pages/institucion/historia/Historia";
import MisionVision from "./pages/institucion/Mision_Vision/MisionVision";
import Presidencia from "./pages/institucion/presidencia/Presidencia";
import ConsejoAdministracion from "./pages/institucion/Consejo_Administracion/ConsejoAdministracion";
import InformeGestion from "./pages/institucion/Informe_Gestion/InformeGestion";
import PreguntasFrecuntes from "./pages/institucion/Preguntas_Frecuentes/PreguntasFrecuntes";
import AuditoriaInterna from "./pages/institucion/Auditoria_Interna/AuditoriaInterna";
import CatalogoPublicaciones from "./pages/comunicacion/CatalogoPublicaciones";
import BoletinesInstitucionales from "./pages/comunicacion/BoletinesInstitucionales";
import NotasPresidencia from "./pages/comunicacion/NotasPresidencia";
import NotasdePrensaFCBCB from "./pages/comunicacion/Notas_Prensa/NotasdePrensaFCBCB";
import NotasdePrensaABNB from "./pages/comunicacion/Notas_Prensa/NotasdePrensaABNB";
import NotasdePrensaCCP from "./pages/comunicacion/Notas_Prensa/NotasdePrensaCCP";
import NotasdePrensaCDL from "./pages/comunicacion/Notas_Prensa/NotasdePrensaCDL";
import NotasdePrensaCNM from "./pages/comunicacion/Notas_Prensa/NotasdePrensaCNM";
import NotasdePrensaCRC from "./pages/comunicacion/Notas_Prensa/NotasdePrensaCRC";
import NotasdePresnaMNA from "./pages/comunicacion/Notas_Prensa/NotasdePresnaMNA";
import NotasdePresnaMUSEF from "./pages/comunicacion/Notas_Prensa/NotasdePresnaMUSEF";
import NotasdePrensaCCMMNP from "./pages/comunicacion/Notas_Prensa/NotasdePrensaCCMMNP";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucion/historia" element={<Historia />} />
        <Route path="/institucion/mision-vision" element={<MisionVision />} />
        <Route path="/institucion/presidencia" element={<Presidencia/>} />
        <Route path="/institucion/consejo-administracion" element={<ConsejoAdministracion/>} />
        <Route path="/institucion/Informe-Gestion" element={<InformeGestion/>} />
        <Route path="/institucion/preguntas-frecuentes" element={<PreguntasFrecuntes/>} />
        <Route path="/institucion/auditoria-interna" element={<AuditoriaInterna/>} />

        <Route path="/comunicacion/catalogo-publicaciones" element={<CatalogoPublicaciones/>} />
        <Route path="/comunicacion/boletines-institucionales" element={<BoletinesInstitucionales/> } />
        <Route path="/comunicacion/notas-presidencia" element={<NotasPresidencia/>} />

        <Route path="/comunicacion/notas-prensa/fcbcb" element={<NotasdePrensaFCBCB/>} />
        <Route path="/comunicacion/notas-prensa/abnb" element={<NotasdePrensaABNB/>} />
        <Route path="/comunicacion/notas-prensa/CCP" element={<NotasdePrensaCCP/>} />
        <Route path="/comunicacion/notas-prensa/CDL" element={<NotasdePrensaCDL/>} />
        <Route path="/comunicacion/notas-prensa/CNM" element={<NotasdePrensaCNM/>} />
        <Route path="/comunicacion/notas-prensa/CRC" element={<NotasdePrensaCRC/>} />
        <Route path="/comunicacion/notas-prensa/MNA" element={<NotasdePresnaMNA/>} />
        <Route path="/comunicacion/notas-prensa/MUSEF" element={<NotasdePresnaMUSEF/>} />
        <Route path="/comunicacion/notas-prensa/CCMMNP" element={<NotasdePrensaCCMMNP/>} />
      </Routes>
    </div>
  );
}

export default App;