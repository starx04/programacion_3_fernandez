// src/App.tsx — rutas anidadas
import { Routes, Route } from 'react-router-dom'
import RootLayout       from './layouts/RootLayout'
import DashboardLayout  from './layouts/DashboardLayout'
import HomePage         from './pages/HomePage'
import ProductsPage     from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutPage        from './pages/AboutPage'
import LoginPage        from './pages/LoginPage'
import NotFoundPage     from './pages/NotFoundPage'
import ZodRegistrationForm from './pages/ZodRegistrationForm'
// Páginas del dashboard (simples por ahora)
function Overview()   { return <h2>Resumen</h2> }
function Analytics()  { return <h2>Analítica</h2> }
function SettingsPage(){ return <h2>Configuración</h2> }

// ── Menú de Restaurante (_mp) ──────────────────────────────────────────
import RootLayout_mp       from './layouts/RootLayout_mp'
import DashboardLayout_mp  from './layouts/DashboardLayout_mp'
import HomePage_mp         from './pages/HomePage_mp'
import ProductsPage_mp     from './pages/ProductsPage_mp'
import ProductDetailPage_mp from './pages/ProductDetailPage_mp'
import AboutPage_mp        from './pages/AboutPage_mp'
import LoginPage_mp        from './pages/LoginPage_mp'
import NotFoundPage_mp     from './pages/NotFoundPage_mp'
import ZodRegistrationForm_mp from './pages/ZodRegistrationForm_mp'
import DashboardPage_mp    from './pages/DashboardPage_mp'
import ProtectedRoute_mp   from './components/ProtectedRoute_mp'

// Sub-páginas simples del "Resumen de hoy" (mismo patrón que Overview/Analytics)
function PedidosHoy_mp()  { return <h2>Pedidos de hoy</h2> }
function ReservasHoy_mp() { return <h2>Reservas de hoy</h2> }
// Páginas del panel admin (simples por ahora, mismo patrón que el dashboard original)
function AdminOverview_mp() { return <h2>Bienvenido al panel administrativo</h2> }
function AdminPedidos_mp()  { return <h2>Gestión de pedidos</h2> }
function AdminReservas_mp() { return <h2>Gestión de reservas</h2> }

export default function App() {
  // El staff queda "autenticado" para esta sesión del navegador después
  // de iniciar sesión en LoginPage_mp — se re-evalúa en cada render,
  // que ocurre en cada cambio de ruta (BrowserRouter re-renderiza App).
  const isStaffAuthenticated = sessionStorage.getItem('mp_staff_auth') === 'true'

  return (
    <Routes>
      {/* Layout raíz — todas las páginas comparten header */}
      <Route element={<RootLayout />}>
        <Route index          element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="about"   element={<AboutPage />} />
        <Route path="login"   element={<LoginPage />} />
        <Route path="register" element={<ZodRegistrationForm />} />

        {/* Dashboard con su propio layout anidado */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index          element={<Overview />} />
          <Route path="analytics"  element={<Analytics />} />
          <Route path="settings"   element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Menú de Restaurante — layout raíz propio bajo /mp */}
      <Route path="mp" element={<RootLayout_mp />}>
        <Route index            element={<HomePage_mp />} />
        <Route path="menu"      element={<ProductsPage_mp />} />
        <Route path="menu/:id"  element={<ProductDetailPage_mp />} />
        <Route path="nosotros"  element={<AboutPage_mp />} />
        <Route path="login"     element={<LoginPage_mp />} />
        <Route path="reservar"  element={<ZodRegistrationForm_mp />} />

        {/* Panel admin protegido, con su propio layout anidado */}
        <Route
          path="admin"
          element={
            <ProtectedRoute_mp isAuthenticated={isStaffAuthenticated}>
              <DashboardLayout_mp />
            </ProtectedRoute_mp>
          }
        >
          <Route index             element={<AdminOverview_mp />} />
          <Route path="pedidos"    element={<AdminPedidos_mp />} />
          <Route path="reservas"   element={<AdminReservas_mp />} />

          {/* Resumen de hoy — sub-panel anidado con su propio Outlet */}
          <Route path="resumen" element={<DashboardPage_mp />}>
            <Route index          element={<PedidosHoy_mp />} />
            <Route path="reservas" element={<ReservasHoy_mp />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage_mp />} />
      </Route>
    </Routes>
  )
}