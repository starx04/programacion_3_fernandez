// src/App.tsx

import WelcomeBanner from './components/WelcomeBanner'
import UserGreeting from './components/UserGreeting'
import CurrentDateDisplay from './components/CurrentDateDisplay'
import ColoredBox from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList from './components/FruitList'
import PriceTag from './components/PriceTag'
import StatusBadge from './components/StatusBadge'
import MiniProfileCard from './components/MiniProfileCard'
import SimpleInfoTable from './components/SimpleInfoTable'
import ProductCard from './components/ProductCard'
import ProductCatalogList from './components/ProductCatalogList'
import UserProfileCard from './components/UserProfileCard'
import VehiculosTable from './components/VehiculosTable'

import WelcomeBanner_mp from './components/WelcomeBanner_mp'
import UserGreeting_mp from './components/UserGreeting_mp'
import CurrentDateDisplay_mp from './components/CurrentDateDisplay_mp'
import ColoredBox_mp from './components/ColoredBox_mp'
import ConditionalGreeting_mp from './components/ConditionalGreeting_mp'
import FruitList_mp from './components/FruitList_mp'
import PriceTag_mp from './components/PriceTag_mp'
import StatusBadge_mp from './components/StatusBadge_mp'
import MiniProfileCard_mp from './components/MiniProfileCard_mp'
import SimpleInfoTable_mp from './components/SimpleInfoTable_mp'
import ProductCard_mp from './components/ProductCard_mp'
import ProductCatalogList_mp from './components/ProductCatalogList_mp'
import UserProfileCard_mp from './components/UserProfileCard_mp'
import VehiculosTable_mp from './components/VehiculosTable_mp'


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// │  14  VehiculosTable      — tabla de filas tipadas (marca/modelo/año)    │
// │  ── tema "Menú de Restaurante" (versiones _mp) ──                       │
// │  15  WelcomeBanner_mp       — banner estático sin props                 │
// │  16  UserGreeting_mp        — props string + cálculo de iniciales       │
// │  17  CurrentDateDisplay_mp  — fecha calculada al renderizar             │
// │  18  ColoredBox_mp          — estilos dinámicos con props numéricas     │
// │  19  ConditionalGreeting_mp — renderizado condicional + tipo unión      │
// │  20  FruitList_mp           — lista tipada con .map()                   │
// │  21  PriceTag_mp            — cálculos con props numéricas              │
// │  22  StatusBadge_mp         — Record para mapear tipos a estilos        │
// │  23  MiniProfileCard_mp     — composición de componentes                │
// │  24  SimpleInfoTable_mp     — tabla con rows tipadas                    │
// │  25  ProductCard_mp         — interfaz de props con opcionales          │
// │  26  ProductCatalogList_mp  — lista con renderizado condicional         │
// │  27  UserProfileCard_mp     — props complejas + rol                     │
// │  28  VehiculosTable_mp      — tabla de filas tipadas (mesas)            │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO: number = 15

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52, inSeason: true },
  { name: 'Banana', emoji: '🍌', calories: 89, inSeason: false },
  { name: 'Naranja', emoji: '🍊', calories: 47, inSeason: true },
  { name: 'Limon', emoji: '🍋', calories: 12, inSeason: false },
  { name: 'Fresa', emoji: '🍓', calories: 59, inSeason: true },
  { name: 'Arandano', emoji: '🫐', calories: 67, inSeason: true },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico', price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD', price: 59.99 },
]

const dishes = [
  { name: 'Bandeja paisa', emoji: '🍛', price: 14.99, isSpecial: true },
  { name: 'Sancocho', emoji: '🍲', price: 9.5, isSpecial: false },
  { name: 'Arepa con queso', emoji: '🫓', price: 3.75, isSpecial: false },
  { name: 'Tres leches', emoji: '🍰', price: 5.25, isSpecial: true },
  { name: 'Limonada de coco', emoji: '🥥', price: 4.0, isSpecial: false },
  { name: 'Ceviche mixto', emoji: '🦐', price: 12.5, isSpecial: true },
]

const menuItems = [
  { id: 1, name: 'Sopa de mariscos', price: 11.5, category: 'Entradas' },
  { id: 2, name: 'Lomo a la pimienta', price: 16.99, category: 'Platos fuertes' },
  { id: 3, name: 'Pescado frito', price: 15.5, category: 'Platos fuertes', outOfStock: true },
  { id: 4, name: 'Flan de caramelo', price: 4.5, category: 'Postres' },
]

export default function App() {
  const content =
    PASO === 1 ? <WelcomeBanner /> :
      PASO === 2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
        PASO === 3 ? <CurrentDateDisplay /> :
          PASO === 4 ? (
            <div style={{ display: 'flex', gap: 12 }}>
              <ColoredBox color="#0070f3" label="Primary" />
              <ColoredBox color="#22c55e" label="Success" />
              <ColoredBox color="#e00" label="Danger" />
            </div>
          ) :
            PASO === 5 ? <ConditionalGreeting isLoggedIn={false} userName="Carlos" timeOfDay="afternoon" /> :
              PASO === 6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
                PASO === 7 ? (
                  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
                    <PriceTag amount={99.99} currency="USD" />
                    <PriceTag amount={99.99} currency="USD" discountPercent={20} />
                  </div>
                ) :
                  PASO === 8 ? (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <StatusBadge status="active" />
                      <StatusBadge status="pending" />
                      <StatusBadge status="error" />
                      <StatusBadge status="inactive" label='Inactivation' />
                    </div>
                  ) :
                    PASO === 9 ? (
                      <MiniProfileCard
                        fullName="Ana García"
                        role="Senior Developer"
                        department="Ingeniería"
                        status="active"
                        joinedYear={2019}
                      />
                    ) :
                      PASO === 10 ? (
                        <SimpleInfoTable
                          title="Resumen del pedido"
                          rows={[
                            { label: 'Subtotal', value: '$89.99' },
                            { label: 'Envío', value: '$5.00' },
                            { label: 'Total', value: '$94.99', highlight: true },
                          ]}
                        />
                      ) :
                        PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
                          PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
                            PASO === 13 ? (
                              <UserProfileCard
                                fullName="Ana García"
                                email="ana@ejemplo.com"
                                role="admin"
                                isActive={true}
                                skills={['TypeScript', 'React', 'Node.js']}
                                bio="Desarrolladora fullstack con 5 años de experiencia."
                              />
                            ) :
                            PASO === 14 ? <VehiculosTable title="Vehículos disponibles" rows={[
                              { marca: 'Toyota', modelo: 'Camry', año: 2020, tipo: 'Sedán' },
                              { marca: 'Nisan', modelo: 'Camry', año: 2021, tipo: 'Silver' },
                              { marca: 'Tesla', modelo: 'modelo S', año: 2022, tipo: 'platinum' },
                              { marca: 'Ford', modelo: '4x4', año: 2023, tipo: 'gold' },
                            ]} /> :
                              PASO === 15 ? <WelcomeBanner_mp subtitle="Cocina de autor" /> :
                                PASO === 16 ? <UserGreeting_mp name="Mesero Diego" tableNumber={5} /> :
                                  PASO === 17 ? <CurrentDateDisplay_mp /> :
                                    PASO === 18 ? (
                                      <div style={{ display: 'flex', gap: 12 }}>
                                        <ColoredBox_mp color="#b91c1c" label="Entradas" />
                                        <ColoredBox_mp color="#f59e0b" label="Platos fuertes" />
                                        <ColoredBox_mp color="#16a34a" label="Postres" />
                                      </div>
                                    ) :
                                      PASO === 19 ? <ConditionalGreeting_mp isTableAssigned={false} customerName="Marcos" turno="evening" /> :
                                        PASO === 20 ? <FruitList_mp dishes={dishes} title="Platos recomendados" /> :
                                          PASO === 21 ? (
                                            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
                                              <PriceTag_mp amount={18.5} moneda="USD" />
                                              <PriceTag_mp amount={18.5} moneda="USD" discountPercent={15} />
                                            </div>
                                          ) :
                                            PASO === 22 ? (
                                              <div style={{ display: 'flex', gap: 8 }}>
                                                <StatusBadge_mp status="active" />
                                                <StatusBadge_mp status="pending" />
                                                <StatusBadge_mp status="error" />
                                                <StatusBadge_mp status="inactive" label="De vacaciones" />
                                              </div>
                                            ) :
                                              PASO === 23 ? (
                                                <MiniProfileCard_mp
                                                  fullName="Laura Pérez"
                                                  role="Mesera Senior"
                                                  seccion="Terraza"
                                                  status="active"
                                                  hireYear={2021}
                                                />
                                              ) :
                                                PASO === 24 ? (
                                                  <SimpleInfoTable_mp
                                                    title="Resumen de la cuenta"
                                                    rows={[
                                                      { label: 'Subtotal', value: '$32.50' },
                                                      { label: 'Propina', value: '$4.00' },
                                                      { label: 'Total', value: '$36.50', highlight: true },
                                                    ]}
                                                  />
                                                ) :
                                                  PASO === 25 ? <ProductCard_mp title="Bandeja paisa" description="Plato típico con frijoles, arroz y carne" highlighted price={14.99} /> :
                                                    PASO === 26 ? <ProductCatalogList_mp items={menuItems} title="Menú del día" /> :
                                                      PASO === 27 ? (
                                                        <UserProfileCard_mp
                                                          fullName="Carlos Ramírez"
                                                          email="carlos@sabor-criollo.com"
                                                          role="chef"
                                                          isActive={true}
                                                          specialties={['Parrilla', 'Repostería', 'Cocina fusión']}
                                                          bio="Chef ejecutivo con 10 años de experiencia en cocina latina."
                                                        />
                                                      ) :
                                                        PASO === 28 ? <VehiculosTable_mp title="Estado de las mesas" rows={[
                                                          { numero: 1, capacidad: 2, ubicacion: 'Ventana', estado: 'Libre' },
                                                          { numero: 2, capacidad: 4, ubicacion: 'Salón principal', estado: 'Ocupada' },
                                                          { numero: 3, capacidad: 6, ubicacion: 'Terraza', estado: 'Reservada' },
                                                          { numero: 4, capacidad: 2, ubicacion: 'Barra', estado: 'Libre' },
                                                        ]} /> :
                                                          <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
      <UserGreeting name="Luis Mora" />
    </main>
  )
}