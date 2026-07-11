// src/pages/AboutPage_mp.tsx

import { Card, Typography, List } from 'antd'

const { Title } = Typography

const STACK = [
  'Cocina de autor con ingredientes locales',
  'Reservas en línea con Ant Design v6',
  'Menú actualizado cada temporada',
  'Servicio en salón, terraza y barra',
]

export default function AboutPage_mp() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px 16px' }}>
      <Title level={3} style={{ marginBottom: 20 }}>Acerca de nuestro restaurante</Title>
      <Card>
        <List
          dataSource={STACK}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Card>
    </div>
  )
}
