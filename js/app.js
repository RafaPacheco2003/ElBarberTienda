// ============================================================
// APP.JS — Lógica de la página: catálogo, carrito, WhatsApp y animaciones.
// Se carga después de config.js y data.js (ver orden en index.html).
// ============================================================
// Lógica de la página
// ---------- Utilidades básicas ----------
// $ = buscar un elemento · money = precio con formato · byId = producto por su id
const $ = (s) => document.querySelector(s),
  money = (n) => "$" + n.toLocaleString("es-MX") + " MXN",
  byId = (i) => P.find((x) => x.id == i);
// ---------- Estado de la página ----------
// cart: carrito { idProducto: cantidad } · cat: sección activa · term: texto buscado
// sort: orden · ft / fb: filtro por tipo / por marca
let cart = {},
  cat = "Todos",
  term = "",
  sort = "",
  ft = "",
  fb = "";
// Recupera el carrito guardado en el navegador
try {
  cart = JSON.parse(localStorage.getItem("elbarber-cart3") || "{}");
} catch (e) {}
// Guarda el carrito en el navegador
const save = () => {
  try {
    localStorage.setItem("elbarber-cart3", JSON.stringify(cart));
  } catch (e) {}
};
// Nombres de las secciones, en el orden definido en data.js
const cats = SECS.map((s) => s.n);
// HTML de la foto de un producto
const pic = (p) =>
  p.i
    ? `<img src="${p.i}" alt="${p.n}" loading="lazy">`
    : `<img class="lg" src="${LOGO}" alt="Foto próximamente">`;
// HTML del precio ('Consultar precio' si el producto no tiene)
const priceH = (p) =>
  p.p == null
    ? `<span class="price q">Consultar precio</span>`
    : `<span class="price">${p.po > p.p ? `<s class="was">$${p.po.toLocaleString("es-MX")}</s> ` : ""}${money(p.p)}</span>`;
// Descripción con formato: respeta los saltos de línea de data.js.
// Un renglón vacío separa párrafos; los renglones que empiezan con "*", "-" o un número
// (ej. "* 1 ANTARCTICA" o "01 GUMGUM") se muestran como lista.
const escH = (t) => t.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
const fmtDesc = (d) =>
  (d || "")
    .split(/\n\s*\n/)
    .map((b) => b.split("\n").map((x) => x.trim()).filter(Boolean))
    .filter((L) => L.length)
    .map((L) => {
      const isItem = (x) => /^([*\-•]\s*|\d{1,3}\s+)/.test(x);
      const head = !isItem(L[0]) && L.length > 1 && L.slice(1).every(isItem) ? L.shift() : null;
      if (L.length > 1 && L.every(isItem))
        return (
          (head ? `<p class="dh">${escH(head)}</p>` : "") +
          `<ul class="dl">${L.map((x) => `<li>${escH(x.replace(/^[*\-•]\s*/, "").replace(/\.$/, ""))}</li>`).join("")}</ul>`
        );
      if (L.length === 1 && /:$/.test(L[0])) return `<p class="dh">${escH(L[0])}</p>`;
      return `<p>${(head ? [head, ...L] : L).map(escH).join("<br>")}</p>`;
    })
    .join("");
// ---------- Tienda: menú lateral de categorías ----------
function menu() {
  const ct = (k) =>
    k === "Todos"
      ? P.length
      : k === "APP"
        ? P.filter(inApp).length
        : P.filter((p) => p.c === k).length;
  const bt = (k, l, c) =>
    `<button class="cat ${c || ""}" data-c="${k}" aria-pressed="${k === cat}">${l}<small>${ct(k)}</small></button>`;
  $("#cats").innerHTML =
    `<h3>Categorías</h3>` +
    bt("Todos", "Todos") +
    bt("APP", "Productos de aplicación") +
    SECS.map((s, i) => bt(s.n, s.n, i < 6 ? "in2" : "")).join("");
}
// ---------- Tienda: tarjetas y listado ----------
// shown = cuántos productos se muestran (se cargan de 12 en 12 al bajar: scroll infinito)
// lista = productos que cumplen la búsqueda/filtros actuales
let shown = 12,
  lista = [];
// Tarjeta de producto (la usan la tienda y el carrusel de destacados)
// Si el producto tiene 2 fotos, la segunda aparece al pasar el cursor
const ADD = "Comprar";
const card = (p, k) =>
  `<article class="card rv" style="--d:${(k % 4) * 0.07}s"><button class="ph" data-v="${p.id}" aria-label="Ver ${p.n}">${p.f ? `<span class="tag r">Más vendido</span>` : ""}${pic(p)}${p.imgs.length > 1 ? `<img class="h2" src="${p.imgs[1]}" alt="" loading="lazy"><span class="nph">${p.imgs.length} fotos</span>` : ""}</button><div class="bd"><span class="mu">${p.b || p.c}</span><h3 data-v="${p.id}">${p.n}</h3>${priceH(p)}<button class="add" data-id="${p.id}">${ADD}</button></div></article>`;
// Dibuja el listado aplicando sección, filtros de tipo/marca, búsqueda y orden
function grid() {
  setTimeout(rv, 0);
  const base = P.filter(
    (p) => cat === "Todos" || (cat === "APP" ? inApp(p) : p.c === cat),
  );
  const uq = (k) => [...new Set(base.map((p) => p[k]).filter(Boolean))];
  const fill = (id, arr, cur, all) => {
    const s = $(id);
    s.parentElement.hidden = arr.length < 2;
    s.innerHTML =
      `<option value="">${all}</option>` +
      arr
        .map((x) => `<option${x === cur ? " selected" : ""}>${x}</option>`)
        .join("");
  };
  fill("#sft", uq("t"), ft, "Todos");
  fill("#sfb", uq("b"), fb, "Todas");
  let l = base.filter(
    (p) =>
      (!ft || p.t === ft) &&
      (!fb || p.b === fb) &&
      (p.n + p.d + p.c + p.b + p.t).toLowerCase().includes(term),
  );
  if (sort)
    l = [...l].sort((a, b) =>
      sort === "a" ? (a.p ?? 1e9) - (b.p ?? 1e9) : (b.p ?? -1) - (a.p ?? -1),
    );
  $("#t").textContent =
    cat === "Todos"
      ? "Todos los productos"
      : cat === "APP"
        ? "Productos de aplicación"
        : cat;
  lista = l;
  $("#c").textContent =
    l.length + (l.length === 1 ? " producto" : " productos");
  $("#g").innerHTML = l.length
    ? l.slice(0, shown).map(card).join("")
    : `<p class="empty">No encontramos productos con esa búsqueda.</p>`;
  $("#more").hidden = l.length <= shown;
}
// ---------- Portada: mosaicos de categorías y destacados ----------
function home() {
  // Banners de "Compra por categoría" (lista BANNERS en config.js)
  const cnt = (c) =>
    c === "APP" ? P.filter(inApp).length : P.filter((p) => p.c === c).length;
  $("#cbn").innerHTML = BANNERS.map(
    (b, k) =>
      `<a href="#tienda" data-c="${b.c}" class="rv${b.w ? " w" : ""}" style="--d:${(k % 4) * 0.06}s"><img src="${b.img}" alt="" loading="lazy"><span><small>${cnt(b.c)} productos</small><b>${b.t}</b><i>Ver productos</i></span></a>`,
  ).join("");
}
// ---------- WhatsApp y carrito ----------
// Enlace de WhatsApp con el texto ya escrito
const wa = (x) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(x)}`;
// Precio corto, por ejemplo $150
const m0 = (x) => "$" + x.toLocaleString("es-MX");
// Arma el mensaje del carrito que recibe el vendedor (productos, total y nombre del cliente)
const msg = (ids) => {
  let tot = 0,
    n = 0,
    q = 0;
  const nm = $("#nombre").value.trim();
  const l = ids.map((i) => {
    const p = byId(i),
      c = cart[i];
    n += c;
    const nx =
      p.n +
      (p.b && !p.n.toLowerCase().includes(p.b.toLowerCase())
        ? ` (${p.b})`
        : "");
    if (p.p == null) {
      q++;
      return `• ${c} × ${nx} — precio por confirmar`;
    }
    tot += p.p * c;
    return `• ${c} × ${nx}${c > 1 ? ` (${m0(p.p)} c/u)` : ""} — ${m0(p.p * c)}`;
  });
  return `Hola, quiero consultar disponibilidad:\n${nm ? `\n*Cliente:* ${nm}\n` : ""}\n*Productos*\n${l.join("\n")}\n\n*Total: ${money(tot)}* (${n} ${n === 1 ? "artículo" : "artículos"})${q ? `\nPrecio por confirmar: ${q} ${q === 1 ? "producto" : "productos"}.` : ""}`;
};
// Dibuja el carrito: lista, total, contador y enlace de envío por WhatsApp
function cartUI() {
  const ids = Object.keys(cart).filter((i) => byId(i));
  let tot = 0,
    cnt = 0,
    q = 0;
  $("#items").innerHTML = ids.length
    ? ids
        .map((i) => {
          const p = byId(i);
          cnt += cart[i];
          if (p.p == null) q++;
          else tot += p.p * cart[i];
          return `<div class="it"><img src="${p.i || LOGO}" alt=""><div><b>${p.n}</b><br><small>${p.p == null ? "Precio por confirmar" : money(p.p)}</small><br><span class="qty"><button data-m="${i}" aria-label="Quitar uno">−</button><span>${cart[i]}</span><button data-p="${i}" aria-label="Agregar uno">+</button></span></div></div>`;
        })
        .join("")
    : `<p class="empty">Tu carrito está vacío. Agrega los productos que quieres consultar.</p>`;
  if ($("#n").textContent != cnt) {
    $("#n").classList.remove("bp");
    void $("#n").offsetWidth;
    $("#n").classList.add("bp");
  }
  $("#n").textContent = cnt;
  $("#total").textContent = money(tot);
  {
    const s = $("#send");
    s.setAttribute("aria-disabled", !ids.length);
    s.href = ids.length ? wa(msg(ids)) : "#";
  }
  $("#quote").textContent = q
    ? `${q} ${q === 1 ? "producto" : "productos"} con precio por confirmar.`
    : "";
}
// Abre o cierra el panel del carrito
const setCart = (on) => {
  $("#cart").classList.toggle("on", on);
  $("#scrim").classList.toggle("on", on);
  $("#cart").setAttribute("aria-hidden", !on);
};
// Agrega piezas de un producto al carrito
const add = (id, n = 1) => {
  cart[id] = (cart[id] || 0) + n;
  save();
  cartUI();
};
// Ficha ampliada del producto (ventana emergente)
// Si tiene varias fotos: foto grande + miniaturas + flechas (y deslizar en celular)
function view(id) {
  const p = byId(id),
    F = p.imgs.length ? p.imgs : [LOGO],
    many = F.length > 1;
  $("#dlg").innerHTML =
    `<div class="dm"><div class="gal${p.imgs.length ? "" : " nf"}"><div class="gm"><img class="main" src="${F[0]}" alt="${p.n}">${many ? `<button class="ga prev" data-g="-1" aria-label="Foto anterior">‹</button><button class="ga next" data-g="1" aria-label="Foto siguiente">›</button><span class="gc">1 / ${F.length}</span>` : ""}</div>${many ? `<div class="thumbs">${F.map((f, k) => `<img src="${f}" data-th="${k}" alt="Foto ${k + 1}"${k ? "" : ' class="on"'}>`).join("")}</div>` : ""}</div><div class="t"><button class="x" data-x aria-label="Cerrar">×</button><span class="mu">${p.c}${p.t ? " · " + p.t : ""}${p.b ? " · " + p.b : ""}</span><h2>${p.n}</h2><div class="desc">${fmtDesc(p.d)}</div>${priceH(p)}<button class="add" data-id="${p.id}">Agregar al carrito</button></div></div>`;
  gal = { F, k: 0 };
  $("#dlg").showModal();
}
// Cambia la foto visible de la ficha
let gal = { F: [], k: 0 };
function galGo(k) {
  const g = $("#dlg .gal");
  if (!g || gal.F.length < 2) return;
  gal.k = (k + gal.F.length) % gal.F.length;
  g.querySelector(".main").src = gal.F[gal.k];
  g.querySelector(".gc").textContent = `${gal.k + 1} / ${gal.F.length}`;
  g.querySelectorAll(".thumbs img").forEach((x, n) => {
    x.classList.toggle("on", n === gal.k);
    if (n === gal.k) x.scrollIntoView({ block: "nearest", inline: "nearest" });
  });
}
// ---------- Clics ----------
// Un solo manejador para toda la página: según el atributo data-* del elemento
// (data-c categoría, data-v ver producto, data-id agregar, data-p / data-m más / menos)
document.addEventListener("click", (e) => {
  const t =
      e.target.closest("[data-c],[data-v],[data-id],[data-p],[data-m],[data-x],[data-g],button,aside,dialog") ||
      e.target,
    d = t.dataset || {};
  if (d.c) {
    cat = d.c;
    ft = "";
    fb = "";
    shown = 12;
    menu();
    grid();
    navOn();
    if (location.hash !== "#tienda") location.hash = "tienda";
    else scrollTo({ top: 0, behavior: "smooth" });
  }
  if (e.target.dataset && e.target.dataset.th !== undefined) galGo(+e.target.dataset.th);
  if (d.g) galGo(gal.k + +d.g);
  if (d.v) view(d.v);
  if (d.ft !== undefined) {
    ft = d.ft;
    shown = 12;
    grid();
  }
  if (d.fb !== undefined) {
    fb = d.fb;
    shown = 12;
    grid();
  }
  if (d.x !== undefined || e.target === $("#dlg")) $("#dlg").close();
  if (t.classList && t.classList.contains("add")) {
    add(d.id);
    if ($("#dlg").open) $("#dlg").close();
    else {
      t.textContent = "¡Agregado!";
      t.classList.add("ok");
      setTimeout(() => {
        t.textContent = ADD;
        t.classList.remove("ok");
      }, 1000);
    }
  }
  if (d.p) add(d.p);
  if (d.m) {
    cart[d.m]--;
    if (cart[d.m] <= 0) delete cart[d.m];
    save();
    cartUI();
  }
});
// ---------- Botones y campos ----------
// Carrito, filtros, búsqueda, ordenar, 'Ver más' y subir
$("#open").onclick = () => setCart(true);
$("#close").onclick = $("#scrim").onclick = () => setCart(false);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setCart(false);
  if ($("#dlg").open && (e.key === "ArrowRight" || e.key === "ArrowLeft"))
    galGo(gal.k + (e.key === "ArrowRight" ? 1 : -1));
});
// Deslizar la foto de la ficha con el dedo
{
  let gx = null;
  $("#dlg").addEventListener("touchstart", (e) => {
    gx = e.target.closest(".gm") ? e.touches[0].clientX : null;
  }, { passive: true });
  $("#dlg").addEventListener("touchend", (e) => {
    if (gx == null) return;
    const dx = e.changedTouches[0].clientX - gx;
    if (Math.abs(dx) > 40) galGo(gal.k + (dx < 0 ? 1 : -1));
    gx = null;
  });
}
$("#nombre").oninput = cartUI;
$("#sft").onchange = (e) => {
  ft = e.target.value;
  shown = 12;
  grid();
};
$("#sfb").onchange = (e) => {
  fb = e.target.value;
  shown = 12;
  grid();
};
$("#q").oninput = (e) => {
  term = e.target.value.trim().toLowerCase();
  shown = 12;
  grid();
  if (term && location.hash !== "#tienda") location.hash = "tienda";
};
$("#s").onchange = (e) => {
  sort = e.target.value;
  shown = 12;
  grid();
};
// Scroll infinito: agrega los siguientes 12 productos (sin volver a dibujar los que ya están)
function more() {
  if (shown >= lista.length) return;
  $("#g").insertAdjacentHTML("beforeend", lista.slice(shown, shown + 12).map(card).join(""));
  shown += 12;
  $("#more").hidden = lista.length <= shown;
  setTimeout(rv, 0);
}
$("#more").onclick = more; // respaldo por si alguien toca el aviso
// Cuando el final de la lista está a menos de 600px de la pantalla, carga más solo.
// Repite mientras siga cerca (pantallas grandes donde 12 productos no llenan la vista).
function autoMore() {
  const fin = $("#more");
  let n = 0;
  while (!$("#store").hidden && !fin.hidden && fin.getBoundingClientRect().top < innerHeight + 600 && n++ < 10)
    more();
}
addEventListener("scroll", autoMore, { passive: true });
addEventListener("resize", autoMore);
$("#more").classList.add("auto");
$("#more").textContent = "Cargando más productos…";
$("#up").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
// ---------- Marcas (mosaico) ----------
// Todas las marcas distintas de los productos (sin "Genérico"); MAS = las que no salen con logo
const MARCAS = new Set(
  P.flatMap((p) => (p.b || "").split(" / ").map((x) => x.trim())).filter((x) => x && x !== "Genérico"),
);
BR.forEach((b) => MARCAS.add(b.n));
const MAS = MARCAS.size - BR.length;
// l = 1 → logo oscuro sobre fondo blanco; si no, fondo negro
$("#brands").innerHTML = BR.map(
  (b, k) =>
    `<div class="rv${b.l ? " lt" : ""}" style="--d:${(k % 6) * 0.05}s"><img src="${b.i}" alt="${b.n}" loading="lazy"></div>`,
).join("") +
  // Último recuadro: "+N marcas más" (cuenta las marcas de los productos que no tienen logo aquí)
  (MAS > 0
    ? `<a class="rv mas" href="#tienda" data-c="Todos" style="--d:${(BR.length % 6) * 0.05}s"><b>+${MAS}</b><span>marcas más</span></a>`
    : "");
// ---------- Animaciones al hacer scroll ----------
// Contador animado de las cifras
const count = (el) => {
  const T = +el.dataset.t,
    s = performance.now();
  (function f(n) {
    const k = Math.min(1, (n - s) / 1200);
    el.textContent = Math.round(T * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(f);
  })(s);
};
// Valores de las cifras: productos, categorías y marcas
const KV = { p: P.length, c: cats.length, b: MARCAS.size };
document
  .querySelectorAll(".cu")
  .forEach((e) => (e.dataset.t = KV[e.dataset.k]));
// Cuando un elemento .rv entra en pantalla se le agrega .in (aparece con animación)
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        e.target.querySelectorAll(".cu").forEach(count);
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.1 },
);
// Pide observar los elementos nuevos
const rv = () =>
  document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));
// Bloques que deben aparecer con animación
document
  .querySelectorAll(".trust,.sh,.catl,.refs figure,.evg,.top,#cats")
  .forEach((el, k) => {
    el.classList.add("rv");
    if (el.tagName === "FIGURE")
      el.style.setProperty("--d", (k % 2) * 0.12 + "s");
  });
// Efectos al hacer scroll: sombra del encabezado, barra de progreso y botón de subir
addEventListener(
  "scroll",
  () => {
    $("header").classList.toggle("sc", scrollY > 10);
    $("#up").classList.toggle("on", scrollY > 600);
  },
  { passive: true },
);
// ---------- Navegación ----------
// Inicio y Tienda se alternan con el hash de la dirección (#tienda)
function route() {
  const h = location.hash.slice(1) || "inicio",
    st = h === "tienda";
  $("#home").hidden = st;
  $("#store").hidden = !st;
  navOn();
  heroSync();
  if (st) scrollTo(0, 0);
  else {
    let el = null;
    try {
      if (location.hash) el = $("#" + h);
    } catch (x) {}
    setTimeout(
      () => (el ? el.scrollIntoView({ behavior: "smooth" }) : scrollTo(0, 0)),
      30,
    );
  }
  setTimeout(rv, 0);
}
addEventListener("hashchange", route);
// Marca en el menú la opción activa (en la tienda, según la sección elegida)
function navOn() {
  const h = location.hash.slice(1) || "inicio";
  document.querySelectorAll(".nv a").forEach((a) => {
    const c = a.dataset.c;
    a.classList.toggle(
      "on",
      h === "tienda" ? c === cat : !c && a.getAttribute("href") === "#" + h,
    );
  });
}
// ---------- Video de la portada ----------
let heroSync = () => {};
// Empieza SIN sonido; el visitante toca "Activar sonido" si lo quiere escuchar.
// Al repetirse vuelve a quedar en silencio.
if (VIDEO) {
  const b = $("#vbox");
  b.innerHTML = `<video src="${VIDEO}" poster="${POSTER}" muted playsinline preload="auto"></video><button class="snd" id="snd">Activar sonido</button>`;
  const v = b.firstChild,
    sb = $("#snd");
  const lab = () => {
    sb.textContent = v.muted ? "Activar sonido" : "Silenciar";
  };
  v.muted = true;
  sb.onclick = () => {
    v.muted = !v.muted;
    lab();
    if (v.paused) v.play().catch(() => {});
  };
  v.onended = () => {
    v.muted = true;
    lab();
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  let started = false;
  const start = () => v.play().then(lab).catch(() => {});
  // Solo se reproduce si está en pantalla Y su banner es el activo del carrusel
  let vis = false;
  heroSync = () => {
    const act = v.closest(".slide").classList.contains("on");
    if (vis && act && !$("#home").hidden) {
      if (!started) {
        started = true;
        start();
      } else v.play().catch(() => {});
    } else v.pause();
  };
  new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        vis = e.isIntersecting;
        heroSync();
      }),
    { threshold: 0.4 },
  ).observe(v);
}
// ---------- Portada: carrusel de banners ----------
// Cada banner dura 6 s; el del video espera a que el video termine.
{
  const S = [...document.querySelectorAll("#slides .slide")],
    D = $("#dots"),
    vid = $("#vbox video");
  let i = 0,
    tm = null;
  D.innerHTML = S.map((_, k) => `<button aria-label="Banner ${k + 1}"></button>`).join("");
  const B = [...D.children];
  const go = (n) => {
    i = (n + S.length) % S.length;
    S.forEach((s, k) => s.classList.toggle("on", k === i));
    B.forEach((b, k) => b.classList.remove("on"));
    void D.offsetWidth;
    const isVid = vid && S[i].contains(vid);
    const dur = isVid ? (vid.duration && isFinite(vid.duration) ? vid.duration : 15) + 1 : 6;
    D.style.setProperty("--dur", dur + "s");
    B[i].classList.add("on");
    heroSync();
    clearTimeout(tm);
    tm = setTimeout(() => go(i + 1), dur * 1000);
  };
  if (vid)
    vid.addEventListener("ended", () => {
      if (S[i].contains(vid)) go(i + 1);
    });
  $("#sprev").onclick = () => go(i - 1);
  $("#snext").onclick = () => go(i + 1);
  B.forEach((b, k) => (b.onclick = () => go(k)));
  // Deslizar con el dedo en el celular
  let x0 = null;
  $("#slides").addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  $("#slides").addEventListener("touchend", (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
    x0 = null;
  });
  go(0);
}
// ---------- Barra de anuncios: cambia de texto cada 4 s ----------
{
  const A = [...document.querySelectorAll("#ann span")];
  let a = 0;
  if (A.length > 1)
    setInterval(() => {
      A[a].classList.remove("on");
      a = (a + 1) % A.length;
      A[a].classList.add("on");
    }, 4000);
}
// ---------- Evento y enlaces de WhatsApp ----------
$("#evwa").href =
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola, quiero informes del evento Boyz N The Hood Barber Exhibition")}`;
["#fab", "#fwa", "#hwa"].forEach((s) => {
  const e = $(s);
  if (e) {
    e.href = wa("Hola, quiero informes de sus productos.");
    e.target = "_blank";
    e.rel = "noopener";
  }
});
// ---------- Pie de página ----------
$("#fsec").innerHTML = cats
  .map((c) => `<button class="fsb" data-c="${c}">${c}</button>`)
  .join("");
document.querySelectorAll(".fg>div,.fbot").forEach((el, k) => {
  el.classList.add("rv");
  el.style.setProperty("--d", k * 0.1 + "s");
});
// ---------- Arranque: dibuja todo la primera vez ----------
menu();
home();
grid();
cartUI();
route();
rv();
