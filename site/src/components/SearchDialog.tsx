import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { search, type Hit } from '../search'

export function useSearchHotkey(open: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typingInField =
        e.target instanceof HTMLElement &&
        /^(input|textarea|select)$/i.test(e.target.tagName)
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typingInField)) {
        e.preventDefault()
        open()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])
}

export default function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const hits = useMemo(() => search(q), [q])

  useEffect(() => {
    if (open) {
      setQ('')
      setActive(0)
      // Wait for the dialog to mount before taking focus.
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => setActive(0), [q])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const go = (hit: Hit) => {
    navigate(hit.to)
    onClose()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, hits.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && hits[active]) {
      e.preventDefault()
      go(hits[active])
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 py-[10vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search the site"
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="ui-card relative flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search positions, people, streams, deliverables…"
            aria-label="Search"
            className="min-h-11 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <kbd className="ui-radius hidden shrink-0 border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground sm:block">
            Esc
          </kbd>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {q.length < 2 && (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Try a topic code like <span className="text-primary">A-P1</span>, an agency like{' '}
              <span className="text-primary">NDPC</span>, or a word like{' '}
              <span className="text-primary">deepfake</span>.
            </p>
          )}
          {q.length >= 2 && hits.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Nothing matches “{q}”.
            </p>
          )}
          <ul>
            {hits.map((h, i) => (
              <li key={`${h.kind}-${h.id}`}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(h)}
                  className={`flex w-full items-start gap-3 border-b border-border/60 px-4 py-3 text-left transition-colors ${
                    i === active ? 'bg-primary/10' : 'hover:bg-secondary'
                  }`}
                >
                  <span className="ui-eyebrow mt-1 w-20 shrink-0 text-[10px] ui-eyebrow-muted">
                    {h.kind}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{h.title}</span>
                    <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                      {h.subtitle}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {hits.length > 0 && (
          <div className="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
            <span>
              {hits.length} result{hits.length === 1 ? '' : 's'}
            </span>
            <span className="hidden sm:inline">Arrow keys to move, Enter to open</span>
          </div>
        )}
      </div>
    </div>
  )
}
