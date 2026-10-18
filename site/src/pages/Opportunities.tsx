import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  POSITIONS,
  SELECTION,
  RECRUITMENT_POOL,
  COHORT_ALLOCATION,
  TRAINING,
  type Position,
} from '../data/positions'
import { PILLARS, STREAMS } from '../data/programme'
import { Eyebrow, Section, SectionHead, Card, PageHero, Tag, BrandLink } from '../components/ui'
import { FilterPanel, FilterGroup } from '../components/Filters'
import DataTable from '../components/DataTable'
import SchemeComparison from '../components/SchemeComparison'

type Filter = 'All' | 'Postdoc' | 'PhD'

function PositionCard({ p }: { p: Position }) {
  return (
    <Link
      to={`/opportunities/${p.code}`}
      className="ui-card ui-card-hover group flex min-w-0 flex-col p-4 sm:p-5"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="ui-eyebrow truncate text-[10px]">{p.code}</span>
        <span className="ui-meta shrink-0">
          {p.type === 'PhD' ? 'PhD' : 'Postdoc'}, Pillar {p.pillar}
        </span>
      </div>

      <h3 className="ui-card-title mt-2.5 text-balance">{p.title}</h3>
      <p className="ui-body-sm ui-clamp-3 mt-2 flex-1">{p.focus}</p>

      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
        {p.streams.map((st) => (
          <Tag key={st} tone="primary">
            {st}
          </Tag>
        ))}
        {p.agencies.slice(0, 2).map((a) => (
          <Tag key={a}>{a}</Tag>
        ))}
        {p.agencies.length > 2 && <Tag>+{p.agencies.length - 2}</Tag>}
      </div>

      <span className="ui-meta mt-3.5 flex items-center gap-1.5 border-t border-border pt-3 text-primary">
        Full advertisement
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

export default function Opportunities() {
  const [params, setParams] = useSearchParams()
  const [type, setType] = useState<Filter>('All')
  const [shown_, setShown_] = useState(12)
  const pillar = params.get('pillar') ?? 'All'
  const stream = params.get('stream') ?? 'All'

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value === 'All') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const matches = useMemo(
    () =>
      POSITIONS.filter(
        (p) =>
          (type === 'All' || p.type === type) &&
          (pillar === 'All' || p.pillar === pillar) &&
          (stream === 'All' || p.streams.includes(stream as never)),
      ),
    [type, pillar, stream],
  )
  const shown = matches.slice(0, shown_)

  const nPhd = POSITIONS.filter((p) => p.type === 'PhD').length
  const nPostdoc = POSITIONS.filter((p) => p.type === 'Postdoc').length

  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Thirty funded positions"
        lead="The cluster will fund fifteen postdoctoral researchers and fifteen PhD candidates. Every PhD candidate registers at Bayero University, Kano, and every postdoctoral researcher is employed by one of the four Nigerian universities in the joint venture. Each of the thirty spends three months at a university in the United Kingdom."
      >
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
          <div className="border-t-2 border-primary pt-3">
            <Eyebrow tone="primary">Postdoctoral fellowships</Eyebrow>
            <p className="ui-figure mt-1">
              15 <span className="ui-body-sm font-normal">positions</span>
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {nPostdoc} topics advertised, each at least 24 months from Month 6
            </p>
          </div>
          <div className="border-t-2 border-primary pt-3">
            <Eyebrow tone="primary">PhD studentships</Eyebrow>
            <p className="ui-figure mt-1">
              15 <span className="ui-body-sm font-normal">positions</span>
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {nPhd} topics advertised, with a stipend from Month 9 to Month 36
            </p>
          </div>
        </div>
      </PageHero>

      {/* Status notice */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-5">
          <div className="flex flex-col gap-2 border-l-2 border-primary/60 pl-4 sm:pl-5">
            <Eyebrow tone="primary">Not yet open</Eyebrow>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
              These positions depend on the award of the Cluster E contract. We will publish the open
              call within one month of signing it. If you tell us you are interested, we will let you
              know when applications open.
            </p>
          </div>
        </div>
      </section>

      {/* Terms, side by side */}
      <Section bordered={false}>
        <SectionHead
          eyebrow="What is offered"
          title="The two schemes"
          lead="Only researchers paid from the contract count towards the thirty. Anyone funded elsewhere who joins the cluster is reported separately."
        />
        <SchemeComparison />
      </Section>

      {/* The advertisements */}
      <Section id="positions">
        <SectionHead
          eyebrow="Advertised topics"
          title="Every advertised topic"
          lead="Each pillar takes five PhD candidates and five postdoctoral researchers. We advertise more topics than there are positions, so that the strongest applicants and the priorities of the agencies decide the final thirty."
        />

        <div className="mt-7 sm:mt-8">
          <FilterPanel>
            <FilterGroup
              label="Type"
              value={type}
              onChange={(v) => {
                setType(v)
                setShown_(12)
              }}
              options={[
                { value: 'All', label: 'All positions', short: 'All' },
                { value: 'Postdoc', label: 'Postdoctoral', short: 'Postdoc' },
                { value: 'PhD', label: 'PhD studentships', short: 'PhD' },
              ]}
            />
            <FilterGroup
              label="Pillar"
              value={pillar}
              onChange={(v) => {
                setParam('pillar', v)
                setShown_(12)
              }}
              options={[
                { value: 'All', label: 'All pillars', short: 'All' },
                ...PILLARS.map((pl) => ({
                  value: pl.id as string,
                  label: `${pl.id}. ${pl.name}`,
                  short: pl.id,
                })),
              ]}
            />
            <FilterGroup
              label="Stream"
              value={stream}
              onChange={(v) => {
                setParam('stream', v)
                setShown_(12)
              }}
              options={[
                { value: 'All', label: 'All streams', short: 'All' },
                ...STREAMS.map((st) => ({ value: st.id as string, label: st.id })),
              ]}
            />
          </FilterPanel>
        </div>

        <p className="ui-meta mt-5">
          {matches.length} {matches.length === 1 ? 'position' : 'positions'}
          {matches.length > shown.length ? `, showing ${shown.length}` : ''}
        </p>

        <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <PositionCard key={p.code} p={p} />
          ))}
        </div>
        {matches.length > shown.length && (
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => setShown_((n) => n + 12)}
              className="ui-radius inline-flex min-h-11 items-center justify-center border border-border bg-background/40 px-6 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Show {Math.min(12, matches.length - shown.length)} more
            </button>
          </div>
        )}

        {matches.length === 0 && (
          <p className="ui-body mt-6">No positions match that combination. Clear a filter to see more.</p>
        )}
      </Section>

      {/* How to apply */}
      <Section id="how-to-apply">
        <SectionHead eyebrow="Process" title="How to apply" />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Card>
            <ol className="space-y-5">
              {SELECTION.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="mt-0.5 w-7 shrink-0 font-mono text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">{s}</p>
                </li>
              ))}
            </ol>
            <div className="mt-7 border-t border-border pt-5">
              <p className="text-sm leading-6 text-muted-foreground">
                Questions before the call opens are welcome.
              </p>
              <div className="mt-5">
                <BrandLink to="/contact">Register your interest</BrandLink>
              </div>
            </div>
          </Card>

          <div className="space-y-4 sm:space-y-5">
            <Card>
              <Eyebrow tone="primary">Where we recruit</Eyebrow>
              <p className="ui-body-sm mt-3">
                We recruit through research communities that members of this consortium helped to
                build.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {RECRUITMENT_POOL.map((r) => (
                  <Tag key={r} tone="primary">
                    {r}
                  </Tag>
                ))}
              </div>
              <p className="ui-body-sm mt-4">
                The cluster also engages research associates and annotators. We encourage the strongest
                of them to apply for PhD places in later years.
              </p>
            </Card>
            <Card>
              <Eyebrow tone="primary">If a place falls vacant</Eyebrow>
              <p className="ui-body-sm mt-3">
                Each panel keeps a ranked reserve list for every topic. If a researcher leaves, we offer
                the position to the next candidate within two months, so that the cluster stays at
                fifteen and fifteen. If a postdoctoral position falls vacant after Month 24, we extend
                an existing fellowship on the same topic instead.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Allocation table */}
      <Section>
        <SectionHead
          eyebrow="Where the thirty sit"
          title="How the thirty are shared"
          lead="Each position is recorded in the cohort register with four facts: its numbered topic, its host institution, how long it runs and what it must produce."
        />
        <div className="mt-7 sm:mt-10">
          <DataTable
            rows={COHORT_ALLOCATION}
            rowKey={(r) => r.institution}
            columns={[
              { key: 'i', head: 'Institution', primary: true, cell: (r) => r.institution, className: 'font-semibold' },
              { key: 'r', head: 'Role', cell: (r) => <span className="text-muted-foreground">{r.role}</span> },
              { key: 'p', head: 'Postdocs', cell: (r) => <span className="font-bold text-primary">{r.postdocs}</span> },
              { key: 'd', head: 'PhDs', cell: (r) => <span className="font-bold text-primary">{r.phds}</span> },
              { key: 's', head: 'Streams', cell: (r) => <span className="ui-meta">{r.streams}</span> },
            ]}
          />
        </div>
      </Section>

      {/* Development */}
      <Section>
        <SectionHead
          eyebrow="What the three years look like"
          title="What the three years look like"
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TRAINING.map((t) => (
            <Card key={t.name} hover>
              <Eyebrow tone="primary">{t.when}</Eyebrow>
              <h3 className="ui-card-title mt-3">{t.name}</h3>
              <p className="ui-body-sm mt-3">{t.detail}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
