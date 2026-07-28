// src/components/ColoredBox_mp.tsx

interface CategorySwatchProps {
  color: string
  width?: number
  height?: number
  label?: string
}

export default function CategorySwatch({
  color,
  width = 72,
  height = 72,
  label,
}: CategorySwatchProps) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius: 10,
          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        }}
      />
      {label && <span style={{ fontSize: 12, color: '#666' }}>{label}</span>}
    </div>
  )
}
