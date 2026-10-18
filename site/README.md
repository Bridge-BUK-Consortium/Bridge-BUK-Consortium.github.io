# Cluster E — project website

Static site for **Cluster E: Trust, Safety, Consumer Protection and Online Harms**, part of
the National Digital Economy University Led Research Programme under Project BRIDGE.
Content is drawn from the Full Technical Proposal in `../Cluster_E_proposal_overleaf/main.tex`.

Stack: Vite 6 · React 18 · TypeScript · Tailwind CSS 4 · React Router 6. No backend.

## Running it locally

```bash
cd site
npm install
npm run dev      # http://localhost:5173
```

`npm run build` type-checks and writes the static site to `dist/`.
`npm run preview` serves that build.

## Where the content lives

All copy is data, not markup, so it can be edited without touching components:

| File | What it holds |
| --- | --- |
| `src/data/programme.ts` | Pillars, the six research streams, phases, deliverables, principles |
| `src/data/positions.ts` | The 36 advertised topics, the terms of both schemes, selection process, cohort allocation |
| `src/data/people.ts` | Key and Non-Key Experts, the six institutions, the platforms |

## Logos

`src/components/Logo.tsx` holds a `FILES` map from an institution's short code to a file in
`public/logos/`. Bayero University, Kano is in place at `public/logos/buk.png`. Any institution
without a file falls back to a typographic plate, so the strip stays tidy until the rest arrive.
To add one: drop `public/logos/adustech.png` and add `ADUSTECH: 'logos/adustech.png'` to the map.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `cluster-e-site`.

1. Push this repository to GitHub.
2. Settings → Pages → **Source: GitHub Actions**.
3. Push to `cluster-e-site`. The site appears at `https://<org>.github.io/<repo>/`.

Three details make Pages work:

- **Base path.** A project site is served from `/<repo>/`, so the workflow sets
  `VITE_BASE=/<repo>/` at build time. On a custom domain or a `<user>.github.io`
  repository, delete that `env:` block so the base stays `/`.
- **Deep links.** Pages has no rewrite rule, so `/opportunities/A-P1` would 404 before
  React Router loads. The build copies `index.html` to `404.html`, which makes Pages hand
  every unknown path to the app.
- **`.nojekyll`.** Stops Pages running the files through Jekyll.

### Custom domain

Put the domain in `public/CNAME` (one line, no protocol), set it under Settings → Pages,
and remove the `VITE_BASE` env block from the workflow.

## Design system

The look is taken from the cover of the Full Technical Proposal: deep BUK green on white, mint
panels, heavy Public Sans headings and uppercase green labels. `src/index.css` holds the whole
system. `@theme` declares the token *names* (and so generates the Tailwind utilities); the `:root`
block supplies the values. Components read only semantic tokens, so a colour change is a one-line
edit there. Inverted bands (`.ui-invert`) re-point the tokens locally, so a dark green band needs no
special markup. The four-step green ramp from the cover is `--ui-ramp-1` to `--ui-ramp-4`.

## Search

`src/search.ts` builds a client-side index over every position, person, stream, institution,
deliverable, phase and page at module load — no network, no dependency. Ranking requires all
terms to match and rewards word-start and title hits, so `A-P1`, `NDPC` and `deepfake` all
land where you expect. Open it with the header button, `⌘K`/`Ctrl-K`, or `/`. The People page
also has its own name filter, bound to the `?q=` parameter.
