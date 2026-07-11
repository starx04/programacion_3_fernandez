// src/AppLab_mp.tsx
// Variante "Menú de Restaurante" de AppLab.tsx — misma estructura de tabs mostrando los componentes _mp.

import { useState } from 'react'
import { Box, AppBar, Toolbar, Typography, Tabs, Tab, Container } from '@mui/material'
import LabMuiButtonsMp from './lab/LabMuiButtons_mp'
import LabMuiAlertMp from './lab/LabMuiAlert_mp'
import LabMuiCardMp from './lab/LabMuiCard_mp'
import LabMuiFormMp from './lab/LabMuiForm_mp'
import LabMuiTableMp from './lab/LabMuiTable_mp'

type LabKey = 0 | 1 | 2 | 3 | 4

const LAB_LABELS = ['Botones', 'Alertas', 'Platos', 'Reserva', 'Pedidos']

export default function AppLabMp() {
  const [tab, setTab] = useState<LabKey>(0)

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="error">
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ whiteSpace: 'nowrap', fontWeight: 700 }}>
            Material UI v7 LAB — Menú de Restaurante
          </Typography>
          <Tabs
            value={tab}
            onChange={(_, v: LabKey) => setTab(v)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            {LAB_LABELS.map((label, i) => (
              <Tab key={label} label={label} value={i as LabKey} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3 }}>
        {tab === 0 && <LabMuiButtonsMp />}
        {tab === 1 && <LabMuiAlertMp />}
        {tab === 2 && <LabMuiCardMp />}
        {tab === 3 && <LabMuiFormMp />}
        {tab === 4 && <LabMuiTableMp />}
      </Container>
    </Box>
  )
}
