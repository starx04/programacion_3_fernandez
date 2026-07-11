// src/lab/LabAntAlert_mp.tsx

import { useState } from 'react'
import { Alert, Button, Space, Typography } from 'antd'

const { Title, Text } = Typography

export default function LabAntAlert_mp() {
  const [show, setShow] = useState(true)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Alert — Menú de Restaurante</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Las cuatro variantes y control de visibilidad, con avisos de cocina.
      </Text>

      <Space direction="vertical" style={{ width: '100%', marginBottom: 20 }}>
        <Alert message="El menú del día se actualiza a las 12:00."   type="info"    showIcon />
        <Alert message="Reserva confirmada para la Mesa 7."          type="success" showIcon />
        <Alert message="Quedan pocas porciones de Ceviche Mixto."    type="warning" showIcon />
        <Alert message="No hay stock de Parrillada Familiar."        type="error"   showIcon />
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Con closable</Text>
      <Space direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
        {show && (
          <Alert
            message="Pedido enviado a cocina"
            description="Haz clic en la X para cerrar este aviso."
            type="success"
            showIcon
            closable
            onClose={() => setShow(false)}
          />
        )}
      </Space>
      <Button onClick={() => setShow(true)}>Mostrar aviso</Button>
    </div>
  )
}
