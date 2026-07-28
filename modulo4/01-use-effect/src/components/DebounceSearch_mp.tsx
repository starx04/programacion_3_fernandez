// src/components/DebounceSearch_mp.tsx
// Versión temática "Menú de Restaurante" de DebounceSearch

import { useState, useEffect } from 'react'

export default function DebounceSearchMp() {
  const [plato,          setPlato]          = useState('')
  const [platoDebounced, setPlatoDebounced] = useState('')

  useEffect(() => {
    // Se ejecuta 500ms después de que el mesero dejó de escribir
    const timer = setTimeout(() => {
      setPlatoDebounced(plato)
    }, 500)

    // La limpieza cancela el timer si el texto vuelve a cambiar
    // antes de que pasen los 500ms
    return () => clearTimeout(timer)
  }, [plato])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <input
        value={plato}
        onChange={(e) => setPlato(e.target.value)}
        placeholder="Buscar plato en el menú..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Búsqueda debounced (500ms): <strong>{platoDebounced || '—'}</strong>
      </p>
      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        Útil para evitar consultar la carta en cada pulsación de tecla.
      </p>
    </div>
  )
}
