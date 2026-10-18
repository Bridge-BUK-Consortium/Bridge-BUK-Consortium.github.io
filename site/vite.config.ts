import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages: set VITE_BASE to "/<repo-name>/" for a project site
// (e.g. VITE_BASE=/cluster-e/). A user/org site or a custom domain
// needs no override. The deploy workflow sets it automatically.
const base = process.env.VITE_BASE ?? '/'

// GitHub Pages has no server-side rewrite, so a deep link such as
// /opportunities/A-P1 would 404 before React Router ever loads.
// Serving the same document as 404.html makes Pages hand every unknown
// path to the app, which then renders the right route.
function spaFallback(): Plugin {
  return {
    name: 'gh-pages-spa-fallback',
    apply: 'build',
    closeBundle() {
      const out = resolve(__dirname, 'dist')
      const index = resolve(out, 'index.html')
      if (existsSync(index)) copyFileSync(index, resolve(out, '404.html'))
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), spaFallback()],
  server: { port: 5173, open: false },
  build: { outDir: 'dist' },
})
