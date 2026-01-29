import React from 'react'
import HeaderPrincipal from '../../../components/Header/HeaderPrincipal'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'

const NotasdePrensaCCP = () => {
  return (
    <>
      <HeaderPrincipal />
      <Navbar />
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Notas de Prensa CCP
          </h1>
          <div className="text-gray-600 dark:text-gray-300">
            <p>Contenido de la página en Desarrollo </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotasdePrensaCCP