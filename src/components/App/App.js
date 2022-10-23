/** @jsxImportSource theme-ui */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Billbee from '../Billbee/Billbee';
import Home from '../Home/Home';
import Integromat from '../Integromat/Integromat';
import Linode from '../Linode/Linode';
import Shopify from '../Shopify/Shopify';
import Vercel from "../Vercel/Vercel";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <div className='App container' sx={{ textAlign: "center", backgroundColor: "whitesmoke", opacity: 1, width: "100%", minHeight: "96vh", fontFamily: "body" }}>
        <Routes>
          <Route path="/billbee" element={<Billbee />} />
          <Route path="/integromat" element={<Integromat />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/linode" element={<Linode />} />
          <Route path="/vercel" element={<Vercel />} />
          <Route path="" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
