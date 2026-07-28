// src/pages/ZodRegistrationForm_mp.tsx
// Misma técnica que ZodRegistrationForm.tsx: schema de Zod como única
// fuente de verdad + z.infer para el tipo + safeParse en el submit,
// ahora para reservar una mesa en el restaurante.

import { useState } from 'react'
import { z }        from 'zod'

// 1. Definir el schema — es la única fuente de verdad
const ReservationSchema = z.object({
  fullName: z.string().min(2, 'Mínimo 2 caracteres'),
  email:    z.string().email('Introduce un email válido'),
  phone:    z.string()
    .regex(/^[0-9]{7,10}$/, 'Introduce un teléfono válido (7 a 10 dígitos)'),
  date:     z.string().min(1, 'Selecciona una fecha'),
  time:     z.enum(['12:00', '13:00', '19:00', '20:00', '21:00'], {
    error: 'Selecciona un horario válido',
  }),
  guests:   z.number({ error: 'Debe ser un número' })
    .int('Debe ser un número entero')
    .min(1, 'Mínimo 1 persona')
    .max(12, 'Máximo 12 personas por reserva'),
  notes:    z.string(),
}).refine(
  (data) => data.guests < 6 || data.notes.trim().length > 0,
  { message: 'Para grupos de 6 o más, cuéntanos algún detalle (mesa, ocasión, etc.)', path: ['notes'] }
)

// 2. Inferir el tipo desde el schema — sin duplicar la interface
type ReservationFormData = z.infer<typeof ReservationSchema>

// Errores: un string opcional por campo
type FormErrors = Partial<Record<keyof ReservationFormData, string>>

const INITIAL_VALUES: ReservationFormData = {
  fullName: '',
  email:    '',
  phone:    '',
  date:     '',
  time:     '19:00',
  guests:   2,
  notes:    '',
}

export default function ZodRegistrationForm_mp() {
  const [values, setValues] = useState<ReservationFormData>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  // Tipado genérico — field es una clave válida, value tiene el tipo correcto
  function handleChange<K extends keyof ReservationFormData>(
    field: K,
    value: ReservationFormData[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }))
    // Limpia el error del campo al escribir
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // safeParse — nunca lanza, retorna { success, data } o { success, error }
    const result = ReservationSchema.safeParse(values)

    if (!result.success) {
      // Convertir los issues de Zod a nuestro mapa de errores
      const zodErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ReservationFormData
        // Guarda solo el primer error por campo
        if (field && !zodErrors[field]) {
          zodErrors[field] = issue.message
        }
      }
      setErrors(zodErrors)
      return
    }

    // result.data está completamente tipado — TypeScript lo sabe
    console.log('Reserva validada:', result.data)
    setSuccess(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}
    >
      {success && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          ✅ Reserva confirmada
        </div>
      )}

      {/* Nombre */}
      <FormField
        label="Nombre completo"
        value={values.fullName}
        error={errors.fullName}
        placeholder="Ana García"
        onChange={(v) => handleChange('fullName', v)}
      />

      {/* Email */}
      <FormField
        label="Correo electrónico"
        type="email"
        value={values.email}
        error={errors.email}
        placeholder="tu@email.com"
        onChange={(v) => handleChange('email', v)}
      />

      {/* Teléfono */}
      <FormField
        label="Teléfono"
        value={values.phone}
        error={errors.phone}
        placeholder="0991234567"
        onChange={(v) => handleChange('phone', v)}
      />

      {/* Fecha */}
      <FormField
        label="Fecha de la reserva"
        type="date"
        value={values.date}
        error={errors.date}
        onChange={(v) => handleChange('date', v)}
      />

      {/* Horario */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>Horario</label>
        <select
          value={values.time}
          onChange={(e) =>
            handleChange('time', e.target.value as ReservationFormData['time'])
          }
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="12:00">12:00 pm</option>
          <option value="13:00">1:00 pm</option>
          <option value="19:00">7:00 pm</option>
          <option value="20:00">8:00 pm</option>
          <option value="21:00">9:00 pm</option>
        </select>
        {errors.time && <p style={errorStyle}>{errors.time}</p>}
      </div>

      {/* Número de comensales */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>
          Número de comensales
        </label>
        <input
          type="number"
          value={values.guests}
          onChange={(e) => handleChange('guests', Number(e.target.value))}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        {errors.guests && <p style={errorStyle}>{errors.guests}</p>}
      </div>

      {/* Notas */}
      <FormField
        label="Notas (ocasión especial, mesa preferida, etc.)"
        value={values.notes}
        error={errors.notes}
        placeholder="Cumpleaños, mesa junto a la ventana..."
        onChange={(v) => handleChange('notes', v)}
      />

      <button
        type="submit"
        style={{
          padding: '10px', background: '#b45309', color: '#fff',
          border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 500,
        }}
      >
        Reservar mesa
      </button>
    </form>
  )
}

interface FormFieldProps {
  label:        string
  value:        string
  error?:       string
  placeholder?: string
  type?:        string
  onChange:     (value: string) => void
}

function FormField({ label, value, error, placeholder, type = 'text', onChange }: FormFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '8px 12px', fontSize: 14,
          border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
          borderRadius: 6,
        }}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  )
}

const errorStyle = { margin: 0, fontSize: 12, color: '#ef4444' }
