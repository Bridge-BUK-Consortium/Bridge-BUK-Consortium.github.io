import { POSITIONS } from './data/positions'
import { PEOPLE, INSTITUTIONS } from './data/people'
import { STREAMS, PILLARS, DELIVERABLES, PHASES } from './data/programme'

export type Hit = {
  id: string
  kind: 'Position' | 'Person' | 'Stream' | 'Institution' | 'Deliverable' | 'Phase' | 'Page'
  title: string
  subtitle: string
  /** Everything matchable, lower-cased and flattened. */
  haystack: string
  to: string
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

export const INDEX: Hit[] = [
  ...POSITIONS.map((p) => ({
    id: p.code,
    kind: 'Position' as const,
    title: `${p.code} ${p.title}`,
    subtitle: `${p.type === 'PhD' ? 'PhD studentship' : 'Postdoctoral fellowship'} in Pillar ${p.pillar}, ${p.streams.join(' and ')}`,
    haystack: norm(
      [p.code, p.type, p.title, p.focus, p.note ?? '', p.pillar, ...p.streams, ...p.agencies].join(' '),
    ),
    to: `/opportunities/${p.code}`,
  })),
  ...PEOPLE.map((p) => ({
    id: p.code,
    kind: 'Person' as const,
    title: p.name,
    subtitle: `${p.code}, ${p.title}`,
    haystack: norm([p.code, p.name, p.institution, p.title, p.summary, p.role, p.bio ?? ''].join(' ')),
    to: `/people?q=${encodeURIComponent(p.name)}`,
  })),
  ...STREAMS.map((s) => ({
    id: s.id,
    kind: 'Stream' as const,
    title: `${s.id} ${s.title}`,
    subtitle: `Pillar ${s.pillar}, informing ${s.mdas.join(', ')}`,
    haystack: norm(
      [s.id, s.title, s.summary, ...s.questions, ...s.outputs.map((o) => o.name), ...s.mdas].join(' '),
    ),
    to: `/research#pillar-${s.pillar}`,
  })),
  ...INSTITUTIONS.map((i) => ({
    id: i.short,
    kind: 'Institution' as const,
    title: i.name,
    subtitle: `${i.role} in ${i.country}`,
    haystack: norm([i.name, i.short, i.role, i.country, i.focus, i.detail, i.streams].join(' ')),
    to: '/consortium',
  })),
  ...DELIVERABLES.map((d) => ({
    id: d.id,
    kind: 'Deliverable' as const,
    title: `${d.id} ${d.name}`,
    subtitle: d.timing,
    haystack: norm([d.id, d.name, d.content, d.timing].join(' ')),
    to: '/programme',
  })),
  ...PHASES.map((p) => ({
    id: p.id,
    kind: 'Phase' as const,
    title: `${p.id}, ${p.name}`,
    subtitle: p.months,
    haystack: norm([p.id, p.name, p.months, ...p.points].join(" ")),
    to: '/programme',
  })),
  ...PILLARS.map((p) => ({
    id: `pillar-${p.id}`,
    kind: 'Page' as const,
    title: `Pillar ${p.id}, ${p.name}`,
    subtitle: `Led by ${p.lead}`,
    haystack: norm([p.id, p.name, p.lead, ...p.mdas, ...p.streams].join(' ')),
    to: `/research#pillar-${p.id}`,
  })),
  {
    id: 'page-opportunities',
    kind: 'Page',
    title: 'Opportunities',
    subtitle: '15 postdoctoral fellowships and 15 PhD studentships',
    haystack: norm(
      'opportunities jobs vacancies positions apply application funded fellowship studentship postdoc phd stipend salary recruitment eligibility how to apply deadline',
    ),
    to: '/opportunities',
  },
  {
    id: 'page-people',
    kind: 'Page',
    title: 'People',
    subtitle: 'Key Experts, Professorial Lead and Non-Key Experts',
    haystack: norm('people team staff experts supervisors professors who'),
    to: '/people',
  },
  {
    id: 'page-contact',
    kind: 'Page',
    title: 'Contact',
    subtitle: 'Enquiries and registering interest',
    haystack: norm('contact email enquiry enquiries register interest address abuja kano'),
    to: '/contact',
  },
]

/**
 * Ranked substring search. Every whitespace-separated term must appear;
 * hits score higher when a term starts a word, and higher still when it
 * opens the title, so "A-P1" and "hate" both land where you expect.
 */
export function search(query: string, limit = 24): Hit[] {
  const q = norm(query)
  if (q.length < 2) return []
  const terms = q.split(' ')

  const scored: { hit: Hit; score: number }[] = []
  for (const hit of INDEX) {
    const title = norm(hit.title)
    let score = 0
    let all = true
    for (const t of terms) {
      const inTitle = title.indexOf(t)
      const inBody = hit.haystack.indexOf(t)
      if (inTitle < 0 && inBody < 0) {
        all = false
        break
      }
      if (inTitle === 0) score += 12
      else if (inTitle > 0) score += title[inTitle - 1] === ' ' ? 8 : 4
      if (inBody >= 0) score += hit.haystack[inBody - 1] === ' ' || inBody === 0 ? 3 : 1
    }
    if (!all) continue
    if (hit.kind === 'Position') score += 2
    scored.push({ hit, score })
  }

  return scored
    .sort((a, b) => b.score - a.score || a.hit.title.localeCompare(b.hit.title))
    .slice(0, limit)
    .map((s) => s.hit)
}
