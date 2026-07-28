// src/components/BasicCounter_mp.tsx
// Menú de Restaurante — contador de platos pedidos

import { useReducer } from 'react'

type DishCounterAction =
  | { type: 'ADD_DISH' }
  | { type: 'REMOVE_DISH' }
  | { type: 'RESET' }
  | { type: 'SET'; payload: number }

interface DishCounterState {
  count: number
}

function dishCounterReducer(
  state: DishCounterState,
  action: DishCounterAction
): DishCounterState {
  switch (action.type) {
    case 'ADD_DISH':    return { count: state.count + 1 }
    case 'REMOVE_DISH': return { count: Math.max(0, state.count - 1) }
    case 'RESET':        return { count: 0 }
    case 'SET':           return { count: action.payload }
  }
}

const INITIAL_STATE: DishCounterState = { count: 0 }

export default function BasicCounter_mp() {
  const [state, dispatch] = useReducer(dishCounterReducer, INITIAL_STATE)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 220 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13, textAlign: 'center' }}>
        Platos pedidos en esta mesa
      </p>
      <p style={{ fontFamily: 'monospace', fontSize: 32, margin: 0, textAlign: 'center' }}>
        {state.count}
      </p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button
          onClick={() => dispatch({ type: 'REMOVE_DISH' })}
          style={btnStyle}
        >
          −
        </button>
        <button
          onClick={() => dispatch({ type: 'ADD_DISH' })}
          style={btnStyle}
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: 'SET', payload: 10 })}
        style={{ ...btnStyle, fontSize: 12 }}
      >
        Pedido grande (10 platos)
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        style={{ ...btnStyle, background: '#f3f4f6', color: '#6b7280' }}
      >
        Reset
      </button>
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  padding: '8px 16px',
  border: 'none',
  borderRadius: 6,
  background: '#0070f3',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 500,
}
