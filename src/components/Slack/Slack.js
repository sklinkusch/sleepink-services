/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

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
      <Pagination prev={{ url: "/asana", title: "Asana" }} next={{ url: "/netlify", title: "Netlify"}} />
    </div>
  )
}

export default Slack