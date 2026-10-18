/**
 * Everything on this site that is NOT taken from the Full Technical
 * Proposal, and so must be confirmed by the authors before the site is
 * publicised. Each entry is rendered inline by <Placeholder id="..."> and
 * listed together on /review.
 *
 * When an item is settled: replace the content, then delete its entry
 * here. The inline marker disappears with it.
 */
export type Unverified = {
  id: string
  label: string
  where: string
  needed: string
  status: 'invented' | 'unsourced' | 'unconfirmed' | 'derived'
}

export const UNVERIFIED: Unverified[] = [
  {
    id: 'contact-email',
    label: 'Cluster contact address',
    where: 'Contact page, footer',
    needed:
      'The proposal gives no cluster address. The address shown is a placeholder and was not supplied by the team. Replace it with the real one.',
    status: 'invented',
  },
  {
    id: 'eligibility-phd',
    label: 'PhD eligibility criteria',
    where: 'Opportunities, and every PhD advertisement',
    needed:
      'The proposal fixes what counts as funded participation, the 40 percent target and the selection process, but not the academic entry requirements. The degree class, residency and language wording here is drafting, not policy. Confirm with the BUK School of Postgraduate Studies.',
    status: 'unsourced',
  },
  {
    id: 'eligibility-postdoc',
    label: 'Postdoctoral eligibility criteria',
    where: 'Opportunities, and every postdoctoral advertisement',
    needed:
      'As above. The wording on the doctorate, publication record and willingness to travel is drafting, not policy. Confirm with each employing university.',
    status: 'unsourced',
  },
  {
    id: 'gender-target',
    label: 'The 40 percent gender target',
    where: 'Home, Opportunities, every advertisement',
    needed:
      'The proposal states it but marks it “confirm 40 percent”. Confirm the figure before it is advertised.',
    status: 'unconfirmed',
  },
  {
    id: 'kyriacou-rank',
    label: 'Prof. Theocharis Kyriacou’s rank',
    where: 'People',
    needed:
      'The proposal records a conflict: the York St John staff page says Professor of Artificial Intelligence, the RaY profile says Associate Professor. Confirm in writing and correct every mention.',
    status: 'unconfirmed',
  },
  {
    id: 'uk-host',
    label: 'The UK host shown on each advertisement',
    where: 'Every advertisement',
    needed:
      'The proposal fixes hosts by stream, not by topic, so the host named on a topic is inferred from its stream. Fix the host per position, or keep the wording as an indication.',
    status: 'derived',
  },
]

export const byId = (id: string) => UNVERIFIED.find((u) => u.id === id)

/** Shown in the site notice and on /review. */
export const REVIEW_NOTE =
  'This site was built from the Full Technical Proposal. A few details are not in that document and are shown as placeholders. The authors should settle them before the site is publicised.'
