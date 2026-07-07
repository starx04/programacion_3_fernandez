// src/pages/DashboardPage_mp.tsx
// Misma técnica que DashboardPage.tsx: NavLink + Outlet para un sub-panel
// anidado, ahora como la vista "Resumen de hoy" dentro del panel admin
// del restaurante (pedidos y reservas del día).

import { NavLink, Outlet } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '',          label: 'Pedidos de hoy'  },
  { to: 'reservas',  label: 'Reservas de hoy' },
]

export default function DashboardPage_mp() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24 }}>
      <aside style={{ borderRight: '1px solid #e5e7eb', paddingRight: 16 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#9ca3af', marginBottom: 8 }}>
          RESUMEN
        </p>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              end
              style={({ isActive }) => ({
                padding: '6px 10px', borderRadius: 6,
                textDecoration: 'none', fontSize: 14,
                background: isActive ? '#fef3c7' : 'transparent',
                color:      isActive ? '#b45309' : '#374151',
                fontWeight: isActive ? 600 : 400,
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section>
        <Outlet />  {/* renderiza la sub-ruta activa aquí */}
      </section>
    </div>
  )
}
