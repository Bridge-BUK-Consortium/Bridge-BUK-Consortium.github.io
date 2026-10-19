import { Link } from 'react-router-dom'
import { PROGRAMME, PILLARS, STREAMS, PRINCIPLES, MINISTER, LEAD_VIDEO } from '../data/programme'
import { INSTITUTIONS } from '../data/people'
import { POSITIONS } from '../data/positions'
import Placeholder from '../components/Placeholder'
import {
  Eyebrow,
  Section,
  SectionHead,
  Card,
  Row,
  GhostLink,
  BrandLink,
  Tag,
} from '../components/ui'

export default function Home() {
  const phdTopics = POSITIONS.filter((p) => p.type === 'PhD').length
  const postdocTopics = POSITIONS.filter((p) => p.type === 'Postdoc').length

  return (
    <>
      {/* ---------------- Hero: forest band, the cover's ground ---------------- */}
      <section className="ui-invert">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-14 md:py-16">
          {/* Masthead: the name. */}
          <div className="min-w-0">
            <p className="ui-eyebrow">{PROGRAMME.centre}</p>
            <p className="mt-2 text-4xl font-extrabold tracking-wide sm:text-5xl">{PROGRAMME.name}</p>
          </div>
          <p className="ui-eyebrow mt-4">
            {PROGRAMME.project} {PROGRAMME.cluster}, {PROGRAMME.programme}
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
            <div className="min-w-0">
              <h1 className="ui-display font-bold text-balance">{PROGRAMME.clusterTitle}</h1>

              <ul className="mt-5 grid gap-3 sm:mt-6">
                {[
                  `${PROGRAMME.fibre} of new fibre is bringing millions of Nigerians online for the first time.`,
                  'We produce the research regulators need in order to protect them.',
                  'We train thirty researchers who will carry the work on.',
                ].map((point) => (
                  <li key={point} className="grid grid-cols-[0.9rem_minmax(0,1fr)] items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary sm:mt-3"
                    />
                    <span className="ui-lead ui-lead-wide">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <BrandLink to="/research">Explore the research</BrandLink>
                <GhostLink to="/opportunities">
                  Funded positions: 15 postdocs, 15 PhDs
                </GhostLink>
              </div>
            </div>

            {/* The mark as a key: the stem is the cluster, the three arms are
                its pillars, each in the tone its cards use further down. */}
            <div className="flex min-w-0 flex-col gap-8">
              <nav aria-label="The three pillars" className="grid grid-cols-[1.5rem_5.5rem_minmax(0,1fr)] gap-y-3 sm:grid-cols-[1.75rem_8rem_minmax(0,1fr)]">
                <span aria-hidden="true" className="row-span-3" style={{ backgroundColor: 'var(--ui-ramp-1)' }} />
                {PILLARS.map((p, i) => {
                  const tone = `var(--ui-ramp-${i + 1})`
                  const width = ['100%', '64%', '80%'][i]
                  return (
                    <Link key={p.id} to="/research" className="group contents">
                      <span aria-hidden="true" className="block h-6 sm:h-7" style={{ backgroundColor: tone, width }} />
                      <span className="flex min-w-0 flex-wrap items-baseline gap-x-2 pl-4 text-sm leading-6 sm:leading-7">
                        <span className="ui-eyebrow shrink-0" style={{ color: tone }}>
                          Pillar {p.id}
                        </span>
                        <span className="font-semibold underline-offset-4 group-hover:underline">
                          {p.name}
                        </span>
                      </span>
                    </Link>
                  )
                })}
              </nav>

              <dl className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-border pt-5 text-sm">
              {[
                ['Lead institution', PROGRAMME.lead],
                ['Consortium', 'Six universities: four in Nigeria, two in the UK'],
                ['Client', 'FMCIDE, through Project BRIDGE'],
                ['Duration', PROGRAMME.duration],
                ['Reference', PROGRAMME.rfp],
                ['Researchers trained', PROGRAMME.cohort],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="ui-eyebrow">{k}</dt>
                  <dd className="mt-1 leading-6">{v}</dd>
                </div>
              ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Who we are: mint band, the cover's panel ---------------- */}
      <section className="ui-tint border-b border-border" aria-label="About the consortium">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-5 sm:py-12">
          <div className="grid gap-6 md:grid-cols-3 md:gap-10">
            <p className="ui-body ui-body-wide">
              CREDENCE, the Nigerian Centre for Trust and Safety Online, is Project BRIDGE Cluster E: a consortium of six universities led by{' '}
              <strong className="text-foreground">Bayero University, Kano</strong>. Four are in
              Nigeria: Bayero, Aliko Dangote University of Science and Technology, the Federal
              University of Technology Babura and Northwest University. Two are in the United
              Kingdom: the University of Leicester and York St John University.
            </p>
            <p className="ui-body ui-body-wide">
              The Federal Ministry of Communications, Innovation and Digital Economy asked
              universities to study the harms that reach Nigerians as they come online. We answer
              with six research streams on hate speech, online fraud, digital identity, data
              protection, youth safety and regulation. Each stream delivers its findings to the
              agency that can act on them.
            </p>
            <p className="ui-body ui-body-wide">
              The team built AfriHate and NaijaSenti, the largest hate speech and sentiment
              datasets for Nigerian languages, and runs four platforms already in use in Nigeria:
              VigilSentinel, Wazobia Invoice, SPIDVerify and NaijaSafe.
            </p>
          </div>

          <dl className="ui-figure-row mt-8 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-border pt-6 sm:mt-10 sm:gap-6 lg:grid-cols-4">
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

      {/* ---------------- The sponsor's word ---------------- */}
      <section className="border-b border-border" aria-label="Endorsement">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-5 sm:py-14 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-14">
          <figure className="mx-auto w-full max-w-sm md:mx-0">
            <img
              src={`${import.meta.env.BASE_URL}${MINISTER.photo}`}
              alt={MINISTER.name}
              width="800"
              height="800"
              className="block aspect-square w-full object-cover object-top"
            />
            <figcaption className="ui-invert flex items-baseline justify-between gap-3 px-4 py-2.5">
              <span className="ui-eyebrow">{MINISTER.name}</span>
              <span className="ui-eyebrow">FMCIDE</span>
            </figcaption>
          </figure>
          <div className="min-w-0">
            <Eyebrow tone="primary">Programme sponsor, Federal Republic of Nigeria</Eyebrow>
            <Placeholder id="minister-quote" block>
              <blockquote className="ui-title mt-3 font-bold text-balance">
                &ldquo;{MINISTER.quote}&rdquo;
              </blockquote>
            </Placeholder>
            <p className="mt-5 font-semibold">{MINISTER.name}</p>
            <p className="ui-body-sm">{MINISTER.title}</p>
          </div>
        </div>
      </section>

      {/* ---------------- Consortium strip ---------------- */}
      <section className="border-b border-border" aria-label="Consortium">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5 sm:py-10">
          <Eyebrow>Joint venture and sub-consultants</Eyebrow>
          <ul className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {INSTITUTIONS.map((i) => (
              <li key={i.short}>
                <Link
                  to="/consortium"
                  className="group block h-full border-t border-border py-3.5 sm:py-4"
                >
                  <p className="text-sm font-bold underline-offset-4 group-hover:underline">
                    {i.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {i.role} in {i.country}
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
          lead="Each research question names the agency, the instrument and the decision it is meant to serve."
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
              <Card
                key={p.id}
                hover
                className="border-t-4"
                style={{ borderTopColor: `var(--ui-ramp-${'ABC'.indexOf(p.id) + 1})` }}
              >
                <Eyebrow tone="primary">Pillar {p.id}</Eyebrow>
                <h3 className="ui-card-title mt-3 text-xl">{p.name}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {p.leadCode} {p.lead}
                </p>
                <ul className="mt-4 space-y-3">
                  {streams.map((s) => (
                    <li
                      key={s.id}
                      className="border-l-2 pl-3"
                      style={{ borderLeftColor: `var(--ui-ramp-${'ABC'.indexOf(p.id) + 1})` }}
                    >
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

      {/* ---------------- The Team Lead, on film ---------------- */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <SectionHead
              eyebrow="From the Team Lead"
              title="Three minutes on what CREDENCE will do"
              lead="Dr. Shamsuddeen Hassan Muhammad, who leads the cluster, on the harms that reach Nigerians as they come online, the evidence the cluster will give regulators, and the thirty researchers it will train."
            />
          </div>
          <div className="min-w-0">
            {LEAD_VIDEO.url ? (
              <div className="aspect-video w-full border-t-2 border-primary">
                <iframe
                  src={LEAD_VIDEO.url}
                  title={LEAD_VIDEO.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <Placeholder id="lead-video" block>
                <figure className="ui-invert flex aspect-video w-full items-stretch overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${LEAD_VIDEO.still}`}
                    alt=""
                    className="h-full w-auto shrink-0 object-cover object-top"
                  />
                  <figcaption className="flex min-w-0 flex-col justify-end gap-2 p-4 sm:p-5">
                    <span className="ui-eyebrow">Video to follow</span>
                    <span className="text-sm font-semibold leading-snug sm:text-base">{LEAD_VIDEO.title}</span>
                  </figcaption>
                </figure>
              </Placeholder>
            )}
          </div>
        </div>
      </Section>

      {/* ---------------- Recruitment call ---------------- */}
      <section className="ui-invert">
        <article className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-14 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="min-w-0">
              <Eyebrow tone="primary">Open call, subject to contract award</Eyebrow>
              <h2 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">
                Fifteen postdoctoral fellowships and fifteen PhD studentships in fundamental digital
                trust and safety research
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  'The thirty positions are shared among the four Nigerian universities: each registers its own PhD candidates and employs its own postdoctoral researchers.',
                  'Each researcher spends three months at Leicester or York St John, and the programme pays for the visit.',
                  'Every position is attached to a numbered topic and to a policy output with a named agency.',
                  `We advertise ${phdTopics} doctoral and ${postdocTopics} postdoctoral topics for the thirty positions.`,
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
                  At least 24 months, beginning in Month 6.
                </p>
              </Row>
              <Row>
                <Eyebrow tone="primary">PhD studentships</Eyebrow>
                <p className="ui-figure mt-1">15</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  A stipend and research costs, from Month 9 to Month 36.
                </p>
              </Row>
              <Row>
                <Eyebrow>Gender target</Eyebrow>
                <div className="mt-2">
                  <Placeholder id="gender-target" block>
                    <span className="block text-sm leading-6">
                      At least <span className="font-bold text-primary">40 percent</span> of each
                      cohort will be women. The panel reports the figure at every stage of
                      selection.
                    </span>
                  </Placeholder>
                </div>
              </Row>
            </div>
          </div>
        </article>
      </section>

      {/* ---------------- Principles ---------------- */}
      <Section bordered={false}>
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
        <div>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">Work with CREDENCE</h2>
            <p className="ui-body mt-3">
              We welcome enquiries from government agencies, platforms, civil society organisations
              and researchers.
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
