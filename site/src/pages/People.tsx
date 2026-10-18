import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PEOPLE, type Person } from '../data/people'
import PersonModal from '../components/PersonModal'
import { Section, PageHero, Card } from '../components/ui'
import { FilterPanel, FilterGroup } from '../components/Filters'

const GROUPS = ['All', 'Key Expert', 'Professorial Lead', 'Non-Key Expert', 'UK Professorial Lead'] as const

const initials = (name: string) =>
  name
    .replace(/^(Dr\.|Prof\.|Assoc\. Prof\.|Mrs\.|Mr\.|Ms\.)\s+/, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

function PersonCard({ p, onOpen }: { p: Person; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="ui-card ui-card-hover group flex w-full min-w-0 flex-col overflow-hidden p-4 text-left sm:p-5"
      aria-label={`${p.name} — full profile`}
    >
      <div className="flex w-full min-w-0 items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-background/60 font-mono text-xs text-primary sm:h-12 sm:w-12 sm:text-sm">
          {initials(p.name)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="ui-card-title ui-clamp-2 block">{p.name}</span>
          <span className="ui-meta mt-0.5 block truncate">{p.institution}</span>
        </span>
      </div>

      <p className="ui-eyebrow mt-4 text-[10px]">{p.title}</p>
      <p className="ui-body-sm mt-2 flex-1">{p.summary}</p>

      <span className="mt-4 flex w-full items-center justify-between border-t border-border pt-3">
        <span className="ui-meta">{p.code}</span>
        {/* Visible by default on touch, where there is no hover to reveal it. */}
        <span className="flex items-center gap-1.5 text-xs font-semibold text-primary transition-opacity lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
          Full profile
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </span>
    </button>
  )
}

export default function People() {
  const [group, setGroup] = useState<(typeof GROUPS)[number]>('All')
  const [params, setParams] = useSearchParams()
  const [selected, setSelected] = useState<Person | null>(null)
  const q = params.get('q') ?? ''

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return PEOPLE.filter(
      (p) =>
        (group === 'All' || p.group === group) &&
        (!needle ||
          `${p.name} ${p.institution} ${p.title} ${p.summary} ${p.code}`
            .toLowerCase()
            .includes(needle)),
    )
  }, [group, q])

  const setQ = (v: string) => {
    const next = new URLSearchParams(params)
    if (v) next.set('q', v)
    else next.delete('q')
    setParams(next, { replace: true })
  }

  return (
    <>
      <PageHero
        eyebrow="People"
        title="The team"
        lead="Five Key Experts, a Professorial Lead and fifteen Non-Key Experts across six universities — plus the thirty researchers the cluster recruits."
      />

      <Section bordered={false}>
        <FilterPanel>
          <FilterGroup
            label="Group"
            value={group}
            onChange={(v) => setGroup(v as (typeof GROUPS)[number])}
            options={GROUPS.map((g) => ({
              value: g as string,
              label: g === 'All' ? 'Everyone' : g + 's',
              short: g === 'All' ? 'All' : g.replace('Professorial Lead', 'Prof. Lead') + 's',
            }))}
          />
          <label className="relative block">
            <span className="sr-only">Search people by name</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name"
              className="ui-radius min-h-11 w-full border border-border bg-background/40 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 sm:max-w-xs"
            />
          </label>
        </FilterPanel>

        <p className="ui-meta mt-4">
          {shown.length} {shown.length === 1 ? 'member' : 'members'}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {shown.map((p) => (
            <PersonCard key={p.code} p={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {shown.length === 0 && <p className="ui-body mt-6">No one matches that search.</p>}
      </Section>

      <Section>
        <p className="ui-eyebrow">The cohort</p>
        <h2 className="ui-title mt-3">The cohort</h2>
        <div className="mt-7 grid gap-4 sm:gap-5 md:grid-cols-3">
          {[
            ['15 + 15', 'Postdocs and PhD candidates, each on a numbered topic and a named policy output.'],
            ['9 professors', 'Primary supervisors for nine PhDs, co-supervisors for thirteen, mentors for twelve postdocs.'],
            ['Support', 'Annotators and enumerators from HausaNLP and the Arewa Data Science Academy, trained under the child protection and SEA/SH protocols.'],
          ].map(([h, b]) => (
            <Card key={h} hover>
              <h3 className="ui-figure">{h}</h3>
              <p className="ui-body-sm mt-2">{b}</p>
            </Card>
          ))}
        </div>
      </Section>

      <PersonModal person={selected} onClose={() => setSelected(null)} />
    </>
  )
}
