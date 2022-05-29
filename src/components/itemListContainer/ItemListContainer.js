import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import { pedirDatos } from "../../mock/pedirDatos"
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = ( )=> {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)

    pedirDatos()
        .then((resp) => {
          setItems( resp )
        })
        .catch((error) => {
          console.log('ERROR', error)
        })
        .finally(()=>{
          setLoading(false)
        })
  }, [])

  return (
      <div className="cards-contenedor">
        
        {
          loading
          ?
          "Cargando..."
          :
          <ItemList items={items}/>
        }
        
      </div>
  )
}

export default ItemListContainer