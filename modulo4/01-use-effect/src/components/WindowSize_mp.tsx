// src/components/WindowSize_mp.tsx
// Versión temática "Menú de Restaurante" de WindowSize

import { useState, useEffect } from 'react'

interface TerminalDimensions {
  width:  number
  height: number
}

export default function WindowSizeMp() {
  const [terminal, setTerminal] = useState<TerminalDimensions>({
    width:  window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setTerminal({
        width:  window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 14, color: '#374151' }}>
      Terminal de pedidos: {terminal.width} × {terminal.height} px
    </p>
  )
}
