import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  POSITIONS,
  TERMS,
  SELECTION,
  RECRUITMENT_POOL,
  COHORT_ALLOCATION,
  TRAINING,
  ukHost,
  type Position,
} from '../data/positions'
import { PILLARS, STREAMS } from '../data/programme'
import { Eyebrow, Section, SectionHead, Card, PageHero, Tag, BrandLink, Arrow } from '../components/ui'

type Filter = 'All' | 'Postdoc' | 'PhD'

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-10 rounded-full border px-3.5 text-[13px] transition-colors sm:min-h-11 sm:px-4 sm:text-sm ${
        active
          ? 'border-primary/50 bg-primary/10 text-foreground'
          : 'border-border text-muted-foreground hover:bg-secondary hover:text-foreground'
      }`}
    >
      {children}
    </button>
  )
}

function PositionCard({ p }: { p: Position }) {
  return (
    <article className="flex min-w-0 flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/45 hover:glow-ring">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
          {p.code} · {p.type === 'PhD' ? 'PhD studentship' : 'Postdoctoral fellowship'}
        </span>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          Pillar {p.pillar}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold leading-snug">{p.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{p.focus}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.streams.map((s) => (
          <Tag key={s} tone="primary">
            {s}
          </Tag>
        ))}
        {p.agencies.slice(0, 3).map((a) => (
          <Tag key={a}>{a}</Tag>
        ))}
        {p.agencies.length > 3 && <Tag>+{p.agencies.length - 3}</Tag>}
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          UK research stay
        </p>
        <p className="mt-1 text-xs leading-5">{ukHost(p.streams)}</p>
      </div>

      <Link
        to={`/opportunities/${p.code}`}
        className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-4 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        Read the full advertisement
        <Arrow />
      </Link>
    </article>
  )
}

export default function Opportunities() {
  const [params, setParams] = useSearchParams()
  const [type, setType] = useState<Filter>('All')
  const pillar = params.get('pillar') ?? 'All'
  const stream = params.get('stream') ?? 'All'

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value === 'All') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const shown = useMemo(
    () =>
      POSITIONS.filter(
        (p) =>
          (type === 'All' || p.type === type) &&
          (pillar === 'All' || p.pillar === pillar) &&
          (stream === 'All' || p.streams.includes(stream as never)),
      ),
    [type, pillar, stream],
  )

  const nPhd = POSITIONS.filter((p) => p.type === 'PhD').length
  const nPostdoc = POSITIONS.filter((p) => p.type === 'Postdoc').length

  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Fifteen postdoctoral fellowships and fifteen PhD studentships"
        lead="Thirty funded researchers. PhDs registered at Bayero University, Kano, postdocs employed by the four Nigerian universities, and a funded three-month stay in the UK for every one of them."
      >
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
          <div className="rounded-lg border border-primary/40 bg-primary/[0.06] px-4 py-3.5">
            <Eyebrow tone="primary">Postdoctoral fellowships</Eyebrow>
            <p className="mt-1 text-2xl font-bold">
              15 <span className="text-sm font-normal text-muted-foreground">places</span>
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {nPostdoc} topics advertised · at least 24 months from Month 6
            </p>
          </div>
          <div className="rounded-lg border border-primary/40 bg-primary/[0.06] px-4 py-3.5">
            <Eyebrow tone="primary">PhD studentships</Eyebrow>
            <p className="mt-1 text-2xl font-bold">
              15 <span className="text-sm font-normal text-muted-foreground">places</span>
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
          title="Terms of the two schemes"
          lead="Only funded participants count towards the thirty."
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
          {(['Postdoc', 'PhD'] as const).map((k) => {
            const t = TERMS[k]
            return (
              <Card key={k} hover>
                <Eyebrow tone="primary">{t.label}</Eyebrow>
                <p className="mt-3 text-3xl font-bold">
                  {t.places}{' '}
                  <span className="text-sm font-normal text-muted-foreground">
                    places · {t.topics} topics advertised
                  </span>
                </p>
                <dl className="mt-6 space-y-4">
                  {[
                    ['Employment and registration', t.registration],
                    ['Duration', t.duration],
                    ['Funding and support', t.funding],
                    ['UK research stay', t.ukStay],
                    ['Supervision and mentoring', t.supervision],
                    ['Expected outputs', t.outputs],
                    ['Recruitment timetable', t.recruitment],
                  ].map(([label, body]) => (
                    <div key={label}>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6">{body}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Eligibility
                    </dt>
                    <dd className="mt-2">
                      <ul className="space-y-2">
                        {t.eligibility.map((e) => (
                          <li key={e} className="flex gap-2.5 text-sm leading-6">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{e}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* The advertisements */}
      <Section id="positions">
        <SectionHead
          eyebrow="Advertised topics"
          title="Every position, by pillar and stream"
          lead="Five PhDs and five postdocs per pillar. The pool is wider than the places on purpose."
        />

        <div className="mt-7 space-y-3 sm:mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Type
            </span>
            {(['All', 'Postdoc', 'PhD'] as const).map((t) => (
              <Pill key={t} active={type === t} onClick={() => setType(t)}>
                {t === 'All' ? 'All positions' : t === 'PhD' ? 'PhD studentships' : 'Postdoctoral'}
              </Pill>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Pillar
            </span>
            <Pill active={pillar === 'All'} onClick={() => setParam('pillar', 'All')}>
              All pillars
            </Pill>
            {PILLARS.map((p) => (
              <Pill key={p.id} active={pillar === p.id} onClick={() => setParam('pillar', p.id)}>
                {p.id}. {p.name}
              </Pill>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Stream
            </span>
            <Pill active={stream === 'All'} onClick={() => setParam('stream', 'All')}>
              All streams
            </Pill>
            {STREAMS.map((s) => (
              <Pill key={s.id} active={stream === s.id} onClick={() => setParam('stream', s.id)}>
                {s.id}
              </Pill>
            ))}
          </div>
        </div>

        <p className="mt-5 font-mono text-xs text-muted-foreground">
          {shown.length} {shown.length === 1 ? 'position' : 'positions'}
        </p>

        <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <PositionCard key={p.code} p={p} />
          ))}
        </div>
        {shown.length === 0 && (
          <p className="mt-6 text-sm text-muted-foreground">
            No positions match that combination. Clear a filter to see more.
          </p>
        )}
      </Section>

      {/* How to apply */}
      <Section id="how-to-apply">
        <SectionHead eyebrow="Process" title="How to apply, and how we select" />
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
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Communities the consortium helped build.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {RECRUITMENT_POOL.map((r) => (
                  <Tag key={r} tone="primary">
                    {r}
                  </Tag>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Research associates and annotators are also engaged, and encouraged to apply for later
                PhD places.
              </p>
            </Card>
            <Card>
              <Eyebrow tone="primary">If a place falls vacant</Eyebrow>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
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
          title="Allocation by institution"
          lead="Each post is fixed by four facts in the cohort register: topic, host, duration, outputs."
        />
        <div className="mt-7 overflow-x-auto sm:mt-10">
          <table className="w-full min-w-[42rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                {['Institution', 'Role', 'Postdocs', 'PhD candidates', 'Primary streams'].map((h) => (
                  <th
                    key={h}
                    className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COHORT_ALLOCATION.map((r) => (
                <tr key={r.institution} className="border-b border-border">
                  <td className="px-3 py-3.5 font-semibold leading-6">{r.institution}</td>
                  <td className="px-3 py-3.5 leading-6 text-muted-foreground">{r.role}</td>
                  <td className="px-3 py-3.5 font-mono text-primary">{r.postdocs}</td>
                  <td className="px-3 py-3.5 font-mono text-primary">{r.phds}</td>
                  <td className="px-3 py-3.5 font-mono text-xs text-muted-foreground">{r.streams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Development */}
      <Section>
        <SectionHead
          eyebrow="What the three years look like"
          title="Academic development for the cohort"
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TRAINING.map((t) => (
            <Card key={t.name} hover>
              <Eyebrow tone="primary">{t.when}</Eyebrow>
              <h3 className="mt-3 text-base font-bold">{t.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.detail}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
