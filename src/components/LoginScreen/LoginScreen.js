import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import "./LoginScreen.css"

const LoginScreen = () => {

    const {login, error} = useAuthContext()

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

  return (
    <div className="login-screen">
        <div className="login-container">
            <h2>Login</h2>
            <form className="formulario-login" onSubmit={handleSubmit}>
                
                <label>Correo:</label>
                <input
                    type={"text"}
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder="E-mail de usuario"
                />
                <label>Contraseña:</label>
                <input
                    type={"password"}
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                    placeholder="Contraseña"
                />
                {error.password && <small>{error.password}</small>}

                <button type='submit' className="boton-enviar-login">Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default LoginScreen

