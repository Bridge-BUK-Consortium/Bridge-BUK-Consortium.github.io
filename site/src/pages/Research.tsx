import { PILLARS, STREAMS, PRINCIPLES } from '../data/programme'
import { POSITIONS } from '../data/positions'
import { Link } from 'react-router-dom'
import { Eyebrow, Section, SectionHead, Card, PageHero, Tag } from '../components/ui'

export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Six research streams"
        lead="Millions of Nigerians are coming online for the first time. For Nigerian conditions, most of the research that regulators would need in order to protect them has not been done. These six streams will do it, and deliver the findings to named agencies before the decisions those findings are meant to inform."
      />

      {PILLARS.map((p) => {
        const streams = STREAMS.filter((s) => s.pillar === p.id)
        return (
          <Section key={p.id} id={`pillar-${p.id}`}>
            <SectionHead
              eyebrow={`Pillar ${p.id}, led by ${p.lead}`}
              title={p.name}
            />
            <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
              {streams.map((s) => {
                const topics = POSITIONS.filter((pos) => pos.streams.includes(s.id))
                return (
                  <Card key={s.id} hover className="flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <Eyebrow tone="primary">{s.id}</Eyebrow>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {topics.length} advertised topics
                      </span>
                    </div>
                    <h3 className="ui-card-title mt-3 text-xl">{s.title}</h3>
                    <p className="ui-body-sm mt-3">{s.summary}</p>

                    <h4 className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Policy questions
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {s.questions.map((q, i) => (
                        <li key={q} className="flex gap-3 text-sm leading-6">
                          <span className="shrink-0 font-mono text-[11px] text-primary">
                            Q{i + 1}
                          </span>
                          <span className="text-muted-foreground">{q}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Scheduled outputs
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {s.outputs.map((o) => (
                        <li key={o.name} className="flex items-baseline gap-3 text-sm">
                          <span className="w-8 shrink-0 font-mono text-[11px] text-primary">
                            {o.month}
                          </span>
                          <span className="leading-6">{o.name}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-border pt-4">
                      <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        Informs
                      </span>
                      {s.mdas.map((m) => (
                        <Tag key={m} tone="primary">
                          {m}
                        </Tag>
                      ))}
                    </div>

                    <Link
                      to={`/opportunities?stream=${s.id}`}
                      className="mt-4 text-sm text-primary hover:underline"
                    >
                      Positions on this stream →
                    </Link>
                  </Card>
                )
              })}
            </div>
          </Section>
        )
      })}

      <Section>
        <SectionHead
          eyebrow="Cross-cutting"
          title="Cross-cutting functions"
          lead="Two functions work across all six streams."
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          <Card hover>
            <Eyebrow tone="primary">K-4 Assoc. Prof. Khalid Haruna</Eyebrow>
            <h3 className="ui-card-title mt-3 text-xl">Data and Analytics</h3>
            <p className="ui-body-sm mt-3">
              A shared survey core module, the data management plan, dataset curation and analytics
              support for every stream. Checks every dataset before release and reports the achieved
              design effect in each survey report. Leads the annual Research School.
            </p>
          </Card>
          <Card hover>
            <Eyebrow tone="primary">K-5 Maryam Ibrahim Mukhtar</Eyebrow>
            <h3 className="ui-card-title mt-3 text-xl">Programme management</h3>
            <p className="ui-body-sm mt-3">
              Reporting, finance, cohort administration across six institutions, and cross-cluster
              liaison. Keeps the cohort register of recruitment, supervision meetings, publications and
              doctoral milestones, reported each quarter.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Design parameters" title="Design parameters" />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
          <Card>
            <h3 className="ui-card-title">Languages</h3>
            <p className="ui-body-sm mt-3">
              Five core languages, which are Hausa, Yoruba, Igbo, Nigerian Pidgin and English, for
              questionnaires, consent forms, the phishing corpus, the deepfake benchmark and the youth
              safety materials. The RS1 detection models cover nine Nigerian languages. The Month 30
              safety toolkit is released in Hausa, Yoruba, Igbo and Nigerian Pidgin, with an English version.
            </p>
          </Card>
          <Card>
            <h3 className="ui-card-title">Statistics</h3>
            <p className="ui-body-sm mt-3">
              Every precision statement uses a 95 percent confidence level, an expected proportion of
              0.5 and an explicit design effect. The youth survey reaches ±4.1 points, the consumer
              survey ±2.6, and the national trust survey ±2.2.
            </p>
          </Card>
          <Card>
            <h3 className="ui-card-title">Timing</h3>
            <p className="ui-body-sm mt-3">
              Month 1 is December 2026. RS1 starts election work in Month 1, before the presidential
              and National Assembly elections of 16 January 2027 and the governorship elections of 6
              February 2027. Collection starts only after ethics approval.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="How we work" title="Guiding principles" />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <Card key={p.name} hover>
              <h3 className="ui-card-title">{p.name}</h3>
              <p className="ui-body-sm mt-3">{p.detail}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
