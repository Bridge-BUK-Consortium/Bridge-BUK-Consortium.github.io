/* The cluster's mark: three bars in the cover's green ramp, one for each
   pillar. On the home page the same three bars gain a stem and labels and
   become the pillar key. Inside an inverted band the ramp re-points to
   white and mints, so the mark works on the forest ground too. */
export default function ClusterMark({
  className = '',
  title = 'CREDENCE, Project BRIDGE Cluster E',
}: {
  className?: string
  title?: string
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      <rect x="4" y="10" width="92" height="20" fill="var(--ui-ramp-1)" />
      <rect x="4" y="40" width="60" height="20" fill="var(--ui-ramp-2)" />
      <rect x="4" y="70" width="72" height="20" fill="var(--ui-ramp-3)" />
    </svg>
  )
}
