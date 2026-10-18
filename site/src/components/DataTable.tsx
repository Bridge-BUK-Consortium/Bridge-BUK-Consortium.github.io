import type { ReactNode } from 'react'

export type Column<R> = {
  key: string
  head: string
  cell: (row: R) => ReactNode
  /** Shown as the heading of the stacked card on a phone. */
  primary?: boolean
  className?: string
}

/**
 * A table on a tablet or desktop; a stack of labelled cards on a phone.
 * Horizontal scroll inside a 375px viewport is a last resort, not a layout.
 */
export default function DataTable<R>({
  rows,
  columns,
  rowKey,
}: {
  rows: R[]
  columns: Column<R>[]
  rowKey: (row: R) => string
}) {
  const primary = columns.find((c) => c.primary) ?? columns[0]
  const rest = columns.filter((c) => c !== primary)

  return (
    <>
      {/* Phone */}
      <ul className="grid gap-3 md:hidden">
        {rows.map((r) => (
          <li key={rowKey(r)} className="ui-card p-4">
            <p className="text-sm font-bold leading-6">{primary.cell(r)}</p>
            <dl className="mt-3 grid gap-2 border-t border-border pt-3">
              {rest.map((c) => (
                <div key={c.key} className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3">
                  <dt className="ui-eyebrow ui-eyebrow-muted text-[10px]">{c.head}</dt>
                  <dd className="min-w-0 text-sm leading-6">{c.cell(r)}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      {/* Tablet and up */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              {columns.map((c) => (
                <th
                  key={c.key}
                  className="ui-eyebrow ui-eyebrow-muted px-3 py-3 text-[10px] font-normal"
                >
                  {c.head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={rowKey(r)} className="border-b border-border">
                {columns.map((c) => (
                  <td key={c.key} className={`px-3 py-4 align-top leading-6 ${c.className ?? ''}`}>
                    {c.cell(r)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
