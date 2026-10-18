import type { Person } from '../data/people'

const initials = (name: string) =>
  name
    .replace(/^(Dr\.|Prof\.|Assoc\. Prof\.|Mrs\.|Mr\.|Ms\.)\s+/, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

/* Members without a photograph get a tile in one of the cover's greens,
   chosen from the name so the same person always gets the same tone. */
const tone = (name: string) =>
  `var(--ui-ramp-${([...name].reduce((h, c) => h + c.charCodeAt(0), 0) % 3) + 1})`

export default function Avatar({ person, size = 'sm' }: { person: Person; size?: 'sm' | 'lg' }) {
  const box = size === 'lg' ? 'h-20 w-20 sm:h-24 sm:w-24 text-xl' : 'h-12 w-12 sm:h-14 sm:w-14 text-sm'
  const src = person.photo ? `${import.meta.env.BASE_URL}${person.photo}` : undefined
  return src ? (
    <img
      src={src}
      alt=""
      loading="lazy"
      className={`${box} shrink-0 object-cover object-top`}
    />
  ) : (
    <span
      aria-hidden="true"
      className={`${box} grid shrink-0 place-items-center font-mono font-bold text-white`}
      style={{ backgroundColor: tone(person.name) }}
    >
      {initials(person.name)}
    </span>
  )
}
