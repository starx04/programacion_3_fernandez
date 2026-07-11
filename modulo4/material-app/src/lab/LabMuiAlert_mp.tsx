// src/lab/LabMuiAlert_mp.tsx
// Variante "Menú de Restaurante" de LabMuiAlert.tsx — mismos componentes MUI (Alert, AlertTitle, Collapse).

import { useState } from 'react'
import { Box, Alert, AlertTitle, Button, Collapse, Stack, Typography } from '@mui/material'

export default function LabMuiAlertMp() {
  const [show, setShow] = useState(true)

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>LAB: Alertas del restaurante</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Severidades, títulos y control de visibilidad con Collapse.
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <Alert severity="info">    La mesa 5 solicitó la cuenta.</Alert>
        <Alert severity="success"> Pedido #128 entregado correctamente.</Alert>
        <Alert severity="warning"> Advertencia: quedan pocas porciones de ceviche.</Alert>
        <Alert severity="error">   No se pudo confirmar la reserva.</Alert>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con título (AlertTitle)</Typography>
      <Stack spacing={2} sx={{ mb: 3 }}>
        <Alert severity="success">
          <AlertTitle>Reserva confirmada</AlertTitle>
          Tu mesa para 4 personas quedó reservada para las 20:00 (demo).
        </Alert>
        <Alert severity="error">
          <AlertTitle>Plato agotado</AlertTitle>
          El lomo saltado ya no está disponible por hoy.
        </Alert>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con Collapse (animación suave)</Typography>
      <Collapse in={show}>
        <Alert severity="info" onClose={() => setShow(false)} sx={{ mb: 1 }}>
          La cocina informa que el tiempo de espera es de 20 minutos.
        </Alert>
      </Collapse>
      {!show && (
        <Button size="small" onClick={() => setShow(true)}>Mostrar alerta</Button>
      )}
    </Box>
  )
}
