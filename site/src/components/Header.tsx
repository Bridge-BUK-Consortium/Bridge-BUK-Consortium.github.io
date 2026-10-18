import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'

const NAV = [
  { to: '/research', label: 'Research' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/people', label: 'People' },
  { to: '/consortium', label: 'Consortium' },
  { to: '/programme', label: 'Programme' },
]

export default function Header({ onSearch }: { onSearch: () => void }) {
  const [open, setOpen] = useState(false)

  const link =
    'ui-radius px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}logos/buk.png`}
            alt="Bayero University, Kano"
            className="h-10 w-auto shrink-0 sm:h-12"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold sm:text-base">Cluster E</span>
            <span className="ui-eyebrow ui-eyebrow-muted block truncate text-[10px]">
              Project BRIDGE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `${link} ${isActive ? 'bg-secondary text-foreground' : ''}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onSearch}
            aria-label="Search"
            className="ui-radius inline-flex min-h-11 items-center gap-2 border border-border bg-background/40 px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="hidden xl:inline">Search</span>
            <kbd className="ui-radius hidden border border-border px-1.5 py-0.5 font-mono text-[10px] xl:block">
              ⌘K
            </kbd>
          </button>

          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>

          <Link
            to="/contact"
            className="ui-radius hidden min-h-11 items-center justify-center bg-brand px-4 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90 lg:inline-flex"
          >
            Contact
          </Link>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ui-radius grid min-h-11 min-w-11 shrink-0 place-items-center border border-border text-foreground lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-5" aria-label="Mobile">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `ui-radius min-h-11 px-3 py-2.5 text-sm transition-colors ${
                    isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center gap-2 sm:hidden">
              <ThemeSwitcher compact />
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="ui-radius mt-2 inline-flex min-h-11 w-full items-center justify-center bg-brand px-4 text-sm font-semibold text-brand-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
