// src/AppShadcn_mp.tsx

import { useState } from 'react'
import FormularioUsuario_mp from './components/shadcn/FormularioUsuario_mp'
import TarjetaProducto_mp from './components/shadcn/TarjetaProducto_mp'

type LabKey = 'buttons' | 'form' | 'card'

export default function AppShadcn_mp() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex items-center gap-4 border-b border-white/10 bg-slate-900 px-4 py-2">
        <span className="font-bold text-white text-sm">Sabor Criollo — LAB</span>
        <select
          className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1 text-sm text-white outline-none"
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="card">Platillo</option>
          <option value="form">Reserva</option>

        </select>
      </div>


      {lab === 'form'    && <FormularioUsuario_mp />}
      {lab === 'card'    && <TarjetaProducto_mp />}

    </div>
  )
}
