// src/components/AppHeader_mp.tsx
// Encabezado del Menú de Restaurante — combina tema del menú y sesión de personal

import { useMenuTheme } from '../contexts/ThemeContext_mp'
import { useStaffAuth }  from '../contexts/AuthContext_mp'
import ThemeToggle_mp  from './ThemeToggle_mp'
import UserBadge_mp    from './UserBadge_mp'

export default function AppHeader_mp() {
  const { theme }        = useMenuTheme()
  const { state: auth }  = useStaffAuth()

  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 24px',
      background: theme === 'dark' ? '#111827' : '#fff',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
          Menú de Restaurante
        </h1>
        {auth.staff && (
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
            Panel de {auth.staff.role === 'admin' ? 'administrador' : 'mesero'}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ThemeToggle_mp />
        <UserBadge_mp />
      </div>
    </header>
  )
}
