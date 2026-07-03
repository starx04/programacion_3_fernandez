// src/App.tsx

import { useAuth }  from './contexts/AuthContext'
import AppHeader    from './components/AppHeader'
import LoginForm    from './components/LoginForm'
import ThemeToggle  from './components/ThemeToggle'
import UserBadge    from './components/UserBadge'

import { MenuThemeProvider } from './contexts/ThemeContext_mp'
import { StaffAuthProvider, useStaffAuth } from './contexts/AuthContext_mp'
import AppHeader_mp from './components/AppHeader_mp'
import LoginForm_mp from './components/LoginForm_mp'
import ThemeToggle_mp from './components/ThemeToggle_mp'
import UserBadge_mp from './components/UserBadge_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  ThemeToggle   — botón que alterna el tema desde el contexto     │
// │  2  UserBadge     — badge de usuario autenticado con logout         │
// │  3  LoginForm     — formulario de login conectado a AuthContext      │
// │  4  AppHeader     — header con dos contextos simultáneos            │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 1

export default function App() {
  const { state } = useAuth()

  const content =
    PASO === 1 ? <ThemeToggle /> :
    PASO === 2 ? <UserBadge /> :
    PASO === 3 ? <LoginForm /> :
    PASO === 4 ? <AppHeader /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 4 ? content : (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesión activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

      <MenuThemeProvider>
        <StaffAuthProvider>
          <RestaurantDemo />
        </StaffAuthProvider>
      </MenuThemeProvider>
    </main>
  )
}

// Demo del sistema de contexto re-temático "Menú de Restaurante" (_mp)
function RestaurantDemo() {
  const { state } = useStaffAuth()

  return (
    <section>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>
        Demo: Menú de Restaurante (contextos _mp)
      </h2>
      <AppHeader_mp />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <ThemeToggle_mp />
          <UserBadge_mp />
        </div>
        {!state.staff && <LoginForm_mp />}
      </div>
    </section>
  )
}