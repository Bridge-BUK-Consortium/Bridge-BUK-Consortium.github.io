import { Link } from 'react-router-dom'
import { PILLARS, PROGRAMME, STREAMS, type StreamId } from '../data/programme'

/**
 * The cluster mark, grown into a map. The stem on the left carries the
 * centre's name; the three bars are the pillars, in the mark's ramp and
 * proportions; each bar branches to its two streams, drawn as a stroke
 * icon with code, title and up to three agencies. On phones the stem
 * turns into a band across the top and the bars stack.
 */

const RAMP = ['var(--ui-ramp-1)', 'var(--ui-ramp-2)', 'var(--ui-ramp-3)']
const BAR_WIDTH = ['100%', '65%', '78%'] // the mark's 92 : 60 : 72

const ICONS: Record<StreamId, JSX.Element> = {
  RS1: ( // speech bubble with a slash
    <>
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M9 13l6-6" />
    </>
  ),
  RS2: ( // shield with a child
    <>
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M9 17c0-2 1.5-3 3-3s3 1 3 3" />
    </>
  ),
  RS3: ( // fingerprint
    <>
      <path d="M4.5 10a7.5 7.5 0 0 1 15 0" />
      <path d="M7 12a5 5 0 0 1 10 0v3" />
      <path d="M9.5 12a2.5 2.5 0 0 1 5 0v6" />
      <path d="M12 12v8" />
    </>
  ),
  RS4: ( // scales
    <>
      <path d="M12 4v16M8 20h8M5 7h14" />
      <path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7z" />
      <path d="M19 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
    </>
  ),
  RS5: ( // shopping bag with a warning mark
    <>
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M12 11v4M12 17.5v.5" />
    </>
  ),
  RS6: ( // padlock over a document
    <>
      <path d="M7 3h7l4 4v14H7V3z" />
      <path d="M14 3v4h4" />
      <rect x="9.5" y="12" width="5" height="5" />
      <path d="M10.5 12v-1.5a1.5 1.5 0 0 1 3 0V12" />
    </>
  ),
}

function Stream({ id }: { id: StreamId }) {
  const s = STREAMS.find((x) => x.id === id)!
  return (
    <Link
      to={`/research#${id.toLowerCase()}`}
      className="group relative block border-l border-border py-1 pl-6 before:absolute before:left-0 before:top-5 before:h-px before:w-5 before:bg-border hover:border-primary hover:before:bg-primary"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ICONS[id]}
      </svg>
      <p className="mt-2 text-sm font-semibold leading-snug text-foreground group-hover:underline">
        {s.title}
      </p>
      <p className="mt-2 flex flex-wrap gap-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
        {s.mdas.slice(0, 3).map((m) => (
          <span key={m} className="border border-border px-1.5 py-0.5">
            {m}
          </span>
        ))}
      </p>
    </Link>
  )
}

export default function PillarsMap() {
  return (
    <figure
      className="grid gap-y-8 md:grid-cols-[2.75rem_1fr] md:gap-x-8"
      aria-label="Three pillars, six research streams"
    >
      {/* the stem */}
      <div
        className="flex items-end p-2 md:row-span-3 md:items-start md:[writing-mode:vertical-rl] md:rotate-180"
        style={{ background: RAMP[0] }}
      >
        <span className="ui-eyebrow text-white">{PROGRAMME.centre}</span>
      </div>

      {PILLARS.map((p, i) => (
        <div key={p.id} className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10">
          <div
            className={`flex min-h-24 items-end gap-3 p-4 ${i === 2 ? 'text-[var(--ui-ramp-1)]' : 'text-white'}`}
            style={{ background: RAMP[i], width: BAR_WIDTH[i] }}
          >
            <span className="font-mono text-3xl font-bold leading-none">{p.id}</span>
            <span className="text-sm font-semibold leading-tight">{p.name}</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {p.streams.map((id) => (
              <Stream key={id} id={id} />
            ))}
          </div>
        </div>
      ))}
    </figure>
  )
}
