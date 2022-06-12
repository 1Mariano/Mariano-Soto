import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const addItem = (item) => {
        setCarrito( [...carrito, item] )
    }

    
    

    const isInCart = (id) => {
        return carrito.some((prod)=> prod.id === id)
    }

    const totalPrice = () => {
        return carrito.reduce( (acc, prod) => acc += (prod.precio * prod.cantidadItems), 0)
      }

    const totalQuantity = () => {
        return carrito.reduce((acc, prod) => acc += prod.cantidadItems, 0)
    }

    const emptyCart = () => {
        setCarrito([])
    }

    const removeItem = (id) =>{
        setCarrito( carrito.filter((prod) => prod.id !== id))
    }

    

    return(
        <CartContext.Provider value={
            {
            carrito,
            addItem,
            isInCart,
            totalPrice,
            totalQuantity,
            emptyCart,
            removeItem
            }
        }>
            {children}
        </CartContext.Provider>
    )
}




