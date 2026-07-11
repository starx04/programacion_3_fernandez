// src/pages/HomeDashboard_mp.tsx

import { Typography }  from 'antd'
import AntKpis_mp         from '../components/antd/AntKpis_mp'
import AntGoals_mp        from '../components/antd/AntProgress_mp'
import AntSalesTable_mp   from '../components/antd/AntSalesTable_mp'

const { Title, Text } = Typography

export default function HomeDashboard_mp() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      <Title level={3} style={{ marginBottom: 4 }}>Dashboard del Restaurante</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
        KPIs, objetivos y últimos pedidos del turno.
      </Text>
      <AntKpis_mp />
      <AntGoals_mp />
      <AntSalesTable_mp />
    </div>
  )
}
