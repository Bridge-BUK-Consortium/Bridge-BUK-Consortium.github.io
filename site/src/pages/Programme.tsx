import { PHASES, DELIVERABLES, STREAMS, PROGRAMME } from '../data/programme'
import { Eyebrow, Section, SectionHead, Card, PageHero, Tag } from '../components/ui'

export default function Programme() {
  return (
    <>
      <PageHero
        eyebrow="Programme"
        title="Thirty-six months, four phases, eight deliverables"
        lead={`${PROGRAMME.duration}. Month 1 is December 2026; Month 12 is November 2027; Month 24 is November 2028; Month 36 is November 2029.`}
      />

      <Section bordered={false}>
        <SectionHead eyebrow="Work plan" title="Phasing" />
        <ol className="mt-7 space-y-4 sm:mt-10 sm:space-y-5">
          {PHASES.map((p) => (
            <li key={p.id}>
              <Card hover>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <Eyebrow tone="primary">{p.id}</Eyebrow>
                    <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {p.months}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-6">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{pt}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Outputs"
          title="Deliverables"
          lead="Each passes the internal Quality Panel before it reaches the Client."
        />
        <div className="mt-7 overflow-x-auto sm:mt-10">
          <table className="w-full min-w-[46rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                {['', 'Deliverable', 'Content', 'Timing'].map((h, i) => (
                  <th
                    key={i}
                    className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DELIVERABLES.map((d) => (
                <tr key={d.id} className="border-b border-border">
                  <td className="px-3 py-4 align-top font-mono text-xs text-primary">{d.id}</td>
                  <td className="px-3 py-4 align-top font-semibold leading-6">{d.name}</td>
                  <td className="px-3 py-4 align-top leading-6 text-muted-foreground">{d.content}</td>
                  <td className="px-3 py-4 align-top font-mono text-xs leading-6">{d.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Milestones"
          title="Scheduled outputs by stream"
          lead="Every output has a month and an agency waiting for it."
        />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STREAMS.map((s) => (
            <Card key={s.id} hover className="flex flex-col">
              <Eyebrow tone="primary">
                {s.id} · Pillar {s.pillar}
              </Eyebrow>
              <h3 className="mt-3 text-base font-bold leading-snug">{s.title}</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {s.outputs.map((o) => (
                  <li key={o.name} className="flex items-baseline gap-3 text-sm">
                    <span className="w-8 shrink-0 font-mono text-[11px] text-primary">{o.month}</span>
                    <span className="leading-6 text-muted-foreground">{o.name}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {s.mdas.map((m) => (
                  <Tag key={m}>{m}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Safeguards" title="Ethics, inclusion and data protection" />
        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              h: 'Ethics with named owners',
              b: 'Ethics, data protection, child protection, annotator welfare, SEA/SH and cybersecurity each have a named owner, a date and a document. Fieldwork with adolescents and with rural traders requires ethics clearance and, for schools, state education authority consent.',
            },
            {
              h: 'Inclusion by design',
              b: 'Rural communities, women, youth, informal workers, persons with disabilities and small enterprises are deliberately included in every sample and every brief. Samples oversample underserved groups and findings are disaggregated.',
            },
            {
              h: 'Open and replicable',
              b: 'Each study is pre-registered with a protocol and analysis plan in a public methods register. Code, codebooks and annotation guidelines are versioned and released with each dataset.',
            },
            {
              h: 'Data ownership',
              b: 'All outputs and data vest in the Federal Government of Nigeria. The consortium proposes open release of anonymised datasets and code under a Client-approved licence, so other Nigerian researchers can reuse the national body of knowledge.',
            },
            {
              h: 'Mid-Term Review',
              b: 'At Month 18, aligned with the Annual Progress Report cycle, so course corrections feed into Year 3 planning and the Quality Assurance Firm’s cross-cluster synthesis.',
            },
            {
              h: 'Cross-cluster coordination',
              b: 'A standing monthly coordination meeting with the Quality Assurance Firm and named focal points from each cluster, with anonymised data-sharing protocols agreed at inception.',
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
