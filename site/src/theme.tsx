import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export const THEMES = [
  {
    id: 'lab',
    name: 'Lab',
    blurb: 'Monospace, dark, graph paper. Research-terminal character.',
  },
  {
    id: 'paper',
    name: 'Paper',
    blurb: 'Inter, warm paper ground, heavy display type. Editorial character.',
  },
] as const

export type ThemeId = (typeof THEMES)[number]['id']

const KEY = 'cluster-e-theme'
const isTheme = (v: unknown): v is ThemeId => THEMES.some((t) => t.id === v)

const ThemeContext = createContext<{ theme: ThemeId; setTheme: (t: ThemeId) => void }>({
  theme: 'lab',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(() => {
    // A ?theme= query parameter wins, so a template can be linked directly.
    try {
      const q = new URLSearchParams(window.location.search).get('theme')
      if (isTheme(q)) return q
      const saved = localStorage.getItem(KEY)
      if (isTheme(saved)) return saved
    } catch {
      /* private mode, blocked storage: fall through to the default */
    }
    return 'lab'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* not fatal: the choice just will not survive a reload */
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
