// src/components/tw/TwHero_mp.tsx

export default function TwHero_mp() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 mb-4">
          Restaurante Sabor Criollo
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Sabor auténtico en<br />
          <span className="text-amber-400">cada plato</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-8">
          Cocina casera preparada al momento con ingredientes frescos de mercado.
          Un lugar para compartir en buena compañía.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-500 transition">
            Ver menú
          </button>
          <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/80 hover:bg-white/10 transition">
            Reservar mesa
          </button>
        </div>
      </div>
    </section>
  )
}
