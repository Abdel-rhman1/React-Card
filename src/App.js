
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Pages/Home';

import Navbar from './Components/Navbar';
import { CartProvider } from './context/Cart'
import { BrowserRouter, Route , Routes } from "react-router-dom";

import Cards from './Components/Cards';
function App(children) {
  return (
    <div className="App">
     <CartProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} redirectTo='home' />
            <Route path="/home" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
   
      </BrowserRouter>
     </CartProvider>
       
        
   
    </div>
  );
}

export default App;
