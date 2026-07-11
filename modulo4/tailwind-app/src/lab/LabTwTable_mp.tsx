// src/lab/LabTwTable_mp.tsx

import { useState } from 'react'

interface Dish {
  id:        number
  name:      string
  category:  string
  price:     number
  available: boolean
}

const DISHES: Dish[] = [
  { id: 1, name: 'Ceviche de camarón', category: 'Entrada', price: 8.50,  available: true  },
  { id: 2, name: 'Seco de chivo',      category: 'Fuerte',   price: 12.00, available: true  },
  { id: 3, name: 'Locro de papa',      category: 'Entrada',  price: 5.00,  available: false },
  { id: 4, name: 'Arroz con mariscos', category: 'Fuerte',   price: 13.50, available: true  },
  { id: 5, name: 'Tres leches',        category: 'Postre',   price: 4.50,  available: false },
]

export default function LabTwTable_mp() {
  const [search, setSearch] = useState('')

  const filtered = DISHES.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Platos del menú</h2>
      <p className="text-white/60 mb-4 text-sm">Tabla responsiva con búsqueda en tiempo real.</p>

      <input
        className="mb-4 h-10 w-full max-w-xs rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-amber-500/40"
        placeholder="Buscar plato o categoría..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-white/70">
            <tr>
              {['#', 'Plato', 'Categoría', 'Precio', 'Disponibilidad'].map(h => (
                <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(d => (
              <tr key={d.id} className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="px-4 py-3 text-white/50">{d.id}</td>
                <td className="px-4 py-3 font-semibold">{d.name}</td>
                <td className="px-4 py-3 text-white/70">{d.category}</td>
                <td className="px-4 py-3 font-semibold">${d.price.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${
                    d.available
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-white/50'
                  }`}>
                    {d.available ? 'Disponible' : 'Agotado'}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-white/40">
                  Sin resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
