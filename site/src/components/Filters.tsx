import type { ReactNode } from 'react'

/**
 * Filters are a wrapping row of pills from sm upwards, and native selects
 * on a phone. Three pill rows cost six wrapped lines at 375px before any
 * content appears; three selects cost one.
 */
export function FilterPanel({ children }: { children: ReactNode }) {
  return (
    <div className="ui-card flex flex-col gap-3 p-3 sm:gap-4 sm:p-4">{children}</div>
  )
}

export function FilterGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string; short?: string }[]
  onChange: (v: T) => void
}) {
  return (
    <div>
      {/* Phone: one select per group. */}
      <label className="block sm:hidden">
        <span className="ui-eyebrow ui-eyebrow-muted mb-1.5 block text-[10px]">{label}</span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          className="ui-radius min-h-11 w-full appearance-none border border-border bg-card px-3 pr-9 text-sm outline-none focus:border-primary/50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23889' stroke-width='2' stroke-linecap='round'><path d='m6 9 6 6 6-6'/></svg>\")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
          }}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      {/* sm and up: pills. */}
      <div className="hidden flex-wrap items-center gap-2 sm:flex">
        <span className="ui-eyebrow ui-eyebrow-muted mr-1 text-[10px]">{label}</span>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`min-h-10 rounded-full border px-3.5 text-[13px] transition-colors sm:min-h-11 sm:px-4 sm:text-sm ${
              value === o.value
                ? 'border-primary/50 bg-primary/10 text-foreground'
                : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            <span className="lg:hidden">{o.short ?? o.label}</span>
            <span className="hidden lg:inline">{o.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
