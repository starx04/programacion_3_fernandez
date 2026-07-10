// src/pages/AboutRB_mp.tsx

import { Container, Card, ListGroup } from 'react-bootstrap'

export default function AboutRB_mp() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Sobre El Fogón</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Información del restaurante</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cocina casera con ingredientes de temporada</ListGroup.Item>
          <ListGroup.Item>Horario: martes a domingo, 12:00 - 22:00</ListGroup.Item>
          <ListGroup.Item>Reservas: reservas@elfogon.com</ListGroup.Item>
          <ListGroup.Item>Ubicación: Av. Principal 123</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}
