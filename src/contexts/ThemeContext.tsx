// src/contexts/ThemeContext.tsx
'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    // Prefer user saved theme, otherwise use prefers-color-scheme
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      setThemeState(saved)
      document.documentElement.classList.toggle('dark', saved === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = prefersDark ? 'dark' : 'light'
      setThemeState(initial)
      document.documentElement.classList.toggle('dark', initial === 'dark')
    }
  }, [])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem('theme', t)
    document.documentElement.classList.toggle('dark', t === 'dark')
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
