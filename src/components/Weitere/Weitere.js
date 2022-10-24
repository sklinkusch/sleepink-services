/** @jsxImportSource theme-ui */

import { Link } from 'react-router-dom'

function Weitere () {
  return (
    <div sx={{ px: "25px", textAlign: "justify", pb: "50px" }}>
      <h1>Weitere Services</h1>
      <h2>Webflow</h2>
      <p>Webflow wurde zur Erstellung von Landingpages verwendet. Bei Webflow handelt es sich um ein Tool zur Erstellung von Webseiten mit Hilfe eines Visual Builders. Diese Seiten haben teilweise einen eigenen Warenkorb und nutzen den Checkout von Shopify.</p>
      <h2>Helpdesk</h2>
      <p>Helpdesk/Freshdesk ist ein Tool zur Erstellung und Bearbeitung von Support-Tickets. Auch die API wurde von der Support-API verwendet.</p>
      <h2>Wallee</h2>
      <p>Wallee ist ein Service, der die Einrichtung von Abonnements auf bestimmte Produkte ermöglicht. Über einen zweiten Shopify-Store, der die Wallee-App nutzt, können so Abos verkauft werden. Dabei ist i.d.R. nur Kreditkartenzahlung erlaubt.
      </p>
      <h2>Cloudflare</h2>
      <p>Cloudflare ist der Service, der bestimmte Domains (wie sleep.ink) mit den entsprechenden Services verbindet. So wird z.B. sleep.ink mit Shopify verknüpft, imap.sleep.ink mit Google, ticket.sleep.ink und support.sleep.ink mit Vercel usw.</p>
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Weitere