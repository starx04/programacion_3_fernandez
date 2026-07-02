// src/components/OnlineStatus_mp.tsx
// Versión temática "Menú de Restaurante" de OnlineStatus

import { useState, useEffect } from 'react'

export default function OnlineStatusMp() {
  const [cocinaConectada, setCocinaConectada] = useState(navigator.onLine)

  useEffect(() => {
    function handleOnline()  { setCocinaConectada(true)  }
    function handleOffline() { setCocinaConectada(false) }

    window.addEventListener('online',  handleOnline)
    window.addEventListener('offline', handleOffline)

    // Limpieza — se ejecuta al desmontar
    return () => {
      window.removeEventListener('online',  handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <p style={{ color: cocinaConectada ? '#166534' : '#991b1b', fontWeight: 500 }}>
      {cocinaConectada ? '🟢 Cocina conectada al sistema de pedidos' : '🔴 Cocina sin conexión — pedidos no se sincronizan'}
    </p>
  )
}
