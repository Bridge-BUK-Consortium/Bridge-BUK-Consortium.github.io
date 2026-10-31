import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PROGRAMME, MINISTER } from '../data/programme'
import HeroFilm from '../components/HeroFilm'
import PillarsMap from '../components/PillarsMap'
import OpenCallSeats from '../components/OpenCallSeats'
import { GhostLink, BrandLink } from '../components/ui'

const WRAP = 'mx-auto max-w-7xl px-4 sm:px-5'

/** One grid for every section: the heading in a left rail, the content beside it. */
function Part({
  id,
  title,
  rail,
  className = '',
  children,
}: {
  id: string
  title: string
  rail?: ReactNode
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 ${className}`}>
      <div className={WRAP}>
        <div className="grid gap-6 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
          <div>
            <h2 id={`${id}-title`} className="text-[1.75rem] font-bold leading-tight text-balance">
              {title}
            </h2>
            {rail}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  )
}

const FACTS: [string, string[]][] = [
  ['Lead institution', [PROGRAMME.lead]],
  [
    'Also in Nigeria',
    [
      'Aliko Dangote University of Science and Technology',
      'Federal University of Technology Babura',
      'Northwest University',
    ],
  ],
  ['In the United Kingdom', ['University of Leicester', 'York St John University']],
  ['Federal Ministry', [`${PROGRAMME.client} (FMCIDE), through Project BRIDGE`]],
]

const FIGURES = [
  ['6', 'research streams in three pillars'],
  ['30', 'funded postdocs and PhD candidates'],
  ['36', 'months, planned from December 2026 to November 2029'],
  ['18', 'policy briefs to named agencies'],
]

export default function Home() {
  return (
    <>
      {/* The site's status comes first: it is pre-award. */}
      <div className="ui-invert">
        <p className={`${WRAP} flex flex-wrap gap-x-6 py-2 text-sm`}>
          <span className="font-semibold">
            {PROGRAMME.project} {PROGRAMME.cluster}
          </span>
          <span>The centre and its positions are proposed, subject to the award of the Cluster E contract.</span>
        </p>
      </div>

      <div className={WRAP}>
      <section className="grid gap-x-14 gap-y-6 border-b border-border py-6 sm:py-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:py-12">
        <div className="min-w-0">
          <h1 className="text-[2rem] font-bold text-balance sm:text-5xl xl:text-[3.25rem]">{PROGRAMME.centre}</h1>
          <p className="mt-3 text-lg font-semibold leading-snug text-primary sm:text-xl">{PROGRAMME.clusterTitle}</p>
        </div>

        <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <HeroFilm />
        </div>

        <div className="flex min-w-0 flex-col">
          <p className="max-w-[56ch] text-lg leading-relaxed">
            More than {PROGRAMME.fibre} of new fibre will bring millions of Nigerians online for the first
            time. CREDENCE will produce the research regulators need in order to protect them, and train
            thirty researchers who will carry the work on.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-auto lg:pt-6">
            <BrandLink to="/research">Explore the research</BrandLink>
            <GhostLink to="/opportunities">Funded positions: 15 postdocs, 15 PhDs</GhostLink>
          </div>
        </div>
      </section>
      </div>

      <Part id="who-we-are" title="Who we are">
        <p className="max-w-[62ch] text-lg leading-relaxed">
          CREDENCE, the Nigerian Centre for Trust and Safety Online, is the proposed centre for Project
          BRIDGE Cluster E, subject to the award of the Cluster E contract. It is a consortium of six
          universities led by Bayero University, Kano.
        </p>

        <dl className="mt-8 border-t border-border">
          {FACTS.map(([k, v]) => (
            <div key={k} className="grid gap-y-1 border-b border-border py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:gap-x-6">
              <dt className="font-semibold">{k}</dt>
              {v.map((line, i) => (
                <dd key={line} className={i ? 'sm:col-start-2' : ''}>{line}</dd>
              ))}
            </div>
          ))}
        </dl>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4">
          {FIGURES.map(([k, v]) => (
            <div key={k} className="flex flex-col-reverse justify-end">
              <dt className="ui-body-sm mt-2">{v}</dt>
              <dd className="text-[2.75rem] font-bold leading-none text-primary">{k}</dd>
            </div>
          ))}
        </dl>
      </Part>

      <Part id="leadership" title="The Minister and the Team Lead" className="ui-tint">
        <div className="grid divide-y divide-border">
          <div className="grid gap-5 pb-8 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
            <img
              src={`${import.meta.env.BASE_URL}${MINISTER.photo}`}
              alt={MINISTER.name}
              width="800"
              height="800"
              className="block aspect-square w-40 object-cover object-top sm:w-full"
            />
            <div className="min-w-0">
              <h3 className="ui-eyebrow leading-snug">Programme sponsor, Federal Republic of Nigeria</h3>
              <blockquote className="mt-3 text-2xl font-semibold leading-snug text-balance">
                &ldquo;{MINISTER.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold">{MINISTER.name}</p>
              <p className="ui-body-sm">{MINISTER.title}</p>
            </div>
          </div>

          <div className="grid gap-5 pt-8 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
            <img
              src={`${import.meta.env.BASE_URL}team/shamsuddeen.jpg`}
              alt="Dr. Shamsuddeen Hassan Muhammad"
              className="block aspect-square w-40 object-cover object-top sm:w-full"
            />
            <div className="min-w-0">
              <h3 className="ui-eyebrow">The Team Lead</h3>
              <p className="mt-3 text-2xl font-semibold leading-snug">Dr. Shamsuddeen Hassan Muhammad</p>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-pretty">
                Team Lead of CREDENCE and lead of Pillar A, Online Harms and Online Safety. Senior
                Lecturer in the Department of Software Engineering at Bayero University, Kano.
              </p>
            </div>
          </div>
        </div>
      </Part>

      <Part
        id="pillars"
        title="Three pillars, six research streams"
        rail={
          <>
            <p className="ui-body-sm mt-3">
              Each research question names the agency, the instrument and the decision it is meant to serve.
            </p>
            <Link className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4" to="/research">
              All six streams
            </Link>
          </>
        }
      >
        <PillarsMap />
      </Part>

      <Part
        id="funded-places"
        title="Thirty funded places for the next generation of researchers."
        rail={<p className="mt-3 font-semibold">Subject to the award of the Cluster E contract.</p>}
        className="ui-invert"
      >
        <OpenCallSeats />
      </Part>

      <Part id="contact" title="Work with CREDENCE">
        <p className="max-w-[62ch] text-lg leading-relaxed">
          We welcome enquiries from government agencies, platforms, civil society organisations and researchers.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <BrandLink to="/contact">Contact the cluster</BrandLink>
          <GhostLink to="/people">Meet the team</GhostLink>
        </div>
      </Part>
    </>
  )
}
