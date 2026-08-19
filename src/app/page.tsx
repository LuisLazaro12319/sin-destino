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
      <svg className="w-5 h-5 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4M9 11h4" />
      </svg>
    ),
  },
  {
    titulo: "ENVÍOS",
    sub: "TODO EL PAÍS",
    icon: (
      <svg className="w-5 h-5 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
      </svg>
    ),
  },
  {
    titulo: "MAYORISTA",
    sub: `DESDE ${MINIMO_MAYORISTA}U`,
    icon: (
      <svg className="w-5 h-5 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* HERO CON IMAGEN A TOPE (FULL BLEED) Y DESVANECIDO */}
      <section className="relative min-h-[90vh] bg-background text-foreground overflow-hidden flex items-center">
        
        {/* CONTENEDOR DE LA IMAGEN EN EL EXTREMO DERECHO */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 h-full z-0">
          <Image
            src={`${BASE_PATH}/fondo-inicio.png`}
            alt="Modelo Ropa Masculina"
            fill
            priority
            className="object-cover object-center"
          />
          
          {/* DESVANECIDO IZQUIERDO (Blend perfecto con el color de fondo) */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent z-10 hidden lg:block" />
          
          {/* DESVANECIDO SUPERIOR E INFERIOR (Tope a tope suave) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-10" />

          {/* DESVANECIDO COMPLETO PARA MÓVILES */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background lg:hidden z-10" />
        </div>

        {/* CONTENIDO DEL HERO (LADO IZQUIERDO) */}
        <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 rounded-full bg-superficie border border-borde px-3 py-1 text-xs text-tenue">
                <span className="h-2 w-2 rounded-full bg-acento animate-pulse" />
                <span className="font-medium tracking-wide uppercase text-[11px]">
                  INDUMENTARIA MASCULINA · VENTA POR MAYOR
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-foreground">
                ROPA DE <br />
                HOMBRE <br />
                <span className="text-acento">DIRECTO DE FÁBRICA</span>
              </h1>

              <p className="max-w-xl text-tenue text-sm sm:text-base leading-relaxed">
                Somos fabricantes. Elegí las prendas, armá tu pedido por mayor y lo cerramos por WhatsApp — con envíos a todo el país.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center rounded-lg bg-acento px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 active:scale-95"
                >
                  VER CATÁLOGO →
                </Link>
                <Link
                  href="/productos?ver=mayorista"
                  className="inline-flex items-center justify-center rounded-lg border border-borde bg-superficie px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-superficie/80"
                >
                  PRECIOS MAYORISTAS
                </Link>
              </div>

              <div className="border-t border-borde pt-6 mt-8" />

              <div className="grid grid-cols-3 gap-4 pt-2">
                {BENEFICIOS.map((b) => (
                  <div key={b.titulo} className="space-y-1">
                    <div className="mb-2">{b.icon}</div>
                    <p className="text-[11px] font-semibold text-tenue uppercase tracking-wider">
                      {b.titulo}
                    </p>
                    <p className="text-xs font-black uppercase text-foreground tracking-wide">
                      {b.sub}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* TEXTO VERTICAL FLOTANTE EN EL EXTREMO DERECHO */}
        <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] font-bold tracking-[0.4em] text-tenue/60 uppercase select-none z-30 pointer-events-none">
          ESTILO · COMODIDAD · ACTITUD
        </div>

      </section>

      {/* CINTA DESPLAZABLE */}
      <div className="bg-acento text-black py-3.5 overflow-hidden select-none">
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

      <PromosCarrusel />

      <Separador />

      {/* PRODUCTOS DESTACADOS */}
      <SeccionConFondo fondo={FONDOS.destacados} className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-acento font-semibold mb-1">
                EL CATÁLOGO
              </p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
                DESTACADOS
              </h2>
            </div>
            <Link
              href="/productos"
              className="shrink-0 text-sm font-bold uppercase tracking-wider text-tenue transition-colors hover:text-acento"
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

      <ComoComprar />

      <Separador />

      {/* BANNER MAYORISTA SUELTO */}
      <SeccionConFondo fondo={FONDOS.compras} className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl py-8 sm:py-14 text-center">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-acento">
            PARA REVENDEDORES
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-foreground">
            COMPRÁ <span className="text-acento">MAYORISTA</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-tenue">
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
