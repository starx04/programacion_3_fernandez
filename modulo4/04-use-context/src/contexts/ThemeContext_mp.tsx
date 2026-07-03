// src/contexts/ThemeContext_mp.tsx
// Contexto de tema para la pantalla del Menú de Restaurante

import { createContext, useContext, useState } from 'react'

type MenuTheme = 'light' | 'dark'

interface MenuThemeContextValue {
  theme:       MenuTheme
  toggleTheme: () => void
}

// null como valor inicial — el guard en el hook lo protege
const MenuThemeContext = createContext<MenuThemeContextValue | null>(null)

export function MenuThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<MenuTheme>('light')

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <MenuThemeContext value={{ theme, toggleTheme }}>
      {children}
    </MenuThemeContext>
  )
}

// Hook personalizado que encapsula el useContext + guard
export function useMenuTheme(): MenuThemeContextValue {
  const context = useContext(MenuThemeContext)
  if (!context) throw new Error('useMenuTheme debe usarse dentro de <MenuThemeProvider>')
  return context
}
