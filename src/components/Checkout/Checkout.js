import { Navigate } from 'react-router-dom'
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { collection, getDocs, addDoc, writeBatch, query, where, documentId  } from "firebase/firestore"
import { db } from "../../firebase/config"
import "./Checkout.css"


export default function Checkout() {
    
    const { carrito, totalPrice ,emptyCart } = useCartContext()
    
    const [ orderId, setOrderID ] = useState(null)
    const [ values, setValues ] = useState({
      nombre: '',
      email: '',
      direccion: ''
    })

    const handleInputChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
      console.log(e.target.value)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        if(values.nombre.length < 5){
          alert("El nombre es demasiado corto")
          return
        }

        if(values.email.length < 5){
          alert("El email es invalido")
        }

        if(values.direccion.length < 5){
          alert("La direccion no es correcta")
        }

        const orden = {
          buyer: values,
          items: carrito.map(({id, cantidadItems, nombre, precio}) => ({id, cantidadItems, nombre, precio})),
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

          /*if(doc.data().cantidad === 0){
            batch.update(doc.ref, {
              inicial: 0
            })
        }*/
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
        <h2 className="confirmacion">Checkout</h2>
        <form onSubmit={handleSubmit} className="formulario-checkout">
            <div className="form-div">
              <label className="label">Nombre:</label>
              <input className="input-form" 
                     placeholder="Ingrese su Nombre"
                     name="nombre"
                     onChange={handleInputChange} />
            </div>
            <div className="form-div">
              <label className="label">Email:</label>
              <input className="input-form" 
                     placeholder="Ingrese su Email"
                     name="email" 
                     onChange={handleInputChange}/>
            </div>
            <div className="form-div">
              <label className="label">Direccion:</label>
              <input className="input-form" 
                     placeholder="Ingrese su Direccion" 
                     name="direccion"
                     onChange={handleInputChange}/>
            </div>
            

            <button className="boton-form" type="submit">Enviar</button>
        </form>
        <button className="boton-form-cancelar" onClick={emptyCart}>Cancelar Mi Compra</button>
    </div>
  )
}

