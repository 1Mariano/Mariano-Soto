
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {  useParams, useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
export default function ItemDetailContainer(  ) {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams()
    const navigate = useNavigate()

    const handleVolver= () =>{
      navigate(-1)
    }
    
    
    useEffect(()=>{
        setLoading(true)

        //referencia a la base de datos
        const datosPorProducto = doc(db, "datos", itemId)
        // async llamar a firestores
        getDoc(datosPorProducto)
          .then((doc) => {
            setItem( {id: doc.id, ...doc.data()} )
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
