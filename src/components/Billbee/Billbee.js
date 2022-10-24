/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

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
      <Pagination prev={{ url: "/shopify", title: "Shopify" }} next={{ url: "/linode", title: "Linode"}} />
    </div>
  )
}

export default Billbee