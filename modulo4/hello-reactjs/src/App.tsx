import MascotaCard        from './components/MascotaCard'
import MascotaCatalogList from './components/MascotCatalog'
import PlatoDestacadoCard from './components/MascotaCard_mp'
import MenuCatalog        from './components/MascotCatalog_mp'

interface Mascota {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  tipo_raza?: string
}

const catalog: Mascota[] = [
  { id: 1, name: 'rex',  price: 89.99, tipo_raza: ' Alemana' },
  { id: 2, name: 'oso', price: 349.99, tipo_raza: ' Alemana' },
  { id: 3, name: 'luna', price: 29.99, outOfStock: true, tipo_raza: ' Alemana' },
  { id: 4, name: 'max',  price: 59.99, tipo_raza: ' Alemana' },
  { id: 5, name: 'bella', price: 39.99, tipo_raza: ' Alemana' },
]

interface Plato {
  id: number
  nombre: string
  precio: number
  agotado?: boolean
  categoria?: string
}

const menu: Plato[] = [
  { id: 1, nombre: 'Lomo saltado',      precio: 12.5, categoria: 'Fondos' },
  { id: 2, nombre: 'Ceviche mixto',     precio: 14.0, categoria: 'Entradas' },
  { id: 3, nombre: 'Ají de gallina',    precio: 10.5, agotado: true, categoria: 'Fondos' },
  { id: 4, nombre: 'Suspiro limeño',    precio: 6.0, categoria: 'Postres' },
  { id: 5, nombre: 'Chicha morada',     precio: 3.0, categoria: 'Bebidas' },
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <MascotaCard
        title="Bienvenido a la tienda de mascotas"
        description="Encuentra las mejores mascotas disponibles en nuestro catalogo"
        highlighted
      />

      <MascotaCard title="Oferta del día" description="luna con 20% de descuento" />

      <MascotaCatalogList mascotas={catalog} title="Mascotaos disponibles" />

      {/* Versión "Menú de Restaurante" (_mp) de los mismos componentes */}
      <PlatoDestacadoCard
        nombre="Bienvenido al menú del restaurante"
        descripcion="Descubre los platos favoritos de nuestros comensales"
        destacado
      />

      <PlatoDestacadoCard nombre="Plato del día" descripcion="Lomo saltado con 20% de descuento" />

      <MenuCatalog platos={menu} titulo="Platos disponibles" />

    </main>
  )
}