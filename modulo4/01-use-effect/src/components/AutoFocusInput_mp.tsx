// src/components/AutoFocusInput_mp.tsx
// Versión temática "Menú de Restaurante" de AutoFocusInput

import { useEffect, useRef } from 'react'

export default function AutoFocusInputMp() {
  // useRef<HTMLInputElement>(null) — la referencia empieza en null
  // y se asigna automáticamente cuando React monta el <input>
  const notaRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // notaRef.current puede ser null si el componente se desmontó
    // El operador ?. lo maneja de forma segura
    notaRef.current?.focus()
  }, [])

  return (
    <input
      ref={notaRef}
      placeholder="Nota especial del pedido (ej: sin cebolla)"
      style={{
        padding: '8px 12px',
        border: '1px solid #d1d5db',
        borderRadius: 6,
        width: '100%',
        fontSize: 14,
      }}
    />
  )
}
