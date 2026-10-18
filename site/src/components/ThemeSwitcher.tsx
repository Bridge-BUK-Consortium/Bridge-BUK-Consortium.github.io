import { useEffect, useRef, useState } from 'react'
import { THEMES, useTheme, type ThemeId } from '../theme'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = THEMES.find((t) => t.id === theme)!

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const pick = (id: ThemeId) => {
    setTheme(id)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Template: ${current.name}. Change template`}
        className="ui-radius inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-border bg-background/40 px-2.5 text-sm transition-colors hover:bg-secondary sm:px-3"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-primary"
          aria-hidden="true"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
        <span className="hidden xl:inline">Template:</span>
        <span className="hidden font-semibold sm:inline">{current.name}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`hidden h-3.5 w-3.5 transition-transform sm:block ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Site template"
          /* On a phone the trigger sits near the right edge, so a panel
             anchored to it hangs off to the left. Below sm the panel is
             pinned to the viewport instead, with an even gutter on both
             sides; from sm it hangs from the button as usual. */
          className="ui-card fixed inset-x-4 top-[4.5rem] z-50 overflow-hidden p-1 shadow-xl sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-72"
        >
          {THEMES.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                role="option"
                aria-selected={t.id === theme}
                onClick={() => pick(t.id)}
                className={`ui-radius flex w-full items-start gap-3 px-3 py-3 text-left transition-colors ${
                  t.id === theme ? 'bg-primary/10' : 'hover:bg-secondary'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                    t.id === theme ? 'border-primary bg-primary/20' : 'border-border'
                  }`}
                >
                  {t.id === theme && <span className="h-2 w-2 rounded-full bg-primary" />}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                    {t.blurb}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
