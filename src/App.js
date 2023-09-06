
import './App.css';
import Catalog from './componentes/Wishlist';
import Home from './componentes/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './componentes/Navbar';




function App() {
  return (
    <Router>
      <Navbar />
  
        <Routes>
          <Route path='/catalog' element={<Catalog />}>
        
          </Route>
          <Route path='/' element={<Home/>}>
            
          </Route>
        </Routes>

    </Router>
    
    
  );
}

export default App;
