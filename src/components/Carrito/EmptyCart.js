import React from 'react'
import { Link } from 'react-router-dom'
import "./EmptyCart.css"

export default function EmptyCart() {
  return (
    <div className="contenedor-carrito">
        <h2>Carrito vacio</h2>

        <Link to="/productos" className="boton-inicio-vacio">Ir a comprar</Link>
    </div>
  )
}
