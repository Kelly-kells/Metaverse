
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Market } from "./components/pages/Market";
import { Packs } from "./components/pages/Packs";
import { Meta } from "./components/pages/Meta";
import { Token} from "./components/pages/Token";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <div className="pages">
     <Routes>
     <Route exact path="/" element={<Market />} />
     <Route path="/packs" element={<Packs />} />
     <Route path="/meta" element={<Meta />} />
     <Route path="/token" element={<Token />} /> 
      </Routes>
      </div>
    </Router>
    </div>
  );
}



export default App;
