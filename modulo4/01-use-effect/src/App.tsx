// src/App.tsx

import DocumentTitle    from './components/DocumentTitle'
import OnlineStatus     from './components/OnlineStatus'
import WindowSize       from './components/WindowSize'
import LiveClock        from './components/LiveClock'
import SearchWithEffect from './components/SearchWithEffect'
import DebounceSearch   from './components/DebounceSearch'
import FetchUser        from './components/FetchUser'
import AutoFocusInput   from './components/AutoFocusInput'

import DocumentTitleMp    from './components/DocumentTitle_mp'
import OnlineStatusMp     from './components/OnlineStatus_mp'
import WindowSizeMp       from './components/WindowSize_mp'
import LiveClockMp        from './components/LiveClock_mp'
import SearchWithEffectMp from './components/SearchWithEffect_mp'
import DebounceSearchMp   from './components/DebounceSearch_mp'
import FetchUserMp        from './components/FetchUser_mp'
import AutoFocusInputMp   from './components/AutoFocusInput_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  DocumentTitle    — useEffect con array vacío, limpia al desmontar│
// │  2  OnlineStatus     — subscripción a eventos online/offline         │
// │  3  WindowSize       — evento resize con estado objeto tipado        │
// │  4  LiveClock        — setInterval con inicializador perezoso        │
// │  5  SearchWithEffect — efecto con dependencia, búsqueda sincronizada │
// │  6  DebounceSearch   — setTimeout/clearTimeout, patrón debounce      │
// │  7  FetchUser        — fetch real, loading/error, flag cancelled      │
// │  8  AutoFocusInput   — useRef + useEffect para foco imperativo       │
// │  ──── Versiones temáticas "Menú de Restaurante" (_mp) ────           │
// │  9  DocumentTitle_mp    — título de pestaña con pedidos activos      │
// │ 10  OnlineStatus_mp     — estado de conexión de la cocina            │
// │ 11  WindowSize_mp       — tamaño de la terminal de pedidos           │
// │ 12  LiveClock_mp        — reloj de cocina en vivo                    │
// │ 13  SearchWithEffect_mp — búsqueda de platos en el menú              │
// │ 14  DebounceSearch_mp   — búsqueda de platos con debounce            │
// │ 15  FetchUser_mp        — fetch de un plato, loading/error/cancelled │
// │ 16  AutoFocusInput_mp   — foco automático en nota del pedido         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 7

export default function App() {
  const content =
    PASO === 1 ? <DocumentTitle /> :
    PASO === 2 ? <OnlineStatus /> :
    PASO === 3 ? <WindowSize /> :
    PASO === 4 ? <LiveClock /> :
    PASO === 5 ? <SearchWithEffect /> :
    PASO === 6 ? <DebounceSearch /> :
    PASO === 7 ? <FetchUser /> :
    PASO === 8 ? <AutoFocusInput /> :
    PASO === 9  ? <DocumentTitleMp /> :
    PASO === 10 ? <OnlineStatusMp /> :
    PASO === 11 ? <WindowSizeMp /> :
    PASO === 12 ? <LiveClockMp /> :
    PASO === 13 ? <SearchWithEffectMp /> :
    PASO === 14 ? <DebounceSearchMp /> :
    PASO === 15 ? <FetchUserMp /> :
    PASO === 16 ? <AutoFocusInputMp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}