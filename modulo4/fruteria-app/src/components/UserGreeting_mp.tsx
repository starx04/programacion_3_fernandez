// src/components/UserGreeting_mp.tsx

interface WaiterGreetingProps {
  name: string
  tableNumber?: number
}

export default function WaiterGreeting({ name, tableNumber }: WaiterGreetingProps) {
  const iniciales = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: '#d97706',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
        }}
      >
        {iniciales}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Bienvenido, {name}</p>
        {tableNumber !== undefined && (
          <p style={{ margin: 0, fontSize: 13, color: '#888' }}>Mesa #{tableNumber}</p>
        )}
      </div>
    </div>
  )
}
