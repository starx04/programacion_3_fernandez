// src/components/rb/RBNewsletter_mp.tsx

import { useState } from 'react'
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap'

export default function RBNewsletter_mp() {
  const [email,   setEmail]   = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(true)
    setEmail('')
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <section className="py-5 bg-light border-top">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <h2 className="fw-bold mb-2">No te pierdas nuestras promociones</h2>
            <p className="text-muted mb-4">
              Recibe descuentos y el menú especial de la semana en tu correo.
            </p>
            {success && (
              <Alert variant="success">✅ Te suscribiste a nuestras promociones (demo)</Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Row className="g-2">
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" variant="primary">Suscribirme</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
