// src/lab/LabAntButtons_mp.tsx

import { Button, Space, Typography } from 'antd'

const { Title, Text } = Typography

export default function LabAntButtons_mp() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Buttons — Menú de Restaurante</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Tipos, tamaños y estados aplicados a acciones del restaurante.
      </Text>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Tipos</Text>
      <Space wrap style={{ marginBottom: 20 }}>
        <Button type="primary">Confirmar Pedido</Button>
        <Button>Ver Menú</Button>
        <Button type="dashed">Agregar Plato</Button>
        <Button type="link">Ver Reserva</Button>
        <Button type="text">Detalles</Button>
        <Button danger>Cancelar Pedido</Button>
        <Button type="primary" danger>Eliminar Reserva</Button>
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Tamaños</Text>
      <Space wrap style={{ marginBottom: 20 }}>
        <Button type="primary" size="large">Reservar Mesa</Button>
        <Button type="primary">Reservar Mesa</Button>
        <Button type="primary" size="small">Reservar Mesa</Button>
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Estados</Text>
      <Space wrap>
        <Button type="primary" loading>Enviando pedido</Button>
        <Button type="primary" disabled>Mesa ocupada</Button>
      </Space>
    </div>
  )
}
