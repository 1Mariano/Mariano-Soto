import React from 'react'
import "./ItemListContainer.css";


const ItemListContainer = ( { nombre, descripcion, precio, imagen, contador })=> {

  return (
      <div className="cards">
        <h2>{nombre}</h2>
        <img className="imagen-cards" alt="imagen grafica" src={imagen} />
        <p>{descripcion}</p>
        <h2 className="precio">{precio}</h2>
        
        <div>{contador}</div>
      </div>
  )
}

export default ItemListContainer