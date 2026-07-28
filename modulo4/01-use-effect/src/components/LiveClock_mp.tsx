// src/components/LiveClock_mp.tsx
// Versión temática "Menú de Restaurante" de LiveClock

import { useState, useEffect } from 'react'

export default function LiveClockMp() {
  // Inicializador perezoso — new Date() se llama una sola vez
  const [horaPedido, setHoraPedido] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setHoraPedido(new Date())
    }, 1000)

    // Limpieza obligatoria — detiene el interval al desmontar
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
        Hora de cocina en vivo
      </p>
      <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2 }}>
        {horaPedido.toLocaleTimeString('es-ES')}
      </p>
    </div>
  )
}
