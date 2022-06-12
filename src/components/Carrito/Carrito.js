import React from 'react'
import { useCartContext } from '../../context/CartContext'


import "./Carrito.css"

export default function Carrito() {

  const { carrito, totalPrice, emptyCart, removeItem} = useCartContext()

  return (
    <div className="contenedor-carrito">
      <h2>Tu compra</h2>
      
      <div className="carritoItems-total">
      {
        carrito.map((item)=>(
          <div className="carritoItems-total-map" key={item.id}>
            <h5 className="map-tamaño ">{item.nombre}</h5>
            <p className="map-tamaño ">Cantidad: {item.cantidadItems}</p>
            
            <h6 className="map-tamaño ">Precio: ${item.precio} </h6>
            <h6 className="map-tamaño">Precio total: ${ item.precio * item.cantidadItems }</h6>

            <button className="boton-carrito boton-carrito-item " onClick={()=> removeItem(item.id)}>Remover Item</button>
          </div>
        ))
      }
      </div>
      <h4> Total: ${totalPrice()}</h4>

      <button className="boton-carrito" onClick={emptyCart}> Vaciar Carrito</button>
      
    </div>
  )
}
