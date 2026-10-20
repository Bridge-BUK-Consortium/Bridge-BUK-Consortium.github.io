import { BrandLink, Eyebrow, GhostLink } from './ui'

/**
 * Thirty seats. Two rows of fifteen seated figures, postdocs in ramp-4
 * above PhD candidates in ramp-3, each row headed by its number. The
 * count is the picture; the words only name the rows.
 */

const ROWS = [
  { label: 'Postdoctoral fellowships', colour: 'var(--ui-ramp-4)' },
  { label: 'PhD studentships', colour: 'var(--ui-ramp-3)' },
]

function Seats({ colour }: { colour: string }) {
  return (
    <svg
      viewBox="0 0 330 26"
      preserveAspectRatio="xMinYMid meet"
      className="h-8 w-full max-w-[720px] sm:h-12 md:h-14"
      fill={colour}
      aria-hidden="true"
    >
      {Array.from({ length: 15 }, (_, i) => (
        <g key={i} transform={`translate(${i * 22} 0)`}>
          <circle cx="8" cy="5" r="4" />
          <path d="M1 26v-9a7 7 0 0 1 14 0v9z" />
        </g>
      ))}
    </svg>
  )
}

export default function OpenCallSeats() {
  return (
    <>
      <Eyebrow tone="primary">Open call, subject to contract award</Eyebrow>
      <h2 className="ui-display mt-3 max-w-4xl font-bold text-balance">
        Thirty funded places for the next generation of researchers.
      </h2>

      <div
        role="img"
        aria-label="Fifteen postdoctoral fellowships and fifteen PhD studentships"
        className="mt-10 grid gap-y-8 sm:mt-14"
      >
        {ROWS.map((r) => (
          <div key={r.label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6 sm:gap-x-10">
            <div className="w-28 sm:w-auto">
              <p className="ui-figure" style={{ color: r.colour }}>15</p>
              <p className="ui-meta mt-2 uppercase">{r.label}</p>
            </div>
            <Seats colour={r.colour} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3 sm:mt-14">
        <BrandLink to="/opportunities">See the positions</BrandLink>
        <GhostLink to="/opportunities#how-to-apply">How to apply</GhostLink>
      </div>
    </>
  )
}
