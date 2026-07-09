// src/hooks/useHover.ts

import { useRef, useState, useEffect, type RefObject } from 'react'

export function useHover<T extends HTMLElement>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleEnter = () => setIsHovered(true)
    const handleLeave = () => setIsHovered(false)

    node.addEventListener('mouseenter', handleEnter)
    node.addEventListener('mouseleave', handleLeave)

    return () => {
      node.removeEventListener('mouseenter', handleEnter)
      node.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return [ref, isHovered]
}
