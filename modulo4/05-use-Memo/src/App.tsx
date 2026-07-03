// src/App.tsx

/*import PrimeSieve        from './components/PrimeSieve'
import FilteredCatalog   from './components/FilteredCatalog'
import OrderMetrics      from './components/OrderMetrics'
import MultiTagFilter    from './components/MultiTagFilter'
import MemoizedList from './components/MemoizedList'*/
import ModalDemo from './components/ModalDemo'
/*import PaginatedFetch from './components/PaginatedFetch'
*/
/* Versiones "Menú de Restaurante" (_mp) — mismo PASO, mismo hook/técnica, re-temáticas */
/*import PrimeSieveMp        from './components/PrimeSieve_mp'
import FilteredCatalogMp   from './components/FilteredCatalog_mp'
import OrderMetricsMp      from './components/OrderMetrics_mp'
import MultiTagFilterMp    from './components/MultiTagFilter_mp'
import MemoizedListMp      from './components/MemoizedList_mp'
import SearchWithFetchMp   from './components/SearchWithFetch_mp'
import FilterTableMp       from './components/FilterTable_mp'
import PaginatedFetchMp    from './components/PaginatedFetch_mp'
import ModalDemoMp         from './components/ModalDemo_mp'
import ThemeSelectorMp     from './components/ThemeSelector_mp'
import DishReviewListMp    from './components/Post_mp'*/

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  PrimeSieve       — useMemo para cálculo costoso (criba primos)  │
// │  2  FilteredCatalog  — dos useMemo encadenados: filtrar → ordenar   │
// │  3  OrderMetrics     — múltiples useMemo derivados de un filtro     │
// │  4  MultiTagFilter   — filtro AND por tags con conteos memoizados   │
// │                                                                        │
// │  Versiones _mp ("Menú de Restaurante") — mismo PASO + 16            │
// │  16  PrimeSieveMp     31  ThemeSelectorMp                            │
// │  17  FilteredCatalogMp                                               │
// │  18  OrderMetricsMp                                                  │
// │  19  MultiTagFilterMp                                                │
// │  20  MemoizedListMp                                                  │
// │  21  SearchWithFetchMp                                               │
// │  22  FilterTableMp                                                   │
// │  23  PaginatedFetchMp                                                │
// │  24  ModalDemoMp                                                     │
// │  38  DishReviewListMp (Post_mp)                                      │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 9

export default function App() {
  const content =
    /*PASO === 1 ? <PrimeSieve /> :
    PASO === 2 ? <FilteredCatalog /> :
    PASO === 3 ? <OrderMetrics /> :
    PASO === 4 ? <MultiTagFilter /> :

    PASO === 5 ? <MemoizedList /> :
    PASO === 6 ? <SearchWithFetch /> :
    PASO === 7 ? <FilterTable /> :
    PASO === 8 ? <PaginatedFetch /> :*/
    PASO === 9 ? <ModalDemo /> :
    /*PASO === 10 ? <QuantitySelector /> :
    PASO === 11 ? <ThemeSelector /> :
    PASO === 12 ? <LiveSearch /> :
    PASO === 13 ? <PostList /> :
    PASO === 14 ? <ResponsiveLayout /> :
    PASO === 15 ? <CodeBlock code={EXAMPLE_CODE} language="tsx" /> :

    PASO === 16 ? <PrimeSieveMp /> :
    PASO === 17 ? <FilteredCatalogMp /> :
    PASO === 18 ? <OrderMetricsMp /> :
    PASO === 19 ? <MultiTagFilterMp /> :
    PASO === 20 ? <MemoizedListMp /> :
    PASO === 21 ? <SearchWithFetchMp /> :
    PASO === 22 ? <FilterTableMp /> :
    PASO === 23 ? <PaginatedFetchMp /> :
    PASO === 24 ? <ModalDemoMp /> :
    PASO === 31 ? <ThemeSelectorMp /> :
    PASO === 38 ? <DishReviewListMp /> :*/
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 620, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}