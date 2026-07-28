// src/components/LiveStyleEditor_mp.tsx

import { useStyles } from '../hooks/useStyles'

export default function LiveStyleEditor_mp() {
  const { styles, updateStyle } = useStyles({
    padding: 16,
    borderRadius: 10,
    background: 'var(--card)',
  })

  return (
    <div>
      <h3 style={{ margin: '0 0 8px', color: 'var(--accent)' }}>Editor de tarjeta de plato</h3>
      <div style={{ ...styles, border: '1px solid var(--border)' }}>
        <p style={{ margin: 0, color: 'var(--muted)' }}>
          Tiramisu - $4.50. Esta tarjeta cambia en vivo segun los controles de abajo.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
        <label>
          Padding:{' '}
          <input
            type="range"
            min={0}
            max={48}
            value={Number(styles.padding)}
            onChange={e => updateStyle('padding', Number(e.target.value))}
          />
        </label>
        <label>
          Radio de borde:{' '}
          <input
            type="range"
            min={0}
            max={32}
            value={Number(styles.borderRadius)}
            onChange={e => updateStyle('borderRadius', Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}
