import { ItemCount } from "../ItemCount/ItemCount"


export const Item = ( {item} ) =>{
    return (
        <div className="cards">
          <h2>{item.nombre}</h2>
          <img className="imagen-cards" alt="imagen grafica" src={item.imagen} />
          <p>{item.descripcion}</p>
          <h2 className="precio">{item.precio}</h2>
          
          <div><ItemCount nombre={item.nombre} cantidad={item.cantidad} stock={item.stock} inicial={item.inicial}/></div>
          
        </div>
    )
  }