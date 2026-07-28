// src/components/UserProfileForm_mp.tsx
// Misma técnica que UserProfileForm: estado con objeto + actualización genérica por campo (spread)

import { useState } from 'react'

interface Reservation {
  name: string
  phone: string
  guests: number
}

export default function ReservationForm() {
  const [reservation, setReservation] = useState<Reservation>({
    name: '',
    phone: '',
    guests: 0,
  })

  function handleChange(field: keyof Reservation, value: string | number) {
    setReservation((prev) => ({
      ...prev,        // copia todos los campos actuales
      [field]: value, // sobreescribe solo el campo que cambió
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre para la reserva"
        value={reservation.name}
        onChange={(e) => handleChange('name', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Teléfono"
        type="tel"
        value={reservation.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Cantidad de comensales"
        type="number"
        value={reservation.guests}
        onChange={(e) => handleChange('guests', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{reservation.name || '—'}</strong> · {reservation.phone || '—'} · {reservation.guests || '—'} pers.
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}
