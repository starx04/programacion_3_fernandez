// src/pages/ProductsPage_mp.tsx
// Misma técnica que ProductsPage.tsx: useSearchParams sincronizado con la
// URL + useMemo para filtrar, ahora para el listado de platos del menú.

import { useMemo }  from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface Dish {
  id:       number
  name:     string
  category: string
  price:    number
}

const DISHES: Dish[] = [
  { id: 1, name: 'Ceviche de camarón',   category: 'entradas',      price: 12 },
  { id: 2, name: 'Sopa de bola de verde', category: 'entradas',     price: 6  },
  { id: 3, name: 'Seco de pollo',        category: 'platos fuertes', price: 9  },
  { id: 4, name: 'Encebollado',          category: 'platos fuertes', price: 8  },
  { id: 5, name: 'Tres leches',          category: 'postres',       price: 5  },
  { id: 6, name: 'Jugo de mora',         category: 'bebidas',       price: 3  },
]

export default function ProductsPage_mp() {
  // useSearchParams sincroniza filtros con la URL
  // ?q=ceviche&category=entradas queda en la barra del navegador
  const [searchParams, setSearchParams] = useSearchParams()

  const query    = searchParams.get('q')        ?? ''
  const category = searchParams.get('category') ?? ''

  function handleQueryChange(value: string) {
    setSearchParams(
      (prev) => { prev.set('q', value); return prev },
      { replace: true }
    )
  }

  function handleCategoryChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('category', value)
        else       prev.delete('category')
        return prev
      },
      { replace: true }
    )
  }

  const filtered = useMemo(() =>
    DISHES
      .filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))
      .filter((d) => !category || d.category === category),
    [query, category]
  )

  const categories = [...new Set(DISHES.map((d) => d.category))]

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 16 }}>Menú</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Buscar plato..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map((dish) => (
          <Link
            key={dish.id}
            to={`/mp/menu/${dish.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8,
            }}>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>{dish.name}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>{dish.category}</p>
              </div>
              <span style={{ fontWeight: 600 }}>${dish.price}</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: '#9ca3af' }}>Sin resultados.</p>
        )}
      </div>
    </div>
  )
}
