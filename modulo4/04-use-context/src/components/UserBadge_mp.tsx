// src/components/UserBadge_mp.tsx
// Badge del mesero/admin autenticado, leído desde StaffAuthContext

import { useStaffAuth } from '../contexts/AuthContext_mp'

export default function UserBadge_mp() {
  const { state, logout } = useStaffAuth()

  if (!state.staff) {
    return (
      <span style={{ fontSize: 13, color: '#9ca3af' }}>
        Sin turno iniciado
      </span>
    )
  }

  const initials = state.staff.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: '#d97706', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 700, fontSize: 13,
      }}>
        {initials}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
          {state.staff.name}
        </p>
        <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
          {state.staff.role === 'admin' ? 'Administrador' : 'Mesero'}
        </p>
      </div>
      <button
        onClick={logout}
        style={{
          marginLeft: 8, padding: '4px 10px',
          background: 'none', border: '1px solid #d1d5db',
          borderRadius: 6, cursor: 'pointer',
          fontSize: 12, color: '#6b7280',
        }}
      >
        Cerrar turno
      </button>
    </div>
  )
}
