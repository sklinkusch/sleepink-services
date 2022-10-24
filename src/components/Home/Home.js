/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div sx={{ textAlign: "justify", px: "25px" }}>
      <h1>
        Liste der sleep.ink-Services
      </h1>
      <ol>
        <li>
          <Link to="/shopify">Shopify</Link>
        </li>
        <li>
          <Link to="/billbee">Billbee</Link>
        </li>
        <li>
          <Link to="/linode">Linode</Link>
        </li>
        <li>
          <Link to="/vercel">Vercel</Link>
        </li>
        <li>
          <Link to="/integromat">Integromat</Link>
        </li>
        <li>
          <Link to="/asana">Asana</Link>
        </li>
        <li>
          <Link to="/slack">Slack</Link>
        </li>
        <li>
          <Link to="/netlify">Netlify</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
        <li>
          <Link to="/sanity">Sanity</Link>
        </li>
        <li>
          <Link to="/webseite">Struktur der alten Webseite</Link>
        </li>
        <li>
          <Link to="/weitere">Weitere Services</Link>
        </li>
      </ol>
      <div sx={{ mt: "50px" }}>
        © Stefan Klinkusch, 2022
      </div>
    </div>
  )
}

export default Home