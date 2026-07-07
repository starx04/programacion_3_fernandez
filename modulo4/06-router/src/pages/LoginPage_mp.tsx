// src/pages/LoginPage_mp.tsx
// Misma técnica que LoginPage.tsx: useState + useNavigate con
// navigate(..., { replace: true }) tras un login simulado, ahora para
// el acceso del personal (staff) al panel administrativo del restaurante.

import { useState }     from 'react'
import { useNavigate }  from 'react-router-dom'

export default function LoginPage_mp() {
  const navigate = useNavigate()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // Simulación de login del staff
    await new Promise((r) => setTimeout(r, 800))

    // Marca al staff como autenticado para esta sesión del navegador,
    // así ProtectedRoute_mp puede validar el acceso al panel admin
    sessionStorage.setItem('mp_staff_auth', 'true')

    // replace: true — reemplaza la entrada en el historial
    // el staff no puede volver al login con el botón "atrás"
    navigate('/mp/admin', { replace: true })
  }

  return (
    <div style={{ maxWidth: 320, margin: '0 auto' }}>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>Acceso del personal</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email del staff"
          required
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px', background: loading ? '#fcd34d' : '#b45309',
            color: '#fff', border: 'none', borderRadius: 6,
            cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 500,
          }}
        >
          {loading ? 'Entrando...' : 'Entrar al panel'}
        </button>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6, fontSize: 14,
}
