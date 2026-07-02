// src/components/AutoFocusForm_mp.tsx
// Menú de Restaurante — formulario de nuevo pedido con foco automático

import { useRef, useEffect } from 'react'

export default function AutoFocusForm_mp() {
  const dishRef     = useRef<HTMLInputElement>(null)
  const tableRef    = useRef<HTMLInputElement>(null)

  // Foco en el primer campo (plato) al montar el formulario de pedido
  useEffect(() => {
    dishRef.current?.focus()
  }, [])

  function handleDishKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Avanza al campo "mesa" con Enter
    if (e.key === 'Enter') {
      e.preventDefault()
      tableRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={dishRef}
        placeholder="Plato (ej: Ceviche mixto)"
        onKeyDown={handleDishKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={tableRef}
        type="number"
        placeholder="N° de mesa"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Enviar pedido
      </button>
    </form>
  )
}
