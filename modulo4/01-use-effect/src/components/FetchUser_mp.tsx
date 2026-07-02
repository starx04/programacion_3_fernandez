// src/components/FetchUser_mp.tsx
// Versión temática "Menú de Restaurante" de FetchUser

import { useState, useEffect } from 'react'

interface Plato {
  id:          number
  nombre:      string
  descripcion: string
  chef: {
    equipo:   string
    sucursal: string
  }
}

export default function FetchUserMp() {
  const [platoId, setPlatoId] = useState(1)
  const [plato,   setPlato]   = useState<Plato | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchPlato() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${platoId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const raw: { id: number; userId: number; title: string; body: string } =
          await res.json()

        const data: Plato = {
          id:          raw.id,
          nombre:      raw.title,
          descripcion: raw.body,
          chef: {
            equipo:   `Equipo de cocina ${raw.userId}`,
            sucursal: 'Cocina principal',
          },
        }

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setPlato(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchPlato()

    return () => { cancelled = true }
  }, [platoId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setPlatoId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: platoId === id ? '#0070f3' : '#fff',
              color:      platoId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: platoId === id ? 600 : 400,
            }}
          >
            Plato {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {plato && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{plato.nombre}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            {plato.descripcion}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {plato.chef.equipo}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {plato.chef.sucursal}
          </p>
        </div>
      )}
    </div>
  )
}
