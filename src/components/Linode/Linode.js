/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

function Linode () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Linode</h1>
      <p>Linode ist ein extern gemieteter Rechner, auf dem ein Ubuntu-Linux läuft. Für diesen Service gibt es ein <a href="https://cloud.linode.com" target="_blank" rel="noopener noreferrer">Dashboard</a> und die Möglichkeit, sich per Secure-Shell einzuloggen</p>
      <h2>Skripte</h2>
      <dl>
        <dt>node-shipment:</dt>
        <dd>
          <ul>
            <li>Abholung aktueller Bestellungen von der Billbee-API</li>
            <li>Speicherung dieser Bestellungen in einem Sanity CMS</li>
            <li>Update der Bestellungen (z.B. Versandnummer, Bezahlstatus)</li>
          </ul>
        </dd>
        <dt>node-dhl</dt>
        <dd>
          <ul>
            <li>Abholung der aktuellen Versandstatus für noch nicht zugestellte Pakete von der DHL-API</li>
            <li>Eintragung des Status in dem Sanity CMS</li>
            <li>Benachrichtigung der Kunden per E-Mail von <a href="mailto:address@daizu.de">address@daizu.de</a></li>
            <ul>
              <li>Einlieferung in eine Postfiliale/einen Paketshop</li>
              <li>Rücksendung an Daizu</li>
            </ul>
          </ul>
        </dd>
        <dt>node-duration</dt>
        <dd>
          <ul>
            <li>Berechnung der Dauer des aktuellen Versandstatus</li>
            <li>Eintragung der Dauer im Sanity CMS</li>
            <li>Erstellung von Tasks an den Logistikmanager, wenn bezahlte Waren zu lange im Lager liegen</li>
          </ul>
        </dd>
        <dt>zwei weitere Skripte</dt>
        <dd>
          <ul>
            <li>tägliche Abholung des Lagerbestands von der Billbee-API und lokale Speicherung in einer JSON-Datei</li>
            <li>tägliche Abholung der Verkäufe vom Sanity CMS und lokale Speicherung in einer JSON-Datei</li>
            <li>Lesen der Zeiten, in denen bestimmte Produkte nicht verkauft werden, aus einer JSON-Datei</li>
            <li>alle zwei Wochen: Berechnung, wie lange die Lagerbestände noch reichen, Erstellung eines Berichts und Sendung des Berichts an den #logistik-Channel im Daizu-Slack über einen Integromat-Webhook)</li>
          </ul>
        </dd>
      </dl>
      <h2>Wichtig</h2>
      <ul>
        <li>Am Betriebssystem auf dem Linode muss in regelmäßigen Abständen ein Systemupdate durchgeführt werden. Danach muss der Linode oft rebootet werden.</li>
        <li>Die Skripte laufen nur ca. 3-4 Wochen, danach stoppen sie aus unbekannten Gründen. Deshalb müssen die Skripte nach dieser Zeit gestoppt und neu gestartet werden.</li>
      </ul>
      <h2>Techniken</h2>
      <ul>
        <li>Management von Ubuntu-Systemen (Systemupdate, Starten von Skripten)</li>
        <li>Login über SSH</li>
        <li>NodeJS</li>
      </ul>
      <Pagination prev={{ url: "/billbee", title: "Billbee" }} next={{ url: "/vercel", title: "Vercel"}} />
    </div>
  )
}

export default Linode