// src/lab/LabRbAlert_mp.tsx

import { useState } from 'react'
import { Container, Alert, Button } from 'react-bootstrap'

export default function LabRbAlert_mp() {
  const [show, setShow] = useState(true)

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Alert (Menú)</h2>
      <p className="text-secondary mb-3">Con dismissible y control de visibilidad.</p>

      {show
        ? (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Pedido confirmado</Alert.Heading>
            <p className="mb-0">Tu orden fue enviada a cocina correctamente (demo).</p>
          </Alert>
        )
        : <Button onClick={() => setShow(true)}>Mostrar alerta</Button>
      }

      {show
        ? (
          <Alert variant="warning" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Mesa no disponible</Alert.Heading>
            <p className="mb-0">No hay mesas libres en el horario seleccionado</p>
          </Alert>
        )
        : <Button onClick={() => setShow(true)}>Mostrar alerta</Button>
      }

    </Container>
  )
}
