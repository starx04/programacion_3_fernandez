// src/AppHome_mp.tsx

import { Routes, Route } from 'react-router-dom'
import { Layout }        from 'antd'
import AntNavbar_mp      from './components/antd/AntNavbar_mp'
import AntFooter_mp      from './components/antd/AntFooter_mp'
import HomeDashboard_mp  from './pages/HomeDashboard_mp'
import AboutPage_mp      from './pages/AboutPage_mp'

const { Content } = Layout

export default function AppHome_mp() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AntNavbar_mp />
      <Content>
        <Routes>
          <Route path="/mp"       element={<HomeDashboard_mp />} />
          <Route path="/mp/about" element={<AboutPage_mp />} />
        </Routes>
      </Content>
      <AntFooter_mp />
    </Layout>
  )
}
