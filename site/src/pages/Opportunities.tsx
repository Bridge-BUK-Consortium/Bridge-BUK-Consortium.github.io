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
          {p.type === 'PhD' ? 'PhD' : 'Postdoc'} · {p.pillar}
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
        lead="Thirty funded researchers. PhDs registered at Bayero University, Kano, postdocs employed by the four Nigerian universities, and a funded three-month stay in the UK for every one of them."
      >
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
          <div className="rounded-lg border border-primary/40 bg-primary/[0.06] px-4 py-3.5">
            <Eyebrow tone="primary">Postdoctoral fellowships</Eyebrow>
            <p className="ui-figure mt-1">
              15 <span className="ui-body-sm font-normal">places</span>
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {nPostdoc} topics advertised · at least 24 months from Month 6
            </p>
          </div>
          <div className="rounded-lg border border-primary/40 bg-primary/[0.06] px-4 py-3.5">
            <Eyebrow tone="primary">PhD studentships</Eyebrow>
            <p className="ui-figure mt-1">
              15 <span className="ui-body-sm font-normal">places</span>
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {nPhd} topics advertised · stipend from Month 9 to Month 36
            </p>
          </div>
        </div>
      </PageHero>

      {/* Status notice */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-5">
          <div className="flex flex-col gap-2 border-l-2 border-primary/60 pl-4 sm:pl-5">
            <Eyebrow tone="primary">Status · not yet open</Eyebrow>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
              Advertised in advance, subject to contract award. The call opens within a month of
              signature. Register interest and we will tell you when.
            </p>
          </div>
        </div>
      </section>

      {/* Terms, side by side */}
      <Section bordered={false}>
        <SectionHead
          eyebrow="What is offered"
          title="Two schemes, thirty places"
          lead="Only funded participants count towards the thirty."
        />
        <SchemeComparison />
      </Section>

      {/* The advertisements */}
      <Section id="positions">
        <SectionHead
          eyebrow="Advertised topics"
          title="Every advertised topic"
          lead="Five PhDs and five postdocs per pillar. The pool is wider than the places on purpose."
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
          {matches.length > shown.length ? ` · showing ${shown.length}` : ''}
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
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/50 bg-primary/10 font-mono text-[11px] text-primary">
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
                Communities the consortium helped build.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {RECRUITMENT_POOL.map((r) => (
                  <Tag key={r} tone="primary">
                    {r}
                  </Tag>
                ))}
              </div>
              <p className="ui-body-sm mt-4">
                Research associates and annotators are also engaged, and encouraged to apply for later
                PhD places.
              </p>
            </Card>
            <Card>
              <Eyebrow tone="primary">If a place falls vacant</Eyebrow>
              <p className="ui-body-sm mt-3">
                A ranked reserve list per topic fills any place within two months. After Month 24, an
                existing fellowship is extended instead.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Allocation table */}
      <Section>
        <SectionHead
          eyebrow="Where the thirty sit"
          title="Where the thirty sit"
          lead="Each post is fixed by four facts in the cohort register: topic, host, duration, outputs."
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
          title="The three years"
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
