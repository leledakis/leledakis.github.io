# Dimitris Leledakis — Portfolio

A single-page professional portfolio site: summary, career timeline, impact
highlights, skills, education/certifications, and a downloadable CV.

## Editing content

All the text on the site (name, summary, jobs, skills, contact info) lives
in [`content.js`](content.js). Edit that file to update anything — no
HTML/CSS knowledge required. The layout (`index.html`), styling
(`css/styles.css`), and rendering logic (`js/script.js`) shouldn't need to
change for normal content edits.

To update the downloadable CV, replace
`assets/Dimitris_Leledakis_CV.pdf` with a new file of the same name (or
update `cvFile` in `content.js` if you rename it).

## Viewing the site

Ask Claude to "start the portfolio preview", or serve the folder with any
static file server, e.g.:

```bash
python -m http.server 5173
```

Then open `http://localhost:5173`.

## Deploying

This is a static site (no build step) — it can be deployed as-is to
GitHub Pages, Netlify, Vercel, or any static host.
