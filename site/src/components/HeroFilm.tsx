import { useRef, useState } from 'react'

const BASE = `${import.meta.env.BASE_URL}video/credence-explainer`

/** The explainer film. Never autoplays: it has sound, and most visitors are on mobile data. */
export default function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  return (
    <figure className="relative">
      <video
        ref={video}
        className="block aspect-video w-full bg-black"
        controls={started}
        playsInline
        preload="none"
        poster={`${BASE}.jpg`}
        onPlay={() => setStarted(true)}
        aria-label="Explainer film about CREDENCE"
      >
        <source src={`${BASE}.mp4`} type="video/mp4" />
      </video>
      {/* The button sits in the caption so the poster stays clear; its ::after stretches the click area over the poster. */}
      <figcaption className="ui-invert flex min-h-16 flex-wrap items-center gap-x-4 gap-y-1 px-3 py-2.5 text-sm font-semibold">
        {!started && (
          <button
            type="button"
            onClick={() => video.current?.play()}
            className="ui-radius inline-flex min-h-11 cursor-pointer items-center gap-2 bg-white px-4 text-[#0b3b29] after:absolute after:inset-0"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
            Play film, 2:36
          </button>
        )}
        <span>Watch: CREDENCE in under three minutes</span>
      </figcaption>
    </figure>
  )
}
