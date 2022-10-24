/** @jsxImportSource theme-ui */

import { Link } from 'react-router-dom'

function Netlify () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Netlify</h1>
      <p>Netlify ist ein Dienst, bei dem man Webseiten hosten kann (ähnlich wie Vercel).</p>
      <h2>Seiten</h2>
      <ul>
        <li>alte sleep.ink-Seite (<a href="https://sleep-ink.netlify.app" target="_blank" rel="noopener noreferrer">https://sleep-ink.netlify.app</a>): Sie hat Elemente, die über iframes in die neue Seite eingebunden werden.</li>
        <ul>
          <li>Hilfeformular zur Abfrage des Status einer aktuellen Lieferung und zur Erstellung von Supporttickets in Helpdesk</li>
          <li>Retourenformular (für Geld-zurück-Garantie und Widerrufsrecht) für die Rücksendung von Waren</li>
        </ul>
        <li>Schlafblog (<a href="https://besserschlafen.de" target="_blank" rel="noopener noreferrer">https://besserschlafen.de</a>)</li>
      </ul>
      <h2>Techniken</h2>
      <ul>
        <li>Gatsby</li>
        <li>React</li>
      </ul>
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Netlify