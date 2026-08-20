import type { Categoria, Producto } from "@/lib/types";

/**
 * ⚠️ DEMO: productos y precios de EJEMPLO (indumentaria masculina), para que la
 * maqueta se vea creíble. Sin Destino los reemplaza por sus prendas reales y
 * sube las fotos desde el panel. Por eso van con `foto: false` (se muestra la
 * silueta) hasta que carguen las imágenes reales.
 */

const TALLES = ["S", "M", "L", "XL", "XXL"];
const TALLES_PANTALON = ["38", "40", "42", "44", "46"];

const NEGRO = { nombre: "Negro", hex: "#1c1c1c" };
const BLANCO = { nombre: "Blanco", hex: "#f1f0ec" };
const GRIS = { nombre: "Gris melange", hex: "#8f9490" };
const AZUL = { nombre: "Azul marino", hex: "#2e3a52" };
const ARENA = { nombre: "Arena", hex: "#c8b89a" };
const MILITAR = { nombre: "Verde militar", hex: "#4b5340" };

export const productos: Producto[] = [
  {
    slug: "buzo-oversize",
    nombre: "Buzo Oversize",
    categoria: "buzos",
    descripcion:
      "Buzo de frisa de corte oversize, cuello redondo. Abrigado y con caída urbana, la prenda estrella de la temporada.",
    detalle: "Frisa peinada 400gr · 80% algodón / 20% poliéster · Corte oversize",
    precioMinorista: 33000,
    precioMayorista: 20000,
    talles: TALLES,
    colores: [NEGRO, GRIS, ARENA, AZUL],
    destacado: true,
    foto: true,
  },
  {
    slug: "canguro-capucha",
    nombre: "Canguro con Capucha",
    categoria: "hoodies",
    descripcion:
      "Canguro con capucha doble tela y bolsillo delantero. Silueta relajada, ideal para todos los días.",
    detalle: "Frisa peinada 420gr · Capucha doble tela · Puño y cintura elastizados",
    precioMinorista: 39000,
    precioMayorista: 24000,
    talles: TALLES,
    colores: [NEGRO, GRIS, MILITAR, BLANCO],
    destacado: true,
    foto: true,
  },
  {
    slug: "remera-oversize",
    nombre: "Remera Oversize",
    categoria: "remeras",
    descripcion:
      "Remera de algodón peinado, corte oversize y hombro caído. Base perfecta para cualquier look urbano.",
    detalle: "Algodón peinado 24/1 · Cuello reforzado · Corte oversize",
    precioMinorista: 17000,
    precioMayorista: 10000,
    talles: TALLES,
    colores: [BLANCO, NEGRO, ARENA, MILITAR],
    destacado: true,
    foto: true,
  },
  {
    slug: "jogging-frisa",
    nombre: "Jogging de Frisa",
    categoria: "pantalones",
    descripcion:
      "Jogging de frisa con cintura elastizada, cordón y puño. Cómodo, abrigado y con calce moderno.",
    detalle: "Frisa peinada 350gr · Cintura elastizada · Bolsillos laterales",
    precioMinorista: 30000,
    precioMayorista: 18000,
    talles: TALLES,
    colores: [NEGRO, GRIS, AZUL],
    destacado: true,
    foto: true,
  },
  {
    slug: "campera-rompeviento",
    nombre: "Campera Rompeviento",
    categoria: "hoodies",
    descripcion:
      "Rompeviento liviano con capucha y cierre completo. Repele el agua y se guarda en su propio bolsillo.",
    detalle: "Poliéster ripstop · Capucha ajustable · Cierre completo",
    precioMinorista: 42000,
    precioMayorista: 26000,
    talles: TALLES,
    colores: [NEGRO, AZUL, MILITAR],
  },
  {
    slug: "camisa-manga-larga",
    nombre: "Camisa Manga Larga",
    categoria: "sweaters",
    descripcion:
      "Camisa de gabardina con corte regular. Prolija para salir y resistente para el uso diario.",
    detalle: "Gabardina de algodón · Botones reforzados · Corte regular",
    precioMinorista: 28000,
    precioMayorista: 17000,
    talles: TALLES,
    colores: [NEGRO, ARENA, AZUL, BLANCO],
  },
  {
    slug: "remera-basica",
    nombre: "Remera Básica",
    categoria: "remeras",
    descripcion:
      "Remera de algodón corte al cuerpo, cuello redondo. La básica indispensable, ideal para llevar por cantidad.",
    detalle: "Algodón peinado 20/1 · Cuello redondo · Corte clásico",
    precioMinorista: 13000,
    precioMayorista: 7500,
    talles: TALLES,
    colores: [BLANCO, NEGRO, GRIS, AZUL],
    oferta: true,
  },
  {
    slug: "pantalon-cargo",
    nombre: "Pantalón Cargo",
    categoria: "pantalones",
    descripcion:
      "Cargo de gabardina con bolsillos laterales y tobillo ajustable. Estilo urbano y mucha resistencia.",
    detalle: "Gabardina resistente · Bolsillos cargo · Tobillo con elástico",
    precioMinorista: 36000,
    precioMayorista: 22000,
    talles: TALLES_PANTALON,
    colores: [NEGRO, ARENA, MILITAR],
  },
  {
    slug: "bermuda-cargo",
    nombre: "Bermuda Cargo",
    categoria: "pantalones",
    descripcion:
      "Bermuda de gabardina con bolsillos laterales. Fresca y cómoda para los días de calor.",
    detalle: "Gabardina liviana · Bolsillos cargo · Cintura con cordón",
    precioMinorista: 22000,
    precioMayorista: 13000,
    talles: TALLES_PANTALON,
    colores: [NEGRO, ARENA, GRIS],
    oferta: true,
  },
  {
    slug: "gorra-trucker",
    nombre: "Gorra Trucker",
    categoria: "accesorios",
    descripcion:
      "Gorra trucker con frente rígido y malla trasera. Regulable, un talle para todos.",
    detalle: "Frente de gabardina · Malla transpirable · Cierre regulable",
    precioMinorista: 9000,
    precioMayorista: 5000,
    talles: ["Único"],
    colores: [NEGRO, BLANCO, MILITAR],
  },
  {
    slug: "rinonera-urbana",
    nombre: "Riñonera Urbana",
    categoria: "accesorios",
    descripcion:
      "Riñonera de nylon resistente con cierres reforzados y correa ajustable. Se cruza al pecho o a la cintura.",
    detalle: "Nylon resistente · Cierres reforzados · Correa ajustable",
    precioMinorista: 12000,
    precioMayorista: 7000,
    talles: ["Único"],
    colores: [NEGRO, GRIS],
    oferta: true,
  },
  {
    slug: "campera-puffer",
    nombre: "Campera Puffer",
    categoria: "hoodies",
    descripcion:
      "Campera inflable acolchada con capucha. Abrigo máximo para el invierno, liviana y con estilo.",
    detalle: "Relleno térmico · Exterior repelente · Capucha desmontable",
    precioMinorista: 55000,
    precioMayorista: 34000,
    talles: TALLES,
    colores: [NEGRO, AZUL],
    sinStock: true,
  },
];

export const CATEGORIAS: { id: Categoria; nombre: string }[] = [
  { id: "buzos", nombre: "Buzos" },
  { id: "hoodies", nombre: "Camperas y Canguros" },
  { id: "sweaters", nombre: "Camisas" },
  { id: "pantalones", nombre: "Pantalones" },
  { id: "remeras", nombre: "Remeras" },
  { id: "accesorios", nombre: "Accesorios" },
];

export function getProducto(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}
