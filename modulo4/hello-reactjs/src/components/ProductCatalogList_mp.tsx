// src/components/ProductCatalogList_mp.tsx
// Versión "Menú de Restaurante" de ProductCatalogList.tsx

interface Bebida {
  id: number
  nombre: string
  precio: number
  agotada?: boolean
  tipo?: string
}

interface CartaBebidasProps {
  bebidas: Bebida[]
  titulo?: string
}

export default function CartaBebidas({
  bebidas,
  titulo = 'Carta de Bebidas',
}: CartaBebidasProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{titulo}</h2>

      {bebidas.length === 0 && (
        <p style={{ color: '#999' }}>No hay bebidas disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bebidas.map((bebida) => (
          <li
            key={bebida.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: bebida.agotada ? 0.4 : 1,
            }}
          >
            <span>
              {bebida.nombre}
              {bebida.agotada && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Agotado
                </em>
              )}
              <em>
                {bebida.tipo}
              </em>
            </span>
            <strong>${bebida.precio.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
