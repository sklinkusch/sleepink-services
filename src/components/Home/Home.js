/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div sx={{ textAlign: "justify", px: "25px" }}>
      <h1>
        Liste der sleep.ink-Services
      </h1>
      <ul>
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
      </ul>
    </div>
  )
}

export default Home