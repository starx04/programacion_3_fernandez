// src/pages/AboutPage_mp.tsx
// Variante "Menú de Restaurante" de AboutPage.tsx — mismos componentes MUI (Card, Chip, Stack).

import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

export default function AboutPageMp() {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        Acerca de Sabor Criollo
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Sabor Criollo es un restaurante familiar dedicado a la cocina tradicional. Esta sección
        del panel administrativo demuestra una integración sencilla de Material UI con React Router
        y una API de platos del menú.
      </Typography>

      <Card>
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
            <Chip label="React + Vite" color="primary" />
            <Chip label="Material UI" color="secondary" />
            <Chip label="React Router" color="success" />
          </Stack>
          <Typography variant="body1" sx={{ mb: 1 }}>
            El panel incluye:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Dashboard con el listado de platos del menú desde una API externa
            <br />
            • Navegación con sidebar y rutas
            <br />
            • Componentes de laboratorio para probar MUI con temática de restaurante
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
