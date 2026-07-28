// src/components/TaskManager_mp.tsx
// Misma técnica que TaskManager: estado con array de objetos (agregar / eliminar / actualizar con map y filter)

import { useState } from 'react'

interface KitchenTicket {
  id: number
  dish: string
  notes: string
  ready: boolean
}

export default function KitchenOrderManager() {
  const [tickets, setTickets] = useState<KitchenTicket[]>([])
  const [dish, setDish] = useState('')
  const [notes, setNotes] = useState('')

  // AGREGAR — Guarda plato y notas de cocina
  function addTicket() {
    if (!dish.trim()) return // El plato es obligatorio
    setTickets((prev) => [
      ...prev,
      {
        id: Date.now(),
        dish: dish.trim(),
        notes: notes.trim(),
        ready: false,
      },
    ])
    setDish('')
    setNotes('')
  }

  // ELIMINAR
  function removeTicket(id: number) {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== id))
  }

  // ACTUALIZAR
  function toggleTicket(id: number) {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, ready: !ticket.ready } : ticket
      )
    )
  }

  return (
    <div style={{ maxWidth: 380, fontFamily: 'system-ui, sans-serif', padding: 16 }}>
      <h2 style={{ fontSize: 20, marginBottom: 16, color: '#333' }}>Comandas de Cocina</h2>

      {/* Formulario con inputs apilados */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          placeholder="Plato..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTicket()}
          placeholder="Notas para cocina (sin cebolla, término medio...)"
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addTicket}
          style={{ padding: '8px 16px', background: '#c1440e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Enviar a cocina
        </button>
      </div>

      {tickets.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay comandas activas.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              padding: '12px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={ticket.ready}
              onChange={() => toggleTicket(ticket.id)}
              style={{ marginTop: 4 }}
            />

            {/* Contenedor de Plato y Notas */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontWeight: '600',
                  fontSize: 15,
                  textDecoration: ticket.ready ? 'line-through' : 'none',
                  color: ticket.ready ? '#aaa' : '#333',
                }}
              >
                {ticket.dish}
              </span>
              {ticket.notes && (
                <span
                  style={{
                    fontSize: 13,
                    textDecoration: ticket.ready ? 'line-through' : 'none',
                    color: ticket.ready ? '#ccc' : '#666',
                  }}
                >
                  {ticket.notes}
                </span>
              )}
            </div>

            <button
              onClick={() => removeTicket(ticket.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16, padding: 0 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tickets.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 12 }}>
          {tickets.filter((t) => t.ready).length} de {tickets.length} listas
        </p>
      )}
    </div>
  )
}
