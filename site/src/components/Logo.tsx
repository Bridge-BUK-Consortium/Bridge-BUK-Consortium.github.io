/* Partner marks. Drop a file into public/logos/<key>.png and add the key
   here; anything without a file falls back to a typographic plate, so the
   strip stays consistent until the remaining logos arrive. */
const FILES: Record<string, string> = {
  BUK: 'logos/buk.png',
}

export default function Logo({
  short,
  name,
  className = '',
}: {
  short: string
  name: string
  className?: string
}) {
  const file = FILES[short]
  if (file) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${file}`}
        alt={name}
        loading="lazy"
        className={`h-16 w-auto object-contain sm:h-20 ${className}`}
      />
    )
  }
  return (
    <span
      aria-label={name}
      className={`grid h-16 min-w-[7rem] place-items-center rounded-md border border-dashed border-border px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:h-20 ${className}`}
    >
      {short}
    </span>
  )
}
