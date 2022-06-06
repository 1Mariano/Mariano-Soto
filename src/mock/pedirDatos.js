import { Productos } from "./data";

export const pedirDatos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(Productos)
        }, 3000)
    })
}

export const pedirDatosUnicoProducto = ( ) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(Productos)
        }, 3000)
    })
}