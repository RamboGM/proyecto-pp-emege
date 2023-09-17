
import './App.css';
import Catalog from './componentes/Catalog';
import Home from './componentes/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './componentes/Navbar';
import MiCuenta from './componentes/MiCuenta.jsx';
import Contacto from './componentes/Contacto.jsx';




function App() {
  return (
    <Router>
      
      <Navbar />
      
  
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/catalog' exact element={<Catalog />}></Route>
          <Route path='/MiCuenta' exact element={<MiCuenta/>}></Route>
          <Route path='/contacto' exact element={<Contacto />}></Route>
          
        </Routes>

    </Router>
    
    
  );
}

export default App;
