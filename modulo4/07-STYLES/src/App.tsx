// src/App.tsx

import { ThemeProvider }    from './theme/ThemeContext'
import CssGlobalDemo        from './components/CssGlobalDemo'
import InlineStyleDemo      from './components/InlineStyleDemo'
import CssModuleDemo        from './components/CssModuleDemo'
import StyledComponentsDemo from './components/StyledComponentsDemo'
import LiveStyleEditor      from './components/LiveStyleEditor'
import HoverDemo            from './components/HoverDemo'
import ThemePanel           from './components/ThemePanel'
import CssGlobalDemo_mp        from './components/CssGlobalDemo_mp'
import InlineStyleDemo_mp      from './components/InlineStyleDemo_mp'
import CssModuleDemo_mp        from './components/CssModuleDemo_mp'
import StyledComponentsDemo_mp from './components/StyledComponentsDemo_mp'
import LiveStyleEditor_mp      from './components/LiveStyleEditor_mp'
import HoverDemo_mp            from './components/HoverDemo_mp'
import ThemePanel_mp           from './components/ThemePanel_mp'
import './theme/theme.css'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  CssGlobalDemo        — clases globales y riesgo de colisión     │
// │  2  InlineStyleDemo      — objetos JS, sin :hover ni @media         │
// │  3  CssModuleDemo        — scope local, :hover con CSS Modules      │
// │  4  StyledComponentsDemo — CSS-in-JS con props transient ($)        │
// │  5  LiveStyleEditor      — hook useStyles para estilos dinámicos    │
// │  6  HoverDemo            — hook useHover para efectos hover         │
// │  7  ThemePanel           — Context + CSS variables para theming     │
// │  8..14 — mismos pasos, versión _mp (Menú de Restaurante)            │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 1

export default function App() {
  const content =
    PASO === 1 ? <CssGlobalDemo /> :
    PASO === 2 ? <InlineStyleDemo /> :
    PASO === 3 ? <CssModuleDemo /> :
    PASO === 4 ? <StyledComponentsDemo /> :
    PASO === 5 ? <LiveStyleEditor /> :
    PASO === 6 ? <HoverDemo /> :
    PASO === 7 ? <ThemePanel /> :
    PASO === 8 ? <CssGlobalDemo_mp /> :
    PASO === 9 ? <InlineStyleDemo_mp /> :
    PASO === 10 ? <CssModuleDemo_mp /> :
    PASO === 11 ? <StyledComponentsDemo_mp /> :
    PASO === 12 ? <LiveStyleEditor_mp /> :
    PASO === 13 ? <HoverDemo_mp /> :
    PASO === 14 ? <ThemePanel_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <ThemeProvider>
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px' }}>
        {content}
      </main>
    </ThemeProvider>
  )
}