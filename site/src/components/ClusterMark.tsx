/* The cluster's mark: a capital E built from the cover's green ramp.
   The stem and top arm are the deep green, the middle arm the mid green
   and the bottom arm the light green, the same steps the cover's four
   title lines take. Inside an inverted band the ramp re-points to white
   and mints, so the same mark works on the forest ground. */
export default function ClusterMark({
  className = '',
  title = 'CREDENCE, Project BRIDGE Cluster E',
}: {
  className?: string
  title?: string
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      <rect x="8" y="8" width="20" height="84" fill="var(--ui-ramp-1)" />
      <rect x="8" y="8" width="84" height="20" fill="var(--ui-ramp-1)" />
      <rect x="28" y="40" width="54" height="20" fill="var(--ui-ramp-2)" />
      <rect x="28" y="72" width="64" height="20" fill="var(--ui-ramp-3)" />
    </svg>
  )
}
