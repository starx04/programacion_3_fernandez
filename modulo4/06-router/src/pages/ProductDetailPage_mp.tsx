// src/pages/ProductDetailPage_mp.tsx
// Misma técnica que ProductDetailPage.tsx: useParams tipado + Link de vuelta,
// ahora para el detalle de un plato del menú.

import { useParams, Link } from 'react-router-dom'

// Define el tipo de los parámetros de la URL
interface DishParams extends Record<string, string | undefined> {
  id: string   // los params siempre son string — convierte si necesitas número
}

export default function ProductDetailPage_mp() {
  const { id } = useParams<DishParams>()

  // Convierte a número cuando lo necesites
  const dishId = Number(id)

  if (!id || isNaN(dishId)) {
    return <p style={{ color: '#ef4444' }}>ID de plato inválido.</p>
  }

  return (
    <div>
      <Link
        to="/mp/menu"
        style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}
      >
        ← Volver al menú
      </Link>
      <h1 style={{ marginTop: 12 }}>Plato #{dishId}</h1>
      <p style={{ color: '#6b7280' }}>
        Aquí iría el detalle del plato con ID {dishId}.
      </p>
    </div>
  )
}
