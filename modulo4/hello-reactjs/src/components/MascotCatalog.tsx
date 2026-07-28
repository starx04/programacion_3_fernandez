// src/components/MascotaCatalogList.tsx

interface Mascota {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  tipo_raza?: string
}

interface MascotaCatalogListProps {
  mascotas: Mascota[]
  title?: string
}

export default function MascotaCatalogList({
  mascotas,
  title = 'Catálogo',
}: MascotaCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {mascotas.length === 0 && (
        <p style={{ color: '#999' }}>No hay mascotas disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {mascotas.map((mascota) => (
          <li
            key={mascota.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: mascota.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {mascota.name}
              {mascota.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Agotado
                </em>
              )}
              <em>
                {mascota.tipo_raza}
              </em>
            </span>
            <strong>${mascota.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}