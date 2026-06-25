// src/components/SafeCounter_mp.tsx
// Misma técnica que SafeCounter: actualización segura de estado con función (prev => ...) vs valor directo

import { useState } from 'react'

export default function OrderQuantityCounter() {
  const [portions, setPortions] = useState(0)

  function addPortion() {
    // ❌ Puede fallar si React agrupa renders
    setPortions(portions + 1)

    // ✅ Siempre correcto — prev es garantizado el valor actual
    setPortions((prev) => prev + 1)
  }

  // Ejemplo donde la diferencia importa: agregar 3 porciones seguidas al mismo plato
  function addThreePortions() {
    // ❌ Las tres líneas leen el mismo valor de portions — resultado: +1
    setPortions(portions + 1)
    setPortions(portions + 1)
    setPortions(portions + 1)

    // ✅ Cada llamada recibe el prev actualizado — resultado: +3
    setPortions((prev) => prev + 1)
    setPortions((prev) => prev + 1)
    setPortions((prev) => prev + 1)
  }

  return (
    <div>
      <p>Porciones pedidas: {portions}</p>
      <button onClick={addPortion}>+1 porción</button>
      <button onClick={addThreePortions}>+3 porciones</button>
    </div>
  )
}
