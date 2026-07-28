// src/components/ProtectedRoute_mp.tsx
// Misma técnica que ProtectedRoute.tsx: Navigate + useLocation para
// proteger las rutas administrativas del restaurante (panel del staff).

import { Navigate, useLocation } from 'react-router-dom'

interface ProtectedRouteMpProps {
  isAuthenticated: boolean
  children:        React.ReactNode
}

export default function ProtectedRoute_mp({
  isAuthenticated,
  children,
}: ProtectedRouteMpProps) {
  const location = useLocation()

  if (!isAuthenticated) {
    // Guarda la ruta actual para redirigir después del login del staff
    return <Navigate to="/mp/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}
