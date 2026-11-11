// ============================================================
// DATA.JS — Marcas, secciones y productos del catálogo.
// Para agregar un producto: copia una línea m(...) y cambia sus campos.
//
//   m( Sección, Nombre, Marca, Tipo, Precio, Foto, Descripción, Destacado )
//
//   - Sección:  debe coincidir con un nombre de SECS (abajo)
//   - Precio:   número, o null para mostrar "Consultar precio"
//   - Foto:     ruta dentro de assets/img/products/, o VARIAS fotos entre corchetes:
//               ["assets/img/products/a.jpg", "assets/img/products/a-2.jpg", "assets/img/products/a-3.jpg"]
//               (la primera es la principal; puedes poner todas las que quieras)
//   - Destacado: 1 para mostrar la etiqueta "Más vendido" en su tarjeta (opcional)
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
const m = (c, n, b, t, p, i, d, f) => {
  const imgs = (Array.isArray(i) ? i : [i]).filter(Boolean);
  return { c, n, b, t, p, i: imgs[0] || "", imgs, d, f };
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
    "", // Foto: assets/img/products/elegance/cera-hard-wax-elegance/cera-hard-wax-elegance.png
    "Cera de fijación extrema. Con aceite de argán. Contenido 100 gramos.",
  ),
  m(
    "Elegance",
    "Cera soft wax",
    "Elegance",
    CG,
    100,
    "", // Foto: assets/img/products/elegance/cera-soft-wax-elegance/cera-soft-wax-elegance.png
    "Cera para crear textura suave en el cabello con buena fijación. Fórmula transparente. Con aceite de argán.",
  ),
  m(
    "Elegance",
    "After shave Elegance",
    "Elegance",
    CO,
    160,
    "", // Foto: assets/img/products/elegance/after-shave-elegance/after-shave-elegance.png
    "Gel para después del rasurado o corte. Hidratante, para todo tipo de piel. Contenido 500 ml.\n\nAromas disponibles:\n- Menta\n- Aqua",
  ),
  m(
    "Elegance",
    "Exfoliante facial Elegance",
    "Elegance",
    CF,
    180,
    "", // Foto: assets/img/products/elegance/exfoliante-elegance/exfoliante-elegance.png
    "Exfoliante facial con aroma a menta. Contenido 500 gramos.",
  ),
  m(
    "Elegance",
    "Gel para cabello Moon Triple Acción",
    "Elegance",
    CG,
    100,
    "", // Foto: assets/img/products/elegance/gel-moon-triple-accion-elegance/gel-moon-triple-accion-elegance.png
    "Gel capilar de triple acción con fijación súper fuerte, volumen extremo y brillo atractivo, con fragancia refrescante. No deja el cabello graso ni con residuos y se puede usar en todo tipo de cabello.\n\nBeneficios:\n- Fijación súper fuerte\n- Brillo duradero\n- Gran volumen\n- Sin escamas\n- Fragancia refrescante\n\nModo de empleo: dosifica en tus manos la cantidad que necesitas según el largo y estado de tu cabello y usa los dedos para extenderlo, creando el estilo deseado. Ideal para uso diario.",
  ),
  m(
    "Elegance",
    "Gel para cabello Vitamin Strong Hold",
    "Elegance",
    CG,
    100,
    "", // Foto: assets/img/products/elegance/gel-vitamin-strong-hold-elegance/gel-vitamin-strong-hold-elegance.png
    "Gel infundido con vitamina Pro-VB5 para proteger el cabello y enriquecerlo con minerales. Fijación fuerte mientras protege tu cabello de daños, espesa los mechones y mejora su brillo.\n\nBeneficios:\n- Protege, espesa y da brillo al cabello\n- Brillo duradero\n- Gran volumen y aspecto natural\n- Fórmula sin escamas\n- Fragancia refrescante\n\nModo de empleo: dosifica en tus manos la cantidad que necesitas según el largo y estado de tu cabello y usa los dedos para extenderlo, creando el estilo deseado.",
  ),
  m(
    "Elegance",
    "Gel + Color Black Elegance",
    "Elegance",
    CG,
    100,
    "", // Foto: assets/img/products/elegance/gel-color-black-elegance/gel-color-black-elegance.png
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
    ["assets/img/products/level-3/after-shave-colonia-level-3/after-shave-colonia-level-3-2.jpg", "assets/img/products/level-3/after-shave-colonia-level-3/after-shave-colonia-level-3.jpg"],
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
    "", // Foto: assets/img/products/level-3/bifasico-level-3/bifasico-level-3.png
    "Spray desenredante bifásico sin enjuague que suaviza y acondiciona el cabello, aportando suavidad, brillo e hidratación sin dejar residuos ni sensación pegajosa.\n\nEnriquecido con aceite de karité, extracto de coco, queratina y vitamina E, hidrata y nutre cada hebra para reducir la rotura y el frizz. Perfecto para todo tipo de cabello, especialmente seco o dañado.\n\nModo de empleo: úsalo sobre el cabello húmedo o seco para refrescar, desenredar y proteger.",
  ),
  m(
    "Level 3",
    "Capa Level 3 con cuello de goma",
    "L3VEL3",
    "Capas con cuello de goma",
    450,
    "", // Foto: assets/img/products/level-3/capa-con-cuello-de-goma-level-3/capa-con-cuello-de-goma-level-3.png
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
    "", // Foto: assets/img/products/level-3/crema-para-peinar-level-3/crema-para-peinar-level-3.png
    "Crema formadora no pegajosa, sin residuos y flexible, de fijación media, que mantiene el peinado en su lugar todo el día con un aspecto natural. Agrega volumen y te permite renovar el peinado durante el día.",
  ),
  m(
    "Level 3",
    "Crema brillante Level 3",
    "L3VEL3",
    CG,
    160,
    "", // Foto: assets/img/products/level-3/crema-brillante-level-3/crema-brillante-level-3.png
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
    "", // Foto: assets/img/products/level-3/crema-para-rizos-level-3/crema-para-rizos-level-3.png
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
    "", // Foto: assets/img/products/level-3/balsamo-para-barba-y-bigote-level-3/balsamo-para-barba-y-bigote-level-3.png
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
    "", // Foto: assets/img/products/level-3/aceite-para-barba-level-3/aceite-para-barba-level-3.png
    "Beard oil con una mezcla de aceites naturales que hidratan, nutren y fortalecen el vello facial, dejando la barba suave, sin enredos y con un olor increíble.\n\nEnriquecido con aceite de argán, almendra, jojoba y coco. Controla el frizz, realza el brillo y mantiene sana la piel debajo de la barba.",
  ),
  m(
    "Level 3",
    "Cera Spider Level 3",
    "L3VEL3",
    CG,
    150,
    "", // Foto: assets/img/products/level-3/cera-spider-level-3/cera-spider-level-3.png
    "Spider Wax con fórmula de fibra que funciona como una telaraña, atrapando cada cabello para un control total. Fijación fuerte y duradera con flexibilidad, volumen y textura, y brillo medio.\n\nPermite moldear y remoldear con libertad. Nutre la fibra capilar, con aroma fresco y acabado limpio sin residuos.",
  ),
  m(
    "Level 3",
    "After Shave Level 3 750 ml",
    "L3VEL3",
    CO,
    220,
    "", // Foto: assets/img/products/level-3/after-shave-750-ml-level-3/after-shave-750-ml-level-3.png
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
    "Clipper Platinum 4x4",
    "4x4",
    "Cortadoras",
    2000,
    "", // Foto: assets/img/products/4x4/clipper-platinum-4x4/clipper-platinum-4x4.png
    "Cortadora de cabello profesional modelo Platinum.\n\nCaracterísticas:\n- Motor potente 3.0 V, 200 mA, 10,000 r/min, 8 W\n- Carga: 3 horas · Uso: 2.5 horas\n- Batería de ion de litio 3.7 V, 2500 mAh\n- Navajas DLC de 45 mm de ancho\n- Palanca metálica ajustable de 0.5 a 2.0 mm\n- Peso: 300 g · Medidas: 16 × 5.9 × 4.2 cm\n\nIncluye:\n- Cortadora 4x4 Profesional Platinum con cuchillas DLC de 45 mm\n- Protector plástico de cuchillas\n- 6 peines de aumento con gancho metálico (1.5, 3, 4.5, 6, 10 y 13 mm)\n- Adaptador-cargador de corriente\n- Cable USB tipo C y base de carga\n- Cepillo limpiador y aceite lubricante\n- Manual del propietario",
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
  m(
    "Tok",
    "TOK Exfoliante facial",
    "TOK",
    CF,
    160,
    "assets/img/products/tok-exfoliante-facial.jpg",
    "Microexfoliante para el rostro. Estimula la renovación de la piel.",
  ),
  m(
    "Tok",
    "TOK Protector solar",
    "TOK",
    CF,
    170,
    "assets/img/products/tok-protector-solar.jpg",
    "Protector solar 3 en 1: hidrata la piel y protege de los rayos solares.",
  ),
  m(
    "Tok",
    "TOK Facial Wash",
    "TOK",
    CF,
    160,
    "assets/img/products/tok-facial-wash.jpg",
    "Gel limpiador facial para el rostro. Pieles grasas.",
  ),
  m(
    "One Religion",
    "Cera One Religion Yami",
    "One Religion",
    CG,
    80,
    "assets/img/products/cera-one-religion-yami.jpg",
    "Cera para cabello. Efecto brillo. Contenido 150 gramos.",
    1,
  ),
  m(
    "One Religion",
    "After shave One Religion Kenji",
    "One Religion",
    CO,
    130,
    "assets/img/products/after-shave-one-religion-kenji.jpg",
    "Loción para después del corte o rasurado.",
  ),
  m(
    "One Religion",
    "Shaving gel One Religion Sakura",
    "One Religion",
    "Afeitado",
    150,
    "assets/img/products/shaving-gel-one-religion-sakura.jpg",
    "Gel para afeitar. Contenido 1 litro.",
  ),
  m(
    "Máquinas",
    "Clipper FX One",
    "BaBylissPRO",
    "Cortadoras",
    3500,
    "assets/img/products/clipper-fx-one.jpg",
    "Cuchilla ultradelgada moldeada por inyección de metal (MIM).",
    1,
  ),
  m(
    "Máquinas",
    "Masajeador WMARK NG-M2",
    "WMARK",
    "Masajeadores",
    1600,
    "assets/img/products/masajeador-wmark-ng-m2.jpg",
    "Masajeador eléctrico de mano, 4000 mAh.",
    1,
  ),
  m(
    "Máquinas",
    "Combo Trimmer & Shaver Silver",
    "BaBylissPRO",
    "Combos",
    4000,
    "assets/img/products/combo-trimmer-shaver-silver.jpg",
    "Colección LimitedFX con recortadora y afeitadora.",
    1,
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
  m(
    "Artículos de Barbería",
    "Porta navajas pinza",
    "",
    "Navajas y porta navajas",
    100,
    "assets/img/products/porta-navajas-pinza.jpg",
    "Porta navajas tipo pinza. Material plástico. Ligera. Varios colores.",
  ),
  m(
    "Artículos de Barbería",
    "Parches Babyliss para cabello",
    "BaBylissPRO",
    "Parches y sujetadores",
    150,
    "assets/img/products/parches-babyliss-para-cabello.jpg",
    "6 parches para sujetar el cabello.",
  ),
  m(
    "Artículos de Barbería",
    "Bledo madera Baregk",
    "Baregk",
    "Brochas y bledos",
    130,
    "assets/img/products/bledo-madera-baregk.jpg",
    "Bledo con mango de madera. Calidad premium.",
  ),
  m(
    "Capas",
    "Capas básicas #2",
    "",
    "Capas básicas",
    160,
    "assets/img/products/capas-basicas-2.jpg",
    "10 modelos a elegir. Capas para corte de cabello. Tipo básica.",
  ),
  m(
    "Capas",
    "Capas básicas #1",
    "",
    "Capas básicas",
    160,
    ["assets/img/products/capas-basicas-1.jpg", "assets/img/products/capas-basicas-2.jpg"],
    "10 modelos a elegir. Capa ideal para barbería y peluquería.",
  ),
  m(
    "Capas",
    "Capa premium rombos",
    "",
    "Capas premium",
    270,
    "assets/img/products/capa-premium-rombos.jpg",
    "Capa con rombos de fondo.",
    1,
  ),
  m(
    "Capas",
    "Capa con cuello de goma",
    "L3VEL3",
    "Capas con cuello de goma",
    null,
    "assets/img/products/capa-con-cuello-de-goma.jpg",
    "Varios colores y diseños: blanca, negra, azul, roja y más.",
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
  m(
    "Tijeras",
    "Combo tijeras Aashta 6″",
    "Aashta",
    "Combos de tijeras",
    650,
    "assets/img/products/combo-tijeras-aashta-6.jpg",
    "Combo de tijeras marca Aashta. Medida 6″. Acero inoxidable.",
    1,
  ),
  m(
    "Tijeras",
    "Combo tijeras Purple Dragon 6″",
    "Purple Dragon",
    "Combos de tijeras",
    650,
    "assets/img/products/combo-tijeras-purple-dragon-6.jpg",
    "Tijeras marca Purple Dragon. Tamaño 6″. Acero inoxidable.",
  ),
  m(
    "Tijeras",
    "Combo tijeras 5.5″",
    "Aashta",
    "Combos de tijeras",
    450,
    "assets/img/products/combo-tijeras-5-5.jpg",
    "Combo de tijeras marca Aashta. Acero inoxidable. Tamaño 5.5″.",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto shaver Babyliss genérico",
    "Genérico",
    "Repuestos de rasuradora",
    350,
    "assets/img/products/repuesto-shaver-babyliss-generico.jpg",
    "Pieza completa para rasuradoras marca Babyliss.",
  ),
  m(
    "Repuestos & Accesorios",
    "Resorte tensor para Babyliss",
    "BaBylissPRO",
    "Repuestos de cortadora",
    80,
    "assets/img/products/resorte-tensor-para-babyliss.jpg",
    "Resorte tensor para clipper Babyliss FX870.",
  ),
  m(
    "Repuestos & Accesorios",
    "Repuesto para trimmer Kemei",
    "Kemei",
    "Repuestos de trimmer",
    300,
    "assets/img/products/repuesto-para-trimmer-kemei.jpg",
    "Repuesto original para trimmer Kemei modelo 2299.",
  ),
  m(
    "Caramelos & Tapetes",
    "Caramelo blanco y negro",
    "",
    "Caramelos",
    2000,
    "assets/img/products/caramelo-blanco-y-negro.jpg",
    "Caramelo para barbería. Color blanco y negro. Con luz. Giratorio.",
  ),
  m(
    "Caramelos & Tapetes",
    "Caramelo con esfera",
    "",
    "Caramelos",
    2000,
    "assets/img/products/caramelo-con-esfera.jpg",
    "Caramelo de colores con esfera de luz. Con interruptor.",
  ),
  m(
    "Caramelos & Tapetes",
    "Tapetes antifatiga",
    "",
    "Tapetes",
    1700,
    "assets/img/products/tapetes-antifatiga.jpg",
    "Tapete antifatiga profesional de forma rectangular.",
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
].map((x, k) => ({ ...x, id: k + 1 }));
