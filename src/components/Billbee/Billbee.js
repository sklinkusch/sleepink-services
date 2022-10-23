/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom"

function Billbee () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Billbee</h1>
      <h2>Aufgaben</h2>
      <ul>
        <li>Abwicklung der Zahlungen</li>
        <li>Statistik über Verkäufe über verschiedene Kanäle</li>
        <li>Versand</li>
        <li>Bestandsmanagement im Lager</li>
        <li>API für Verkäufe und Neuversand</li>
      </ul>
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Billbee