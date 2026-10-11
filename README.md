# NovaPlay — Evaluación Final Transversal

Cristian Nahuas · Desarrollo Frontend I · PFY2201

NovaPlay es una tienda digital de videojuegos desarrollada con React, JavaScript, HTML semántico, CSS y Bootstrap 5. El sitio carga su catálogo desde un archivo JSON, permite buscar y filtrar productos, revisar sus detalles, administrar un carrito y enviar un formulario de contacto validado.

## Sitio publicado

- Aplicación: [https://crnahuas.github.io/Fontend_EFT/](https://crnahuas.github.io/Fontend_EFT/)
- Repositorio: [https://github.com/crnahuas/Fontend_EFT](https://github.com/crnahuas/Fontend_EFT)

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

## Uso del sitio

1. Recorre el catálogo o utiliza la búsqueda y los filtros de categoría y plataforma.
2. Abre “Ver detalles” para revisar las características y versiones disponibles de un juego.
3. Selecciona una plataforma y agrega el producto al carrito.
4. Ajusta las cantidades, elimina productos o finaliza la compra simulada.
5. Completa el formulario de contacto; los campos se validan antes del envío simulado.

El carrito se conserva en el navegador mediante `localStorage`. Los datos del catálogo y el formulario se utilizan únicamente con fines demostrativos.

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
Frontend_EFT/
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
