/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom"

function Shopify () {
  return (
    <div sx={{ textAlign: "justify", px: "25px", pb: "50px" }}>
      <h1>
        Shopify
      </h1>
      <h2>
        Stores
      </h2>
      <ul>
        <li>
          neue sleep.ink-Seite (<a href="https://sleep.ink" target="_blank" rel="noreferrer noopener">https://sleep.ink</a> und <a href="https://sleep-ink.myshopify.com" target="_blank" rel="noreferrer noopener">https://sleep-ink.myshopify.com</a>)
        </li>
        <li>
          Abo-Shop (<a href="https://abo.schlafdrink.de" target="_blank" rel="noreferrer noopener">https://abo.schlafdrink.de</a> und <a href="https://darmentgiftung.myshopify.com" target="_blank" rel="noreferrer noopener">https://darmentgiftung.myshopify.com</a>)
        </li>
      </ul>
      <h2>Genutzte Services</h2>
      <ul>
        <li>Seite des ersten Stores als Homepage</li>
        <li>Checkout für beide Stores und Landingpages</li>
        <li>Kundenaccounts für beide Stores (z.B. zur Aboverwaltung und zum erleichterten Checkout)</li>
        <li>API zur Abwicklung der Retouren</li>
      </ul>
      <h2>Techniken</h2>
      <ul>
        <li>
          <a href="https://www.shopify.com/ng/partners/shopify-cheat-sheet" target="_blank" rel="noopener noreferrer">Liquid (Shopify-eigene Template-Language)</a>
        </li>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vanilla-JavaScript</li>
        </ul>
      </ul>
      <div sx={{ mt: "50px" }}>
        <Link to="/">Zurück zur Hauptseite</Link>
      </div>
    </div>
  )
}

export default Shopify