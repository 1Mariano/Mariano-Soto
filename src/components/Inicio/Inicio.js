import { useEffect, useState } from "react"
import "./Inicio.css"
import { Link, useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


export default function Inicio() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams()
    useEffect(()=>{
        setLoading(true)

        // referencia a la base de datos 
        const datosRef = collection(db, "datos")
        const queryBuscador = query(datosRef, where("oferta", "==", true))

        // async llamar a firebase
        getDocs(queryBuscador)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(newItems)
                setItem(newItems)
            })
            .finally(()=>{
                setLoading(false)
            })

    },[itemId])

  return (
    <section className="inicio-section">
        <div className=" section-black">
            <h2 className="titulo">Ofertas de la Semana HOTWEEK</h2>
            
            <div className="contenedor-ofertas">
            {
                loading
                ?
                <p className="cargando">Cargando...</p>
                :
                
                <ItemList items={item}/>
                
            }
            
            </div>
            <div className="boton-contenedor-inicio">
                <Link to={"/productos"}>
                    <button className="boton-inicio ">Ver todos los productos</button>
                </Link>
            </div>
        </div>
    </section>
  )
}
