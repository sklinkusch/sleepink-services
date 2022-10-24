/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"
import Struktur from "./Struktur.png"

function Webseite () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Struktur der alten Webseite</h1>
      <img src={Struktur} alt="Struktur der Webseite" />
      <Pagination prev={{ url: "/sanity", title: "Sanity" }} next={{ url: "/weitere", title: "Weitere Services"}} />
    </div>
  )
}

export default Webseite