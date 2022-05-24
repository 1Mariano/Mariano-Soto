import React from 'react'
import "./ItemListContainer.css";
const ItemListContainer = ( { nombre, descripcion, precio, imagen })=> {

  return (
      <div className="cards">
        <h2>{nombre}</h2>
        <img className="imagen-cards" alt="imagen grafica" src={imagen} />
        <p>{descripcion}</p>
        <h2 className="precio">{precio}</h2>
        <button className="boton-cards">sumar al carrito</button>
      </div>
  )
}

export default ItemListContainer