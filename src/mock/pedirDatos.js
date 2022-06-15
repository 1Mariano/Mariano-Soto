import { Productos } from "./data";

export const pedirDatos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(Productos)
        }, 200)
    })
}

export const pedirDatosUnicoProducto = ( ) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(Productos)
        }, 200)
    })
}

