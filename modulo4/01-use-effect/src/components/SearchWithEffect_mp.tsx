// src/components/SearchWithEffect_mp.tsx
// Versión temática "Menú de Restaurante" de SearchWithEffect

import { useState, useEffect } from 'react'

const MENU: Record<string, string> = {
  ceviche:   'Pescado fresco marinado en limón, cebolla morada y cilantro. $8.50',
  lasagna:   'Capas de pasta, carne, salsa de tomate y queso gratinado. $9.90',
  ensalada:  'Mix de hojas verdes, tomate cherry, palmito y vinagreta. $5.50',
  cheesecake:'Postre cremoso de queso con base de galleta y frutos rojos. $4.00',
}

export default function SearchWithEffectMp() {
  const [plato,     setPlato]     = useState('')
  const [resultado, setResultado] = useState<string | null>(null)

  useEffect(() => {
    const normalizado = plato.toLowerCase().trim()

    if (!normalizado) {
      setResultado(null)
      return
    }

    const encontrado = MENU[normalizado]
    setResultado(encontrado ?? 'No hay ese plato en el menú.')
  }, [plato])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={plato}
        onChange={(e) => setPlato(e.target.value)}
        placeholder="Busca: ceviche, lasagna, ensalada, cheesecake..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      {resultado && (
        <p style={{ margin: 0, fontSize: 14, color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          {resultado}
        </p>
      )}
    </div>
  )
}
