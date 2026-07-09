// src/components/InlineStyleDemo_mp.tsx

import type { CSSProperties } from 'react'

export default function InlineStyleDemo_mp() {
  const card: CSSProperties = {
    border:       '1px solid var(--border)',
    background:   'var(--card)',
    borderRadius: 10,
    padding:      16,
  }

  const title: CSSProperties = {
    margin:     '0 0 8px 0',
    color:      'var(--accent)',
    fontWeight: 800,
  }

  return (
    <div style={card}>
      <h3 style={title}>Plato del dia (inline styles)</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}>
        Estilos definidos como objeto JS dentro del componente. Sirve para valores
        dinamicos (por ejemplo el precio) pero no soporta <code>:hover</code> ni media queries.
      </p>
    </div>
  )
}
