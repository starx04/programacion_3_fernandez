// src/lab/LabMuiCard_mp.tsx
// Variante "Menú de Restaurante" de LabMuiCard.tsx — mismos componentes MUI (Card, CardMedia, CardContent, CardActions, Chip, Grid).

import {
  Box, Card, CardContent, CardActions, CardMedia,
  Button, Typography, Chip, Grid,
} from '@mui/material'

interface DishCardProps {
  name:      string
  category:  string
  price:     number
  available: boolean
  imageUrl:  string
}

function DishCard({ name, category, price, available, imageUrl }: DishCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height={160}
        image={imageUrl}
        alt={name}
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).src =
            'https://placehold.co/400x160?text=Sin+imagen'
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }} gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {category}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Chip
            label={available ? 'Disponible' : 'Agotado'}
            color={available ? 'success' : 'default'}
            size="small"
          />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>${price.toFixed(2)}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Agregar al pedido</Button>
      </CardActions>
    </Card>
  )
}

export default function LabMuiCardMp() {
  const dishes: DishCardProps[] = [
    { name: 'Ceviche mixto',    category: 'Entradas',       price: 12.50, available: true,  imageUrl: 'https://picsum.photos/seed/ceviche/400/160' },
    { name: 'Lomo saltado',     category: 'Platos fuertes',  price: 15.99, available: true,  imageUrl: 'https://picsum.photos/seed/lomo/400/160'    },
    { name: 'Suspiro limeño',   category: 'Postres',         price: 6.50,  available: false, imageUrl: 'https://picsum.photos/seed/suspiro/400/160' },
  ]

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>LAB: Cartas de platos</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Con CardMedia, CardContent, CardActions, Chip y Grid v7.
      </Typography>
      <Grid container spacing={2}>
        {dishes.map(d => (
          // MUI v7 — size en lugar de xs/md
          <Grid key={d.name} size={{ xs: 12, sm: 6, md: 4 }}>
            <DishCard {...d} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
