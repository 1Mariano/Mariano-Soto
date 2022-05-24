import { AiFillHome, AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai'; 
import { BsFillCartCheckFill } from 'react-icons/bs';
import { IoIosListBox } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';
import './Navbar.css';
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
          <a className="botones-menu active" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><AiFillHome className="iconos" /><li>Inicio</li></a>
          <a className="botones-menu" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><IoIosListBox className="iconos" /><li>Productos</li></a>
          <a className="botones-menu" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><BsFillCartCheckFill className="iconos" /><li>Carrito</li></a>
          <a className="botones-menu" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><AiFillInfoCircle className="iconos" /><li>Información</li></a>
        </ul>
      </nav>
      <div className="header-mobile" onClick={cambiarEstado} >
        <AiFillCloseCircle className="header-mobile-icon iconos acciones" id="cerrar"  />
        <GiHamburgerMenu className="header-mobile-icon iconos acciones" id="abrir" />
      </div>
    </header>
}