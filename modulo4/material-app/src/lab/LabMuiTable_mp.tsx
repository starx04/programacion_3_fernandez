// src/lab/LabMuiTable_mp.tsx
// Variante "Menú de Restaurante" de LabMuiTable.tsx — mismos componentes MUI (Table, TableSortLabel, Chip, TextField).

import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Chip, Typography,
  TableSortLabel, InputAdornment, TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface Dish {
  id:        number
  name:      string
  category:  string
  price:     number
  available: boolean
}

const DISHES: Dish[] = [
  { id: 1, name: 'Ceviche mixto',   category: 'Entradas',      price: 12.50, available: true  },
  { id: 2, name: 'Lomo saltado',    category: 'Platos fuertes', price: 15.99, available: true  },
  { id: 3, name: 'Suspiro limeño',  category: 'Postres',       price: 6.50,  available: false },
  { id: 4, name: 'Sopa criolla',    category: 'Entradas',      price: 8.50,  available: true  },
  { id: 5, name: 'Pisco sour',      category: 'Bebidas',       price: 7.00,  available: false },
]

type SortDir = 'asc' | 'desc'

export default function LabMuiTableMp() {
  const [search,  setSearch]  = useState('')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  const filtered = DISHES
    .filter(d =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => sortDir === 'asc' ? a.price - b.price : b.price - a.price)

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>LAB: Pedidos del menú</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Con TableSortLabel, búsqueda con InputAdornment y Chip de estado.
      </Typography>

      <TextField
        size="small"
        placeholder="Buscar plato o categoría..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 2, maxWidth: 340 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />

      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>#</TableCell>
              <TableCell>Plato</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active
                  direction={sortDir}
                  onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
                >
                  Precio
                </TableSortLabel>
              </TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map(d => (
              <TableRow key={d.id} hover>
                <TableCell>{d.id}</TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{d.name}</Typography>
                </TableCell>
                <TableCell>{d.category}</TableCell>
                <TableCell align="right">
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>${d.price.toFixed(2)}</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={d.available ? 'Disponible' : 'Agotado'}
                    color={d.available ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body2" color="text.secondary">
                    Sin resultados.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
