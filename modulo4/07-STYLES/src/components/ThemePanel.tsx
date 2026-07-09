// src/components/ThemePanel.tsx

import { useTheme } from '../theme/ThemeContext'

const THEMES = ['light', 'dark', 'warm'] as const

export default function ThemePanel() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
        borderRadius: 10,
        padding: 16,
      }}
    >
      <h3 style={{ margin: '0 0 8px', color: 'var(--accent)' }}>Context + CSS variables</h3>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Tema actual: <strong>{theme}</strong>
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        {THEMES.map(t => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 600,
              border: '1px solid var(--accent)',
              background: theme === t ? 'var(--accent)' : 'transparent',
              color: theme === t ? 'white' : 'var(--accent)',
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
