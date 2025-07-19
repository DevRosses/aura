# Aura - E-commerce de Cosmética Natural 🌿

> Un e-commerce funcional que busca conectar la cosmética natural y ancestral con un propósito, desarrollado con React y Firebase.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)

**Demo en vivo:** [**https://devrosses.github.io/aura/**](https://devrosses.github.io/aura/)

---

## 📝 Descripción

Aura es un proyecto full-stack que simula una tienda online de cosmética natural. Creado con un diseño minimalista y una experiencia de usuario fluida, este sitio permite a los usuarios explorar productos, gestionar su carrito y favoritos, mientras que los administradores tienen un control total sobre el inventario y los usuarios a través de un panel de gestión dedicado.

Este proyecto representa una pieza clave en mi formación dentro del programa **Talento Tech**, impulsado por el Gobierno de la Ciudad de Buenos Aires. El desarrollo de Aura ha sido un viaje de aprendizaje intensivo, donde cada componente y funcionalidad me ha permitido solidificar conocimientos en el ecosistema de React y Firebase. Más allá de la técnica, fue un ejercicio sobre cómo traducir una visión —la de una marca con energía y propósito— en una experiencia de usuario coherente, segura y profesional.

---

## ✨ Funcionalidades Principales

- **Catálogo de Productos:** Visualización de productos obtenidos desde Firestore en un layout responsivo.
- **Registro y Autenticación:** Sistema completo de login y registro de usuarios mediante Firebase Auth.
- **Carrito de Compras:** Lógica completa para añadir, actualizar cantidad y eliminar productos.
- **Panel de Administración:** Un dashboard protegido para la gestión del sitio.
  - **CRUD de Productos:** Crear, leer, actualizar y eliminar productos del inventario.
  - **Gestión de Usuarios:** Visualizar la lista de usuarios registrados y modificar sus roles.
- **Seguridad:** Implementación de variables de entorno para claves de API y reglas de seguridad en Firestore.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React (con Vite)
- **Backend y Base de Datos:** Firebase (Firestore, Authentication)
- **Estilos:** CSS3 puro con arquitectura BEM y Bootstrap para el sistema de grilla.
- **Routing:** React Router DOM
- **Alertas y Notificaciones:** SweetAlert2
- **Iconos:** Iconify
- **Deployment:** GitHub Pages

---

## 🚀 Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/DevRosses/aura.git](https://github.com/DevRosses/aura.git)
    ```
2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd aura
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Configura las variables de entorno:**
    - Crea un archivo `.env.local` en la raíz del proyecto.
    - Añade tus propias claves de API de Firebase dentro de este archivo. Puedes usar el archivo `.env.example` como guía.
5.  **Ejecuta el proyecto:**
    ```bash
    npm run dev
    ```

---

## 🧪 Cómo Probar

### Acceso como Administrador
Para explorar todas las funcionalidades de gestión, puedes usar las siguientes credenciales:
- **Usuario:** `devrosses@gmail.com`
- **Contraseña:** `123rosario`

### Acceso como Usuario
Para probar la experiencia de un cliente normal:
1.  **Regístrate** con tu propio correo electrónico.
2.  **Validatu cuenta** mediante el enlace enviado a tu correo (revisa tu bandeja de spam)
3.  **Inicia sesión** para acceder a tu panel y gestionar tu carrito y favoritos.

---

## 📈 Próximas Mejoras (Roadmap)

- [ ] Implementación de una pasarela de pagos para finalizar la compra.
- [ ] Desarrollo completo del perfil de usuario (editar datos, ver historial de órdenes).
- [ ] Funcionalidades de búsqueda y filtrado de productos.
- [ ] Historial de órdenes detallado.
- [ ] Refinamiento general del diseño y la interfaz de usuario (UI/UX).

---

## 📬 Contacto

**Rosario Ramos**
- **LinkedIn:** [https://www.linkedin.com/in/devrosses/]
- **Email:** [devrosses@gmail.com](mailto:devrosses@gmail.com)