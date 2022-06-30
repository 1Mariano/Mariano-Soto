import React from 'react'
import Carrito from "../components/Carrito/Carrito";
import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import Inicio from "../components/Inicio/Inicio";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar"
import { Routes, Route, Navigate } from "react-router-dom"
import UserInfo from '../components/UserInfo/UserInfo';
function PrivateRoutes() {
  return (
    <>
        <div className="App">
        <Navbar />
        <UserInfo />
        <div className="app-letra">
        {/*<section className="cards-contenedor"><ItemListContainer /></section>*/}
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/productos' element={<ItemListContainer />}/>
            <Route path='/carrito' element={<Carrito />}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Navigate to={"/"}/>}/>            
            
            
        </Routes>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default PrivateRoutes