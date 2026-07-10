// src/components/rb/RBCourseGrid_mp.tsx

import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

interface Dish {
  id:       number
  name:     string
  category: 'Entrada' | 'Plato fuerte' | 'Postre'
  price:    string
  tag:      string
}

const DISHES: Dish[] = [
  { id: 1, name: 'Ceviche de camarón', category: 'Entrada',      price: '$8.50',  tag: 'Nuevo'   },
  { id: 2, name: 'Locro de papa',      category: 'Entrada',      price: '$6.00',  tag: ''        },
  { id: 3, name: 'Seco de chivo',      category: 'Plato fuerte', price: '$12.00', tag: 'Popular' },
  { id: 4, name: 'Lomo saltado',       category: 'Plato fuerte', price: '$13.50', tag: 'Popular' },
  { id: 5, name: 'Arroz con mariscos', category: 'Plato fuerte', price: '$14.00', tag: 'Nuevo'   },
  { id: 6, name: 'Tres leches',        category: 'Postre',       price: '$5.00',  tag: ''        },
]

const CATEGORY_COLOR: Record<Dish['category'], string> = {
  Entrada:        'success',
  'Plato fuerte': 'warning',
  Postre:         'danger',
}

export default function RBCourseGrid_mp() {
  return (
    <section id="menu" className="py-5">
      <Container>
        <h2 className="fw-bold mb-1">Nuestro menú</h2>
        <p className="text-muted mb-4">Platos preparados al momento, cada día.</p>

        <Row className="g-3">
          {DISHES.map(dish => (
            <Col key={dish.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg={CATEGORY_COLOR[dish.category]}>{dish.category}</Badge>
                    {dish.tag && <Badge bg="dark">{dish.tag}</Badge>}
                  </div>
                  <Card.Title className="fw-bold">{dish.name}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Precio: {dish.price}
                  </Card.Text>
                  <Button variant="outline-primary" size="sm" className="mt-auto">
                    Agregar al pedido
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
