/** @jsxImportSource theme-ui */

import Pagination from "../Pagination/Pagination"

function Vercel () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Vercel</h1>
      <p>Vercel ist ein Service zum Deployment von Webseiten, aber auch von APIs. Hier sind zwei APIs mit Frontend abgelegt.</p>
      <h2>Repositorys</h2>
      <dl>
        <dt>support (<a href="https://ticket.sleep.ink" target="_blank" rel="noopener noreferrer">https://ticket.sleep.ink</a>)</dt>
        <dd>Erstellung von Support-Tickets (in Helpdesk) von der Webseite aus</dd>
        <dt>retouren (<a href="https://retouren.sleep.ink" target="_blank" rel="noopener noreferrer">https://retouren.sleep.ink</a>)</dt>
        <dd>Automatisierung des Retouren-Prozesses
          <ol>
            <li>Kunde, der etwas zurückgeben will, geht auf die Seite und findet dort ein Formular, über das er einen Retourenschein erstellen kann.</li>
            <li>Dieser Retourenschein wird ausgedruckt und der Rücksendung beigelegt.</li>
            <li>Bei der Bearbeitung wird im Lager die Rücksendung mit dem Retourenschein verglichen</li>
            <li>Dann wird von dem/der Bearbeiter*in der QR-Code auf dem Retourenschein gescannt, dieser enthält einen Link zu https://retouren.sleep.ink. Über Parameter werden die Bestellnummer und die zurückgesendeten Artikel eingelesen. Dann muss mit einem Passwort und Knopfdruck das noch bestätigt werden.</li>
            <li>Die Retouren-API verbindet sich dann mit der Shopify-API und wickelt die Rückzahlung ab. Die Rückzahlung geschieht über den gleichen Weg wie die Bezahlung.</li>
            <li>Bei einer Vorkassebestellung wird noch ein Task an die Buchhaltung in Asana erstellt.</li>
          </ol>
        </dd>
      </dl>
      <h2>Techniken</h2>
      <ul>
        <li>NodeJS</li>
        <li>ExpressJS für die API</li>
        <li><a href="https://www.npmjs.com/package/express-handlebars" target="_blank" rel="noopener noreferrer">Handlebars</a> für den Frontend</li>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vanilla-JavaScript</li>
        </ul>
      </ul>
      <Pagination prev={{ url: "/linode", title: "Linode" }} next={{ url: "/integromat", title: "Integromat" }} />
    </div>
  )
}

export default Vercel