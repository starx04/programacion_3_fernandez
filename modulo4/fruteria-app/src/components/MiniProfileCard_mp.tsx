// src/components/MiniProfileCard_mp.tsx

import StatusBadgeMp, { type StaffStatus } from './StatusBadge_mp'

interface MiniWaiterCardProps {
  fullName: string
  role: string
  seccion?: string
  status: StaffStatus
  hireYear: number
}

export default function MiniWaiterCard({
  fullName,
  role,
  seccion,
  status,
  hireYear,
}: MiniWaiterCardProps) {
  const iniciales = fullName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const antiguedad = new Date().getFullYear() - hireYear

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        padding: 16,
        maxWidth: 280,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#d97706',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          {iniciales}
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 15 }}>{fullName}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>{role}</p>
        </div>
      </div>

      {seccion && (
        <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
          🍽️ {seccion}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StatusBadgeMp status={status} />
        <span style={{ fontSize: 12, color: '#9ca3af' }}>
          {antiguedad === 0
            ? 'Nuevo ingreso'
            : `${antiguedad} año${antiguedad > 1 ? 's' : ''} en el restaurante`}
        </span>
      </div>
    </div>
  )
}
