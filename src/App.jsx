import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import './styles/carousel-styles.css';
import HeaderPrincipal from "./components/Header/HeaderPrincipal.jsx";
import Hero1 from "./components/Hero/Hero1.jsx";
import { NotasPrensa } from "./components/Notas_Prensa/NotasPrensa.jsx";
import RepositoriosNacionales from "./components/Testimonials/RepositoriosNacionales.jsx";


const App = () => {
  React.useEffect(() => {
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

export default App;
