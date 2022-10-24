/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom"

function Pagination ({ prev = undefined, next = undefined }) {
  return (
    <div sx={{ mt: "50px", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
      {prev ? (<Link to={prev.url} sx={{ textAlign: "left"}} >{prev.title}</Link>) : (<div>&nbsp;</div>)}
      <Link to="/" sx={{ textAlign: "center" }}>Zurück zur Hauptseite</Link>
      {next ? (<Link to={next.url} sx={{ textAlign: "right" }}>{next.title}</Link>) : (<div>&nbsp;</div>)}
    </div>
  )
}

export default Pagination