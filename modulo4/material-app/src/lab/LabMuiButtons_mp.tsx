// src/lab/LabMuiButtons_mp.tsx
// Variante "Menú de Restaurante" de LabMuiButtons.tsx — mismos componentes MUI (Button, IconButton, Tooltip).

import { Box, Button, Stack, Typography, IconButton, Tooltip } from '@mui/material'
import DeleteIcon    from '@mui/icons-material/Delete'
import SendIcon      from '@mui/icons-material/Send'
import AddIcon       from '@mui/icons-material/Add'

export default function LabMuiButtonsMp() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>LAB: Botones del restaurante</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Variantes, colores, tamaños, íconos y estados aplicados a acciones del menú.
      </Typography>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Variantes</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Colores</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary">Confirmar mesa</Button>
        <Button variant="contained" color="secondary">Ver menú</Button>
        <Button variant="contained" color="success">Pedido listo</Button>
        <Button variant="contained" color="error">Cancelar reserva</Button>
        <Button variant="contained" color="warning">Sin stock</Button>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con íconos</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
        <Button variant="contained" startIcon={<SendIcon />}>Enviar pedido</Button>
        <Button variant="outlined" startIcon={<AddIcon />}>Agregar plato</Button>
        <Button variant="outlined" endIcon={<DeleteIcon />} color="error">Quitar del menú</Button>
        <Tooltip title="Eliminar plato del menú">
          <IconButton color="error"><DeleteIcon /></IconButton>
        </Tooltip>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Tamaños y estados</Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="contained" size="large">Reservar mesa</Button>
        <Button variant="contained">Normal</Button>
        <Button variant="contained" size="small">Pequeño</Button>
        <Button variant="contained" disabled>Mesa ocupada</Button>
        <Button variant="contained">Preparando</Button>
      </Stack>
    </Box>
  )
}
