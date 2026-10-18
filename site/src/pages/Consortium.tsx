import { INSTITUTIONS, PLATFORMS } from '../data/people'
import { PROGRAMME } from '../data/programme'
import Logo from '../components/Logo'
import { Eyebrow, Section, SectionHead, Card, PageHero, Tag } from '../components/ui'

export default function Consortium() {
  const ng = INSTITUTIONS.filter((i) => i.country === 'Nigeria')
  const uk = INSTITUTIONS.filter((i) => i.country === 'United Kingdom')

  return (
    <>
      <PageHero
        eyebrow="Consortium"
        title="Four Nigerian universities, two United Kingdom sub-consultants"
        lead={`A joint venture led by ${PROGRAMME.lead}. Its members publish on hate speech in Nigerian languages, cybersecurity, digital identity, data protection and fraud — and run platforms already deployed in Nigerian markets.`}
      />

      {/* Logo strip */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5 sm:py-10">
          <Eyebrow>Partner and funding consortium</Eyebrow>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {INSTITUTIONS.map((i) => (
              <Logo key={i.short} short={i.short} name={i.name} />
            ))}
          </div>
          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Client · {PROGRAMME.client}
          </p>
        </div>
      </section>

      <Section bordered={false}>
        <SectionHead
          eyebrow="Joint venture"
          title="The four Nigerian members"
          lead="BUK holds the contract and hosts the PhD registrations, the Research School and the annotation teams."
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
          {ng.map((i) => (
            <Card key={i.short} hover className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <Eyebrow tone="primary">{i.role}</Eyebrow>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{i.name}</h3>
                </div>
                <Logo short={i.short} name={i.name} className="shrink-0" />
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{i.detail}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Postdocs
                  </dt>
                  <dd className="mt-1 font-bold text-primary">{i.postdocs}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    PhDs
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-primary">{i.phds}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Streams
                  </dt>
                  <dd className="mt-1 font-mono text-xs">{i.streams}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">{i.focus}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Sub-consultants"
          title="The United Kingdom hosts"
          lead="Every researcher spends three months at a UK host, early enough to shape their direction."
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
          {uk.map((i) => (
            <Card key={i.short} hover className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <Eyebrow tone="primary">{i.role}</Eyebrow>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{i.name}</h3>
                </div>
                <Logo short={i.short} name={i.name} className="shrink-0" />
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{i.detail}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Postdoc stays
                  </dt>
                  <dd className="mt-1 font-bold text-primary">{i.postdocs}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    PhD stays
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-primary">{i.phds}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Streams
                  </dt>
                  <dd className="mt-1 font-mono text-xs">{i.streams}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Research environments"
          title="Platforms already deployed in Nigerian markets"
          lead="Each is a case study and a live testbed for the cluster’s prototypes."
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((p) => (
            <Card key={p.name} hover>
              <h3 className="text-base font-bold">{p.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{p.detail}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Eyebrow>Existing datasets the cluster builds on</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {['AfriHate', 'NaijaHate', 'HausaHate', 'HERDPhobia', 'NaijaSenti', 'AfriSenti', 'POLAR'].map(
              (d) => (
                <Tag key={d} tone="primary">
                  {d}
                </Tag>
              ),
            )}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Governance" title="How the consortium is run" />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {[
            {
              h: 'Consortium Steering Committee',
              b: 'Chaired by the Vice Chancellor of BUK or a delegate, with one representative from each member institution. Meets quarterly and approves annual workplans, budgets and any change of Key Expert.',
            },
            {
              h: 'Team Lead and pillar leads',
              b: 'The Team Lead reports to the Steering Committee and to the Client through the Project BRIDGE PIU and the TA Management Consultancy firm. The Team Lead and pillar leads meet fortnightly.',
            },
            {
              h: 'Quality Panel',
              b: 'Chaired by the Professorial Lead. Every deliverable passes through the panel before it reaches the Client. Each institution reviews its own outputs first.',
            },
            {
              h: 'Weekly stream meetings',
              b: 'Each stream holds a weekly research meeting with its postdocs and PhD candidates, including those away on research visits.',
            },
          ].map((x) => (
            <Card key={x.h} hover>
              <h3 className="text-base font-bold">{x.h}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{x.b}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
