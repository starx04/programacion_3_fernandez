// src/components/MultiTagFilter_mp.tsx
// Versión "Menú de Restaurante" de MultiTagFilter.tsx — filtrar platos por etiquetas

import { useState, useMemo } from 'react'

interface Dish {
  id:     number
  title:  string
  tags:   string[]
  orders: number
}

const DISHES: Dish[] = [
  { id: 1, title: 'Ceviche mixto',        tags: ['mariscos', 'sin gluten', 'popular'],  orders: 420 },
  { id: 2, title: 'Ensalada vegana',      tags: ['vegano', 'sin gluten', 'ligero'],     orders: 310 },
  { id: 3, title: 'Lomo saltado picante', tags: ['carne', 'picante', 'popular'],        orders: 280 },
  { id: 4, title: 'Risotto de hongos',    tags: ['vegetariano', 'ligero'],              orders: 190 },
  { id: 5, title: 'Arroz con mariscos',   tags: ['mariscos', 'popular'],                orders: 510 },
  { id: 6, title: 'Ají de gallina',       tags: ['carne', 'picante', 'tradicional'],    orders: 220 },
  { id: 7, title: 'Tacu tacu',            tags: ['tradicional', 'popular', 'picante'],  orders: 360 },
  { id: 8, title: 'Sopa vegana de zapallo',tags: ['vegano', 'ligero'],                  orders: 150 },
]

export default function MultiTagFilterMp() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set())
  const [sortByOrders, setSortByOrders] = useState(false)

  // Todos los tags únicos con sus conteos
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    DISHES.forEach(d => d.tags.forEach(t => { counts[t] = (counts[t] ?? 0) + 1 }))
    return counts
  }, []) // DISHES es estático

  // Platos que tienen TODOS los tags activos
  const filtered = useMemo(() => {
    if (activeTags.size === 0) return DISHES
    return DISHES.filter(d => [...activeTags].every(t => d.tags.includes(t)))
  }, [activeTags])

  // Ordenar — depende de filtered y sortByOrders
  const sorted = useMemo(
    () => sortByOrders
      ? [...filtered].sort((a, b) => b.orders - a.orders)
      : filtered,
    [filtered, sortByOrders]
  )

  function toggleTag(tag: string) {
    setActiveTags(prev => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>MultiTagFilter_mp</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Etiquetas múltiples con filtro AND. Conteos memoizados — se calculan una sola vez.
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        {Object.entries(tagCounts).map(([tag, count]) => {
          const active = activeTags.has(tag)
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding:      '4px 12px',
                borderRadius: 999,
                border:       '1px solid',
                borderColor:  active ? '#0070f3' : '#ddd',
                background:   active ? '#0070f3' : 'white',
                color:        active ? 'white'    : '#555',
                fontSize:     13,
                cursor:       'pointer',
                fontWeight:   active ? 700 : 400,
              }}
            >
              {tag} <span style={{ opacity: 0.7 }}>({count})</span>
            </button>
          )
        })}
      </div>

      {/* Controles secundarios */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: '#888' }}>
          {sorted.length} plato{sorted.length !== 1 ? 's' : ''}
          {activeTags.size > 0 && ` (filtrado por: ${[...activeTags].join(', ')})`}
        </span>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={sortByOrders}
            onChange={e => setSortByOrders(e.target.checked)}
          />
          Ordenar por pedidos
        </label>
      </div>

      {/* Platos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sorted.map(d => (
          <div key={d.id} style={{
            padding:      '12px 16px',
            background:   '#f9f9f9',
            borderRadius: 10,
            border:       '1px solid #eee',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{d.title}</span>
              <span style={{ fontSize: 12, color: '#888', whiteSpace: 'nowrap', marginLeft: 12 }}>
                {d.orders.toLocaleString()} pedidos
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
              {d.tags.map(t => (
                <span
                  key={t}
                  onClick={() => toggleTag(t)}
                  style={{
                    padding:      '2px 8px',
                    borderRadius: 999,
                    fontSize:     11,
                    background:   activeTags.has(t) ? '#0070f320' : '#f0f0f0',
                    color:        activeTags.has(t) ? '#0070f3'   : '#666',
                    cursor:       'pointer',
                    fontWeight:   activeTags.has(t) ? 700 : 400,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeTags.size > 0 && (
        <button
          onClick={() => setActiveTags(new Set())}
          style={{
            marginTop:    16,
            padding:      '6px 16px',
            borderRadius: 6,
            border:       '1px solid #ddd',
            cursor:       'pointer',
            fontSize:     13,
            background:   'white',
          }}
        >
          Limpiar filtros
        </button>
      )}
    </div>
  )
}
