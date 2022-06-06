import { Link } from "react-router-dom"
import "./Item.css"



export const Item = ( {item} ) =>{
    return (
        <div className="cards">
          <h2>{item.nombre}</h2>
          <img className="imagen-cards" alt="imagen grafica" src={item.imagen} />
          <p>{item.descripcion}</p>
          <h2 className="precio">{item.precio}</h2>
          
          
          <Link to={`/item/${item.id}`}>
            <button className="card-boton">ver detalles</button>
          </Link>
        </div>
    )
  }