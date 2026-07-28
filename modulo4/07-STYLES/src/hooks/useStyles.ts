// src/hooks/useStyles.ts

import { useState, type CSSProperties } from 'react'

export function useStyles(initial: CSSProperties) {
  const [styles, setStyles] = useState<CSSProperties>(initial)

  function updateStyle<K extends keyof CSSProperties>(key: K, value: CSSProperties[K]) {
    setStyles(prev => ({ ...prev, [key]: value }))
  }

  return { styles, updateStyle }
}
