// src/AppProductCatalogList_mp.tsx
// Versión "Menú de Restaurante" de AppProductCatalogList.tsx

import BebidaCard    from './components/ProductCard_mp'
import CartaBebidas  from './components/ProductCatalogList_mp'

interface Bebida {
  id: number
  nombre: string
  precio: number
  agotada?: boolean
  tipo?: string
}

const carta: Bebida[] = [
  { id: 1, nombre: 'Limonada natural',   precio: 2.5, tipo: 'Fría' },
  { id: 2, nombre: 'Café americano',     precio: 1.8, tipo: 'Caliente' },
  { id: 3, nombre: 'Jugo de naranja',    precio: 2.2, agotada: true, tipo: 'Fría' },
  { id: 4, nombre: 'Vino tinto (copa)',  precio: 4.5, tipo: 'Alcohólica' },
  { id: 5, nombre: 'Agua mineral',       precio: 1.0, tipo: 'Fría' },
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <BebidaCard
        titulo="Bienvenido a la carta de bebidas"
        detalle="Descubre nuestras bebidas frías y calientes"
        especial
      />

      <BebidaCard titulo="Bebida del día" detalle="Limonada natural con 20% de descuento" />

      <CartaBebidas bebidas={carta} titulo="Bebidas disponibles" />

    </main>
  )
}
