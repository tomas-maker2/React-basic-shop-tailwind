import React from "react";
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Inicio from "./pages/Inicio";
import Shop from './pages/Shop'
import Navbar from "./components/Navbar";
import { APIContextProvider } from "./components/context/ApiContext";
import Cart from "./pages/Cart";


function App() {
  return (
    <div>
      <APIContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </APIContextProvider>
    </div>
  );
}

export default App;
