// src/AppLab.tsx

import { useState } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import LabAntButtons from './lab/LabAntButtons'
import LabAntAlert   from './lab/LabAntAlert'
import LabAntCard    from './lab/LabAntCard'
import LabAntForm    from './lab/LabAntForm'
import LabAntTable   from './lab/LabAntTable'
import LabAntButtons_mp from './lab/LabAntButtons_mp'
import LabAntAlert_mp   from './lab/LabAntAlert_mp'
import LabAntCard_mp    from './lab/LabAntCard_mp'
import LabAntForm_mp    from './lab/LabAntForm_mp'
import LabAntTable_mp   from './lab/LabAntTable_mp'

const { Header, Content } = Layout

type LabKey =
  | 'buttons' | 'alert' | 'card' | 'form' | 'table'
  | 'buttons-mp' | 'alert-mp' | 'card-mp' | 'form-mp' | 'table-mp'

const ITEMS = [
  { key: 'buttons', label: 'Buttons' },
  { key: 'alert',   label: 'Alert'   },
  { key: 'card',    label: 'Cards'   },
  { key: 'form',    label: 'Form'    },
  { key: 'table',   label: 'Table'   },
  {
    key:   'mp',
    label: 'Menú de Restaurante',
    children: [
      { key: 'buttons-mp', label: 'Buttons (MP)' },
      { key: 'alert-mp',   label: 'Alert (MP)'   },
      { key: 'card-mp',    label: 'Cards (MP)'   },
      { key: 'form-mp',    label: 'Form (MP)'    },
      { key: 'table-mp',   label: 'Table (MP)'   },
    ],
  },
]

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons')

  const handleMenuClick: NonNullable<MenuProps['onClick']> = ({ key }) => {
    setLab(key as LabKey)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ color: 'white', fontWeight: 700, whiteSpace: 'nowrap' }}>
          Ant Design v6 LAB
        </span>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[lab]}
          items={ITEMS}
          onClick={handleMenuClick}
          style={{ flex: 1 }}
        />
      </Header>
      <Content style={{ padding: '24px 0' }}>
        {lab === 'buttons' && <LabAntButtons />}
        {lab === 'alert'   && <LabAntAlert />}
        {lab === 'card'    && <LabAntCard />}
        {lab === 'form'    && <LabAntForm />}
        {lab === 'table'   && <LabAntTable />}
        {lab === 'buttons-mp' && <LabAntButtons_mp />}
        {lab === 'alert-mp'   && <LabAntAlert_mp />}
        {lab === 'card-mp'    && <LabAntCard_mp />}
        {lab === 'form-mp'    && <LabAntForm_mp />}
        {lab === 'table-mp'   && <LabAntTable_mp />}
      </Content>
    </Layout>
  )
}