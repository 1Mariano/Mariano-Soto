import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
//import { pedirDatos } from "../../mock/pedirDatos"
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


    /*pedirDatos()
        .then((resp) => {
          setItems( resp)
        })
        .catch((error) => {
          console.log('ERROR', error)
        })
        .finally(()=>{
          setLoading(false)
        })*/
  }, [])

  /*const ordenarItemsMenorPrecio = () => {
    setItems(items.sort((a,b) => a.precio - b.precio))
  }

  const ordenarItemsMayorPrecio = () => {
    setItems(items.sort((a,b) =>  b.precio - a.precio ))
  }

  const filtrarMarcaNvidia = () => {
    setItems(items.filter(item => item.marca === "nvidia"))
  }

  const filtrarMarcaAmd = () => {
    setItems(items.filter(item => item.marca === "amd"))
  }*/
      

  return (
      <div className="fondo-cards-contenedor">
        <div className="section-black">
          <div className="cards-contenedor">
            <div className="boton-productos">
            <button className="boton-inicio"  onClick={handleVolver}>Volver</button>
            </div>
            
            {
              loading
              ?
              <p className="cargando">Cargando...</p>
              : 
              <ItemList items={items}/>
              
              

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