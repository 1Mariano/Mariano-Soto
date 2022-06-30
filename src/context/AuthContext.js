import React, { createContext, useContext, useState } from 'react'

const mockUsers = [
    {email: "mariano_ariel_97@outlook.com", pass: "102030"},
    {email: "marianosoto047@gmail.com", pass: "405060"}
]

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        loggedIn: false,
        userId: null
    })

    console.log(auth)

    const [error, setError] = useState({})

    const login = (values) => {
        const {email, password} = values
        setError({})

        const match = mockUsers.find((user) => user.email === email)

        if(match){
            if(match.pass === password){
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else {
                setError({
                    password: "Password Incorrecto"
                })
            }
        } else {
            setError({
                email: "Usuario no encontrado"
            })
        }
    }

    const logout = () => {
        setAuth({
            loggedIn: false,
            userId: null
        })
    }

    return(
        <AuthContext.Provider value={{auth, error, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}