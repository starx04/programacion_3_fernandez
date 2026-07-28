// src/components/PrimeSieve_mp.tsx
// Demo algorítmica genérica (no específica del dominio del restaurante) —
// misma técnica que PrimeSieve.tsx: useMemo evita recalcular en cada render.

import { useState, useMemo } from 'react'

// Criba de Eratóstenes — complejidad O(n log log n)
function sieveMp(n: number): number[] {
  if (n < 2) return []
  const isPrime = new Array(n + 1).fill(true)
  isPrime[0] = isPrime[1] = false
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) isPrime[j] = false
    }
  }
  const result: number[] = []
  for (let i = 2; i <= n; i++) if (isPrime[i]) result.push(i)
  return result
}

export default function PrimeSieveMp() {
  const [limit,   setLimit]   = useState(10_000)
  const [pedidos, setPedidos] = useState(0)

  // useMemo: el cribado solo corre cuando `limit` cambia
  const primes = useMemo(() => sieveMp(limit), [limit])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>PrimeSieve_mp</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Contador de "pedidos recibidos" provoca re-renders — el cribado solo recorre cuando cambia el límite.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14 }}>
          Límite (N)
          <input
            type="range"
            min={1000}
            max={100_000}
            step={1000}
            value={limit}
            onChange={e => setLimit(Number(e.target.value))}
            style={{ width: 200 }}
          />
          <span>{limit.toLocaleString()}</span>
        </label>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14 }}>
          Pedidos recibidos (trigger re-renders)
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              onClick={() => setPedidos(c => Math.max(0, c - 1))}
              style={{ padding: '4px 12px', cursor: 'pointer' }}
            >−</button>
            <span style={{ minWidth: 32, textAlign: 'center' }}>{pedidos}</span>
            <button
              onClick={() => setPedidos(c => c + 1)}
              style={{ padding: '4px 12px', cursor: 'pointer' }}
            >+</button>
          </div>
        </div>
      </div>

      <div style={{
        display:      'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:          12,
        marginBottom: 20,
      }}>
        {[
          { label: 'Primos encontrados', value: primes.length.toLocaleString() },
          { label: 'Límite',             value: limit.toLocaleString() },
          { label: 'Mayor primo',        value: (primes.at(-1) ?? 0).toLocaleString() },
        ].map(({ label, value }) => (
          <div key={label} style={{
            padding:    12,
            background: '#f5f5f5',
            borderRadius: 8,
            fontSize:   13,
          }}>
            <div style={{ color: '#888', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{value}</div>
          </div>
        ))}
      </div>

      <details style={{ fontSize: 13 }}>
        <summary style={{ cursor: 'pointer', color: '#555' }}>
          Primeros 20 primos
        </summary>
        <div style={{ marginTop: 8, color: '#333', lineHeight: 1.8 }}>
          {primes.slice(0, 20).join(', ')}
        </div>
      </details>
    </div>
  )
}
