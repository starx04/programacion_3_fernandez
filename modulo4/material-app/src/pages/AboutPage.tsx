import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

export default function AboutPage() {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        Acerca de Billing Admin
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Esta aplicación demuestra una integración sencilla de Material UI con React Router y una API de productos.
      </Typography>

      <Card>
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
            <Chip label="React + Vite" color="primary" />
            <Chip label="Material UI" color="secondary" />
            <Chip label="React Router" color="success" />
          </Stack>
          <Typography variant="body1" sx={{ mb: 1 }}>
            El proyecto incluye:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Dashboard con listado de productos desde una API externa
            <br />
            • Navegación con sidebar y rutas
            <br />
            • Componentes de laboratorio para probar MUI
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
