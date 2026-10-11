# NovaPlay — Evaluación Final Transversal

Cristian Nahuas · Desarrollo Frontend I · PFY2201

NovaPlay es una tienda digital de videojuegos desarrollada con React, JavaScript, HTML semántico, CSS y Bootstrap 5. El sitio carga su catálogo desde un archivo JSON, permite buscar y filtrar productos, revisar sus detalles, administrar un carrito y enviar un formulario de contacto validado.

## Requisitos

- Node.js 20 o superior.
- npm 10 o superior.

## Instalación y ejecución

```sh
npm install
npm run dev
```

Abre la dirección indicada por Vite, normalmente `http://localhost:5173`.

Para comprobar la versión de producción:

```sh
npm run build
npm run preview
```

## Funcionalidades principales

- Catálogo de 11 videojuegos cargado dinámicamente desde `public/data/products.json`.
- Títulos recientes de PlayStation y Xbox, incluyendo Marvel's Wolverine, Saros, Gears of War: E-Day y Fable.
- Búsqueda en tiempo real y filtros combinables por categoría y plataforma.
- Tarjetas responsivas construidas con la grilla y componentes de Bootstrap 5.
- Vista de detalle con descripción, plataformas, características y precios.
- Carrito con opciones para agregar, aumentar, disminuir, eliminar y vaciar productos.
- Persistencia del carrito en `localStorage`.
- Estados de carga, error, resultados vacíos, carrito vacío y producto próximo a estrenarse.
- Formulario de contacto con validación de nombre, correo y mensaje.
- Navegación responsiva, controles accesibles y soporte para movimiento reducido.

## Tecnologías

- React 19.
- Vite 8.
- Bootstrap 5.3.8.
- JavaScript moderno con `useState`, `useEffect`, `useMemo`, props y renderizado condicional.
- CSS personalizado con Flexbox, Grid y media queries.

## Estructura

```text
NovaPlay_EFT/
├── public/
│   ├── assets/img/
│   ├── data/products.json
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductList.jsx
│   │   └── ShoppingCart.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── utils.js
├── index.html
├── package.json
└── vite.config.js
```

## Funcionamiento del código

`App.jsx` mantiene los estados compartidos del catálogo, filtros y carrito. Los productos se obtienen mediante `fetch` dentro de `useEffect`; luego `useMemo` calcula el catálogo filtrado. Los datos y controladores se distribuyen a los componentes mediante props.

`ContactForm.jsx` conserva los campos en estado local, valida la información antes del envío simulado y muestra mensajes específicos cuando los datos están incompletos o tienen un formato incorrecto.

## Publicación en GitHub Pages

1. Crea un repositorio para la EFT y sube el proyecto a la rama `main`.
2. Ejecuta `npm run deploy`.
3. Configura GitHub Pages para publicar desde la raíz de la rama `gh_pages`.
4. Comprueba que el catálogo, las imágenes y la navegación funcionen en la URL publicada.

## Pruebas recomendadas

- Buscar por nombre y combinar filtros de categoría y plataforma.
- Agregar el mismo juego para plataformas diferentes.
- Aumentar, disminuir, eliminar y vaciar productos del carrito.
- Actualizar el navegador para comprobar la persistencia del carrito.
- Enviar el formulario vacío, con correo incorrecto y finalmente con datos válidos.
- Revisar el sitio a 375 px, 768 px y 1440 px en Chrome, Firefox y Edge.

## Nota sobre el catálogo

Los precios son valores ilustrativos para fines académicos. Las imágenes y marcas de videojuegos pertenecen a sus respectivos propietarios y se utilizan únicamente como contenido demostrativo en este proyecto educativo.
