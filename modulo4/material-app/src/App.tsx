import { useSyncExternalStore } from 'react'
import AppHome from './AppHome'
import AppHomeMp from './AppHome_mp'

// Wiring liviano para exponer la variante "Menú de Restaurante" (_mp) bajo el prefijo /mp/...
// sin anidar dos <BrowserRouter> (AppHome y AppHomeMp ya traen el suyo propio) y sin tocar
// la lógica original de AppHome.tsx.
function subscribeToLocation(callback: () => void) {
  window.addEventListener('popstate', callback)
  return () => window.removeEventListener('popstate', callback)
}

function getPathname() {
  return window.location.pathname
}

function App() {
  const pathname = useSyncExternalStore(subscribeToLocation, getPathname)
  return pathname.startsWith('/mp') ? <AppHomeMp /> : <AppHome />
}

export default App
