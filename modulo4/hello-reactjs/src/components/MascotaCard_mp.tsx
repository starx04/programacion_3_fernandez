// src/components/MascotaCard_mp.tsx
// Versión "Menú de Restaurante" de MascotaCard.tsx

interface PlatoDestacadoCardProps {
  nombre: string
  descripcion?: string
  destacado?: boolean
  precio?: number
}

export default function PlatoDestacadoCard({
  nombre,
  descripcion = 'Sin descripción',
  destacado = false,
  precio,
}: PlatoDestacadoCardProps) {
  return (
    <div
      style={{
        border: destacado ? '2px solid #c9962c' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: destacado ? '#fff4e0' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{nombre}</h3>
      <p style={{ margin: 0, color: '#555' }}>{descripcion}</p>
      <p style={{ margin: 0, color: '#555' }}>{precio}</p>
    </div>
  )
}
