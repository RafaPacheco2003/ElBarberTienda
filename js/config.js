// ============================================================
// CONFIG.JS — Ajustes del sitio. Es el archivo que más vas a editar.
// ============================================================

// Logo del negocio (se usa como imagen de respaldo y dentro del carrito)
const LOGO = "assets/img/logo/logo.png";

// Video de la portada y su imagen previa
const VIDEO = "assets/video/hero.mp4";
const POSTER = "assets/video/hero-poster.jpg";

// Número de WhatsApp del negocio: código de país + 10 dígitos, sin "+" ni espacios
const WA_NUMBER = "529991567296";

// Banners de "Compra por categoría" en la portada, en este orden.
//   c = sección (igual que en data.js; "APP" = todos los productos de aplicación)
//   t = título que se ve · img = foto · w = 1 para banner ancho
const BANNERS = [
  { c: "Máquinas", t: "Máquinas", img: "assets/img/products/cortadora-fx-coral.jpg", w: 1 },
  { c: "Artículos de Barbería", t: "Artículos de barbería", img: "assets/img/products/baregk/bledo-madera-baregk/bledo-madera-baregk.jpg" },
  { c: "Capas", t: "Capas", img: "assets/img/products/generico/capa-premium-rombos-generico/capa-premium-rombos-generico.jpg" },
  { c: "Tijeras", t: "Tijeras", img: "assets/img/products/purple-dragon/combo-tijeras-6-purple-dragon/combo-tijeras-6-purple-dragon.jpg" },
  { c: "APP", t: "Productos de aplicación", img: "assets/img/products/nishman/after-shave-colonia-nishman/after-shave-colonia-nishman.png", w: 1 },
  { c: "Repuestos & Accesorios", t: "Repuestos", img: "assets/img/products/generico/repuesto-shaver-babyliss-generico/repuesto-shaver-babyliss-generico.jpg" },
  { c: "Caramelos & Tapetes", t: "Caramelos y tapetes", img: "assets/img/products/generico/caramelo-con-esfera-generico/caramelo-con-esfera-generico.jpg", w: 1 },
  { c: "Colorimetría", t: "Colorimetría", img: "assets/img/products/combo-decolorante-hidra.jpg", w: 1 },
];
