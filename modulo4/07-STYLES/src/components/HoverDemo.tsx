// src/components/HoverDemo.tsx

import { useHover } from '../hooks/useHover'

export default function HoverDemo() {
  const [ref, isHovered] = useHover<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
        borderRadius: 10,
        padding: 16,
        transition: 'transform 0.15s, box-shadow 0.15s',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: isHovered ? 'var(--shadow)' : 'none',
      }}
    >
      <h3 style={{ margin: '0 0 8px', color: 'var(--accent)' }}>Hook useHover</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}>
        {isHovered ? 'Estas pasando el mouse por encima' : 'Pasa el mouse por esta tarjeta'}
      </p>
    </div>
  )
}
