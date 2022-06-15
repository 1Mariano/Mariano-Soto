import { BsFillCartCheckFill } from 'react-icons/bs';
import { useCartContext } from '../../context/CartContext';
import "./CartWidget.css"

export  const CartWidget = () => {

    const { totalQuantity } = useCartContext()
    
    return <>
        <span className={`total-cart ${totalQuantity() === 0 ? "hidden" : ""}`}>{totalQuantity()}</span>
        <BsFillCartCheckFill className="iconos"/>
    </>
        

}