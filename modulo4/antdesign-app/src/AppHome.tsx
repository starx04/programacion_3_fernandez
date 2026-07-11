// src/AppHome.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout }        from 'antd'
import AntNavbar         from './components/antd/AntNavbar'
import AntFooter         from './components/antd/AntFooter'
import HomeDashboard     from './pages/HomeDashboard'
import AboutPage         from './pages/AboutPage'
import AppHome_mp        from './AppHome_mp'

const { Content } = Layout

export default function AppHome() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <AntNavbar />
        <Content>
          <Routes>
            <Route path="/"      element={<HomeDashboard />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Versión temática "Menú de Restaurante" */}
            <Route path="/mp/*"  element={<AppHome_mp />} />
          </Routes>
        </Content>
        <AntFooter />
      </Layout>
    </BrowserRouter>
  )
}