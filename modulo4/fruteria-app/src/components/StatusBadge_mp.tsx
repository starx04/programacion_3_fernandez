// src/components/StatusBadge_mp.tsx

export type StaffStatus = 'active' | 'inactive' | 'pending' | 'error'

interface StatusBadgeMpProps {
  status: StaffStatus
  label?: string
}

export default function StatusBadgeMp({ status, label }: StatusBadgeMpProps) {
  const estilos: Record<StaffStatus, { bg: string; color: string; texto: string }> = {
    active:   { bg: '#dcfce7', color: '#166534', texto: 'Disponible' },
    inactive: { bg: '#f3f4f6', color: '#6b7280', texto: 'Fuera de turno' },
    pending:  { bg: '#fef9c3', color: '#854d0e', texto: 'En descanso' },
    error:    { bg: '#fee2e2', color: '#991b1b', texto: 'Ausente' },
  }

  const { bg, color, texto } = estilos[status]

  return (
    <span
      style={{
        backgroundColor: bg,
        color,
        padding: '3px 10px',
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-block',
      }}
    >
      {label ?? texto}
    </span>
  )
}
