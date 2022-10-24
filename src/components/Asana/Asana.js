/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

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
      <Pagination prev={{ url: "/integromat", title: "Integromat" }} next={{ url: "/slack", title: "Slack" }} />
    </div>
  )
}

export default Asana