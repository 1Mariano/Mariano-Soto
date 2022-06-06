import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"


export default function ItemDetail( { item } ) {
  
  
  return (
    <div className="item-estilo">
        
        <div className="item-caja-2">
          <h2 className="item-nombre-detail">{item.nombre}</h2>
          <p className="descripcion">{item.caracteristica}</p>
          <p className="item-precio-nombre">precio: <span className="item-precio">{item.precio}</span></p>
          <ItemCount nombre={item.nombre} cantidad={item.cantidad} stock={item.stock} inicial={item.inicial}/>
        </div>
        <div className="item-caja">
        <img className="item-imagen" src={item.imagen} alt={item.nombre}/>
        </div>
        
    
    </div>
  )
}
