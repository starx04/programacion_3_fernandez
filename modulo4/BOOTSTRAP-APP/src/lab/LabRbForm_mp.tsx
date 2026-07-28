// src/lab/LabRbForm_mp.tsx

import { useState } from 'react'
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap'

interface ReservationValues {
  name:   string
  email:  string
  guests: string
}

export default function LabRbForm_mp() {
  const [values, setValues] = useState<ReservationValues>({ name: '', email: '', guests: '2' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<ReservationValues>>({})

  function validate(): boolean {
    const e: Partial<ReservationValues> = {}
    if (!values.name.trim()) e.name = 'El nombre es requerido'
    if (!values.email.includes('@')) e.email = 'Email inválido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      setValues({ name: '', email: '', guests: '2' })
    }, 3000)

  }

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Form (Reserva de mesa)</h2>
      <p className="text-secondary mb-3">Con validación manual y feedback visual.</p>

      {success && <Alert variant="success">✅ Reserva enviada correctamente
        <p>Nombre: {values.name}, Email: {values.email}, Comensales: {values.guests} </p>
      </Alert>}

      <Form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <Row className="g-3">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                value={values.name}
                onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                isInvalid={!!errors.name}
                placeholder="Ana García"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                isInvalid={!!errors.email}
                placeholder="ana@ejemplo.com"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Número de comensales</Form.Label>
              <Form.Select
                value={values.guests}
                onChange={e => setValues(v => ({ ...v, guests: e.target.value }))}
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="4">4 personas</option>
                <option value="6">6 personas</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button type="submit" variant="primary">Reservar mesa</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
