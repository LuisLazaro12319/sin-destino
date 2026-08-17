/**
 * Configuración de la marca y de los canales de venta.
 *
 * ⚠️ TEMPLATE / DEMO: los números de WhatsApp son provisorios (número de Luis)
 * para probar el flujo. Reemplazar MINORISTA y MAYORISTA por el número real de
 * la clienta cuando lo pase, y actualizar TEL_MAYORISTA_VISIBLE con el mismo
 * número escrito lindo. También cambiar MARCA.nombre por el nombre real.
 *
 * Formato: código de país + área sin el 0 + 9 + número sin el 15.
 * Ej: 11 5619-9449  ->  5491156199449
 */
export const WHATSAPP = {
  minorista: "5491135760857",
  mayorista: "5491135760857",
} as const;

/** El mismo número que WHATSAPP.mayorista, escrito para mostrar en pantalla. */
export const TEL_MAYORISTA_VISIBLE = "+54 9 11 3576-0857";

export const MARCA = {
  nombre: "Sin Destino",
  tagline: "Indumentaria masculina · Venta por mayor",
  descripcion:
    "Fabricantes de indumentaria masculina. Armá tu pedido por mayor y lo coordinamos por WhatsApp. Nos encontrás en Feria Ocean, Pasillo 4, Puestos 117 y 119.",
  ubicacion: "Feria Ocean",
  direccion: "Pasillo 4 · Puestos 117 y 119",
  instagram: "https://www.instagram.com/sindestino.hombres/",
  facebook: "",
  tiktok: "https://www.tiktok.com/@sindestinoo",
  email: "",
} as const;

/** Cantidad mínima de prendas para acceder a precios mayoristas (1 = sin mínimo). */
export const MINIMO_MAYORISTA = 10;

/**
 * Imágenes de fondo (en /public) detrás de algunas secciones. Vacío = sin
 * fondo. La dueña las cambia desde el panel > Inicio de la web.
 */
/** Vacío = el fondo toma el color de la tienda (negro en oscuro, blanco en
 *  claro). La dueña sube su propia foto desde el panel cuando quiera. */
export const FONDOS = {
  destacados: "",
  productos: "",
  compras: "",
} as const;

/**
 * Promos / ofertas del carrusel del inicio. La dueña sube los banners desde el
 * panel. Si hay más de uno, rotan solos; al tocar uno lleva a la categoría
 * Ofertas. La imagen se muestra completa (sin recortar) sobre un fondo
 * difuminado. Vacío = no se muestra la sección.
 */
export const PROMOS: { imagen: string; titulo: string; link: string }[] = [
  // Vacío hasta que Sin Destino suba sus propios banners (los de la plantilla
  // eran de otra marca). Sin promos, la sección no se muestra.
];

/**
 * Subcarpeta desde la que se sirve el sitio ("/tapias-web" en GitHub Pages,
 * vacío en local y con dominio propio). La define el workflow de deploy.
 *
 * Hace falta para las imágenes de /public: next/image con `unoptimized` NO
 * agrega el basePath solo, así que hay que anteponerlo a mano.
 *
 * Tiene que empezar con NEXT_PUBLIC_ para que Next la incluya también en el
 * código que corre en el navegador.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * URL pública del sitio. La necesitan las etiquetas de compartir (WhatsApp,
 * Google) porque exigen direcciones absolutas.
 * El día que haya dominio propio, esto pasa a "https://tapias.com.ar".
 */
export const SITIO =
  process.env.NEXT_PUBLIC_SITIO ?? "http://localhost:3000";
