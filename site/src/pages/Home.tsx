import { Link } from 'react-router-dom'
import { PROGRAMME, PILLARS, MINISTER, LEAD_VIDEO } from '../data/programme'
import Placeholder from '../components/Placeholder'
import PillarsMap from '../components/PillarsMap'
import OpenCallSeats from '../components/OpenCallSeats'
import {
  Eyebrow,
  Section,
  SectionHead,
  GhostLink,
  BrandLink,
} from '../components/ui'

export default function Home() {

  return (
    <>
      {/* ---------------- Hero: forest band, the cover's ground ---------------- */}
      <section className="ui-invert">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-14 md:py-16">
          {/* One quiet line names the cluster; the header already carries the CREDENCE brand. */}
          <p className="ui-eyebrow">
            {PROGRAMME.name} · {PROGRAMME.project} {PROGRAMME.cluster}
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
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
            <p className="ui-body ui-body-wide" style={{ fontSize: '1.125rem', lineHeight: 1.75 }}>
              CREDENCE, the Nigerian Centre for Online Trust and Safety (NCOTS), is Project BRIDGE Cluster E: a consortium of six universities led by{' '}
              <strong className="text-foreground">Bayero University, Kano</strong>. Four are in
              Nigeria: Bayero, Aliko Dangote University of Science and Technology, the Federal
              University of Technology Babura and Northwest University. Two are in the United
              Kingdom: the University of Leicester and York St John University.
            </p>

            <dl className="ui-figure-row grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
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

      {/* ---------------- Pillars ---------------- */}
      <Section id="pillars" bordered={false}>
        <SectionHead
          title="Three pillars, six research streams"
          lead="Each research question names the agency, the instrument and the decision it is meant to serve."
          action={
            <Link className="text-sm text-primary hover:underline" to="/research">
              All six streams →
            </Link>
          }
        />
        <div className="mt-7 sm:mt-10">
          <PillarsMap />
        </div>
      </Section>

      {/* ---------------- Recruitment call ---------------- */}
      <section className="ui-invert">
        <article className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-14 md:py-20">
          <OpenCallSeats />
        </article>
      </section>

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
