// src/components/antd/AntNavbar_mp.tsx

import { NavLink }    from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

export default function AntNavbar_mp() {
  const items = [
    { key: 'home',  label: <NavLink to="/mp">Dashboard</NavLink>  },
    { key: 'about', label: <NavLink to="/mp/about">Acerca de</NavLink> },
  ]

  return (
    <Header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ color: 'white', fontWeight: 900, fontSize: 16, whiteSpace: 'nowrap' }}>
        Menú del Restaurante
      </span>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{ flex: 1 }}
        defaultSelectedKeys={['home']}
      />
    </Header>
  )
}
