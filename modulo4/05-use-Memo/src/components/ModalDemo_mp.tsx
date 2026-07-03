// src/components/ModalDemo_mp.tsx
// Versión "Menú de Restaurante" de ModalDemo.tsx — modal de detalle de un plato

import { useToggleMp } from '../hooks/useToggle_mp'

export default function ModalDemoMp() {
  const { value: isOpen, toggle, setFalse } = useToggleMp()

  return (
    <>
      <button onClick={toggle}>Ver detalle del plato</button>
      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', borderRadius: 10,
            padding: 24, minWidth: 300,
          }}>
            <h3 style={{ marginTop: 0 }}>Lomo saltado</h3>
            <p>Trozos de lomo salteados con cebolla, tomate y papas fritas, servido con arroz.</p>
            <button onClick={setFalse}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}
