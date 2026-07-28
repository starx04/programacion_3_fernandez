// src/components/InlineEditor_mp.tsx
// Menú de Restaurante — edición en línea del nombre y precio de un plato

import { useRef, useState } from 'react'

export default function InlineEditor_mp() {
  const nameRef  = useRef<HTMLInputElement>(null)
  const [savedName, setSavedName] = useState('Lomo saltado')
  const priceRef = useRef<HTMLInputElement>(null)
  const [savedPrice, setSavedPrice] = useState('12.50')

  function handleSave() {
    // Se lee el valor directamente del DOM — sin useState intermedio
    const name = nameRef.current?.value ?? ''
    setSavedName(name.trim() === '' ? '(sin nombre)' : name)

    const price = priceRef.current?.value ?? ''
    setSavedPrice(price.trim() === '' ? '(sin precio)' : price)
  }

  function handleClear() {
    if (nameRef.current) {
      nameRef.current.value = ''
    }
    if (priceRef.current) {
      priceRef.current.value = ''
      priceRef.current.focus()
    }
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Nombre del plato: <strong style={{ color: '#111827' }}>{savedName}</strong>
      </p>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Precio: <strong style={{ color: '#111827' }}>${savedPrice}</strong>
      </p>

      <input
        ref={nameRef}
        defaultValue="Lomo saltado"
        placeholder="Nombre del plato: escribe sin causar re-renders..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={priceRef}
        defaultValue="12.50"
        placeholder="Precio: escribe sin causar re-renders..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
