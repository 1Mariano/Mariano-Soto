import { useEffect, useState } from "react"
import "./Inicio.css"
import { pedirDatosUnicoProducto } from '../../mock/pedirDatos';
import { Link, useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';


export default function Inicio() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams()
    useEffect(()=>{
        setLoading(true)

        pedirDatosUnicoProducto( )
            .then((resp)=>{
                setItem(resp.filter((item) => item.oferta === true))
                
            })
            .catch((error) => {
                console.log('ERROR', error)
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
