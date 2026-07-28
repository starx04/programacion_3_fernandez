// src/components/FilteredCatalog_mp.tsx
// Versión "Menú de Restaurante" de FilteredCatalog.tsx

import { useState, useMemo } from 'react'

interface Dish {
  id:          number
  name:        string
  category:    string
  price:       number
  available:   boolean
  portions:    number
}

const MENU: Dish[] = [
  { id:  1, name: 'Ceviche mixto',        category: 'Entradas',    price:  12.50, available: true,  portions: 14 },
  { id:  2, name: 'Lomo saltado',         category: 'Fondos',      price:  15.00, available: true,  portions:  9 },
  { id:  3, name: 'Causa limeña',         category: 'Entradas',    price:   9.50, available: false, portions:  0 },
  { id:  4, name: 'Arroz con mariscos',   category: 'Fondos',      price:  16.90, available: true,  portions: 20 },
  { id:  5, name: 'Tiramisú',             category: 'Postres',     price:   7.00, available: true,  portions:  6 },
  { id:  6, name: 'Cheesecake de maracuyá',category:'Postres',     price:   8.50, available: true,  portions:  3 },
  { id:  7, name: 'Limonada de coco',     category: 'Bebidas',     price:   5.00, available: false, portions:  0 },
  { id:  8, name: 'Chicha morada',        category: 'Bebidas',     price:   4.50, available: true,  portions: 25 },
  { id:  9, name: 'Ají de gallina',       category: 'Fondos',      price:  14.20, available: true,  portions: 11 },
  { id: 10, name: 'Suspiro limeño',       category: 'Postres',     price:   7.50, available: true,  portions:  2 },
]

type SortKey = 'name' | 'price' | 'portions'

export default function FilteredCatalogMp() {
  const [search,     setSearch]     = useState('')
  const [onlyOpen,   setOnlyOpen]   = useState(true)
  const [category,   setCategory]   = useState('Todas')
  const [sortBy,     setSortBy]     = useState<SortKey>('name')

  // useMemo 1 — filtrar (depende de search, onlyOpen, category)
  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return MENU.filter(d =>
      (!onlyOpen || d.available) &&
      (category === 'Todas' || d.category === category) &&
      (d.name.toLowerCase().includes(q) || d.category.toLowerCase().includes(q))
    )
  }, [search, onlyOpen, category])

  // useMemo 2 — ordenar (depende de filtered y sortBy)
  const sorted = useMemo(
    () => [...filtered].sort((a, b) =>
      sortBy === 'name'     ? a.name.localeCompare(b.name) :
      sortBy === 'price'    ? a.price - b.price             :
                              b.portions - a.portions        // porciones desc
    ),
    [filtered, sortBy]
  )

  const categories = useMemo(
    () => ['Todas', ...new Set(MENU.map(d => d.category))],
    [] // El menú es estático — solo se calcula una vez
  )

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>FilteredCatalog_mp</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Dos <code>useMemo</code> encadenados: filtrar → ordenar el menú del restaurante.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar plato..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 140, padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortKey)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          <option value="name">A–Z</option>
          <option value="price">Precio ↑</option>
          <option value="portions">Porciones ↓</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={onlyOpen}
            onChange={e => setOnlyOpen(e.target.checked)}
          />
          Solo disponibles
        </label>
      </div>

      <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
        {sorted.length} de {MENU.length} platos
      </p>

      {/* Lista */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sorted.map(d => (
          <div key={d.id} style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            padding:        '10px 14px',
            background:     d.available ? '#f9f9f9' : '#f0f0f0',
            borderRadius:   8,
            border:         '1px solid #e5e5e5',
            opacity:        d.available ? 1 : 0.6,
          }}>
            <div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{d.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#888' }}>{d.category}</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13 }}>
              <div style={{ fontWeight: 700 }}>${d.price.toFixed(2)}</div>
              <div style={{ color: d.portions < 5 ? '#e00' : '#888' }}>
                Porciones: {d.portions}
              </div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <p style={{ textAlign: 'center', color: '#aaa', padding: 24 }}>
            Sin resultados.
          </p>
        )}
      </div>
    </div>
  )
}
