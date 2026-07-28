// src/AppHome_mp.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RBNavbar_mp from './components/rb/RBNavbar_mp'
import RBFooter_mp from './components/rb/RBFooter_mp'
import HomeRB_mp   from './pages/HomeRB_mp'
import AboutRB_mp  from './pages/AboutRB_mp'

export default function AppHome_mp() {
  return (
    <BrowserRouter>
      <RBNavbar_mp />
      <Routes>
        <Route path="/"      element={<HomeRB_mp />} />
        <Route path="/about" element={<AboutRB_mp />} />
      </Routes>
      <RBFooter_mp />
    </BrowserRouter>
  )
}
