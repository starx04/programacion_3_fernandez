// src/components/antd/AntProgress_mp.tsx

import { Card, Progress, Space, Typography } from 'antd'

const { Title, Text } = Typography

interface GoalProps {
  label:   string
  current: number
  target:  number
  color:   string
}

const GOALS: GoalProps[] = [
  { label: 'Meta de pedidos diarios', current: 96,   target: 130,  color: '#1677ff' },
  { label: 'Reservas de la semana',   current: 34,   target: 50,   color: '#52c41a' },
  { label: 'Platos del menú probados', current: 18,  target: 24,   color: '#722ed1' },
]

export default function AntGoals_mp() {
  return (
    <Card style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 16 }}>Objetivos del restaurante</Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        {GOALS.map(g => {
          const percent = Math.round((g.current / g.target) * 100)
          return (
            <div key={g.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <Text style={{ fontSize: 13 }}>{g.label}</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {g.current.toLocaleString()} / {g.target.toLocaleString()}
                </Text>
              </div>
              <Progress
                percent={percent}
                strokeColor={g.color}
                size="small"
                style={{ margin: 0 }}
              />
            </div>
          )
        })}
      </Space>
    </Card>
  )
}
