/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

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
        <li><a href="https://www.npmjs.com/package/theme-ui" target="_blank" rel="noopener noreferrer">Theme-UI</a></li>
        <li><a href="https://www.npmjs.com/package/styled-components" target="_blank" rel="noopener noreferrer">Styled components</a></li>
      </ul>
      <Pagination prev={{ url: "/slack", title: "Slack" }} next={{ url: "/github", title: "GitHub"}} />
    </div>
  )
}

export default Netlify