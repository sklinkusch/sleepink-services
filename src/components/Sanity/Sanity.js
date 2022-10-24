/** @jsxImportSource theme-ui */

import { Link } from 'react-router-dom'

function Sanity () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Sanity</h1>
      <p>Sanity ist ein so genanntes Content-Management-System (CMS). Dadurch kann Content für Internet-Seiten bereitgestellt werden. Manchmal wird der Service auch als Datenbank genutzt, obwohl das eigentlich nicht sein Zweck ist.</p>
      <h2>Repositorys (Auswahl)</h2>
      <ul>
        <li>CMS für die alte sleep.ink-Seite bei Netlify</li>
        <li>CMS für den Schlafblog bei Netlify</li>
        <li>Customer-Relationship-Management (CRM) für Kontakte zu Geschäftskunden</li>
        <li>Datenbank für die aktuellen Verkäufe und deren Status</li>
        <li>Logfiles für die Skripte node-shipment, node-dhl und node-duration</li>
      </ul>
      <h2>Techniken</h2>
      <p>keine zusätzlichen Techniken</p>
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Sanity