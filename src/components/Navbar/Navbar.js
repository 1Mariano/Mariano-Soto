import { AiFillHome, AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai'; 
import { IoIosListBox } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';
import './Navbar.css';
import { CartWidget } from '../CardWidget/CartWidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [estado, setEstado] = useState(false)
    
    const cambiarEstado = () =>{
      console.log(estado);
      estado ? setEstado(false) : setEstado(true);
      
      
    }
    return <header className={`header ${estado ? "active-header":""}`.trimEnd() }>
      <h1 className="nombre">compupro</h1>
      <nav className="menu">
        <ul className="lista">
          {/*evitar vulnerabilidades con "rel="noreferrer"*/}
          <Link to={"/"} className="botones-menu" rel="noreferrer"><AiFillHome className="iconos" /><li>Inicio</li></Link>
          <Link to={"/productos"} className="botones-menu" rel="noreferrer"><IoIosListBox className="iconos" /><li>Productos</li></Link>
          <Link to={"/carrito"} className="botones-menu" rel="noreferrer"><CartWidget className="iconos "/><li className="carrito-icon">Carrito</li></Link>
          <Link to={"/informacion"} className="botones-menu" rel="noreferrer"><AiFillInfoCircle className="iconos" /><li>Información</li></Link>
        </ul>
      </nav>
      <div className="header-mobile" onClick={cambiarEstado} >
        <AiFillCloseCircle className="header-mobile-icon iconos acciones" id="cerrar"  />
        <GiHamburgerMenu className="header-mobile-icon iconos acciones" id="abrir" />
      </div>
    </header>
}