// src/AppShadcn.tsx

import { useState } from 'react'
import FormularioUsuario from './components/shadcn/FormularioUsuario'
import TarjetaProducto from './components/shadcn/TarjetaProducto'
import FormularioUsuario_mp from './components/shadcn/FormularioUsuario_mp'
import TarjetaProducto_mp from './components/shadcn/TarjetaProducto_mp'

type LabKey = 'buttons' | 'form' | 'card' | 'form-mp' | 'card-mp'

export default function AppShadcn() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex items-center gap-4 border-b border-white/10 bg-slate-900 px-4 py-2">
        <span className="font-bold text-white text-sm">Tailwind v4 LAB</span>
        <select
          className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1 text-sm text-white outline-none"
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="card">Cards</option>
          <option value="form">Form</option>
          <option value="card-mp">Cards (Menú Restaurante)</option>
          <option value="form-mp">Form (Menú Restaurante)</option>

        </select>
      </div>


      {lab === 'form'    && <FormularioUsuario />}
      {lab === 'card'    && <TarjetaProducto />}
      {lab === 'form-mp' && <FormularioUsuario_mp />}
      {lab === 'card-mp' && <TarjetaProducto_mp />}

    </div>
  )
}