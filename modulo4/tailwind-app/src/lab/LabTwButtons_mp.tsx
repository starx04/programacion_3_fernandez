// src/lab/LabTwButtons_mp.tsx

export default function LabTwButtons_mp() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Botones del restaurante</h2>
      <p className="text-white/60 mb-6 text-sm">Variantes, outline, tamaños y estados.</p>

      {/* Variantes */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="rounded-xl bg-amber-600 px-4 py-2 font-semibold hover:bg-amber-500 transition">
          Reservar mesa
        </button>
        <button className="rounded-xl border border-white/20 px-4 py-2 font-semibold text-white/90 hover:bg-white/10 transition">
          Ver menú
        </button>
        <button className="rounded-xl bg-emerald-600 px-4 py-2 font-semibold hover:bg-emerald-500 transition">
          Confirmar pedido
        </button>
        <button className="rounded-xl bg-red-600 px-4 py-2 font-semibold hover:bg-red-500 transition">
          Cancelar pedido
        </button>
        <button className="rounded-xl bg-blue-500 px-4 py-2 font-semibold text-slate-900 hover:bg-blue-400 transition">
          Oferta especial
        </button>
      </div>

      {/* Tamaños */}
      <div className="flex flex-wrap items-center gap-2">
        <button className="rounded-xl bg-amber-600 px-6 py-3 text-lg font-semibold hover:bg-amber-500 transition">
          Grande
        </button>
        <button className="rounded-xl bg-amber-600 px-4 py-2 font-semibold hover:bg-amber-500 transition">
          Normal
        </button>
        <button className="rounded-xl bg-amber-600 px-3 py-1 text-sm font-semibold hover:bg-amber-500 transition">
          Pequeño
        </button>
        <button
          disabled
          className="rounded-xl bg-amber-600 px-4 py-2 font-semibold opacity-40 cursor-not-allowed"
        >
          Mesa no disponible
        </button>
      </div>
    </main>
  )
}
