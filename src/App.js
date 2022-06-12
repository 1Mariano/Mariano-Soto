

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar"
import { CartProvider } from "./context/CartContext";




function App() {
  

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          {/*<section className="cards-contenedor"><ItemListContainer /></section>*/}
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/productos' element={<ItemListContainer />}/>
            <Route path='/carrito' element={<Carrito />}/>
          </Routes>
          
        </div>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
