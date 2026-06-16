// src/components/ProductCard_mp.tsx
// Versión "Menú de Restaurante" de ProductCard.tsx

interface BebidaCardProps {
  titulo: string
  detalle?: string
  especial?: boolean
  precio?: number
}

export default function BebidaCard({
  titulo,
  detalle = 'Sin descripción',
  especial = false,
  precio,
}: BebidaCardProps) {
  return (
    <div
      style={{
        border: especial ? '2px solid #2f7a3f' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: especial ? '#eafbee' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{titulo}</h3>
      <p style={{ margin: 0, color: '#555' }}>{detalle}</p>
      <p style={{ margin: 0, color: '#555' }}>{precio}</p>
    </div>
  )
}
