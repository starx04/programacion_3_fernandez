
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Versión "Menú de Restaurante" de AppPrimerComponente.tsx           │
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  BienvenidaMenu — componente de bienvenida del restaurante       │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

function BienvenidaMenu() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Bienvenido al Menú Digital del Restaurante</h1>
      <p>Aplicación construida con Vite 8 y React.</p>
    </main>
  )
}

export default function App() {
  const content =
    PASO === 1 ? <BienvenidaMenu /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return content
}
