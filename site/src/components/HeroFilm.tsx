import { useRef, useState } from 'react'

const BASE = `${import.meta.env.BASE_URL}video/credence-explainer`

/** The explainer film. Never autoplays: it has sound, and most visitors are on mobile data. */
export default function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-md bg-black shadow-2xl ring-1 ring-white/15">
        <video
          ref={video}
          className="h-full w-full"
          controls={started}
          playsInline
          preload="none"
          poster={`${BASE}.jpg`}
          onPlay={() => setStarted(true)}
          aria-label="Explainer film about CREDENCE"
        >
          <source src={`${BASE}.mp4`} type="video/mp4" />
        </video>
        {!started && (
          <button
            type="button"
            onClick={() => video.current?.play()}
            aria-label="Play the film, 2 minutes 35 seconds"
            className="group absolute inset-0 flex items-end justify-center pb-[2.5%] sm:pb-[5%]"
          >
            {/* Below the title card's text, so the poster stays readable. Fixed colour: .ui-invert re-points the ramp to light tones. */}
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ring-2 ring-white transition-transform group-hover:scale-105 group-focus-visible:scale-105 sm:px-6 sm:py-3 sm:text-base"
              style={{ backgroundColor: '#0b3b29' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
              Play film, 2:35
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm font-semibold">Watch: CREDENCE in under three minutes</figcaption>
    </figure>
  )
}
