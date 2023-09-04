
import './App.css';
import Catalog from './componentes/Wishlist';
import Home from './componentes/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
      <div className='container mt-5'>
      <div className='btn-group'>
        <Link to='/' className='btn btn-dark'>
          Inicio
        </Link>
        <Link to='/catalog' className='btn btn-dark'>
          Catalogo
        </Link>
        <Link to='/contacto' className='btn btn-dark'>
          Contacto
        </Link>
        <Link to='/wishlist' className='btn btn-dark'>
          Wishlist
        </Link>
      </div>
      <hr />
        <Routes>
          <Route path='/catalog' element={<Catalog />}>
        
          </Route>
          <Route path='/' element={<Home/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
