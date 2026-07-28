// src/components/CurrentDateDisplay_mp.tsx

export default function CurrentDateDisplayMp() {
  const momento = new Date()

  const fecha = momento.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const hora = momento.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div style={{ fontSize: 14, color: '#555' }}>
      <span style={{ fontWeight: 600 }}>Pedido registrado:</span>{' '}
      <span style={{ textTransform: 'capitalize' }}>{fecha}</span>
      <span style={{ marginLeft: 12, color: '#999' }}>{hora}</span>
    </div>
  )
}
