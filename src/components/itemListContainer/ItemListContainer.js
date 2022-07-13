import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import { ItemList } from '../ItemList/ItemList';
import {  useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemListContainer = ( )=> {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const navigate = useNavigate()
  
  const handleVolver= () =>{
    navigate(-1)
  }
  
  

  useEffect(()=>{
    setLoading(true)

    // defino la referencia a mi base de datos 
    const productosRef = collection(db, "datos")

    getDocs(productosRef)
      .then((resp) => {
        const newItems = resp.docs.map((doc) => {
          return{
            id: doc.id,
            ...doc.data()
          }
        })
        console.log(newItems)
        setItems(newItems)
      })
      .finally(()=>{
        setLoading(false)
      })


  }, [])

  
      
  const [selects, setSelects] = useState("")
  return (
      <div className="fondo-cards-contenedor">
        <div className="section-black">
          <div className="cards-contenedor">
            <div className="boton-productos">
            <button className="boton-inicio"  onClick={handleVolver}>Volver</button>
            </div>
            <div className="container-option">
              <select className="option-value" value={selects} onChange={e=>setSelects(e.target.value)}>
                <option>Todos</option>
                <option>AMD</option>
                <option>NVIDIA</option>
                <option>Menor a Mayor</option>
                <option>Mayor a Menor</option>
              </select>
            </div>
            
            {
              loading
              ?
              <p className="cargando">Cargando...</p>
              : 
              selects === "AMD" ? <ItemList items={items.filter(e=> e.marca === "amd")}/> : selects === "NVIDIA" ? <ItemList items={items.filter(e=>e.marca === "nvidia")}/> : selects === "Menor a Mayor" ? <ItemList items={items.sort((a, b) => a.precio - b.precio)}/> : selects === "Mayor a Menor" ? <ItemList items={items.sort((a, b) => b.precio - a.precio)} /> : <ItemList items={items} />  
              
              }
              
              

            
            
            <div className="boton-productos">
            <button className="boton-inicio"  onClick={handleVolver}>Volver</button>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default ItemListContainer