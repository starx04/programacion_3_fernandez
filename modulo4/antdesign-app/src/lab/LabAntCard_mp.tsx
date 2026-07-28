// src/lab/LabAntCard_mp.tsx

import { Card, Tag, Space, Typography, Row, Col } from 'antd'

const { Title, Text } = Typography

interface DishCardProps {
  name:       string
  category:   string
  price:      number
  available:  boolean
}

function DishCard({ name, category, price, available }: DishCardProps) {
  return (
    <Card
      hoverable
      styles={{ body: { display: 'flex', flexDirection: 'column', gap: 8 } }}
    >
      <Text strong>{name}</Text>
      <Text type="secondary" style={{ fontSize: 13 }}>{category}</Text>
      <Space>
        <Tag color={available ? 'success' : 'default'}>
          {available ? 'Disponible' : 'Agotado'}
        </Tag>
        <Text strong>${price.toFixed(2)}</Text>
      </Space>
    </Card>
  )
}

export default function LabAntCard_mp() {
  const dishes: DishCardProps[] = [
    { name: 'Lomo Saltado',   category: 'Platos fuertes', price: 12.50, available: true  },
    { name: 'Ceviche Mixto',  category: 'Entradas',       price: 14.00, available: true  },
    { name: 'Tiramisú',       category: 'Postres',        price: 6.50,  available: false },
  ]

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Cards — Menú de Restaurante</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Cards de platos tipadas con grid de Ant Design.
      </Text>
      <Row gutter={[16, 16]}>
        {dishes.map(d => (
          <Col key={d.name} xs={24} sm={12} md={8}>
            <DishCard {...d} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
