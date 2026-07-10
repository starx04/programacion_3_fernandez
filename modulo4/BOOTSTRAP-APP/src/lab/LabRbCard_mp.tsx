// src/lab/LabRbCard_mp.tsx

import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap'

interface DishCardProps {
  title:     string
  price:     string
  category:  string
  available: boolean
}

function DishCard({ title, price, category, available }: DishCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text>
          <Badge bg={available ? 'success' : 'secondary'} className="me-2">
            {available ? 'Disponible' : 'Agotado'}
          </Badge>
          <strong>{price}</strong>
        </Card.Text>
        <Button variant="primary" size="sm">Agregar al pedido</Button>
      </Card.Body>
    </Card>
  )
}

export default function LabRbCard_mp() {
  const dishes = [
    { title: 'Ceviche de camarón', price: '$8.50',  category: 'Entradas', available: true  },
    { title: 'Seco de chivo',      price: '$12.00', category: 'Fuertes',  available: true  },
    { title: 'Tres leches',        price: '$5.00',  category: 'Postres',  available: false },
    { title: 'Jugo de maracuyá',   price: '$3.00',  category: 'Bebidas',  available: false },
  ]

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Cards (Menú)</h2>
      <p className="text-secondary mb-3">Grid responsivo con tarjetas de platos.</p>
      <Row className="g-3">
        {dishes.map(d => (
          <Col key={d.title} xs={12} sm={6} md={4}>
            <DishCard {...d} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
