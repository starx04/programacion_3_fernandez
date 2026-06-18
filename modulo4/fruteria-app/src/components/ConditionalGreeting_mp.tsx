// src/components/ConditionalGreeting_mp.tsx

type Turno = 'morning' | 'afternoon' | 'evening'

interface ConditionalGreetingMpProps {
  isTableAssigned: boolean
  customerName?: string
  turno?: Turno
}

export default function ConditionalGreetingMp({
  isTableAssigned,
  customerName = 'comensal',
  turno = 'morning',
}: ConditionalGreetingMpProps) {
  const saludos: Record<Turno, string> = {
    morning:   'Buenos días',
    afternoon: 'Buenas tardes',
    evening:   'Buenas noches',
  }

  if (!isTableAssigned) {
    return (
      <p style={{ color: '#e00' }}>
        Espera un momento, un mesero te asignará una mesa en breve.
      </p>
    )
  }

  return (
    <p style={{ color: '#333' }}>
      {saludos[turno]}, <strong>{customerName}</strong>. Tu mesa ya está lista.
    </p>
  )
}
