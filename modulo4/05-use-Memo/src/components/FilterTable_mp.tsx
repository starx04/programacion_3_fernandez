// src/components/FilterTable_mp.tsx
// Versión "Menú de Restaurante" de FilterTable.tsx

import { useState, useCallback, useMemo, memo } from 'react'

interface Dish {
  id:        number
  name:      string
  category:  string
  price:     number
  available: boolean
}

const DISHES: Dish[] = [
  { id: 1, name: 'Ceviche mixto',       category: 'Entradas', price: 12.50, available: true  },
  { id: 2, name: 'Lomo saltado',        category: 'Fondos',    price: 15.00, available: true  },
  { id: 3, name: 'Causa limeña',        category: 'Entradas', price:  9.50, available: false },
  { id: 4, name: 'Arroz con mariscos',  category: 'Fondos',    price: 16.90, available: true  },
  { id: 5, name: 'Tiramisú',            category: 'Postres',   price:  7.00, available: true  },
  { id: 6, name: 'Limonada de coco',    category: 'Bebidas',   price:  5.00, available: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
const DishRow = memo(function DishRow({
  dish,
  onToggle,
  onRaise,
  onRemove,
}: {
  dish:     Dish
  onToggle: (id: number) => void
  onRaise:  (id: number, amount: number) => void
  onRemove: (id: number) => void
}) {
  return (
    <tr style={{ opacity: dish.available ? 1 : 0.5 }}>
      <td style={{ padding: '8px 12px', fontWeight: 500 }}>{dish.name}</td>
      <td style={{ padding: '8px 12px', color: '#666' }}>{dish.category}</td>
      <td style={{ padding: '8px 12px', fontWeight: 700 }}>${dish.price.toFixed(2)}</td>
      <td style={{ padding: '8px 12px' }}>
        <span style={{
          padding:      '2px 10px',
          borderRadius: 999,
          fontSize:     12,
          fontWeight:   600,
          background:   dish.available ? '#dcfce7' : '#f3f4f6',
          color:        dish.available ? '#15803d' : '#6b7280',
        }}>
          {dish.available ? 'Disponible' : 'Agotado'}
        </span>
      </td>
      <td style={{ padding: '8px 12px' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => onToggle(dish.id)}
            style={{
              padding:      '3px 10px',
              borderRadius: 4,
              border:       '1px solid #d1d5db',
              cursor:       'pointer',
              fontSize:     12,
              background:   'white',
            }}
          >
            {dish.available ? 'Agotar' : 'Reponer'}
          </button>
          <button
            onClick={() => onRaise(dish.id, 1)}
            style={{
              padding:    '3px 10px',
              borderRadius: 4,
              border:     '1px solid #86efac',
              background: '#f0fdf4',
              color:      '#15803d',
              cursor:     'pointer',
              fontSize:   12,
            }}
          >
            +$1
          </button>
          <button
            onClick={() => onRemove(dish.id)}
            style={{
              padding:    '3px 10px',
              borderRadius: 4,
              border:     '1px solid #fca5a5',
              background: '#fef2f2',
              color:      '#dc2626',
              cursor:     'pointer',
              fontSize:   12,
            }}
          >
            ✕
          </button>
        </div>
      </td>
    </tr>
  )
})

// ─── Padre ───────────────────────────────────────────────────────────────
export default function FilterTableMp() {
  const [dishes,       setDishes]       = useState<Dish[]>(DISHES)
  const [catFilter,    setCatFilter]    = useState('Todas')
  const [showOutOfStock,setShowOutOfStock] = useState(true)

  const categories = useMemo(
    () => ['Todas', ...new Set(DISHES.map(d => d.category))],
    []
  )

  const visible = useMemo(
    () => dishes.filter(d =>
      (catFilter === 'Todas' || d.category === catFilter) &&
      (showOutOfStock || d.available)
    ),
    [dishes, catFilter, showOutOfStock]
  )

  // useCallback: handlers estables → DishRow no re-renderiza por filtros
  const handleToggle = useCallback((id: number) => {
    setDishes(prev => prev.map(d => d.id === id ? { ...d, available: !d.available } : d))
  }, [])

  const handleRaise = useCallback((id: number, amount: number) => {
    setDishes(prev => prev.map(d => d.id === id ? { ...d, price: d.price + amount } : d))
  }, [])

  const handleRemove = useCallback((id: number) => {
    setDishes(prev => prev.filter(d => d.id !== id))
  }, [])

  const totalValue = useMemo(() => visible.reduce((s, d) => s + d.price, 0), [visible])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>FilterTable_mp</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Tres callbacks estables para una tabla de platos con <code>React.memo</code>. Cambiar filtros no re-renderiza las filas.
      </p>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
        <select
          value={catFilter}
          onChange={e => setCatFilter(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showOutOfStock}
            onChange={e => setShowOutOfStock(e.target.checked)}
          />
          Mostrar agotados
        </label>
        <span style={{ fontSize: 13, color: '#888', alignSelf: 'center' }}>
          {visible.length} plato{visible.length !== 1 ? 's' : ''} · Valor total: ${totalValue.toFixed(2)}
        </span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            {['Plato', 'Categoría', 'Precio', 'Estado', 'Acciones'].map(h => (
              <th key={h} style={{
                textAlign:    'left',
                padding:      '8px 12px',
                borderBottom: '2px solid #e5e5e5',
                fontWeight:   600,
                color:        '#555',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map(dish => (
            <DishRow
              key={dish.id}
              dish={dish}
              onToggle={handleToggle}
              onRaise={handleRaise}
              onRemove={handleRemove}
            />
          ))}
          {visible.length === 0 && (
            <tr>
              <td colSpan={5} style={{ padding: 24, textAlign: 'center', color: '#aaa' }}>
                Sin platos para los filtros actuales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
