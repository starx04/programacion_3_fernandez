// src/lab/LabRbButtons_mp.tsx

import { Container, Button, Stack } from 'react-bootstrap'

export default function LabRbButtons_mp() {
  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Buttons (Menú)</h2>
      <p className="text-secondary mb-3">Variantes, outline y tamaños.</p>

      <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
        <Button variant="primary">Pedir ahora</Button>
        <Button variant="outline-primary">Ver menú</Button>
        <Button variant="success">Confirmar reserva</Button>
        <Button variant="danger">Cancelar</Button>
        <Button variant="warning">Modificar pedido</Button>
        <Button variant="secondary">Volver</Button>
      </Stack>

      <Stack direction="horizontal" gap={2}>
        <Button variant="primary" size="lg">Grande</Button>
        <Button variant="primary">Normal</Button>
        <Button variant="primary" size="sm">Pequeño</Button>
      </Stack>
    </Container>
  )
}
