# El Barber · Catálogo web

Sitio estático: HTML + CSS + JavaScript, sin instalar nada. Abre `index.html` con doble clic o sube la carpeta completa a tu hosting.

## Estructura

```
el-barber/
├── index.html            ← la estructura de la página (con comentarios por sección)
├── css/
│   └── styles.css        ← todos los estilos (colores y tamaños arriba, en VARIABLES)
├── js/
│   ├── config.js         ← AJUSTES: número de WhatsApp, logo, video
│   ├── data.js           ← DATOS: marcas, secciones y productos con sus precios
│   └── app.js            ← LÓGICA: catálogo, filtros, carrito, WhatsApp, animaciones
└── assets/
    ├── img/
    │   ├── logo/         ← logo con fondo transparente
    │   ├── brands/       ← logos de la franja de marcas
    │   ├── products/     ← una foto por producto
    │   ├── clients/      ← fotos de clientes
    │   ├── events/       ← cartel del evento
    │   └── partners/     ← Powered by AXKA
    └── video/            ← video de la portada y su imagen previa
```

Los scripts se cargan en este orden (ya está así en `index.html`): `config.js` → `data.js` → `app.js`.

## Qué editar

| Quiero… | Archivo |
|---|---|
| Cambiar el número de WhatsApp | `js/config.js` |
| Agregar o cambiar un producto / precio | `js/data.js` (una línea por producto; `null` = "Consultar precio") |
| Cambiar el orden o nombre de las secciones | `js/data.js` (lista `SECS`) |
| Cambiar colores | `css/styles.css` (sección VARIABLES, arriba) |
| Cambiar el video de la portada | reemplaza `assets/video/hero.mp4` y `hero-poster.jpg` |
| Cambiar los banners del carrusel o los textos de la barra roja | `index.html` (secciones "BARRA DE ANUNCIOS" y "PORTADA") |
| Cambiar los banners de "Compra por categoría" (foto, título, orden) | `js/config.js` (lista `BANNERS`) |
| Ponerle varias fotos a un producto | `js/data.js`: en vez de una ruta, pon `["foto1.jpg", "foto2.jpg", "foto3.jpg"]` |
| Volver al diseño anterior | copia los archivos de `_respaldo-diseno-anterior/` a su lugar |

**Producto nuevo:** copia su foto a `assets/img/products/` y agrega en `js/data.js` una línea como:

```js
m("Máquinas", "Nombre del producto", "Marca", "Cortadoras", 1500, "assets/img/products/mi-foto.jpg", "Descripción corta."),
```

Las fuentes de Google necesitan internet; sin conexión se usa una fuente de respaldo.
# ElBarberTienda
