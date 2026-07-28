// src/components/PreviousValue_mp.tsx
// Menú de Restaurante — seguimiento del total anterior del pedido

import { useState, useRef, useEffect } from 'react'

export default function PreviousValue_mp() {
  const [total, setTotal] = useState('')
  const previousTotalRef = useRef('')

  useEffect(() => {
    // Se ejecuta DESPUÉS de renderizar con el nuevo `total`,
    // así que aquí guardamos el valor que quedará "anterior" en el próximo render
    previousTotalRef.current = total
  }, [total])

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        placeholder="Total del pedido ($)..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Total actual: <strong>{total || '—'}</strong>
        </p>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Total anterior: <strong>{previousTotalRef.current || '—'}</strong>
        </p>
      </div>
    </div>
  )
}
