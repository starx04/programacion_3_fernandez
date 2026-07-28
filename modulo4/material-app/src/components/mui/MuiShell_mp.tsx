// src/components/mui/MuiShell_mp.tsx
// Variante "Menú de Restaurante" de MuiShell.tsx — misma estructura (AppBar + Drawer responsivo).

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AppBar, Box, CssBaseline, Divider, Drawer,
  IconButton, List, ListItemButton, ListItemIcon,
  ListItemText, Toolbar, Typography,
} from '@mui/material'
import MenuIcon         from '@mui/icons-material/Menu'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import InfoIcon         from '@mui/icons-material/Info'

const DRAWER_WIDTH = 240

const NAV = [
  { to: '/mp',       label: 'Menú',        icon: <RestaurantMenuIcon /> },
  { to: '/mp/about', label: 'El restaurante', icon: <InfoIcon /> },
]

// NavLink acepta style como función — { isActive } para resaltar el link activo
const linkSx = ({ isActive }: { isActive: boolean }) => ({
  display:        'block',
  textDecoration: 'none',
  color:          'inherit',
  borderRadius:   1,
  background:     isActive ? 'rgba(198,40,40,.10)' : 'transparent',
})

export default function MuiShellMp({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" sx={{ mb: 0.5, fontWeight: 900 }}>
        Sabor Criollo
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Administración del restaurante
      </Typography>
      <Divider sx={{ my: 1.5 }} />
      <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {NAV.map(({ to, label, icon }) => (
          <NavLink key={to} to={to} end={to === '/mp'} style={linkSx}>
            <ListItemButton dense>
              <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
              <ListItemText
                primary={label}
                slotProps={{ primary: { sx: { fontSize: 14 } } }}
              />
            </ListItemButton>
          </NavLink>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" color="error" sx={{ zIndex: t => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(v => !v)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <RestaurantMenuIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }} noWrap>
            Sabor Criollo — Panel del restaurante
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
        {/* Drawer temporal — móvil */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH },
          }}
        >
          {drawer}
        </Drawer>

        {/* Drawer permanente — escritorio */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Toolbar />   {/* spacer para que el contenido no quede bajo el AppBar */}
        {children}
      </Box>
    </Box>
  )
}
