import React, { useEffect, useState } from 'react'
import "./Informacion.css"
import { Formik } from 'formik'
import * as Yup from 'yup'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'
import {  useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
    email: Yup.string()
              .required("Este campo es obligatorio")
              .email("Formato de email inválido"),
  })

export default function Informacion() {
    // array completo
    const [ordenBusqueda, setOrdenBusqueda] = useState([])
    // carga de la pagina
    const [loading, setLoading] = useState(true);
    // elementos filtrados cone le correo a buscar
    const [elementos, setElementos] = useState([])

    const busqueda = (values) => {
        const elem = ordenBusqueda.filter((e)=> e.buyer.email === values.email)
        setElementos(elem)
        
        
    }
    const navigate = useNavigate()
    const handleVolver= () =>{
        navigate(-1)
      }
    

    useEffect(()=>{
        setLoading(true)

        const ordenes = collection(db, "orders")

        getDocs(ordenes)
            .then((resp) => {
                const newOrden = resp.docs.map((doc)=>{
                    return{
                        ...doc.data()
                    }
                })
                setOrdenBusqueda(newOrden)
            })
            
            .finally(()=>{
                setLoading(false)
            })
    }, [])

    
  return (
    <div className="contenedor-informacion">
        <div className='boton-contenedor-inicio-info'><button className="boton-inicio-info"  onClick={handleVolver}>Volver</button></div>
        {
            loading ? <p className="cargando">Cargando...</p> :
        <Formik
            initialValues={
                {email:''}
                }
            validationSchema= {schema}
            onSubmit={(values) => {
                
                
                busqueda(values)
            }}>
                
                {(formik) => (
            <form className="formulario" onSubmit={formik.handleSubmit}>
                <label>Ingresar Su correo para Ver la compra:</label>
                <input className="correo"
                    value={formik.values.direccion}
                    placeholder="Ingrese su Correo"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ? (<p className="error-form">{formik.errors.email}</p>) : null}
                <button className='buscar' type="submit">Buscar</button>
            </form>
            )}
        </Formik>
        }
        
        {elementos.length === 0 ? <p className="correo-no">Correo no Encontrado</p> :
            elementos.map((e) => 
            <div key={e.items.id} className="compras">
                <p>Correo:{e.buyer.email}</p>
                <p>Direccion:{e.buyer.direccion}</p>
                
                    {e.items.map((s)=> <div key={e.items.id} className="compras-items"><p>------------Items------------</p><p>Producto:{s.nombre}</p><p>Cantidad:{s.cantidadItems}</p><p>ID:{s.id}</p><p>Precio:{s.precio}</p></div>)}
            
                <p>Precio Total:{e.total}</p>
            </div>) }
            <div className='boton-contenedor-inicio-info'><button className="boton-inicio-info"  onClick={handleVolver}>Volver</button></div>
    </div>
  )
}
