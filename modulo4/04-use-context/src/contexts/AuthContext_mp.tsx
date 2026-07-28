// src/contexts/AuthContext_mp.tsx
// Contexto de autenticación para el personal del restaurante (mesero/admin)

import { createContext, useContext, useReducer } from 'react'

interface StaffMember {
  id:    number
  name:  string
  email: string
  role:  'admin' | 'mesero'
}

interface StaffAuthState {
  staff:     StaffMember | null
  isLoading: boolean
  error:     string | null
}

type StaffAuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; staff: StaffMember }
  | { type: 'LOGIN_ERROR';   message: string }
  | { type: 'LOGOUT' }

function staffAuthReducer(state: StaffAuthState, action: StaffAuthAction): StaffAuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null }
    case 'LOGIN_SUCCESS':
      return { staff: action.staff, isLoading: false, error: null }
    case 'LOGIN_ERROR':
      return { staff: null, isLoading: false, error: action.message }
    case 'LOGOUT':
      return { staff: null, isLoading: false, error: null }
  }
}

const INITIAL_STATE: StaffAuthState = {
  staff:     null,
  isLoading: false,
  error:     null,
}

interface StaffAuthContextValue {
  state:  StaffAuthState
  login:  (email: string, password: string) => Promise<void>
  logout: () => void
}

const StaffAuthContext = createContext<StaffAuthContextValue | null>(null)

export function StaffAuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(staffAuthReducer, INITIAL_STATE)

  async function login(email: string, _password: string) {
    dispatch({ type: 'LOGIN_START' })

    // Simulación de llamada a API del restaurante
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === 'error@restaurante.com') {
      dispatch({ type: 'LOGIN_ERROR', message: 'Credenciales incorrectas' })
      return
    }

    const isAdmin = email.startsWith('admin')

    dispatch({
      type: 'LOGIN_SUCCESS',
      staff: {
        id: 1,
        name: isAdmin ? 'Carlos Rivera' : 'María Torres',
        email,
        role: isAdmin ? 'admin' : 'mesero',
      },
    })
  }

  function logout() {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <StaffAuthContext value={{ state, login, logout }}>
      {children}
    </StaffAuthContext>
  )
}

export function useStaffAuth(): StaffAuthContextValue {
  const context = useContext(StaffAuthContext)
  if (!context) throw new Error('useStaffAuth debe usarse dentro de <StaffAuthProvider>')
  return context
}
