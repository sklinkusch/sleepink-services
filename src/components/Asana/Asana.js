/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom"

function Asana () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Asana</h1>
      <h2>Aufgaben</h2>
      <ul>
        <li>Aufgabenverwaltung für die unterschiedlichen Mitarbeiter eines Unternehmens</li>
        <li>Verwaltung der OKRs (Objectives and Key Results)</li>
        <li>Agiles Projektmanagement in der Entwicklung über Kanban</li>
      </ul>
      <h2>Techniken</h2>
      <p>keine</p>
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Asana