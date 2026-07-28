// src/components/CatalogProductItem_mp.tsx
// Misma técnica que CatalogProductItem: props de datos + función como prop (callback)

interface DishMenuItemProps {
  id: number
  name: string
  price: number
  onAddToOrder: (id: number, name: string, price: number) => void
}

export default function DishMenuItem({
  id,
  name,
  price,
  onAddToOrder,
}: DishMenuItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <div>
        <p style={{ margin: 0, fontWeight: 500 }}>{name}</p>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>${price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAddToOrder(id, name, price)}
        style={{
          backgroundColor: '#c1440e',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '6px 14px',
          cursor: 'pointer',
        }}
      >
        + Pedir
      </button>
    </div>
  )
}
