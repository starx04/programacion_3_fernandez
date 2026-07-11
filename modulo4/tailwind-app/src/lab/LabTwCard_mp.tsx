// src/lab/LabTwCard_mp.tsx

interface DishCardProps {
  title:    string
  category: 'Entrada' | 'Fuerte' | 'Postre'
  price:    string
  tag?:     string
}

const CATEGORY_COLORS: Record<DishCardProps['category'], string> = {
  Entrada: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Fuerte:  'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Postre:  'border-red-400/30 bg-red-400/10 text-red-300',
}

function DishCard({ title, category, price, tag }: DishCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
      <div className="flex items-center justify-between">
        <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${CATEGORY_COLORS[category]}`}>
          {category}
        </span>
        {tag && (
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-0.5 text-xs text-white/60">
            {tag}
          </span>
        )}
      </div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-sm text-white/60">Precio: {price}</p>
      <button className="mt-auto self-start rounded-xl border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition">
        Pedir ahora →
      </button>
    </div>
  )
}

export default function LabTwCard_mp() {
  const dishes: DishCardProps[] = [
    { title: 'Ceviche de camarón', category: 'Entrada', price: '$8.50',  tag: 'Nuevo'   },
    { title: 'Seco de chivo',      category: 'Fuerte',  price: '$12.00', tag: 'Popular' },
    { title: 'Tres leches',        category: 'Postre',  price: '$4.50'                  },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Platos</h2>
      <p className="text-white/60 mb-6 text-sm">Cards tipadas con variante de categoría.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {dishes.map(d => <DishCard key={d.title} {...d} />)}
      </div>
    </main>
  )
}
