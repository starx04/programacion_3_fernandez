// src/components/UserProfileCard_mp.tsx

interface StaffProfileCardProps {
  fullName: string
  email: string
  role: 'chef' | 'mesero' | 'cajero'
  isActive: boolean
  specialties: string[]
  bio?: string
}

export default function StaffProfileCard({
  fullName,
  email,
  role,
  isActive,
  specialties,
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
        <h2 style={{ margin: 0 }}>{fullName}</h2>
        <span
          style={{
            backgroundColor: isActive ? '#d4edda' : '#f8d7da',
            color: isActive ? '#155724' : '#721c24',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 13,
          }}
        >
          {isActive ? 'En turno' : 'Fuera de turno'}
        </span>
      </div>

      <p style={{ margin: '8px 0 4px', color: '#555' }}>{email}</p>
      <p style={{ margin: '0 0 12px', fontSize: 13, color: '#888' }}>
        Rol: <strong>{role}</strong>
      </p>

      {bio && <p style={{ fontStyle: 'italic', color: '#444' }}>{bio}</p>}

      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {specialties.map((specialty) => (
          <li key={specialty} style={{ fontSize: 14 }}>{specialty}</li>
        ))}
      </ul>
    </div>
  )
}
