// src/hooks/useLocalStorage_mp.ts
// Hook genérico reutilizable — idéntico en técnica a useLocalStorage.ts

import { useState, useEffect } from 'react'

export function useLocalStorageMp<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      console.warn(`useLocalStorageMp: no se pudo guardar "${key}"`)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
