/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom"

function Slack () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Slack</h1>
      <h2>Aufgaben</h2>
      <ul>
        <li>Teamkommunikation in einem Unternehmen</li>
        <li>Austausch von Dateien</li>
        <li>Videokonferenzen</li>
        <li>Empfang des Lagerstandsberichts im #logistik-Channel</li>
      </ul>
      <h2>Techniken</h2>
      <p>keine</p>
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Slack