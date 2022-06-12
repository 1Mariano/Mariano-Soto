import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


export default function ItemDetail( { item } ) {
  
  const [cantidadItems, setCantidadItems] = useState(1)
  //const [cambiarBoton, setCambiarBoton] = useState(false)

  const { addItem, isInCart } = useContext(CartContext)

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidadItems
      
    }   
    console.log(itemToCart)
    //setCambiarBoton(true)
    addItem(itemToCart)
  }
  
   
  return (
    <div className="item-estilo">
        
        <div className="item-caja-2">
          <h2 className="item-nombre-detail">{item.nombre}</h2>
          <p className="descripcion">{item.caracteristica}</p>
          <p className="item-precio-nombre">precio: <span className="item-precio">{item.precio}</span></p>
          {
            //cambiarBoton
            isInCart(item.id)
            ?
            <Link to={"/carrito"}><button className="boton-operacion">Ir al carrito</button></Link>
            :
          <ItemCount 
            nombre={item.nombre} 
            cantidad={item.cantidad} 
            stock={item.stock} 
            inicial={item.inicial}  
            cantidadItems={cantidadItems} 
            setCantidad={setCantidadItems} 
            onAdd={handleAgregar}
          />
          }
        </div>
        <div className="item-caja">
        <img className="item-imagen" src={item.imagen} alt={item.nombre}/>
        </div>
        
    
    </div>
  )
}
