
import React, { useEffect, useState } from 'react'
import {  useParams, useNavigate } from 'react-router-dom';
import { pedirDatosUnicoProducto } from '../../mock/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
export default function ItemDetailContainer(  ) {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams()
    //console.log(itemId)
    const navigate = useNavigate()

    const handleVolver= () =>{
      navigate(-1)
    }
    
    
    useEffect(()=>{
        setLoading(true)

        pedirDatosUnicoProducto( )
            .then((resp)=>{
                setItem(resp.find((item) => item.id === Number(itemId)))
                
            })
            .catch((error) => {
                console.log('ERROR', error)
              })
            .finally(()=>{
                setLoading(false)
            })
    },[itemId]) 



  return (
    <div className="imagen-fondo-detalle">
      <div className="section-black-detail">
        <div className="cards-contenedor">
            <div className="boton-productos">
            <button className="boton-inicio"  onClick={handleVolver}>Volver</button>
            </div>
            
            {
                loading
                ?
                <p className="cargando">Cargando...</p>
                :
                <ItemDetail item={item}/>
                
            }
            <div className="boton-productos">
            <button className="boton-inicio"  onClick={handleVolver}>Volver</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}
