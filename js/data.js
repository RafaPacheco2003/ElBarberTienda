// ============================================================
// DATA.JS — Marcas, secciones y productos del catálogo.
// Para agregar un producto: copia una línea m(...) y cambia sus campos.
//
//   m( Sección, Nombre, Marca, Tipo, Precio, Foto, Descripción, Destacado, PrecioAntes )
//
//   - Sección:  debe coincidir con un nombre de SECS (abajo)
//   - Precio:   número, o null para mostrar "Consultar precio"
//   - Foto:     ruta dentro de assets/img/products/, o VARIAS fotos entre corchetes:
//               ["assets/img/products/a.jpg", "assets/img/products/a-2.jpg", "assets/img/products/a-3.jpg"]
//               (la primera es la principal; puedes poner todas las que quieras)
//   - Destacado: 1 para mostrar la etiqueta "Más vendido" en su tarjeta (opcional)
//   - PrecioAntes: precio anterior, se muestra tachado (opcional; pon Destacado 0 si no lleva etiqueta)
// ============================================================

// Marcas de la franja animada. n = nombre · i = logo · l = 1 si el logo es oscuro y necesita fondo blanco
const BR = [
  { i: "assets/img/brands/cocco.png", n: "Cocco", l: 1 },
  { i: "assets/img/brands/l3vel3.png", n: "L3VEL3", l: 1 },
  { i: "assets/img/brands/nishman.png", n: "Nishman"},
  { i: "assets/img/brands/stylecraft.png", n: "StyleCraft", l: 1 },
  { i: "assets/img/brands/babylisspro.png", n: "BaBylissPRO", l: 1 },
  { i: "assets/img/brands/wmark.png", n: "WMARK", l: 1 },
  { i: "assets/img/brands/vgr.png", n: "VGR", l: 1 },
  { i: "assets/img/brands/wahl.png", n: "Wahl" },
  { i: "assets/img/brands/4x4.png", n: "4x4", l: 1 },
];
// Secciones en el orden en que se muestran. app: 1 = producto de aplicación (agrupa "Productos de aplicación")
const SECS = [
  { n: "Nish Man", app: 1 },
  { n: "Elegance", app: 1 },
  { n: "Level 3", app: 1 },
  { n: "4 X 4", app: 1 },
  { n: "Tok", app: 1 },
  { n: "One Religion", app: 1 },
  { n: "Máquinas" },
  { n: "Artículos de Barbería" },
  { n: "Capas" },
  { n: "Tijeras" },
  { n: "Repuestos & Accesorios" },
  { n: "Caramelos & Tapetes" },
  { n: "Colorimetría" },
  { n: "Otras marcas", app: 1 },
];
// Ayudas para saber si un producto es de aplicación
const secApp = Object.fromEntries(SECS.map((s) => [s.n, !!s.app])),
  inApp = (p) => secApp[p.c];
// Crea un producto: c sección, n nombre, b marca, t tipo, p precio, i foto, d descripción, f destacado
// Foto puede ser una ruta o un arreglo de rutas: ["a.jpg", "b.jpg"]
// po = precio anterior (opcional): se muestra tachado. Ej. "De $1,400 a $1,250" → precio 1250, po 1400
const m = (c, n, b, t, p, i, d, f, po) => {
  const imgs = (Array.isArray(i) ? i : [i]).filter(Boolean);
  return { c, n, b, t, p, i: imgs[0] || "", imgs, d, f, po };
};
// Nombres de tipos que se repiten
const PO = "Polvos y texturizantes",
  PA = "Pomadas",
  CG = "Ceras y geles",
  PM = "Pastas y masillas",
  CO = "Colonias y after shave",
  CF = "Cuidado facial";
// Lista de productos
const P = [
  m(
    "Nish Man",
    "Polvo Nishman Milky",
    "Nishman",
    PO,
    150,
    ["assets/img/products/nishman/polvo-nishman-milky/polvo-nishman-milky.png", "assets/img/products/nishman/polvo-nishman-milky/polvo-nishman-milky-2.png"],
    "Polvo para volumen y textura línea Milky de nishman. Contenido 20 gramos.",
  ),
  m(
    "Nish Man",
    "Desodorante Nishman 200 ml",
    "Nishman",
    "Desodorantes",
    85,
    "assets/img/products/nishman/desodorante-nishman-200-ml/desodorante-nishman-200-ml.png",
    "Desodorante marca Nishman. Contenido 200 ml. Varios aromas.",
  ),
  m(
    "Nish Man",
    "Polvo voluminizador",
    "Nishman",
    PO,
    150,
    ["assets/img/products/nishman/polvo-voluminizador-nishman/polvo-voluminizador-nishman.png", "assets/img/products/polvo-voluminizador.jpg"],
    "Polvo para dar volumen y textura al cabello. Contenido 20 gramos. Fijación normal, fijación extra, extra volúmen.",
  ),
  m(
      "Nish Man",
      "After shave Colonia Nish Man",
      "Nishman",
      PO,
      170,
      "assets/img/products/nishman/after-shave-colonia-nishman/after-shave-colonia-nishman.png",
      "Colonia para después de afeitar. Diferentes aromas. Contenido 400 ml\n" +
      "\n" +
      "AROMAS DISPONIBLES:\n" +
      "* 1 ANTARCTICA\n" +
      "* 2 STORM\n" +
      "* 6 AQUA D'ASIL\n" +
      "* 7 GOLD ONE\n" +
      "* 8 SUN SENSE\n" +
      "* 9 MARINE\n" +
      "* 10 AMBER\n" +
      "* 11 LEADER\n" +
      "* 14 PATCHOULI\n" +
      "* 15 BLACKCURRANT.",
  ),
  m(
      "Nish Man",
      "Spray fijador Nish Man",
      "Nishman",
      PO,
      150,
      "assets/img/products/nishman/spray-fijador-nishman/spray-fijador-nishman.png",
      "Fijador de larga duración. Contenido 400 ml.",
  ),
  m(
      "Nish Man",
      "Cera para cabello Nish Man",
      "Nishman",
      PO,
      150,
      "assets/img/products/nishman/cera-para-cabello-nishman/cera-para-cabello-nishman.png",
      "Cera para estilizar cabello. Varias presentaciones. Contenido 150 ml.\n" +
      "\n" +
      "\n" +
      "Aromas disponibles:\n" +
      "\n" +
      "01 GUMGUM\n" +
      "02 SPORT \n" +
      "03 FLAMING\n" +
      "04 RUGBY\n" +
      "05 KERATIN\n" +
      "06 MYSTIC GUMMY\n" +
      "07 GOLD\n" +
      "08 MATE.",
  ),
  m(
      "Nish Man",
      "Acondicionador de 2 fases Nish Man",
      "Nishman",
      PO,
      190,
      "assets/img/products/nishman/acondicionador-de-2-fases-nishman/acondicionador-de-2-fases-nishman.png",
      "Acondicionador para barba y cabello. Desenreda y repara el cabello seco y dañado manteniendo la hidratación dejándolo suave y con brillo. La fórmula de Keratina reconstruye la capa externa de la estructura del cabello. Apto para uso diario. Agitar antes de usar. Rociar sobre cabello húmedo y cepillar. Contenido 400 ml",
  ),
  m(
      "Nish Man",
      "Grooming Nish Man",
      "Nishman",
      PO,
      160,
      "assets/img/products/nishman/grooming-nishman/grooming-nishman.png",
      "Humecta el cabello mientras lo estiliza. Se puede aplicar en cabello seco o húmedo.  Contenido neto 200 ml.",
  ),
  m(
      "Nish Man",
      "Gel para afeitar 1 litro Nishman",
      "Nishman",
      PO,
      170,
      "assets/img/products/nishman/gel-para-afeitar-1-litro-nishman/gel-para-afeitar-1-litro-nishman.png",
      "Shaving gel. Contenido 1 litro.\n" +
      "\n" +
      "\n" +
      "Aromas disponibles:\n" +
      "\n" +
      "Gold\n" +
      "Fresh active \n",
  ),


   m(
      "Nish Man",
      "Mascarilla Negra / Dorado Nish Man",
      "Nishman",
      PO,
      180,
      "assets/img/products/nishman/mascarilla-negra-dorada/mascarilla-negra-dorada.png",
      "Mascarilla para remover puntos negros. Ideal para hacer limpieza facial profunda. Colores disponibles negro y dorado. Contenido 200 ml.\n",
      
  ),

   m(
      "Nish Man",
      "Mascarilla Exfoliante Durazno / Aguacate Nish Man",
      "Nishman",
      PO,
      190,
      "assets/img/products/nishman/mascarilla-exfoliante-durazno-aguacate-nishman/mascarilla-exfoliante-durazno-aguacate-nishman.png",
      "Scrub facial. Ideal para limpieza facial. Aroma durazno y aguacate. Contenido 200 ml.\n",
  ),
  m(
      "Nish Man",
      "After Shave Cream Nish Man",
      "Nishman",
      PO,
      160,
      "assets/img/products/nishman/after-shave-cream-nishman/after-shave-cream-nishman.png",
      "Crema y colonia 2 en 1. Suaviza la piel. Protege contra cortaduras al afeitar.\n",
      "\n" +
      "\n" +
      "Aromas disponibles:\n" +
      "\n" +
      "4 GOLD ONE\n",
  ),



  //Me quede en mascarilla negra/dorada NISH MAN




  // ===== ELEGANCE =====
  // Fotos en assets/img/products/elegance/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Elegance",
    "Pasta mate alta fijación",
    "Elegance",
    PM,
    130,
    "assets/img/products/elegance/pasta-mate-alta-fijacion-elegance/pasta-mate-alta-fijacion-elegance.jpg",
    "Pasta mate con fijación extrema. Contenido 140 gramos. Fórmula para textura de cabello.",
  ),
  m(
    "Elegance",
    "Pomada alta fijación",
    "Elegance",
    PA,
    120,
    "assets/img/products/elegance/pomada-alta-fijacion-elegance/pomada-alta-fijacion-elegance.jpg",
    "Pomada con fijación extrema para todo el día. Contenido 140 gramos. Fórmula transparente.",
  ),
  m(
    "Elegance",
    "Cera gel black cubre canas",
    "Elegance",
    CG,
    110,
    "assets/img/products/elegance/cera-gel-black-cubre-canas-elegance/cera-gel-black-cubre-canas-elegance.jpg",
    "Cera gel negro ideal para cubrir canas. Contenido 140 gramos.",
  ),
  m(
    "Elegance",
    "Cera hard wax",
    "Elegance",
    CG,
    100,
    "assets/img/products/elegance/cera-hard-wax-elegance/cera-hard-wax-elegance.png", // Foto: 
    "Cera de fijación extrema. Con aceite de argán. Contenido 100 gramos.",
  ),
  m(
    "Elegance",
    "Cera soft wax",
    "Elegance",
    CG,
    100,
    "assets/img/products/elegance/cera-soft-wax-elegance/cera-soft-wax-elegance.png", // Foto: 
    "Cera para crear textura suave en el cabello con buena fijación. Fórmula transparente. Con aceite de argán.",
  ),
  m(
    "Elegance",
    "After shave Elegance",
    "Elegance",
    CO,
    160,
    "assets/img/products/elegance/after-shave-elegance/after-shave-elegance.png", // Foto: 
    "Gel para después del rasurado o corte. Hidratante, para todo tipo de piel. Contenido 500 ml.\n\nAromas disponibles:\n- Menta\n- Aqua",
  ),
  m(
    "Elegance",
    "Exfoliante facial Elegance",
    "Elegance",
    CF,
    180,
    "assets/img/products/elegance/exfoliante-elegance/exfoliante-elegance.png", // Foto: 
    "Exfoliante facial con aroma a menta. Contenido 500 gramos.",
  ),
  m(
    "Elegance",
    "Gel para cabello Moon Triple Acción",
    "Elegance",
    CG,
    100,
    "assets/img/products/elegance/gel-moon-triple-accion-elegance/gel-moon-triple-accion-elegance.png", // Foto: 
    "Gel capilar de triple acción con fijación súper fuerte, volumen extremo y brillo atractivo, con fragancia refrescante. No deja el cabello graso ni con residuos y se puede usar en todo tipo de cabello.\n\nBeneficios:\n- Fijación súper fuerte\n- Brillo duradero\n- Gran volumen\n- Sin escamas\n- Fragancia refrescante\n\nModo de empleo: dosifica en tus manos la cantidad que necesitas según el largo y estado de tu cabello y usa los dedos para extenderlo, creando el estilo deseado. Ideal para uso diario.",
  ),
  m(
    "Elegance",
    "Gel para cabello Vitamin Strong Hold",
    "Elegance",
    CG,
    100,
    "assets/img/products/elegance/gel-vitamin-strong-hold-elegance/gel-vitamin-strong-hold-elegance.png", // Foto: 
    "Gel infundido con vitamina Pro-VB5 para proteger el cabello y enriquecerlo con minerales. Fijación fuerte mientras protege tu cabello de daños, espesa los mechones y mejora su brillo.\n\nBeneficios:\n- Protege, espesa y da brillo al cabello\n- Brillo duradero\n- Gran volumen y aspecto natural\n- Fórmula sin escamas\n- Fragancia refrescante\n\nModo de empleo: dosifica en tus manos la cantidad que necesitas según el largo y estado de tu cabello y usa los dedos para extenderlo, creando el estilo deseado.",
  ),
  m(
    "Elegance",
    "Gel + Color Black Elegance",
    "Elegance",
    CG,
    100,
    "assets/img/products/elegance/gel-color-black-elegance/gel-color-black-elegance.png", // Foto: 
    "Gel para cabello que da un retoque instantáneo de color negro. Ideal para cubrir canas. Contenido 250 ml.",
  ),
  // ===== LEVEL 3 =====
  // Fotos en assets/img/products/level-3/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Level 3",
    "Polvo de textura Level 3",
    "L3VEL3",
    PO,
    170,
    "assets/img/products/level-3/polvo-de-textura-level-3/polvo-de-textura-level-3.jpg",
    "Polvo para volumen de fijación ligera. Crea peinados perfectos con volumen adicional y un acabado mate moderno.\n\nYa sea que busques un estilo natural o vanguardista, ofrece el equilibrio perfecto entre fijación y flexibilidad para crear el peinado perfecto en todo momento.",
  ),
  m(
    "Level 3",
    "After shave (Colonia) Level 3",
    "L3VEL3",
    CO,
    170,
    "assets/img/products/level-3/after-shave-colonia-level-3/after-shave-colonia-level-3.png",
    "Especialmente formulada para todo tipo de piel, proporciona alivio instantáneo después del afeitado al hidratar y refrescar la piel. Sus ingredientes protegen la piel de raspaduras y cortes, y ayudan a reducir el enrojecimiento, la inflamación y la sequedad. La piel se sentirá más tersa, suave y revitalizada.\n\nIdeal para usar en casa o en la barbería. Fragancias únicas, duraderas y agradables.\n\nAromas disponibles:\n- Aqua (azul)\n- Midnight (gris)\n- Royale (morado)",
    1,
  ),
  m(
    "Level 3",
    "Matte Putty Level 3",
    "L3VEL3",
    PM,
    160,
    "assets/img/products/level-3/matte-putty-level-3/matte-putty-level-3.jpg",
    "Putty paste con fijación media que ofrece un equilibrio entre control y flexibilidad, con acabado mate. Fácil de aplicar y de volver a trabajar durante todo el día. Apto para todo tipo de cabello.\n\nContiene cera de abeja, palmitato de etilhexilo y bentonita, que dan al cabello estructura, control y un moderno acabado mate, dejándolo suave y manejable.",
    1,
  ),
  m(
    "Level 3",
    "Bifásico Level 3",
    "L3VEL3",
    "Tratamientos capilares",
    160,
    "assets/img/products/level-3/bifasico-level-3/bifasico-level-3.png",
    "Spray desenredante bifásico sin enjuague que suaviza y acondiciona el cabello, aportando suavidad, brillo e hidratación sin dejar residuos ni sensación pegajosa.\n\nEnriquecido con aceite de karité, extracto de coco, queratina y vitamina E, hidrata y nutre cada hebra para reducir la rotura y el frizz. Perfecto para todo tipo de cabello, especialmente seco o dañado.\n\nModo de empleo: úsalo sobre el cabello húmedo o seco para refrescar, desenredar y proteger.",
  ),
  m(
    "Level 3",
    "Capa Level 3 con cuello de goma",
    "L3VEL3",
    "Capas con cuello de goma",
    450,
    ["assets/img/products/level-3/capa-con-cuello-de-goma-level-3/capa-con-cuello-de-goma-level-3.png", "assets/img/products/level-3/capa-con-cuello-de-goma-level-3/capa-con-cuello-de-goma-level-3-01.png"],
    "Capa profesional de poliéster, perfecta para cortar, peinar, teñir o hacer la permanente. Resistente al agua, al color, al jabón y a los productos químicos de peluquería.\n\nLigera y cómoda, con un anillo de goma en el cuello que evita que la ropa se manche y que el cabello se meta debajo del cuello.",
  ),
  m(
    "Level 3",
    "Polvo Level 3 dust",
    "L3VEL3",
    PO,
    170,
    "", // Foto: assets/img/products/level-3/polvo-dust-level-3/polvo-dust-level-3.png
    "Polvo de textura y volumen. Fácil de aplicar y distribuir, brinda un acabado mate sin residuos aceitosos ni grasos.\n\nMejora la textura aplicándolo sobre el cabello seco, o agrega fijación y volumen usándolo sobre el cabello húmedo. Ideal para barberos, pero tan simple que puede usarse en casa.",
  ),
  m(
    "Level 3",
    "Pasta Level 3",
    "L3VEL3",
    PM,
    160,
    "", // Foto: assets/img/products/level-3/pasta-level-3/pasta-level-3.png
    "Pasta con acabado mate que proporciona una fijación funcional y no pegajosa durante todo el día, con volumen y sin brillo artificial.\n\nSus ingredientes con queratina ayudan a reducir el encrespamiento, mejoran la fuerza del cabello y ayudan a reparar el cabello dañado.",
  ),
  m(
    "Level 3",
    "Pomada Amarilla Level 3",
    "L3VEL3",
    PA,
    160,
    "", // Foto: assets/img/products/level-3/pomada-amarilla-level-3/pomada-amarilla-level-3.png
    "Pomada con infusión de queratina que proporciona brillo duradero y fijación extrema. Fórmula sin residuos, ligera y limpia, con un agradable aroma.\n\nRemodela tu peinado durante el día, sin frizz ni sensación de pesadez.",
  ),
  m(
    "Level 3",
    "Crema para peinar Level 3",
    "L3VEL3",
    CG,
    160,
    "assets/img/products/level-3/crema-para-peinar-level-3/crema-para-peinar-level-3.png",
    "Crema formadora no pegajosa, sin residuos y flexible, de fijación media, que mantiene el peinado en su lugar todo el día con un aspecto natural. Agrega volumen y te permite renovar el peinado durante el día.",
  ),
  m(
    "Level 3",
    "Crema brillante Level 3",
    "L3VEL3",
    CG,
    160,
    "assets/img/products/level-3/crema-brillante-level-3/crema-brillante-level-3.png",
    "",
  ),
  m(
    "Level 3",
    "Exfoliante Level 3 Durazno",
    "L3VEL3",
    CF,
    180,
    "", // Foto: assets/img/products/level-3/exfoliante-durazno-level-3/exfoliante-durazno-level-3.png
    "Exfoliante facial que elimina eficazmente la suciedad, el exceso de grasa, los puntos negros y las impurezas. Su fórmula natural con partículas de durazno brinda una exfoliación suave pero eficaz para una piel limpia, tersa y luminosa. Para todo tipo de piel.",
  ),
  m(
    "Level 3",
    "Exfoliante de barro Level 3",
    "L3VEL3",
    CF,
    180,
    "", // Foto: assets/img/products/level-3/exfoliante-de-barro-level-3/exfoliante-de-barro-level-3.png
    "Exfoliante formulado para eliminar eficazmente la suciedad, el exceso de grasa, los puntos negros y las impurezas. Rejuvenece el rostro eliminando células muertas y promoviendo la regeneración celular.\n\nDeja la piel suave y con brillo natural gracias a sus ingredientes naturales. Reduce la aparición de acné y la obstrucción de los poros.",
  ),
  m(
    "Level 3",
    "Shaving Gel Aqua Level 3",
    "L3VEL3",
    "Afeitado",
    170,
    "", // Foto: assets/img/products/level-3/shaving-gel-aqua-level-3/shaving-gel-aqua-level-3.png
    "Gel de afeitado para mayor comodidad y precisión. Rinde más que las cremas de afeitar y crea una capa protectora entre la navaja y la piel que la protege de cortes y quemaduras.\n\nFórmula transparente y sin espuma para ver por dónde pasa la navaja.",
  ),
  m(
    "Level 3",
    "Crema para Rizos Level 3",
    "L3VEL3",
    "Tratamientos capilares",
    170,
    "assets/img/products/level-3/crema-para-rizos-level-3/crema-para-rizos-level-3.png",
    "Crema hidratante que define tus rizos manteniéndolos suaves y lisos. Fórmula ligera y nutritiva que aporta cuerpo y brillo sin apelmazar ni dejar residuos.\n\nCon aceites de coco, jojoba y aguacate, manteca de karité y provitamina B5: hidrata los rizos secos, controla el encrespamiento y realza el patrón natural del rizo. Ideal para cabello rizado, ondulado y encrespado.\n\nModo de empleo: aplica sobre el cabello húmedo y peina como de costumbre.",
  ),
  m(
    "Level 3",
    "Talco Level 3",
    "L3VEL3",
    "Talcos",
    150,
    "", // Foto: assets/img/products/level-3/talco-level-3/talco-level-3.png
    "Talco ultra fino. Contenido 250 gramos.",
  ),
  m(
    "Level 3",
    "Bálsamo para barba y bigote Level 3",
    "L3VEL3",
    "Cuidado de barba",
    120,
    "assets/img/products/level-3/balsamo-para-barba-y-bigote-level-3/balsamo-para-barba-y-bigote-level-3.png",
    "Beard balm con ingredientes naturales que hidratan y nutren para una barba suave y bien cuidada. Domina el vello rebelde, reduce la picazón y acondiciona la piel para prevenir la sequedad y la descamación.\n\nFijación media para peinar fácilmente sin dejar la barba rígida.",
  ),
  m(
    "Level 3",
    "Mascarilla Rosa Level 3",
    "L3VEL3",
    CF,
    180,
    "", // Foto: assets/img/products/level-3/mascarilla-rosa-level-3/mascarilla-rosa-level-3.png
    "Mascarilla facial rosa enriquecida con arcilla de caolín. Limpia, equilibra y restaura la piel; desbloquea los poros y elimina puntos negros y células muertas.\n\nCon extractos de semillas naturales y efecto antienvejecimiento. Absorbe el exceso de grasa para un cutis más claro y terso.",
  ),
  m(
    "Level 3",
    "Aceite para barba Level 3",
    "L3VEL3",
    "Cuidado de barba",
    180,
    "assets/img/products/level-3/aceite-para-barba-level-3/aceite-para-barba-level-3.png",
    "Beard oil con una mezcla de aceites naturales que hidratan, nutren y fortalecen el vello facial, dejando la barba suave, sin enredos y con un olor increíble.\n\nEnriquecido con aceite de argán, almendra, jojoba y coco. Controla el frizz, realza el brillo y mantiene sana la piel debajo de la barba.",
  ),
  m(
    "Level 3",
    "Cera Spider Level 3",
    "L3VEL3",
    CG,
    150,
    "assets/img/products/level-3/cera-spider-level-3/cera-spider-level-3.png",
    "Spider Wax con fórmula de fibra que funciona como una telaraña, atrapando cada cabello para un control total. Fijación fuerte y duradera con flexibilidad, volumen y textura, y brillo medio.\n\nPermite moldear y remoldear con libertad. Nutre la fibra capilar, con aroma fresco y acabado limpio sin residuos.",
  ),
  m(
    "Level 3",
    "After Shave Level 3 750 ml",
    "L3VEL3",
    CO,
    220,
    "assets/img/products/level-3/after-shave-750-ml-level-3/after-shave-750-ml-level-3.png",
    "Loción after shave Level 3, presentación de 750 ml. Variedad de aromas.",
  ),
  m(
    "Level 3",
    "Papel cuello Level 3 Azul",
    "L3VEL3",
    "Papel y desechables",
    185,
    "", // Foto: assets/img/products/level-3/papel-cuello-azul-level-3/papel-cuello-azul-level-3.png
    "Paquete con 5 rollos de papel cuello color azul.",
  ),
  m(
    "Level 3",
    "Serum para cabello Level 3",
    "L3VEL3",
    "Tratamientos capilares",
    220,
    "", // Foto: assets/img/products/level-3/serum-para-cabello-level-3/serum-para-cabello-level-3.png
    "Hair serum infundido con aloe vera que hidrata y nutre cada hebra sin dejarla pesada ni apelmazada. Reduce el encrespamiento y sella las puntas abiertas para un acabado brillante y sedoso. Fórmula ligera, no grasa, con fragancia refrescante.\n\nModo de empleo: úsalo sobre cabello húmedo antes del secador, o sobre cabello seco antes y después del alisado.",
  ),
  m(
    "Level 3",
    "Hair Jam Level 3",
    "L3VEL3",
    CG,
    150,
    "", // Foto: assets/img/products/level-3/hair-jam-level-3/hair-jam-level-3.png
    "Hair Jam de 250 ml con control potente y brillo visible. Su consistencia densa permite un moldeado preciso para looks pulidos y duraderos como slick back, side part o peinados con ondas definidas.\n\nHidrata ligeramente mientras sujeta firmemente, domando incluso el cabello más rebelde. Fijación remodelable y brillo lustroso.",
  ),
  m(
    "Level 3",
    "Sea Salt Level 3",
    "L3VEL3",
    PO,
    170,
    "", // Foto: assets/img/products/level-3/sea-salt-level-3/sea-salt-level-3.png
    "Texturizing Salt Spray de 250 ml que aporta volumen y cuerpo con fijación ligera para un look relajado y con movimiento. Acabado mate de apariencia natural; su fórmula con aceite de ricino ayuda a hidratar. Fijación flexible que permite reajustar el peinado.",
  ),
  // ===== 4 X 4 =====
  // Fotos en assets/img/products/4x4/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "4 X 4",
    "Papel cuello blanco 4x4",
    "4x4",
    "Papel y desechables",
    125,
    "assets/img/products/4x4/papel-cuello-blanco-4x4/papel-cuello-blanco-4x4.jpg",
    "Papel cuello color blanco. Contenido 5 rollos, 500 hojas.",
  ),
  m(
    "4 X 4",
    "Filos Pro Edge Platinum 4x4",
    "4x4",
    "Navajas y filos",
    100,
    "assets/img/products/4x4/filos-pro-edge-platinum-4x4/filos-pro-edge-platinum-4x4.jpg",
    "Caja con 100 navajas Pro Edge Platinum. Doble filo. Calidad premium.",
  ),
  m(
    "4 X 4",
    "Pomada 4x4",
    "4x4",
    PA,
    75,
    "assets/img/products/4x4/pomada-4x4/pomada-4x4.jpg",
    "Pomada para cabello aroma sandía, ideal para un estilo formal y bien definido. Fijación alta que te permite moldear y remoldear en cualquier momento del día.\n\nFórmula dermatológicamente probada, suave con tu piel. Tarro de 100 g. Perfecta para un acabado pulido y duradero.",
  ),
  m(
    "4 X 4",
    "Cera en polvo 4x4",
    "4x4",
    PO,
    100,
    "", // Foto: assets/img/products/4x4/cera-en-polvo-4x4/cera-en-polvo-4x4.png
    "Estiliza y moldea sin necesidad de humedecer el cabello. Para un look con mayor volumen, elegante o relajado. Contenido 20 gramos.\n\nModo de uso: aplica una pequeña cantidad sobre el cabello seco y moldea.",
  ),
  m(
    "4 X 4",
    "Cera para cabello 4x4",
    "4x4",
    CG,
    50,
    "", // Foto: assets/img/products/4x4/cera-para-cabello-4x4/cera-para-cabello-4x4.png
    "Cera para cabello marca 4x4. Contenido 100 g.",
  ),
  m(
    "4 X 4",
    "Gel para afeitar Off Road 1 kg 4x4",
    "4x4",
    "Afeitado",
    160,
    "", // Foto: assets/img/products/4x4/gel-para-afeitar-off-road-1-kg-4x4/gel-para-afeitar-off-road-1-kg-4x4.png
    "Gel para afeitar profesional Off Road aroma menta, 1000 ml. Ideal para un afeitado sin molestias y con buen deslizamiento de la rasuradora.",
  ),
  m(
    "4 X 4",
    "Pomada 4x4 fijación alta",
    "4x4",
    PA,
    50,
    "", // Foto: assets/img/products/4x4/pomada-fijacion-alta-4x4/pomada-fijacion-alta-4x4.png
    "Pomada para el cabello que modela y ayuda a realizar diferentes peinados. Resistente a la humedad, con fijación alta y brillo natural.",
  ),
  m(
    "4 X 4",
    "Exfoliante 4x4",
    "4x4",
    CF,
    100,
    "", // Foto: assets/img/products/4x4/exfoliante-4x4/exfoliante-4x4.png
    "Crema exfoliante que elimina células muertas del rostro, dejando la piel suave con una limpieza profunda. Contenido 200 gramos.",
  ),
  m(
    "4 X 4",
    "Mascarilla negra 4x4",
    "4x4",
    CF,
    70,
    "", // Foto: assets/img/products/4x4/mascarilla-negra-4x4/mascarilla-negra-4x4.png
    "Purifica la piel, elimina impurezas y puntos negros. Contenido 90 gramos.\n\nModo de uso: aplica la mascarilla sobre el rostro lavado y déjala actuar de 15 a 20 minutos. Una vez seca, retírala desprendiéndola del rostro.",
  ),
  m(
    "4 X 4",
    "Polvo para volumen 4x4",
    "4x4",
    PO,
    100,
    "assets/img/products/4x4/polvo-para-volumen-4x4/polvo-para-volumen-4x4.jpg",
    "Da volumen y textura al cabello, dejándolo remoldeable. Contenido 20 gramos.",
  ),
  m(
    "4 X 4",
    "Pomada 4x4 Roja",
    "4x4",
    PA,
    75,
    "", // Foto: assets/img/products/4x4/pomada-roja-4x4/pomada-roja-4x4.png
    "Pomada aroma sandía para un estilo atrevido, firme y con acabado brillante. Su textura ligera se distribuye uniformemente, con acabado profesional sin residuos ni sensación pegajosa. Para todo tipo de cabello, en estilos clásicos y modernos.\n\nBeneficios:\n- Fijación alta que garantiza control y duración\n- Brillo intenso que realza tu estilo\n- Textura ligera y fácil de aplicar\n- No deja residuos ni sensación grasosa\n- Ideal para uso diario",
  ),
  m(
    "4 X 4",
    "Shampoo CBD + Minoxidil 4x4",
    "4x4",
    "Tratamientos capilares",
    100,
    "", // Foto: assets/img/products/4x4/shampoo-cbd-minoxidil-4x4/shampoo-cbd-minoxidil-4x4.png
    "Shampoo anticaída de 500 g con CBD de cáñamo y minoxidil para el crecimiento del cabello.\n\nBeneficios:\n- Acelera el crecimiento del cabello\n- Relajante capilar\n- Fortalece el cabello\n\nModo de empleo: aplica sobre el cabello húmedo, deja actuar al menos 5 minutos y enjuaga con agua.",
  ),
  m(
    "4 X 4",
    "After shave 4x4",
    "4x4",
    CO,
    120,
    "", // Foto: assets/img/products/4x4/after-shave-4x4/after-shave-4x4.png
    "Loción after shave marca 4x4. Contenido 400 ml.\n\nAromas disponibles:\n- Gold\n- King Blue\n- Rojo metálico\n- Power Green",
  ),
  m(
    "4 X 4",
    "Talco 4x4 Invencible",
    "4x4",
    "Talcos",
    100,
    "", // Foto: assets/img/products/4x4/talco-invencible-4x4/talco-invencible-4x4.png
    "Talco ultrafino versión Invencible, fragancia Invictus. Contenido 255 gramos.",
  ),
  m(
    "4 X 4",
    "Talco 4x4 Azul",
    "4x4",
    "Talcos",
    100,
    "", // Foto: assets/img/products/4x4/talco-azul-4x4/talco-azul-4x4.png
    "Talco ultrafino que evita la irritación y la humedad. Fragancia única para labores de barbería.",
  ),
  m(
    "4 X 4",
    "Aceite para máquina 4x4",
    "4x4",
    "Mantenimiento de máquinas",
    75,
    "", // Foto: assets/img/products/4x4/aceite-para-maquina-4x4/aceite-para-maquina-4x4.png
    "Reduce el desgaste de las cuchillas y ayuda a aumentar su durabilidad. Contenido 118.3 ml.",
  ),
  m(
    "4 X 4",
    "Cera telaraña 4x4",
    "4x4",
    CG,
    90,
    "", // Foto: assets/img/products/4x4/cera-telarana-4x4/cera-telarana-4x4.png
    "Para acomodar y controlar perfectamente tu cabello con un estilo formal, con efecto telaraña al colocarla en tus manos. Remoldeable cuando quieras. Contenido 100 gramos.\n\nModo de uso: distribuye en tus manos, aplica en cabello seco, moldea y peina.",
  ),
  m(
    "4 X 4",
    "Aceite para barba 4x4",
    "4x4",
    "Cuidado de barba",
    100,
    "", // Foto: assets/img/products/4x4/aceite-para-barba-4x4/aceite-para-barba-4x4.png
    "Aceite para barba profesional de 30 ml para una barba suave, hidratada y llena de vitalidad.\n\nBeneficios:\n- Hidratación profunda que elimina la sequedad y el picor\n- Fortalece los folículos pilosos\n- Protección y suavidad contra agentes externos\n- Barba más suave, manejable y brillante, con fragancia masculina y fresca",
  ),
  m(
    "4 X 4",
    "Enfriador 4x4",
    "4x4",
    "Mantenimiento de máquinas",
    120,
    "", // Foto: assets/img/products/4x4/enfriador-4x4/enfriador-4x4.png
    "Enfriador para máquinas. Enfría, lubrica, desinfecta, limpia y protege contra la corrosión. Contenido 400 gramos.",
  ),
  m(
    "4 X 4",
    "Pomada 4x4 Extra+Firme",
    "4x4",
    PA,
    50,
    "", // Foto: assets/img/products/4x4/pomada-extra-firme-4x4/pomada-extra-firme-4x4.png
    "Moldeador de fijación extra firme para realzar y definir la textura del cabello. Realza el brillo natural, es remoldeable, se retira fácilmente con shampoo y agua y no mancha la ropa. Contenido 100 gramos.",
  ),
  m(
    "4 X 4",
    "Pasta 4x4",
    "4x4",
    PM,
    75,
    "", // Foto: assets/img/products/4x4/pasta-4x4/pasta-4x4.png
    "Término intermedio entre cera y pomada, con acabado mate. Estiliza tu cabello de la forma más fácil.",
  ),
  m(
    "4 X 4",
    "Bálsamo para aerógrafo 4x4",
    "4x4",
    "Aerógrafo",
    100,
    "", // Foto: assets/img/products/4x4/balsamo-para-aerografo-4x4/balsamo-para-aerografo-4x4.png
    "Bálsamo negro líquido profesional diseñado para usarse con aerógrafo. Cubre espacios no deseados y define con precisión los contornos del corte para un acabado impecable. Envase de 135 ml.",
  ),
  m(
    "4 X 4",
    "Minoxidil 4x4",
    "4x4",
    "Tratamientos capilares",
    100,
    "", // Foto: assets/img/products/4x4/minoxidil-4x4/minoxidil-4x4.png
    "Minoxidil al 5%, tratamiento eficaz para combatir la caída del cabello y fomentar el crecimiento capilar.",
  ),
  m(
    "4 X 4",
    "Cera Telaraña Plátano 4x4",
    "4x4",
    CG,
    90,
    "", // Foto: assets/img/products/4x4/cera-telarana-platano-4x4/cera-telarana-platano-4x4.png
    "Efecto telaraña para dar textura al instante. Ideal para peinados modernos y barberías.\n\nBeneficios:\n- Fijación alta que dura todo el día\n- Brillo natural sin verse exagerado\n- Remoldeable para ajustar el peinado\n- Nuevo aroma a plátano",
  ),
  // ===== TOK =====
  // Fotos en assets/img/products/tok/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Tok",
    "TOK Exfoliante facial",
    "TOK",
    CF,
    160,
    "assets/img/products/tok/exfoliante-facial-tok/exfoliante-facial-tok.jpg",
    "Microexfoliante para el rostro / Estimula la renovación celular / Para todo tipo de piel.\n\nBeneficios:\n\nNos ayuda principalmente a renovar la piel eliminando células muertas, nos ayuda a sentir la piel más fina con un aspecto más uniforme, favorece la penetración de activos y activa la circulación facial, dejando una sensación de frescura.\n\nVentajas:\n\nEs un exfoliante suave para todo tipo de piel, cuenta con gránulos de origen vegetal como la cáscara de nuez y con aroma a mentol.\n\nCaracterísticas:\n\nExfoliante mecánico con gránulos de cáscara de nuez.\n\nRecomendaciones:\n\nAplicar una cantidad generosa para cubrir el rostro. Efectuar un ligero masaje en rostro y retirar con bastante agua. Preferentemente utilizarlo 3 veces por semana. 250ml.",
  ),
  m(
    "Tok",
    "TOK Protector Solar",
    "TOK",
    CF,
    170,
    "assets/img/products/tok/protector-solar-tok/protector-solar-tok.jpg",
    "Protector solar 3 en 1 que hidrata la piel, protege de los rayos solares y disminuye líneas de expresión / Protección libre de aceite / con Ácido Hialurónico.\n\nBeneficios:\n\nBloqueador 3 en 1 que hidrata la piel, protege de los rayos solares y disminuye líneas de expresión. Su fórmula con ácido hialurónico proporciona hidratación y trabaja en brindar agua en las cavidades intercelulares para desvanecer arrugas.\n\nVentajas:\n\nCuida tu piel de los rayos solares, retardando envejecimiento oxidativo originado por el sol, también mantendrás tu piel hidratada para disminuir las agresiones externas como contaminación, micropartículas y radicales libres, así como rellenar líneas de expresión existentes.\n\nCaracterísticas:\n\nTextura ligera para la piel.\n\nRecomendaciones:\n\nAplica una porción para todo el rostro, extiéndelo en frente, pómulos, nariz y área de barba, suficiente para cubrir todo el rostro. Reaplicar cada 2 horas o bien tras transpirar, nadar o secarse con toalla. Uso diario. 120g.",
  ),
  m(
    "Tok",
    "TOK Facial Wash",
    "TOK",
    CF,
    160,
    "assets/img/products/tok/facial-wash-tok/facial-wash-tok.jpg",
    "Gel limpiador facial para el rostro / Pieles Grasas / Elimina el brillo del rostro.\n\nBeneficios:\n\nSu función principal es limpiar a profundidad nuestros poros, ayudando a controlar la sobreproducción de grasa que causa problemas de acné ya que nos ayuda a evitar proliferación de bacterias, su textura suave ayuda a calmar pieles lastimadas por acné calmando la rojez del rostro y sin dejar la sensación de piel acartonada.\n\nVentajas:\n\nLimpiador facial libre de jabón, no tiene activos que dañen la piel como lo son los sulfatos y parabenos, además su envase cuenta con una tapa la cual está diseñada para dosificar perfectamente la cantidad deseada evitando desperdicios del producto y optimizando los 250 ml del producto.\n\nCaracterísticas:\n\nFundamental su uso día y noche ya que el área facial es la principal zona donde hay una sobreproducción de grasa y la grasa es el medio perfecto para la proliferación de bacterias que causan acné, además de tener el aspecto de cara brillosa.\n\nRecomendaciones:\n\nAplicar el Facial Wash PIELES GRASAS sobre el rostro mojado. Realizar un masaje con las yemas de los dedos hasta formar una ligera espuma. Después retirar con abundante agua y secar suavemente. Usar por la mañana y por la noche. 250ml.",
  ),
  m(
    "Tok",
    "TOK Pomada Básica",
    "TOK",
    PA,
    100,
    "", // Foto: assets/img/products/tok/pomada-basica-tok/pomada-basica-tok.png
    "Beneficios:\n\nFórmula base agua. Diseñada para estilizar, modelar y dar flexibilidad al peinado, manteniendo una excelente fijación con terminado casual.\n\nVentajas:\n\nFórmula esencial para tu estilo cotidiano con distintivos como fijación fuerte, aspecto natural y fragancia exclusiva para el hombre.\n\nCaracterísticas:\n\nSin residuos blancos ni grasos, favoreciendo la definición de tu estilo. Contenido 150 gramos.",
  ),
  m(
    "Tok",
    "TOK Espuma Capilar",
    "TOK",
    "Tratamientos capilares",
    200,
    "", // Foto: assets/img/products/tok/espuma-capilar-minoxidil-tok/espuma-capilar-minoxidil-tok.png
    "Minoxidil Foam 5%.\n\nBeneficios:\n\nLoción en espuma, indicada para frenar la caída y generar estimulación en los folículos capilares provocando crecimiento y generación de nuevo cabello.\n\nVentajas:\n\nSu formato en Foam o Espuma facilita su aplicación ya que no se enjuaga y no escurre, logrando impregnar mayor número de folículos en cada aplicación, de esta forma garantiza una mayor irrigación en todo el cuero cabelludo.\n\nCaracterísticas:\n\nFórmula minimalista, a base de un concentrado al 5% de minoxidil, con agentes hidratantes y tensoactivos que facilitan la absorción inmediata en el cuero cabelludo\n\nModo de uso:\n\nAplicar en cabello limpio y semihúmedo, de forma cotidiana, 2 veces al día, mañana y noche, sin enjuagar, durante un periodo mínimo de 90 días.\n\nRecomendaciones:\n\nUtilizar Shampoo anticaída Tok para lograr mayor eficacia durante el tratamiento. 165 ml.",
  ),
  m(
    "Tok",
    "TOK Shampoo anti caída (Con Minoxidil)",
    "TOK",
    "Tratamientos capilares",
    160,
    "", // Foto: assets/img/products/tok/shampoo-anti-caida-minoxidil-tok/shampoo-anti-caida-minoxidil-tok.png
    "Auxiliar en el tratamiento de la caída de cabello.\n\nBeneficios:\n\nFormulado especialmente para el hombre con tendencia a la caída de cabello. Proporciona una limpieza del cuero cabelludo selectiva sin descamar, nutriendo los folículos capilares.\n\nVentajas:\n\nShampoo suave de fórmula única que combina minoxidil, mentol y agentes naturales para brindar un tratamiento integral en la rutina de limpieza en circunstancias de problemas de caída.\n\nCaracterísticas:\n\nIncorpora frutos y esencias naturales como ortiga, árbol del té, raíz de amole, cola de caballo al minoxidil y al mentol para crear un sistema de limpieza profunda y eficaz\n\nRecomendaciones:\n\nVierte la cantidad suficiente para cubrir tu cuero cabelludo y proporciona un masaje con las yemas de dedos para favorecer la microcirculación. Déjalo actuar durante 1 o 2 minutos, después enjuaga. Para lograr mayor eficacia es ideal alternar con TOK Shampoo de Bergamota. 500ml.",
  ),
  m(
    "Tok",
    "TOK Shampoo Zero Caspa",
    "TOK",
    "Tratamientos capilares",
    160,
    "", // Foto: assets/img/products/tok/shampoo-zero-caspa-tok/shampoo-zero-caspa-tok.png
    "Beneficios:\n\nBrinda una limpieza profunda altamente efectiva en el control y tratamiento de la caspa.\n\nVentajas:\n\nTratamiento que erradica los tres factores que propician la caspa: el exceso de grasa, disminución de sensibilidad y control microbiano.\n\nCaracterísticas:\n\nFórmula adaptada con Climbazole que es uno de los activos más reconocidos en Dermatología para controlar y eliminar el microbio (malassezia) causante de este padecimiento.\n\nRecomendaciones:\n\nSe recomienda el uso diario hasta controlar la caspa y posteriormente su uso de 2 a 3 veces por semana para mantenimiento. Cuando se trata de una caspa grasa se sugiere alternar TOK Zero Caspa y TOK Control Grasa para lograr mejores resultados. 500ml.",
  ),
  m(
    "Tok",
    "Aceite de Chía para Barba TOK",
    "TOK",
    "Cuidado de barba",
    160,
    "", // Foto: assets/img/products/tok/aceite-de-chia-para-barba-tok/aceite-de-chia-para-barba-tok.png
    "SERUM BARBA / Estilizado y reparador de barba y bigote.\n\nBeneficios:\n\nAblanda el vello facial, reduce el picor y nutre los folículos pilosos para que tu barba crezca sana e hidratada.\n\nVentajas:\n\nHecho a base de aceite emoliente que aporta hidratación y brillo a tu barba gracias a las propiedades de la chía.\n\nCaracterísticas:\n\nExtraído en frío por lo que conserva todas las propiedades de la chía la cual se ha demostrado que tiene un alto contenido de antioxidantes, además de ácidos grasos y omegas.\n\nRecomendaciones:\n\nAplicar una cantidad suficiente para impregnar la barba y/o bigote, después estilizar como de costumbre. 50 ml.",
  ),
  m(
    "Tok",
    "TOK Ácido Hialurónico (Serum)",
    "TOK",
    CF,
    190,
    "", // Foto: assets/img/products/tok/acido-hialuronico-serum-tok/acido-hialuronico-serum-tok.png
    "Suero de Ácido Hialurónico puro / Antifatiga / Regeneración celular extrema. Conjuga moléculas de alta potencia para trabajar en la zona de la epidermis, de esta manera favorecer la hidratación de la piel, desvanecer líneas de expresión y brindar un aspecto de piel sin fatiga.\n\nBeneficios:\n\nMantiene una buena hidratación de la piel, incluso en sus capas más profundas, de modo que se mantiene el grosor, el volumen y la tersura de la misma. Sirve para evitar o retrasar la aparición de arrugas y también tratarlas cuando éstas están en su fase más incipiente de aparición.\n\nVentajas:\n\nLas moléculas de baja potencia trabajarán en la zona de la Dermis, logrando estimular las fibras de elastina y de colágeno desde el interior, de esta manera el aspecto que toma en la piel será de mayor vitalidad, más fortaleza y volumen.\n\nRecomendaciones:\n\nAplicar en el rostro limpio, día y noche, antes de aplicar cualquier otro producto, ya sea bloqueador u otro tratamiento facial, ideal para cualquier tipo de piel y de cualquier edad. 30ml.",
  ),
  m(
    "Tok",
    "TOK Pomada Mate",
    "TOK",
    PA,
    100,
    "", // Foto: assets/img/products/tok/pomada-mate-tok/pomada-mate-tok.png
    "Beneficios:\n\nPomade para cabello base agua que logra un aspecto mate y una fijación alta.\n\nVentajas:\n\nTextura ligera, no grasa, aspecto sin brillo y degradándose durante el día sin perder su fijación.\n\nCaracterísticas:\n\nGracias a su formulación exclusiva lo define como un verdadero pomade matte logrando una degradación y permitiendo mantener su alta fijación, su estilizado y su aroma durante todo el día.\n\nRecomendaciones:\n\nAplicar en cabello semihúmedo a seco. Contenido 150 gramos.",
  ),
  m(
    "Tok",
    "TOK Polvo de textura",
    "TOK",
    PO,
    120,
    "", // Foto: assets/img/products/tok/polvo-de-textura-tok/polvo-de-textura-tok.png
    "Powder Texture.\n\nBeneficios:\n\nAporta cuerpo y volumen al cabello sin apelmazarlo, ideal para estilos con textura. Permite moldear el cabello con un acabado natural, mate y sin rigidez. Absorbe el exceso de grasa, dejando un look fresco y sin brillo.\n\nVentajas:\n\nFórmula ligera, no pegajosa, sin residuos visibles ni sensación pesada en el cabello. Mantiene el peinado intacto durante todo el día sin necesidad de retoques constantes. Funciona en cabellos finos, gruesos, lacios o rizados, adaptándose a diferentes estilos.\n\nCaracterísticas:\n\nProporciona textura y volumen absorbiendo la grasa para un efecto mate. Actúa como fijador flexible, permitiendo moldear el cabello sin que se sienta rígido. Deja un aroma fresco y agradable sin ser invasivo. 50g.",
  ),
  m(
    "Tok",
    "TOK 6 Pack Minoxidil Loción Capilar",
    "TOK",
    "Tratamientos capilares",
    700,
    "", // Foto: assets/img/products/tok/6-pack-minoxidil-locion-capilar-tok/6-pack-minoxidil-locion-capilar-tok.png
    "Paquete de 6 Loción Minoxidil de 60ml cada uno.",
  ),
  m(
    "Tok",
    "TOK Grooming & Tratamiento Capilar",
    "TOK",
    "Tratamientos capilares",
    130,
    "", // Foto: assets/img/products/tok/grooming-tratamiento-capilar-tok/grooming-tratamiento-capilar-tok.png
    "Grooming & termoprotector marca Tok. Contenido 300 ml.",
  ),
  m(
    "Tok",
    "TOK Minoxidil en Gel para Barba",
    "TOK",
    "Cuidado de barba",
    160,
    "", // Foto: assets/img/products/tok/minoxidil-en-gel-para-barba-tok/minoxidil-en-gel-para-barba-tok.png
    "Minoxidil en gel ideal para uso en barba por su fórmula en gel que seca de forma rápida. Contenido 50 ml.\n\nModo de uso:\n\nAplique 2-3 porciones en la mano y frote en la zona de",
  ),
  m(
    "Tok",
    "TOK Loción Capilar Minoxidil",
    "TOK",
    "Tratamientos capilares",
    120,
    "", // Foto: assets/img/products/tok/locion-capilar-minoxidil-tok/locion-capilar-minoxidil-tok.png
    "Tratamiento Loción capilar marca TOK. Ideal para aplicación en cabello. Contenido 60 ml.",
  ),
  m(
    "Tok",
    "TOK Pomada Original",
    "TOK",
    PA,
    100,
    "", // Foto: assets/img/products/tok/pomada-original-tok/pomada-original-tok.png
    "Tok Pomada Original. Efecto semi mate. Aroma clásico. Contenido 120 gramos.",
  ),
  m(
    "Tok",
    "TOK Coco Pomade",
    "TOK",
    PA,
    100,
    "", // Foto: assets/img/products/tok/coco-pomade-tok/coco-pomade-tok.png
    "Pomada Tok. Aroma Coco. Contenido 120 gramos. Fijación Media. Base agua. Efecto brillo. Serie Lment.",
  ),
  m(
    "Tok",
    "TOK Mascarilla Dorada",
    "TOK",
    CF,
    160,
    "", // Foto: assets/img/products/tok/mascarilla-dorada-tok/mascarilla-dorada-tok.png
    "GOLD MASK con Colágeno.\n\nBeneficios:\n\nComplemento de tu Rutina Facial, logrando una grata experiencia en tu rostro, al ser una mascarilla que trabaja en disminuir los signos de cansancio.\n\nVentajas:\n\nMascarilla de efecto Peel Off, orientada para desaparecer los signos de la edad, permitiendo la hidratación y el aumento de colágeno en la piel.\n\nCaracterísticas:\n\nMascarilla dorada adicionada con Colágeno hidrolizado para su absorción tópica, en combinación con el ácido Hialurónico, para favorecer la apariencia de la piel. Contenido 350 gramos.",
  ),
  m(
    "Tok",
    "TOK Mascarilla Negra",
    "TOK",
    CF,
    160,
    "", // Foto: assets/img/products/tok/mascarilla-negra-tok/mascarilla-negra-tok.png
    "ELIMINADOR DE PUNTOS NEGROS / MÁSCARA NEGRA.\n\nBeneficios:\n\nAyuda a retirar los puntos negros dejando la piel sin obstrucciones y libre de impurezas, gracias a su principal ingrediente que es carbón activado.\n\nVentajas:\n\nEste producto viene a completar la rutina del cuidado facial del hombre. Testado dermatológicamente y aprobado para todos los tipos de piel.\n\nCaracterísticas:\n\nFácil aplicación con tecnología de retiro peel off.\n\nRecomendaciones:\n\nAplicar una capa ligera de manera uniforme por el rostro, esperar 20 min hasta que seque por completo. Después retirarla desprendiendo de manera cuidadosa. Lavar el rostro para eliminar los residuos. Contenido 350 gramos.",
  ),
  // ===== ONE RELIGION =====
  // Fotos en assets/img/products/one-religion/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "One Religion",
    "Cera One Religion YAMI",
    "One Religion",
    CG,
    80,
    "assets/img/products/one-religion/cera-yami-one-religion/cera-yami-one-religion.jpg",
    "Cera para cabello. Efecto brillo. Contenido 150 gramos.",
    1,
  ),
  m(
    "One Religion",
    "After Shave One Religion KENJI",
    "One Religion",
    CO,
    130,
    "assets/img/products/one-religion/after-shave-kenji-one-religion/after-shave-kenji-one-religion.jpg",
    "Loción para después del corte o rasurado. Marca One Religion. Contenido 400 ml.",
  ),
  m(
    "One Religion",
    "Shaving Gel One Religion SAKURA",
    "One Religion",
    "Afeitado",
    150,
    "assets/img/products/one-religion/shaving-gel-sakura-one-religion/shaving-gel-sakura-one-religion.jpg",
    "Gel para afeitar. Marca One Religion. Contenido 1 litro.",
  ),
  m(
    "One Religion",
    "Shaving Gel One Religion GUREN",
    "One Religion",
    "Afeitado",
    150,
    "", // Foto: assets/img/products/one-religion/shaving-gel-guren-one-religion/shaving-gel-guren-one-religion.png
    "Gel para afeitar. Marca One Religion. Contenido 1 litro.",
  ),
  m(
    "One Religion",
    "Shaving Gel One Religion AKAI",
    "One Religion",
    "Afeitado",
    150,
    "", // Foto: assets/img/products/one-religion/shaving-gel-akai-one-religion/shaving-gel-akai-one-religion.png
    "Gel para afeitar. Marca One Religion. Contenido 1 litro.",
  ),
  m(
    "One Religion",
    "Cera One Religion SAKURA",
    "One Religion",
    CG,
    80,
    "", // Foto: assets/img/products/one-religion/cera-sakura-one-religion/cera-sakura-one-religion.png
    "Cera para cabello. Efecto brillo. Contenido 150 gramos.",
  ),
  m(
    "One Religion",
    "Cera One Religion GREEN",
    "One Religion",
    CG,
    80,
    "", // Foto: assets/img/products/one-religion/cera-green-one-religion/cera-green-one-religion.png
    "Cera para cabello. Efecto brillo. Contenido 150 gramos.",
  ),
  m(
    "One Religion",
    "Cera One Religion KATANA",
    "One Religion",
    CG,
    80,
    "", // Foto: assets/img/products/one-religion/cera-katana-one-religion/cera-katana-one-religion.png
    "Cera para cabello. Efecto brillo. Contenido 150 gramos.",
  ),
  m(
    "One Religion",
    "Cera One Religion AKAI",
    "One Religion",
    CG,
    80,
    "", // Foto: assets/img/products/one-religion/cera-akai-one-religion/cera-akai-one-religion.png
    "Cera para cabello. Efecto brillo. Contenido 150 gramos.",
  ),
  m(
    "One Religion",
    "After Shave One Religion KATANA",
    "One Religion",
    CO,
    130,
    "", // Foto: assets/img/products/one-religion/after-shave-katana-one-religion/after-shave-katana-one-religion.png
    "Loción para después del corte o rasurado. Marca One Religion. Contenido 400 ml.",
  ),
  m(
    "One Religion",
    "After Shave One Religion SAKURA",
    "One Religion",
    CO,
    130,
    "", // Foto: assets/img/products/one-religion/after-shave-sakura-one-religion/after-shave-sakura-one-religion.png
    "Loción para después del corte o rasurado. Marca One Religion. Contenido 400 ml.",
  ),
  m(
    "One Religion",
    "After Shave One Religion YAMI",
    "One Religion",
    CO,
    130,
    "", // Foto: assets/img/products/one-religion/after-shave-yami-one-religion/after-shave-yami-one-religion.png
    "Loción para después del corte o rasurado. Marca One Religion. Contenido 400 ml.",
  ),
  // ===== MÁQUINAS =====
  // Fotos en assets/img/products/<marca>/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Máquinas",
    "Clipper FX One Babyliss (BLACK)",
    "BaBylissPRO",
    "Cortadoras",
    3500,
    "assets/img/products/babyliss/clipper-fx-one-black-babyliss/clipper-fx-one-black-babyliss.jpg",
    "Cuchilla ultradelgada moldeada por inyección de metal (MIM) de grafito negro (FX8022B). Depósito de aceite para una lubricación constante. Temperatura de cuchilla más baja. Ajustable a cero. Motor sin escobillas N1. Rodamientos duales para mayor eficacia. 6,800 RPM / 13,600 SPM. Batería de litio recargable e intercambiable (FXBB24). Hasta 2.5 horas de autonomía. Botón de liberación rápida de la batería. Indicador de nivel de carga LED de 4 niveles. Ajuste de longitud de corte con 5 posiciones. Carcasa completamente metálica. Apoyadedos ergonómico. Cámara de recogida de pelo con tapa removible. Empuñadura barra texturizada de metal. Tapa inferior biselada con aro para colgar oculto.",
    1,
  ),
  m(
    "Máquinas",
    "Masajeador Wmark NG-M2",
    "WMARK",
    "Masajeadores",
    1650,
    "assets/img/products/wmark/masajeador-ng-m2-wmark/masajeador-ng-m2-wmark.jpg",
    "Masajeador eléctrico WMARK NG-M2 de mano 4000MAH. Con Base de carga, Motor sin escobillas, Display grande.",
    1,
  ),
  m(
    "Máquinas",
    "Combo Babyliss Trimmer & Shaver Silver (GRIS)",
    "BaBylissPRO",
    "Combos",
    4000,
    "assets/img/products/babyliss/combo-trimmer-shaver-silver-babyliss/combo-trimmer-shaver-silver-babyliss.jpg",
    "Esta colección LimitedFX contiene una recortadora y afeitadora de litio inalámbrica/con cable, con la recortadora equipada con un motor sin escobillas de alto par y la afeitadora equipada con un potente motor rotativo. Una colección de herramientas perfecta para cortar todas las texturas del cabello con potencia, velocidad y precisión de principio a fin.",
    1,
  ),
  m(
    "Máquinas",
    "Trimmer VGR Rotatech V880T",
    "VGR",
    "Trimmers",
    1500,
    "", // Foto: assets/img/products/vgr/trimmer-rotatech-v880t-vgr/trimmer-rotatech-v880t-vgr.png
    "Material: ABS. Material de la cuchilla: Cerámica y MIM de alta dureza. Batería: 2500mAh. Tiempo de carga: 3 horas. Tiempo de uso: 200 minutos. Potencia: 7W. Motor: BLDC (sin escobillas). Rotatech: bajo nivel de ruido, más potencia, más liviano. Velocidad: 7200RPM con motor vectorial de rotor externo. 4 peines guía: 1.5-3-4.5-6mm. Tamaño de corte 0.1mm.\n\nMedidas:\n\nTamaño caja: 24 × 21 × 5 cm.\n\nIncluye:\n\n- 1x VGR V-880T\n- 1x Base de carga\n- 1x Cable USB\n- 1x Cepillo de limpieza\n- 1x Manual de usuario\n- 1x Juego de peines guía (1.5/3/4.5/6mm)",
  ),
  m(
    "Máquinas",
    "Shaver Babyliss Lo Pro Mini",
    "BaBylissPRO",
    "Rasuradoras",
    1800,
    "", // Foto: assets/img/products/babyliss/shaver-lo-pro-mini-babyliss/shaver-lo-pro-mini-babyliss.png
    "Diseñado para barberos y fabricado para el uso diario, esta afeitadora de una sola lámina combina un rendimiento hipoalergénico seguro para la piel, con comodidad ergonómica. El motor de alta velocidad y la lámina única de titanio ofrecen resultados limpios en casa o en la tienda. Con hasta 1,5 horas de tiempo de ejecución y carga USB-C universal, es la herramienta compacta que se adapta fácilmente a tu rutina y a tu kit.",
  ),
  m(
    "Máquinas",
    "Shaver VGR 035S UV",
    "VGR",
    "Rasuradoras",
    1850,
    "", // Foto: assets/img/products/vgr/shaver-035s-uv-vgr/shaver-035s-uv-vgr.png
    "Shaver VGR V-035S. Tapa desinfectante UV. 8000 rpm. Motor vectorial.",
  ),
  m(
    "Máquinas",
    "Clipper Kemei 1911",
    "Kemei",
    "Cortadoras",
    1250,
    "", // Foto: assets/img/products/kemei/clipper-1911-kemei/clipper-1911-kemei.png
    "La KEMEI KM-1911 es una máquina de corte desarrollada para barberos y profesionales que buscan potencia, precisión y tecnología de última generación en una sola herramienta. Diseñada para uso intensivo, combina materiales premium, alto rendimiento y una respuesta constante incluso en cabellos gruesos y difíciles. Su gran diferencial es su avanzado sistema de corte con Fade Blade de alta precisión y revestimiento DLC (Diamond Like Carbon), una tecnología que ofrece mayor dureza, menor fricción y excelente resistencia al desgaste. Esto permite realizar fades más limpios, degradados suaves y transiciones perfectas, con un deslizamiento preciso y uniforme sobre todo tipo de cabello. Está impulsada por un motor sin escobillas de 5W de alta potencia, que entrega un rendimiento constante de 7500 RPM, proporcionando cortes rápidos, fluidos y sin pérdida de potencia durante toda la jornada. Su batería de litio de 2500 mAh ofrece una excelente autonomía inalámbrica, ideal para múltiples servicios sin interrupciones, brindando total libertad de movimiento y comodidad en la estación de trabajo. Además, incorpora ajuste de doble velocidad, permitiendo adaptar la máquina según la técnica de corte: desde eliminación de volumen hasta trabajos de detalle, contornos y terminaciones precisas.\n\nCaracterísticas destacadas:\n\n- Cuchilla Fade Blade con revestimiento DLC\n- Motor Brushless (sin escobillas) de 5W\n- Velocidad constante de 7500 RPM\n- Batería de litio de 2500 mAh\n- Sistema inalámbrico de alto rendimiento\n- Ideal para fades, taper, bulk removal y trabajos de precisión\n- Diseño profesional, robusto y ergonómico",
    0,
    1400,
  ),
  m(
    "Máquinas",
    "Turbo shaver 4x4",
    "4x4",
    "Rasuradoras",
    1200,
    "", // Foto: assets/img/products/4x4/turbo-shaver-4x4/turbo-shaver-4x4.png
    "Motor de 11,000 RPM con alto torque. Función cortadora y rasuradora para acabados profesionales. Hasta 5 horas de uso continuo. Uso alámbrico / inalámbrico. Ideal para rasurados, fades y detalles de precisión. Diseño compacto, potente y ergonómico.",
  ),
  m(
    "Máquinas",
    "Trimmer Babyliss GOLD/BLACK FX ONE",
    "BaBylissPRO",
    "Trimmers",
    2650,
    "", // Foto: assets/img/products/babyliss/trimmer-fx-one-gold-black-babyliss/trimmer-fx-one-gold-black-babyliss.png
    "Colores disponibles DORADO/NEGRO. La recortadora FXONE GOLD/BLACKFX es una herramienta profesional para dar forma, metálica con una batería reemplazable. Con una cuchilla en “T” expuesta en 360 grados y motor de diseño italiano de alto torque. Esta recortadora con batería intercambiable cuenta con una batería de litio con una autonomía de 2 horas y empuñadura barra texturizada para mayor comodidad. Utiliza esta recortadora profesional con batería de iones de litio para obtener bordes nítidos, líneas definidas y cualquier otro trabajo detallado.",
  ),
  m(
    "Máquinas",
    "Trimmer Kemei 2299",
    "Kemei",
    "Trimmers",
    600,
    "", // Foto: assets/img/products/kemei/trimmer-2299-kemei/trimmer-2299-kemei.png
    "Terminadora marca Kemei modelo 2299. 3 peines guía. Cable cargador USB. Pila con duración de 2 horas de uso continuo.",
  ),
  m(
    "Máquinas",
    "Shaver Babyliss UV FOIL FXLFS2ES",
    "BaBylissPRO",
    "Rasuradoras",
    2600,
    "", // Foto: assets/img/products/babyliss/shaver-uv-foil-fxlfs2es-babyliss/shaver-uv-foil-fxlfs2es-babyliss.png
    "Desinfección Eficaz: Tapa desinfectante que elimina el 99.9% de las bacterias, garantizando una higiene óptima en cada uso. Afeitado Preciso: Diseñada para un rasurado al ras, es ideal para el rostro, cuello y línea de nacimiento del cabello. Hipoalergénica: Sus hojas dobles de titanio negro reducen la irritación cutánea, incluso en pieles sensibles. Cierre Automático: La tapa desinfectante se activa automáticamente al cerrarla, y la rasuradora se apaga automáticamente, asegurando un uso seguro y sencillo. Batería Duradera: Equipada con una batería de iones de litio de alta capacidad, ofrece más de 5.5 horas de autonomía. Indicador de Encendido: Una luz indicadora te mantiene al tanto del estado de la rasuradora. Diseño Elegante: La carcasa metálica y su forma ergonómica hacen que sea cómoda de usar y estilizada. Potencia Inigualable: Su potente motor rotativo con 10,000 RPM asegura un afeitado rápido y eficiente. Portátil: Con un tamaño compacto de 13 cm x 7 cm y una bolsa de almacenaje incluida.",
  ),
  m(
    "Máquinas",
    "Shaver Babyliss PRO FX ONE",
    "BaBylissPRO",
    "Rasuradoras",
    2650,
    "", // Foto: assets/img/products/babyliss/shaver-fx-one-babyliss/shaver-fx-one-babyliss.png
    "Shaver Babyliss tipo T. Inalámbrica. Potente. Colores disponibles VERDE, ROJO Y AZUL MATE. Hasta 3 horas de uso continuo. Motor rotatorio sin escobillas. Láminas de titanio hipoalergénicas. Carcasa ergonómica totalmente metálica. Tapa cónica con gancho para colgar.",
  ),
  m(
    "Máquinas",
    "Clipper Kemei 1386",
    "Kemei",
    "Cortadoras",
    850,
    "", // Foto: assets/img/products/kemei/clipper-1386-kemei/clipper-1386-kemei.png
    "El motor de doble velocidad KM-1386 ofrece un modo de alta velocidad de 7000 RPM y un modo de baja velocidad de 6500 RPM, brindando potencia y adaptabilidad para todas las necesidades de corte. Experimente un rendimiento de nivel comercial en su propio hogar. PRECISIÓN ULTRA AFILADA Y RESPETUOSA CON LA PIEL: Nuestras cuchillas de acero de ingeniería están diseñadas para mantenerse afiladas por más tiempo. Mantienen una precisión constante para líneas limpias y degradados impecables, asegurando un acabado suave y de calidad profesional. El diseño respetuoso con la piel evita enganches.",
  ),
  m(
    "Máquinas",
    "Clipper WMARK X1 POLAR",
    "WMARK",
    "Cortadoras",
    2300,
    "", // Foto: assets/img/products/wmark/clipper-x1-polar-wmark/clipper-x1-polar-wmark.png
    "La cortadora con chip inteligente de WMARK. Es una cortadora de 10.000 RPM con motor vectorial que cuando detecta presión en sus cuchillas, de manera automática aumenta su potencia. Su tamaño es compacto, materiales de alta calidad y cuenta con cuchilla DLC, significa DIAMOND LIKE CARBON (que son cuchillas en carbono que cortan tan fino como el diamante).\n\nCaracterísticas:\n- Revestimiento DLC: cuchilla de alta precisión y cuchilla móvil\n- Motor Maglev: velocidad máxima de corte de 10,000 rpm\n- Batería de iones de litio de 2500 mAh: 120 min\n- Carga USB tipo C o soporte de carga\n- Protectores magnéticos de nailon de alta calidad\n\nTiene 5 niveles de cuchillas ajustables que manejan todos los tipos de cabello y longitudes con facilidad.\n\nIncluye:\n\n- Maquinilla de barbero inalámbrica\n- 6 peines guía de buena calidad\n- 1 cubierta negra adicional\n- 1 anillo de goma\n- 1 tapa de protección\n- Cepillo de limpieza y un peine\n- 2 pegatinas para el cabello\n- Adaptador y soporte de carga",
  ),
  m(
    "Máquinas",
    "Clipper Senior Wahl cordless",
    "Wahl",
    "Cortadoras",
    3100,
    "", // Foto: assets/img/products/wahl/clipper-senior-cordless-wahl/clipper-senior-cordless-wahl.png
    "Máquina inalámbrica Senior cordless. Marca Wahl. Todos los accesorios de la ilustración.",
  ),
  m(
    "Máquinas",
    "E Clipper Blackout Old Scull",
    "Old Scull",
    "Cortadoras",
    2000,
    "", // Foto: assets/img/products/old-scull/e-clipper-blackout-old-scull/e-clipper-blackout-old-scull.png
    "Potente Motor de potencia constante de 7,000 RPM. Cuchilla de una sola pieza, que puedes poner y quitar en cuestión de segundos. Autonomía de 3 horas. Funciona con o sin cable. Incluye aumentos #1, #2, #3, #4, aumentos medios #.5 y #1.5, cable de carga, aceite y cepillo de limpieza.",
  ),
  m(
    "Máquinas",
    "Clipper Jeezy X Stylecraft",
    "StyleCraft",
    "Cortadoras",
    5000,
    "", // Foto: assets/img/products/stylecraft/clipper-jeezy-stylecraft/clipper-jeezy-stylecraft.png
    "Clipper Jeezy X Stylecraft. La carcasa completamente metálica amortigua el ruido y reduce la vibración. Motor vectorial IN2 con 11.500 RPM. Hoja DLC Echo con cortador superficial 2.0. Tiempo de ejecución de 3 horas. Carga USB-C. La cuchilla totalmente ajustable se puede ajustar fácilmente a cero. Tamaño compacto con agarre ergonómico para máxima comodidad.",
  ),
  m(
    "Máquinas",
    "Trimmer Instinct metal StyleCraft",
    "StyleCraft",
    "Trimmers",
    4000,
    "", // Foto: assets/img/products/stylecraft/trimmer-instinct-metal-stylecraft/trimmer-instinct-metal-stylecraft.png
    "La Trimmer X-Pro Black Diamond combina potencia, innovación y diseño ergonómico en una herramienta compacta. Su carcasa metálica trasera reduce ruido y vibración para un funcionamiento más suave, mientras que el motor Vector IN2 ofrece un rendimiento excepcional de 9,500 golpes por minuto con control de par intuitivo. Equipada con una cuchilla fija Black Diamond X-Pro y un cortador profundo “The One”, garantiza cortes nítidos y precisos. Su batería de iones de litio brinda hasta 4 horas de autonomía inalámbrica con solo 2 horas de recarga, además de incluir la práctica herramienta Dual-End Zero-Gap Blade Setter para ajustes exactos. Carcasa metálica trasera que reduce ruido y vibración. Motor Vector IN2 de 9,500 golpes por minuto. Cuchilla Black Diamond X-Pro + cortador profundo “The One”. Hasta 4 horas de autonomía con carga rápida. Diseño compacto, ergonómico y cómodo. 3 tapas intercambiables: negro, blanco y rosa. Incluye accesorios: base de carga, cable, kit de limpieza y destornillador.",
  ),
  m(
    "Máquinas",
    "Combo VGR V-640 (NEGRO/ROJO)",
    "VGR",
    "Combos",
    2200,
    "", // Foto: assets/img/products/vgr/combo-v-640-vgr/combo-v-640-vgr.png
    "Clipper:\n- Motor potente y silencioso de alto rendimiento\n- Cuchillas de acero inoxidable autoafilables\n- Palanca de ajuste de nivel de corte\n- Batería recargable de larga duración (uso inalámbrico o con cable)\n- Incluye 4 peines guía (3/6/9/12 mm)\n- Ideal para cortes fade, clásicos y modernos\n\nTrimmer:\n- Cabezal de precisión en forma de T para delineados perfectos\n- Ideal para contornos, barba, cuello y detalles\n- Cuerpo metálico resistente con diseño ergonómico\n- Motor de alta velocidad\n- Recargable vía USB (incluye cable)\n- Incluye 3 peines guía de precisión",
  ),
  m(
    "Máquinas",
    "Clipper Babyliss Boost",
    "BaBylissPRO",
    "Cortadoras",
    2900,
    "", // Foto: assets/img/products/babyliss/clipper-boost-babyliss/clipper-boost-babyliss.png
    "Clipper BOOSTFX negro mate. Motor sin escobillas de mayor velocidad, mayor par de torsión – 6800 rpm. Nueva hoja de desvanecimiento DLC (hoja de repuesto FX8010D). Mango de goma texturizado con diamante. Tiempo de ejecución de más de 2 horas. Control cónico de 5 retenes. Carcasa totalmente metálica. Cable inalámbrico y doble voltaje. Gancho para colgar. Incluye 8 accesorios de peine.",
  ),
  m(
    "Máquinas",
    "Trimmer Babyliss lo pro",
    "BaBylissPRO",
    "Trimmers",
    2600,
    "", // Foto: assets/img/products/babyliss/trimmer-lo-pro-babyliss/trimmer-lo-pro-babyliss.png
    "La recortadora de edición limitada en amarillo neón FXONE Lo-ProFX ofrece cortes precisos, motor duradero y diseño ergonómico.",
  ),
  m(
    "Máquinas",
    "Trimmer Ace Stylecraft",
    "StyleCraft",
    "Trimmers",
    900,
    "", // Foto: assets/img/products/stylecraft/trimmer-ace-stylecraft/trimmer-ace-stylecraft.png
    "El potente motor rotativo funciona a 7500 rpm para el uso diario con menos arrastre. La hoja japonesa de acero inoxidable de alta calidad es completamente ajustable con espacio cero para un corte y acabado más precisos. La batería de iones de litio ofrece 3 horas de funcionamiento inalámbrico con un 90-minuto de recarga. USB tipo C recargable para mayor comodidad y uso en todo el mundo. Diseño de esqueleto abierto para exponer la hoja para un funcionamiento más frío, una mejor línea de visión y una mayor precisión.",
    0,
    1000,
  ),
  m(
    "Máquinas",
    "Trimmer Kemei KM-1863",
    "Kemei",
    "Trimmers",
    1000,
    "", // Foto: assets/img/products/kemei/trimmer-km-1863-kemei/trimmer-km-1863-kemei.png
    "Kemei terminadora eléctrica. Modelo KM-1863 para barberos, profesional, con hoja en T, base de carga, cuchilla con corte a 0 mm, recortador de alta velocidad con velocidades ajustables a 9000 RPM, incluye base de carga, cuchilla DLC.",
  ),
  m(
    "Máquinas",
    "Clipper VGR 001",
    "VGR",
    "Cortadoras",
    2000,
    "", // Foto: assets/img/products/vgr/clipper-001-vgr/clipper-001-vgr.png
    "Cortador de cabello profesional: el cortador de cabello profesional VGR cuenta con cuchillas de acero de alto carbono de alta densidad para cortes limpios. Tecnología de superposición de doble capa para bordes afilados y líneas precisas para cortar cabello, patillas, barba y bigote. 10 peines con palanca cónica ajustable en 5 posiciones, longitudes de corte de 1 mm a 27 mm. Motor silencioso de alto rendimiento: el cortapelos inalámbrico VGR-001 está equipado con un motor de alto rendimiento con velocidades que van desde 7.000 rpm hasta 9.000 rpm (con incrementos de 100 rpm). Gire el dial central para 21 ajustes de velocidad con ruido mínimo. La tecnología Smart Clip detecta la resistencia de la hoja y ajusta la velocidad del motor para un ajuste suave como la seda. Pantalla LED ultra grande: el cortapelos está equipado con una pantalla digital inteligente ultra grande. La pantalla inteligente muestra las diferentes velocidades, así como el tiempo de funcionamiento restante actual del barbero, lo que facilita la planificación de cuándo recargarlo. Al presionar el botón de iluminación frontal, se enciende una luz directamente sobre la cuchilla, permitiendo un corte preciso incluso cuando la luz no sea clara. Batería de gran capacidad: batería recargable de iones de litio de 4600 mAh, segura y duradera. Carga durante 3 horas, funciona durante no menos de 260 minutos, con la base de carga, deshazte de los problemas de alimentación. La función avanzada de bloqueo de la palanca proporciona 5 ajustes de bloqueo horizontal estables para garantizar la estabilidad de un uso prolongado.\n\nAccesorios:\n\n- 1 cortapelos\n- 10 peines limitadores (1,5/3/4,5/6/9/12/15/18/21/24 mm)\n- 1 aceite\n- 1 base de carga\n- 1 cepillo de limpieza\n- 1 cable de carga\n- 1 cabezal de carga estándar de la UE\n- 1 manual",
  ),
  m(
    "Máquinas",
    "Combo Barber Wahl inalámbrico",
    "Wahl",
    "Combos",
    4000,
    "", // Foto: assets/img/products/wahl/combo-barber-inalambrico-wahl/combo-barber-inalambrico-wahl.png
    "Juego de máquinas inalámbricas. Marca Wahl. Cuchillas recubiertas de titanio y DLC que se mantienen frescas y afiladas 4 veces más. Clipper con cuchillas microdentadas. Motor de alto rendimiento para cortar a granel a través de cabellos gruesos y texturizados. Pila con duración de 100 minutos continuos.\n\nIncluye:\n\n- Cable profesional / cortador inalámbrico con palanca cónica ajustable\n- Cable profesional / recortadora inalámbrica\n- 3 guías de corte de clipper premium (1/16″ – 3/16″ / 1.5mm – 4.5mm)\n- 3 guías de recorte (1/16″ – 3/16″ / 1.5mm – 4.5mm)\n- Cable de alimentación (uso para Clipper y Recortadora)\n- Estuche de lona\n- Peine Wahl\n- Herramienta Pro-Set\n- Aceite\n- Cepillo de limpieza\n- Instrucciones\n- Protectores de cuchillas rojas",
  ),
  m(
    "Máquinas",
    "E-trimmer blackout Old Scull",
    "Old Scull",
    "Trimmers",
    1950,
    "", // Foto: assets/img/products/old-scull/e-trimmer-blackout-old-scull/e-trimmer-blackout-old-scull.png
    "E-Trimmer BlackOut – Old Scull. Precisión Extrema. Potencia Evolucionada. Estilo Absoluto. La E-Trimmer BlackOut representa la nueva generación de trimmers profesionales de Old Scull. Diseñada para barberos que buscan líneas perfectas, mayor potencia y una presencia imponente, esta versión incorpora el Motor 2.0, mejoras de rendimiento y un espectacular acabado Negro brillante nivel automotriz que eleva su estética a un nivel superior. Rendimiento Avanzado con Motor 2.0: Equipada con el nuevo Motor 2.0, la E-Trimmer BlackOut ofrece una respuesta más rápida, potente y estable, ideal para delineados, contornos y trabajos de detalle con máxima precisión. El motor optimizado reduce vibraciones y mantiene un funcionamiento silencioso, asegurando control total en cada trazo. Acabados Premium BlackOut: Su pintura negro brillante nivel automotriz combina elegancia y carácter, además de brindar una resistencia superior al desgaste. El cuerpo ergonómico ha sido diseñado para adaptarse perfectamente a la mano del barbero, ofreciendo un agarre firme y cómodo que facilita trabajos prolongados y de alta precisión. Precisión Profesional: Las cuchillas de alta precisión con recubrimiento DLC y tecnología anti-calentamiento garantizan un deslizamiento suave y cortes limpios desde la primera pasada. Perfecta para crear líneas definidas, fades detallados y acabados profesionales que marcan la diferencia. Libertad Inalámbrica y Tecnología Confiable: Con una batería de hasta 3 horas de autonomía, la E-Trimmer BlackOut está lista para acompañarte durante largas jornadas sin interrupciones. Su diseño inalámbrico brinda total libertad de movimiento y su sistema de carga rápida asegura disponibilidad constante en la estación de trabajo.",
  ),
  m(
    "Máquinas",
    "Clipper JRL Onix NEGRA/BLANCA",
    "JRL",
    "Cortadoras",
    3200,
    "", // Foto: assets/img/products/jrl/clipper-onix-jrl/clipper-onix-jrl.png
    "Esta máquina de cortar cabello es conocida por su potente motor y su diseño ergonómico. Ofrece un rendimiento excepcional, ideal para estilistas y barberos.\n\nCaracterísticas:\n\n- Cuchillas de precisión ajustables\n- Batería de larga duración, ideal para sesiones prolongadas\n- Diseño ligero y cómodo para un uso prolongado\n- Varios peines guía para diferentes longitudes de corte",
  ),
  m(
    "Máquinas",
    "Clipper MRD Vector Pro",
    "MRD",
    "Cortadoras",
    4000,
    "", // Foto: assets/img/products/mrd/clipper-vector-pro-mrd/clipper-vector-pro-mrd.png
    "CLIPPER MRD PRO VECTOR. Máquina de corte profesional equipada con motor Vector digital sin escobillas de 10.000 a 13.000 RPM, capaz de detectar la resistencia del cabello y ajustar automáticamente el torque. Su cuchilla Hybrid 2.0 Faper de titanio dorado y la cuchilla móvil de dientes profundos están especialmente orientadas a degradados, difuminados y reducción de volumen. Su cuerpo completamente metálico aporta una sensación sólida y estable en mano, mientras que el motor de baja vibración favorece un trabajo suave y controlado. Además, ofrece hasta 2 horas de autonomía, carga en 90 minutos y posibilidad de ajustar la cuchilla a cero para trabajos de mayor precisión.",
  ),
  m(
    "Máquinas",
    "Masajeadora Babyliss Vibe FX",
    "BaBylissPRO",
    "Masajeadores",
    2200,
    "", // Foto: assets/img/products/babyliss/masajeadora-vibe-fx-babyliss/masajeadora-vibe-fx-babyliss.png
    "Masajeadora color plateado. Modelo Vibe FX. Marca Babyliss. 2 velocidades. Inalámbrica.",
  ),
  m(
    "Máquinas",
    "Combo Barber Adventure 4x4",
    "4x4",
    "Combos",
    1200,
    "", // Foto: assets/img/products/4x4/combo-barber-adventure-4x4/combo-barber-adventure-4x4.png
    "Motores rotatorios. Pantalla indicadora de pila. 7000 RPM. 3 horas de servicio. La clipper incluye 8 peines guía. La trimmer incluye 3 peines guía.",
  ),
  m(
    "Máquinas",
    "Combo Wmark 8637",
    "WMARK",
    "Combos",
    4700,
    "", // Foto: assets/img/products/wmark/combo-8637-wmark/combo-8637-wmark.png
    "El kit de barbero WMark Professional 5 en 1 está diseñado para barberos que exigen precisión, durabilidad y rendimiento constante en un entorno de taller de alto volumen. Este sistema completo ofrece las herramientas básicas necesarias para cortar, detallar, terminar y limpiar al cliente, todo diseñado con componentes de calidad profesional y carga USB-C moderna. Construida para el uso diario, cada herramienta cuenta con un fuerte rendimiento del motor, una duración confiable de la batería y un manejo ergonómico para respaldar un flujo de trabajo eficiente durante todo el día. Desde cortes y decoloraciones a granel hasta alineaciones y acabados, este kit proporciona una configuración optimizada y todo en uno para profesionales serios.\n\nIncluye:\n\nClipper + recortadora de detalles, afeitadora, ventilador turbo, botella de spray nano. Motor de alta velocidad con mejor rendimiento. Batería de gran capacidad para una mayor duración de la batería. Interfaz de carga USB-C, mayor compatibilidad. Sistema de aseo completo desde cortes de zumbido hasta detalles de barba.\n\nIncluye:\n\n- 4 protectores de recortadora\n- 6 protectores de cortadora\n- Aceite\n- Cable de carga\n- 2 peines\n- 1 cepillo\n- Herramienta Zero Gap\n- 2 pegatinas para el cabello\n- 2 anillos antideslizantes\n- 1 capa de corte",
  ),
  m(
    "Máquinas",
    "Clipper Kemei KM-1862",
    "Kemei",
    "Cortadoras",
    1300,
    "", // Foto: assets/img/products/kemei/clipper-km-1862-kemei/clipper-km-1862-kemei.png
    "Kemei clipper eléctrico profesional de alta velocidad de 9000RPM ajustables, con base de carga. Pila de larga duración. Motor de alta calidad y potencia.",
  ),
  m(
    "Máquinas",
    "Trimmer FX ONE Lo Pro Babyliss",
    "BaBylissPRO",
    "Trimmers",
    2600,
    "", // Foto: assets/img/products/babyliss/trimmer-fx-one-lo-pro-babyliss/trimmer-fx-one-lo-pro-babyliss.png
    "Nueva hoja en T de dientes estándar de titanio/DLC azul (FX707BL). Hipoalergénico, alta resistencia, baja temperatura de la hoja, ajustable sin espacio. Nuevo motor sin escobillas N1, rodamientos duales para mayor eficiencia, 7200 rpm / 14,400 spm, larga vida. Nuevo paquete de baterías de litio intercambiables (FXBB24), hasta 3 horas de tiempo de ejecución, botón para liberación rápida de la batería, indicador de batería de anillo LED de 4 etapas. Cubierta protectora de metal de perfil ultrabajo, agarre ergonómico.\n\nIncluye:\n\n- Recortadora\n- Batería\n- Base de carga",
  ),
  m(
    "Máquinas",
    "Magic Clip Black edition",
    "Wahl",
    "Cortadoras",
    2500,
    "", // Foto: assets/img/products/wahl/magic-clip-black-edition-wahl/magic-clip-black-edition-wahl.png
    "Máquina de corte inalámbrica. Marca Wahl. Edición negra. Incluye 8 peines premium. Pila con una duración de 100 minutos. Cuchillas doradas de titanio.",
  ),
  m(
    "Máquinas",
    "Combo Duo Blanco Old Scull",
    "Old Scull",
    "Combos",
    3500,
    "", // Foto: assets/img/products/old-scull/combo-duo-blanco-old-scull/combo-duo-blanco-old-scull.png
    "Infinity Trimmer (Negra): Motor constante de 7,000 RPM para un corte eficiente y sin esfuerzo. Cuchillas DLC de 2ª generación para una precisión duradera y mayor rendimiento. Batería de más de 3 horas de autonomía para jornadas largas sin interrupciones. Indicador de carga LED para un control claro y conveniente de la batería. Tecnología de bajo calentamiento, manteniendo la herramienta siempre a una temperatura ideal durante el uso. Infinity Shaver (Blanca): Motor constante de 8,000 RPM que asegura un afeitado suave y preciso. Mallas de aleación de acero para una calidad superior y un deslizamiento perfecto sobre la piel. Batería de 3 horas para máxima autonomía, sin comprometer el rendimiento. Carga USB-C, para una recarga rápida y práctica, ideal para barberos en movimiento. Acabado perla premium, brindando un diseño elegante y sofisticado que resalta en cualquier espacio.",
    0,
    4000,
  ),
  m(
    "Máquinas",
    "Combo Kemei KM-8566",
    "Kemei",
    "Combos",
    2000,
    "", // Foto: assets/img/products/kemei/combo-km-8566-kemei/combo-km-8566-kemei.png
    "Combo Kemei modelo KM-8566. Incluye 5 peines guía para trimmer, 6 peines guía para clipper, protectores, aceite, cepillo de limpieza, cable de carga tipo USB. Capacidad de batería en trimmer y clipper 2500 mAh, Shaver 1400 mAh. Potencia Max Clipper/trimmer 7500 rpm, Shaver 8000 rpm.",
  ),
  m(
    "Máquinas",
    "Shaver Instinct SC",
    "StyleCraft",
    "Rasuradoras",
    3200,
    "", // Foto: assets/img/products/stylecraft/shaver-instinct-stylecraft/shaver-instinct-stylecraft.png
    "Libera la revolución en el aseo con nuestra afeitadora de vanguardia que transforma el mundo de las afeitadoras para siempre. Barberos y estilistas, conoce la afeitadora de papel de aluminio de tus sueños, una potencia que atraviesa el cabello. La afeitadora Instinct redefine la velocidad y ofrece un sorprendente 11.500 golpes por minuto. Gracias al control de par intuitivo, experimenta la eliminación de volumen como nunca antes, sin un toque de enganche o tirón. Diseñado con el único motor IN2 Vector Professional, su potencia imparable proporciona una eliminación de volumen altamente optimizada en una sola pasada, ajusta dinámicamente el par en milisegundos, abordando sin esfuerzo el pelo grueso y voluminoso. La carcasa de metal de alta resistencia funciona silenciosamente y amortigua el ruido y absorbe la vibración, elevando tu rutina de aseo. Montado con nuestra lámina de titanio dorado premium, acompañado de dos cortadores crujientes audibles, garantiza un afeitado superior, incluso para la piel más sensible. Disfrute de hasta 2,5 horas de tiempo de funcionamiento inalámbrico con la batería de iones de litio y una rápida recarga de 2 horas. Para que sea aún más conveniente, lo hicimos compatible con una función recargable USB-C para uso global. Completo con un soporte de carga y cable, también es compatible con nuestro soporte de carga USB-C StyleCraft (se vende por separado).",
  ),
  m(
    "Máquinas",
    "Secadora Babyliss Red FX",
    "BaBylissPRO",
    "Secadoras",
    2300,
    "", // Foto: assets/img/products/babyliss/secadora-red-fx-babyliss/secadora-red-fx-babyliss.png
    "Motor italiano AC de alta velocidad y rendimiento. Filtro antiruido removible y de fácil limpieza. Mango texturizado extra largo, asegura un máximo agarre antideslizante. 2 ajustes de calor, 2 velocidades. Botón de aire frío, sella la cutícula y fija el peinado. Generador de iones en la rejilla, más brillo y menos frizz.",
  ),
  m(
    "Máquinas",
    "Nexus Clipper Old Scull",
    "Old Scull",
    "Cortadoras",
    1500,
    "", // Foto: assets/img/products/old-scull/nexus-clipper-old-scull/nexus-clipper-old-scull.png
    "Motor Carbon Brush de 7,000 RPM: Potente y de alta durabilidad, ideal para cortar con rapidez y precisión incluso en los cabellos más gruesos. Cuchillas DLC (Diamond Like Carbon) + Acero: Tecnología avanzada que garantiza cortes suaves y sin tirones, además de una mayor resistencia al desgaste. Batería de hasta 3 horas: Disfruta de autonomía para sesiones largas sin preocuparte por la recarga constante. Tiempo de carga de 3 horas: Recarga rápida para que siempre estés listo para continuar trabajando. Accesorios incluidos: 6 niveles de corte, aceite lubricante y un cepillo de limpieza para mantener tu máquina en perfectas condiciones.",
  ),
  m(
    "Máquinas",
    "Clipper VGR 880 Rotatech",
    "VGR",
    "Cortadoras",
    1650,
    "", // Foto: assets/img/products/vgr/clipper-880-rotatech-vgr/clipper-880-rotatech-vgr.png
    "Motor BLDC con Rotor Externo: Tecnología de última generación que aumenta la potencia en un 50%. Velocidad constante de 7200 RPM para cortes sin esfuerzo. Cuchilla de Cerámica y MIM (Metal Injection Molding): Precisión quirúrgica con corte ultra afilado, mayor duración y menor fricción en la piel. Batería de larga duración + Base de carga: Hasta 250 minutos de uso, carga rápida por USB. Incluye 10 peines guía (1.5 a 25mm) + cuchilla desmontable.",
  ),
  m(
    "Máquinas",
    "Clipper Platinum 4x4",
    "4x4",
    "Cortadoras",
    2000,
    "", // Foto: assets/img/products/4x4/clipper-platinum-4x4/clipper-platinum-4x4.png
    "Cortadora de cabello profesional modelo Platinum.\n\nCaracterísticas:\n- Motor potente 3.0 V, 200 mA, 10,000 r/min, 8 W\n- Carga: 3 horas · Uso: 2.5 horas\n- Batería de ion de litio 3.7 V, 2500 mAh\n- Navajas DLC de 45 mm de ancho\n- Palanca metálica ajustable de 0.5 a 2.0 mm\n- Peso: 300 g · Medidas: 16 × 5.9 × 4.2 cm\n\nIncluye:\n- Cortadora 4x4 Profesional Platinum con cuchillas DLC de 45 mm\n- Protector plástico de cuchillas\n- 6 peines de aumento con gancho metálico (1.5, 3, 4.5, 6, 10 y 13 mm)\n- Adaptador-cargador de corriente\n- Cable USB tipo C y base de carga\n- Cepillo limpiador y aceite lubricante\n- Manual del propietario",
    0,
    2300,
  ),
  m(
    "Máquinas",
    "Trimmer Platinum 4x4",
    "4x4",
    "Trimmers",
    1900,
    "", // Foto: assets/img/products/4x4/trimmer-platinum-4x4/trimmer-platinum-4x4.png
    "La Trimmer 4x4 Platinum T THOUSAND CROWNS es para detalle fino de verdad. Motor magnético: Respuesta inmediata, no se traba y corta al instante. Cuchillas DLC: Corte más limpio, sin jalones y más precisión en cada línea. Esta máquina es colaboración con barberos reconocidos: Jonathan Medina & Daniel Islas.\n\nIncluye:\n\n3 peines de alzada, base de carga, lubricante + cepillo, garantía de 1 año. Trimmer 4x4 Platinum T Thousand Crowns con motor magnético y cuchillas DLC. Precisión profesional para delineados perfectos. Ideal para barberos que buscan elevar su nivel.",
  ),
  m(
    "Máquinas",
    "Combo WMARK NG 7602",
    "WMARK",
    "Combos",
    2500,
    "", // Foto: assets/img/products/wmark/combo-ng-7602-wmark/combo-ng-7602-wmark.png
    "CORTADORA DE PELO DE ALTA VELOCIDAD: 5CR con proceso DLC, cuchilla fija + cuchilla móvil de cerámica. Aleación de zinc + carcasa de ABS. 3 configuraciones de velocidad: 7000/8000/9000 RPM. 5 longitudes de corte ajustables: 0.8/1.0/1.2/1.4/1.6 mm. Batería de iones de litio: 2000 mAh, 2.5-3 horas de carga completa para 120-150 minutos de uso. RECORTADORA DE DETALLES DE ALTA VELOCIDAD: 5CR con cuchilla fija de proceso DLC + cuchilla móvil de acero inoxidable 3CR. Aleación de zinc + carcasa de ABS. 3 configuraciones de velocidad: 7000/7500/8000 RPM. Batería de iones de litio: 1400 mAh, 2-2.5 horas de carga completa para 100-120 minutos de uso. AFEITADORA DE BARBERO DE ALTA VELOCIDAD: Carcasa de aleación de zinc. Cuchillas dobles reciprocantes y flotantes. 3 configuraciones de velocidad: 7000/7500/8000 RPM. Batería de iones de litio: 800 mAh, 1.5-2 horas de carga completa para 80-100 minutos de uso.",
  ),
  m(
    "Máquinas",
    "Combo Basic Old Scull",
    "Old Scull",
    "Combos",
    1600,
    "", // Foto: assets/img/products/old-scull/combo-basic-old-scull/combo-basic-old-scull.png
    "Omega Clipper: Con un motor de 6,500 RPM, la Omega Clipper ofrece un corte preciso y rápido gracias a sus cuchillas de acero inoxidable. Su batería de larga duración, que alcanza hasta 3 horas de uso continuo, te permitirá trabajar sin interrupciones. Plus Trimmer: La Plus Trimmer cuenta con un motor de 6,200 RPM y cuchillas de acero inoxidable, brindando cortes detallados y perfectos para acabados finos. Su batería de hasta 2 horas de duración asegura una excelente autonomía durante tus sesiones de trabajo.",
  ),
  m(
    "Máquinas",
    "Cortadora Veloce Lite",
    "Cocco",
    "Cortadoras",
    null,
    "assets/img/products/cortadora-veloce-lite.jpg",
    "Cortadora profesional pensada para velocidad y precisión.",
  ),
  m(
    "Máquinas",
    "Cortadora W-Maglev Motor",
    "WMARK",
    "Cortadoras",
    null,
    "assets/img/products/cortadora-w-maglev-motor.jpg",
    "Cortadora de alta velocidad. Disponible en dorado, rojo y negro.",
  ),
  m(
    "Máquinas",
    "Cortadora FX coral",
    "BaBylissPRO",
    "Cortadoras",
    null,
    "assets/img/products/cortadora-fx-coral.jpg",
    "Línea FX de BaBylissPRO.",
  ),
  m(
    "Máquinas",
    "Cortadora Tomb45",
    "BaBylissPRO",
    "Cortadoras",
    null,
    "assets/img/products/cortadora-tomb45.jpg",
    "Cortadora profesional edición Tomb45.",
  ),
  m(
    "Máquinas",
    "Trimmer FX coral",
    "BaBylissPRO",
    "Trimmers",
    null,
    "assets/img/products/trimmer-fx-coral.jpg",
    "Trimmer de la línea FX para detalles y delineado.",
  ),
  m(
    "Máquinas",
    "Rasuradora foil FX coral",
    "BaBylissPRO",
    "Rasuradoras",
    null,
    "assets/img/products/rasuradora-foil-fx-coral.jpg",
    "Rasuradora foil de la línea FX.",
  ),
  m(
    "Máquinas",
    "Rasuradora Stepless Pro FS",
    "VGR",
    "Rasuradoras",
    null,
    "assets/img/products/rasuradora-stepless-pro-fs.jpg",
    "Con pantalla digital de RPM. Disponible en rojo y negro.",
  ),
  // ===== ARTÍCULOS DE BARBERÍA =====
  // Fotos en assets/img/products/<marca>/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Artículos de Barbería",
    "Porta navajas pinza",
    "Genérico",
    "Navajas y porta navajas",
    100,
    "assets/img/products/generico/porta-navajas-pinza-generico/porta-navajas-pinza-generico.jpg",
    "Porta navajas tipo pinza. Material plástico. Ligera. Varios colores.",
  ),
  m(
    "Artículos de Barbería",
    "Parches Babyliss para cabello",
    "BaBylissPRO",
    "Parches y sujetadores",
    150,
    "assets/img/products/babyliss/parches-para-cabello-babyliss/parches-para-cabello-babyliss.jpg",
    "6 parches para sujetar el cabello.",
  ),
  m(
    "Artículos de Barbería",
    "Bledo madera Baregk",
    "Baregk",
    "Brochas y bledos",
    130,
    "assets/img/products/baregk/bledo-madera-baregk/bledo-madera-baregk.jpg",
    "Bledo con mango de madera. Calidad premium.",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo Romero facial",
    "Genérico",
    "Cepillos",
    75,
    "", // Foto: assets/img/products/generico/cepillo-romero-facial-generico/cepillo-romero-facial-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cuellos negros Baregk",
    "Baregk",
    "Papel y desechables",
    140,
    "", // Foto: assets/img/products/baregk/cuellos-negros-baregk/cuellos-negros-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas # 1 (VARIOS)",
    "Genérico",
    "Navajas y porta navajas",
    120,
    "", // Foto: assets/img/products/generico/porta-navajas-1-varios-generico/porta-navajas-1-varios-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine milimétrico metálico",
    "Genérico",
    "Peines",
    95,
    "", // Foto: assets/img/products/generico/peine-milimetrico-metalico-generico/peine-milimetrico-metalico-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Caja 1000 filos dorco rojos",
    "Dorco",
    "Navajas y porta navajas",
    1200,
    "", // Foto: assets/img/products/dorco/caja-1000-filos-rojos-dorco/caja-1000-filos-rojos-dorco.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Mandil para barbero (VARIOS)",
    "Genérico",
    "Mandiles y chalecos",
    300,
    "", // Foto: assets/img/products/generico/mandil-para-barbero-varios-generico/mandil-para-barbero-varios-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Guantes de nitrilo",
    "Genérico",
    "Higiene y desinfección",
    150,
    "", // Foto: assets/img/products/generico/guantes-de-nitrilo-generico/guantes-de-nitrilo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Contenedor para punzo cortantes",
    "Genérico",
    "Higiene y desinfección",
    60,
    "", // Foto: assets/img/products/generico/contenedor-para-punzo-cortantes-generico/contenedor-para-punzo-cortantes-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Portafolio Barbero Vincent",
    "Vincent",
    "Portafolios y estuches",
    3000,
    "", // Foto: assets/img/products/vincent/portafolio-barbero-vincent/portafolio-barbero-vincent.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Portafolio Barbero Dorado",
    "Genérico",
    "Portafolios y estuches",
    2000,
    "", // Foto: assets/img/products/generico/portafolio-barbero-dorado-generico/portafolio-barbero-dorado-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas Aashta",
    "Aashta",
    "Navajas y porta navajas",
    150,
    "", // Foto: assets/img/products/aashta/porta-navajas-aashta/porta-navajas-aashta.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Difusor de rizos Termax",
    "Termax",
    "Otros",
    120,
    "", // Foto: assets/img/products/termax/difusor-de-rizos-termax/difusor-de-rizos-termax.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Brocha para afeitar",
    "Genérico",
    "Afeitado",
    75,
    "", // Foto: assets/img/products/generico/brocha-para-afeitar-generico/brocha-para-afeitar-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta Navajas clip",
    "Genérico",
    "Navajas y porta navajas",
    180,
    "", // Foto: assets/img/products/generico/porta-navajas-clip-generico/porta-navajas-clip-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Papel cuello negro",
    "Genérico",
    "Papel y desechables",
    170,
    "", // Foto: assets/img/products/generico/papel-cuello-negro-generico/papel-cuello-negro-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Rociador barber",
    "Genérico",
    "Rociadores y atomizadores",
    50,
    "", // Foto: assets/img/products/generico/rociador-barber-generico/rociador-barber-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Set de peines",
    "Genérico",
    "Peines",
    100,
    "", // Foto: assets/img/products/generico/set-de-peines-generico/set-de-peines-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine con navaja de textura",
    "Genérico",
    "Peines",
    80,
    "", // Foto: assets/img/products/generico/peine-con-navaja-de-textura-generico/peine-con-navaja-de-textura-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Espejo 360",
    "Genérico",
    "Espejos",
    450,
    "", // Foto: assets/img/products/generico/espejo-360-generico/espejo-360-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas sin cubierta",
    "Genérico",
    "Navajas y porta navajas",
    100,
    "", // Foto: assets/img/products/generico/porta-navajas-sin-cubierta-generico/porta-navajas-sin-cubierta-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine flap top Baregk",
    "Baregk",
    "Peines",
    80,
    "", // Foto: assets/img/products/baregk/peine-flap-top-baregk/peine-flap-top-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Atomizador portable",
    "Genérico",
    "Rociadores y atomizadores",
    380,
    "", // Foto: assets/img/products/generico/atomizador-portable-generico/atomizador-portable-generico.png
    "Atomizador portable. Electrónico. Fácil. Ideal para rociar loción. Color negro.",
  ),
  m(
    "Artículos de Barbería",
    "Porta peines guia",
    "Genérico",
    "Peines",
    160,
    "", // Foto: assets/img/products/generico/porta-peines-guia-generico/porta-peines-guia-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cool Care Andis 5 en 1",
    "Andis",
    "Mantenimiento de máquinas",
    190,
    "", // Foto: assets/img/products/andis/cool-care-5-en-1-andis/cool-care-5-en-1-andis.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Aceite Andis",
    "Andis",
    "Mantenimiento de máquinas",
    90,
    "", // Foto: assets/img/products/andis/aceite-andis/aceite-andis.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Tapete térmico antiderrapante",
    "Genérico",
    "Tapetes",
    250,
    "", // Foto: assets/img/products/generico/tapete-termico-antiderrapante-generico/tapete-termico-antiderrapante-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine pompadour / afro",
    "Genérico",
    "Peines",
    35,
    "", // Foto: assets/img/products/generico/peine-pompadour-afro-generico/peine-pompadour-afro-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas para degrafilar",
    "Genérico",
    "Navajas y porta navajas",
    80,
    "", // Foto: assets/img/products/generico/porta-navajas-para-degrafilar-generico/porta-navajas-para-degrafilar-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Pinzas para cabello",
    "Genérico",
    "Parches y sujetadores",
    5,
    "", // Foto: assets/img/products/generico/pinzas-para-cabello-generico/pinzas-para-cabello-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Limpiador de navajas",
    "Genérico",
    "Navajas y porta navajas",
    100,
    "", // Foto: assets/img/products/generico/limpiador-de-navajas-generico/limpiador-de-navajas-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine para seccionar # 2",
    "Genérico",
    "Peines",
    50,
    "", // Foto: assets/img/products/generico/peine-para-seccionar-2-generico/peine-para-seccionar-2-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Mandil BabylissPro",
    "BaBylissPRO",
    "Mandiles y chalecos",
    500,
    "", // Foto: assets/img/products/babyliss/mandil-babyliss/mandil-babyliss.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas Aashta",
    "Aashta",
    "Navajas y porta navajas",
    130,
    "", // Foto: assets/img/products/aashta/porta-navajas-2-aashta/porta-navajas-2-aashta.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo con talquera",
    "Genérico",
    "Brochas y bledos",
    90,
    "", // Foto: assets/img/products/generico/bledo-con-talquera-generico/bledo-con-talquera-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo dorado largo",
    "Genérico",
    "Brochas y bledos",
    120,
    "", // Foto: assets/img/products/generico/bledo-dorado-largo-generico/bledo-dorado-largo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Aplicador de fibras",
    "Genérico",
    "Brochas y bledos",
    130,
    "", // Foto: assets/img/products/generico/aplicador-de-fibras-generico/aplicador-de-fibras-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Filos Derby Premium",
    "Derby",
    "Navajas y porta navajas",
    120,
    "", // Foto: assets/img/products/derby/filos-premium-derby/filos-premium-derby.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine Wahl tornasol",
    "Wahl",
    "Peines",
    60,
    "", // Foto: assets/img/products/wahl/peine-tornasol-wahl/peine-tornasol-wahl.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas riel Level 3",
    "L3VEL3",
    "Navajas y porta navajas",
    160,
    "", // Foto: assets/img/products/level-3/porta-navajas-riel-level-3/porta-navajas-riel-level-3.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo redondo Baregk",
    "Baregk",
    "Cepillos",
    80,
    "", // Foto: assets/img/products/baregk/cepillo-redondo-baregk/cepillo-redondo-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo con difusor de talco",
    "Genérico",
    "Brochas y bledos",
    90,
    "", // Foto: assets/img/products/generico/bledo-con-difusor-de-talco-generico/bledo-con-difusor-de-talco-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Mandil mezclilla",
    "Genérico",
    "Mandiles y chalecos",
    250,
    "", // Foto: assets/img/products/generico/mandil-mezclilla-generico/mandil-mezclilla-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine flaptop Lobo",
    "Lobo",
    "Peines",
    60,
    "", // Foto: assets/img/products/lobo/peine-flaptop-lobo/peine-flaptop-lobo.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine con navaja doble",
    "Genérico",
    "Peines",
    40,
    "", // Foto: assets/img/products/generico/peine-con-navaja-doble-generico/peine-con-navaja-doble-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Tapete antiderrapante",
    "Genérico",
    "Tapetes",
    350,
    "", // Foto: assets/img/products/generico/tapete-antiderrapante-generico/tapete-antiderrapante-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Chaleco Barber",
    "Genérico",
    "Mandiles y chalecos",
    300,
    "", // Foto: assets/img/products/generico/chaleco-barber-generico/chaleco-barber-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navaja Aashta",
    "Aashta",
    "Navajas y porta navajas",
    130,
    "", // Foto: assets/img/products/aashta/porta-navaja-aashta/porta-navaja-aashta.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Set de peines guía para clipper",
    "Genérico",
    "Peines",
    300,
    "", // Foto: assets/img/products/generico/set-de-peines-guia-para-clipper-generico/set-de-peines-guia-para-clipper-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas Trento",
    "Trento",
    "Navajas y porta navajas",
    70,
    "", // Foto: assets/img/products/trento/porta-navajas-trento/porta-navajas-trento.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo Denman CHICO",
    "Denman",
    "Cepillos",
    50,
    "", // Foto: assets/img/products/denman/cepillo-chico-denman/cepillo-chico-denman.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Banda para máquina (pieza)",
    "Genérico",
    "Mantenimiento de máquinas",
    90,
    "", // Foto: assets/img/products/generico/banda-para-maquina-pieza-generico/banda-para-maquina-pieza-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Barbicide",
    "Barbicide",
    "Higiene y desinfección",
    125,
    "", // Foto: assets/img/products/barbicide/-barbicide/-barbicide.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Aceite para máquina Hairstar",
    "Hairstar",
    "Mantenimiento de máquinas",
    65,
    "", // Foto: assets/img/products/hairstar/aceite-para-maquina-hairstar/aceite-para-maquina-hairstar.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine numerado Dongben",
    "Dongben",
    "Peines",
    40,
    "", // Foto: assets/img/products/dongben/peine-numerado-dongben/peine-numerado-dongben.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Atomizador para loción",
    "Genérico",
    "Rociadores y atomizadores",
    300,
    "", // Foto: assets/img/products/generico/atomizador-para-locion-generico/atomizador-para-locion-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas TSF",
    "The Shave Factory",
    "Navajas y porta navajas",
    60,
    "", // Foto: assets/img/products/the-shave-factory/porta-navajas-the-shave-factory/porta-navajas-the-shave-factory.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine textura Baregk Colores",
    "Baregk",
    "Peines",
    40,
    "", // Foto: assets/img/products/baregk/peine-textura-colores-baregk/peine-textura-colores-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Maletín Barber Hairstar",
    "Hairstar",
    "Portafolios y estuches",
    850,
    "", // Foto: assets/img/products/hairstar/maletin-barber-hairstar/maletin-barber-hairstar.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Portafolio de Babero",
    "Genérico",
    "Portafolios y estuches",
    1200,
    "", // Foto: assets/img/products/generico/portafolio-de-babero-generico/portafolio-de-babero-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo para barba Baregk",
    "Baregk",
    "Cepillos",
    120,
    "", // Foto: assets/img/products/baregk/cepillo-para-barba-baregk/cepillo-para-barba-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo redondo",
    "Genérico",
    "Cepillos",
    80,
    "", // Foto: assets/img/products/generico/cepillo-redondo-generico/cepillo-redondo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo con peine",
    "Genérico",
    "Peines",
    50,
    "", // Foto: assets/img/products/generico/cepillo-con-peine-generico/cepillo-con-peine-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas Riel Lobo/The shave factory",
    "Lobo / The Shave Factory",
    "Navajas y porta navajas",
    60,
    "", // Foto: assets/img/products/lobo/porta-navajas-riel-lobo/porta-navajas-riel-lobo.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Guantes de nitrilo",
    "Genérico",
    "Higiene y desinfección",
    170,
    "", // Foto: assets/img/products/generico/guantes-de-nitrilo-2-generico/guantes-de-nitrilo-2-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo con peine",
    "Genérico",
    "Peines",
    60,
    "", // Foto: assets/img/products/generico/cepillo-con-peine-2-generico/cepillo-con-peine-2-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Toalla para faciales",
    "Genérico",
    "Otros",
    60,
    "", // Foto: assets/img/products/generico/toalla-para-faciales-generico/toalla-para-faciales-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine textura",
    "Genérico",
    "Peines",
    30,
    "", // Foto: assets/img/products/generico/peine-textura-generico/peine-textura-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Esponja para rizos",
    "Genérico",
    "Otros",
    80,
    "", // Foto: assets/img/products/generico/esponja-para-rizos-generico/esponja-para-rizos-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo Trento",
    "Trento",
    "Brochas y bledos",
    90,
    "", // Foto: assets/img/products/trento/bledo-trento/bledo-trento.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Pinceles para delineado",
    "Genérico",
    "Brochas y bledos",
    100,
    "", // Foto: assets/img/products/generico/pinceles-para-delineado-generico/pinceles-para-delineado-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Estuche Old Scull",
    "Old Scull",
    "Portafolios y estuches",
    400,
    "", // Foto: assets/img/products/old-scull/estuche-old-scull/estuche-old-scull.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine de colita Krest",
    "Krest",
    "Peines",
    35,
    "", // Foto: assets/img/products/krest/peine-de-colita-krest/peine-de-colita-krest.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Brocha para tinte",
    "Genérico",
    "Brochas y bledos",
    35,
    "", // Foto: assets/img/products/generico/brocha-para-tinte-generico/brocha-para-tinte-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Pinzas para cabello",
    "Genérico",
    "Parches y sujetadores",
    15,
    "", // Foto: assets/img/products/generico/pinzas-para-cabello-2-generico/pinzas-para-cabello-2-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Dispensador para papel cuellero",
    "Genérico",
    "Papel y desechables",
    120,
    "", // Foto: assets/img/products/generico/dispensador-para-papel-cuellero-generico/dispensador-para-papel-cuellero-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Contenedor punzo cortantes",
    "Genérico",
    "Higiene y desinfección",
    70,
    "", // Foto: assets/img/products/generico/contenedor-punzo-cortantes-generico/contenedor-punzo-cortantes-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Dorco Prime",
    "Dorco",
    "Navajas y porta navajas",
    150,
    "", // Foto: assets/img/products/dorco/prime-dorco/prime-dorco.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Taburete para aumento",
    "Genérico",
    "Otros",
    600,
    "", // Foto: assets/img/products/generico/taburete-para-aumento-generico/taburete-para-aumento-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Papel cuellero blanco",
    "Genérico",
    "Papel y desechables",
    140,
    "", // Foto: assets/img/products/generico/papel-cuellero-blanco-generico/papel-cuellero-blanco-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine milimétrico Cleopatra",
    "Cleopatra",
    "Peines",
    30,
    "", // Foto: assets/img/products/cleopatra/peine-milimetrico-cleopatra/peine-milimetrico-cleopatra.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Llave para tijeras",
    "Genérico",
    "Otros",
    20,
    "", // Foto: assets/img/products/generico/llave-para-tijeras-generico/llave-para-tijeras-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Guantes nitrilo colores",
    "Genérico",
    "Higiene y desinfección",
    150,
    "", // Foto: assets/img/products/generico/guantes-nitrilo-colores-generico/guantes-nitrilo-colores-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Portafolio Barbero",
    "Genérico",
    "Portafolios y estuches",
    1800,
    "", // Foto: assets/img/products/generico/portafolio-barbero-generico/portafolio-barbero-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine flap top",
    "Genérico",
    "Peines",
    35,
    "", // Foto: assets/img/products/generico/peine-flap-top-generico/peine-flap-top-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Rociador de flujo continuo",
    "Genérico",
    "Rociadores y atomizadores",
    100,
    "", // Foto: assets/img/products/generico/rociador-de-flujo-continuo-generico/rociador-de-flujo-continuo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo de anillo",
    "Genérico",
    "Cepillos",
    70,
    "", // Foto: assets/img/products/generico/cepillo-de-anillo-generico/cepillo-de-anillo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Papel cuello Blanco Lobo",
    "Lobo",
    "Papel y desechables",
    100,
    "", // Foto: assets/img/products/lobo/papel-cuello-blanco-lobo/papel-cuello-blanco-lobo.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Mandil barbería",
    "Genérico",
    "Mandiles y chalecos",
    250,
    "", // Foto: assets/img/products/generico/mandil-barberia-generico/mandil-barberia-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Set de peines guia",
    "Genérico",
    "Peines",
    300,
    "", // Foto: assets/img/products/generico/set-de-peines-guia-generico/set-de-peines-guia-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Dorco azules 100 MITADES",
    "Dorco",
    "Navajas y porta navajas",
    70,
    "", // Foto: assets/img/products/dorco/azules-100-mitades-dorco/azules-100-mitades-dorco.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Brocha con base",
    "Genérico",
    "Afeitado",
    120,
    "", // Foto: assets/img/products/generico/brocha-con-base-generico/brocha-con-base-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Clip para capa",
    "Genérico",
    "Parches y sujetadores",
    40,
    "", // Foto: assets/img/products/generico/clip-para-capa-generico/clip-para-capa-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine milimétrico Baregk",
    "Baregk",
    "Peines",
    50,
    "", // Foto: assets/img/products/baregk/peine-milimetrico-baregk/peine-milimetrico-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Aplicador de talco",
    "Genérico",
    "Brochas y bledos",
    100,
    "", // Foto: assets/img/products/generico/aplicador-de-talco-generico/aplicador-de-talco-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine de colita Toni&guy",
    "Toni&Guy",
    "Peines",
    40,
    "", // Foto: assets/img/products/toni-guy/peine-de-colita-toni-guy/peine-de-colita-toni-guy.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Tazón para jabón",
    "Genérico",
    "Afeitado",
    100,
    "", // Foto: assets/img/products/generico/tazon-para-jabon-generico/tazon-para-jabon-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo facial madera",
    "Genérico",
    "Cepillos",
    100,
    "", // Foto: assets/img/products/generico/cepillo-facial-madera-generico/cepillo-facial-madera-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine bigotero",
    "Genérico",
    "Peines",
    40,
    "", // Foto: assets/img/products/generico/peine-bigotero-generico/peine-bigotero-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo Facial Colores",
    "Genérico",
    "Cepillos",
    35,
    "", // Foto: assets/img/products/generico/cepillo-facial-colores-generico/cepillo-facial-colores-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo con mango plateado",
    "Genérico",
    "Brochas y bledos",
    90,
    "", // Foto: assets/img/products/generico/bledo-con-mango-plateado-generico/bledo-con-mango-plateado-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Espejo Rectangular",
    "Genérico",
    "Espejos",
    150,
    "", // Foto: assets/img/products/generico/espejo-rectangular-generico/espejo-rectangular-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine de textura",
    "Genérico",
    "Peines",
    30,
    "", // Foto: assets/img/products/generico/peine-de-textura-generico/peine-de-textura-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine tipo Wahl dorado/plateado",
    "Wahl",
    "Peines",
    50,
    "", // Foto: assets/img/products/wahl/peine-tipo-dorado-plateado-wahl/peine-tipo-dorado-plateado-wahl.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Juego de peines guia",
    "Genérico",
    "Peines",
    65,
    "", // Foto: assets/img/products/generico/juego-de-peines-guia-generico/juego-de-peines-guia-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Paquete filos Dorco rojo",
    "Dorco",
    "Navajas y porta navajas",
    140,
    "", // Foto: assets/img/products/dorco/paquete-filos-rojo-dorco/paquete-filos-rojo-dorco.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas (VARIOS)",
    "Genérico",
    "Navajas y porta navajas",
    120,
    "", // Foto: assets/img/products/generico/porta-navajas-varios-generico/porta-navajas-varios-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Parches sujetadores",
    "Genérico",
    "Parches y sujetadores",
    40,
    "", // Foto: assets/img/products/generico/parches-sujetadores-generico/parches-sujetadores-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas de riel",
    "Genérico",
    "Navajas y porta navajas",
    80,
    "", // Foto: assets/img/products/generico/porta-navajas-de-riel-generico/porta-navajas-de-riel-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Brocha para tinte Termax",
    "Termax",
    "Brochas y bledos",
    20,
    "", // Foto: assets/img/products/termax/brocha-para-tinte-termax/brocha-para-tinte-termax.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo mango largo",
    "Genérico",
    "Brochas y bledos",
    140,
    "", // Foto: assets/img/products/generico/bledo-mango-largo-generico/bledo-mango-largo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Pinzas tipo cocodrilo",
    "Genérico",
    "Parches y sujetadores",
    10,
    "", // Foto: assets/img/products/generico/pinzas-tipo-cocodrilo-generico/pinzas-tipo-cocodrilo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo Denman GRANDE",
    "Denman",
    "Cepillos",
    80,
    "", // Foto: assets/img/products/denman/cepillo-grande-denman/cepillo-grande-denman.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Caja con millar de filos",
    "Genérico",
    "Navajas y porta navajas",
    1000,
    "", // Foto: assets/img/products/generico/caja-con-millar-de-filos-generico/caja-con-millar-de-filos-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine de textura",
    "Genérico",
    "Peines",
    60,
    "", // Foto: assets/img/products/generico/peine-de-textura-2-generico/peine-de-textura-2-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine flaptop Plus",
    "Plus",
    "Peines",
    40,
    "", // Foto: assets/img/products/plus/peine-flaptop-plus/peine-flaptop-plus.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Rociador cuadrado",
    "Genérico",
    "Rociadores y atomizadores",
    80,
    "", // Foto: assets/img/products/generico/rociador-cuadrado-generico/rociador-cuadrado-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Filos Derby",
    "Derby",
    "Navajas y porta navajas",
    90,
    "", // Foto: assets/img/products/derby/filos-derby/filos-derby.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bacticida",
    "Genérico",
    "Higiene y desinfección",
    70,
    "", // Foto: assets/img/products/generico/bacticida-generico/bacticida-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Paquete de filos Dorco",
    "Dorco",
    "Navajas y porta navajas",
    120,
    "", // Foto: assets/img/products/dorco/paquete-de-filos-dorco/paquete-de-filos-dorco.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Mandil Barbero Hairstar",
    "Hairstar",
    "Mandiles y chalecos",
    280,
    "", // Foto: assets/img/products/hairstar/mandil-barbero-hairstar/mandil-barbero-hairstar.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo Deluxe Baregk",
    "Baregk",
    "Brochas y bledos",
    220,
    "", // Foto: assets/img/products/baregk/bledo-deluxe-baregk/bledo-deluxe-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Rociador Lobo",
    "Lobo",
    "Rociadores y atomizadores",
    70,
    "", // Foto: assets/img/products/lobo/rociador-lobo/rociador-lobo.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo tipo escoba Baregk",
    "Baregk",
    "Brochas y bledos",
    100,
    "", // Foto: assets/img/products/baregk/bledo-tipo-escoba-baregk/bledo-tipo-escoba-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Sobre Capa Ari",
    "Ari",
    "Parches y sujetadores",
    120,
    "", // Foto: assets/img/products/ari/sobre-capa-ari/sobre-capa-ari.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Rociador flujo continuo",
    "Genérico",
    "Rociadores y atomizadores",
    120,
    "", // Foto: assets/img/products/generico/rociador-flujo-continuo-generico/rociador-flujo-continuo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Aceite Wahl",
    "Wahl",
    "Mantenimiento de máquinas",
    100,
    "", // Foto: assets/img/products/wahl/aceite-wahl/aceite-wahl.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine delineador de barba",
    "Genérico",
    "Peines",
    25,
    "", // Foto: assets/img/products/generico/peine-delineador-de-barba-generico/peine-delineador-de-barba-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo Luna",
    "Genérico",
    "Brochas y bledos",
    80,
    "", // Foto: assets/img/products/generico/bledo-luna-generico/bledo-luna-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cilindro desinfectante",
    "Genérico",
    "Higiene y desinfección",
    350,
    "", // Foto: assets/img/products/generico/cilindro-desinfectante-generico/cilindro-desinfectante-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo con talquera",
    "Genérico",
    "Brochas y bledos",
    30,
    "", // Foto: assets/img/products/generico/bledo-con-talquera-2-generico/bledo-con-talquera-2-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peines guia Hairstar",
    "Hairstar",
    "Peines",
    80,
    "", // Foto: assets/img/products/hairstar/peines-guia-hairstar/peines-guia-hairstar.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Tapete magnético Baregk",
    "Baregk",
    "Tapetes",
    600,
    "", // Foto: assets/img/products/baregk/tapete-magnetico-baregk/tapete-magnetico-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine bigotero Cleopatra / Baregk",
    "Cleopatra / Baregk",
    "Peines",
    30,
    "", // Foto: assets/img/products/cleopatra/peine-bigotero-cleopatra/peine-bigotero-cleopatra.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Líquido desinfectante",
    "Genérico",
    "Higiene y desinfección",
    60,
    "", // Foto: assets/img/products/generico/liquido-desinfectante-generico/liquido-desinfectante-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine Wahl",
    "Wahl",
    "Peines",
    45,
    "", // Foto: assets/img/products/wahl/peine-wahl/peine-wahl.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Tapete magnético",
    "Genérico",
    "Tapetes",
    600,
    "", // Foto: assets/img/products/generico/tapete-magnetico-generico/tapete-magnetico-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas riel",
    "Genérico",
    "Navajas y porta navajas",
    70,
    "", // Foto: assets/img/products/generico/porta-navajas-riel-generico/porta-navajas-riel-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine flap metálico",
    "Genérico",
    "Peines",
    90,
    "", // Foto: assets/img/products/generico/peine-flap-metalico-generico/peine-flap-metalico-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine cricket # 3 (ROJO/AMARILLO)",
    "Cricket",
    "Peines",
    50,
    "", // Foto: assets/img/products/cricket/peine-3-rojo-amarillo-cricket/peine-3-rojo-amarillo-cricket.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo mango madera",
    "Genérico",
    "Brochas y bledos",
    120,
    "", // Foto: assets/img/products/generico/bledo-mango-madera-generico/bledo-mango-madera-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine milimétrico numerado",
    "Genérico",
    "Peines",
    35,
    "", // Foto: assets/img/products/generico/peine-milimetrico-numerado-generico/peine-milimetrico-numerado-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Pluma de grabado",
    "Genérico",
    "Otros",
    80,
    "", // Foto: assets/img/products/generico/pluma-de-grabado-generico/pluma-de-grabado-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas madera",
    "Genérico",
    "Navajas y porta navajas",
    150,
    "", // Foto: assets/img/products/generico/porta-navajas-madera-generico/porta-navajas-madera-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Cepillo facial Baregk",
    "Baregk",
    "Cepillos",
    35,
    "", // Foto: assets/img/products/baregk/cepillo-facial-baregk/cepillo-facial-baregk.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Tazón para afeitar",
    "Genérico",
    "Afeitado",
    100,
    "", // Foto: assets/img/products/generico/tazon-para-afeitar-generico/tazon-para-afeitar-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Porta navajas sin cubierta Aashta",
    "Aashta",
    "Navajas y porta navajas",
    150,
    "", // Foto: assets/img/products/aashta/porta-navajas-sin-cubierta-aashta/porta-navajas-sin-cubierta-aashta.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Spray enfriador Babyliss All in one",
    "BaBylissPRO",
    "Mantenimiento de máquinas",
    200,
    "", // Foto: assets/img/products/babyliss/spray-enfriador-all-in-one-babyliss/spray-enfriador-all-in-one-babyliss.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Espejo redondo Splash",
    "Splash",
    "Espejos",
    160,
    "", // Foto: assets/img/products/splash/espejo-redondo-splash/espejo-redondo-splash.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Bledo",
    "Genérico",
    "Brochas y bledos",
    100,
    "", // Foto: assets/img/products/generico/bledo-generico/bledo-generico.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Mandil Trento",
    "Trento",
    "Mandiles y chalecos",
    200,
    "", // Foto: assets/img/products/trento/mandil-trento/mandil-trento.png
    "",
  ),
  m(
    "Artículos de Barbería",
    "Peine Cricket",
    "Cricket",
    "Peines",
    70,
    "", // Foto: assets/img/products/cricket/peine-cricket/peine-cricket.png
    "",
  ),
  // ===== CAPAS =====
  // Fotos en assets/img/products/<marca>/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Capas",
    "Capas básicas # 2",
    "Genérico",
    "Capas básicas",
    160,
    "assets/img/products/generico/capas-basicas-2-generico/capas-basicas-2-generico.jpg",
    "10 modelos a elegir. Capas para corte de cabello. Tipo básica.",
  ),
  m(
    "Capas",
    "Capas básicas # 1",
    "Genérico",
    "Capas básicas",
    160,
    ["assets/img/products/generico/capas-basicas-1-generico/capas-basicas-1-generico.jpg", "assets/img/products/generico/capas-basicas-2-generico/capas-basicas-2-generico.jpg"],
    "10 modelos a elegir. Capa ideal para barbería y peluquería.",
  ),
  m(
    "Capas",
    "Capa premium rombos",
    "Genérico",
    "Capas premium",
    270,
    "assets/img/products/generico/capa-premium-rombos-generico/capa-premium-rombos-generico.jpg",
    "Capa con rombos de fondo.",
    1,
  ),
  m(
    "Capas",
    "Capa premium",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-premium-generico/capa-premium-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Premium Club America",
    "Genérico",
    "Capas premium",
    200,
    "", // Foto: assets/img/products/generico/capa-premium-club-america-generico/capa-premium-club-america-generico.png
    "",
  ),
  m(
    "Capas",
    "CAPAS LISA VARIOS COLORES",
    "Genérico",
    "Capas básicas",
    160,
    "", // Foto: assets/img/products/generico/capas-lisa-varios-colores-generico/capas-lisa-varios-colores-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Rico McPato",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-rico-mcpato-generico/capa-rico-mcpato-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Trento Camuflaje Rojo Gris",
    "Trento",
    "Capas premium",
    260,
    "", // Foto: assets/img/products/trento/capa-camuflaje-rojo-gris-trento/capa-camuflaje-rojo-gris-trento.png
    "",
  ),
  m(
    "Capas",
    "Capa Supreme",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-supreme-generico/capa-supreme-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa dólar",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-dolar-generico/capa-dolar-generico.png
    "",
  ),
  m(
    "Capas",
    "Capas para niños",
    "Genérico",
    "Capas para niños",
    200,
    "", // Foto: assets/img/products/generico/capas-para-ninos-generico/capas-para-ninos-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Versace Escudo",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-versace-escudo-generico/capa-versace-escudo-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa para corte",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-para-corte-generico/capa-para-corte-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Reno",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-reno-generico/capa-reno-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa maestro Roshi",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-maestro-roshi-generico/capa-maestro-roshi-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Burberry Caballito",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-burberry-caballito-generico/capa-burberry-caballito-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Barberlife",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-barberlife-generico/capa-barberlife-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa básica # 3",
    "Genérico",
    "Capas básicas",
    150,
    "", // Foto: assets/img/products/generico/capa-basica-3-generico/capa-basica-3-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Supreme Goku",
    "Genérico",
    "Capas premium",
    260,
    "", // Foto: assets/img/products/generico/capa-supreme-goku-generico/capa-supreme-goku-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Camuflaje Verde Azul Negro",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-camuflaje-verde-azul-negro-generico/capa-camuflaje-verde-azul-negro-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Supreme Collage Rojo",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-supreme-collage-rojo-generico/capa-supreme-collage-rojo-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Premium Club Pumas",
    "Genérico",
    "Capas premium",
    200,
    "", // Foto: assets/img/products/generico/capa-premium-club-pumas-generico/capa-premium-club-pumas-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Gucci fondo beige",
    "Genérico",
    "Capas premium",
    260,
    "", // Foto: assets/img/products/generico/capa-gucci-fondo-beige-generico/capa-gucci-fondo-beige-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa con logo Wahl negra",
    "Wahl",
    "Capas premium",
    200,
    "", // Foto: assets/img/products/wahl/capa-con-logo-negra-wahl/capa-con-logo-negra-wahl.png
    "",
  ),
  m(
    "Capas",
    "Capa Thug life",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-thug-life-generico/capa-thug-life-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Louis Vuitton",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-louis-vuitton-generico/capa-louis-vuitton-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Trento Navidad Rosa",
    "Trento",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/trento/capa-navidad-rosa-trento/capa-navidad-rosa-trento.png
    "",
  ),
  m(
    "Capas",
    "Capa Louis Vuitton Colores",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-louis-vuitton-colores-generico/capa-louis-vuitton-colores-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa David Grafiti",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-david-grafiti-generico/capa-david-grafiti-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Burberry",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-burberry-generico/capa-burberry-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Premium Club Chivas",
    "Genérico",
    "Capas premium",
    200,
    "", // Foto: assets/img/products/generico/capa-premium-club-chivas-generico/capa-premium-club-chivas-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa calendario Azteca colores",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-calendario-azteca-colores-generico/capa-calendario-azteca-colores-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa colores animada",
    "Genérico",
    "Capas premium",
    260,
    "", // Foto: assets/img/products/generico/capa-colores-animada-generico/capa-colores-animada-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Colores",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-colores-generico/capa-colores-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Supreme Blanco",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-supreme-blanco-generico/capa-supreme-blanco-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Monopoly",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-monopoly-generico/capa-monopoly-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Bugs Bunny",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-bugs-bunny-generico/capa-bugs-bunny-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Billetes Disney",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-billetes-disney-generico/capa-billetes-disney-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Mickey",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-mickey-generico/capa-mickey-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Nike (Thug life)",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-nike-thug-life-generico/capa-nike-thug-life-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Rick & Morty",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-rick-morty-generico/capa-rick-morty-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Rico Mc Pato # 2",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-rico-mc-pato-2-generico/capa-rico-mc-pato-2-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Guasón",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-guason-generico/capa-guason-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Supreme Angel",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-supreme-angel-generico/capa-supreme-angel-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Rosas y Calavera",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-rosas-y-calavera-generico/capa-rosas-y-calavera-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Barber Shop",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-barber-shop-generico/capa-barber-shop-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa Supreme Colores",
    "Genérico",
    "Capas premium",
    270,
    "", // Foto: assets/img/products/generico/capa-supreme-colores-generico/capa-supreme-colores-generico.png
    "",
  ),
  m(
    "Capas",
    "Capa de corte cuadros beige",
    "",
    "Capas premium",
    null,
    "assets/img/products/capa-de-corte-cuadros-beige.jpg",
    "Capa de barbero con estampado de cuadros y cuello ajustable.",
  ),
  // ===== TIJERAS =====
  // Fotos en assets/img/products/<marca>/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Tijeras",
    "Combo tijeras Aashta 6″",
    "Aashta",
    "Combos de tijeras",
    650,
    "assets/img/products/aashta/combo-tijeras-6-aashta/combo-tijeras-6-aashta.jpg",
    "Combo de tijeras marca Aashta. Medida 6″. Acero inoxidable.",
    1,
  ),
  m(
    "Tijeras",
    "Combo tijeras Purple Dragon 6″",
    "Purple Dragon",
    "Combos de tijeras",
    650,
    "assets/img/products/purple-dragon/combo-tijeras-6-purple-dragon/combo-tijeras-6-purple-dragon.jpg",
    "Tijeras marca Purple Dragon. Tamaño 6″. Acero inoxidable.",
  ),
  m(
    "Tijeras",
    "Combo tijeras 5.5″",
    "Genérico",
    "Combos de tijeras",
    450,
    "assets/img/products/generico/combo-tijeras-5-5-generico/combo-tijeras-5-5-generico.jpg",
    "Combo de tijeras marca Aashta. Acero inoxidable. Tamaño 5.5″.",
  ),
  m(
    "Tijeras",
    "Set Katana Negro Rockwell",
    "Rockwell",
    "Combos de tijeras",
    6000,
    "", // Foto: assets/img/products/rockwell/set-katana-negro-rockwell/set-katana-negro-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijeras Aashta Tornasol 7″",
    "Aashta",
    "Tijeras",
    700,
    "", // Foto: assets/img/products/aashta/tijeras-tornasol-7-aashta/tijeras-tornasol-7-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Aashta 5.5″",
    "Aashta",
    "Combos de tijeras",
    650,
    "", // Foto: assets/img/products/aashta/combo-tijeras-5-5-aashta/combo-tijeras-5-5-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Combo Tijeras Tornasol Aashta 7″",
    "Aashta",
    "Combos de tijeras",
    750,
    "", // Foto: assets/img/products/aashta/combo-tijeras-tornasol-7-aashta/combo-tijeras-tornasol-7-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera Edición 10 años Rockwell 5.5″",
    "Rockwell",
    "Tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/tijera-edicion-10-anos-5-5-rockwell/tijera-edicion-10-anos-5-5-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Denbe 7″",
    "Denbe",
    "Combos de tijeras",
    700,
    "", // Foto: assets/img/products/denbe/combo-tijeras-7-denbe/combo-tijeras-7-denbe.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Aashta 7″",
    "Aashta",
    "Combos de tijeras",
    700,
    "", // Foto: assets/img/products/aashta/combo-tijeras-7-aashta/combo-tijeras-7-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Denbe 6.5″",
    "Denbe",
    "Combos de tijeras",
    750,
    "", // Foto: assets/img/products/denbe/combo-tijeras-6-5-denbe/combo-tijeras-6-5-denbe.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Aashta 5.5″",
    "Aashta",
    "Combos de tijeras",
    450,
    "", // Foto: assets/img/products/aashta/combo-tijeras-5-5-2-aashta/combo-tijeras-5-5-2-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Aashta Tornasol 5.5″",
    "Aashta",
    "Combos de tijeras",
    650,
    "", // Foto: assets/img/products/aashta/combo-tijeras-tornasol-5-5-aashta/combo-tijeras-tornasol-5-5-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Combo de tijeras Aashta Negro 5.5″",
    "Aashta",
    "Combos de tijeras",
    650,
    "", // Foto: assets/img/products/aashta/combo-de-tijeras-negro-5-5-aashta/combo-de-tijeras-negro-5-5-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Aashta Azul 5.5″",
    "Aashta",
    "Combos de tijeras",
    650,
    "", // Foto: assets/img/products/aashta/combo-tijeras-azul-5-5-aashta/combo-tijeras-azul-5-5-aashta.png
    "",
  ),
  m(
    "Tijeras",
    "Set básico negro Rockwell 6.0",
    "Rockwell",
    "Combos de tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/set-basico-negro-6-0-rockwell/set-basico-negro-6-0-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras 6″ Purple Dragon",
    "Purple Dragon",
    "Combos de tijeras",
    650,
    "", // Foto: assets/img/products/purple-dragon/combo-tijeras-6-2-purple-dragon/combo-tijeras-6-2-purple-dragon.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera Rockwell Edición Josh OP 5.5",
    "Rockwell",
    "Tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/tijera-edicion-josh-op-5-5-rockwell/tijera-edicion-josh-op-5-5-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Set básico plateado Rockwell 6″",
    "Rockwell",
    "Combos de tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/set-basico-plateado-6-rockwell/set-basico-plateado-6-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera Rockwell Black offset 5.25″",
    "Rockwell",
    "Combos de tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/tijera-black-offset-5-25-rockwell/tijera-black-offset-5-25-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Devil Rockwell 6.5″",
    "Rockwell",
    "Combos de tijeras",
    6500,
    "", // Foto: assets/img/products/rockwell/combo-tijeras-devil-6-5-rockwell/combo-tijeras-devil-6-5-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Set Barbero Estudiante Rockwell 7″",
    "Rockwell",
    "Combos de tijeras",
    3500,
    "", // Foto: assets/img/products/rockwell/set-barbero-estudiante-7-rockwell/set-barbero-estudiante-7-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera Swivel Handle Rockwell 6″",
    "Rockwell",
    "Tijeras",
    6500,
    "", // Foto: assets/img/products/rockwell/tijera-swivel-handle-6-rockwell/tijera-swivel-handle-6-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Rockwell 6.5″",
    "Rockwell",
    "Combos de tijeras",
    6000,
    "", // Foto: assets/img/products/rockwell/combo-tijeras-6-5-rockwell/combo-tijeras-6-5-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Set Plata Punto Rockwell 6″",
    "Rockwell",
    "Combos de tijeras",
    5500,
    "", // Foto: assets/img/products/rockwell/set-plata-punto-6-rockwell/set-plata-punto-6-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera filo dulce 7″",
    "Genérico",
    "Tijeras",
    2800,
    "", // Foto: assets/img/products/generico/tijera-filo-dulce-7-generico/tijera-filo-dulce-7-generico.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Rockwell 7″",
    "Rockwell",
    "Combos de tijeras",
    3500,
    "", // Foto: assets/img/products/rockwell/combo-tijeras-7-rockwell/combo-tijeras-7-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Combo tijeras Rockwell 6″",
    "Rockwell",
    "Combos de tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/combo-tijeras-6-rockwell/combo-tijeras-6-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera de entresacar Rockwell 6″",
    "Rockwell",
    "Tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/tijera-de-entresacar-6-rockwell/tijera-de-entresacar-6-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera Filo Recto Rockwell 7″",
    "Rockwell",
    "Tijeras",
    2500,
    "", // Foto: assets/img/products/rockwell/tijera-filo-recto-7-rockwell/tijera-filo-recto-7-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijeras Rockwell Silver Mate 7″",
    "Rockwell",
    "Tijeras",
    null,
    "", // Foto: assets/img/products/rockwell/tijeras-silver-mate-7-rockwell/tijeras-silver-mate-7-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Tijera Rockwell Edición Limitada",
    "Rockwell",
    "Tijeras",
    4500,
    "", // Foto: assets/img/products/rockwell/tijera-edicion-limitada-rockwell/tijera-edicion-limitada-rockwell.png
    "",
  ),
  m(
    "Tijeras",
    "Combo Tijeras Rockwell 6″",
    "Rockwell",
    "Combos de tijeras",
    5500,
    "", // Foto: assets/img/products/rockwell/combo-tijeras-6-2-rockwell/combo-tijeras-6-2-rockwell.png
    "",
  ),
  // ===== REPUESTOS & ACCESORIOS =====
  // Fotos en assets/img/products/<marca>/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Repuestos & Accesorios",
    "Repuesto Shaver Babyliss GENÉRICO",
    "Genérico",
    "Repuestos de rasuradora",
    350,
    "assets/img/products/generico/repuesto-shaver-babyliss-generico/repuesto-shaver-babyliss-generico.jpg",
    "Pieza completa para rasuradoras marca Babyliss.",
  ),
  m(
    "Repuestos & Accesorios",
    "Resorte tensor para Babyliss",
    "BaBylissPRO",
    "Repuestos de cortadora",
    80,
    "assets/img/products/babyliss/resorte-tensor-para-babyliss/resorte-tensor-para-babyliss.jpg",
    "Resorte tensor para clipper Babyliss FX870.",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para trimmer Kemei",
    "Kemei",
    "Repuestos de trimmer",
    300,
    "assets/img/products/kemei/repuesto-para-trimmer-kemei/repuesto-para-trimmer-kemei.jpg",
    "Repuesto original para trimmer Kemei modelo 2299.",
  ),
  m(
    "Repuestos & Accesorios",
    "Switch kemei",
    "Kemei",
    "Repuestos de cortadora",
    120,
    "", // Foto: assets/img/products/kemei/switch-kemei/switch-kemei.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para shaver Andis",
    "Andis",
    "Repuestos de rasuradora",
    550,
    "", // Foto: assets/img/products/andis/repuesto-para-shaver-andis/repuesto-para-shaver-andis.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Carcasa superior Magic colores",
    "Wahl",
    "Repuestos de cortadora",
    120,
    "", // Foto: assets/img/products/wahl/carcasa-superior-magic-colores-wahl/carcasa-superior-magic-colores-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto de cuchillas Wahl",
    "Wahl",
    "Cuchillas",
    400,
    "", // Foto: assets/img/products/wahl/repuesto-de-cuchillas-wahl/repuesto-de-cuchillas-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto cuchilla detailer ORIGINAL",
    "Wahl",
    "Cuchillas",
    400,
    "", // Foto: assets/img/products/wahl/repuesto-cuchilla-detailer-original-wahl/repuesto-cuchilla-detailer-original-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cargador para shaver Andis",
    "Andis",
    "Carga y baterías",
    350,
    "", // Foto: assets/img/products/andis/cargador-para-shaver-andis/cargador-para-shaver-andis.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto cargador Wahl",
    "Wahl",
    "Carga y baterías",
    450,
    "", // Foto: assets/img/products/wahl/repuesto-cargador-wahl/repuesto-cargador-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para shaver Andis (GENERICO)",
    "Genérico",
    "Repuestos de rasuradora",
    350,
    "", // Foto: assets/img/products/generico/repuesto-para-shaver-andis-generico/repuesto-para-shaver-andis-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para trimmer JRL 2020",
    "JRL",
    "Repuestos de trimmer",
    550,
    "", // Foto: assets/img/products/jrl/repuesto-para-trimmer-2020-jrl/repuesto-para-trimmer-2020-jrl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla Babyliss Gold",
    "BaBylissPRO",
    "Cuchillas",
    900,
    "", // Foto: assets/img/products/babyliss/cuchilla-gold-babyliss/cuchilla-gold-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto trimmer Babyliss Grafito 2.0",
    "BaBylissPRO",
    "Repuestos de trimmer",
    900,
    "", // Foto: assets/img/products/babyliss/repuesto-trimmer-grafito-2-0-babyliss/repuesto-trimmer-grafito-2-0-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla para trimmer babyliss",
    "BaBylissPRO",
    "Cuchillas",
    350,
    "", // Foto: assets/img/products/babyliss/cuchilla-para-trimmer-babyliss/cuchilla-para-trimmer-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Resorte para máquina de corte",
    "Genérico",
    "Repuestos de cortadora",
    60,
    "", // Foto: assets/img/products/generico/resorte-para-maquina-de-corte-generico/resorte-para-maquina-de-corte-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Kit de tornillo para palanca de máquina",
    "Genérico",
    "Repuestos de cortadora",
    70,
    "", // Foto: assets/img/products/generico/kit-de-tornillo-para-palanca-de-maquina-generico/kit-de-tornillo-para-palanca-de-maquina-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cargador",
    "Genérico",
    "Carga y baterías",
    200,
    "", // Foto: assets/img/products/generico/cargador-generico/cargador-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para shaver",
    "Genérico",
    "Repuestos de rasuradora",
    400,
    "", // Foto: assets/img/products/generico/repuesto-para-shaver-generico/repuesto-para-shaver-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto de cuchilla Andis GTX",
    "Andis",
    "Cuchillas",
    300,
    "", // Foto: assets/img/products/andis/repuesto-de-cuchilla-gtx-andis/repuesto-de-cuchilla-gtx-andis.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Base de carga para JRL",
    "JRL",
    "Carga y baterías",
    400,
    "", // Foto: assets/img/products/jrl/base-de-carga-para-jrl/base-de-carga-para-jrl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla de cerámica para trimmer",
    "Genérico",
    "Cuchillas",
    100,
    "", // Foto: assets/img/products/generico/cuchilla-de-ceramica-para-trimmer-generico/cuchilla-de-ceramica-para-trimmer-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Set de peines guía para clipper",
    "Genérico",
    "Repuestos de cortadora",
    150,
    "", // Foto: assets/img/products/generico/set-de-peines-guia-para-clipper-2-generico/set-de-peines-guia-para-clipper-2-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Switch Wahl",
    "Wahl",
    "Repuestos de cortadora",
    80,
    "", // Foto: assets/img/products/wahl/switch-wahl/switch-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para shaver babyliss",
    "BaBylissPRO",
    "Repuestos de rasuradora",
    550,
    "", // Foto: assets/img/products/babyliss/repuesto-para-shaver-babyliss/repuesto-para-shaver-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla de cerámica",
    "Genérico",
    "Cuchillas",
    120,
    "", // Foto: assets/img/products/generico/cuchilla-de-ceramica-generico/cuchilla-de-ceramica-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para Clipper JRL 2020",
    "JRL",
    "Repuestos de cortadora",
    500,
    "", // Foto: assets/img/products/jrl/repuesto-para-clipper-2020-jrl/repuesto-para-clipper-2020-jrl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas cóncavas",
    "Genérico",
    "Cuchillas",
    200,
    "", // Foto: assets/img/products/generico/cuchillas-concavas-generico/cuchillas-concavas-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Base para cuchilla",
    "Genérico",
    "Cuchillas",
    80,
    "", // Foto: assets/img/products/generico/base-para-cuchilla-generico/base-para-cuchilla-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Base para palanca de máquina de corte",
    "Genérico",
    "Repuestos de cortadora",
    80,
    "", // Foto: assets/img/products/generico/base-para-palanca-de-maquina-de-corte-generico/base-para-palanca-de-maquina-de-corte-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto en combo para clipper Babyliss",
    "BaBylissPRO",
    "Repuestos de cortadora",
    100,
    "", // Foto: assets/img/products/babyliss/repuesto-en-combo-para-clipper-babyliss/repuesto-en-combo-para-clipper-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Palanca para Clipper",
    "Genérico",
    "Repuestos de cortadora",
    60,
    "", // Foto: assets/img/products/generico/palanca-para-clipper-generico/palanca-para-clipper-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas Wahl micro dentadas",
    "Wahl",
    "Cuchillas",
    400,
    "", // Foto: assets/img/products/wahl/cuchillas-micro-dentadas-wahl/cuchillas-micro-dentadas-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Carcasa M pro Individual",
    "Genérico",
    "Repuestos de cortadora",
    120,
    "", // Foto: assets/img/products/generico/carcasa-m-pro-individual-generico/carcasa-m-pro-individual-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Base de carga JRL",
    "JRL",
    "Carga y baterías",
    450,
    "", // Foto: assets/img/products/jrl/base-de-carga-jrl/base-de-carga-jrl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Base de carga Wahl ORIGINAL",
    "Wahl",
    "Carga y baterías",
    550,
    "", // Foto: assets/img/products/wahl/base-de-carga-original-wahl/base-de-carga-original-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cable USB para carga Wahl",
    "Wahl",
    "Carga y baterías",
    200,
    "", // Foto: assets/img/products/wahl/cable-usb-para-carga-wahl/cable-usb-para-carga-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla Echo S|C",
    "StyleCraft",
    "Cuchillas",
    1050,
    "", // Foto: assets/img/products/stylecraft/cuchilla-echo-s-c-stylecraft/cuchilla-echo-s-c-stylecraft.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas e-trimmer Old Scull",
    "Old Scull",
    "Cuchillas",
    550,
    "", // Foto: assets/img/products/old-scull/cuchillas-e-trimmer-old-scull/cuchillas-e-trimmer-old-scull.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla trimmer SC & GAMMA",
    "StyleCraft / Gamma+",
    "Cuchillas",
    1000,
    "", // Foto: assets/img/products/stylecraft/cuchilla-trimmer-sc-stylecraft/cuchilla-trimmer-sc-stylecraft.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas Clipper Nitro/Nexus Old Scull",
    "Old Scull",
    "Cuchillas",
    600,
    "", // Foto: assets/img/products/old-scull/cuchillas-clipper-nitro-nexus-old-scull/cuchillas-clipper-nitro-nexus-old-scull.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para navaja de textura",
    "Genérico",
    "Repuestos de cortadora",
    15,
    "", // Foto: assets/img/products/generico/repuesto-para-navaja-de-textura-generico/repuesto-para-navaja-de-textura-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Base de carga para trimmer Babyliss",
    "BaBylissPRO",
    "Carga y baterías",
    400,
    "", // Foto: assets/img/products/babyliss/base-de-carga-para-trimmer-babyliss/base-de-carga-para-trimmer-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Base de carga para Lo Pro Babyliss",
    "BaBylissPRO",
    "Carga y baterías",
    350,
    "", // Foto: assets/img/products/babyliss/base-de-carga-para-lo-pro-babyliss/base-de-carga-para-lo-pro-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas Wahl Gold",
    "Wahl",
    "Cuchillas",
    400,
    "", // Foto: assets/img/products/wahl/cuchillas-gold-wahl/cuchillas-gold-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Pila recargable para Babyliss",
    "BaBylissPRO",
    "Carga y baterías",
    150,
    "", // Foto: assets/img/products/babyliss/pila-recargable-para-babyliss/pila-recargable-para-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas Wahl Balding 6x0",
    "Wahl",
    "Cuchillas",
    350,
    "", // Foto: assets/img/products/wahl/cuchillas-balding-6x0-wahl/cuchillas-balding-6x0-wahl.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla babyliss Grafito 2.0",
    "BaBylissPRO",
    "Cuchillas",
    900,
    "", // Foto: assets/img/products/babyliss/cuchilla-grafito-2-0-babyliss/cuchilla-grafito-2-0-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla Babyliss DLC 2.0",
    "BaBylissPRO",
    "Cuchillas",
    900,
    "", // Foto: assets/img/products/babyliss/cuchilla-dlc-2-0-babyliss/cuchilla-dlc-2-0-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla Babyliss Precisión Fade",
    "BaBylissPRO",
    "Cuchillas",
    900,
    "", // Foto: assets/img/products/babyliss/cuchilla-precision-fade-babyliss/cuchilla-precision-fade-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Tapete cargador Babyliss Tomb 45",
    "BaBylissPRO / Tomb 45",
    "Carga y baterías",
    600,
    "", // Foto: assets/img/products/babyliss/tapete-cargador-babyliss/tapete-cargador-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Malla para shaver (1 malla)",
    "Genérico",
    "Repuestos de rasuradora",
    120,
    "", // Foto: assets/img/products/generico/malla-para-shaver-1-malla-generico/malla-para-shaver-1-malla-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas Kemei 2296",
    "Kemei",
    "Cuchillas",
    300,
    "", // Foto: assets/img/products/kemei/cuchillas-2296-kemei/cuchillas-2296-kemei.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto Shaver UV",
    "Genérico",
    "Repuestos de rasuradora",
    600,
    "", // Foto: assets/img/products/generico/repuesto-shaver-uv-generico/repuesto-shaver-uv-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto Shaver Babyliss FX3",
    "BaBylissPRO",
    "Repuestos de rasuradora",
    550,
    "", // Foto: assets/img/products/babyliss/repuesto-shaver-fx3-babyliss/repuesto-shaver-fx3-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto shaver Babyliss FX ONE",
    "BaBylissPRO",
    "Repuestos de rasuradora",
    600,
    "", // Foto: assets/img/products/babyliss/repuesto-shaver-fx-one-babyliss/repuesto-shaver-fx-one-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla Trimmer SC / Old Scull",
    "StyleCraft / Old Scull",
    "Cuchillas",
    500,
    "", // Foto: assets/img/products/stylecraft/cuchilla-trimmer-sc-2-stylecraft/cuchilla-trimmer-sc-2-stylecraft.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla Trimmer Babyliss Tomb 45",
    "BaBylissPRO / Tomb 45",
    "Cuchillas",
    1000,
    "", // Foto: assets/img/products/babyliss/cuchilla-trimmer-babyliss/cuchilla-trimmer-babyliss.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto cuchilla Clipper VGR 880",
    "VGR",
    "Cuchillas",
    500,
    "", // Foto: assets/img/products/vgr/repuesto-cuchilla-clipper-880-vgr/repuesto-cuchilla-clipper-880-vgr.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto Cuchilla VGR V-015/V-035C",
    "VGR",
    "Cuchillas",
    500,
    "", // Foto: assets/img/products/vgr/repuesto-cuchilla-v-015-v-035c-vgr/repuesto-cuchilla-v-015-v-035c-vgr.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto cuchilla Trimmer V-880T",
    "VGR",
    "Cuchillas",
    450,
    "", // Foto: assets/img/products/vgr/repuesto-cuchilla-trimmer-v-880t-vgr/repuesto-cuchilla-trimmer-v-880t-vgr.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla Genérica para StyleCraft",
    "Genérico",
    "Cuchillas",
    500,
    "", // Foto: assets/img/products/generico/cuchilla-generica-para-stylecraft-generico/cuchilla-generica-para-stylecraft-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla 360° Old Scull",
    "Old Scull",
    "Cuchillas",
    550,
    "", // Foto: assets/img/products/old-scull/cuchilla-360-old-scull/cuchilla-360-old-scull.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto Shaver Sharp Old Scull",
    "Old Scull",
    "Repuestos de rasuradora",
    550,
    "", // Foto: assets/img/products/old-scull/repuesto-shaver-sharp-old-scull/repuesto-shaver-sharp-old-scull.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchilla E clipper Old Scull Neo",
    "Old Scull",
    "Cuchillas",
    600,
    "", // Foto: assets/img/products/old-scull/cuchilla-e-clipper-neo-old-scull/cuchilla-e-clipper-neo-old-scull.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto trimmer VGR 977-885",
    "VGR",
    "Repuestos de trimmer",
    400,
    "", // Foto: assets/img/products/vgr/repuesto-trimmer-977-885-vgr/repuesto-trimmer-977-885-vgr.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto Genérico UV",
    "Genérico",
    "Repuestos de cortadora",
    400,
    "", // Foto: assets/img/products/generico/repuesto-uv-generico/repuesto-uv-generico.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto shaver Infinity Old Scull",
    "Old Scull",
    "Repuestos de rasuradora",
    550,
    "", // Foto: assets/img/products/old-scull/repuesto-shaver-infinity-old-scull/repuesto-shaver-infinity-old-scull.png
    "",
  ),
  m(
    "Repuestos & Accesorios",
    "Cuchillas Babyliss Faper",
    "BaBylissPRO",
    "Cuchillas",
    950,
    "", // Foto: assets/img/products/babyliss/cuchillas-faper-babyliss/cuchillas-faper-babyliss.png
    "",
  ),
  // ===== CARAMELOS & TAPETES =====
  // Fotos en assets/img/products/<marca>/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Caramelos & Tapetes",
    "Caramelo blanco y negro",
    "Genérico",
    "Caramelos",
    2000,
    "assets/img/products/generico/caramelo-blanco-y-negro-generico/caramelo-blanco-y-negro-generico.jpg",
    "Caramelo para barbería. Color blanco y negro. Con luz. Giratorio.",
  ),
  m(
    "Caramelos & Tapetes",
    "Caramelo con esfera",
    "Genérico",
    "Caramelos",
    2000,
    "assets/img/products/generico/caramelo-con-esfera-generico/caramelo-con-esfera-generico.jpg",
    "Caramelo de colores con esfera de luz. Con interruptor.",
  ),
  m(
    "Caramelos & Tapetes",
    "Tapetes antifatiga",
    "Genérico",
    "Tapetes",
    1700,
    "assets/img/products/generico/tapetes-antifatiga-generico/tapetes-antifatiga-generico.jpg",
    "Tapete antifatiga profesional de forma rectangular.",
  ),
  m(
    "Caramelos & Tapetes",
    "Caramelo Rosa",
    "Genérico",
    "Caramelos",
    1200,
    "", // Foto: assets/img/products/generico/caramelo-rosa-generico/caramelo-rosa-generico.png
    "",
  ),
  m(
    "Caramelos & Tapetes",
    "Caramelo Farol",
    "Genérico",
    "Caramelos",
    1550,
    "", // Foto: assets/img/products/generico/caramelo-farol-generico/caramelo-farol-generico.png
    "",
  ),
  m(
    "Colorimetría",
    "Peróxido en crema Hidra 10/20/30",
    "Hidra",
    "Peróxidos",
    70,
    "assets/img/products/peroxido-en-crema-hidra-10-20-30.jpg",
    "Peróxido en crema Hidracolor en 10, 20 y 30.",
  ),
  m(
    "Colorimetría",
    "Combo decolorante Hidra",
    "Hidra",
    "Decolorantes",
    220,
    "assets/img/products/combo-decolorante-hidra.jpg",
    "Sistema de decoloración Hidra: decolorante y peróxido.",
  ),
  m(
    "Colorimetría",
    "Sobre decolorante Kuul",
    "Kuul",
    "Decolorantes",
    55,
    "assets/img/products/sobre-decolorante-kuul.jpg",
    "Sobre decolorante Kuul Change Me Bleach Powder.",
  ),
  m(
    "Otras marcas",
    "Polvo de textura Powder Play Wax",
    "Super Wet",
    PO,
    null,
    "assets/img/products/polvo-de-textura-powder-play-wax.jpg",
    "20 g. Acabado mate, más volumen y textura.",
  ),
  // ===== OTRAS MARCAS (productos de aplicación) =====
  // Fotos en assets/img/products/<marca>/<carpeta>/<carpeta>.png (mismo nombre que la carpeta)
  m(
    "Otras marcas",
    "Cera Red One",
    "Red One",
    CG,
    140,
    "", // Foto: assets/img/products/red-one/cera-red-one/cera-red-one.png
    "",
  ),
  m(
    "Otras marcas",
    "Agua De Colonia Barber Marmara",
    "Marmara",
    CO,
    170,
    "", // Foto: assets/img/products/marmara/agua-de-colonia-barber-marmara/agua-de-colonia-barber-marmara.png
    "",
  ),
  m(
    "Otras marcas",
    "Cera Super Wet",
    "Super Wet",
    CG,
    60,
    "", // Foto: assets/img/products/super-wet/cera-super-wet/cera-super-wet.png
    "",
  ),
  m(
    "Otras marcas",
    "Cera Baregk Styling Wax",
    "Baregk",
    CG,
    65,
    "", // Foto: assets/img/products/baregk/cera-styling-wax-baregk/cera-styling-wax-baregk.png
    "",
  ),
  m(
    "Otras marcas",
    "Polvo voluminizador",
    "Genérico",
    PO,
    130,
    "", // Foto: assets/img/products/generico/polvo-voluminizador-generico/polvo-voluminizador-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Minoxidil 5% Kirkland (FRASCO)",
    "Kirkland",
    "Tratamientos capilares",
    150,
    "", // Foto: assets/img/products/kirkland/minoxidil-5-frasco-kirkland/minoxidil-5-frasco-kirkland.png
    "",
  ),
  m(
    "Otras marcas",
    "Crema para manos y cara TSF",
    "The Shave Factory",
    CF,
    140,
    "", // Foto: assets/img/products/the-shave-factory/crema-para-manos-y-cara-the-shave-factory/crema-para-manos-y-cara-the-shave-factory.png
    "",
  ),
  m(
    "Otras marcas",
    "Mascarilla NEGRA",
    "Genérico",
    CF,
    80,
    "", // Foto: assets/img/products/generico/mascarilla-negra-generico/mascarilla-negra-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Jabón para afeitar TSF",
    "The Shave Factory",
    "Afeitado",
    50,
    "", // Foto: assets/img/products/the-shave-factory/jabon-para-afeitar-the-shave-factory/jabon-para-afeitar-the-shave-factory.png
    "",
  ),
  m(
    "Otras marcas",
    "Loción Clubman Pinaud",
    "Clubman Pinaud",
    CO,
    170,
    "", // Foto: assets/img/products/clubman-pinaud/locion-clubman-pinaud/locion-clubman-pinaud.png
    "",
  ),
  m(
    "Otras marcas",
    "Cera Baregk hair wax 5D",
    "Baregk",
    CG,
    70,
    "", // Foto: assets/img/products/baregk/cera-hair-wax-5d-baregk/cera-hair-wax-5d-baregk.png
    "",
  ),
  m(
    "Otras marcas",
    "Fibras capilares Toppik",
    "Toppik",
    "Tratamientos capilares",
    200,
    "", // Foto: assets/img/products/toppik/fibras-capilares-toppik/fibras-capilares-toppik.png
    "",
  ),
  m(
    "Otras marcas",
    "Talco Clubman Pinaud",
    "Clubman Pinaud",
    "Talcos",
    130,
    "", // Foto: assets/img/products/clubman-pinaud/talco-clubman-pinaud/talco-clubman-pinaud.png
    "",
  ),
  m(
    "Otras marcas",
    "Tinte en Shampoo CASTAÑO OSCURO",
    "Genérico",
    "Tintes",
    100,
    "", // Foto: assets/img/products/generico/tinte-en-shampoo-castano-oscuro-generico/tinte-en-shampoo-castano-oscuro-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Polvo para heridas",
    "Genérico",
    "Otros",
    80,
    "", // Foto: assets/img/products/generico/polvo-para-heridas-generico/polvo-para-heridas-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Spray fijador The shave factory",
    "The Shave Factory",
    "Sprays fijadores",
    150,
    "", // Foto: assets/img/products/the-shave-factory/spray-fijador-the-shave-factory/spray-fijador-the-shave-factory.png
    "",
  ),
  m(
    "Otras marcas",
    "Ceras y Pomadas The Shave Factory",
    "The Shave Factory",
    PA,
    120,
    "", // Foto: assets/img/products/the-shave-factory/ceras-y-pomadas-the-shave-factory/ceras-y-pomadas-the-shave-factory.png
    "",
  ),
  m(
    "Otras marcas",
    "After shave Baregk 450 ml",
    "Baregk",
    CO,
    130,
    "", // Foto: assets/img/products/baregk/after-shave-450-ml-baregk/after-shave-450-ml-baregk.png
    "",
  ),
  m(
    "Otras marcas",
    "Gel para cabello Super Wet",
    "Super Wet",
    CG,
    25,
    "", // Foto: assets/img/products/super-wet/gel-para-cabello-super-wet/gel-para-cabello-super-wet.png
    "",
  ),
  m(
    "Otras marcas",
    "Tinte Bigen",
    "Bigen",
    "Tintes",
    80,
    "", // Foto: assets/img/products/bigen/tinte-bigen/tinte-bigen.png
    "",
  ),
  m(
    "Otras marcas",
    "Shaving gel The Shave Factory 1.5 lt",
    "The Shave Factory",
    "Afeitado",
    190,
    "", // Foto: assets/img/products/the-shave-factory/shaving-gel-1-5-lt-the-shave-factory/shaving-gel-1-5-lt-the-shave-factory.png
    "",
  ),
  m(
    "Otras marcas",
    "Derma Roller",
    "Genérico",
    "Tratamientos capilares",
    100,
    "", // Foto: assets/img/products/generico/derma-roller-generico/derma-roller-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Kiss Express (CASTAÑO OSCURO) K89",
    "Kiss Express",
    "Tintes",
    160,
    "", // Foto: assets/img/products/kiss-express/castano-oscuro-k89-kiss-express/castano-oscuro-k89-kiss-express.png
    "",
  ),
  m(
    "Otras marcas",
    "Shaving gel Baregk",
    "Baregk",
    "Afeitado",
    130,
    "", // Foto: assets/img/products/baregk/shaving-gel-baregk/shaving-gel-baregk.png
    "",
  ),
  m(
    "Otras marcas",
    "After shave Baregk AZUL",
    "Baregk",
    CO,
    120,
    "", // Foto: assets/img/products/baregk/after-shave-azul-baregk/after-shave-azul-baregk.png
    "",
  ),
  m(
    "Otras marcas",
    "Pomada sin marca",
    "Genérico",
    PA,
    40,
    "", // Foto: assets/img/products/generico/pomada-sin-marca-generico/pomada-sin-marca-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Aceite para barba",
    "Genérico",
    "Cuidado de barba",
    130,
    "", // Foto: assets/img/products/generico/aceite-para-barba-generico/aceite-para-barba-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Kiss express K98 NEGRO",
    "Kiss Express",
    "Tintes",
    160,
    "", // Foto: assets/img/products/kiss-express/k98-negro-kiss-express/k98-negro-kiss-express.png
    "",
  ),
  m(
    "Otras marcas",
    "Tinte en shampoo NEGRO",
    "Genérico",
    "Tintes",
    100,
    "", // Foto: assets/img/products/generico/tinte-en-shampoo-negro-generico/tinte-en-shampoo-negro-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Beard pen (pluma para barba)",
    "Genérico",
    "Cuidado de barba",
    90,
    "", // Foto: assets/img/products/generico/beard-pen-pluma-para-barba-generico/beard-pen-pluma-para-barba-generico.png
    "",
  ),
  m(
    "Otras marcas",
    "Crema para afeitar Pinaud",
    "Clubman Pinaud",
    "Afeitado",
    160,
    "", // Foto: assets/img/products/clubman-pinaud/crema-para-afeitar-clubman-pinaud/crema-para-afeitar-clubman-pinaud.png
    "",
  ),
  m(
    "Otras marcas",
    "Exfoliante Baregk",
    "Baregk",
    CF,
    150,
    "", // Foto: assets/img/products/baregk/exfoliante-baregk/exfoliante-baregk.png
    "",
  ),
  m(
    "Otras marcas",
    "Mascarilla negra TSF",
    "The Shave Factory",
    CF,
    180,
    "", // Foto: assets/img/products/the-shave-factory/mascarilla-negra-the-shave-factory/mascarilla-negra-the-shave-factory.png
    "",
  ),
  m(
    "Otras marcas",
    "Jabón para afeitar Rocky Reckless",
    "Rocky Reckless",
    "Afeitado",
    150,
    "", // Foto: assets/img/products/rocky-reckless/jabon-para-afeitar-rocky-reckless/jabon-para-afeitar-rocky-reckless.png
    "",
  ),
  m(
    "Otras marcas",
    "Crema para afeitar Rocky Reckless",
    "Rocky Reckless",
    "Afeitado",
    150,
    "", // Foto: assets/img/products/rocky-reckless/crema-para-afeitar-rocky-reckless/crema-para-afeitar-rocky-reckless.png
    "",
  ),
].map((x, k) => ({ ...x, id: k + 1 }));
