import { Link } from 'react-router-dom'
import { PROGRAMME } from '../data/programme'

const LINKS = [
  ['Research', '/research'],
  ['Opportunities', '/opportunities'],
  ['People', '/people'],
  ['Consortium', '/consortium'],
  ['Programme', '/programme'],
  ['Contact', '/contact'],
] as const

const MEMBERS = [
  'Bayero University, Kano (lead)',
  'Aliko Dangote University of Science and Technology, Wudil',
  'Federal University of Technology, Babura',
  'Northwest University, Kano',
  'University of Leicester',
  'York St John University',
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,2fr)_minmax(0,5fr)] md:gap-10">
          <div>
            <p className="text-lg font-bold">{PROGRAMME.name}</p>
            <p className="ui-eyebrow mt-1">{PROGRAMME.centre}</p>
            <p className="ui-body-sm mt-3">
              The proposed centre for {PROGRAMME.project} {PROGRAMME.cluster}: {PROGRAMME.clusterTitle}.
            </p>
            <a
              className="mt-3 inline-block break-all text-sm font-semibold text-primary hover:underline"
              href={`mailto:${PROGRAMME.email}`}
            >
              {PROGRAMME.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="ui-eyebrow">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-1">
              {LINKS.map(([label, to]) => (
                <li key={to}>
                  <Link className="text-muted-foreground hover:text-foreground" to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="ui-eyebrow">The six universities</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {MEMBERS.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-border pt-5 text-xs leading-5 text-muted-foreground sm:flex-row sm:justify-between sm:gap-6">
          <p className="shrink-0">© {new Date().getFullYear()} {PROGRAMME.name}</p>
          <p className="sm:text-right">
            {PROGRAMME.programme}, {PROGRAMME.project}, {PROGRAMME.client}
          </p>
        </div>
      </div>
    </footer>
  )
}
