// src/components/tw/TwCourseGrid_mp.tsx

interface Dish {
  id:       number
  name:     string
  category: 'Entrada' | 'Fuerte' | 'Postre'
  price:    string
  tag?:     string
}

const DISHES: Dish[] = [
  { id: 1, name: 'Ceviche de camarón',   category: 'Entrada', price: '$8.50',  tag: 'Nuevo'   },
  { id: 2, name: 'Locro de papa',        category: 'Entrada', price: '$5.00',  tag: 'Popular' },
  { id: 3, name: 'Seco de chivo',        category: 'Fuerte',  price: '$12.00'                 },
  { id: 4, name: 'Arroz con mariscos',   category: 'Fuerte',  price: '$13.50', tag: 'Nuevo'   },
  { id: 5, name: 'Encebollado',          category: 'Fuerte',  price: '$7.50'                  },
  { id: 6, name: 'Tres leches',          category: 'Postre',  price: '$4.50',  tag: 'Popular' },
]

const CATEGORY: Record<Dish['category'], string> = {
  Entrada: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Fuerte:  'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Postre:  'border-red-400/30 bg-red-400/10 text-red-300',
}

export default function TwCourseGrid_mp() {
  return (
    <section className="bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold text-white mb-2">Nuestros platos</h2>
        <p className="text-white/50 mb-8">Selecciona la categoría que más se te antoje.</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map(dish => (
            <div
              key={dish.id}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${CATEGORY[dish.category]}`}>
                  {dish.category}
                </span>
                {dish.tag && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs text-white/50">
                    {dish.tag}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white">{dish.name}</h3>
              <p className="text-sm text-white/50">Precio: {dish.price}</p>
              <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/70 hover:bg-white/10 transition">
                Pedir ahora →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
