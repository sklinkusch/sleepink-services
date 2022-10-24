/** @jsxImportSource theme-ui */

import { Link } from 'react-router-dom'
import Struktur from "./Struktur.png"

function Webseite () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Struktur der alten Webseite</h1>
      <img src={Struktur} alt="Struktur der Webseite" />
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Webseite