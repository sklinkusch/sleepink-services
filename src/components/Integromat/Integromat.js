/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

function Integromat () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Integromat</h1>
      <p>Integromat (inzwischen Make) ist ein Service, der verschiedene Transferprozesse bereitstellt. Dazu kann der Service sich mit verschiedenen Accounts bei verschiedenen Services wie Google, Asana, Slack verbinden, eigene Webhooks generieren und nutzen, aber auch interne Datentransformationen machen.</p>
      <h2>Routinen (Auswahl)</h2>
      <dl>
        <dt>Retouren ➡️ Asana</dt>
        <dd>Erstellung eines Tasks für die Buchhaltung bei Rückzahlung von Vorkassebestellungen</dd>
        <dt>Storage ➡️ Slack</dt>
        <dd>Weiterleitung des Lagerstandsberichts an den #logistik-Kanal im Daizu-Slack</dd>
        <dt>Duration ➡️ Asana</dt>
        <dd>Erstellung eines Tasks für die Logistik bei nicht rechtzeitig erfolgtem Versand bezahlter Bestellungen</dd>
      </dl>
      <h2>Techniken</h2>
      <p>keine, aber bei Datentransformationen und API-Requests sind JavaScript-Kenntnisse vorteilhaft</p>
      <Pagination prev={{ url: "/vercel", title: "Vercel" }} next={{ url: "/asana", title: "Asana" }} />
    </div>
  )
}

export default Integromat