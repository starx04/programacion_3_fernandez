// src/components/Post_mp.tsx
// Versión "Menú de Restaurante" de Post.tsx — reseñas de platos

import { useFetchMp } from '../hooks/useFetch_mp'

interface Review { id: number; title: string; body: string }

export default function DishReviewListMp() {
  const { data: reviews, loading, error } = useFetchMp<Review[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )

  if (loading) return <p style={{ color: '#6b7280' }}>Cargando reseñas...</p>
  if (error)   return <p style={{ color: '#ef4444' }}>Error: {error}</p>

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {reviews?.map((review) => (
        <li key={review.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 14 }}>{review.title}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {review.body.slice(0, 80)}...
          </p>
        </li>
      ))}
    </ul>
  )
}
