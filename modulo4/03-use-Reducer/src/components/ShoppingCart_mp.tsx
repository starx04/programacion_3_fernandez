// src/components/ShoppingCart_mp.tsx
// Menú de Restaurante — carrito de pedido con agregar/quitar/actualizar cantidad

import { useReducer, useMemo } from 'react'

interface OrderItem {
  id:       number
  name:     string
  price:    number
  quantity: number
}

interface OrderState {
  items:  OrderItem[]
  isOpen: boolean
}

type OrderAction =
  | { type: 'ADD_ITEM';    item: Omit<OrderItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'INCREMENT';   id: number }
  | { type: 'DECREMENT';   id: number }
  | { type: 'CLEAR' }
  | { type: 'TOGGLE_CART' }

function orderReducer(state: OrderState, action: OrderAction): OrderState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find((i) => i.id === action.item.id)
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }
    case 'DECREMENT':
      return {
        ...state,
        items: state.items
          .map((i) => i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i)
          .filter((i) => i.quantity > 0),
      }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
  }
}

const MENU = [
  { id: 1, name: 'Ceviche mixto',    price: 14 },
  { id: 2, name: 'Lomo saltado',     price: 12 },
  { id: 3, name: 'Ají de gallina',   price: 10 },
  { id: 4, name: 'Chicha morada',    price: 3  },
]

export default function ShoppingCart_mp() {
  const [order, dispatch] = useReducer(orderReducer, { items: [], isOpen: false })

  const total     = useMemo(() => order.items.reduce((acc, i) => acc + i.price * i.quantity, 0), [order.items])
  const itemCount = useMemo(() => order.items.reduce((acc, i) => acc + i.quantity, 0),            [order.items])

  return (
    <div style={{ maxWidth: 440, fontFamily: 'sans-serif' }}>

      {/* Menú del restaurante */}
      <div style={{ marginBottom: 16 }}>
        {MENU.map((dish) => (
          <div
            key={dish.id}
            style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '10px 0',
              borderBottom: '1px solid #e5e7eb',
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: 500 }}>{dish.name}</p>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>${dish.price}</p>
            </div>
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', item: dish })}
              style={{
                padding: '6px 14px', background: '#0070f3', color: '#fff',
                border: 'none', borderRadius: 6, cursor: 'pointer',
              }}
            >
              + Agregar
            </button>
          </div>
        ))}
      </div>

      {/* Botón del pedido */}
      <button
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
        style={{
          width: '100%', padding: '10px',
          background: itemCount > 0 ? '#0070f3' : '#f3f4f6',
          color:      itemCount > 0 ? '#fff'    : '#6b7280',
          border: 'none', borderRadius: 8, cursor: 'pointer',
          fontWeight: 600, marginBottom: 12,
        }}
      >
        {order.isOpen ? 'Ocultar pedido' : `Ver pedido (${itemCount} platos)`}
      </button>

      {/* Panel del pedido */}
      {order.isOpen && (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 16 }}>
          {order.items.length === 0 ? (
            <p style={{ color: '#9ca3af', margin: 0 }}>El pedido está vacío.</p>
          ) : (
            <>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '8px 0',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  <span style={{ fontSize: 14, flex: 1 }}>{item.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      −
                    </button>
                    <span style={{ minWidth: 20, textAlign: 'center', fontSize: 14 }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      +
                    </button>
                    <span style={{ minWidth: 60, textAlign: 'right', fontSize: 14 }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ paddingTop: 12, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ fontWeight: 700, fontSize: 16 }}>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => dispatch({ type: 'CLEAR' })}
                style={{
                  marginTop: 12, width: '100%', padding: '8px',
                  background: '#fee2e2', color: '#991b1b',
                  border: 'none', borderRadius: 6, cursor: 'pointer',
                }}
              >
                Vaciar pedido
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

const qtyBtn: React.CSSProperties = {
  width: 24, height: 24, border: '1px solid #d1d5db',
  borderRadius: 4, background: '#f9fafb',
  cursor: 'pointer', fontSize: 14, lineHeight: 1,
}
