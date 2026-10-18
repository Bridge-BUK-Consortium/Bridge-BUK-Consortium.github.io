import { Link } from 'react-router-dom'
import { UNVERIFIED, REVIEW_NOTE } from '../data/placeholders'

/** Sitewide band. Disappears on its own once UNVERIFIED is emptied. */
export default function ReviewNotice() {
  if (UNVERIFIED.length === 0) return null
  return (
    <div className="border-b border-brand/40 bg-brand/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p className="ui-body-sm text-foreground">
          <span className="ui-eyebrow mr-2 text-brand">For the authors</span>
          {REVIEW_NOTE}
        </p>
        <Link
          to="/review"
          className="ui-radius inline-flex min-h-9 shrink-0 items-center justify-center border border-brand/60 px-3 text-xs font-semibold transition-colors hover:bg-brand/20"
        >
          {UNVERIFIED.length} items to settle
        </Link>
      </div>
    </div>
  )
}
