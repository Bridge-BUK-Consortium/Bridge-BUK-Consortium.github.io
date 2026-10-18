import { TERMS } from '../data/positions'

/**
 * The two schemes share every attribute, so they are shown against each
 * other rather than as two independent lists: one row per attribute,
 * both answers side by side. Reading down a column gives one scheme;
 * reading across a row answers "how do these differ?" — which is the
 * question an applicant actually has.
 */

const ROWS: { label: string; key: keyof typeof TERMS.PhD }[] = [
  { label: 'Where you are based', key: 'registration' },
  { label: 'How long', key: 'duration' },
  { label: 'What is funded', key: 'funding' },
  { label: 'UK research stay', key: 'ukStay' },
  { label: 'Supervision', key: 'supervision' },
  { label: 'What you produce', key: 'outputs' },
  { label: 'Recruitment closes', key: 'recruitment' },
]

function SchemeHead({ which }: { which: 'Postdoc' | 'PhD' }) {
  const t = TERMS[which]
  return (
    <div className="ui-card flex items-baseline gap-3 p-4 sm:flex-col sm:gap-1 sm:p-5">
      <span className="ui-figure">{t.places}</span>
      <span className="min-w-0">
        <span className="ui-card-title block">{t.label}s</span>
        <span className="ui-meta mt-0.5 block">{t.topics} topics advertised</span>
      </span>
    </div>
  )
}

function Chip({ which }: { which: 'Postdoc' | 'PhD' }) {
  return (
    <span
      className={`ui-eyebrow inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] ${
        which === 'Postdoc'
          ? 'border-primary/50 bg-primary/10 text-primary'
          : 'border-accent/50 bg-accent/10 text-accent'
      }`}
    >
      {which === 'Postdoc' ? 'Postdoc' : 'PhD'}
    </span>
  )
}

export default function SchemeComparison() {
  return (
    <div className="mt-7 sm:mt-10">
      {/* Scheme headers. On md and up these sit above their own columns. */}
      <div className="grid gap-3 sm:gap-4 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="hidden md:block" aria-hidden="true" />
        <SchemeHead which="Postdoc" />
        <SchemeHead which="PhD" />
      </div>

      {/* One row per attribute. */}
      <dl className="mt-3 sm:mt-4">
        {ROWS.map(({ label, key }, i) => (
          <div
            key={label}
            className={`grid gap-x-6 gap-y-2 py-5 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-baseline md:py-6 ${
              i > 0 ? 'border-t border-border' : ''
            }`}
          >
            <dt className="ui-card-title text-balance md:text-base">{label}</dt>

            <dd className="flex gap-3 md:block">
              <span className="md:hidden">
                <Chip which="Postdoc" />
              </span>
              <span className="ui-body-sm min-w-0">{TERMS.Postdoc[key]}</span>
            </dd>

            <dd className="flex gap-3 md:block">
              <span className="md:hidden">
                <Chip which="PhD" />
              </span>
              <span className="ui-body-sm min-w-0">{TERMS.PhD[key]}</span>
            </dd>
          </div>
        ))}
      </dl>

      {/* Eligibility differs enough to deserve its own block. */}
      <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
        {(['Postdoc', 'PhD'] as const).map((which) => (
          <div key={which} className="ui-card p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Chip which={which} />
              <h3 className="ui-card-title">Who can apply</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {TERMS[which].eligibility.map((e) => (
                <li key={e} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-3.5 w-3.5 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="ui-body-sm">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
