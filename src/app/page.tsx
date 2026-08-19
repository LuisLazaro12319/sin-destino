import Link from "next/link";
import Image from "next/image";
import { productos } from "@/data/productos";
import { ProductoCard } from "@/components/ProductoCard";
import { ModoToggle } from "@/components/ModoToggle";
import { ComoComprar } from "@/components/ComoComprar";
import { Separador } from "@/components/Separador";
import { SeccionConFondo } from "@/components/SeccionConFondo";
import { PromosCarrusel } from "@/components/PromosCarrusel";
import { MARCA, BASE_PATH, FONDOS, MINIMO_MAYORISTA } from "@/lib/config";

const BENEFICIOS = [
  {
    titulo: "FABRICACIÓN",
    sub: "PROPIA",
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4M9 11h4" />
      </svg>
    ),
  },
  {
    titulo: "ENVÍOS",
    sub: "TODO EL PAÍS",
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
      </svg>
    ),
  },
  {
    titulo: "MAYORISTA",
    sub: `DESDE ${MINIMO_MAYORISTA}U`,
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const TEXTOS_CINTA = [
  "FABRICACIÓN PROPIA",
  "HASTA 50% OFF POR MAYOR",
  "DISEÑOS ACTUALES",
  "ENVÍOS A TODO EL PAÍS",
  "COMPRA SEGURA",
];

export default function Home() {
  const destacados = productos.filter((p) => p.destacado);

  return (
    <>
      {/* Animación personalizada para la cinta en movimiento */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* HERO DIVIDIDO EN 2 COLUMNAS */}
      <section className="relative min-h-[85vh] bg-black text-white overflow-hidden flex flex-col justify-between">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 items-center px-4 pt-10 pb-6 sm:px-6 lg:px-8 gap-8 my-auto">
          
          {/* LADO IZQUIERDO: Información y llamada a la acción */}
          <div className="lg:col-span-7 space-y-6 z-10 pt-4">
            
            {/* Tag superior */}
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-medium tracking-wide uppercase text-[11px]">
                INDUMENTARIA MASCULINA · VENTA POR MAYOR
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
              ROPA DE <br />
              HOMBRE <br />
              <span className="text-orange-500">DIRECTO DE FÁBRICA</span>
            </h1>

            {/* Descripción */}
            <p className="max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed">
              Somos fabricantes. Elegí las prendas, armá tu pedido por mayor y lo cerramos por WhatsApp — con envíos a todo el país.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 hover:bg-orange-400 active:scale-95"
              >
                VER CATÁLOGO →
              </Link>
              <Link
                href="/productos?ver=mayorista"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/80 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-zinc-500 hover:bg-zinc-800"
              >
                PRECIOS MAYORISTAS
              </Link>
            </div>

            {/* Divisor tenue */}
            <div className="border-t border-zinc-800/80 pt-6 mt-8" />

            {/* Beneficios integrados en el Hero */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {BENEFICIOS.map((b) => (
                <div key={b.titulo} className="space-y-1">
                  <div className="mb-2">{b.icon}</div>
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    {b.titulo}
                  </p>
                  <p className="text-xs font-black uppercase text-white tracking-wide">
                    {b.sub}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* LADO DERECHO: Foto del modelo urbano */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[620px] w-full flex items-end justify-center">
            
            {/* Resplandor suave de fondo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            
            <Image
              src={`${BASE_PATH}/fondo-inicio.png`} // Cambiá por /hero-modelo.png si guardaste la foto
              alt="Modelo Ropa Masculina"
              fill
              priority
              className="object-cover object-center rounded-2xl lg:rounded-none grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />

            {/* Texto vertical lateral al estilo streetwear */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] font-bold tracking-[0.4em] text-zinc-500/80 uppercase select-none z-20">
              ESTILO · COMODIDAD · ACTITUD
            </div>
          </div>

        </div>
      </section>

      {/* CINTA DESPLAZABLE (MARQUEE) */}
      <div className="bg-orange-500 text-black py-3.5 overflow-hidden border-y border-orange-600 select-none">
        <div className="animate-marquee-loop whitespace-nowrap flex items-center gap-8 text-sm font-black uppercase tracking-wider">
          {[...TEXTOS_CINTA, ...TEXTOS_CINTA, ...TEXTOS_CINTA, ...TEXTOS_CINTA].map((texto, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{texto}</span>
              <span className="text-black/60 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Separador />

      {/* CARRUSEL DE PROMOS */}
      <PromosCarrusel />

      <Separador />

      {/* PRODUCTOS DESTACADOS */}
      <SeccionConFondo fondo={FONDOS.destacados} className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-500 font-semibold mb-1">
                EL CATÁLOGO
              </p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                DESTACADOS
              </h2>
            </div>
            <Link
              href="/productos"
              className="shrink-0 text-sm font-bold uppercase tracking-wider text-zinc-400 transition-colors hover:text-orange-500"
            >
              Ver todo ↗
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {destacados.map((producto) => (
              <ProductoCard key={producto.slug} producto={producto} />
            ))}
          </div>
        </div>
      </SeccionConFondo>

      <Separador />

      {/* CÓMO COMPRAR */}
      <ComoComprar />

      <Separador />

      {/* BANNER MAYORISTA */}
      <SeccionConFondo fondo={FONDOS.compras} className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-950/90 p-8 sm:p-14 text-center backdrop-blur-sm">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            PARA REVENDEDORES
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            COMPRÁ <span className="text-orange-500">MAYORISTA</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-zinc-400">
            Accedé a precios de fábrica desde solo {MINIMO_MAYORISTA} prendas. Ideal para revendedores, tiendas y comerciantes.
          </p>
          <div className="mt-8 flex justify-center">
            <ModoToggle tamano="lg" />
          </div>
        </div>
      </SeccionConFondo>
    </>
  );
}
