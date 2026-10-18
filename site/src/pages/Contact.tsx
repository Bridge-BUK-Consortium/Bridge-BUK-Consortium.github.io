import { PROGRAMME } from '../data/programme'
import { PEOPLE } from '../data/people'
import { Eyebrow, Section, SectionHead, Card, PageHero } from '../components/ui'

export default function Contact() {
  const leads = PEOPLE.filter((p) => p.group === 'Key Expert')

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Cluster E"
        lead="Enquiries from agencies, platforms, civil society and researchers, and questions about the funded positions."
      />

      <Section bordered={false}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
          <Card>
            <Eyebrow tone="primary">General enquiries</Eyebrow>
            <h2 className="mt-3 text-xl font-bold">Write to the cluster</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              For a funded position, quote the topic reference (A-P1, C-D4) in the subject line.
            </p>
            <a
              href={`mailto:${PROGRAMME.email}`}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              {PROGRAMME.email}
            </a>
            <dl className="mt-8 space-y-4 border-t border-border pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Lead institution
                </dt>
                <dd className="mt-1 text-sm leading-6">
                  {PROGRAMME.lead}
                  <br />
                  PMB 3011, Kano, Nigeria
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Client
                </dt>
                <dd className="mt-1 text-sm leading-6">
                  Project Implementation Unit, Project BRIDGE
                  <br />
                  {PROGRAMME.client}
                  <br />
                  Central Business District, Abuja, FCT, Nigeria
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Assignment
                </dt>
                <dd className="mt-1 font-mono text-xs leading-6">
                  RFP {PROGRAMME.rfp} · Project {PROGRAMME.projectNo}
                </dd>
              </div>
            </dl>
          </Card>

          <div className="space-y-4 sm:space-y-5">
            <Card>
              <Eyebrow tone="primary">Who to ask</Eyebrow>
              <h2 className="mt-3 text-xl font-bold">Routes into the cluster</h2>
              <ul className="mt-5 space-y-4">
                {leads.map((p) => (
                  <li key={p.code} className="border-l-2 border-primary/50 pl-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                      {p.code} · {p.title}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.institution}</p>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <Eyebrow tone="primary">Applicants</Eyebrow>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                The call opens within a month of contract signature. Register interest and we will tell
                you when.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Agencies"
          title="Policy engagement"
          lead="Briefs reach named agencies before named decisions. Quarterly policy labs, annual training and a national conference in Abuja are open to agency staff."
        />
        <div className="mt-7 flex flex-wrap gap-2">
          {[
            'NITDA', 'NCC', 'NDPC', 'CBN', 'FCCPC', 'NIMC', 'INEC', 'ONSA', 'UBEC', 'NFIU',
            'Federal Ministry of Education', 'Federal Ministry of Health',
            'Federal Ministry of Women Affairs', 'National Orientation Agency', 'FMCIDE',
          ].map((m) => (
            <span
              key={m}
              className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {m}
            </span>
          ))}
        </div>
      </Section>
    </>
  )
}
