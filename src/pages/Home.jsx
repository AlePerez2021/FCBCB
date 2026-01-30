// src/pages/Home.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services.jsx";
import Banner from "../components/Banner/Banner.jsx";
import AppStore from "../components/AppStore/AppStore.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/carousel-styles.css';
import HeaderPrincipal from "../components/Header/HeaderPrincipal.jsx";
import Hero from "../components/Hero/Hero.jsx";
import { NotasPrensa } from "../components/Notas_Prensa/NotasPrensa.jsx";
import RepositoriosNacionales from "../components/Testimonials/RepositoriosNacionales.jsx";

const Home = () => {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });

    // Forzar refresh después de un tiempo
    setTimeout(() => {
      AOS.refresh();
    }, 1000);

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <HeaderPrincipal></HeaderPrincipal>
      <Navbar />
      <Hero/>
      <NotasPrensa></NotasPrensa>
      <Banner />
      <AppStore />
      <RepositoriosNacionales/>
      
      <Footer />
    </div>
  );
};

export default Home;