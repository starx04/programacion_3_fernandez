// src/components/ThemeSelector_mp.tsx
// Versión "Menú de Restaurante" de ThemeSelector.tsx — tema de la carta digital

import { useLocalStorageMp } from '../hooks/useLocalStorage_mp'

export default function ThemeSelectorMp() {
  const [theme, setTheme] = useLocalStorageMp<'light' | 'dark'>('menu-theme', 'light')

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {(['light', 'dark'] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          style={{
            padding: '6px 14px', borderRadius: 6,
            border: '1px solid #d1d5db',
            background: theme === t ? '#0070f3' : '#fff',
            color:      theme === t ? '#fff'    : '#333',
            cursor: 'pointer',
          }}
        >
          {t === 'light' ? '☀️ Carta clara' : '🌙 Carta oscura'}
        </button>
      ))}
    </div>
  )
}
