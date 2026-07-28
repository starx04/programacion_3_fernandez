// src/layouts/RootLayout_mp.tsx
// Misma técnica que RootLayout.tsx: Link + NavLink + Outlet,
// re-temado como el sitio público del "Menú de Restaurante".

import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RootLayout_mp() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '12px 24px', borderBottom: '1px solid #e5e7eb',
      }}>
        <Link
          to="/mp"
          style={{ fontWeight: 700, fontSize: 18, textDecoration: 'none', color: '#111' }}
        >
          🍽️ Sabor Criollo
        </Link>

        <nav style={{ display: 'flex', gap: 16 }}>
          {[
            { to: '/mp',           label: 'Inicio'      },
            { to: '/mp/menu',      label: 'Menú'        },
            { to: '/mp/nosotros',  label: 'Nosotros'    },
            { to: '/mp/reservar',  label: 'Reservar'    },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/mp'}  // evita que "/mp" quede activo en todas las rutas
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight:   isActive ? 600   : 400,
                color:        isActive ? '#b45309' : '#6b7280',
                borderBottom: isActive ? '2px solid #b45309' : '2px solid transparent',
                paddingBottom: 4,
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: 720, margin: '32px auto', padding: '0 16px' }}>
        <Outlet />  {/* aquí se renderiza la página activa */}
      </main>
    </div>
  )
}
