import { useState } from "react"
import { IoMdAdd } from 'react-icons/io'
import { GrFormSubtract } from 'react-icons/gr'
import "./ItemCount.css"

export const ItemCount = ( { cantidad, stock, inicial,cantidadItems, setCantidad,  onAdd }) =>{

    const [ estado, setEstado ] = useState(1);
    
    const agregarComponente = () =>{
        //if(estado > 0 && estado < stock)
        if(cantidad > 0 && estado < cantidad){
            setEstado(estado + 1)
            setCantidad(cantidadItems + 1)
            console.log(cantidadItems)
        }
        
    }

    const quitarComponente = () =>{
        //if(estado > 0 && estado < stock)
        if(cantidad > 0 && estado > 1){
            setEstado(estado - 1)
            setCantidad(cantidadItems - 1)
        }
        
    }

    
    
    return(
        <>
        <div className="contenedor-disponible">
            <p className={`cant-disp ${cantidad!==0 ? "cantidad-producto":"cantidad-producto-no"}`}>Cantidad Disponible: {cantidad}</p>
            <div className="contenedor-operacion">
                <button className="cont-boton"><GrFormSubtract className="icono-operacion" onClick={quitarComponente}/></button>
                <p className="cantidad">{cantidad!==0 ? estado : 0}</p>
                <button className="cont-boton"><IoMdAdd className="icono-operacion"  onClick={agregarComponente}/></button>
            </div>
        </div>
            <button onClick={onAdd} className={cantidad!==0 ? "boton-operacion" : "boton-operacion-no"}>{cantidad!==0 ? 'Agregar Al carrito' : 'No hay stock'}</button>
        </>
    )
}