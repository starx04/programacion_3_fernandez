// src/hooks/useToggle_mp.ts
// Hook genérico reutilizable — idéntico en técnica a useToggle.ts

import { useState, useCallback } from 'react'

export function useToggleMp(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle   = useCallback(() => setValue((v) => !v), [])
  const setTrue  = useCallback(() => setValue(true),      [])
  const setFalse = useCallback(() => setValue(false),     [])

  return { value, toggle, setTrue, setFalse }
}
