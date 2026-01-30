Rediseño Fundación Cultural Banco Central de Bolivia - React-Vite TailwindCSS 🏛️
https://github.com/user-attachments/assets/ejemplo-imagen-1
https://github.com/user-attachments/assets/ejemplo-imagen-2
https://github.com/user-attachments/assets/ejemplo-imagen-3

Un rediseño moderno y responsive del sitio web de la Fundación Cultural del Banco Central de Bolivia, construido con React, Vite y Tailwind CSS. Este proyecto implementa las mejores prácticas en estructura de componentes, animaciones fluidas y experiencia de usuario optimizada.

Demo en Vivo: https://fcbcb-rediseno.netlify.app/

Tabla de Contenidos
Resumen del Proyecto

Características Principales

Stack Tecnológico

Estructura del Proyecto

Componentes Principales

Cómo Ejecutar

Personalización

Palabras Clave

Resumen del Proyecto
Este proyecto consiste en el rediseño completo de la interfaz web de la Fundación Cultural del Banco Central de Bolivia, enfocándose en:

Modernización visual manteniendo la identidad institucional

Optimización responsive para todos los dispositivos

Implementación de animaciones fluidas y profesionales

Mejora de UX/UI en la navegación y presentación de contenido

Componentización modular para fácil mantenimiento

Características Principales
⚡️ Desarrollo rápido con Vite + React

🎨 Diseño institucional con paleta de colores BCB

🌙 Modo oscuro/claro integrado

✨ Animaciones avanzadas con Framer Motion

📱 Diseño responsive adaptativo (mobile/tablet/desktop)

🏛️ Sección del Consejo de Administración con diseño especial

🎭 Efectos visuales profesionales con gradientes y sombras

🔄 Optimización de imágenes y carga perezosa

♿️ Accesibilidad y semántica HTML mejorada

Stack Tecnológico
React 18+ con Hooks y Componentes Funcionales

Vite para build y desarrollo ultrarrápido

Tailwind CSS con configuración personalizada

Framer Motion para animaciones fluidas

React Icons para iconografía

ESLint + Prettier para calidad de código

PostCSS con autoprefixer

JavaScript ES6+ con mejores prácticas

Estructura del Proyecto
bash
fcbcb-rediseno/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── public/
│   └── ... (imágenes y assets)
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── assets/
    │   └── ... (recursos multimedia)
    ├── components/
    │   ├── Header/
    │   ├── Navbar/
    │   ├── Footer/
    │   ├── ConsejoAdministracion/
    │   └── ... (otros componentes)
    ├── pages/
    │   └── ... (páginas principales)
    └── utils/
        └── ... (utilidades y configuraciones)
Componentes Principales
ConsejoAdministracion
Presentación visual de los miembros del Consejo

Diseño responsive: rectangular en mobile, circular en desktop

Animaciones individuales por miembro

Sistema de colores según designación (BCB/Ministerio)

HeaderPrincipal
Header institucional con logo y branding

Diseño adaptable a diferentes dispositivos

Navbar
Navegación principal con menú responsive

Indicadores visuales de sección activa

Footer
Pie de página institucional con enlaces importantes

Información de contacto y redes sociales

MiembroCard
Componente reutilizable para cada miembro del Consejo

Foto con efectos hover y animaciones

Información biográfica y designación

Badges diferenciados por rol

Cómo Ejecutar
Clonar el repositorio:

bash
git clone https://github.com/tu-usuario/fcbcb-rediseno.git
Instalar dependencias:

bash
npm install
Iniciar servidor de desarrollo:

bash
npm run dev
Abrir en el navegador:

Visitar: http://localhost:5173

Build para producción:

bash
npm run build
Personalización
Colores Institucionales
Editar tailwind.config.js para modificar la paleta de colores:

javascript
theme: {
  extend: {
    colors: {
      'bcb-primary': '#1E3A8A', // Azul BCB
      'bcb-secondary': '#0F766E', // Verde institucional
      'bcb-accent': '#F59E0B', // Amarillo destacado
    }
  }
}
Animaciones
Modificar las configuraciones de Framer Motion en los componentes:

javascript
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};
Contenido
Actualizar los datos de los miembros en ConsejoAdministracion.jsx:

javascript
const consejerosBCB = [
  {
    nombre: "Nombre Completo",
    rol: "Cargo",
    bio: "Biografía...",
    imagen: importImagen,
    designadoPor: "Banco Central de Bolivia"
  }
];
Palabras Clave
React, Vite, Tailwind CSS, Framer Motion, Fundación Cultural, Banco Central de Bolivia, Rediseño Web, UI/UX Moderna, Responsive Design, Animaciones Web, Componentes React, Desarrollo Frontend, JavaScript ES6+, Institutional Design, Accesibilidad Web, Performance Optimization

Conclusión
Este proyecto representa una modernización completa de la presencia web institucional de la Fundación Cultural del Banco Central de Bolivia, combinando diseño profesional con tecnología moderna y mejores prácticas de desarrollo web.

Nota: Este proyecto es un rediseño conceptual y demostrativo. Para implementación oficial, contactar con las autoridades correspondientes del Banco Central de Bolivia.

Desarrollado con ❤️ para la cultura boliviana.