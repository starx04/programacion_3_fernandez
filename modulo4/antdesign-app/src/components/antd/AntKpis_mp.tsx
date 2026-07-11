// src/components/antd/AntKpis_mp.tsx

import { Card, Col, Row, Statistic, Typography } from 'antd'
import {
  ArrowUpOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons'

const { Title } = Typography

interface KpiData {
  title:   string
  value:   number
  suffix?: string
  prefix?: string
  trend:   number
  icon:    React.ReactNode
  color:   string
}

const KPIS: KpiData[] = [
  { title: 'Ingresos de hoy',   value: 2840, prefix: '$', trend:  9.4, icon: <ArrowUpOutlined />,       color: '#1677ff' },
  { title: 'Pedidos de hoy',    value: 96,                trend:  6.1, icon: <ShoppingCartOutlined />,  color: '#52c41a' },
  { title: 'Comensales',        value: 214,               trend:  3.7, icon: <UserOutlined />,          color: '#722ed1' },
  { title: 'Ticket promedio',   value: 29.6, prefix: '$', trend: -1.2, icon: <DollarCircleOutlined />,  color: '#fa8c16' },
]

export default function AntKpis_mp() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 12 }}>Resumen del servicio</Title>
      <Row gutter={[16, 16]}>
        {KPIS.map(kpi => (
          <Col key={kpi.title} xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title={kpi.title}
                value={kpi.value}
                suffix={kpi.suffix}
                prefix={kpi.prefix}
                precision={kpi.title === 'Ticket promedio' ? 2 : 0}
                valueStyle={{ color: kpi.color }}
              />
              <div style={{ marginTop: 8, fontSize: 12, color: kpi.trend > 0 ? '#52c41a' : '#ff4d4f' }}>
                {kpi.trend > 0 ? '↑' : '↓'} {Math.abs(kpi.trend)}% vs ayer
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
