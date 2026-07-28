// src/components/MascotCatalog_mp.tsx
// Versión "Menú de Restaurante" de MascotCatalog.tsx

interface Plato {
  id: number
  nombre: string
  precio: number
  agotado?: boolean
  categoria?: string
}

interface MenuCatalogProps {
  platos: Plato[]
  titulo?: string
}

export default function MenuCatalog({
  platos,
  titulo = 'Menú',
}: MenuCatalogProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{titulo}</h2>

      {platos.length === 0 && (
        <p style={{ color: '#999' }}>No hay platos disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {platos.map((plato) => (
          <li
            key={plato.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: plato.agotado ? 0.4 : 1,
            }}
          >
            <span>
              {plato.nombre}
              {plato.agotado && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Agotado
                </em>
              )}
              <em>
                {plato.categoria}
              </em>
            </span>
            <strong>${plato.precio.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
