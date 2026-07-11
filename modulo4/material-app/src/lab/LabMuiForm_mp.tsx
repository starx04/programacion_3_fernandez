// src/lab/LabMuiForm_mp.tsx
// Variante "Menú de Restaurante" de LabMuiForm.tsx — mismos componentes MUI (TextField, MenuItem, Alert) reformulados
// como un formulario de reserva de mesa.

import { useState } from 'react'
import {
  Box, Button, TextField, MenuItem,
  Alert, Typography, Stack,
} from '@mui/material'

interface ReservationValues {
  name:      string
  phone:     string
  guests:    string
  turn:      string
}

type ReservationErrors = Partial<Record<keyof ReservationValues, string>>

const TURNS = [
  { value: 'almuerzo', label: 'Almuerzo (12:00 - 15:00)' },
  { value: 'media',    label: 'Media tarde (15:00 - 19:00)' },
  { value: 'cena',     label: 'Cena (19:00 - 23:00)' },
]

export default function LabMuiFormMp() {
  const [values,  setValues]  = useState<ReservationValues>({ name: '', phone: '', guests: '2', turn: 'almuerzo' })
  const [errors,  setErrors]  = useState<ReservationErrors>({})
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const e: ReservationErrors = {}
    if (!values.name.trim())              e.name  = 'El nombre es requerido'
    if (!/^\+?[0-9\s-]{6,}$/.test(values.phone)) e.phone = 'Teléfono inválido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setValues({ name: '', phone: '', guests: '2', turn: 'almuerzo' })
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>LAB: Reserva de mesa</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        TextField con error/helperText, Select con MenuItem y validación manual.
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>Reserva enviada correctamente</Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 480 }}>
        <Stack spacing={2}>
          <TextField
            label="Nombre completo"
            value={values.name}
            onChange={e => {
              setValues(v => ({ ...v, name: e.target.value }))
              setErrors(v => ({ ...v, name: undefined }))
            }}
            error={!!errors.name}
            helperText={errors.name}
            placeholder="Ana García"
            fullWidth
          />
          <TextField
            label="Teléfono de contacto"
            type="tel"
            value={values.phone}
            onChange={e => {
              setValues(v => ({ ...v, phone: e.target.value }))
              setErrors(v => ({ ...v, phone: undefined }))
            }}
            error={!!errors.phone}
            helperText={errors.phone}
            placeholder="+593 99 123 4567"
            fullWidth
          />
          <TextField
            label="Número de comensales"
            select
            value={values.guests}
            onChange={e => setValues(v => ({ ...v, guests: e.target.value }))}
            fullWidth
          >
            {['1', '2', '3', '4', '5', '6+'].map(n => (
              <MenuItem key={n} value={n}>{n}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Turno"
            select
            value={values.turn}
            onChange={e => setValues(v => ({ ...v, turn: e.target.value }))}
            fullWidth
          >
            {TURNS.map(t => (
              <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-start' }}>
            Reservar mesa
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
