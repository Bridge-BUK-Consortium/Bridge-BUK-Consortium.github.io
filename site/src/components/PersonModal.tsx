import Avatar from './Avatar'
import { useEffect, useRef } from 'react'
import type { Person } from '../data/people'

export default function PersonModal({
  person,
  onClose,
}: {
  person: Person | null
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!person) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [person, onClose])

  if (!person) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="person-modal-name"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="ui-card ui-overlay relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-b-none shadow-2xl sm:rounded-b-[inherit]">
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
          <div className="flex min-w-0 items-start gap-4">
            <Avatar person={person} size="lg" />
            <div className="min-w-0">
            <p className="ui-eyebrow">
              {person.group}
            </p>
            <h2 id="person-modal-name" className="mt-2 text-xl font-bold sm:text-2xl">
              {person.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{person.institution}</p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ui-radius grid min-h-10 min-w-10 shrink-0 place-items-center border border-border transition-colors hover:bg-secondary"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          <p className="ui-eyebrow">Role</p>
          <p className="mt-2 text-sm font-semibold text-primary">{person.title}</p>
          <p className="ui-prose mt-3 text-sm text-muted-foreground">{person.role}</p>

          {person.bio && (
            <>
              <p className="ui-eyebrow mt-6">Background</p>
              <p className="ui-prose mt-2 text-sm text-muted-foreground">{person.bio}</p>
            </>
          )}

          {person.months != null && (
            <>
              <p className="ui-eyebrow mt-6">Time on the assignment</p>
              <p className="mt-2 text-sm">
                <span className="text-2xl font-bold text-primary">{person.months}</span>{' '}
                <span className="text-muted-foreground">
                  of 36 person-months, about {Math.round((person.months / 36) * 100)} percent
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
