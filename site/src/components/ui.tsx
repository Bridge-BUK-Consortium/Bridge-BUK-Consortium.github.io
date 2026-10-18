import { Link } from 'react-router-dom'
import type { CSSProperties, ReactNode } from 'react'

/* Eyebrow: the most repeated element in the system. Monospace, uppercase,
   11px, wide tracking. Tracking scales with importance. */
export function Eyebrow({
  children,
  tone = 'muted',
  className = '',
}: {
  children: ReactNode
  tone?: 'muted' | 'primary'
  className?: string
}) {
  return (
    <p className={`ui-eyebrow ${tone === 'primary' ? '' : 'ui-eyebrow-muted'} ${className}`}>
      {children}
    </p>
  )
}

export function Section({
  children,
  id,
  bordered = true,
  className = '',
}: {
  children: ReactNode
  id?: string
  bordered?: boolean
  className?: string
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-5 sm:py-14 md:py-20 ${
        bordered ? 'border-t border-border' : ''
      } ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  action,
  lead,
}: {
  eyebrow?: string
  title: string
  action?: ReactNode
  lead?: string
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <Eyebrow tone="primary">{eyebrow}</Eyebrow>}
        <h2 className="ui-title mt-2.5 max-w-3xl font-bold text-balance">{title}</h2>
        {lead && <p className="ui-body mt-4">{lead}</p>}
      </div>
      {action}
    </div>
  )
}

export function Card({
  children,
  className = '',
  hover = false,
  style,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}) {
  return (
    <div
      className={`ui-card p-5 sm:p-6 ${hover ? 'group ui-card-hover' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export function Row({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`ui-card px-4 py-3.5 sm:py-4 ${className}`}>
      {children}
    </div>
  )
}

const BTN = 'ui-radius inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-semibold transition-colors'

export function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={`${BTN} bg-primary text-primary-foreground hover:bg-primary/90`}>
      {children}
      <Arrow />
    </Link>
  )
}

export function BrandLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className={`${BTN} bg-brand text-brand-foreground hover:bg-brand/90`}
    >
      {children}
    </Link>
  )
}

export function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={`${BTN} border border-border bg-background/40 hover:bg-secondary`}>
      {children}
    </Link>
  )
}

export function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function Tag({ children, tone = 'border' }: { children: ReactNode; tone?: 'border' | 'primary' }) {
  return (
    <span
      className={`ui-eyebrow mr-2 text-[10px] ${
        tone === 'primary' ? 'text-primary' : 'text-muted-foreground'
      }`}
    >
      {children}
    </span>
  )
}

/* The page hero: an inverted band with the eyebrow, title and lead. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string
  title: string
  lead?: string
  children?: ReactNode
}) {
  return (
    <section className="ui-invert relative overflow-hidden border-b border-border">
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-14 md:py-24">
        <Eyebrow tone="primary">{eyebrow}</Eyebrow>
        <h1 className="ui-display mt-3 max-w-4xl font-bold text-balance sm:mt-4">{title}</h1>
        {lead && <p className="ui-lead mt-4 sm:mt-5">{lead}</p>}
        {children}
      </div>
    </section>
  )
}
