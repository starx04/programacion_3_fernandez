// src/App.tsx

import { useState } from 'react'
import DigitalCounter      from './components/DigitalCounter'
import SafeCounter         from './components/SafeCounter'
import UserProfileForm     from './components/UserProfileForm'
import TaskManager         from './components/TaskManager'
import CatalogProductItem  from './components/CatalogProductItem'
import ShoppingCartSummary from './components/ShoppingCartSummary'

import GuestCounter          from './components/DigitalCounter_mp'
import OrderQuantityCounter  from './components/SafeCounter_mp'
import ReservationForm       from './components/UserProfileForm_mp'
import KitchenOrderManager   from './components/TaskManager_mp'
import DishMenuItem          from './components/CatalogProductItem_mp'
import OrderSummary          from './components/ShoppingCartSummary_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  Cada paso muestra el componente original y, debajo, su versión     │
// │  "_mp" (tema Menú de Restaurante) con la misma técnica.             │
// │  1  DigitalCounter    — estado numérico con step y reset            │
// │  2  SafeCounter       — forma funcional prev => prev + 1            │
// │  3  UserProfileForm   — estado con objeto + spread update           │
// │  4  TaskManager       — estado con array: filter, map, spread       │
// │  5  Carrito useState  — array de objetos + lógica en App.tsx        │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 4

interface CartItem { id: number; name: string; price: number }

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
]

const menu = [
  { id: 1, name: 'Milanesa napolitana', price: 12.5 },
  { id: 2, name: 'Ravioles de ricota',  price: 9.75 },
  { id: 3, name: 'Limonada casera',     price: 3.0 },
]

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orderItems, setOrderItems] = useState<CartItem[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }

  function handleAddToOrder(id: number, name: string, price: number) {
    const alreadyOrdered = orderItems.some((item) => item.id === id)
    if (alreadyOrdered) return
    setOrderItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearOrder() {
    setOrderItems([])
  }

  const content =
    PASO === 1 ? (
      <>
        <DigitalCounter label="Contador" step={1} />
        <hr style={{ margin: '24px 0' }} />
        <GuestCounter label="Comensales" step={1} />
      </>
    ) :
    PASO === 2 ? (
      <>
        <SafeCounter />
        <hr style={{ margin: '24px 0' }} />
        <OrderQuantityCounter />
      </>
    ) :
    PASO === 3 ? (
      <>
        <UserProfileForm />
        <hr style={{ margin: '24px 0' }} />
        <ReservationForm />
      </>
    ) :
    PASO === 4 ? (
      <>
        <TaskManager />
        <hr style={{ margin: '24px 0' }} />
        <KitchenOrderManager />
      </>
    ) :
    PASO === 5 ? (
      <>
        <h1 style={{ fontSize: 22 }}>Tienda</h1>
        <section>
          {catalog.map((p) => (
            <CatalogProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>
        <ShoppingCartSummary items={cartItems} onClearCart={handleClearCart} />

        <hr style={{ margin: '24px 0' }} />

        <h1 style={{ fontSize: 22 }}>Menú del Restaurante</h1>
        <section>
          {menu.map((p) => (
            <DishMenuItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              onAddToOrder={handleAddToOrder}
            />
          ))}
        </section>
        <OrderSummary items={orderItems} onClearOrder={handleClearOrder} />
      </>
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
