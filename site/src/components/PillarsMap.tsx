import { Link } from 'react-router-dom'
import { PILLARS, STREAMS } from '../data/programme'

/**
 * The pillars as a plain index. Each pillar keeps its bar from the cluster
 * mark, in the mark's tone and proportions, so the logo reads as the key.
 */

const RAMP = ['var(--ui-ramp-1)', 'var(--ui-ramp-2)', 'var(--ui-ramp-3)']
const BAR_WIDTH = ['5.75rem', '3.75rem', '4.5rem'] // the mark's 92 : 60 : 72

export default function PillarsMap() {
  return (
    <div className="grid divide-y divide-border">
      {PILLARS.map((p, i) => (
        <div key={p.id} className="grid gap-4 py-7 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
          <div>
            <span aria-hidden="true" className="block h-2" style={{ background: RAMP[i], width: BAR_WIDTH[i] }} />
            <p className="ui-eyebrow mt-3">Pillar {p.id}</p>
            <h3 className="mt-1.5 text-lg font-bold leading-snug tracking-normal">{p.name}</h3>
          </div>
          <ul className="grid gap-5">
            {p.streams.map((id) => {
              const s = STREAMS.find((x) => x.id === id)!
              return (
                <li key={id}>
                  <Link
                    to={`/research#${id.toLowerCase()}`}
                    className="font-semibold leading-snug text-primary underline underline-offset-4 hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                  <p className="ui-body-sm mt-1">{s.mdas.join(', ')}</p>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
