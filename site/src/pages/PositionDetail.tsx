import { Link, useParams } from 'react-router-dom'
import { POSITIONS, TERMS, SELECTION, ukHost } from '../data/positions'
import { PILLARS, STREAMS } from '../data/programme'
import { PEOPLE } from '../data/people'
import { Eyebrow, Section, Card, Tag, BrandLink, GhostLink } from '../components/ui'
import Placeholder from '../components/Placeholder'

export default function PositionDetail() {
  const { code } = useParams()
  const p = POSITIONS.find((x) => x.code.toLowerCase() === (code ?? '').toLowerCase())

  if (!p) {
    return (
      <Section bordered={false}>
        <h1 className="text-2xl font-bold">Position not found</h1>
        <p className="mt-3 text-muted-foreground">
          No advertised topic carries the code “{code}”.
        </p>
        <div className="mt-6">
          <GhostLink to="/opportunities">All positions</GhostLink>
        </div>
      </Section>
    )
  }

  const t = TERMS[p.type === 'PhD' ? 'PhD' : 'Postdoc']
  const pillar = PILLARS.find((x) => x.id === p.pillar)!
  const streams = STREAMS.filter((s) => p.streams.includes(s.id))
  const lead = PEOPLE.find((x) => x.code === pillar.leadCode)
  const siblings = POSITIONS.filter((x) => x.pillar === p.pillar && x.code !== p.code && x.type === p.type)

  const facts: [string, string][] = [
    ['Position', p.type === 'PhD' ? 'PhD studentship' : 'Postdoctoral fellowship'],
    ['Reference', p.code],
    ['Pillar', `${pillar.id}. ${pillar.name}`],
    ['Research stream', streams.map((s) => `${s.id} ${s.title}`).join('; ')],
    ['Host institution', t.registration],
    ['UK research stay', `${ukHost(p.streams)}. ${t.ukStay} The host shown follows the stream allocation and is fixed per researcher at offer stage.`],
    ['Duration', t.duration],
    ['Supervision', t.supervision],
    ['Funding and support', t.funding],
    ['Expected outputs', t.outputs],
    ['Closing', t.recruitment],
  ]

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-5 md:py-16">
          <Link
            to="/opportunities"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
          >
            ← All positions
          </Link>
          <p className="ui-eyebrow mt-6">
            {p.code}, {p.type === 'PhD' ? 'PhD studentship' : 'Postdoctoral fellowship'} in Pillar{' '}
            {pillar.id}
          </p>
          <h1 className="ui-display mt-3 max-w-4xl font-bold text-balance sm:mt-4">{p.title}</h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-muted-foreground sm:text-base">
            {p.focus}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {p.streams.map((s) => (
              <Tag key={s} tone="primary">
                {s}
              </Tag>
            ))}
            {p.agencies.map((a) => (
              <Tag key={a}>{a}</Tag>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BrandLink to="/contact">Register interest in {p.code}</BrandLink>
            <GhostLink to={`/opportunities?pillar=${p.pillar}`}>
              Other Pillar {p.pillar} positions
            </GhostLink>
          </div>
        </div>
      </section>

      <Section bordered={false}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-8">
          {/* Main column */}
          <div className="min-w-0 space-y-8">
            <div>
              <Eyebrow tone="primary">The research</Eyebrow>
              <h2 className="ui-card-title mt-3 text-xl">What this position works on</h2>
              <p className="ui-body mt-4">{p.focus}</p>
              {p.note && (
                <p className="mt-4 border-l-2 border-primary/60 pl-4 text-[15px] leading-7 sm:pl-5">
                  {p.note}
                </p>
              )}
              {streams.map((s) => (
                <div key={s.id} className="mt-6 border-t border-border pt-4">
                  <Eyebrow tone="primary">{s.id}</Eyebrow>
                  <h3 className="mt-2 text-base font-bold">{s.title}</h3>
                  <p className="ui-body-sm mt-2">{s.summary}</p>
                  <h4 className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Scheduled outputs this position feeds
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {s.outputs.map((o) => (
                      <li key={o.name} className="flex items-baseline gap-3 text-sm">
                        <span className="w-8 shrink-0 font-mono text-[11px] text-primary">{o.month}</span>
                        <span className="leading-6 text-muted-foreground">{o.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <Eyebrow tone="primary">Eligibility</Eyebrow>
              <h2 className="ui-card-title mt-3 text-xl">Who we are looking for</h2>
              <Placeholder id={p.type === 'PhD' ? 'eligibility-phd' : 'eligibility-postdoc'} block>
              <ul className="space-y-3">
                {t.eligibility.map((e) => (
                  <li key={e} className="flex gap-3 text-[15px] leading-7">
                    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{e}</span>
                  </li>
                ))}
              </ul>
              </Placeholder>
            </div>

            <div>
              <Eyebrow tone="primary">Process</Eyebrow>
              <h2 className="ui-card-title mt-3 text-xl">How to apply and how we select</h2>
              <ol className="mt-4 space-y-4">
                {SELECTION.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="mt-0.5 w-7 shrink-0 font-mono text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <p className="text-[15px] leading-7 text-muted-foreground">{s}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-l-2 border-primary/60 pl-4 text-sm leading-7 text-muted-foreground sm:pl-5">
                This position is advertised in advance and is subject to the award of the Cluster E
                contract. The open call opens within one month of contract signature.
              </p>
            </div>
          </div>

          {/* Fact panel */}
          <aside className="space-y-4">
            <Card className="lg:sticky lg:top-24">
              <Eyebrow tone="primary">At a glance</Eyebrow>
              <dl className="mt-4 space-y-4">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm leading-6">{v}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Agencies this work informs
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {p.agencies.map((a) => (
                      <Tag key={a} tone="primary">
                        {a}
                      </Tag>
                    ))}
                  </dd>
                </div>
                {lead && (
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Pillar lead
                    </dt>
                    <dd className="mt-1 text-sm leading-6">
                      {lead.name}
                      <span className="block text-xs text-muted-foreground">{lead.institution}</span>
                    </dd>
                  </div>
                )}
              </dl>
              <div className="mt-6">
                <BrandLink to="/contact">Register interest</BrandLink>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      {siblings.length > 0 && (
        <Section>
          <h2 className="ui-card-title text-xl">
            Other {p.type === 'PhD' ? 'studentships' : 'fellowships'} in Pillar {p.pillar}
          </h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <li key={s.code}>
                <Link
                  to={`/opportunities/${s.code}`}
                  className="group block h-full border-t border-border py-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                    {s.code}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-6 underline-offset-4 group-hover:underline">
                    {s.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
