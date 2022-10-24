/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

function Github () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>GitHub</h1>
      <p>Auf GitHub wird die Codebasis mehrerer Projekte gespeichert.</p>
      <h2>Repositorys (Auswahl)</h2>
      <ul>
        <li>neue sleep.ink-Seite (sleepify)</li>
        <li>alte sleep.ink-Seite (sleep-ink)</li>
        <li>Schlafblog (besserschlafen)</li>
        <li>alle Skripte auf dem Linode</li>
        <li>beide Seiten auf Vercel</li>
      </ul>
      <h2>Techniken</h2>
      <p>keine zusätzlichen Techniken</p>
      <Pagination prev={{ url: "/netlify", title: "Netlify"}} next={{ url: "/sanity", title: "Sanity"}} />
    </div>
  )
}

export default Github