import { Section, GhostLink, PrimaryLink, Eyebrow } from '../components/ui'

export default function NotFound() {
  return (
    <Section bordered={false}>
      <Eyebrow tone="primary">404</Eyebrow>
      <h1 className="mt-4 text-3xl font-bold md:text-5xl">That page is not here</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground">
        The link may be out of date, or the page may not have been written yet.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <PrimaryLink to="/">Back to the home page</PrimaryLink>
        <GhostLink to="/opportunities">Funded positions</GhostLink>
      </div>
    </Section>
  )
}
