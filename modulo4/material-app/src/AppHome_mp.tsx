// src/AppHome_mp.tsx
// Variante "Menú de Restaurante" de AppHome.tsx — mismo patrón de router (BrowserRouter + MuiShell + Routes),
// montado bajo el prefijo /mp/... para no chocar con las rutas del AppHome original.

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MuiShellMp      from './components/mui/MuiShell_mp'
import DashboardPageMp from './pages/DashboardPage_mp'
import AboutPageMp     from './pages/AboutPage_mp'

export default function AppHomeMp() {
  return (
    <BrowserRouter>
      <MuiShellMp>
        <Routes>
          <Route path="/mp"       element={<DashboardPageMp />} />
          <Route path="/mp/about" element={<AboutPageMp />} />
        </Routes>
      </MuiShellMp>
    </BrowserRouter>
  )
}
