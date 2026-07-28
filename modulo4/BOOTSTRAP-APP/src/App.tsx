// src/App.tsx

import { useState } from 'react'
import AppHome    from './AppHome'
import AppLab     from './AppLab'
import AppHome_mp from './AppHome_mp'
import AppLab_mp  from './AppLab_mp'

type View = 'home' | 'lab' | 'home-mp' | 'lab-mp'

export default function App() {
  //return <AppLab />
  // Fase 2 — descomenta y comenta la línea anterior:
  const [view, setView] = useState<View>('home')

  return (
    <>
      <div
        style={{
          position: 'fixed', top: 0, right: 0, zIndex: 2000,
          display: 'flex', gap: 4, padding: 6,
          background: '#fff', boxShadow: '0 0 6px rgba(0,0,0,.25)',
          borderBottomLeftRadius: 8, fontSize: 12,
        }}
      >
        <button className="btn btn-sm btn-outline-dark" onClick={() => setView('home')}>AppHome</button>
        <button className="btn btn-sm btn-outline-dark" onClick={() => setView('lab')}>AppLab</button>
        <button className="btn btn-sm btn-outline-primary" onClick={() => setView('home-mp')}>AppHome (Menú)</button>
        <button className="btn btn-sm btn-outline-primary" onClick={() => setView('lab-mp')}>AppLab (Menú)</button>
      </div>

      {view === 'home'    && <AppHome />}
      {view === 'lab'     && <AppLab />}
      {view === 'home-mp' && <AppHome_mp />}
      {view === 'lab-mp'  && <AppLab_mp />}
    </>
  )
}

