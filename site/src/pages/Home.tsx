import { Link } from 'react-router-dom'
import { PROGRAMME, PILLARS, STREAMS, PRINCIPLES } from '../data/programme'
import { INSTITUTIONS } from '../data/people'
import { POSITIONS } from '../data/positions'
import {
  Eyebrow,
  Section,
  SectionHead,
  Card,
  Row,
  PrimaryLink,
  GhostLink,
  BrandLink,
  Tag,
} from '../components/ui'

export default function Home() {
  const phdTopics = POSITIONS.filter((p) => p.type === 'PhD').length
  const postdocTopics = POSITIONS.filter((p) => p.type === 'Postdoc').length

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-motif opacity-50" aria-hidden="true" />
        <div
          className="ui-bloom absolute -top-52 left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="ui-bloom absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-11 sm:px-5 sm:py-14 md:py-20">
          <p className="ui-eyebrow ui-eyebrow-muted">
            <span className="sm:hidden">Six universities · Nigeria and the UK</span>
            <span className="hidden sm:inline">
              Bayero University, Kano · ADUSTECH · FUT Babura · Northwest · Leicester · York St John
            </span>
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.12] sm:mt-5 sm:text-4xl sm:leading-[1.05] md:text-6xl lg:text-7xl">
            <span className="text-gradient">
              Trust, Safety, Consumer Protection and Online Harms
            </span>
          </h1>
          <p className="ui-lead mt-5 sm:mt-6">
            Cluster E of the National Digital Economy University Led Research Programme.
          </p>
          <p className="ui-body mt-4 sm:mt-5">
            At least {PROGRAMME.fibre} of new fibre brings millions of Nigerians online for the first
            time. We build the evidence regulators need to protect them — and thirty researchers to
            keep producing it.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <PrimaryLink to="/research">Explore the research</PrimaryLink>
            <GhostLink to="/opportunities">
              Funded positions: 15 postdocs, 15 PhDs
            </GhostLink>
          </div>

          {/* Key figures */}
          <dl className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-border pt-7 sm:mt-12 sm:gap-6 lg:grid-cols-4">
            {[
              { k: '6', v: 'research streams in three pillars' },
              { k: '30', v: 'funded postdocs and PhD candidates' },
              { k: '36', v: 'months, December 2026 to November 2029' },
              { k: '18', v: 'policy briefs to named agencies' },
            ].map((s) => (
              <div key={s.v}>
                <dt className="sr-only">{s.v}</dt>
                <dd>
                  <span className="ui-figure block">{s.k}</span>
                  <span className="ui-body-sm mt-1.5 block">{s.v}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Consortium strip ---------------- */}
      <section className="border-b border-border bg-card/30" aria-label="Consortium">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5 sm:py-10">
          <Eyebrow>Joint venture and sub-consultants</Eyebrow>
          <ul className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {INSTITUTIONS.map((i) => (
              <li key={i.short}>
                <Link
                  to="/consortium"
                  className="group block h-full rounded-lg border border-border bg-background/50 px-4 py-3.5 transition-colors hover:border-primary/40 hover:bg-background/80 sm:py-4"
                >
                  <p className="text-sm font-bold underline-offset-4 group-hover:underline">
                    {i.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {i.role} · {i.country}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Pillars ---------------- */}
      <Section id="pillars" bordered={false}>
        <SectionHead
          eyebrow="How the cluster is organised"
          title="Three pillars, six research streams"
          lead="Every question names the agency, the instrument and the decision it serves."
          action={
            <Link className="text-sm text-primary hover:underline" to="/research">
              All six streams →
            </Link>
          }
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
          {PILLARS.map((p) => {
            const streams = STREAMS.filter((s) => s.pillar === p.id)
            return (
              <Card key={p.id} hover>
                <Eyebrow tone="primary">Pillar {p.id}</Eyebrow>
                <h3 className="ui-card-title mt-3 text-xl">{p.name}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {p.leadCode} {p.lead}
                </p>
                <ul className="mt-4 space-y-3">
                  {streams.map((s) => (
                    <li key={s.id} className="border-l-2 border-primary/50 pl-3">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                        {s.id}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-6">{s.title}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.mdas.slice(0, 4).map((m) => (
                    <Tag key={m}>{m}</Tag>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* ---------------- Recruitment call ---------------- */}
      <Section>
        <article className="rounded-xl border border-primary/40 bg-primary/[0.06] p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="min-w-0">
              <Eyebrow tone="primary">Open call · subject to contract award</Eyebrow>
              <h2 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">
                Fifteen postdoctoral fellowships and fifteen PhD studentships in fundamental digital
                trust and safety research
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  'PhDs registered at BUK; postdocs employed by the four Nigerian universities',
                  'A funded three-month stay at Leicester or York St John',
                  'Each post tied to a numbered topic and a named policy output',
                  `${phdTopics} doctoral and ${postdocTopics} postdoctoral topics for 30 positions`,
                ].map((x) => (
                  <li key={x} className="flex gap-2.5 text-sm leading-6">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <BrandLink to="/opportunities">See all advertised positions</BrandLink>
                <GhostLink to="/opportunities#how-to-apply">How to apply</GhostLink>
              </div>
            </div>
            <div className="space-y-3">
              <Row>
                <Eyebrow tone="primary">Postdoctoral fellowships</Eyebrow>
                <p className="ui-figure mt-1">15</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  24 months minimum, from Month 6.
                </p>
              </Row>
              <Row>
                <Eyebrow tone="primary">PhD studentships</Eyebrow>
                <p className="ui-figure mt-1">15</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Stipend and costs, Month 9 to Month 36.
                </p>
              </Row>
              <Row>
                <Eyebrow>Gender target</Eyebrow>
                <p className="mt-1 text-sm leading-6">
                  At least <span className="font-bold text-primary">40 percent</span> women, reported at
                  every stage of selection.
                </p>
              </Row>
            </div>
          </div>
        </article>
      </Section>

      {/* ---------------- Principles ---------------- */}
      <Section>
        <SectionHead eyebrow="How we work" title="Six guiding principles" />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <Card key={p.name} hover>
              <h3 className="ui-card-title">{p.name}</h3>
              <p className="ui-body-sm mt-3">{p.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------------- CTA ---------------- */}
      <Section>
        <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-card p-5 sm:p-8 md:p-12">
          <div className="absolute inset-0 grid-motif opacity-30" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">Work with Cluster E</h2>
            <p className="ui-body mt-3">
              Enquiries from agencies, platforms, civil society and researchers are welcome.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BrandLink to="/contact">Contact the cluster</BrandLink>
              <GhostLink to="/people">Meet the team</GhostLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
