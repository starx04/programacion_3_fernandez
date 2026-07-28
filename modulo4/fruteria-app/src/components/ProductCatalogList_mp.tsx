// src/components/ProductCatalogList_mp.tsx

interface MenuItem {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  category?: string
}

interface MenuListProps {
  items: MenuItem[]
  title?: string
}

export default function MenuList({
  items,
  title = 'Menú',
}: MenuListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {items.length === 0 && (
        <p style={{ color: '#999' }}>No hay platos disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: item.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {item.name}
              {item.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Agotado
                </em>
              )}
              <em>
                {item.category}
              </em>
            </span>
            <strong>${item.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
