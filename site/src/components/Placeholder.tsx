import { Link } from 'react-router-dom'
import { byId } from '../data/placeholders'
import type { ReactNode } from 'react'

/**
 * Marks content that is not sourced from the proposal. Deliberately
 * visible: an unverified eligibility rule or contact address is worse
 * unmarked than ugly.
 */
export default function Placeholder({
  id,
  children,
  block = false,
}: {
  id: string
  children: ReactNode
  block?: boolean
}) {
  const item = byId(id)
  if (!item) return <>{children}</>

  return (
    <span
      className={`relative rounded-md border border-dashed border-brand/60 bg-brand/[0.07] ${
        block ? 'block p-3 sm:p-4' : 'inline-block px-2 py-1'
      }`}
    >
      {children}
      <Link
        to="/review"
        title={`${item.label}: ${item.needed}`}
        className="ui-eyebrow mt-2 inline-flex items-center gap-1.5 rounded-full border border-brand/60 bg-brand/10 px-2 py-0.5 text-[9px] text-brand hover:bg-brand/20"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="h-3 w-3"
          aria-hidden="true"
        >
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        </svg>
        Placeholder, to be confirmed
      </Link>
    </span>
  )
}
