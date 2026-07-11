// src/pages/DashboardPage_mp.tsx
// Variante "Menú de Restaurante" de DashboardPage.tsx — misma lógica y componentes MUI, reutilizando
// api/productsApi.ts y types/product.ts (cada "producto" se reinterpreta como "plato" del menú).

import { useState, useEffect, useCallback } from 'react'
import {
  Box, Grid, Card, CardContent, CardMedia, Chip,
  Typography, CircularProgress, Alert, TextField,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Tabs, Tab,
  Pagination, MenuItem, Stack, Avatar,
} from '@mui/material'
import { getProducts }  from '../api/productsApi'
import type { Product } from '../types/product'

type ViewMode = 'cards' | 'table'

export default function DashboardPageMp() {
  const [dishes,   setDishes]   = useState<Product[]>([])
  const [count,    setCount]    = useState(0)
  const [page,     setPage]     = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [search,   setSearch]   = useState('')
  const [view,     setView]     = useState<ViewMode>('cards')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getProducts({ page, pageSize, search: search.trim() || undefined })
      setDishes(data.results)
      setCount(data.count)
    } catch (err) {
      setError('No se pudieron cargar los platos del menú. Verifica la conexión.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [page, pageSize, search])

  useEffect(() => { load() }, [load])

  const totalPages = Math.max(1, Math.ceil(count / pageSize))

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>Platos del menú</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        API: /products/?page={page}&page_size={pageSize}
        {search ? ` &search=${search}` : ''}
      </Typography>

      {/* Controles */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
        <TextField
          label="Buscar plato"
          size="small"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
          sx={{ maxWidth: 280 }}
        />
        <TextField
          label="Por página"
          select
          size="small"
          value={pageSize}
          onChange={e => { setPageSize(Number(e.target.value)); setPage(1) }}
          sx={{ width: 120 }}
        >
          {[5, 10, 20].map(n => (
            <MenuItem key={n} value={n}>{n}</MenuItem>
          ))}
        </TextField>
        <Tabs
          value={view}
          onChange={(_, v: ViewMode) => setView(v)}
          sx={{ ml: { sm: 'auto' } }}
        >
          <Tab value="cards" label="Cards" />
          <Tab value="table" label="Tabla" />
        </Tabs>
      </Stack>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <CircularProgress />
        </Box>
      ) : dishes.length === 0 ? (
        <Alert severity="info">No hay platos para mostrar.</Alert>
      ) : view === 'cards' ? (

        // ─── Vista cards ───────────────────────────────────────────────
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {dishes.map(d => (
            <Grid key={d.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height={140}
                  image={d.url_image}
                  alt={d.name}
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).src =
                      'https://placehold.co/400x140?text=Sin+imagen'
                  }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }} gutterBottom>
                    {d.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {d.category_name} · Porciones: {d.stock}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <Chip
                      label={d.is_active ? 'Disponible' : 'Agotado'}
                      color={d.is_active ? 'success' : 'default'}
                      size="small"
                    />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      ${d.price}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      ) : (

        // ─── Vista tabla ────────────────────────────────────────────────
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell>Plato</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Porciones</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dishes.map(d => (
                <TableRow key={d.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={d.url_image}
                        variant="rounded"
                        sx={{ width: 36, height: 36 }}
                      >
                        {d.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{d.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {d.slug}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{d.category_name}</TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>${d.price}</Typography>
                  </TableCell>
                  <TableCell align="right">{d.stock}</TableCell>
                  <TableCell>
                    <Chip
                      label={d.is_active ? 'Disponible' : 'Agotado'}
                      color={d.is_active ? 'success' : 'default'}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Paginación MUI — mucho más limpia que botones manuales */}
      {!loading && dishes.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, p) => setPage(p)}
            color="primary"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Box>
  )
}
