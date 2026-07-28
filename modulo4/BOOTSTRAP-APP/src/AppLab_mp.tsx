// src/AppLab_mp.tsx

import { useState } from 'react'
import LabRbButtons_mp from './lab/LabRbButtons_mp'
import LabRbAlert_mp   from './lab/LabRbAlert_mp'
import LabRbCard_mp    from './lab/LabRbCard_mp'
import LabRbForm_mp    from './lab/LabRbForm_mp'
import LabRbTable_mp   from './lab/LabRbTable_mp'


type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

export default function AppLab_mp() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div>
      <div className="border-bottom bg-light px-3 py-2 d-flex align-items-center gap-3">
        <span className="fw-bold">React-Bootstrap LAB — Menú de Restaurante</span>
        <select
          className="form-select form-select-sm"
          style={{ maxWidth: 180 }}
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="buttons">Buttons</option>
          <option value="alert">Alert</option>
          <option value="card">Cards</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
        </select>
      </div>

      {lab === 'buttons' && <LabRbButtons_mp />}
      {lab === 'alert'   && <LabRbAlert_mp />}
      {lab === 'card'    && <LabRbCard_mp />}
      {lab === 'form'    && <LabRbForm_mp />}
      {lab === 'table'   && <LabRbTable_mp />}

    </div>
  )
}
