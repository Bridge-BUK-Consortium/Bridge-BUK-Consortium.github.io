import { Link } from 'react-router-dom'
import { PROGRAMME } from '../data/programme'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold">Cluster E</p>
            <p className="ui-body-sm mt-2">
              {PROGRAMME.clusterTitle}. A joint venture of four Nigerian universities led by{' '}
              {PROGRAMME.lead}, with the University of Leicester and York St John University, for the{' '}
              {PROGRAMME.programme} under {PROGRAMME.project}.
            </p>
            <p className="ui-meta mt-4">{PROGRAMME.email}</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:gap-x-10 sm:gap-y-2" aria-label="Footer">
            <Link className="text-muted-foreground hover:text-foreground" to="/research">Research</Link>
            <Link className="text-muted-foreground hover:text-foreground" to="/opportunities">Opportunities</Link>
            <Link className="text-muted-foreground hover:text-foreground" to="/people">People</Link>
            <Link className="text-muted-foreground hover:text-foreground" to="/consortium">Consortium</Link>
            <Link className="text-muted-foreground hover:text-foreground" to="/programme">Programme</Link>
            <Link className="text-muted-foreground hover:text-foreground" to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs leading-6 text-muted-foreground">
          <p>© {new Date().getFullYear()} Cluster E</p>
          <p className="mt-1 hidden sm:block">
            Bayero University Kano, Aliko Dangote University of Science and Technology Wudil,
            Federal University of Technology Babura, Northwest University Kano, University of
            Leicester and York St John University
          </p>
          <p className="mt-2 text-[11px]">
            <span className="hidden sm:inline">Client: </span>
            {PROGRAMME.client}
          </p>
        </div>
      </div>
    </footer>
  )
}
