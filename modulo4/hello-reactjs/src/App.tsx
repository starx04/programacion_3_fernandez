import MascotaCard        from './components/MascotaCard'
import MascotaCatalogList from './components/MascotCatalog'

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

    </main>
  )
}