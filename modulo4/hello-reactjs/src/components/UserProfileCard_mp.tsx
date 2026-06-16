// src/components/UserProfileCard_mp.tsx
// Versión "Menú de Restaurante" de UserProfileCard.tsx

interface StaffProfileCardProps {
  nombreCompleto: string
  email: string
  rol: 'gerente' | 'mesero' | 'cocinero'
  activo: boolean
  especialidades: string[]
  bio?: string
}

export default function StaffProfileCard({
  nombreCompleto,
  email,
  rol,
  activo,
  especialidades,
  bio,
}: StaffProfileCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        maxWidth: 400,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>{nombreCompleto}</h2>
        <span
          style={{
            backgroundColor: activo ? '#d4edda' : '#f8d7da',
            color: activo ? '#155724' : '#721c24',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 13,
          }}
        >
          {activo ? 'En turno' : 'Fuera de turno'}
        </span>
      </div>

      <p style={{ margin: '8px 0 4px', color: '#555' }}>{email}</p>
      <p style={{ margin: '0 0 12px', fontSize: 13, color: '#888' }}>
        Puesto: <strong>{rol}</strong>
      </p>

      {bio && <p style={{ fontStyle: 'italic', color: '#444' }}>{bio}</p>}

      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {especialidades.map((especialidad) => (
          <li key={especialidad} style={{ fontSize: 14 }}>{especialidad}</li>
        ))}
      </ul>
    </div>
  )
}
