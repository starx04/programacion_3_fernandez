// src/components/MemoizedList_mp.tsx
// Versión "Menú de Restaurante" de MemoizedList.tsx

import { useState, useCallback, memo } from 'react'

interface Order {
  id:        number
  text:      string
  completed: boolean
}

const INITIAL_ORDERS: Order[] = [
  { id: 1, text: 'Mesa 3 — Ceviche mixto',       completed: false },
  { id: 2, text: 'Mesa 5 — Lomo saltado',        completed: true  },
  { id: 3, text: 'Mesa 1 — Arroz con mariscos',  completed: false },
  { id: 4, text: 'Mesa 7 — Tiramisú',            completed: false },
  { id: 5, text: 'Mesa 2 — Chicha morada',       completed: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
let rowRenderCount = 0

const OrderRow = memo(function OrderRow({
  order,
  onToggle,
  onDelete,
}: {
  order:    Order
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}) {
  rowRenderCount++
  const count = rowRenderCount

  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      gap:            10,
      padding:        '10px 14px',
      background:     order.completed ? '#f0fdf4' : '#fafafa',
      borderRadius:   8,
      border:         '1px solid',
      borderColor:    order.completed ? '#86efac' : '#e5e5e5',
    }}>
      <input
        type="checkbox"
        checked={order.completed}
        onChange={() => onToggle(order.id)}
        style={{ cursor: 'pointer', width: 16, height: 16 }}
      />
      <span style={{
        flex:           1,
        fontSize:       14,
        textDecoration: order.completed ? 'line-through' : 'none',
        color:          order.completed ? '#666' : '#111',
      }}>
        {order.text}
      </span>
      <span style={{ fontSize: 11, color: '#aaa' }}>render #{count}</span>
      <button
        onClick={() => onDelete(order.id)}
        style={{
          padding:      '2px 8px',
          borderRadius: 4,
          border:       '1px solid #fca5a5',
          background:   '#fef2f2',
          color:        '#dc2626',
          cursor:       'pointer',
          fontSize:     12,
        }}
      >
        ✕
      </button>
    </div>
  )
})

// ─── Padre ───────────────────────────────────────────────────────────────
export default function MemoizedListMp() {
  const [orders,  setOrders]  = useState<Order[]>(INITIAL_ORDERS)
  const [counter, setCounter] = useState(0)

  // useCallback: onToggle y onDelete tienen referencia estable
  // OrderRow no re-renderiza cuando solo cambia `counter`
  const handleToggle = useCallback((id: number) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, completed: !o.completed } : o))
  }, []) // sin dependencias externas — setOrders es estable

  const handleDelete = useCallback((id: number) => {
    setOrders(prev => prev.filter(o => o.id !== id))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>MemoizedList_mp</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>React.memo</code> + <code>useCallback</code> — los pedidos de mesa no re-renderizan por un counter ajeno.
      </p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
        <button
          onClick={() => setCounter(c => c + 1)}
          style={{ padding: '6px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Incrementar counter ({counter})
        </button>
        <span style={{ fontSize: 13, color: '#888' }}>
          ← no debe re-renderizar los pedidos
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {orders.map(order => (
          <OrderRow
            key={order.id}
            order={order}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, color: '#aaa' }}>
        Render total de pedidos: {rowRenderCount}
        {' '}(debería crecer solo al hacer toggle o delete, no al pulsar el counter)
      </p>
    </div>
  )
}
