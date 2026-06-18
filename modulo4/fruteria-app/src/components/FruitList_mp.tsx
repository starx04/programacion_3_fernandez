// src/components/FruitList_mp.tsx

interface Dish {
  name: string
  emoji: string
  price: number
  isSpecial?: boolean
}

interface DishListProps {
  dishes: Dish[]
  title?: string
}

export default function DishList({ dishes, title = 'Platos' }: DishListProps) {
  if (dishes.length === 0) {
    return <p style={{ color: '#999' }}>No hay platos en el menú.</p>
  }
  const ordenados = [...dishes].sort((a, b) => a.price - b.price)
  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {ordenados.map((dish) => (
          <li
            key={dish.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{dish.emoji} {dish.name}</span>
            <span style={{ color: '#888', fontSize: 13 }}>${dish.price.toFixed(2)}</span>
            <span>{dish.isSpecial && '⭐ '}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
