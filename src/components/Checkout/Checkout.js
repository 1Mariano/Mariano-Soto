import { Navigate } from 'react-router-dom'
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { collection, getDocs, addDoc, writeBatch, query, where, documentId  } from "firebase/firestore"
import { db } from "../../firebase/config"
import "./Checkout.css"
import { Formik } from 'formik'
import * as Yup from 'yup'
import {  useNavigate } from 'react-router-dom';






const schema = Yup.object().shape({
  nombre: Yup.string()
              .required("Este campo es obligatorio")
              .min(4, "El nombre es demasiado corto")
              .max(30, "Maximo 30 caracteres"),
  email: Yup.string()
              .required("Este campo es obligatorio")
              .email("Formato de email inválido"),
  direccion: Yup.string()
              .required("Este campo es obligatorio")
              .min(4, "La direccion es demasiado corto")
              .max(30, "Maximo 30 caracteres")
})



export default function Checkout() {
    
    const { carrito, totalPrice ,emptyCart } = useCartContext()
    const navigate = useNavigate()
  
    const handleVolver= () =>{
    navigate(-1)
    }
    
    const [ orderId, setOrderID ] = useState(null)
    
    const generarOrden = async (values) => {
      const orden = {
        buyer: values,
        items: carrito.map(({id, cantidadItems, nombre, precio}) => ({id,cantidadItems, nombre, precio})),
        total: totalPrice()
      }

      const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "datos")
        
        const q = query(productosRef, where(documentId(), 'in', carrito.map(item => item.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
          const itemToUpdate = carrito.find(prod => prod.id === doc.id)

          if((doc.data().cantidad - itemToUpdate.cantidadItems ) >= 0){
            batch.update(doc.ref, {
              cantidad: doc.data().cantidad - itemToUpdate.cantidadItems
              
            })
          }  else {
            outOfStock.push(itemToUpdate)
          }

        })
        if(outOfStock.length === 0){
          addDoc(ordersRef, orden)
            .then((doc) => {
              batch.commit()
              setOrderID(doc.id)
              emptyCart()
            })
        } else {
          console.log(outOfStock)
          alert("Hay items sin stock")
        }
    }


    if(orderId){
      return(
        <div className="confirmacion-compra">
          <h2>Gracias por su compra</h2>
          <p className="confirmar-orden">Su numero de Orden es: <span>{orderId}</span></p>
        </div>
      )
    }

    if(carrito.length === 0){
      return <Navigate to="/"/>
    }

  return (
    <div className="contenedor-formulario">
        <div className='boton-contenedor-inicio-info'><button className="boton-inicio-info"  onClick={handleVolver}>Volver</button></div>
        <h2 className="confirmacion">Checkout</h2>
        
        
        <Formik 
          initialValues={ {
            nombre: '',
            email: '',
            direccion: ''
          } }
          onSubmit={generarOrden}
          validationSchema= {schema}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit} className="formulario-checkout">
                <div className="form-div">
                  <label className="label">Nombre:</label>
                  <input className="input-form"
                        value={formik.values.nombre} 
                        placeholder="Ingrese su Nombre"
                        type={"text"}
                        name="nombre"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                  {formik.touched.nombre && formik.errors.nombre ? (<p className="error-form">{formik.errors.nombre}</p>) : null}
                </div>
                <div className="form-div">
                  <label className="label">Email:</label>
                  <input className="input-form" 
                        value={formik.values.email}
                        placeholder="Ingrese su Email"
                        type={"text"}
                        name="email" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                  {formik.touched.email && formik.errors.email ? (<p className="error-form">{formik.errors.email}</p>) : null}
                </div>
                <div className="form-div">
                  <label className="label">Direccion:</label>
                  <input className="input-form" 
                        value={formik.values.direccion}
                        placeholder="Ingrese su Direccion" 
                        type={"text"}
                        name="direccion"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                  {formik.touched.direccion && formik.errors.direccion ? (<p className="error-form">{formik.errors.direccion}</p>) : null}
                </div>

              <button className="boton-form" type="submit">Enviar</button>
              </form>
            )}
        </Formik> 
        
        
        <button className="boton-form-cancelar" onClick={emptyCart}>Cancelar Mi Compra</button>
        <div className='boton-contenedor-inicio-info'><button className="boton-inicio-info"  onClick={handleVolver}>Volver</button></div>
    </div>
  )
}

