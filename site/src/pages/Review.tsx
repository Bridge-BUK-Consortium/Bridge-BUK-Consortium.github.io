import { UNVERIFIED, REVIEW_NOTE } from '../data/placeholders'
import { Section, PageHero, Card, Eyebrow } from '../components/ui'

const STATUS: Record<string, { label: string; detail: string }> = {
  invented: {
    label: 'Not from the proposal',
    detail: 'Written to fill a gap. The proposal says nothing on this point.',
  },
  unsourced: {
    label: 'Drafted, not policy',
    detail: 'Conventional wording the proposal does not fix. Someone must own it.',
  },
  unconfirmed: {
    label: 'Flagged in the proposal',
    detail: 'The proposal states it but marks it for confirmation.',
  },
  derived: {
    label: 'Inferred',
    detail: 'Worked out from what the proposal does say, rather than stated by it.',
  },
}

export default function Review() {
  return (
    <>
      <PageHero
        eyebrow="For the authors"
        title="What to settle before this site is publicised"
        lead={REVIEW_NOTE}
      />

      <Section bordered={false}>
        <p className="ui-meta">
          {UNVERIFIED.length} items. Everything else on the site is taken from the Full Technical
          Proposal and has been checked against it.
        </p>

        <ol className="mt-7 grid gap-4 sm:gap-5">
          {UNVERIFIED.map((u, i) => {
            const s = STATUS[u.status]
            return (
              <li key={u.id}>
                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Eyebrow tone="primary">
                        {String(i + 1).padStart(2, '0')}
                      </Eyebrow>
                      <h2 className="ui-card-title mt-2">{u.label}</h2>
                    </div>
                    <span className="ui-eyebrow shrink-0 rounded-full border border-brand/60 bg-brand/10 px-2.5 py-1 text-[10px] text-brand">
                      {s.label}
                    </span>
                  </div>

                  <p className="ui-body mt-4">{u.needed}</p>

                  <dl className="mt-5 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
                    <div>
                      <dt className="ui-eyebrow ui-eyebrow-muted text-[10px]">Appears on</dt>
                      <dd className="ui-body-sm mt-1">{u.where}</dd>
                    </div>
                    <div>
                      <dt className="ui-eyebrow ui-eyebrow-muted text-[10px]">Why it is marked</dt>
                      <dd className="ui-body-sm mt-1">{s.detail}</dd>
                    </div>
                  </dl>
                </Card>
              </li>
            )
          })}
        </ol>
      </Section>

      <Section>
        <Eyebrow tone="primary">How to clear an item</Eyebrow>
        <h2 className="ui-title mt-3">Removing a placeholder</h2>
        <ol className="mt-5 grid gap-3">
          {[
            'Settle the point with whoever owns it, and correct the content in the file named for it.',
            'Delete that item from UNVERIFIED in src/data/placeholders.ts.',
            'The inline marker and this entry both disappear. When the list is empty, the notice at the top of the site goes with it.',
          ].map((step, i) => (
            <li key={step} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3">
              <span className="ui-meta w-7 font-bold text-primary">
                {i + 1}
              </span>
              <span className="ui-body">{step}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
