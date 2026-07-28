// src/components/DocumentTitle_mp.tsx
// Versión temática "Menú de Restaurante" de DocumentTitle

import { useEffect } from 'react'

export default function DocumentTitleMp() {
    const pedidosActivos = Math.floor(Math.random() * 10) + 1
  useEffect(() => {
    document.title = `Menú del Restaurante — ${pedidosActivos} pedidos activos`
    console.log('DocumentTitleMp montado, título cambiado')
    console.log('Pedidos activos', pedidosActivos)

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'React App'
      console.log('DocumentTitleMp desmontado, título restaurado')
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al montar este componente del menú.
    </p>
  )
}
