import { Link } from 'react-router-dom'
import { BrandLink } from './ui'

const PLACES = ['Postdoctoral fellowships', 'PhD studentships']

export default function OpenCallSeats() {
  return (
    <>
      <dl className="grid grid-cols-2 gap-6">
        {PLACES.map((label) => (
          <div key={label} className="flex flex-col-reverse justify-end border-t border-border pt-4">
            <dt className="mt-2 font-semibold">{label}</dt>
            <dd className="text-6xl font-bold leading-none">15</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <BrandLink to="/opportunities">See the positions</BrandLink>
        <Link to="/opportunities#how-to-apply" className="text-sm font-semibold underline underline-offset-4">
          How to apply
        </Link>
      </div>
    </>
  )
}
