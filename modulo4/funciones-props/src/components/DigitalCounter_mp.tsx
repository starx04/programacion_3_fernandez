// src/components/DigitalCounter_mp.tsx
// Misma técnica que DigitalCounter: useState + props con valores por defecto (initialValue, step, label)

import { useState } from 'react'

interface GuestCounterProps {
  initialValue?: number
  step?: number
  label?: string
}

export default function GuestCounter({
  initialValue = 1,
  step = 1,
  label = 'Comensales',
}: GuestCounterProps) {
  const [guests, setGuests] = useState(initialValue)

  function addGuest() {
    setGuests((prev) => prev + step)
    console.log('Comensal agregado, total previo:', guests)
  }

  function removeGuest() {
    setGuests(Math.max(0, guests - step))
    console.log('Comensal quitado, total previo:', guests)
  }

  function resetGuests() {
    setGuests(initialValue)
    console.log('Mesa reiniciada a:', initialValue)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 14, color: '#666' }}>{label}</span>
      <button onClick={removeGuest} style={btnStyle}>−</button>
      <span style={{ fontSize: 20, fontWeight: 600, minWidth: 40, textAlign: 'center' }}>
        {guests}
      </span>
      <button onClick={addGuest} style={btnStyle}>+</button>
      <button onClick={resetGuests} style={{ ...btnStyle, fontSize: 12, color: '#999' }}>
        Reset
      </button>
    </div>
  )
}

const btnStyle = {
  width: 32,
  height: 32,
  borderRadius: 6,
  border: '1px solid #ddd',
  background: '#f5f5f5',
  cursor: 'pointer',
  fontSize: 16,
}
