// src/pages/AboutTW_mp.tsx

export default function AboutTW_mp() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Acerca de Sabor Criollo</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> Más de 15 años sirviendo cocina casera
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> Ingredientes frescos de mercado local
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> Recetas tradicionales de la costa y sierra
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> Ambiente familiar para toda ocasión
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
