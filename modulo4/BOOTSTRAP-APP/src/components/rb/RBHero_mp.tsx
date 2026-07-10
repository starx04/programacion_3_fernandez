// src/components/rb/RBHero_mp.tsx

import { Container, Button, Stack, Badge } from 'react-bootstrap'

export default function RBHero_mp() {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Badge bg="primary" className="mb-3">Cocina de autor</Badge>
        <h1 className="display-5 fw-bold mb-3">
          Sabores que cuentan una historia
        </h1>
        <p className="lead text-white-50 mb-4" style={{ maxWidth: 560 }}>
          Ingredientes frescos, recetas de temporada y un ambiente pensado
          para compartir en buena compañía.
        </p>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button variant="primary"      size="lg">Ver menú</Button>
          <Button variant="outline-light" size="lg">Reservar mesa</Button>
        </Stack>
      </Container>
    </section>
  )
}
